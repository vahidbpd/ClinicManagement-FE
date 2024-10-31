"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import ItemsList from "../listItems/itemsList";
import AddPatient from "./addPatient";
import { SquareUser } from "lucide-react";

const patients = [
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
];

const tableHeader = [
  {
    title: "شماره پرونده کاغذی",
  },
  {
    title: "شماره پرونده الکترونیک",
  },
  {
    title: "نام و نام خانوادگی",
  },
  {
    title: "شماره ملی",
  },
  {
    title: "تلفن همراه",
  },
];

interface PatientsListItem {
  paperFileNumber: string;
  electronicFileNumber: string;
  fullName: string;
  nationalNumber: string;
  phoneNumber: string;
}

const PatientsList = () => {
  return (
    // <Tabs defaultValue="activePatients" className="self-start px-5 py-5 w-full">
    //   <TabsList className="grid grid-cols-2 w-fit">
    //     <TabsTrigger value="activePatients" color="black">
    //       بیماران فعال
    //     </TabsTrigger>
    //     <TabsTrigger value="history">سابقه</TabsTrigger>
    //   </TabsList>
    //   <TabsContent value="activePatients" className="w-full">
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between">
    //         <PatientsListHeader/>
    //       </CardHeader>
    //       <CardContent>

    //       <ScrollArea className="h-[350px]">

    //         <PatientsTable/>
    //       </ScrollArea>

    //       </CardContent>
    //       <CardFooter></CardFooter>
    //     </Card>
    //   </TabsContent>
    //   <TabsContent value="history">Change your password here.</TabsContent>
    // </Tabs>
    <ItemsList
      AddingComponent={AddPatient}
      Icon={SquareUser}
      title="بیماران"
      tableHeaders={tableHeader}
      tableRows={patients}
    />
  );
};

export default PatientsList;
