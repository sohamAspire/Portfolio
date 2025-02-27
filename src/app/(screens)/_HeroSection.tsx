"use client";

import React, {
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTrail, animated } from "@react-spring/web";
import { Meteors } from "@/components/shared/Meteors";
import { useBreakpoint } from "@/hooks/useBreakPoint";
import Image from "next/image";
import Mountains from "../../../public/mountains.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Trail: React.FC<{
  open: boolean;
  children: ReactNode;
  ref?: RefObject<HTMLDivElement | null>;
}> = ({ open, children, ref }) => {
  const { screenType } = useBreakpoint();
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? (["xs", "sm"].includes(screenType) ? 50 : 110) : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="w-fit flex flex-col">
      {trail.map(({ height, ...style }, index) => (
        <AnimatedDiv
          key={index}
          className={`trailsText h-[${
            ["xs", "sm"].includes(screenType) ? "50px" : "100px"
          }]`}
          ref={ref}
          style={style}
        >
          <AnimatedDiv style={{ height, letterSpacing: "normal" }}>
            {items[index]}
          </AnimatedDiv>
        </AnimatedDiv>
      ))}
    </div>
  );
};

export default function HeroSection() {
  const [open, set] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        set(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      className={"text-container min-h-screen relative"}
      onClick={() => set((state) => !state)}
    >
      <Meteors side="left" />
      <Meteors side="right" />
      <Trail open={open} ref={ref}>
        <span className="gradient-text block text-center text-[48px] md:text-[100px]">
          Soham Patel
        </span>
        <span className="gradient-text block text-center text-[36px] md:text-[60px]">
          Software Engineer
        </span>
      </Trail>

      <Parallax pages={1.2} className="scroller">
        <ParallaxLayer offset={0.35} speed={0.5}>
          <div className="w-full h-full absolute left-0 bottom-[-32%] z-[-50]">
            <Image
              alt="mountains"
              className="w-full h-full object-cover"
              quality={100}
              src={Mountains}
              width={1000}
              height={100}
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export const AnimatedDiv: React.FC<
  React.ComponentProps<typeof animated.div> & {
    children: ReactNode;
    className?: string;
    style?: Record<string, unknown>;
    ref?: RefObject<HTMLDivElement | null>;
  }
> = ({ children, ...props }) => {
  return <animated.div {...props}>{children}</animated.div>;
};
