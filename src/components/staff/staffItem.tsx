"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

type StaffItemProps = {
  title: string;
  description: string;
  href: string;
};
const StaffItem: React.FC<StaffItemProps> = ({ description, href, title }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={href}>
          <Button>{`لیست ${title}`}</Button>
        </Link>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default StaffItem;
