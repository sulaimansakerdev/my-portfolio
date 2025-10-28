"use client";

import React, { useState } from "react";
import { z } from "zod";
import MotionDiv from "../animation/motion-div";
import SectionHeader from "./section-header";
import FormSelect from "./forms/form-select";
import FormTextarea from "./forms/form-textarea";
import SubmitButton from "./forms/submit-button";
import FormInput from "./forms/form-input";

const options = ["Option One", "Option Two", "Option Three", "Option Four"];

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
    validateForm(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(formData)) {
      // send request with data

      setFormData({ name: "", email: "", service: "", message: "" });
    }
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <SectionHeader id="contact-me" title="Get In Touch" subtitle="Lets work together" />

      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-600 flex flex-col gap-16"
          aria-label="Contact form"
        >
          <FormInput
            id="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            autoComplete="name"
            error={errors.name}
          />

          <FormInput
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            autoComplete="email"
            error={errors.email}
          />

          <FormSelect
            id="service"
            label="Services"
            value={formData.service}
            onChange={handleChange}
            options={options}
            error={errors.service}
          />

          <FormTextarea
            id="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />

          <SubmitButton>Get in touch</SubmitButton>
        </form>
      </div>
    </MotionDiv>
  );
};

export default GetInTouch;
