"use client";

import { z } from "zod";
import { addPatientSchema } from "@/schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  fromDate,
  toCalendarDate,
} from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
import { DateInput } from "@nextui-org/react";

const AddPatientForm = () => {
  const todayDate = fromDate(
    new Date(new Date().toISOString().split("T")[0]),
    "Asia/Tehran"
  );
  const form = useForm<z.infer<typeof addPatientSchema>>({
    resolver: zodResolver(addPatientSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: undefined,
      birthDate: toCalendarDate(todayDate),
      phoneNumber: "",
      landlineNumber: "",
      otherTelephoneNumber: "",
      redisentioalAddress: "",
      contact_info: "",
      nationalId: "",
      job: undefined,
      representative: "",
      oldFileNumber: "",
      paperFileNumber: "",
      description: "",
      disease: [],
    },
  });

  function onSubmit(values: z.infer<typeof addPatientSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ScrollArea className="h-[500px] w-full">
          <div className="flex flex-col gap-5 w-full px-1">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نام</FormLabel>
                    <FormControl>
                      <Input placeholder="نام" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نام خانوادگی</FormLabel>
                    <FormControl>
                      <Input placeholder="نام خانوادگی" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2 justify-between">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>جنسیت</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="یک جنسیت انتخاب کنید." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">مرد</SelectItem>
                        <SelectItem value="female">زن</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاریخ تولد</FormLabel>
                    <FormControl>
                      <I18nProvider locale="fa-IR-u-ca-persian">
                        <DateInput
                          variant="bordered"
                          className="max-w-md"
                          label="تاریخ تولد"
                          value={toCalendarDate(field.value)}
                          onChange={(value) => {
                            console.log(value);
                            field.onChange(value);
                          }}
                        />
                      </I18nProvider>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </ScrollArea>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddPatientForm;
