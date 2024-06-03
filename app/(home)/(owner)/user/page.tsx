import { getUserData } from "@/utils/clerk";
import Image from "next/image";
import React from "react";

const UserPage = async () => {
  const { avatar, email, username } = await getUserData();

  return (
    <main className="p-5">
      <div className="flex gap-48 border-b border-t border-slate-600 items-center p-2 mb-5">
        <h2 className="text-xl font-bold">Profile :</h2>
        <Image src={avatar as string} alt="profile" width={100} height={100} className="rounded-full" />
      </div>
      <div className="flex gap-48 border-b border-t border-slate-600 items-center p-6 mb-5">
        <h2 className="text-xl font-bold">Username :</h2>
        <p className="text-lg font-semibold">{username?.toUpperCase() || ""}</p>
      </div>
      <div className="flex gap-48 border-b border-t border-slate-600 items-center p-6 mb-5">
        <h2 className="text-xl font-bold">Email :</h2>
        <p className="text-lg font-semibold">{email || ""}</p>
      </div>
    </main>
  );
};

export default UserPage;
