"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { jobSchema } from "@/schema";
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

const AddJobForm = () => {
  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof jobSchema>) {

    console.log(values);
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
                  <FormLabel>نام شغل</FormLabel>
                  <FormControl>
                    <Input placeholder="نام شغل" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </ScrollArea>
        <Button className="w-full mt-2" type="submit">
          افزودن شغل
        </Button>
      </form>
    </Form>
  );
};

export default AddJobForm;
