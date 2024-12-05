"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FilePlus, Pencil } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import {
  AddItemSelectDataProps,
  doctorWorkOnChange,
} from "@/types/itemsList.types";
import AddItemSelectItem from "./addItemSelectItem";
import { DoctorWork } from "@/types/doctor.types";
import DoctorWorkItem from "../staff/doctors/doctorWork/doctorWorkItem";

const AddItemSelect = ({
  selectedItems,
  onSelectedItemsChange,
  doctorWorkOnChange,
  title,
  description,
  search,
  setSearch,
  data,
  children,
  AddItemForm,
}: AddItemSelectDataProps) => {
  const itemCheckedHandler = (isCheckhed: boolean | string, id: string) => {
    if (isCheckhed === true && onSelectedItemsChange) {
      onSelectedItemsChange([...(selectedItems as string[]), id]);
    } else if (isCheckhed === false && onSelectedItemsChange) {
      onSelectedItemsChange(
        selectedItems?.filter((itemId) => itemId !== id) as string[]
      );
    }
  };

  const itemDeleteHandler = (index: number) => {
    if (doctorWorkOnChange) {
      const updatedSelectedItems = selectedItems.filter((_, i) => i !== index);
      doctorWorkOnChange(updatedSelectedItems as DoctorWork[]);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="flex items-center gap-2 w-full">
          <FilePlus />
          {title}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] rounded-2xl sm:w-[540px] h-11/12 m-10 pt-10 flex flex-col bg-white">
        <SheetHeader className="mb-4 mr-5 text-right">
          <SheetTitle className="text-right">{title}</SheetTitle>
          <SheetDescription className="text-right">
            {description}
          </SheetDescription>
          <div className="flex flex-col items-center gap-2 pt-2">
            {children}
            <div className="flex items-center w-full gap-2">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-3/4 "
                placeholder="جستجو..."
              />
              <Button className="w-1/4">جستجو</Button>
            </div>
            <Separator className="w-full" />
          </div>
        </SheetHeader>
        <ScrollArea className="h-[600px] w-full">
          {data &&
            // !isPending &&
            data.map((item, i) => (
              <AddItemSelectItem
                key={i}
                id={item.id}
                title={item.title}
                description={"description" in item ? item.description : ""}
                isChecked={selectedItems.some(
                  (selectedItem) => selectedItem === item.id
                )}
                onCheckedChange={itemCheckedHandler}
              />
            ))}
          {AddItemForm &&
            selectedItems.map((item, i) => {
              const doctorWorkItem = item as DoctorWork;
              return (
                <DoctorWorkItem
                  key={i}
                  day={doctorWorkItem.day}
                  endAt={doctorWorkItem.endAt}
                  startAt={doctorWorkItem.startAt}
                  index={i}
                  onDelete={itemDeleteHandler}
                  onEdit={() => {
                    console.log("test");
                  }}
                >
                  <AddItemForm
                    key={i}
                    customTriggerButton={
                      <Button size="icon" variant="outline">
                        <Pencil />
                      </Button>
                    }
                    onSelectedItemsChange={
                      doctorWorkOnChange as doctorWorkOnChange
                    }
                    selectedItems={selectedItems as DoctorWork[]}
                    index={i}
                  />
                </DoctorWorkItem>
              );
            })}
        </ScrollArea>
        <SheetClose asChild>
          <Button
          // disabled={isPending}
          >
            تایید
            {/* {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default AddItemSelect;
