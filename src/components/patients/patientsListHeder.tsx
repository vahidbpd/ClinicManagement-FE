import { Button } from "@/components/ui/button";
import { Filter, Plus, Search, SquareUser } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import AddPatient from "./addPatient";
const PatientsListHeader = () => {
    return ( 
        <>
        <div className="flex h-10 items-center gap-5">
             <AddPatient id={null}/>
              <Separator orientation="vertical" />
              <Button variant="outline">
                <Filter />
                فیلتر
              </Button>
            </div>
            <div className="flex w-full max-w-sm items-center gap-2">
              <Button className="gap-2">
                <Search />
                <span>جوستجو</span>
              </Button>
              <Input placeholder="اطالاعات بیمار را وارد کنید..." />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>تعداد کل بیماران:</span>
              <span>100</span>
              <SquareUser />
            </div>
        </>
     );
}
 
export default PatientsListHeader;