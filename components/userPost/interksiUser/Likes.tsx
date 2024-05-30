"use client";
import { Button } from "@/components/ui/shadCnUI/button";
import { DataUser, IComments, supabase } from "@/utils/suapbase";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Likes = ({ likes = 0, user_id, content_id }: IComments) => {
  const { user } = useUser();
  const [liked, setLiked] = useState(likes);
  const [userLiked, setUserLiked] = useState(false);

  useEffect(() => {
    const checkUserLiked = async () => {
      const { data, error } = await supabase.from("chatting_app").select("content").eq("id", user_id).eq("content", content_id);

      if (error) {
        console.log("Gagal memriksa apakah pengguna telah melike postingan ini", error);
      } else {
        setUserLiked(data.length > 0);
      }
    };

    checkUserLiked();
  }, [content_id, user_id]);

  const handleLike = async () => {
    try {
      if (!userLiked) {
        await supabase
          .from("chatting_app")
          .update({ likes: liked + 1 })
          .eq("id", user_id)
          .eq("content", content_id);

        setUserLiked(true);
      }
    } catch (error) {
      console.error("Gagal memperbarui jumlah like di database:", error);
    }
  };

  return (
    <>
      <Button className="flex items-center justify-center gap-2" onClick={handleLike}>
        <Image src={"/icons/like.svg"} alt="like" width={20} height={20} />
        <p>{liked}</p>
      </Button>
    </>
  );
};

export default Likes;
