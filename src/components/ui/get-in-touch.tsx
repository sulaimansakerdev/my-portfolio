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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
  const isDisabled =
    !formData.name || !formData.email || !formData.service || !formData.message;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-center" id="contactUs">
        <h2 className="font-extrabold sm:text-[24px] md:text-[34px] xl:text-[2.8125rem] text-[var(--maintitle)]">
          Get In Touch
        </h2>

        <div className="font-semibold color-gradiant mb-[40px] text-center text-[0.875rem] ">
          <span className="[background-image:var(--titlegradient)] to-white bg-clip-text text-transparent font-semibold color-gradiant mb-40 text-center  text-[13px] xl:text-[0.875rem] md:text-[17px] ">
            Get In Touch
          </span>
        </div>
        
        <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-[600px] flex flex-col gap-16">
            {/* Name */}
            <div className="flex flex-col items-start gap-14">
              <label className="text-[18px] text-[var(--maintitle)] font-bold" htmlFor="name">
                Name
              </label>

              <input
                className="w-full h-[70px] border border-[var(--border)] rounded-[10px] hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:font-normal placeholder:text-[17px] px-4"
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
              <label className="text-[18px] text-[var(--maintitle)] font-bold" htmlFor="email">
                Email
              </label>

              <input
                className="w-full h-[70px] border bg-transparent border-[var(--border)] rounded-[10px] hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:font-normal placeholder:text-[17px] px-4"
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
              <label className="text-[18px] text-[var(--maintitle)] font-bold" htmlFor="service">
                Services
              </label>

              <div className="relative inline-block w-full">
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full text-[var(--maintitle)/60 h-[70px] hover:border-sky-400 border border-[var(--border)] rounded-[10px] px-4 py-3 text-left flex justify-between items-center">
                  <span>{selected}</span>
                  <img className={`w-[15px] h-[15px] transform transition-transform duration-200  absolute right-25 top-1/2 -translate-y-1/2 pointer-events-none text-[#8987A1] ${isOpen ? "rotate-180" : "rotate-0"}`}
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
                    className="absolute mt-2 w-full  bg-white border border-[var(--border)] hi rounded-md shadow-lg z-10 ">
                      
                      {options.map((option, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:text-sky-200 cursor-pointer"
                          onClick={() => handleSelect(option)}>
                          {option}
                        </li>
                      ))}
                  </motion.ul>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col items-start gap-14">
              <label className="text-[18px] text-[var(--maintitle)] font-bold" htmlFor="message">
                Message
              </label>

              <textarea
                className="focus:border-sky-400 hover:border-sky-400 focus:outline-none p-4 w-full h-[70px] border border-[var(--border)] rounded-[10px] min-h-[222px] resize-y"
                required
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}>
              </textarea>
            </div>

            {/* Submit */}
            <button
              className={`w-full p-[15px] text-[16px] font-bold rounded-[10px] transition duration-300 ${isDisabled
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white text-black hover:bg-sky-400 hover:text-white"
                }`}
              type="submit"
              disabled={isDisabled}>
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default GetInTouch;
