import React from "react";
import Image from "next/image";

import "animate.css";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between w-full px-4 lg:px-10">
      <div className="mb-8 lg:mb-0 w-full lg:w-1/2 ">
        <h1 className="font-extrabold text-2xl my-5  lg:my-0 lg:text-5xl leading-6 text-black text-center lg:text-left">
          Chating with your friends used <span className="text-[#FF4D38]">Chating :)</span>
        </h1>
        <h3 className="hidden lg:block text-2xl py-3 text-slate-200 font-bold">Onether People: mom</h3>
        <p className="text-base text-center  lg:text-start lg:text-ellipsis lg:text-lg text-slate-200 animate__animated animate__delay-4s animate__bounceInLeft">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quod minus molestias dicta commodi fuga ab quidem atque soluta. Soluta consectetur iure ab voluptas vitae! Mollitia ratione
          accusamus eos ad?
        </p>
      </div>
      <div className="flex justify-center w-full lg:w-1/2 animate__animated animate__delay-1s animate__bounceInRight">
        <Image src="/images/hero.svg" alt="hero" width={800} height={800} layout="responsive" />
      </div>
    </section>
  );
};

export default HeroSection;
