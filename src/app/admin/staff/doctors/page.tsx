"use client";

import DoctorList from "@/components/staff/doctors/doctorList";
import { Separator } from "@/components/ui/separator";

const DoctorsPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold m-10 self-start">دکتر ها</h2>
      <Separator className="w-[100%]" orientation="horizontal" />
      <DoctorList />
    </div>
  );
};

export default DoctorsPage;
