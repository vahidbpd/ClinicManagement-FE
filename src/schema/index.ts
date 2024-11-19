import { CalendarDate } from "@internationalized/date";
import { time } from "console";
import { z } from "zod";

export const loginSchema = z.object({
  userName: z.string().min(1, { message: "نام کاربری الزامی است" }),
  password: z.string().min(1, { message: "رمز عبور الزامی است" }),
});

const calendarDateSchema = z.custom<CalendarDate>(
  (value) => {
    return value instanceof CalendarDate;
  },
  {
    message: "Invalid date format",
  }
);

export const addPatientSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(["male", "female"]),
  birthDate: calendarDateSchema,
  phoneNumber: z
    .string()
    .min(11, { message: "شماره موبایل باید حداقل 11 رقم باشد" })
    .max(12, { message: "شماره موبایل حداکثر میتواند 12 رقم باشد" }),
  landlineNumber: z.string(),
  otherTelephoneNumber: z
    .string()
    .min(11, { message: "شماره موبایل باید حداقل 11 رقم باشد" })
    .max(12, { message: "شماره موبایل حداکثر میتواند 12 رقم باشد" }),
  address: z.string(),
  familyRelatives: z.array(z.string()),
  nationalId: z.string(),
  job: z.array(z.string()),
  representative: z.string(),
  oldFileNumber: z.string().optional(),
  paperFileNumber: z.string().optional(),
  description: z.string(),
  disease: z.array(z.string()),
});

export const diseaseSchema = z.object({
  title: z.string().min(1, { message: "یک عنوان برای بیماری انتخاب کنید" }),
  description: z.string(),
});

export const jobSchema = z.object({
  title: z.string().min(1, { message: "یک عنوان برای شغل انتخاب کنید" }),
});

export const medicineSchema = z.object({
  title: z.string().min(1, { message: "یک عنوان برای دارو وارد کنید" }),
  description: z.string().optional(),
});

const dayOfWork = z.enum(["sat", "sun", "mon", "tus", "wed", "thu", "fri"]);

export const doctorSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.enum(["male", "female"]),
  birthDate: calendarDateSchema,
  phoneNumber: z
    .string()
    .min(11, { message: "شماره موبایل باید حداقل 11 رقم باشد" })
    .max(12, { message: "شماره موبایل حداکثر میتواند 12 رقم باشد" }),
  landlineNumber: z.string(),
  otherTelephoneNumber: z
    .string()
    .min(11, { message: "شماره موبایل باید حداقل 11 رقم باشد" })
    .max(12, { message: "شماره موبایل حداکثر میتواند 12 رقم باشد" }),
  address: z.string(),
  nationalId: z.string(),
  description: z.string(),
  medicalSystemNumber: z
    .string()
    .min(1, { message: "لطفا شماره نظام پزشکی را وارد کنید" }),
  expertise: z.array(z.string()),
  maximumDailyVisit: z.number(),
  doctorServices: z.array(z.string()),
  doctorWork: z.array(
    z.object({
      day: dayOfWork,
      startAt: z.string().time(),
      endAt: z.string().time(),
    })
  ),
});
