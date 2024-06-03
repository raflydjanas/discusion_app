"use client";
import { useState } from "react";
import { DropdownMenuItem } from "@/components/ui/shadCnUI/dropdown-menu";
import { DataUser, supabase } from "@/utils/suapbase";
import { useToast } from "@/components/ui/shadCnUI/use-toast";

const AccountOwner = ({ userPost_id }: DataUser) => {
  const { toast } = useToast();
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const deletePost = async () => {
    const { error } = await supabase.from("chatting_app").delete().eq("id", userPost_id).single();

    if (error) {
      toast({ title: "❌Error: cannot Delete this post" });
    } else {
      toast({ title: "✅ Success: Delete this post, please reload your page" });
    }
  };

  return (
    <>
      <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer" onClick={deletePost}>
        Delete
      </DropdownMenuItem>
    </>
  );
};

export default AccountOwner;
