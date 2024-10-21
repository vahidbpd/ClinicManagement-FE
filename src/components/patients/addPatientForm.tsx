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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { fromDate, toCalendarDate } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
import { DateInput } from "@nextui-org/react";

const jobs = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const

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
      address: "",
      familyRelatives: [],
      nationalId: "",
      job: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <ScrollArea className="h-[500px] w-full pr-2">
          <div className="flex flex-col gap-5 px-1 w-full my-2">
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

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره موبایل</FormLabel>
                    <FormControl>
                      <Input placeholder="شماره موبایل" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="landlineNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تلفن ثابت</FormLabel>
                    <FormControl>
                      <Input placeholder="تلفن ثابت" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="otherTelephoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره موبایل دوم</FormLabel>
                    <FormControl>
                      <Input placeholder="شماره موبایل دوم" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="representative"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>معرف</FormLabel>
                    <FormControl>
                      <Input placeholder="معرف" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="familyRelatives"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>وابستگان</FormLabel>
                    <FormControl>
                      <Input placeholder="وابستگان" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nationalId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>کدملی</FormLabel>
                    <FormControl>
                      <Input placeholder="کدملی" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="disease"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>بیماری</FormLabel>
                    <Input placeholder="بیماری" {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="job"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شغل</FormLabel>
                    <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? jobs.find(
                            (job) => job.value === field.value
                          )?.label
                        : "انتخاب شغل"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="جستجوی شغل..." />
                    <CommandList>
                      <CommandEmpty>شعلی پیدا نشد</CommandEmpty>
                      <CommandGroup>
                        {jobs.map((job) => (
                          <CommandItem
                            value={job.label}
                            key={job.value}
                            onSelect={() => {
                              form.setValue("job", job.value)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                job.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {job.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="oldFileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره پرونده قدیمی</FormLabel>
                    <FormControl>
                      <Input placeholder="شماره پرونده قدیمی" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paperFileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره پرونده کاغذی</FormLabel>
                    <FormControl>
                      <Input placeholder="شماره پرونده کاغذی" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>آدرس</FormLabel>
                  <FormControl>
                    <Input placeholder="آدرس" {...field} />
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
                  <FormLabel>توضیحات</FormLabel>
                  <FormControl>
                    <Input placeholder="توضیحات" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </ScrollArea>

        <Button className="w-full mt-2" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AddPatientForm;
