import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { ItemSelectItemProps } from "@/types/itemsList.types";
import { Button } from "../../../ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Separator } from "../../../ui/separator";

const AddItemItems = ({ title, description, id }: ItemSelectItemProps) => {
  return (
    <Card className="my-2 ">
      {description !== "" && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className={description ? "" : "pt-6"}>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <Button>
              <span>حذف</span>
              <Trash2 />
            </Button>
            <Separator orientation="vertical" />
            <Button>
              <span>ویرایش</span>
              <Pencil />
            </Button>
          </div>
          <span
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {description ? description : title}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddItemItems;
