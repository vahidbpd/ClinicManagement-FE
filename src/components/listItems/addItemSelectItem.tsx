import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { ItemSelectItemProps } from "@/types/itemsList.types";

const AddItemSelectItem = ({
  title,
  description,
  id,
  isChecked,
  onCheckedChange,
}: ItemSelectItemProps) => {
  return (
    <Card className="my-2 ">
      {description !== "" && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className={description ? "" : "pt-6"}>
        <div className="flex items-center gap-2">
          <Checkbox
            id={id}
            checked={isChecked}
            onCheckedChange={(checked) => {
              onCheckedChange(checked, id);
            }}
          />
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {description ? description : title}
          </label>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddItemSelectItem;
