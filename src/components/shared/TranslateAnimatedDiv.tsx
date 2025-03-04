"use client";

import { useState, useEffect, useRef, ReactNode, RefObject } from "react";
import { useTransition } from "@react-spring/web";
import { AnimatedDiv } from "@/app/(screens)/_HeroSection";

const useOnScreen = (ref: RefObject<HTMLDivElement | null>, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return isVisible;
};

const TranslateAnimatedDiv = ({
  children,
  className,
  delay = 200,
  duration = 500,
  direction = "vertical",
  loop,
  animation = "slide",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "vertical" | "horizontal";
  loop?: boolean;
  animation?: "fade" | "slide";
}) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  const transitions = useTransition(
    isVisible && loop ? [children] : !loop ? [children] : [],
    {
      from: {
        opacity: 0,
        transform:
          direction == "vertical" && animation == "slide"
            ? "translateY(100px)"
            : animation == "slide"
            ? "translateX(100px)"
            : undefined,
      },
      enter: {
        opacity: 1,
        transform:
          direction == "vertical" && animation == "slide"
            ? "translateY(0px)"
            : animation == "slide"
            ? "translateX(100px)"
            : undefined,
      },
      leave: {
        opacity: 0,
        transform:
          direction == "vertical" && animation == "slide"
            ? "translateY(100px)"
            : animation == "slide"
            ? "translateX(100px)"
            : undefined,
      },
      delay,
      config: { tension: 800, friction: 20, duration: duration },
    }
  );

  return (
    <div ref={ref} className={className}>
      {transitions((style, item) => (
        <AnimatedDiv style={style}>{item}</AnimatedDiv>
      ))}
    </div>
  );
};

export default TranslateAnimatedDiv;
