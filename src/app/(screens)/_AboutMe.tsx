import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full h-full flex flex-row min-h-screen md:flex-row relative justify-between items-center">
      <div className="flex-1 w-full h-full bg-black flex items-center justify-center">
        <div className="text-white uppercase p-10 flex flex-col gap-5">
          Photo
        </div>
      </div>
      <div className="flex-1 flex justify-center w-full h-full items-center bg-white">
        <div className="p-10 gap-6 flex flex-col">
          <span>
            Hi, I&apos;m Soham Patel, an enthusiastic Associate Software
            Engineer with a strong passion for building scalable and efficient
            web applications. My expertise lies in both the MERN (MongoDB,
            Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular,
            Node.js) stacks, allowing me to deliver dynamic, responsive, and
            high-performance applications. I thrive on solving complex problems,
            writing clean and maintainable code, and staying up-to-date with the
            latest technologies in the ever-evolving world of software
            development.
          </span>
          <span>
            My experience spans creating single-page applications (SPAs),
            designing RESTful APIs, and deploying end-to-end full-stack
            projects. Beyond coding, I enjoy exploring new tools, contributing
            to open-source projects, and learning about emerging trends in
            technology. I&apos;m a lifelong learner who believes in constantly
            pushing boundaries to grow both professionally and personally.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
