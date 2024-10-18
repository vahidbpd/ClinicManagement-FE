import { Separator } from "@/components/ui/separator"
import PatientsList from "../../../components/patients/patientsList";

const PatientsPage = () => {
    return ( 
        <div className="h-screen w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold m-10 self-start">بیماران</h2>
            <Separator className="w-[100%]" orientation="horizontal" />
            <PatientsList/>

        </div>
     );
}
 
export default PatientsPage;