"عسث زمهثدف";
import DiseaseList from "@/components/disease/diseaseList";
import { Separator } from "@/components/ui/separator";

const Disease = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center">
      <h2 className="text-3xl font-bold m-10 self-start">بیماری ها</h2>
      <Separator className="w-[100%]" orientation="horizontal" />
      <DiseaseList />
    </div>
  );
};

export default Disease;
