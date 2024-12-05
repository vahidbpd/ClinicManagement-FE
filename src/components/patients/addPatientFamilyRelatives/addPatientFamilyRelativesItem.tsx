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
import { AddPatientSelectProps, DiseaseSelectProps } from "@/types/disease.types";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useDebounce from "@/hooks/useDebounce";
import AddPatientSelectItem from "../addPatientSelectItem";
import AddPatientSelect from "../addPatienSelect";
import AddItemSelect from "@/components/listItems/addItemSelect";

const patients = [
  {
    id: "1",
    firstName: "رضا",
    lastName: "رضایی",
    description: "یبیب بللبل یبب ببیب",
  },
  {
    id: "2",
    firstName: "رضا",
    lastName: "رضایی",
    description: "یبیب بللبل یبب ببیب",
  },
  {
    id: "3",
    firstName: "رضا",
    lastName: "رضایی",
    description: "یبیب بللبل یبب ببیب",
  },
  {
    id: "4",
    firstName: "رضا",
    lastName: "رضایی",
    description: "یبیب بللبل یبب ببیب",
  },
  {
    id: "5",
    firstName: "رضا",
    lastName: "رضایی",
    description: "یبیب بللبل یبب ببیب",
  },
  {
    id: "6",
    firstName: "رضا",
    lastName: "رضایی",
    description: "یبیب بللبل یبب ببیب",
  },
  {
    id: "7",
    firstName: "رضا",
    lastName: "رضایی",
    description: "یبیب بللبل یبب ببیب",
  },
  {
    id: "8",
    firstName: "رضا",
    lastName: "رضایی",
    description: "یبیب بللبل یبب ببیب",
  },
];

const AddPatientFamilyRelatives= ({
  selectedItems,
  onSelectedItemsChange,
}: AddPatientSelectProps) => {
  const [relativesSesrch, setRelativesSearch] = useState("");
  const debouncedRelativesSearch = useDebounce(relativesSesrch);

  const structuredArray = patients.map((item) => {
    return {
      id: item.id,
      title: item.firstName + " " + item.lastName,
      description: item.description,
    };
  });
  return (
    <>
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button className="flex items-center gap-2 w-full">
            <FilePlus />
            انتخاب بستگان
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] rounded-2xl sm:w-[540px] h-11/12 m-10 pt-10 flex flex-col bg-white">
          <SheetHeader className="mb-4 mr-5 text-right">
            <SheetTitle className="text-right">انتخاب بستگان</SheetTitle>
            <SheetDescription className="text-right">
              شما میتوانید افرادی که با بیمار نسبت فامیلی دارند را انتخاب کنید
            </SheetDescription>
            <div className="flex flex-col items-center gap-2 pt-2">
              <div className="flex items-center w-full gap-2">
                <Input
                  value={relativesSesrch}
                  onChange={(e) => setRelativesSearch(e.target.value)}
                  className="w-3/4 "
                  placeholder="جستجو..."
                />
                <Button className="w-1/4">جستجو</Button>
              </div>
              <Separator className="w-full" />
            </div>
          </SheetHeader>
          <ScrollArea className="h-[600px] w-full">
            {patients &&
              // !isPending &&
              patients.map((patient, i) => (
                <AddPatientSelectItem
                  key={i}
                  id={patient.id}
                  title={`${patient.firstName} ${patient.lastName}`}
                  description={patient.description}
                  isChecked={selectedDiseases.some(
                    (selectDisease) => selectDisease === disease.id
                  )}
                  onCheckedChange={diseaseHandler}
                />
              ))}
          </ScrollArea>
          <SheetClose asChild>
            <Button
            // disabled={isPending}
            >
              تایید
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} 
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet> */}

      <AddItemSelect
        data={structuredArray}
        title=" انتخاب بستگان"
        description="شما میتوانید افرادی که با بیمار نسبت فامیلی دارند را انتخاب کنید"
        search={relativesSesrch}
        setSearch={setRelativesSearch}
        selectedItems={selectedItems}
        onSelectedItemsChange={onSelectedItemsChange}
      ><div></div></AddItemSelect>
    </>
  );
};

export default AddPatientFamilyRelatives;
