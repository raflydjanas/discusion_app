"use client";
import React from "react";
import { Button } from "../ui/shadCnUI/button";
import { useRouter } from "next/navigation";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { push } = useRouter();
  const { user } = useUser();
  return (
    <nav className="fixed top-0 w-full border-b border-gray-500 flex items-center justify-between px-10 py-4 z-50">
      <Link href={"/"} className="cursor-pointer">
        <h1>Discussion :)</h1>
      </Link>
      <div className="flex items-center gap-2 justify-center">
        {user ? (
          <SignedIn>
            <UserButton />
          </SignedIn>
        ) : (
          <Button className="cursor-pointer" onClick={() => push("/sign-in")}>
            login
          </Button>
        )}

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
