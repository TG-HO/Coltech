"use client";

import Link from "next/link";
import { Server } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="w-full flex flex-col mt-auto">
      {/* Enterprise Trust Bar */}
      <div className="bg-brand-light border-y border-brand-navy/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <p className="text-brand-navy font-semibold tracking-wide text-center">
            Trusted by industry leaders including{" "}
            <span className="text-brand-teal font-bold">Taj Gasoline</span>.
          </p>
        </div>
      </div>

      {/* Main Footer Block */}
      <div className="bg-brand-navy text-brand-light py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-2 mb-6 group inline-block"
            >
              <Server className="w-6 h-6 text-brand-sky" strokeWidth={1.5} />
              <span className="font-bold text-xl tracking-tight text-white">
                COLTECH
              </span>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Empowering businesses through custom software, smart automation,
              and secure end-to-end IT infrastructure.
            </p>
            <p className="text-xs opacity-60 mt-auto">
              &copy; {new Date().getFullYear()} Circle of Life. All rights
              reserved.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">
              Company
            </h4>
            <Link
              href="/about"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/vision-mission"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              Vision & Mission
            </Link>
            <Link
              href="/careers"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              Careers
            </Link>
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors text-left"
            >
              Contact
            </button>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">
              Services
            </h4>
            <Link
              href="/software"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              Software Development
            </Link>
            <Link
              href="/automation"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              POS Solutions
            </Link>
            <Link
              href="/automation"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              Pump Automation
            </Link>
            <Link
              href="/infrastructure"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              CCTV & Security
            </Link>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-2">
              Legal
            </h4>
            <Link
              href="/privacy-policy"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/compliance"
              className="text-sm opacity-80 hover:text-brand-sky hover:opacity-100 transition-colors"
            >
              Compliance
            </Link>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </footer>
  );
}
