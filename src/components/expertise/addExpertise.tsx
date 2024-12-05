"use client"

import AddItem from "../listItems/addItem";
import AddExpertiseForm from "./addExpertiseForm";

const AddExpertise = ({ id }: { id: string | null }) => {
    return ( 
        <AddItem AddItemForm={AddExpertiseForm} title="تخصص ها" id={null}/>
     );
}
 
export default AddExpertise;