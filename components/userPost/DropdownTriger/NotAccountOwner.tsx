"use client";
import React from "react";
import { DropdownMenuItem } from "@/components/ui/shadCnUI/dropdown-menu";

const NotAccountOwner = () => {
  return (
    <>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Chatting</DropdownMenuItem>
      <DropdownMenuItem>Follow</DropdownMenuItem>
    </>
  );
};

export default NotAccountOwner;
