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
  milestone1desc: z
    .string()
    .min(1, "please provide milestone description")
    .max(150, "description of project cannot be more than 400 characters long"),
  milestone1cost: z.coerce.number().min(1),
  milestone2desc: z
    .string()
    .min(1, "please provide milestone description")
    .max(150, "description of project cannot be more than 400 characters long"),
  milestone2cost: z.coerce.number().min(1),
  milestone3desc: z
    .string()
    .min(1, "please provide milestone description")
    .max(150, "description of project cannot be more than 400 characters long"),
  milestone3cost: z.coerce.number().min(1),
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
                    if (e.target.files) {
                      field.onChange(e.target.files[0]);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="border-l-4 px-5 space-y-2">
          <div className="flex items-center space-x-5">
            <div className="bg-[#2d2d2d] text-white p-5 border rounded-full w-2 h-2 flex items-center justify-center">
              1
            </div>
            <FormField
              name="milestone1desc"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-4 col-span-1">
                  <FormControl>
                    <Input placeholder="Milestone Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="milestone1cost"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-4 col-span-1">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Milestone Cost"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center space-x-5">
            <div className="bg-[#2d2d2d] text-white p-5 border rounded-full w-3 h-3 flex items-center justify-center">
              2
            </div>
            <FormField
              name="milestone2desc"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-4 col-span-1">
                  <FormControl>
                    <Input placeholder="Milestone Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="milestone2cost"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-4 col-span-1">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Milestone Cost"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center space-x-5">
            <div className="bg-[#2d2d2d] text-white p-5 border rounded-full w-3 h-3 flex items-center justify-center">
              3
            </div>
            <FormField
              name="milestone3desc"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-4 col-span-1">
                  <FormControl>
                    <Input placeholder="Milestone Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="milestone3cost"
              control={form.control}
              render={({ field }) => (
                <FormItem className="md:col-span-4 col-span-1">
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Milestone Cost"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Separator className="my-4" />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default Page;
