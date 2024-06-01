import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/shadCnUI/dropdown-menu";
import { currentUser } from "@clerk/nextjs/server";
import { DataUser, supabase } from "@/utils/suapbase";
import AccountOwner from "./DropdownTriger/AccountOwner";
import NotAccountOwner from "./DropdownTriger/NotAccountOwner";

const DropdownMenuUser = async ({ username, email, userPost_id }: DataUser) => {
  const user = await currentUser();
  const isOwner = user?.username === username || user?.emailAddresses[0].emailAddress === email;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-4">{":"}</DropdownMenuTrigger>
      <DropdownMenuContent>{isOwner ? <AccountOwner userPost_id={userPost_id} /> : <NotAccountOwner />}</DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuUser;
