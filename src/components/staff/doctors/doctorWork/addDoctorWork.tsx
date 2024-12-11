"use client";

import AddItem from "@/components/listItems/addItem";
import DoctorWorkForm from "./doctorWorkForm";
import { AddDoctorWorkDoctorWithIdProps } from "@/types/doctor.types";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AddDoctorWork: React.FC<AddDoctorWorkDoctorWithIdProps> = ({
  index,
  onSelectedItemsChange,
  selectedItems,
  customTriggerButton,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <AddItem
      title="زمان کاری"
      id={index}
      customTriggerButton={customTriggerButton}
      open={open}
      setOpen={setOpen}
    >
      <DoctorWorkForm
        index={index}
        selectedItems={selectedItems}
        onSelectedItemsChange={onSelectedItemsChange}
        setOpen={setOpen}
      />
    </AddItem>
  );
};

export default AddDoctorWork;
