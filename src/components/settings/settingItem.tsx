"use client";
import { SettingItemProps } from "@/types/settings.type";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

const SettingItem: React.FC<SettingItemProps> = ({
  description,
  footer,
  href,
  title,
  Icon,
}) => {
  return (
    <Card className="group hover:bg-primary hover:text-secondary transition-all duration-300">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="group-hover:text-secondary-200 transition-all duration-300">
          {" "}
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={href}>
          <Button className="group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
            {`رفتن به ${title}`}
            <Icon />
          </Button>
        </Link>
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  );
};

export default SettingItem;
