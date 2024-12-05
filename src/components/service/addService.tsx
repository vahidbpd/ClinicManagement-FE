"use client";

import AddItem from "../listItems/addItem";
import AddServiceForm from "./addServiceForm";

const AddService = ({ id }: { id: string | null }) => {
  return <AddItem AddItemForm={AddServiceForm} title="خدمات ها" id={null} />;
};

export default AddService;
