import Orbit from "@/components/shared/Orbit";
import React from "react";

const TechStack = () => {
  return (
    <div className="h-full sm:h-screen w-full flex md:flex-row flex-col md:gap-10 relative justify-between items-center">
      <Orbit />
      <p className="bg-black text-white md:h-full py-10 xl:py-4 w-full md:w-[60%] max-w-[800px] flex items-center justify-center px-6 xl:px-10 text-justify">
        {`By aligning the TECH stack with the project's specific needs, team
        strengths, and future goals, you can create a robust, scalable, and
        efficient solution. Balancing innovation with practicality ensures the
        chosen stack supports both development and long-term success.`}
      </p>
    </div>
  );
};

export default TechStack;
