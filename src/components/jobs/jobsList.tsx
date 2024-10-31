"use client";

import { BriefcaseBusiness } from "lucide-react";
import ItemsList from "../listItems/itemsList";
import AddJob from "./addJob";

const jobs = [
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
  title: string
}

const JobsList = () => {
  return (
    <ItemsList
      AddingComponent={AddJob}
      Icon={BriefcaseBusiness}
      title="شغل ها"
      tableHeaders={tableHeader}
      tableRows={jobs}
    />
  );
};

export default JobsList;
