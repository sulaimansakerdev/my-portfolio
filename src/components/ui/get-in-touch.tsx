"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const options = ["Option One", "Option Two", "Option Three", "Option Four"];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (option: string) => {
    setSelected(option);
    setFormData({ ...formData, service: option });
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  const isDisabled = !formData.name || !formData.email || !formData.service || !formData.message;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center scroll-mt-55" id="contact-me">
        <h2 className="font-extrabold sm:text-2xl md:text-3xl xl:text-5xl text-neutral-600 dark:text-white">
          Get In Touch
        </h2>

        <div className="font-semibold color-gradiant mb-40 text-center text-sm">
          <span className="[background-image:var(--title-gradient)] to-white bg-clip-text text-transparent font-semibold color-gradiant mb-40 text-center text-xs xl:text-sm md:text-base">
            Get In Touch
          </span>
        </div>

        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-600 flex flex-col gap-16">
            {/* Name */}
            <div className="flex flex-col items-start gap-14">
              <label className="text-lg text-neutral-600 dark:text-white font-bold" htmlFor="name">
                Name
              </label>

              <input
                className="w-full h-70 border border-neutral-600 dark:border-slate-200 rounded-10 rounded-lg hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:font-normal placeholder:text-base px-8 placeholder:text-zinc-400"
                required
                autoComplete="off"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col items-start gap-14">
              <label className="text-lg text-neutral-600 dark:text-white font-bold" htmlFor="email">
                Email
              </label>

              <input
                className="w-full h-70 border bg-transparent border-neutral-600 rounded-lg dark:border-slate-200 rounded-10 hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:font-normal placeholder:text-base px-8 placeholder:text-zinc-400"
                autoComplete="off"
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col items-start gap-4 w-[100%]">
              <label
                className="text-lg text-neutral-600 dark:text-white font-bold"
                htmlFor="service"
              >
                Services
              </label>

              <div className="relative inline-block w-full">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full h-70 hover:border-sky-400 border rounded-lg text-base font-normal text-zinc-400 px-8 border-neutral-600 dark:border-slate-200 rounded-10  py-3 text-left flex justify-between items-center"
                >
                  <span>{selected}</span>
                  <img
                    className={`w-15 h-15 transform transition-transform duration-200 absolute right-25 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    src="/assets/images/select-arrow.svg"
                    alt=""
                  />
                </button>

                {/* Options */}
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="absolute mt-2 w-full bg-white border border-neutral-600 dark:border-slate-200 hi rounded-md shadow-lg z-10"
                  >
                    {options.map((option, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:text-sky-200 cursor-pointer text-zinc-400 font-medium"
                        onClick={() => handleSelect(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col items-start gap-14">
              <label
                className="text-lg text-neutral-600 dark:text-white font-bold"
                htmlFor="message"
              >
                Message
              </label>

              <textarea
                className="focus:border-sky-400 rounded-lg hover:border-sky-400 focus:outline-none p-4 w-full h-70 border border-neutral-600 dark:border-slate-200 rounded-10 min-h-222 resize-y"
                required
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit */}
            <button
              className={`w-full p-15 text-lg font-bold rounded-lg transition duration-300 ${
                isDisabled
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-neutral-600 text-white dark:bg-white dark:text-black hover:bg-sky-400 hover:text-white cursor-pointer "
              }`}
              type="submit"
              disabled={isDisabled}
            >
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;
