import { LucideProps } from "lucide-react";
import React, {
  Dispatch,
  ForwardRefExoticComponent,
  RefAttributes,
  SetStateAction,
} from "react";
import {
  AddPatientSelectProps,
  DiseaseWithId,
  JobsWithId,
  onCheckedChangeType,
} from "./disease.types";
import { AddDoctorWorkDoctorWithIdProps, DoctorWork } from "./doctor.types";

export type ItemListHederProps = {
  title: string;
  AddingComponent: React.ComponentType<{ id: string | null }>;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

interface TableHeader {
  title: string;
}

type TableRows = Record<string, string>;

type TableItems = {
  tableHeaders: TableHeader[];
  tableRows: TableRows[];
};
export type ItemsTableProps = TableHeader & TableItems;

export type ItemListProps = ItemListHederProps & TableItems;
export interface CustomTriggerButton {
  customTriggerButton?: React.ReactNode;
}

export type AddItemProps = CustomTriggerButton & {
  title: string;
  id: string | number | null;
  AddItemForm?: React.ComponentType<{ id: string | null }>;
  children?: React.ReactNode;
};

export type doctorWorkOnChange = (item: DoctorWork[]) => void;

export type AddItemSelectDataProps = AddPatientSelectProps & {
  title: string;
  description: string;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  data?: DiseaseWithId[] | JobsWithId[];
  // type: "disease" | "patient" | "job";
  AddItemForm?: React.ComponentType<AddDoctorWorkDoctorWithIdProps>;
  doctorWorkOnChange?: doctorWorkOnChange;

  children: React.ReactNode;
};

export type ItemSelectItemProps = DiseaseWithId &
  onCheckedChangeType & {
    isChecked: boolean;
  };

export type AddItemSelectProps = {
  selectedItems: string[] | [];
  onSelectedItemsChange: (item: string[] | []) => void;
};
