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

const AddDisease = ({ id }: { id: string | null }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center justify-center gap-2">
          {id ? <FilePenLine /> : <FilePlus />}
          {id ? "ویرایش بیماری" : "افزودن بیماری"}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] rounded-2xl sm:w-[540px] h-11/12 m-10 bg-white">
        <SheetHeader className="mb-4 mr-5 text-right">
          <SheetTitle className="text-right">
            {id ? "ویرایش بیماری" : "افزودن بیماری"}
          </SheetTitle>
          <SheetDescription className="text-right">
            {id
              ? "شما میتوانیداطلاعات بیماری را ویرایش کنید"
              : "شما میتوانید بیماری جدید اضافه کنید"}
          </SheetDescription>
        </SheetHeader>
        {/* <AddPatientForm /> */}
      </SheetContent>
    </Sheet>
  );
};

export default AddDisease;
