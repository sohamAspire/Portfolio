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

const Trail: React.FC<{
  open: boolean;
  children: ReactNode;
  ref?: RefObject<HTMLDivElement | null>;
}> = ({ open, children, ref }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="w-fit flex flex-col">
      {trail.map(({ height, ...style }, index) => (
        <AnimatedDiv
          key={index}
          className={"trailsText"}
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
      <Meteors />
      <Trail open={open} ref={ref}>
        <span className="gradient-text text-[100px]">Lorem Lipsum</span>
        <span className="gradient-text text-[60px]">Software Engineer</span>
      </Trail>
    </div>
  );
}

const AnimatedDiv: React.FC<
  React.ComponentProps<typeof animated.div> & {
    children: ReactNode;
    className?: string;
    style?: Record<string, unknown>;
    ref?: RefObject<HTMLDivElement | null>;
  }
> = ({ children, ...props }) => {
  return <animated.div {...props}>{children}</animated.div>;
};
