import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { DiseaseSelectItemProps } from "@/types/disease.types";

const AddPatientDiseaseSelectItem = ({
  title,
  description,
  id,
  isChecked,
  onCheckedChange,
}: DiseaseSelectItemProps) => {
  return (
    <Card className="my-2 ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        
      </CardHeader>
      <CardContent>
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
            {description}
          </label>
      </div>
      </CardContent>
    </Card>
  );
};

export default AddPatientDiseaseSelectItem;
