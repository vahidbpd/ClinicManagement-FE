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
import { AddPatientSelectProps } from "@/types/disease.types";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useDebounce from "@/hooks/useDebounce";
import AddPatientSelectItem from "../addPatientSelectItem";
import AddPatientSelect from "../addPatienSelect";
import AddDisease from "@/components/disease/addDisease";
import AddItemSelect from "@/components/listItems/addItemSelect";

const diseases = [
  { id: "1", title: "یییب", description: "یبیب بللبل یبب ببیب" },
  { id: "2", title: "test", description: "adfsd fgdfth ghfhe rgefe" },
  { id: "3", title: "test", description: "adfsd fgdfth ghfhe rgefe" },
  { id: "4", title: "test", description: "adfsd fgdfth ghfhe rgefe" },
  { id: "5", title: "test", description: "adfsd fgdfth ghfhe rgefe" },
  { id: "6", title: "test", description: "adfsd fgdfth ghfhe rgefe" },
  { id: "7", title: "test", description: "adfsd fgdfth ghfhe rgefe" },
];

const AddPatientDiseaseSelect = ({
  selectedItems,
  onSelectedItemsChange,
}: AddPatientSelectProps) => {
  const [diseaseSearch, setDiseaseSearch] = useState("");
  const debouncedDiseaseSearch = useDebounce(diseaseSearch);

  // const diseaseHandler = (isCheckhed: boolean | string, id: string) => {
  //   if (isCheckhed === true) {
  //     onSelectedItemsChange([...selectedItems, id]);
  //   } else if (isCheckhed === false) {
  //     onSelectedItemsChange(
  //       selectedItems?.filter((itemId) => itemId !== id)
  //     );
  //   }
  // };
  return (
    <>
      {/* <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center gap-2 w-full">
          <FilePlus />
          انتخاب بیماری
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] rounded-2xl sm:w-[540px] h-11/12 m-10 pt-10 flex flex-col bg-white">
        <SheetHeader className="mb-4 mr-5 text-right">
          <SheetTitle className="text-right">انتخاب بیماری</SheetTitle>
          <SheetDescription className="text-right">
            شما میتوانید بیماری های مورد نظر را انتخاب کنید
          </SheetDescription>
          <div className="flex flex-col items-center gap-2 pt-2">
            <AddPricingRules id={null}/> 
            <div className="flex items-center w-full gap-2">
              <Input
                value={diseaseSearch}
                onChange={(e) => setDiseaseSearch(e.target.value)}
                className="w-3/4 "
                placeholder="جستجو..."
              />
              <Button className="w-1/4">جستجو</Button>
            </div>
            <Separator className="w-full" />
          </div>
        </SheetHeader>
        <ScrollArea className="h-[600px] w-full">
          {diseases &&
            // !isPending &&
            diseases.map((disease, i) => (
              <AddPatientSelectItem
              key={i}
                id={disease.id}
                title={disease.title}
                description={disease.description}
                isChecked={selectedItems.some(
                  (selectedItem) => selectedItem === disease.id
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
        data={diseases}
        title="انتخاب بیماری"
        description="شما میتوانید بیماری های مورد نظر را انتخاب کنید"
        search={diseaseSearch}
        setSearch={setDiseaseSearch}
        selectedItems={selectedItems}
        onSelectedItemsChange={onSelectedItemsChange}
  
      >
        <AddDisease id={null} />
      </AddItemSelect>
    </>
  );
};

export default AddPatientDiseaseSelect;
