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

const invoices = [
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
  {
    paperFileNumber: "87578",
    electronicFileNumber: "7844",
    fullName: "رضا رضایی",
    nationalNumber: "2581234578",
    phoneNumber: "09111234567",
  },
];

interface PatientsListItem {
  paperFileNumber: string;
  electronicFileNumber: string;
  fullName: string;
  nationalNumber: string;
  phoneNumber: string;
}

const PatientsTable = () => {
  return (
    <Table>
      <TableCaption>لیست بیماران</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-right">شماره پرونده کاغذی</TableHead>
          <TableHead className="text-right">شماره پرونده الکترونیک</TableHead>
          <TableHead className="text-right">نام و نام خانوادگی</TableHead>
          <TableHead className="text-right">شماره ملی</TableHead>
          <TableHead className="text-right">تلفن همراه</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((patient, index) => (
          <TableRow key={index}>
            <TableCell>{patient.paperFileNumber}</TableCell>
            <TableCell>{patient.electronicFileNumber}</TableCell>
            <TableCell>{patient.fullName}</TableCell>
            <TableCell>{patient.nationalNumber}</TableCell>
            <TableCell>{patient.phoneNumber}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default PatientsTable;
