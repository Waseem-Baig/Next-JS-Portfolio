"use client";
import React, { useRef, useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";

// Interactive 3D Model Wrapper with enhanced interaction

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20 ">
        My Projects
      </h1>

      <div className="h-full w-full flex gap-10 px-10 flex-wrap justify-around items-center z-20">
        <ProjectCard
          src="/Career_Co.png"
          link=" http://waseem-baig.github.io/CareerCo/"
          title="Career Co"
          description="Check out CareerCo, an educational website offering comprehensive career guidance and resources..."
        />
        <ProjectCard
          src="/My_PortFolio.png"
          link="http://waseem-baig.github.io/My-portfolio/"
          title="My Portfolio"
          description="I recently built and launched my personal portfolio website to showcase my professional skills..."
        />
        <ProjectCard
          src="/VIT_Grade_Calculator.png"
          link="http://waseem-baig.github.io/Grade_Calculator/"
          title="VIT Grade Calculator"
          description="The VITAP Grade Calculator is a comprehensive and intuitive tool..."
        />
        <ProjectCard
          src="/QRCode_Generator.png"
          link="https://github.com/Waseem-Baig/QR_Code_Generator.git"
          title="QR Code Generator"
          description="The QR Code Generator was developed to provide a quick and easy solution for generating QR codes..."
        />
        <ProjectCard
          src="/avy.png"
          link="https://avy.vercel.app/"
          title="Avy"
          description="Check out CareerCo, an educational website offering comprehensive career guidance and resources..."
        />
        <ProjectCard
          src="/deliveryDost.png"
          link="https://delivery-dost.vercel.app/"
          title="Delivery Dost"
          description="Delivery Dost is a user-friendly platform designed to streamline the food delivery process..."
        />
        <ProjectCard
          src="/kanva.png"
          link="https://kanva-delta.vercel.app/login"
          title="Kanva"
          description="Kanva is a versatile platform designed to enhance productivity and collaboration..."
        />
        <ProjectCard
          src="/todo.png"
          link="https://todo-list-waseem-baigs-projects.vercel.app/"
          title="Todo List"
          description="The Todo List application helps users manage their tasks efficiently with a simple and intuitive interface."
        />
      </div>
    </div>
  );
};

export default Projects;
