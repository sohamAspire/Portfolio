"use client";

import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxLayout(props: Record<string, React.ReactNode>) {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <Parallax pages={2}>
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
        style={{ ...alignCenter, justifyContent: "flex-end" }}
      >
        {props.technicalSection}
      </ParallaxLayer>
    </Parallax>
  );
}
