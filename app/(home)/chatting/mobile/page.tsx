"use client";
import { aploadPostActions } from "@/actions/actionsCreateContent";
import { Textarea } from "@/components/ui/shadCnUI/textarea";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState } from "react";

const Mobile = () => {
  const { user } = useUser();
  const [open, setOpen] = useState("");

  return (
    <section className="mx-5">
      <div className="w-full border-b pb-5 border-slate-600 lg:hidden sm:block flex gap-2">
        <Image src={user?.imageUrl as string} alt="profile" width={80} height={80} className="rounded-full" />
        <form className="flex items-center" action={aploadPostActions}>
          <Textarea className="bg-transparent text-slate-300 px-5 border-none ring-slate-500 w-[15rem]" onChange={(e) => setOpen(e.target.value)} placeholder="What is happening?!" name="content" />
          {open === "" || open.length < 5 ? null : (
            <button type="submit" className="flex text-white py-2 px-3 rounded-[0.2rem] gap-3 items-center  font-bold text-3xl">
              {">"}
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Mobile;
