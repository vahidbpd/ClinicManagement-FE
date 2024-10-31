"use client";
import AddItem from "../listItems/addItem";
import AddMedicineForm from "./addMedicinesForm";

const AddMedicines = ({ id }: { id: string | null }) => {
  return (
    <AddItem id={id} title="دارو ها" AddItemForm={AddMedicineForm}/>
  );
};

export default AddMedicines;
