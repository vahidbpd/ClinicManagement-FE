"use client";

import PersonnelsList from "@/components/staff/personnels/personnelsList";
import { Separator } from "@/components/ui/separator";

const PersonnelsPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold m-10 self-start">دکتر ها</h2>
      <Separator className="w-[100%]" orientation="horizontal" />
      <PersonnelsList />
    </div>
  );
};

export default PersonnelsPage;
