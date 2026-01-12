"use client";
import { sendMessageAction } from "@/actions/contact";
import { FormField } from "@/components/common/form";
import { useActionState } from "react";

export const ContactForm = () => {
  const initialData = {
    full_name: "",
    email: "",
    message: "",
  };

  const [state, formAction] = useActionState(sendMessageAction, initialData);

  return (
    <section className="w-full flex flex-col gap-8 px-4 md:px-10 lg:px-16 mt-4 sm:my-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl sm:text-[48px] font-oswald leading-[130%] tracking-tight">
          Let&apos;s start something together
        </h2>
        <p className="text-[17px] sm:text-lg tracking-tight leading-[130%]">
          Planning a shoot or a project? Fill out the form below and we’ll get
          back to you to bring your ideas to life.
        </p>
      </div>
      <form action={formAction} className="w-full flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Full Name" required placeholder="John Doe" />
          <FormField label="Email" required placeholder="john@example.com" />
        </div>
        <FormField
          required
          type="textarea"
          label="Message"
          placeholder="Your message here..."
        />
        <button className="w-fit mx-auto px-8 py-4 rounded-full bg-[#1F1E1E]">
          Send Message
        </button>
      </form>
    </section>
  );
};
