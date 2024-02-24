"use client";

import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@radix-ui/react-separator";

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "name of project must be atleast 1 character long",
    })
    .max(50, {
      message: "name of project cannot be more than 50 characters long",
    }),
  description: z
    .string()
    .min(100, {
      message: "description of project must be atleast 100 character long",
    })
    .max(400, {
      message: "description of project cannot be more than 400 characters long",
    }),
  coverImage: z
    .instanceof(File)
    .refine(
      (file) => file.size < 2 * 1024 * 1024,
      "file size must be less than 2M"
    )
    .refine(
      (file) => file.type?.startsWith("image"),
      "the provided file is not an image"
    ),
});

function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-10 border m-10 rounded-md"
      >
        <h1 className="text-3xl font-bold">Enter Project Details</h1>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="Your project name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="coverImage"
          control={form.control}
          render={({ field }) => (
            <FormItem className="md:col-span-4 col-span-1">
              <FormLabel>Cover Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  className=" border-slate-300"
                  onChange={(e) => {
                    // Convert the FileList to an array and update the form state
                    const filesArray = Array.from(e.target.files || []);
                    field.onChange(filesArray);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator/>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default Page;
