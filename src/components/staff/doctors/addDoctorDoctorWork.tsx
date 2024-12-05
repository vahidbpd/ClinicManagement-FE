"use client";

import AddItemSelect from "@/components/listItems/addItemSelect";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";
import AddDoctorWork from "./doctorWork/addDoctorWork";
import { AddDoctorWorkDoctorProps, DoctorWork } from "@/types/doctor.types";
import { DoctorWorkOnchangeFn } from "@/types/disease.types";

const expertise = [
  { id: "1", title: "یییب" },
  { id: "2", title: "test" },
  { id: "3", title: "test" },
  { id: "4", title: "test" },
  { id: "5", title: "test" },
  { id: "6", title: "test" },
  { id: "7", title: "test" },
];


const AddDoctorDoctorWork: React.FC<AddDoctorWorkDoctorProps> = ({
  onSelectedItemsChange,
  selectedItems,
}) => {
  const [expertiseSearch, setExpertiseSearch] = useState("");
  const debouncedDiseaseSearch = useDebounce(expertiseSearch);

  return (
    <AddItemSelect
      title="انتخاب زمان کاری"
      description="شما میتوانید زمان کاری مورد نظر را انتخاب کنید"
      search={expertiseSearch}
      setSearch={setExpertiseSearch}
      selectedItems={selectedItems}
      doctorWorkOnChange={onSelectedItemsChange}
      AddItemForm={AddDoctorWork}
    >
      <AddDoctorWork
        index={null}
        selectedItems={selectedItems}
        onSelectedItemsChange={onSelectedItemsChange}
      />
    </AddItemSelect>
  );
};

export default AddDoctorDoctorWork;
