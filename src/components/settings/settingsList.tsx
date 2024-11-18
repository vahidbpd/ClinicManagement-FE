"use client";

import { SettingItemProps } from "@/types/settings.type";
import { BriefcaseBusiness, Frown, Pill } from "lucide-react";
import SettingItem from "./settingItem";

const settingItems: SettingItemProps[] = [
  {
    title: "شغل ها",
    description: "تنظیمات مربوط به شغل ها",
    href: "/admin/setting/jobs",
    footer: "میتوانید شغل های جدید اضافه کنید یا انها را ویرایش و حذف کنید",
    Icon: BriefcaseBusiness,
  },
  {
    title: "بیماری ها",
    description: "تنظیمات مربوط به بیماری ها",
    href: "/admin/setting/diseases",
    footer: "میتوانید بیماری های جدید اضافه کنید یا انها را ویرایش و حذف کنید",
    Icon: Frown,
  },
  {
    title: "دارو ها",
    description: "تنظیمات مربوط به دارو ها",
    href: "/admin/setting/medicines",
    footer: "میتوانید دارو های جدید اضافه کنید یا انها را ویرایش و حذف کنید",
    Icon: Pill,
  },
];
const SettingLists = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {settingItems.map(({ title, Icon, description, footer, href }, i) => (
        <SettingItem
          title={title}
          Icon={Icon}
          description={description}
          footer={footer}
          href={href}
          key={i}
        />
      ))}
    </div>
  );
};

export default SettingLists;
