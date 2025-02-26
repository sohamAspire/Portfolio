"use client";

import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxLayout(props: Record<string, React.ReactNode>) {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <Parallax pages={3} className="scroller">
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{ ...alignCenter, justifyContent: "center" }}
      >
        {props.heroSection}
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={1.5}
        style={{ ...alignCenter, justifyContent: "center" }}
      >
        {props.technicalSection}
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1.5}
        style={{ ...alignCenter, justifyContent: "flex-start" }}
      >
        {props.contactUsSection}
      </ParallaxLayer>
    </Parallax>
  );
}
