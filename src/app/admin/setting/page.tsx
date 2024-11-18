import SettingLists from "@/components/settings/settingsList";
import { Separator } from "@/components/ui/separator";

const SettingPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center">
    <h2 className="text-3xl font-bold m-10 self-start">بیماری ها</h2>
    <Separator className="w-[100%]" orientation="horizontal" />
    <SettingLists/>
  </div>
  )
};

export default SettingPage;
