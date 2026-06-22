"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Server, Menu, X, Headset } from "lucide-react";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-brand-navy/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Server className="w-8 h-8 text-brand-teal" strokeWidth={1.5} />
            </motion.div>
            <span className="font-bold text-2xl tracking-tight text-brand-teal">
              COLTECH
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
                  className={`text-sm font-bold tracking-wide transition-colors relative group ${
                    scrolled 
                      ? isActive ? "text-brand-teal" : "text-brand-navy hover:text-brand-teal" 
                      : isActive ? "text-brand-sky" : "text-white hover:text-brand-sky"
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  } ${scrolled ? "bg-brand-teal" : "bg-brand-sky"}`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-teal text-white flex items-center justify-center p-2 rounded md:px-6 md:py-2.5 shadow-md hover:bg-brand-navy transition-colors duration-300"
            >
              <Headset className="w-5 h-5 md:hidden" />
              <span className="hidden md:inline font-bold tracking-wide text-sm">Contact</span>
            </motion.button>
            
            <button 
              className="md:hidden text-brand-black flex items-center justify-center p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-brand-navy' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-brand-navy' : 'text-white'}`} />
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
            className="fixed top-20 left-0 right-0 bg-brand-light border-b border-brand-navy/10 shadow-lg z-40 md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold tracking-wide transition-colors ${
                    isActive ? "text-brand-teal" : "text-brand-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
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
