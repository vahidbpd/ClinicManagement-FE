"use client";

import { Frown } from "lucide-react";
import ItemsList from "../listItems/itemsList";
import AddExpertise from "./addExpertise";

const expertises = [
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
    title: "عنوان تخصص",
  },
];

const ExpertiseList = () => {
  return (
    <ItemsList
      AddingComponent={AddExpertise}
      Icon={Frown}
      title="تخصص ها"
      tableHeaders={tableHeader}
      tableRows={expertises}
    />
  );
};

export default ExpertiseList;
