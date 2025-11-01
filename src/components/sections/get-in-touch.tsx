"use client";

import React, { useState } from "react";
import { z } from "zod";
import AnimatedDiv from "../animation/animated-div";
import Select from "../form/select";
import Textarea from "../form/textarea";
import SubmitButton from "../form/submit-button";
import Input from "../form/input";
import SectionHeader from "../ui/section-header";
import services from "@/config/services";
import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(5, { message: "Message must be at least 5 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (data: FormData) => {
    const result = formSchema.safeParse(data);

    if (!result.success) {
      const newErrors: Partial<Record<keyof FormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormData;
        newErrors[field] = issue.message;
      }
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    const updated = { ...formData, [id]: value };
    setFormData(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(formData)) {
      toast.success("Message sent successfully!");

      setFormData({ name: "", email: "", service: "", message: "" });
    }
  };

  return (
    <AnimatedDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <section id="contact-me" aria-labelledby="contact-heading">
        <SectionHeader title="Get In Touch" subtitle="Let's work together" className="mb-40" />

        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-600 flex flex-col gap-16"
            aria-labelledby="contact-heading"
            aria-describedby="contact-description"
            noValidate
          >
            <p id="contact-description" className="sr-only">
              Use this form to send a message or request services.
            </p>

            <Input
              id="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              autoComplete="name"
              error={errors.name}
              required
              aria-required="true"
            />

            <Input
              id="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              autoComplete="email"
              error={errors.email}
              required
              aria-required="true"
            />

            <Select
              id="service"
              label="Services"
              value={formData.service}
              onChange={handleChange}
              options={services.map((service) => service.title)}
              error={errors.service}
              required
              aria-required="true"
            />

            <Textarea
              id="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              error={errors.message}
              required
              aria-required="true"
            />

            <SubmitButton aria-label="Submit contact form">Get in touch</SubmitButton>
          </form>
        </div>
      </section>
    </AnimatedDiv>
  );
};

export default GetInTouch;
