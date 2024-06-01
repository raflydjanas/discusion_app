"use client";
import { Button } from "@/components/ui/shadCnUI/button";
import { DataUser, supabase } from "@/utils/suapbase";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";

import { useState } from "react";

const Likes = ({ likes, userPost_id }: DataUser) => {
  const [liked, setLiked] = useState(likes!);

  const handleLike = async () => {
    const { error } = await supabase
      .from("chatting_app")
      .update({ likes: likes! + 1 })
      .eq("id", userPost_id)
      .single();

    setLiked(liked + 1);
    if (error) console.log(error);
  };

  const handleDisLike = async () => {
    const { error } = await supabase
      .from("chatting_app")
      .update({ likes: likes! <= 0 ? 0 : likes! - 1 })
      .eq("id", userPost_id)
      .single();

    setLiked(liked <= 0 ? 0 : liked - 1);
    if (error) console.log(error);
  };

  return (
    <div className="flex items-center justify-center w-[5rem] gap-2">
      <Button className="" onClick={handleLike}>
        <AiFillLike size={20} className="text-white" />
      </Button>
      <Button className="" onClick={handleDisLike}>
        <BiSolidDislike size={20} className="text-white" />
      </Button>
      <div className="">{liked}</div>
    </div>
  );
};

export default Likes;
