import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 ">
        My Projects
      </h1>
      <div className="h-full w-full flex gap-10 px-10 flex-wrap justify-around items-center">
        <ProjectCard
          src="/Career_Co.png"
          link="https://waseem-baig.github.io/CareerCo/"
          title="Career Co"
          description="Check out CareerCo, an educational website offering comprehensive career guidance and resources..."
        />
        <ProjectCard
          src="/My_PortFolio.png"
          link="https://waseem-baig.github.io/Portfolio/"
          title="My Portfolio"
          description="I recently built and launched my personal portfolio website to showcase my professional skills..."
        />
        <ProjectCard
          src="/VIT_Grade_Calculator.png"
          link="https://waseem-baig.github.io/VITGradeCalculator/"
          title="VIT Grade Calculator"
          description="The VITAP Grade Calculator is a comprehensive and intuitive tool..."
        />
        <ProjectCard
          src="/QRCode_Generator.png"
          link="https://waseem-baig.github.io/QRCodeGenerator/"
          title="QR Code Generator"
          description="The QR Code Generator was developed to provide a quick and easy solution for generating QR codes..."
        />
        <ProjectCard
          src="/Career_Co.png"
          link="https://waseem-baig.github.io/CareerCo/"
          title="Career Co"
          description="Check out CareerCo, an educational website offering comprehensive career guidance and resources..."
        />
        <ProjectCard
          src="/My_PortFolio.png"
          link="https://waseem-baig.github.io/Portfolio/"
          title="My Portfolio"
          description="I recently built and launched my personal portfolio website to showcase my professional skills..."
        />
        <ProjectCard
          src="/VIT_Grade_Calculator.png"
          link="https://waseem-baig.github.io/VITGradeCalculator/"
          title="VIT Grade Calculator"
          description="The VITAP Grade Calculator is a comprehensive and intuitive tool..."
        />
        <ProjectCard
          src="/QRCode_Generator.png"
          link="https://waseem-baig.github.io/QRCodeGenerator/"
          title="QR Code Generator"
          description="The QR Code Generator was developed to provide a quick and easy solution for generating QR codes..."
        />
      </div>
    </div>
  );
};

export default Projects;
