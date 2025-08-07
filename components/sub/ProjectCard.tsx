import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
  technologies?: string[]; // Add tech stack
}

const ProjectCard = ({
  src,
  link,
  title,
  description,
  technologies,
}: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0F0F23] via-[#1A1A3A] to-[#2A0E61] border border-[#7042f8]/20 shadow-2xl hover:shadow-[#7042f8]/25 transition-all duration-500 hover:scale-[1.02] hover:border-[#7042f8]/40 max-w-[350px] w-full">
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={400}
          height={250}
          className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F23] via-transparent to-transparent opacity-60"></div>

        {/* Hover Overlay with Link */}
        {link && (
          <div className="absolute inset-0 bg-[#7042f8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7042f8] hover:bg-[#8b5cf6] text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0"
            >
              View Project
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-[#7042f8]/20 text-[#7042f8] rounded-full border border-[#7042f8]/30"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium bg-gray-600/20 text-gray-400 rounded-full border border-gray-600/30">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Bottom Link (Alternative to hover overlay) */}
        {link && (
          <div className="pt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#7042f8] hover:text-[#8b5cf6] font-semibold text-sm transition-colors duration-200 group"
            >
              View Project
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default ProjectCard;
