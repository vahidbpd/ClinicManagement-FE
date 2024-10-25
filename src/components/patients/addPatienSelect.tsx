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
import { FilePlus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AddPatientSelectDataProps } from "@/types/disease.types";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import AddPatientSelectItem from "./addPatientSelectItem";
import AddDisease from "../disease/addDisease";
import AddJob from "../jobs/addJob";

const AddPatientSelect = ({
  selectedItems,
  onSelectedItemsChange,
  title,
  description,
  search,
  setSearch,
  data,
  type,
}: AddPatientSelectDataProps) => {
  const itemCheckedHandler = (isCheckhed: boolean | string, id: string) => {
    if (isCheckhed === true) {
      onSelectedItemsChange([...selectedItems, id]);
    } else if (isCheckhed === false) {
      onSelectedItemsChange(selectedItems?.filter((itemId) => itemId !== id));
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
            {type === "disease" && <AddDisease id={null} />}
            {type === "job" && <AddJob id={null} />}
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
              <AddPatientSelectItem
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

export default AddPatientSelect;
