"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "Career", href: "/career" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-lg shadow-nova-cyan/10 border-b-2 border-nova-cyan/70"
            : "bg-white border-b-2 border-gradient-to-r from-nova-cyan/50 via-nova-blue/50 to-nova-cyan/50"
        }`}
        style={{
          borderImage: isScrolled ? undefined : "linear-gradient(to right, rgba(0, 180, 216, 0.6), rgba(0, 119, 182, 0.7), rgba(0, 180, 216, 0.6)) 1"
        }}
      >
        <div className="w-full max-w-none px-5 sm:px-6 flex items-center py-1">
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <div className="py-2">
                <Image
                  src="/novaaxislogo.png"
                  alt="Logo"
                  width={280}
                  height={120}
                  className="h-20 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {(() => {
                    const isActive = pathname === link.href;
                    return (
                      <Link href={link.href} aria-current={isActive ? "page" : undefined}>
                        <div className="relative px-2 py-2 group">
                          <span
                            className={`relative z-10 text-base font-bold tracking-[0.02em] transition-colors duration-300 ${
                              isActive
                                ? "text-nova-navy"
                                : "text-gray-600 group-hover:text-nova-cyan"
                            }`}
                          >
                            {link.name}
                          </span>

                          {/* Underline + hover transition */}
                          <motion.div
                            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-nova-cyan origin-left transition-transform duration-300 ${
                              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          />
                        </div>
                      </Link>
                    );
                  })()}
                </motion.div>
              ))}

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative ml-4 px-8 py-3 font-semibold text-nova-cyan border-2 border-nova-cyan hover:border-nova-blue hover:text-nova-blue hover:shadow-lg hover:shadow-nova-cyan/30 transition-all duration-300 overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center text-[15px]">
                      Contact
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-nova-cyan/10 transition-colors z-50"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-nova-navy" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-nova-navy" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white/98 backdrop-blur-xl shadow-2xl shadow-nova-cyan/20 border-l-2 border-nova-cyan/70 z-40 lg:hidden overflow-y-auto"
            >
              <div className="p-8 pt-24">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="relative group px-4 py-3 rounded-lg hover:bg-nova-cyan/10 transition-all duration-300">
                          <span className="text-lg font-bold text-gray-700 group-hover:text-nova-cyan transition-all duration-300">
                            {link.name}
                          </span>
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-nova-cyan scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Contact Button */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                    className="pt-4"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <button className="w-full px-6 py-4 font-semibold text-nova-cyan border-2 border-nova-cyan hover:border-nova-blue hover:text-nova-blue hover:shadow-xl hover:shadow-nova-cyan/30 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700" />
                        <span className="relative z-10">Contact Us</span>
                      </button>
                    </Link>
                  </motion.div>
                </nav>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="mt-12 pt-8 border-t border-nova-cyan/20"
                >
                  <p className="text-sm text-gray-500 text-center">
                    © 2026 Your Brand. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
