"use client";

import HeroSection from "@/components/hero/HeroSection";
import { Button } from "@/components/ui/shadCnUI/button";
import Image from "next/image";
import { Cart } from "@/components/ui/aceternity_ui/Cart";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <main className="flex min-h-[80rem] flex-col items-center mt-14">
      <div className="border-b border-slate-600">
        <HeroSection />
      </div>
      <div className="w-full flex flex-col mt-16 lg:flex-row items-center justify-evenly">
        <div className="mx-4 animate__animated animate__delay-1s animate__bounceInLeft">
          <Cart />
        </div>
        <div className="mt-10 lg:mt-0 animate__animated animate__delay-2s animate__bounceInRight">
          <h2 className="text-3xl font-bold text-center mb-5">Share Pictures you like with your friend</h2>
          <p className="max-w-lg text-center lg:text-start text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate id, quae incidunt dolores voluptatum veritatis harum corrupti fugit asperiores libero totam aspernatur vitae perferendis
            ratione nemo vel omnis quibusdam nulla.
          </p>
          <Button className="bg-blue-500 px-5 py-3 rounded-lg mt-4 cursor-pointer hidden md:block" onClick={() => push("/sign-in")}>
            join us
          </Button>
        </div>
      </div>
    </main>
  );
}
