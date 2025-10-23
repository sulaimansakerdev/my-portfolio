"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MotionDiv from "../animation/motion-div";
import Head from "next/head";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormData = z.infer<typeof formSchema>;

const GetInTouch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Option One", "Option Two", "Option Three", "Option Four"];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    alert(`Form submitted!\n${JSON.stringify(data, null, 2)}`);
    reset();
  };

  return (
    <>
      <Head>
        <title>Get In Touch | Contact Form</title>
        <meta
          name="description"
          content="Get in touch with us for web development, design, and digital services. Fill out the form to connect with our team."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <MotionDiv
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <section id="contact-me" aria-labelledby="contact-heading" className="text-center">
          <h1
            id="contact-heading"
            className="font-extrabold sm:text-2xl md:text-3xl xl:text-5xl text-neutral-600 dark:text-white"
          >
            Get In Touch
          </h1>

          <p className="font-semibold color-gradiant mb-40 text-center text-sm">
            <span className="[background-image:var(--title-gradient)] to-white bg-clip-text text-transparent font-semibold color-gradiant mb-40 text-center text-xs xl:text-sm md:text-base">
              Contact us to discuss your next project.
            </span>
          </p>

          <div className="flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-600 flex flex-col gap-16"
              aria-label="Contact form"
            >
              <div className="flex flex-col items-start gap-14 w-full">
                <label
                  className="text-lg text-neutral-600 dark:text-white font-bold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  placeholder="Full name"
                  autoComplete="name"
                  className="w-full h-70 border border-neutral-600 dark:border-slate-200 rounded-lg hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:text-zinc-400 px-8"
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-14 w-full">
                <label
                  className="text-lg text-neutral-600 dark:text-white font-bold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  autoComplete="email"
                  className="w-full h-70 border bg-transparent border-neutral-600 dark:border-slate-200 rounded-lg hover:border-sky-400 focus:border-sky-400 focus:outline-none placeholder:text-zinc-400 px-8"
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start gap-4 w-full">
                <label
                  className="text-lg text-neutral-600 dark:text-white font-bold"
                  htmlFor="service"
                >
                  Services
                </label>

                <Controller
                  name="service"
                  control={control}
                  render={({ field }) => (
                    <div className="relative inline-block w-full">
                      <button
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full h-70 hover:border-sky-400 border rounded-lg text-base font-normal text-zinc-400 px-8 border-neutral-600 dark:border-slate-200 py-3 text-left flex justify-between items-center"
                      >
                        <span>{field.value || "Select an option"}</span>
                        <Image
                          width={15}
                          height={15}
                          className={`w-15 h-15 transform transition-transform duration-200 absolute right-25 top-1/2 -translate-y-1/2 pointer-events-none ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                          src="/assets/images/select-arrow.svg"
                          alt="Dropdown arrow icon"
                        />
                      </button>

                      {isOpen && (
                        <MotionDiv
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.4 }}
                          className="absolute mt-2 w-full bg-white border border-neutral-600 dark:border-slate-200 rounded-md shadow-lg z-10"
                        >
                          <ul
                            role="listbox"
                            aria-label="Select a service"
                            className="max-h-60 overflow-auto"
                          >
                            {options.map((option, index) => (
                              <li
                                key={index}
                                role="option"
                                aria-selected={field.value === option}
                                onClick={() => {
                                  field.onChange(option);
                                  setIsOpen(false);
                                }}
                                className="px-4 py-2 hover:text-sky-400 cursor-pointer text-zinc-400 font-medium"
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        </MotionDiv>
                      )}
                    </div>
                  )}
                />
                {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
              </div>

              <div className="flex flex-col items-start gap-14 w-full">
                <label
                  className="text-lg text-neutral-600 dark:text-white font-bold"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  placeholder="Type your message..."
                  autoComplete="off"
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                  className="focus:border-sky-400 rounded-lg hover:border-sky-400 focus:outline-none p-4 w-full min-h-222 border border-neutral-600 dark:border-slate-200 resize-y"
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                className={`w-full p-15 text-lg font-bold rounded-lg transition duration-300 ${
                  !isValid
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-neutral-600 text-white dark:bg-white dark:text-black hover:bg-sky-400 hover:text-white cursor-pointer"
                }`}
                type="submit"
                disabled={!isValid}
                aria-label="Submit contact form"
              >
                Get in touch
              </button>
            </form>
          </div>
        </section>
      </MotionDiv>
    </>
  );
};

export default GetInTouch;
