"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_jshbwjt";
const TEMPLATE_ID = "template_zcy4mk3";
const USER_ID = "Y7e9YXeZjtpUpIyUu";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, USER_ID).then(() => {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    });
  };

  return (
    <div
      id="contact"
      className="w-full max-w-md h-fit bg-transparent rounded-2xl shadow-lg p-8 mx-auto mt-10 border border-[#7042f8]/40 z-[49]"
    >
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
        Contact Me
      </h2>
      {submitted && (
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center mb-4">
          Thank you! I will get back to you soon.
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
        autoComplete="off"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-[#232329] text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="bg-[#232329] text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="bg-[#232329] text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
