"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ItemsTableProps } from "@/types/itemsList.types";

const ItemsTable: React.FC<ItemsTableProps> = ({
  title,
  tableHeaders,
  tableRows,
}) => {
  return (
    <Table>
      <TableCaption>لیست {title}</TableCaption>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((item, i) => (
            <TableHead className="text-right" key={i}>
              {item.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRows.map((items, index) => (
          <TableRow key={index}>
            {Object.values(items).map((field, i) => (
              <TableCell key={i}>{field}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default ItemsTable;
