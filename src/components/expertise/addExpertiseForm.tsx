"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { expertiseSchema } from "@/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { AddFormProps } from "@/types/itemsList.types";

const AddExpertiseForm: React.FC<AddFormProps> = ({ id, setOpen }) => {
  const form = useForm<z.infer<typeof expertiseSchema>>({
    resolver: zodResolver(expertiseSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof expertiseSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    if (setOpen) {
      setOpen(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ScrollArea className="h-[500px] w-full pr-2">
          <div className="flex flex-col gap-5 px-1 w-full my-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام تخصص</FormLabel>
                  <FormControl>
                    <Input placeholder="نام تخصص" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>توضیحات</FormLabel>
                  <FormControl>
                    <Input placeholder="توضیحات" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </ScrollArea>
        <Button
          className="w-full mt-2"
          type="button"
          onClick={form.handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AddExpertiseForm;
