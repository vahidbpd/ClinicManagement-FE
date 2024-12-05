"use client";

import AddItem from "@/components/listItems/addItem";
import DoctorWorkForm from "./doctorWorkForm";
import { AddDoctorWorkDoctorWithIdProps } from "@/types/doctor.types";
import { Button } from "@/components/ui/button";

const AddDoctorWork: React.FC<AddDoctorWorkDoctorWithIdProps> = ({
  index,
  onSelectedItemsChange,
  selectedItems,
  customTriggerButton
}) => {
  return (
    <AddItem title="زمان کاری" id={index} customTriggerButton={customTriggerButton}>
      <DoctorWorkForm
      index={index}
        selectedItems={selectedItems}
        onSelectedItemsChange={onSelectedItemsChange}
      />
    </AddItem>
  );
};

export default AddDoctorWork;
