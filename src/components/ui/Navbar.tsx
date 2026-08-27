"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Headset } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Software", href: "/software" },
    { label: "Automation", href: "/automation" },
    { label: "Infrastructure", href: "/infrastructure" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#152F52]/10 shadow-md py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className={`relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
              !scrolled ? "bg-white/95 p-1.5 rounded shadow-sm backdrop-blur-sm" : "bg-transparent"
            }`}>
              <Image
                src="/Col Logo.svg"
                alt="COLTECH Brand Logo"
                width={40}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </div>
            <span className={`font-bold text-2xl tracking-tight transition-colors ${
              scrolled ? "text-[#152F52]" : "text-white"
            }`}>
              COL<span className="text-[#1CB08F]">TECH</span>
            </span>
          </Link>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-bold tracking-wide transition-all relative py-1.5 flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#1CB08F]"
                      : scrolled
                        ? "text-[#152F52] hover:text-[#1CB08F]"
                        : "text-white hover:text-[#1CB08F]"
                  }`}
                >
                  {/* Active pulsing dot indicator */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1CB08F] inline-block animate-pulse shadow-[0_0_8px_#1CB08F]"></span>
                  )}
                  {item.label}
                  {/* Underline bar */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#1CB08F] shadow-[0_0_8px_rgba(28,176,143,0.7)]"
                        : "w-0 group-hover:w-full bg-[#1CB08F]"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-[#1CB08F] text-white flex items-center justify-center p-2.5 rounded md:px-6 md:py-2.5 shadow-md hover:bg-[#152F52] hover:shadow-lg transition-all duration-300 font-bold text-sm tracking-wide cursor-pointer"
            >
              <Headset className="w-5 h-5 md:hidden text-white" />
              <span className="hidden md:inline">Contact Us</span>
            </motion.button>
            
            <button 
              className="md:hidden flex items-center justify-center p-1 rounded focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-[#152F52]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-[#152F52]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 bg-white border-b border-[#152F52]/10 shadow-xl z-40 md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold tracking-wide transition-colors py-2 border-b border-[#152F52]/5 flex items-center gap-2 ${
                    isActive ? "text-[#1CB08F]" : "text-[#152F52] hover:text-[#1CB08F]"
                  }`}
                >
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#1CB08F] inline-block"></span>
                  )}
                  {item.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full bg-[#1CB08F] text-white py-3.5 rounded font-bold text-center mt-2 hover:bg-[#152F52] transition-colors shadow-md"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
