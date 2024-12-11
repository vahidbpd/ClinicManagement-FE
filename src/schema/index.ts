import { CalendarDate } from "@internationalized/date";
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

export const addUserSchema = z.object({
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
});

export const addPatientSchema = addUserSchema.extend({
  familyRelatives: z.array(z.string()),
  job: z.array(z.string()),
  representative: z.string(),
  oldFileNumber: z.string().optional(),
  paperFileNumber: z.string().optional(),
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

export const dayOfWork = z.enum([
  "sat",
  "sun",
  "mon",
  "tus",
  "wed",
  "thu",
  "fri",
]);

export const doctorWorkSchema = z.object({
  day: dayOfWork,
  startAt: z.string().time(),
  endAt: z.string().time(),
});

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
  maximumDailyVisit: z.number({message:"لطفا یک مقدار معتبر عددی وارد کنید"}).min(1,{message:"لطفا یک مقدار برای تعداد ویزیت در روز انتخاب کنید"}),
  doctorServices: z.array(z.string()),
  doctorWork: z.array(doctorWorkSchema),
});

export const expertiseSchema = z.object({
  title: z.string().min(1, { message: "یک عنوان برای تخصص انتخاب کنید" }),
  description: z.string(),
});

export const serviceSchema = z.object({
  title: z.string().min(1, { message: "یک عنوان برای خدمات انتخاب کنید" }),
  description: z.string(),
});

export const addPersonnelsSchema = z.object({
  user: addUserSchema,
  role: z.string(),
});
