"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API delay (to be replaced with Nodemailer route later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast.success("Message received. Our engineering team will contact you shortly.");
    
    // Reset and close
    setFormData({ name: "", email: "", company: "", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] overflow-y-auto border-l border-brand-navy/10 flex flex-col"
          >
            {/* Header */}
            <div className="p-8 pb-6 border-b border-brand-navy/10 flex items-center justify-between bg-brand-light">
              <h3 className="text-2xl font-bold text-brand-black tracking-tight">
                Initiate Project
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-brand-navy/5 rounded-full transition-colors group"
              >
                <X className="w-6 h-6 text-brand-navy group-hover:text-brand-teal transition-colors" />
              </button>
            </div>

            {/* Form */}
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-brand-navy mb-8 opacity-90 leading-relaxed">
                Connect with our engineering architects to discuss custom enterprise software, automation infrastructure, or deployment timelines.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-brand-black tracking-wide uppercase">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-navy/20 py-3 bg-transparent text-brand-black focus:outline-none focus:border-brand-teal transition-colors rounded-none placeholder:text-brand-navy/30"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-black tracking-wide uppercase">
                    Corporate Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-navy/20 py-3 bg-transparent text-brand-black focus:outline-none focus:border-brand-teal transition-colors rounded-none placeholder:text-brand-navy/30"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-bold text-brand-black tracking-wide uppercase">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-b-2 border-brand-navy/20 py-3 bg-transparent text-brand-black focus:outline-none focus:border-brand-teal transition-colors rounded-none placeholder:text-brand-navy/30"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="message" className="text-sm font-bold text-brand-black tracking-wide uppercase">
                    Project Scope <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-b-2 border-brand-navy/20 py-3 bg-transparent text-brand-black focus:outline-none focus:border-brand-teal transition-colors resize-none rounded-none placeholder:text-brand-navy/30"
                    placeholder="Briefly describe your requirements..."
                  ></textarea>
                </div>

                {/* Footer Submit */}
                <div className="pt-6 mt-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-teal text-white py-4 font-bold text-lg tracking-wide hover:bg-brand-navy transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-brand-navy/60 text-center mt-4 uppercase tracking-widest">
                    Secured via 256-bit SSL
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
