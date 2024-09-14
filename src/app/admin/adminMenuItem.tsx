"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
const AdminMenuItem = ({
  children,
  text,
  href,
}: {
  children: React.ReactNode;
  text: string;
  href: string;
}) => {
  const currentPath = usePathname();
  console.log(currentPath,' injaaah')
  return (
    <Link href={href}>
      <Button
        variant={currentPath === href ? "default" : "ghost"}
        className="w-11/12 text-xl font-semibold justify-start py-6 flex gap-2"
      >
        {children}
        <span>{text}</span>
      </Button>
    </Link>
  );
};

export default AdminMenuItem;
