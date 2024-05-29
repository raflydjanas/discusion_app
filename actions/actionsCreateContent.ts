"use server";
import { redirect } from "next/navigation";
import { getUserData } from "@/utils/clerk";
import { supabase, DataUser } from "@/utils/suapbase";
import { Redirect } from "next";

export const createDiaryAction = async (formData: FormData): Promise<Redirect> => {
  const content = formData.get("content") as string;
  const { avatar, email, username } = await getUserData();

  const data: DataUser = { content, email, username, avatar };

  await supabase.from("chatting_app").insert(data);

  redirect("/chatting");
};
