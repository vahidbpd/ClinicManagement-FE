"use client";
import ItemsList from "@/components/listItems/itemsList";
import { Stethoscope, Users } from "lucide-react";
import AddPersonnels from "./addPersonnels";

const personnels = [
  {
    fullName: "رضا رضایی",
    expertise: "قلب",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
];

const tableHeader = [
  {
    title: "نام و نام خانوادگی",
  },
  {
    title: "سمت",
  },
  {
    title: "شماره ملی",
  },
  {
    title: "تلفن همراه",
  },
];

const PersonnelsList = () => {
  return <ItemsList tableHeaders={tableHeader} tableRows={personnels} title="پرسنل" AddingComponent={AddPersonnels} Icon={Users}/>;
};

export default PersonnelsList;

