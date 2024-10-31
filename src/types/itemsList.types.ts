import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type ItemListHederProps = {
  title: string;
  AddingComponent: React.ComponentType<{ id: string | null }>;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

interface TableHeader {
  title: string;
}

type TableRows = Record<string, string>;

type TableItems = {
  tableHeaders: TableHeader[];
  tableRows: TableRows[];
};
export type ItemsTableProps = TableHeader & TableItems;

export type ItemListProps = ItemListHederProps & TableItems;

export type AddItemProps = {
  title: string;
  id: string | null;
  AddItemForm: React.ComponentType<{ id: string | null }>;
};