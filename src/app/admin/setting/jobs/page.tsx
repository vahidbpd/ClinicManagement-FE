"use client";
import JobsList from "@/components/jobs/jobsList";
import { Separator } from "@/components/ui/separator";

const Jobs = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold m-10 self-start">شغل ها</h2>
      <Separator className="w-[100%]" orientation="horizontal" />
      <JobsList />
    </div>
  );
};

export default Jobs;
