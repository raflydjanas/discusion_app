"use server";
import { getUserData } from "@/utils/clerk";
import { IComments, supabase } from "@/utils/suapbase";
import { randomUUID } from "crypto";

export const createCommentActions = async (formData: FormData) => {
  const content = formData.get("content") as string;
  const userPost_id = formData.get("userPost_id");
  const comments_id = randomUUID();

  const { avatar, email, username } = await getUserData();

  const data: IComments = { comments_id, content, email, username, avatar };

  const getcomments = await supabase.from("chatting_app").select("comments").eq("id", userPost_id).single();
  const existcomments: Array<IComments> = getcomments?.data?.comments || [];

  const newcomments = [...existcomments, data];

  await supabase.from("chatting_app").update({ comments: newcomments }).eq("id", userPost_id);
};
