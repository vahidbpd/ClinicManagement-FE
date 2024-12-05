"use client"

import AddExpertise from "@/components/expertise/addExpertise";
import AddItemSelect from "@/components/listItems/addItemSelect";
import useDebounce from "@/hooks/useDebounce";
import { AddItemSelectProps } from "@/types/itemsList.types";
import { useState } from "react";

const expertise = [
  { id: "1", title: "یییب" },
  { id: "2", title: "test" },
  { id: "3", title: "test" },
  { id: "4", title: "test" },
  { id: "5", title: "test" },
  { id: "6", title: "test" },
  { id: "7", title: "test" },
];


const AddDoctorExpertise: React.FC<AddItemSelectProps> = ({onSelectedItemsChange, selectedItems}) => {
    const [expertiseSearch, setExpertiseSearch] = useState("");
  const debouncedDiseaseSearch = useDebounce(expertiseSearch);

  return (
    <AddItemSelect
      data={expertise}
      title="انتخاب تخصص"
      description="شما میتوانید تخصص مورد نظر را انتخاب کنید"
      search={expertiseSearch}
      setSearch={setExpertiseSearch}
      selectedItems={selectedItems}
      onSelectedItemsChange={onSelectedItemsChange}
    >
      <AddExpertise id={null} />
    </AddItemSelect>
  );
}
 
export default AddDoctorExpertise;