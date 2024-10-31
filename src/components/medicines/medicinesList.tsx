"use client";

import { Pill } from "lucide-react";
import ItemsList from "../listItems/itemsList";
import AddMedicines from "./addMedicines";

const medicines = [
  {
    title: "borophen",
    description: "مسکن و ارامبخش اپیودی",
  },
  {
    title: "borophen",
    description: "مسکن و ارامبخش اپیودی",
  },
  {
    title: "borophen",
    description: "مسکن و ارامبخش اپیودی",
  },
  {
    title: "borophen",
    description: "مسکن و ارامبخش اپیودی",
  },
  {
    title: "borophen",
    description: "مسکن و ارامبخش اپیودی",
  },
  {
    title: "borophen",
    description: "مسکن و ارامبخش اپیودی",
  },
  {
    title: "borophen",
    description: "مسکن و ارامبخش اپیودی",
  },
];

const tableHeader = [
  {
    title: "عنوان دارو",
  },
  {
    title: "توضیحات دارو",
  },
];

interface MedicinesListItem {
  title: string;
  description: string;
}

const MedicinesList = () => {
  return (
    <ItemsList
      AddingComponent={AddMedicines}
      Icon={Pill}
      title="داروها ها"
      tableHeaders={tableHeader}
      tableRows={medicines}
    />
  );
};

export default MedicinesList;
