"use client";
import { Frown } from "lucide-react";
import ItemsList from "../listItems/itemsList";
import AddDisease from "./addDisease";

const diseases = [
  {
    title: "مهندس",
  },
  {
    title: "دکتر",
  },
  {
    title: "مهندس",
  },
  {
    title: "دکتر",
  },
  {
    title: "مهندس",
  },
  {
    title: "دکتر",
  },
  {
    title: "مهندس",
  },
  {
    title: "دکتر",
  },
  {
    title: "مهندس",
  },
  {
    title: "دکتر",
  },
  {
    title: "مهندس",
  },
  {
    title: "دکتر",
  },
  {
    title: "مهندس",
  },
  {
    title: "دکتر",
  },
  {
    title: "مهندس",
  },
  {
    title: "دکتر",
  },
];

const tableHeader = [
  {
    title: "عنوان شغل",
  },
];

interface JobsListItem {
  title: string;
}

const DiseaseList = () => {
  return (
    <ItemsList
      AddingComponent={AddDisease}
      Icon={Frown}
      title="بیماری ها"
      tableHeaders={tableHeader}
      tableRows={diseases}
    />
  );
};

export default DiseaseList;
