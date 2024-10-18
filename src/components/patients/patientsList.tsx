import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import PatientsListHeader from "./patientsListHeder";
import { ScrollArea } from "@/components/ui/scroll-area";
import PatientsTable from "./patientsTable";


const PatientsList = () => {
  return (
    <Tabs defaultValue="activePatients" className="self-start px-5 py-5 w-full">
      <TabsList className="grid grid-cols-2 w-fit">
        <TabsTrigger value="activePatients" color="black">
          بیماران فعال
        </TabsTrigger>
        <TabsTrigger value="history">سابقه</TabsTrigger>
      </TabsList>
      <TabsContent value="activePatients" className="w-full">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <PatientsListHeader/>
          </CardHeader>
          <CardContent>
            
          <ScrollArea className="h-[350px]">

            <PatientsTable/>
          </ScrollArea>
     
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="history">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default PatientsList;
