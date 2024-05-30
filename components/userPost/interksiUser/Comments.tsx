import { Button } from "@/components/ui/shadCnUI/button";
import { DataUser } from "@/utils/suapbase";
import Image from "next/image";
import React from "react";

const Comments = ({ comments }: DataUser) => {
  return (
    <>
      <Button className="flex items-center justify-center gap-2">
        <Image src={"/icons/command.svg"} alt="commend" width={20} height={20} />
        <p>{comments?.length}</p>
      </Button>
    </>
  );
};

export default Comments;
