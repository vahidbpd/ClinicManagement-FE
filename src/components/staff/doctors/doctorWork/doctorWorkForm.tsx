"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { doctorWorkSchema } from "@/schema";
import { TimeInput } from "@nextui-org/date-input";
import { parseTimeString } from "@/lib/parseTimeString";
import { TimeValue } from "@react-types/datepicker";
import { AddDoctorWorkDoctorWithIdProps } from "@/types/doctor.types";
import {
  isStartEarlierThanEnd,
  isTimePeriodOverlapping,
} from "@/lib/timeUtils";
import { useEffect } from "react";
import { daySelectData } from "@/data/DayOfWeek";
import { toast } from "sonner";

const DoctorWorkForm: React.FC<AddDoctorWorkDoctorWithIdProps> = ({
  onSelectedItemsChange,
  selectedItems,
  index,
  setOpen,
}) => {
  const form = useForm<z.infer<typeof doctorWorkSchema>>({
    resolver: zodResolver(doctorWorkSchema),
    defaultValues: {
      day:
        index !== null && selectedItems[index].day
          ? selectedItems[index].day
          : undefined,
      startAt:
        index !== null && selectedItems[index].startAt
          ? selectedItems[index].startAt
          : undefined,
      endAt:
        index !== null && selectedItems[index].endAt
          ? selectedItems[index].endAt
          : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof doctorWorkSchema>) {
    console.log(values);

    if (!isStartEarlierThanEnd(values.startAt, values.endAt)) {
      console.log('melika inja run shod')
      form.setError("startAt", {
        message: "زمان شروع نمیواند از ساعت پایان بزرگ تر باشد",
      });
      return  
    }
    if (index === null) {
      if (isTimePeriodOverlapping(selectedItems, values)) {
        console.log("this is run");
        form.setError("startAt", {
          message:
            "بازه زمانی انتخابی با دیگر بازه های زمانی این روز تداخل دارد.",
        });
        form.setError("endAt", {
          message:
            "بازه زمانی انتخابی با دیگر بازه های زمانی این روز تداخل دارد.",
        });
      } else {
        toast.success("زمان کاری با موفقیت اضافه شد.");
        onSelectedItemsChange([...selectedItems, values]);
        setOpen(false);
      }
    } else {
      const updatedArray = [...selectedItems];
      updatedArray[index] = values;
      onSelectedItemsChange(updatedArray);
      setOpen(false);
      toast.success("زمان کاری با موفقیت ویرایش شد.");
    }

    console.log(selectedItems);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ScrollArea className="h-[500px] w-full pr-2">
          <div className="flex flex-col gap-5 px-1 w-full my-2">
            <FormField
              control={form.control}
              name="day"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>روز</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="لطف یک روز انتخاب کنید" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {daySelectData.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="startAt"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>ساعت شروع</FormLabel>
                    <FormControl>
                      <TimeInput
                        label="ساعت شروع"
                        hourCycle={24}
                        classNames={{
                          base: "leftToRight",
                          input: "leftToRight",
                        }}
                        onChange={(e) => {
                          console.log(e.toString());
                          field.onChange(e.toString());
                        }}
                        value={
                          field.value
                            ? (parseTimeString(field.value) as TimeValue)
                            : null
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endAt"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>ساعت پایان</FormLabel>
                    <FormControl>
                      <TimeInput
                        label="ساعت پایان"
                        hourCycle={24}
                        classNames={{
                          base: "leftToRight",
                          input: "leftToRight",
                        }}
                        onChange={(e) => {
                          console.log(e.toString());
                          field.onChange(e.toString());
                        }}
                        value={
                          field.value
                            ? (parseTimeString(field.value) as TimeValue)
                            : null
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </ScrollArea>
        <Button
          className="w-full mt-2"
          type="button"
          onClick={form.handleSubmit(onSubmit)}
        >
          افزودن شغل
        </Button>
      </form>
    </Form>
  );
};

export default DoctorWorkForm;
