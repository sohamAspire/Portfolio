import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { MorphingText } from "@/components/magicui/morphing-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import TranslateAnimatedDiv from "@/components/shared/TranslateAnimatedDiv";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col h-screen md:flex-row relative justify-between items-center">
      <div className="flex-1 w-full h-full bg-black flex items-center justify-center">
        <div className="text-white font-[1000] italic uppercase p-10 leading-[35px] flex flex-col gap-5">
          <BoxReveal boxColor={"#ffffff"} duration={0.25}>
            <span className="block text-[20px]">
              <span className="text-[20px] bg-white text-black p-2 me-2">
                &quot; Code
              </span>
              like a
              <span className="relative after:ms-2 ps-2 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-4px] after:left-0">
                warrior
              </span>
              ,
            </span>
          </BoxReveal>

          <BoxReveal boxColor={"#ffffff"} duration={0.35}>
            <span className="block text-[20px]">
              <span className="text-[20px] bg-white text-black p-2 me-2">
                debug
              </span>
              like a
              <span className="relative after:ms-2 ps-2 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-4px] after:left-0">
                detective
              </span>
              ,
            </span>
          </BoxReveal>

          <BoxReveal boxColor={"#ffffff"} duration={0.45}>
            <span className="block text-[20px]">
              and
              <span className="text-[20px] bg-white text-black p-2 mx-2">
                deliver
              </span>
              like a
              <span className="relative after:ms-2 ps-2 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-4px] after:left-0">
                champion
              </span>
              .
            </span>
          </BoxReveal>

          <BoxReveal boxColor={"#ffffff"} duration={0.5}>
            <span className="block text-[20px]">
              The world runs on what we
              <span className="text-[20px] bg-white text-black p-2 ms-2">
                build . &quot;
              </span>
            </span>
          </BoxReveal>
        </div>
      </div>
      <div className="flex-1 flex justify-center w-full h-full bg-white">
        <div className="flex flex-col items-start justify-center p-10">
          <TranslateAnimatedDiv delay={50} loop={true}>
            <h5 className="ps-2 font-bold uppercase text-[20px] md:text-[28px]">
              Let&apos;s Work Together Projects
            </h5>
          </TranslateAnimatedDiv>
          <TranslateAnimatedDiv loop={true} delay={70}>
            <h6 className="ps-2 font-bold uppercase text-[16px] md:text-[24px]">
              Connect With Me
            </h6>
          </TranslateAnimatedDiv>
          <form className="flex flex-wrap justify-between pt-5 p-2 gap-5">
            <TranslateAnimatedDiv loop={true} delay={100} className="flex-1">
              <Input type="text" placeholder="Name" />
            </TranslateAnimatedDiv>
            <TranslateAnimatedDiv loop={true} delay={200} className="flex-1">
              <Input type="email" placeholder="Email" />
            </TranslateAnimatedDiv>
            <div className="grid w-full gap-2">
              <TranslateAnimatedDiv loop={true} delay={300}>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  rows={5}
                />
              </TranslateAnimatedDiv>
              <TranslateAnimatedDiv loop={true} delay={400}>
                <p className="text-[14px] text-muted-foreground py-2">
                  Feel free to reach out with any questions, opportunities, or
                  collaborations. Your message will go directly to me, and
                  I&apos;ll get back to you as soon as possible!
                </p>
              </TranslateAnimatedDiv>
            </div>
            <TranslateAnimatedDiv loop={true} delay={500} className="w-full">
              <ShimmerButton className="shadow-2xl w-full">
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Submit
                </span>
              </ShimmerButton>
            </TranslateAnimatedDiv>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
