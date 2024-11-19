"use client"
import AddDoctorForm from "./addDoctorForm";
import AddItem from "@/components/listItems/addItem";

const AddDoctor = ({ id }: { id: string | null }) => {
    return ( 
       <AddItem AddItemForm={AddDoctorForm} title="دکتر ها" id={null}/>
     );
}
 
export default AddDoctor;