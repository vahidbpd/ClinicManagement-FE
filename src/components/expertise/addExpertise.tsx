"use client";

import { useState } from "react";
import AddItem from "../listItems/addItem";
import AddExpertiseForm from "./addExpertiseForm";

const AddExpertise = ({ id }: { id: string | null }) => {
  const [open, setOpen] = useState(false);
  return (
    <AddItem
      AddItemForm={AddExpertiseForm}
      title="تخصص ها"
      id={null}
      open={open}
      setOpen={setOpen}
    />
  );
};

export default AddExpertise;
