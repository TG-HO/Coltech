"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="w-full flex flex-col mt-auto">
      {/* Enterprise Trust Bar */}
      <div className="bg-brand-light border-y border-brand-navy/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <p className="text-brand-navy font-medium tracking-wide text-center text-sm md:text-base">
            Trusted by critical industry leaders including{" "}
            <span className="text-brand-turquoise font-bold underline decoration-brand-turquoise/40 decoration-1 underline-offset-4">Taj Gasoline</span>.
          </p>
        </div>
      </div>

      {/* Main Footer Block */}
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 group inline-flex"
            >
              <div className="bg-white/90 p-1.5 rounded shadow-sm flex items-center justify-center">
                <Image
                  src="/Col Logo.svg"
                  alt="COLTECH Logo"
                  width={36}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                COL<span className="text-brand-turquoise">TECH</span>
              </span>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Empowering critical enterprises through custom software, smart pump automation,
              and secure end-to-end IT infrastructure.
            </p>
            <p className="text-xs text-white/60 mt-auto">
              &copy; {new Date().getFullYear()} Circle of Life (COLTECH). All rights
              reserved.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-1 flex flex-col gap-3.5">
            <h4 className="text-brand-turquoise font-bold text-xs tracking-widest uppercase mb-2">
              Company
            </h4>
            <Link
              href="/about"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              About Us
            </Link>
            <Link
              href="/vision-mission"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              Vision & Mission
            </Link>
            <Link
              href="/core-values"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              Core Values
            </Link>
            <Link
              href="/careers"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              Careers
            </Link>
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all text-left cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          <div className="col-span-1 flex flex-col gap-3.5">
            <h4 className="text-brand-turquoise font-bold text-xs tracking-widest uppercase mb-2">
              Services
            </h4>
            <Link
              href="/software"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              Software Development
            </Link>
            <Link
              href="/automation"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              POS Solutions
            </Link>
            <Link
              href="/automation"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              Pump Automation
            </Link>
            <Link
              href="/infrastructure"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              CCTV & Security
            </Link>
            <Link
              href="/infrastructure"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              Enterprise Networking
            </Link>
          </div>

          <div className="col-span-1 flex flex-col gap-3.5">
            <h4 className="text-brand-turquoise font-bold text-xs tracking-widest uppercase mb-2">
              Legal & Trust
            </h4>
            <Link
              href="/privacy-policy"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              Terms of Service
            </Link>
            <Link
              href="/compliance"
              className="text-sm text-white/80 hover:text-brand-turquoise hover:translate-x-1 transition-all"
            >
              Compliance & Standards
            </Link>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </footer>
  );
}
