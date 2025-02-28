"use client";

import Orbit from "@/components/shared/Orbit";
import TranslateAnimatedDiv from "@/components/shared/TranslateAnimatedDiv";
import React from "react";

const TechStack = () => {
  return (
    <div className="h-full min-h-screen w-full flex md:flex-row flex-col relative justify-between items-center">
      <TranslateAnimatedDiv
        className="mx-auto w-full"
        delay={200}
        duration={500}
      >
        <Orbit />
      </TranslateAnimatedDiv>
      <div className="bg-black text-white min-h-screen md:h-full flex flex-col justify-start w-full max-w-[1200px] items-center text-justify">
        <TranslateAnimatedDiv
          className="mx-auto w-full py-10 xl:py-4 px-6 xl:px-10 "
          delay={100}
          duration={300}
        >
          {`By aligning the TECH stack with the project's specific needs, team
        strengths, and future goals, you can create a robust, scalable, and
        efficient solution. Balancing innovation with practicality ensures the
        chosen stack supports both development and long-term success.`}
        </TranslateAnimatedDiv>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-10">
          {Array(10)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx + 1}
                className="max-w-[120px] w-full flex justify-center items-center aspect-square border-2 border-white"
              >
                Tech
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
