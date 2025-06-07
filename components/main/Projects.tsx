"use client";
import React, { useRef, useEffect, useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

// 3D Model Loader (replace with your model path)
function ProjectsModel() {
  const { scene } = useGLTF(
    "/models/hyperx_alloy_origins_60_rgb_mechanical_keyboard.glb"
  );
  return <primitive object={scene} scale={3} />;
}

// Interactive 3D Model Wrapper with enhanced interaction
function InteractiveProjectsModel() {
  const group = useRef<any>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const idleY = useRef(0);

  // Track mouse movement relative to the canvas for more precise interaction
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Get canvas bounds for relative mouse position
      const canvas = document.getElementById("projects-canvas");
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        setMouse({ x, y });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (group.current) {
      // Idle rotation
      idleY.current += 0.008;
      // Enhanced cursor interaction (stronger effect, more spring)
      const targetY = idleY.current + mouse.x * Math.PI * 0.5;
      const targetX = mouse.y * Math.PI * 0.25;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.12;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.12;
      // Subtle floating and scale effect
      group.current.position.y = Math.sin(Date.now() * 0.001) * 0.12;
      group.current.scale.setScalar(
        1 + Math.abs(mouse.x * 0.07 + mouse.y * 0.07)
      );
    }
  });

  return (
    <group ref={group}>
      <ProjectsModel />
    </group>
  );
}

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-5 ">
        My Projects
      </h1>

      {/* 3D Modal below heading */}
      <div className="mb-12">
        <div
          className="md:w-[600px] w-full md:h-[400px] h-[250px] flex items-center justify-center"
          id="projects-canvas"
        >
          <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={0.7} />
            <Stage environment="city" intensity={0.5} shadows={false}>
              <InteractiveProjectsModel />
            </Stage>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>

      <div className="h-full w-full flex gap-10 px-10 flex-wrap justify-around items-center z-20">
        <ProjectCard
          src="/Career_Co.png"
          link="https://waseem-baig.github.io/CareerCo/"
          title="Career Co"
          description="Check out CareerCo, an educational website offering comprehensive career guidance and resources..."
        />
        <ProjectCard
          src="/My_PortFolio.png"
          link="https://waseem-baig.github.io/My-portfolio/"
          title="My Portfolio"
          description="I recently built and launched my personal portfolio website to showcase my professional skills..."
        />
        <ProjectCard
          src="/VIT_Grade_Calculator.png"
          link="https://waseem-baig.github.io/Grade_Calculator/"
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
          title="Career Co"
          description="Check out CareerCo, an educational website offering comprehensive career guidance and resources..."
        />
        <ProjectCard
          src="/deliveryDost.png"
          link="https://delivery-dost.vercel.app/"
          title="My Portfolio"
          description="I recently built and launched my personal portfolio website to showcase my professional skills..."
        />
        <ProjectCard
          src="/kanva.png"
          link="https://kanva-delta.vercel.app/login"
          title="VIT Grade Calculator"
          description="The VITAP Grade Calculator is a comprehensive and intuitive tool..."
        />
        <ProjectCard
          src="/todo.png"
          link="https://todo-list-waseem-baigs-projects.vercel.app/"
          title="QR Code Generator"
          description="The QR Code Generator was developed to provide a quick and easy solution for generating QR codes..."
        />
      </div>
    </div>
  );
};

export default Projects;
