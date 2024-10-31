"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { medicineSchema } from "@/schema";
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

const AddMedicineForm = () => {
  const form = useForm<z.infer<typeof medicineSchema>>({
    resolver: zodResolver(medicineSchema),
    defaultValues: {
      title: "",
      description: ""
    },
  });

  function onSubmit(values: z.infer<typeof medicineSchema>) {

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
                  <FormLabel>نام دارو</FormLabel>
                  <FormControl>
                    <Input placeholder="نام دارو" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>توضیحات دارو</FormLabel>
                  <FormControl>
                    <Input placeholder="توضیحات دارو" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </ScrollArea>
        <Button className="w-full mt-2" type="submit">
          افزودن دارو
        </Button>
      </form>
    </Form>
  );
};

export default AddMedicineForm;
