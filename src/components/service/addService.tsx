"use client";

import { useState } from "react";
import AddItem from "../listItems/addItem";
import AddServiceForm from "./addServiceForm";

const AddService = ({ id }: { id: string | null }) => {
  const [open, setOpen] = useState(false);
  return (
    <AddItem
      AddItemForm={AddServiceForm}
      title="خدمات ها"
      id={null}
      setOpen={setOpen}
      open={open}
    />
  );
};

export default AddService;
