import { supabase } from "@/utils/suapbase";
import Image from "next/image";
import React from "react";

type ParamsProp = {
  comments_id?: number;
};
const ListComments = async ({ comments_id }: ParamsProp) => {
  const { data, error } = await supabase.from("diary").select("comments").eq("id", comments_id).single();

  if (error) return console.log(error);
  if (!data?.comments?.length) return null;

  return (
    <div className="flex flex-col gap-4 border-b border-slate-600 mt-10">
      {data?.comments?.map((comment: any) => (
        <div key={comment.comment_id} className="ml-4 p-4 bg-base-200">
          <div className="flex items-center gap-1 pb-3">
            <Image src={comment.avatar} alt={comment.avatar} width={40} height={40} className="rounded-full bg-primary " />
            <p>|</p>
            <p>{comment.username || comment.email}</p>
          </div>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ListComments;
