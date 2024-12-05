"use client";

import { Frown } from "lucide-react";
import ItemsList from "../listItems/itemsList";
import AddExpertise from "./addExpertise";
import AddService from "./addService";

const services = [
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

const ServiceList = () => {
  return (
    <ItemsList
      AddingComponent={AddService}
      Icon={Frown}
      title="خدمات ها"
      tableHeaders={tableHeader}
      tableRows={services}
    />
  );
};

export default ServiceList;
