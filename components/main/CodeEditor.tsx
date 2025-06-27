"use client";

import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `'use client';

import * as React from 'react';

type DeveloperProfileProps = {
  name: string;
  role: string;
  techStack: string[];
  interests: string[];
};

const WaseemBaigProfile: DeveloperProfileProps = {
  name: "Waseem Baig",
  role: "Full Stack Developer",
  techStack: ["Next.js", "React", "Tailwind CSS", 
  "Node.js", "MongoDB"],
  interests: ["UI/UX Design", "Open Source", 
  "Hackathons", "System Design"],
};

export default function AboutMe() {
  return (
    <section>
      <h1>Hello, I’m {WaseemBaigProfile.name}</h1>
      <p>I'm a passionate {WaseemBaigProfile.role}.</p>
      <p>Tech Stack: {WaseemBaigProfile.techStack.join(", ")}</p>
      <p>Interests: {WaseemBaigProfile.interests.join(", ")}</p>
    </section>
  );
}
`;

export const MyCodeEditor = () => {
  const [visibleCode, setVisibleCode] = useState("");
  const [copied, setCopied] = useState(false);
  const typingSpeed = 5; // ms per character (smaller is faster)

  useEffect(() => {
    setVisibleCode(""); // Reset on mount
    let i = 0;
    const interval = setInterval(() => {
      setVisibleCode(codeString.slice(0, i));
      i++;
      if (i > codeString.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#18181b] rounded-2xl shadow-2xl overflow-hidden border border-[#232329] z-[49]">
      {/* Header */}
      <div className="flex items-center px-4 py-2 bg-[#232329] border-b border-[#232329] justify-between">
        <div className="flex items-center">
          {/* Mac window dots */}
          <div className="flex space-x-2 mr-4">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          </div>
          <span className="text-gray-300 text-sm font-mono">AboutMe.tsx</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded-lg bg-[#232329] text-gray-300 hover:bg-[#333] transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      {/* Code */}
      <div className="p-4 bg-[#18181b] overflow-x-scroll scrollbar-hide">
        <SyntaxHighlighter
          language="tsx"
          style={oneDark}
          wrapLongLines={true}
          customStyle={{
            background: "transparent",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            padding: 0,
            margin: 0,
            minWidth: "600px",
          }}
          lineNumberStyle={{ color: "#555", marginRight: "16px" }}
        >
          {visibleCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
