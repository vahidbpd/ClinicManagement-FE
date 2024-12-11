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
import AddDiseaseForm from "./addDiseaseForm";
import AddItem from "../listItems/addItem";
import { useState } from "react";

const AddDisease = ({ id }: { id: string | null }) => {
  const [open, setOpen] = useState(false);
  return (
    <AddItem
      AddItemForm={AddDiseaseForm}
      title="بیماری ها"
      id={null}
      setOpen={setOpen}
      open={open}
    />
  );
};

export default AddDisease;
