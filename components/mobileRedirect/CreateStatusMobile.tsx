"use client";

import React from "react";
import { Button } from "@/components/ui/shadCnUI/button";
import { RiQuillPenLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const CreateStatusMobile = () => {
  const { push } = useRouter();
  return (
    <Button className="fixed right-7 bottom-14 block lg:hidden p-3" onClick={() => push("/chatting/mobile")}>
      <RiQuillPenLine size={45} className="border bg-slate-600 text-slate-300" />
    </Button>
  );
};

export default CreateStatusMobile;
