import { diseaseSchema } from "@/schema";
import { z } from "zod";

type Disease = z.infer<typeof diseaseSchema>;

type onCheckedChangeType = {
  onCheckedChange: (isChecked: boolean | string, id: string) => void;
};

export type DiseaseSelectProps = {
  selectedDiseases: string[] | [];
  onSelectedDiseasesChange: (disease: string[] | []) => void;
};

export type DiseaseSelectItemProps = Disease &
  onCheckedChangeType & {
    id: string;
    isChecked: boolean;
  };
