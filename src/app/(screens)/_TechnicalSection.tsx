"use client";

import Orbit from "@/components/shared/Orbit";
import TranslateAnimatedDiv from "@/components/shared/TranslateAnimatedDiv";
import React from "react";

const techStack = {
  React: { name: "React", icon: "SiReact" },
  NodeJS: { name: "NodeJS", icon: "SiNodeDotJs" },
  MongoDB: { name: "MongoDB", icon: "SiMongodb" },
  ExpressJS: { name: "ExpressJS", icon: "SiExpress" },
  Angular: { name: "Angular", icon: "SiAngular" },
  TypeScript: { name: "TypeScript", icon: "SiTypescript" },
  JavaScript: { name: "JavaScript", icon: "SiJavascript" },
  TailwindCSS: { name: "TailwindCSS", icon: "SiTailwindcss" },
  MySQL: { name: "MySQL", icon: "SiMysql" },
  PostgreSQL: { name: "PostgreSQL", icon: "SiPostgresql" },
  Git: { name: "Git", icon: "SiGit" },
  Docker: { name: "Docker", icon: "SiDocker" },
  AWS: { name: "AWS", icon: "SiAmazonaws" },
  Redux: { name: "Redux", icon: "SiRedux" },
  NextJS: { name: "NextJS", icon: "SiNextdotjs" },
  NestJS: { name: "NestJS", icon: "SiNestjs" },
  HTML: { name: "HTML", icon: "SiHtml5" },
  CSS: { name: "CSS", icon: "SiCss3" },
  GraphQL: { name: "GraphQL", icon: "SiGraphql" },
};

const TechStack = () => {
  return (
    <div className="bg-black relative h-full w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 sticky top-0 left-0 h-full md:h-screen flex items-center justify-center bg-white">
        <Orbit />
      </div>

      <div className="h-full overflow-y-auto scroller w-full md:w-1/2 text-white flex flex-col text-justify">
        <TranslateAnimatedDiv
          className="mx-auto w-full py-10 xl:py-10 px-6 xl:px-10"
          delay={100}
          duration={300}
        >
          {`By aligning the TECH stack with the project's specific needs, team strengths, and future goals, you can create a robust, scalable, and efficient solution. Balancing innovation with practicality ensures the chosen stack supports both development and long-term success.`}
        </TranslateAnimatedDiv>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 pb-10 px-6 md:px-10">
          {Object.values(techStack).map((tech) => {
            return (
              <div
                key={tech.name}
                className="flex items-center border-2 border-white/50 rounded-xl p-4 shadow-xl min-w-[100px] aspect-square flex-col justify-center"
              >
                <p className="px-4">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
