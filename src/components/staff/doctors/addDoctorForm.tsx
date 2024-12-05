"use client";

import { z } from "zod";
import { doctorSchema } from "@/schema/index";
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
import { ScrollArea } from "../../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fromDate, toCalendarDate } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
import { DateInput } from "@nextui-org/react";
import AddDoctorExpertise from "./addDoctorExpertise";
import AddDoctorService from "./addDoctorService";
import AddDoctorDoctorWork from "./addDoctorDoctorWork";

const AddDoctorForm = ({ id }: { id: string | null }) => {
  const todayDate = fromDate(
    new Date(new Date().toISOString().split("T")[0]),
    "Asia/Tehran"
  );
  const form = useForm<z.infer<typeof doctorSchema>>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: undefined,
      birthDate: toCalendarDate(todayDate),
      phoneNumber: "",
      landlineNumber: "",
      otherTelephoneNumber: "",
      address: "",
      nationalId: "",
      description: "",
      expertise: [],
      maximumDailyVisit: 0,
      doctorServices: [],
      medicalSystemNumber: "",
      doctorWork: [],
    },
  });

  function onSubmit(values: z.infer<typeof doctorSchema>) {
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
                  <FormItem className="w-1/2">
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
                name="nationalId"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>کدملی</FormLabel>
                    <FormControl>
                      <Input placeholder="کدملی" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>تاریخ تولد</FormLabel>
                  <FormControl>
                    <I18nProvider locale="fa-IR-u-ca-persian">
                      <DateInput
                        variant="bordered"
                        className="max-w-md"
                        label="تاریخ تولد"
                        value={toCalendarDate(field.value)}
                        onChange={(value) => {
                          field.onChange(value);
                        }}
                      />
                    </I18nProvider>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
            </div>

            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="medicalSystemNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>کد نظام پزشکی</FormLabel>
                    <FormControl>
                      <Input placeholder="کد نظام پزشکی" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maximumDailyVisit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>حداکثر تعداد ویزیت در روز</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="حداکثر تعداد ویزیت در روز"
                        {...field}
                        onChange={(value) => field.onChange(+value)}
                        type="number"
                      />
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
              name="expertise"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تخصص ها</FormLabel>
                  <FormControl>
                    <AddDoctorExpertise
                      onSelectedItemsChange={field.onChange}
                      selectedItems={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="doctorServices"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>خدمات پزشک</FormLabel>
                  <FormControl>
                    <AddDoctorService
                      onSelectedItemsChange={field.onChange}
                      selectedItems={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="doctorWork"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>زمان کاری پزشک</FormLabel>
                  <FormControl>
                    <AddDoctorDoctorWork
                      onSelectedItemsChange={field.onChange}
                      selectedItems={field.value}
                    />
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
          افزودن بیمار
        </Button>
      </form>
    </Form>
  );
};

export default AddDoctorForm;
