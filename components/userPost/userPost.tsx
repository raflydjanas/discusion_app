import React from "react";
import Image from "next/image";
import { DataUser } from "@/utils/suapbase";
import { Button } from "../ui/shadCnUI/button";
import DropdownMenuUser from "./DropdownMenuUser";
import Likes from "./interksiUser/Likes";
import Comments from "./interksiUser/Comments";

const UserPost = async ({ avatar, username, content, email, likes, comments, user_id }: DataUser) => {
  return (
    <div className="border-b border-slate-600 p-6">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image src={avatar as string} alt="profile" width={50} height={50} className="rounded-full" />
            {"|"}
            <h1>{username || email}</h1>
          </div>
          <DropdownMenuUser username={username} email={email} user_id={user_id} />
        </div>
        <div className=" w-full lg:w-[30rem] p-4 text-left">
          <h1 className="overflow-auto text-md text-wrap">{content}</h1>
        </div>
      </div>
      <div className="flex ml-10 items-center justify-start gap-3">
        <Likes likes={likes} user_id={user_id} />
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default UserPost;
