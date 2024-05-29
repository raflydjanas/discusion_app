"use client";

import { SidebarLinks } from "@/constans";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex-col fixed left-[15rem] gap-3 hidden lg:flex w-[20rem] mt-[4.5rem] p-6 border-r border-slate-600 h-full">
      {SidebarLinks.map((item, index) => {
        const isActive = pathname === item.link || pathname.startsWith(`${item.link}/`);
        return (
          <Link
            href={item.link}
            key={index}
            className={cn("flex text-white py-2 px-3 rounded-[0.2rem] gap-3 items-center", {
              "bg-[#bb2818]": isActive,
            })}
          >
            {item.icon && <Image src={item.icon} alt="icons" width={24} height={25} />}
            <p className="text-lg text-white font-base">{item.text}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
