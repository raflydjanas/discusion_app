import React from "react";
import Image from "next/image";
import { DataUser } from "@/utils/suapbase";
import { Button } from "../ui/shadCnUI/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const UserPost = ({ avatar, username, content, email, likes, comments }: DataUser) => {
  return (
    <div className="border-b border-slate-600 p-6">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image src={avatar as string} alt="profile" width={50} height={50} className="rounded-full" />
            {"|"}
            <h1>{username || email}</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>:</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Chatting</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Follow</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className=" w-full lg:w-[30rem] p-4 text-left">
          <h1 className="overflow-auto text-md text-wrap">{content}</h1>
        </div>
      </div>
      <div className="flex ml-10 items-center justify-start gap-3">
        <Button className="flex items-center justify-center gap-2">
          <Image src={"/icons/like.svg"} alt="like" width={20} height={20} />
          <p>{likes}</p>
        </Button>
        <Button className="flex items-center justify-center gap-2">
          <Image src={"/icons/command.svg"} alt="commend" width={20} height={20} />
          <p>{comments?.length}</p>
        </Button>
      </div>
    </div>
  );
};

export default UserPost;
