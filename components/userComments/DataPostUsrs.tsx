import { DataUser } from "@/utils/suapbase";
import Image from "next/image";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaCommentMedical } from "react-icons/fa";

const DataPostUsrs = ({ created_at, avatar, username, content, likes, comments }: DataUser) => {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-2 mb-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image src={avatar as string} alt="profile" width={50} height={50} className="rounded-full" />
            {"|"}
            <h1>{username}</h1>
          </div>
        </div>
        <i className="text-sm text-slate-400 ">{created_at?.substring(0, 10)}</i>
        <div className=" w-full lg:w-[30rem] p-3 text-left">
          <h1 className="overflow-auto text-md text-wrap">{content}</h1>
        </div>
      </div>
      <div className="flex items-center justify-start  border-b border-t border-slate-600 py-4 px-10 w-full">
        <div className=" w-[9rem] flex gap-5">
          <div className="flex items-center justify-center gap-2">
            <AiFillLike size={25} />
            <p>{likes}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaCommentMedical size={25} />
            <p>{comments?.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPostUsrs;
