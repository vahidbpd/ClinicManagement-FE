"use client";
import { AddPatientSelectProps } from "@/types/disease.types";
import useDebounce from "@/hooks/useDebounce";
import AddPatientSelect from "../addPatienSelect";
import { useState } from "react";
import AddJob from "@/components/jobs/addJob";
import AddItemSelect from "@/components/listItems/addItemSelect";

const jobs = [
  { id: "1", title: "یییب" },
  { id: "2", title: "test" },
  { id: "3", title: "test" },
  { id: "4", title: "test" },
  { id: "5", title: "test" },
  { id: "6", title: "test" },
  { id: "7", title: "test" },
];

const AddPatientJob = ({
  selectedItems,
  onSelectedItemsChange,
}: AddPatientSelectProps) => {
  const [jobSearch, setJobSearch] = useState("");
  const debouncedDiseaseSearch = useDebounce(jobSearch);

  return (
    <AddItemSelect
      data={jobs}
      title="انتخاب شغل"
      description="شما میتوانید شغل مورد نظر را انتخاب کنید"
      search={jobSearch}
      setSearch={setJobSearch}
      selectedItems={selectedItems}
      onSelectedItemsChange={onSelectedItemsChange}
    >
      <AddJob id={null} />
    </AddItemSelect>
  );
};

export default AddPatientJob;
