import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { MorphingText } from "@/components/magicui/morphing-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BoxReveal } from "@/components/magicui/box-reveal";

const ContactUs = () => {
  return (
    <div className="w-full h-full flex flex-row sm:h-screen md:flex-row md:gap-10 relative justify-between items-center">
      <div className="flex-1 w-full h-full bg-black flex items-center justify-center">
        <div className="text-white font-[1000] italic uppercase p-10 leading-[35px] flex flex-col gap-5">
          <BoxReveal boxColor={"#ffffff"} duration={0.25}>
            <span className="block text-[20px]">
              <span className="text-[20px] bg-white text-black p-2 me-2">
               &quot; Code
              </span>
              like a warrior ,
            </span>
          </BoxReveal>

          <BoxReveal boxColor={"#ffffff"} duration={0.35}>
            <span className="block text-[20px]">
              <span className="text-[20px] bg-white text-black p-2 me-2">
                debug
              </span>
              like a detective ,
            </span>
          </BoxReveal>

          <BoxReveal boxColor={"#ffffff"} duration={0.45}>
            <span className="block text-[20px]">
              and
              <span className="text-[20px] bg-white text-black p-2 mx-2">
                deliver
              </span>
              like a champion .
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
          <BoxReveal boxColor={"#000000"} duration={0.25}>
            <h5 className="ps-2">Let&apos;s Work Together Projects</h5>
          </BoxReveal>

          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <h5 className="ps-2">Connect with me</h5>
          </BoxReveal>

          <BoxReveal boxColor={"#000000"} duration={0.75}>
            <form className="flex flex-wrap justify-between pt-5 p-2 gap-5">
              <Input type="text" placeholder="Name" className="flex-1" />
              <Input type="email" placeholder="Email" className="flex-1" />
              <div className="grid w-full gap-2">
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  rows={5}
                />
                <p className="text-[14px] text-muted-foreground py-2">
                  Feel free to reach out with any questions, opportunities, or
                  collaborations. Your message will go directly to me, and
                  I&apos;ll get back to you as soon as possible!
                </p>
              </div>
              <ShimmerButton className="shadow-2xl w-full">
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Submit
                </span>
              </ShimmerButton>
            </form>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
