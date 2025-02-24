// import { Dock } from "@/components/magicui/dock";
// import React, { ReactNode } from "react";
// import { GoStack } from "react-icons/go";
// import { RiNextjsLine } from "react-icons/ri";
// import { SiNestjs } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { GrMysql } from "react-icons/gr";

// type Props = {
//   children: ReactNode;
// };

// const DockProvider = ({ children }: Props) => {
//   return (
//     <>
//       <div className="dock">

//         {/* <Dock className="w-full flex justify-between bg-black">
//           <GoStack className="icon" />
//           <RiNextjsLine className="icon" />
//           <SiNestjs className="icon" />
//           <FaNodeJs className="icon" />
//           <SiMongodb className="icon" />
//           <GrMysql className="icon" />
//         </Dock> */}
//       </div>
//       {children}
//     </>
//   );
// };

// export default DockProvider;

"use client";

import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { PiReadCvLogo } from "react-icons/pi";
import { TbLogs } from "react-icons/tb";

export type IconProps = React.HTMLAttributes<SVGElement>;

const icons = [
  {
    label: "Home",
    icon: <SiHomeassistantcommunitystore />,
    route: "/#",
  },
  {
    label: "Blogs",
    icon: <TbLogs />,
    route: "/#",
  },
  {
    label: "Curriculum Vitae (CV)",
    icon: <PiReadCvLogo />,
    route: "/#",
  },
];

export function DockProvider() {
  return (
    <div className="dock">
      <div className="flex flex-col items-center justify-center">
        <TooltipProvider>
          <Dock direction="middle">
            {icons.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.route}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      {item.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="tooltip">{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </div>
    </div>
  );
}
