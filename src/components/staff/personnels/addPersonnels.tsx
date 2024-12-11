"use client"

import AddItem from "@/components/listItems/addItem";
import AddPersonnelsForm from "./addPersonnelsForm";

const AddPersonnels = ({ id }: { id: string | null }) => {
    return ( 
        <AddItem AddItemForm={AddPersonnelsForm} title="کارکنان" id={null}/>
     );
}
 
export default AddPersonnels;