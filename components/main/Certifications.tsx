"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Microsoft Certified Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "Aug 2024",
    link: "https://drive.google.com/file/d/1n7Cu4-9j4pKoahLPqHnuwgim3jkmu8nh/view?usp=drive_link",
  },
  {
    title: "Introduction to Microsoft Excel",
    issuer: "Coursera",
    date: "Mar 2024",
    link: "https://drive.google.com/file/d/1HaZ5Km6SHqZ36oC3Z90UG66oCTqf7-Ik/view?usp=drive_link",
  },
  {
    title: "Google Cloud Introduction to Generative AI",
    issuer: "Coursera",
    date: "Feb 2024",
    link: "https://drive.google.com/file/d/1VolC8bwApqryhEgy_nl_rrpFwlBAaHFv/view?usp=drive_link",
  },
  {
    title: "IBM Databases and SQL for Data Science with Python",
    issuer: "Coursera",
    date: "Mar 2024",
    link: "https://drive.google.com/file/d/1iLohzg4lpr8lXlQYyGnQuVXjh66sbixb/view?usp=drive_link",
  },
  {
    title: "Oracle Autonomous Database Cloud 2025 Certified Professional",
    issuer: "Oracle",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/1rqUn0fw4m1CtoIX2OAkS_4Xnz6e1MMYi/view?usp=drive_link",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/1wb5_kfmoXarQ1imIfmCMHKyQLyX6X640/view?usp=drive_link",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/1X1nGgJel4LoRiDC4L4cZ1faLizn46vAT/view?usp=drive_link",
  },
  {
    title: "ROTARACT DISTRICT 3150 Contribution Certificate",
    issuer: "Rotaract",
    date: "Dec 2024",
    link: "https://drive.google.com/file/d/1ZOMkfQVA2CHOoo_7HXJy3hNSsoTg57nH/view?usp=drive_link",
  },
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
    issuer: "Udemy",
    date: "Nov 2023",
    link: "https://drive.google.com/file/d/1HnvIttfqWxmVEcLpeAzJ1zh6f5M0GeZd/view?usp=drive_link",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="z-[20] relative w-full py-12 px-4 md:px-8 lg:px-16 bg-transparent rounded-xl shadow-xl mt-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 text-center drop-shadow-lg mb-8"
      >
        Certifications
      </motion.h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="relative border border-[#7042f8]/40 rounded-2xl shadow-xl px-8 py-7 overflow-hidden group hover:scale-[1.025] transition-transform duration-300"
          >
            {/* Accent Dot */}
            <div className="absolute -left-6 top-8 flex flex-col items-center">
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-4 border-[#18181b] shadow-lg"></span>
            </div>
            {/* Card Content */}
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 drop-shadow mb-2">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 text-base font-semibold">
                <span className="text-cyan-300">{cert.issuer}</span>
                <span className="text-gray-400">|</span>
                <span className="text-purple-300">{cert.date}</span>
              </div>
            </div>
            <Link
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300 font-semibold underline text-sm transition-colors duration-200"
            >
              View Certificate
            </Link>
            {/* Glow/Accent */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute left-0 bottom-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
