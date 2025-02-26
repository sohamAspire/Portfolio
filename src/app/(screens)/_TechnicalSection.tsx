"use client";

import Orbit from "@/components/shared/Orbit";
import TranslateAnimatedDiv from "@/components/shared/TranslateAnimatedDiv";
import React from "react";

const TechStack = () => {
  return (
    <div className="h-full sm:h-screen w-full flex md:flex-row flex-col md:gap-10 relative justify-between items-center">
      <TranslateAnimatedDiv
        className="mx-auto w-full"
        delay={200}
        duration={500}
      >
        <Orbit />
      </TranslateAnimatedDiv>
      <TranslateAnimatedDiv
        className="mx-auto w-full"
        delay={100}
        duration={200}
      >
        <p className="bg-black text-white min-h-screen md:h-full flex justify-start py-10 xl:py-4 w-full max-w-[800px] items-center px-6 xl:px-10 text-justify">
          {`By aligning the TECH stack with the project's specific needs, team
        strengths, and future goals, you can create a robust, scalable, and
        efficient solution. Balancing innovation with practicality ensures the
        chosen stack supports both development and long-term success.`}
        </p>
      </TranslateAnimatedDiv>
    </div>
  );
};

export default TechStack;
