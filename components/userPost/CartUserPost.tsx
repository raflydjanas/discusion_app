import { supabase } from "@/utils/suapbase";
import UserPost from "./userPost";
import Image from "next/image";
import React from "react";

const CartUserPost = async (): Promise<React.ReactElement> => {
  const { data, error } = await supabase.from("chatting_app").select().order("created_at", { ascending: false });

  if (error) return <h1>Loading....</h1>;

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <UserPost key={item.id} avatar={item.avatar} username={item.username} content={item.content} email={item.email} likes={item.likes} comments={item.comments} />
        ))}
      </div>
    </div>
  );
};

export default CartUserPost;
