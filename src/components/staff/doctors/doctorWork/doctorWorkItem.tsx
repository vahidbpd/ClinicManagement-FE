"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { daySelectData } from "@/data/DayOfWeek";
import { parseTimeString } from "@/lib/parseTimeString";
import { getTitleByValue } from "@/lib/valueToTitle";
import { DoctorWorkItemProps } from "@/types/doctor.types";
import { TimeInput } from "@nextui-org/react";
import { TimeValue } from "@react-types/datepicker";
import { Pencil, Trash2 } from "lucide-react";
import { useEffect } from "react";

const DoctorWorkItem: React.FC<DoctorWorkItemProps> = ({
  index,
  day,
  endAt,
  startAt,
  onDelete,
  onEdit,
  children,
}) => {
  return (
    <Card className="my-2 ">
      <CardHeader>
        <CardTitle>{getTitleByValue(day,daySelectData)}</CardTitle>
      </CardHeader>
      <CardContent className={"flex gap-2 w-full" + (day && "pt-6")}>
        <div className="flex items-center gap-2 w-full">
          <TimeInput
            label="ساعت شروع"
            classNames={{
              base: "leftToRight",
              input: "leftToRight",
            }}
            isReadOnly
            value={parseTimeString(startAt) as TimeValue}
          />
          <TimeInput
            label="ساعت پایان"
            classNames={{
              base: "leftToRight",
              input: "leftToRight",
            }}
            isReadOnly
            value={parseTimeString(endAt) as TimeValue}
          />
        </div>
        <div className="flex gap-1 flex-col">
          <Button
            onClick={() => {
              onDelete(index);
            }}
            size="icon"
            variant="outline"
          >
            <Trash2 className="text-red-600" />
          </Button>
          {/* <Separator orientation="vertical" /> */}
          {/* <Button>
            <span>ویرایش</span>
            <Pencil />
          </Button> */}
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorWorkItem;
