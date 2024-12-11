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
import { AddItemProps } from "@/types/itemsList.types";
import { useEffect } from "react";

const AddItem: React.FC<AddItemProps> = ({
  title,
  id,
  AddItemForm,
  children,
  customTriggerButton,
  open,
  setOpen
}) => {
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {customTriggerButton ? (
          customTriggerButton 
        ) : (
          <Button className="flex items-center justify-center gap-2">
            {id ? <FilePenLine /> : <FilePlus />}
            {id ? `ویرایش ${title}` : `افزودن ${title}`}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-[400px] rounded-2xl sm:w-[540px] h-11/12 m-10 bg-white">
        <SheetHeader className="mb-4 mr-5 text-right">
          <SheetTitle className="text-right">
            {id ? `ویرایش ${title}` : `افزودن ${title}`}
          </SheetTitle>
          <SheetDescription className="text-right">
            {id
              ? `شما میتوانیداطلاعات ${title} را ویرایش کنید`
              : `شما میتوانید ${title} جدید اضافه کنید`}
          </SheetDescription>
        </SheetHeader>
        {AddItemForm ? <AddItemForm id={id as string} setOpen={setOpen ? setOpen : undefined}/> : children}
      </SheetContent>
    </Sheet>
  );
};

export default AddItem;
