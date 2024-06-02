"use client";
import { DataUser } from "@/utils/suapbase";
import Image from "next/image";
import React, { RefObject, useRef, useState } from "react";
import { FaCommentMedical } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/shadCnUI/dialog";
import { createCommentActions } from "@/actions/createcommnetActions";

const Comments = ({ userPost_id, avatar, username, content, email, comments }: DataUser) => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    setTimeout(() => {
      formRef.current?.reset();
    }, 700);
  };
  return (
    <div className="flex items-center justify-center gap-2 ">
      <Dialog>
        <DialogTrigger>
          <Image src={"/icons/command.svg"} alt="commend" width={20} height={20} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Image src={avatar as string} alt="profile" width={50} height={50} className="rounded-full" />
                    {"|"}
                    <h1>{username || email}</h1>
                  </div>
                </div>
                <div className=" w-full lg:w-[30rem] p-3 text-left ml-5">
                  <h1 className="overflow-auto text-md text-wrap">{content}</h1>
                </div>
              </div>
            </div>
          </DialogHeader>
          <form className="flex iteems-center gap-4" onSubmit={resetForm} action={createCommentActions} ref={formRef}>
            <input type="text" className="text-white bg-transparent py-2 px-3 focus:ring-0 focus:outline-none border-none focus:border-white" placeholder="Enter your comment" name="content" />
            <input type="hidden" value={userPost_id} name="userPost_id" />
            <button type="submit" className="rounded-full p-3">
              <FaCommentMedical size={30} />
            </button>
          </form>
        </DialogContent>
      </Dialog>
      <div>{comments?.length}</div>
    </div>
  );
};

export default Comments;
