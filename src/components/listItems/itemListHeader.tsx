"use client";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ItemListHederProps } from "@/types/itemsList.types";

const ItemListHeader: React.FC<ItemListHederProps> = ({
  title,
  AddingComponent,
  Icon,
}) => {
  return (
    <>
      <div className="flex h-10 items-center gap-5">
        <AddingComponent id={null} />
        {/* {children} */}
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
        <Input placeholder={`اطلاعات ${title} را وارد کنید...`} />
      </div>
      <div className="flex items-center justify-center gap-2">
        <span>تعداد کل {title}:</span>
        <span>100</span>
        <Icon />
      </div>
    </>
  );
};

export default ItemListHeader;
