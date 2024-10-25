"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FilePenLine, FilePlus } from "lucide-react";
import AddJobForm from "./addJobForm";

const AddJob = ({ id }: { id: string | null }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center justify-center gap-2">
          {id ? <FilePenLine /> : <FilePlus />}
          {id ? "ویرایش شغل" : "افزودن شغل"}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] rounded-2xl sm:w-[540px] h-11/12 m-10 bg-white">
        <SheetHeader className="mb-4 mr-5 text-right">
          <SheetTitle className="text-right">
            {id ? "ویرایش شغل" : "افزودن شغل"}
          </SheetTitle>
          <SheetDescription className="text-right">
            {id
              ? "شما میتوانیداطلاعات شغل را ویرایش کنید"
              : "شما میتوانید شغل جدید اضافه کنید"}
          </SheetDescription>
        </SheetHeader>
        <AddJobForm />
      </SheetContent>
    </Sheet>
  );
};

export default AddJob;
