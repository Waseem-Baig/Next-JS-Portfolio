import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Career_Co.png"
          title="Career Co"
          description="Check out CareerCo, an educational website offering comprehensive career guidance and resources. Built with HTML, CSS, and JavaScript, CareerCo provides valuable tools and information for students and professionals alike. Explore career paths, job market trends, resume tips, and more! Ensuring a seamless experience across all devices.Technologies used to develop the website include HTML, CSS, JavaScript, and Bootstrap."
        />
        <ProjectCard
          src="/My_PortFolio.png"
          title="My POrtFolio"
          description="I recently built and launched my personal portfolio website to showcase my professional skills, projects, and achievements. The website is designed to provide a comprehensive view of my work and expertise in web development.
          Key features of the site include:Responsive Design, Project Gallery, Blog Section, Contact Form.Technologies used to develop the website include HTML, CSS, JavaScript, and Bootstrap."
        />
        <ProjectCard
          src="/VIT_Grade_Calculator.png"
          title="VIT Grade Calculator "
          description="The VITAP Grade Calculator is a comprehensive and intuitive tool designed to streamline the grade calculation process for VITAP students. It simplifies the task of determining overall academic performance by allowing students to input their marks and corresponding credit values. The calculator then accurately computes the GPA, providing students with an immediate understanding of their academic standing."
        />
        <ProjectCard
          src="/QRCode_Generator.png"
          title="QR Code Generator"
          description="The QR Code Generator was developed to provide a quick and easy solution for generating QR codes, a common requirement in many digital and print media applications. This project allowed me to deepen my understanding of server-side programming, file handling in Node.js, and integrating third-party libraries for generating visual content. It also reinforced best practices in error handling and creating secure, user-friendly web applications."
        />
      </div>
    </div>
  );
};

export default Projects;
