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
import AddPatientDiseaseSelectItem from "./addPatientDiseaseSelectItem";
import { DiseaseSelectProps } from "@/types/disease.types";
import { useEffect } from "react";

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
  selectedDiseases,
  onSelectedDiseasesChange,
}: DiseaseSelectProps) => {
  const diseaseHandler = (isCheckhed: boolean | string, id: string) => {
    if (isCheckhed === true) {
      onSelectedDiseasesChange([...selectedDiseases, id]);
    } else if (isCheckhed === false) {
      onSelectedDiseasesChange(
        selectedDiseases?.filter((diseaseId) => diseaseId !== id)
      );
    }
  };
  useEffect(() => {
    console.log(selectedDiseases, ' heree')
  },[selectedDiseases])
  return (
    <Sheet>
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
        </SheetHeader>
        <ScrollArea className="h-[600px] w-full">
          {diseases &&
            // !isPending &&
            diseases.map((disease, i) => (
              <AddPatientDiseaseSelectItem
                key={i}
                id={disease.id}
                title={disease.title}
                description={disease.description}
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
            {/* {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default AddPatientDiseaseSelect;
