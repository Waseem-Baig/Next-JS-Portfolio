"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei";
import { motion } from "framer-motion";

// 3D Model Loader (replace modelPath prop as needed)
function ExperienceModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
}

// 3D Canvas with smooth, engaging cursor movement and spring animation
function Experience3D({ modelPath }: { modelPath: string }) {
  const group = useRef<any>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const idleY = useRef(0);

  // Track mouse movement on the window
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to [-1, 1]
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Always rotate, but add cursor interaction
  useFrame(() => {
    if (group.current) {
      // Idle rotation
      idleY.current += 0.008;
      // Cursor interaction (offset)
      const targetY = idleY.current + mouse.x * Math.PI * 0.2;
      const targetX = mouse.y * Math.PI * 0.1;
      // Smoothly interpolate
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.08;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.08;
      // Subtle floating effect
      group.current.position.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <ExperienceModel modelPath={modelPath} />
    </group>
  );
}

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Vyuha Innovation Foundation",
    period: "April 2025 - Present",
    description: [
      "Developing responsive web applications using Next.js and Tailwind CSS.",
      "Collaborating on animated UI components for brand storytelling.",
      "Integrating APIs and optimizing frontend performance.",
    ],
  },
  {
    role: "Frontend Developer (Internship)",
    company: "University Website Internship at VIT-AP",
    period: "January 2025 - March 2025",
    description: [
      "Led frontend development for university website using modern tech stack.",
      "Implemented reusable components and responsive layouts.",
      "Worked closely with UI/UX team and ensured brand consistency.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    period: "2023",
    description: [
      "Built a food delivery web app (Delivery Dost) using React, Tailwind, and Flask.",
      "Developed a face detection attendance system with OpenCV and Firebase.",
      "Deployed applications using Vercel and VPS, with domain and SSL setup.",
    ],
  },
];

const Experience = () => {
  // Change the model path as needed
  const modelPath =
    "/models/hyperx_alloy_origins_60_rgb_mechanical_keyboard.glb";

  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 text-center drop-shadow-lg"
      >
        Experience
      </motion.h2>

      {/* 3D Model and Timeline */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
        {/* 3D Model Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="md:w-[550px] w-full h-[400px] rounded-2xl flex items-center justify-center relative"
        >
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={0.7} />
            <Stage environment="city" intensity={0.5} shadows={false}>
              <Experience3D modelPath={modelPath} />
              {/* Place Html here, inside the Canvas */}
            </Stage>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
            />
          </Canvas>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex flex-col gap-10 w-full max-w-xl"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative border border-[#7042f8]/40 rounded-2xl shadow-xl px-8 py-7 overflow-hidden group hover:scale-[1.025] transition-transform duration-300"
            >
              {/* Timeline Dot & Line */}
              <div className="absolute -left-6 top-8 flex flex-col items-center">
                <span className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-4 border-[#18181b] shadow-lg"></span>
                {idx !== experiences.length - 1 && (
                  <span className="w-1 h-24 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-40 mt-1"></span>
                )}
              </div>
              {/* Card Content */}
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 drop-shadow">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-base font-semibold">
                  <span className="text-cyan-300">{exp.company}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-purple-300">{exp.period}</span>
                </div>
                <ul className="list-disc ml-6 mt-3 text-gray-200 text-[15px] space-y-1">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="transition-all duration-200 group-hover:translate-x-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Glow/Accent */}
              <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute left-0 bottom-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
