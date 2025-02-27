"use client";

import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxLayout(props: Record<string, React.ReactNode>) {
  const alignCenter = { display: "flex", alignItems: "center" , justifyContent: "center" , height: "100vh"  };
  return (
    <Parallax pages={4} className="scroller">
      <ParallaxLayer
        offset={0}
        speed={0}
        style={alignCenter}
      >
        {props.heroSection}
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0}
        style={alignCenter}
        >
        {props.aboutSection}
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.2}
        style={alignCenter}
        >
        {props.technicalSection}
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={0.2}
        style={alignCenter}      
        >
        {props.contactUsSection}
      </ParallaxLayer>
    </Parallax>
  );
}
