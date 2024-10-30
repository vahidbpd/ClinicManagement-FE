"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  BriefcaseMedical,
  Hospital,
  LayoutDashboard,
  CalendarPlus,
  User,
  Contact,
  ChartNoAxesColumn,
  Settings,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import AdminMenuItem from "./adminMenuItem";

const menuItems = [
  {
    text: "داشبورد",
    icon: <LayoutDashboard />,
    href: "/admin",
  },
  {
    text: "مطب",
  },
  {
    text: "نوبت دهی",
    icon: <CalendarPlus />,
    href: "/admin/reserve",
  },
  {
    text: "بیماران",
    icon: <User />,
    href: "/admin/patients",
  },
  {
    text: "کارکنان",
    icon: <Contact />,
    href: "/admin/staff",
  },
  {
    text: "حسابداری",
  },
  {
    text: "ویزیت ها",
    icon: <ChartNoAxesColumn />,
    href: "/admin/visits",
  },
  {
    separate: <Separator />,
  },
  {
    text: "تنظیمات",
    icon: <Settings />,
    href: "/admin/setting",
  },
  {
    text: "خروج",
    icon: <Contact />,
    href: "/admin/logout",
  },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 h-full p-2 flex flex-col gap-3">
        <div className="text-3xl font-bold m-2 flex items-center gap-2">
          <BriefcaseMedical size={40} />
          <h2>مدیریت کلینیک</h2>
        </div>
        <Card className="text-xl py-3 flex px-2 items-center gap-2 mt-8">
          <Hospital size={30} />
          <h2>مطب دکتر فخر موسوی</h2>
        </Card>
        {menuItems.map((item, i) =>
          item.icon ? (
            <AdminMenuItem text={item.text} key={i} href={item.href}>
              {item.icon}
            </AdminMenuItem>
          ) : item.text ? (
            <h3 key={i} className="text-lg font-medium">
              {item.text}
            </h3>
          ) : (
            <div key={i}>{item.separate}</div>
          )
        )}
      </div>
      <Separator orientation="vertical" />
      <section className="w-full h-full">{children}</section>
    </div>
  );
};

export default AdminLayout;




