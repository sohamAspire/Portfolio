"use client";

import TranslateAnimatedDiv from "@/components/shared/TranslateAnimatedDiv";
import Image from "next/image";
import React from "react";
import Self from "../../../public/self.png";
import { AnimatedDiv } from "./_HeroSection";

const AboutMe = () => {
  const PROFILE = {
    name: "Soham Patel",
    birthday: "18-01-2002",
    phone: "7698743606",
    freelance: "Available",
    email: "patelsoham924@gmail.com",
  };

  return (
    <div className="w-full flex flex-col h-screen md:flex-row relative justify-between items-center">
      <div className="flex-1 w-full h-[400px] md:h-full bg-black flex items-center justify-center">
        <AnimatedDiv className="text-white uppercase flex flex-col w-full h-full gap-5 md:pe-20 overflow-hidden">
          <Image
            alt="profile"
            className="w-full h-full object-cover"
            quality={100}
            src={Self}
            width={1000}
            height={100}
          />
        </AnimatedDiv>
      </div>
      <div className="flex-1 flex justify-center w-full h-full items-center bg-white">
        <div className="p-10 gap-6 flex flex-col">
          <TranslateAnimatedDiv
            delay={0}
            animation="fade"
            duration={300}
            direction="horizontal"
          >
            Hi, I&apos;m <b className="tracking-wider px-2">{PROFILE.name}</b>,
            an enthusiastic Associate Software Engineer with a strong passion
            for building scalable and efficient web applications. My expertise
            lies in both the MERN (MongoDB, Express.js, React, Node.js) and MEAN
            (MongoDB, Express.js, Angular, Node.js) stacks, allowing me to
            deliver dynamic, responsive, and high-performance applications. I
            thrive on solving complex problems, writing clean and maintainable
            code, and staying up-to-date with the latest technologies in the
            ever-evolving world of software development.
          </TranslateAnimatedDiv>
          <TranslateAnimatedDiv
            animation="fade"
            delay={100}
            duration={300}
            direction="horizontal"
          >
            Birthday : {PROFILE.birthday}
          </TranslateAnimatedDiv>
          <TranslateAnimatedDiv
            animation="fade"
            delay={200}
            duration={300}
            direction="horizontal"
          >
            Phone : {PROFILE.phone}
          </TranslateAnimatedDiv>
          <TranslateAnimatedDiv
            animation="fade"
            delay={300}
            duration={300}
            direction="horizontal"
          >
            FreeLance : {PROFILE.freelance}
          </TranslateAnimatedDiv>
          <TranslateAnimatedDiv
            animation="fade"
            delay={400}
            duration={300}
            direction="horizontal"
          >
            Email : {PROFILE.email}
          </TranslateAnimatedDiv>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
