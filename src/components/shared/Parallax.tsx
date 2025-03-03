"use client";

import * as React from "react";
export default function ParallaxLayout(props: Record<string, React.ReactNode>) {
  return (
    <>
      {props.heroSection}
      {props.aboutSection}
      {props.technicalSection}
      {props.contactUsSection}
    </>
  );
}
