"use client";
import ItemsList from "@/components/listItems/itemsList";
import AddDoctor from "./addDoctor";
import { Stethoscope } from "lucide-react";

const doctors = [
  {
    fullName: "رضا رضایی",
    expertise: "قلب",
    medicalSystemNumber: "7844",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
];

const tableHeader = [
  {
    title: "نام و نام خانوادگی",
  },
  {
    title: "تخصص",
  },
  {
    title: "کد نظام پزشکی",
  },
  {
    title: "شماره ملی",
  },
  {
    title: "تلفن همراه",
  },
];

const DoctorList = () => {
  return <ItemsList tableHeaders={tableHeader} tableRows={doctors} title="دکتر ها" AddingComponent={AddDoctor} Icon={Stethoscope}/>;
};

export default DoctorList;
