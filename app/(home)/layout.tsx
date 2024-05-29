"use client";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";
import { usePathname } from "next/navigation";
import React from "react";

const hiddeNavbar = ["/chatting/mobile"];

const LayoutHome = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <main className="relative w-full">
      {!hiddeNavbar.includes(pathname) && <Navbar />}
      <div className="flex mx-0 lg:mx-[5rem]">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col lg:px-6 pb-6 lg:mt-[4.5rem] mt-[3.5rem] max-md:pb-14 sm:px-14 w-full ">
          <div className="lg:ml-[35rem] w-full lg:max-w-[50rem]">{children}</div>
        </section>
        <div className="w-[20rem] border-l border-slate-600 mt-[4.5rem] hidden sm:block p-6">test</div>
      </div>
    </main>
  );
};

export default LayoutHome;
