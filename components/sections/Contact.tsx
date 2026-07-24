"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import MagneticButton from "@/components/ui/MagneticButton";
import { personal } from "@/data/personal";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const socials = [
  { label: "GitHub",   href: personal.socials.github,   icon: GithubIcon,   color: "hover:text-slate-300" },
  { label: "LinkedIn", href: personal.socials.linkedin,  icon: LinkedinIcon, color: "hover:text-blue-400" },
  { label: "X (Twitter)",  href: personal.socials.twitter,   icon: XIcon,       color: "hover:text-sky-400" },
  { label: "Email",    href: `mailto:${personal.email}`, icon: Mail,         color: "hover:text-red-400" },
];

function InputField({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-[var(--text-muted)]">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-red-400 flex items-center gap-1"
          >
            <AlertCircle size={11} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("submitting");
    // Simulate API call — replace with your actual form handler (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitStatus("success");
    reset();
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-[var(--bg)]/60 border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all duration-200";

  return (
    <section id="contact" className="py-28 px-6">
      {/* Subtle background accent */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionWrapper className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/30" />
            <span className="text-blue-500 font-mono text-sm">05.</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/30" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[var(--text-primary)] mb-4">
            Let's Work Together
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg">
            Have a project in mind? I'm always open to discussing product design, tech architecture,
            or just a good coffee.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <SectionWrapper direction="left" className="lg:col-span-3">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/60 backdrop-blur-sm p-8">
              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    >
                      <CheckCircle2 size={48} className="text-emerald-400" />
                    </motion.div>
                    <h3 className="font-display font-semibold text-xl text-[var(--text-primary)]">Message sent!</h3>
                    <p className="text-[var(--text-muted)] text-sm">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <InputField label="Name" id="contact-name" error={errors.name?.message}>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Your name"
                          className={inputClass}
                          {...register("name", {
                            required: "Name is required",
                            minLength: { value: 2, message: "At least 2 characters" },
                          })}
                        />
                      </InputField>
                      <InputField label="Email" id="contact-email" error={errors.email?.message}>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="you@example.com"
                          className={inputClass}
                          {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                          })}
                        />
                      </InputField>
                    </div>

                    <InputField label="Message" id="contact-message" error={errors.message?.message}>
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Tell me about your project..."
                        className={`${inputClass} resize-none`}
                        {...register("message", {
                          required: "Message is required",
                          minLength: { value: 10, message: "At least 10 characters" },
                        })}
                      />
                    </InputField>

                    <MagneticButton
                      type="submit"
                      variant="primary"
                      className="w-full justify-center py-3.5 font-semibold"
                      disabled={submitStatus === "submitting"}
                      id="contact-submit-btn"
                    >
                      {submitStatus === "submitting" ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </SectionWrapper>

          {/* Sidebar */}
          <SectionWrapper direction="right" delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              {/* Direct contact */}
              <div>
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
                  Direct Contact
                </p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-lg font-medium text-[var(--text-primary)] hover:text-blue-400 transition-colors duration-200 break-all"
                >
                  {personal.email}
                </a>
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
                  Find Me Online
                </p>
                <div className="space-y-3">
                  {socials.map(({ label, href, icon: Icon, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-3 text-[var(--text-muted)] ${color} transition-all duration-200 text-sm`}
                    >
                      <Icon size={16} />
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-sm font-semibold">Available for work</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Currently accepting new projects. Let's build something great together.
                </p>
              </motion.div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
