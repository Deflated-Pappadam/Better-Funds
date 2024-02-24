// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BetterFunds is ERC20 {
    struct Idea {
        address innovator;
        uint contributed;
        uint goal;
        uint startAt;
        uint endAt;
        bool completed;
    }

    uint public count;
    uint public maxDuration;
    address owner;

    mapping(uint => Idea) public ideas;
    mapping(uint => mapping(address => uint)) public totalContributed;
    mapping(uint => mapping(address => uint)) public totalTokens;
    mapping(uint => address[]) internal contributors;

    event Launch(
        uint id,
        address indexed creator,
        uint256 startAt
    );
    event Cancel(uint id);
    event Contribute(uint indexed id, address indexed caller, uint amount);
    event Refund(uint id, address indexed caller, uint amount);
    event Mint(uint id, address indexed  contributor, uint token_count);
    event Log(uint val);


    constructor() ERC20("Pappadam Token", "PDM") {
        owner = msg.sender;
        maxDuration = 2592000;
        count = 0;
    }

    function launch(uint _goal) external {
        ideas[count] = Idea({
            innovator: msg.sender,
            contributed: 0,
            goal: _goal,
            startAt: block.timestamp,
            endAt: block.timestamp + maxDuration,
            completed: false
        });
        count += 1;
        emit Launch(count,msg.sender,block.timestamp);
    }

    function cancel(uint _id) external {
        Idea memory idea = ideas[_id];
        require(idea.innovator == msg.sender || idea.innovator == owner, "You did not create this Campaign");
        require(block.timestamp < idea.startAt, "Campaign has already started");
        delete ideas[_id];
        emit Cancel(_id);
    }

    function contribute(uint _id) external payable {
        Idea storage idea = ideas[_id];
        require(msg.value > 0, "Cannot contribute nothing!");
        require(block.timestamp <= idea.endAt, "Campaign has already ended");
        idea.contributed += msg.value/1e9;
        if (totalContributed[_id][msg.sender] == 0) {
            contributors[_id].push(msg.sender);
        }
        totalContributed[_id][msg.sender] += msg.value/1e9; // add gwei value
        totalTokens[_id][msg.sender] += (msg.value/1e9)/100;

        emit Contribute(_id, msg.sender, msg.value);

        if (idea.contributed >= idea.goal) {
            emit Log(contributors[_id].length);
            for (uint i = 0; i < contributors[_id].length; i++) {
                address contributor = contributors[_id][i];
                uint tokensToMint = totalTokens[_id][contributor];
                _mint(contributor, tokensToMint * (10 ** decimals()));
                emit Mint(_id, contributor, tokensToMint);
            }
            idea.completed = true;
        }
    }

    function buyProduct(uint price) public  {
        _burn(msg.sender, price);
    }

    // function withdraw(uint _id) public {
    //     Idea storage idea = ideas[_id];
    //     for (uint i = 2; i >= 0; i--) {
    //         // if (idea.invested >= idea.milestones[i]) {
    //         //     token.transferFrom(msg.sender, idea.innovator, totalTokens[_id][idea.innovator]);
    //         //     if (i==2) {
    //         //         idea.completed = true;
    //         //     }
    //         // }
    //     }
    // }

    // COMMENTED TO REDUCE GAS FEES
    // function refund(uint _id) external {
    //     Idea memory idea = ideas[_id];
    //     require(block.timestamp > idea.endAt, "not ended");

    //     uint bal = totalInvested[_id][msg.sender];
    //     totalInvested[_id][msg.sender] = 0;
    //     (bool sent,) = payable(idea.innovator).call{value: (idea.invested-5) * (1 wei)}("");
    //     if(sent) {
    //         idea.completed = true;
    //     }

    //     emit Refund(_id, msg.sender, bal);
    // }
}