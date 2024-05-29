import React from "react";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/shadCnUI/sheet";
import Image from "next/image";
import { SidebarLinks } from "@/constans";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full">
      <Sheet>
        <SheetTrigger className="text-white">
          <Image src="/icons/hamburger.svg" alt="hamburger" width={25} height={25} className="cursor-pointer sm:hidden mt-1" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-slate-900 text-white flex flex-col p-10 gap-3">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16 text-white">
              {SidebarLinks.map((item, i) => {
                const isActive = pathname === item.link;
                return (
                  <SheetClose asChild key={item.link}>
                    <Link
                      href={item.link}
                      key={i}
                      className={cn("flex items-center gap-2 py-3 px-5 rounded-[0.2rem]", {
                        "bg-[#bb2818]": isActive,
                      })}
                    >
                      <Image src={item.icon} alt="icon" width={25} height={25} />
                      <p className="text-lg font-base text-white">{item.text}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
