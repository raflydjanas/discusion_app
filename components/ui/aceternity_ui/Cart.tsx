"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./Carts";
import Link from "next/link";

export function Cart() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image src="/images/phone.jpg" height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}