import { diseaseSchema, jobSchema } from "@/schema";
import { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { AddDoctorWorkDoctorProps, DoctorWork } from "./doctor.types";

type Disease = z.infer<typeof diseaseSchema>;
type Job = z.infer<typeof jobSchema>;

export type onCheckedChangeType = {
  onCheckedChange: (isChecked: boolean | string, id: string) => void;
};

export type AddPatientSelectProps = {
  selectedItems: string[] | DoctorWork[]
  onSelectedItemsChange?: (item: string[]) => void;
};

export type DiseaseWithId = Disease & {
  id: string;
};

export type JobsWithId = Job & {
  id: string;
};

export type AddPatientSelectDataProps = AddPatientSelectProps | AddDoctorWorkDoctorProps & {
  title: string;
  description: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  data: DiseaseWithId[] | JobsWithId[];
  // type: "disease" | "patient" | "job";
  children: React.ReactNode;
};

export type DiseaseSelectItemProps = DiseaseWithId &
  onCheckedChangeType & {
    isChecked: boolean;
  };



