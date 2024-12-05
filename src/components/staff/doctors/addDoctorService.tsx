"use client"

import AddExpertise from "@/components/expertise/addExpertise";
import AddItemSelect from "@/components/listItems/addItemSelect";
import AddService from "@/components/service/addService";
import useDebounce from "@/hooks/useDebounce";
import { AddItemSelectProps } from "@/types/itemsList.types";
import { useState } from "react";

const service = [
  { id: "1", title: "یییب" },
  { id: "2", title: "test" },
  { id: "3", title: "test" },
  { id: "4", title: "test" },
  { id: "5", title: "test" },
  { id: "6", title: "test" },
  { id: "7", title: "test" },
];


const AddDoctorService: React.FC<AddItemSelectProps> = ({onSelectedItemsChange, selectedItems}) => {
    const [serviceSearch, setServiceSearch] = useState("");
  const debouncedDiseaseSearch = useDebounce(serviceSearch);

  return (
    <AddItemSelect
      data={service}
      title="انتخاب خدمات"
      description="شما میتوانید خدمات مورد نظر را انتخاب کنید"
      search={serviceSearch}
      setSearch={setServiceSearch}
      selectedItems={selectedItems}
      onSelectedItemsChange={onSelectedItemsChange}
    >
      <AddService id={null} />
    </AddItemSelect>
  );
}
 
export default AddDoctorService;