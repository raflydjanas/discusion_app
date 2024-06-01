import React from "react";
import Image from "next/image";
import { DataUser } from "@/utils/suapbase";
import DropdownMenuUser from "./DropdownMenuUser";
import Likes from "./interksiUser/Likes";
import Comments from "./interksiUser/Comments";

const UserPost = ({ avatar, username, content, email, likes, comments, userPost_id, created_at }: DataUser) => {
  return (
    <div className="border-b border-slate-600 p-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image src={avatar as string} alt="profile" width={50} height={50} className="rounded-full" />
            {"|"}
            <h1>{username || email}</h1>
          </div>
          <DropdownMenuUser username={username} email={email} userPost_id={userPost_id} />
        </div>
        <i className="text-sm text-slate-400 ">{created_at?.substring(0, 10)}</i>
        <div className=" w-full lg:w-[30rem] p-3 text-left">
          <h1 className="overflow-auto text-md text-wrap">{content}</h1>
        </div>
      </div>
      <div className="flex ml-5 items-center justify-start w-[20rem]">
        <div className=" w-[9rem] flex gap-2">
          <Likes likes={likes} userPost_id={userPost_id} />
          <Comments comments={comments} userPost_id={userPost_id} avatar={avatar} username={username} content={content} />
        </div>
      </div>
    </div>
  );
};

export default UserPost;
