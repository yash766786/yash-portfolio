"use client";
import React, { useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function BackgroundBoxesDemo() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Email error:", error);
    alert("Something went wrong.");
  }
};

  
  return (
    <div className="h-[90vh] relative overflow-hidden  w-full bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-auto  bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "md:text-4xl flex w-full items-center  text-4xl text-white justify-center z-20 py-4"
        )}
      >
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[90vw] md:w-[60vw] gap-6 relative z-20"
      >
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="Your email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white text-black dark:text-white dark:bg-zinc-800"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
