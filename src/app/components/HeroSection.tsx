"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={["Sergio", 1000, "Front-End Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          </p>
          <div className="flex flex-col gap-2 md:flex-row">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 hover:bg-slate-800 text-white">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          {/* <div className="rounded-full bg-[#181818] w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] relative"> */}
          <Image
            className="rounded-full object-cover w-[200px] h-[200px] lg:h-[300px] lg:w-[300px]"
            alt="hero image"
            src="/images/hero-image.jpeg"
            width={200}
            height={200}
          />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
