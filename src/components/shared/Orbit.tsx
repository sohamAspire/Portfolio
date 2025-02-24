"use client";

import React, { useEffect, useState } from "react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { FaReact } from "react-icons/fa";
import { SiAngular } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

import TooltipWrapper from "./Tooltip";

const Orbit = () => {
  const [radius, setRadius] = useState({ outer: 200, middle: 150, inner: 110 });

  // Update radius based on viewport size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setRadius({ outer: 160, middle: 120, inner: 80 });
      } else if (width < 1080) {
        setRadius({ outer: 160, middle: 120, inner: 80 });
      } else {
        setRadius({ outer: 200, middle: 150, inner: 110 });
      }
    };

    // Set initial radius and add resize listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex md:mx-auto m-5 min-w-[200px] w-full md:w-[400px] aspect-square relative justify-center items-center bg-white text-black font-bold">
      <OrbitingCircles radius={radius.outer} speed={0.2}>
        <TooltipWrapper content="React">
          <FaReact className="icon" />
        </TooltipWrapper>
        <TooltipWrapper content="Angular">
          <SiAngular className="icon" />
        </TooltipWrapper>
        <TooltipWrapper content="Next Js">
          <RiNextjsLine className="icon" />
        </TooltipWrapper>
      </OrbitingCircles>
      <OrbitingCircles radius={radius.middle} reverse={true} speed={0.5}>
        <TooltipWrapper content="Nest Js">
          <SiNestjs className="icon" />
        </TooltipWrapper>
        <TooltipWrapper content="Node Js">
          <FaNodeJs className="icon" />
        </TooltipWrapper>
        <TooltipWrapper content="Mongo Db">
          <SiMongodb className="icon" />
        </TooltipWrapper>
        <TooltipWrapper content="MySQL">
          <GrMysql className="icon" />
        </TooltipWrapper>
      </OrbitingCircles>
      <OrbitingCircles radius={radius.inner} speed={0.7}>
        <TooltipWrapper content="Docker">
          <FaDocker className="icon" />
        </TooltipWrapper>
        <TooltipWrapper content="Docker">
          <FaGitAlt className="icon" />
        </TooltipWrapper>
      </OrbitingCircles>
    </div>
  );
};

export default Orbit;
