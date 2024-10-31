"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ItemsTable from "./itemsTable";
import { ItemListProps } from "@/types/itemsList.types";
import ItemListHeader from "./itemListHeadeR";

const ItemsList: React.FC<ItemListProps> = ({
  title,
  AddingComponent,
  Icon,
  tableHeaders,
  tableRows,
}) => {
  return (
    <div defaultValue="activePatients" className="self-start px-5 py-5 w-full">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <ItemListHeader
            AddingComponent={AddingComponent}
            Icon={Icon}
            title={title}
          />
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[350px]">
            <ItemsTable
              title={title}
              tableHeaders={tableHeaders}
              tableRows={tableRows}
            />
          </ScrollArea>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default ItemsList;
