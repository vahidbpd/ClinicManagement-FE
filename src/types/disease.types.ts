import { diseaseSchema } from "@/schema";
import { Dispatch, SetStateAction } from "react";
import { z } from "zod";

type Disease = z.infer<typeof diseaseSchema>;

type onCheckedChangeType = {
  onCheckedChange: (isChecked: boolean | string, id: string) => void;
};

export type AddPatientSelectProps = {
  selectedItems: string[] | [];
  onSelectedItemsChange: (disease: string[] | []) => void;
};

type DiseaseWithId = Disease & {
  id: string;
};

export type AddPatientSelectDataProps = AddPatientSelectProps & {
  title: string;
  description: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  data: DiseaseWithId[];
  type: "disease" | "patient";
};

export type DiseaseSelectItemProps = DiseaseWithId &
  onCheckedChangeType & {
    isChecked: boolean;
  };
