import { TimeValue } from "@react-types/datepicker";
import { doctorWorkSchema } from "@/schema";
import { z } from "zod";
import { CustomTriggerButton } from "./itemsList.types";
type dayOfWork = "sat" | "sun" | "mon" | "tus" | "wed" | "thu" | "fri";

export type DoctorWorkFunction = (index: number) => void;
export interface DoctorWorkItemProps {
  index: number;
  day: dayOfWork;
  startAt: string;
  endAt: string;
  onDelete: DoctorWorkFunction;
  onEdit: DoctorWorkFunction;
  children: React.ReactNode
}

export type DoctorWork = z.infer<typeof doctorWorkSchema>;

export type AddDoctorWorkDoctorProps = {
  selectedItems: DoctorWork[];
  onSelectedItemsChange: (item: DoctorWork[]) => void;
};

export type AddDoctorWorkDoctorWithIdProps = AddDoctorWorkDoctorProps & CustomTriggerButton & {
  index: number | null;
};
