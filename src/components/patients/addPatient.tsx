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
import AddPatientForm from "./addPatientForm";

const AddPatient = ({ id }: { id: string | null }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center justify-center gap-2">
          {id ? <FilePenLine /> : <FilePlus />}
          {id ? "ویرایش بیمار" : "افزودن بیمار"}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] rounded-2xl sm:w-[540px] h-11/12 m-10 bg-white">
        <SheetHeader className="mb-4 mr-5 text-right">
          <SheetTitle className="text-right">
            {id ? "ویرایش بیمار" : "افزودن بیمار"}
          </SheetTitle>
          <SheetDescription className="text-right">
            {id
              ? "شما میتوانیداطلاعات بیمارا ویرایش کنید"
              : "شما میتوانید بیمار جدید اضافه کنید"}
          </SheetDescription>
        </SheetHeader>
        <AddPatientForm />
      </SheetContent>
    </Sheet>
  );
};

export default AddPatient;
