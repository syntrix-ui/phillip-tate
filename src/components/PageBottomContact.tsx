import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function PageBottomContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] text-[#2A2421] border-t border-[#E8DFD8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Author Contact Info (Email, Phone) - Exact match to Contact page */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B21816] block mb-2">
                Get In Touch
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#2A2421]">
                CONTACT INFORMATION
              </h2>
              <div className="w-12 h-[2px] bg-[#B21816] mt-3"></div>
            </div>

            <p className="text-sm sm:text-base text-[#524640] leading-relaxed">
              Have questions, feedback, or inquiries? Reach out directly using the details below or send a message through the form.
            </p>

            {/* Direct Contact Items: Email, Phone */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DFD8] shadow-xs hover:border-[#B21816]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#B21816]/10 text-[#B21816] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-base text-[#2A2421]">
                    Email
                  </h4>
                  <a
                    href="mailto:contact@philiptateauthor.com"
                    className="text-sm font-semibold text-[#B21816] hover:underline transition-colors block mt-1"
                  >
                    contact@philiptateauthor.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8DFD8] shadow-xs hover:border-[#B21816]/40 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-[#B21816]/10 text-[#B21816] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-base text-[#2A2421]">
                    Phone
                  </h4>
                  <a
                    href="tel:+12173025785"
                    className="text-sm font-semibold text-[#2A2421] hover:text-[#B21816] transition-colors block mt-1"
                  >
                    +1 217 302 5785
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form (Exact match to Contact page) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DFD8] shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#B21816]/10 text-[#B21816] flex items-center justify-center mx-auto text-2xl font-bold font-serif-title">
                    ✓
                  </div>
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2A2421]">
                    THANK YOU FOR REACHING OUT!
                  </h3>
                  <p className="text-sm text-[#524640] max-w-md mx-auto leading-relaxed">
                    Your message has been delivered to Philip Tate's team. We appreciate your interest and will get back to you within 24 to 48 hours.
                  </p>
                  <div className="pt-4">
                    <Button
                      onClick={handleReset}
                      variant="default"
                      className="bg-[#B21816] hover:bg-[#991412] text-white rounded-[10px] px-8 h-11 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-md active:scale-95 transition-all"
                    >
                      SEND ANOTHER MESSAGE
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif-title text-2xl font-bold text-[#2A2421]">
                      SEND A MESSAGE
                    </h3>
                    <p className="text-xs text-[#786C65] mt-1">
                      Please complete the form below and we will respond promptly.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Email Address (1 Row Me 2 Inputs) */}
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {/* 1. Full Name */}
                    <div className="space-y-1.5 min-w-0">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#2A2421]">
                        Full Name <span className="text-[#B21816]">*</span>
                      </label>
                      <Input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-[#FCFAF7] border-[#E8DFD8] text-[#2A2421] placeholder:text-[#91857E] focus-visible:ring-[#B21816] rounded-xl h-11 text-sm w-full"
                      />
                    </div>

                    {/* 2. Email Address */}
                    <div className="space-y-1.5 min-w-0">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#2A2421]">
                        Email Address <span className="text-[#B21816]">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-[#FCFAF7] border-[#E8DFD8] text-[#2A2421] placeholder:text-[#91857E] focus-visible:ring-[#B21816] rounded-xl h-11 text-sm w-full"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Subject (1 Row Me 2 Inputs) */}
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {/* 3. Phone Number */}
                    <div className="space-y-1.5 min-w-0">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#2A2421]">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="bg-[#FCFAF7] border-[#E8DFD8] text-[#2A2421] placeholder:text-[#91857E] focus-visible:ring-[#B21816] rounded-xl h-11 text-sm w-full"
                      />
                    </div>

                    {/* 4. Subject */}
                    <div className="space-y-1.5 min-w-0">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#2A2421]">
                        Subject <span className="text-[#B21816]">*</span>
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Speaking Request or Note"
                        className="bg-[#FCFAF7] border-[#E8DFD8] text-[#2A2421] placeholder:text-[#91857E] focus-visible:ring-[#B21816] rounded-xl h-11 text-sm w-full"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#2A2421]">
                      Message <span className="text-[#B21816]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full bg-[#FCFAF7] border border-[#E8DFD8] text-[#2A2421] placeholder:text-[#91857E] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#B21816] rounded-xl p-3 text-sm resize-y"
                    />
                  </div>

                  {/* Submit Button (Clean without icons) */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="default"
                      className="w-full bg-[#B21816] hover:bg-[#991412] text-white rounded-[10px] h-12 text-xs uppercase tracking-widest font-semibold cursor-pointer shadow-lg active:scale-95 transition-all"
                    >
                      {isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
