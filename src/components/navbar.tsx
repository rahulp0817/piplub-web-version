"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import GooglePlayLogos from "@/assets/GooglePlaylogo24.svg";
import GooglePlaySmall from "@/assets/GooglePlaySmall.svg";
import BrandLogo from "@/assets/BrandLogo.svg";
import Brandblue from "@/assets/Brandlogoblue.svg";
import { motion } from "framer-motion";

export const Navbar = ({
  navbarTextColor = "text-white",
  activeIndicatorColor = "bg-white",
  navbarbuttontextColor = "text-white",
  navbarbg = "bg-[#7446F3]",
  brandlogo = true,
}) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Mobile menu variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Menu item variants
  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "For seller", href: "/seller" },
  ];

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`fixed top-6 md:left-[80px] w-full md:pr-32 z-50 transition-all duration-300 rounded-xl `}
      >
        <div className="max-w-8xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-10">
              <motion.div variants={itemVariants} className="cursor-pointer">
                {brandlogo ? (
                  <BrandLogo />
                  ):(
                  <Brandblue />
                  )}
              </motion.div>

              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.title}
                    variants={itemVariants}
                    className="relative"
                  >
                    <a
                      href={link.href}
                      className={`${navbarTextColor} font-semibold hover:opacity-80 transition-colors duration-100 py-1 flex gap-2  ${
                        activeLink === link.title ? "opacity-90" : "text-gray-500"
                      }`}
                      onClick={() => setActiveLink(link.title)}
                    >
                      {link.title}
                    </a>
                    {activeLink === link.title && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`absolute bottom-[-6px] left-0 w-full h-[4px] ${activeIndicatorColor} rounded-full`}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <button
                className={`hidden md:flex lg:flex items-center gap-2 px-5 py-2.5  ${navbarbuttontextColor} ${navbarbg} rounded-xl hover:opacity-80 transition-all ease-in duration-200`}
                onClick={() => router.push("/signup")}
              >
                <GooglePlayLogos className="w-5 h-5" />
                <p className="text-md font-semibold">Download app</p>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-8 h-8 flex flex-col justify-center items-center"
              >
                <motion.div
                  className="w-6 h-[2px] bg-white mb-1.5"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-6 h-[2px] bg-white mb-1.5"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    x: isOpen ? -20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="w-6 h-[2px] bg-white"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black/95 z-40 flex flex-col items-center justify-center"
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.title}
            variants={menuItemVariants}
            className="mb-8"
          >
            <a
              href={link.href}
              className={`${navbarTextColor} text-xl font-semibold hover:opacity-80 transition-colors duration-100 py-1 flex items-center gap-2 ${
                activeLink === link.title ? "opacity-100" : "opacity-90"
              }`}
              onClick={() => {
                setActiveLink(link.title);
                setIsOpen(false);
              }}
            >
              {link.title}
            </a>
          </motion.div>
        ))}

        <button
          className={`flex items-center gap-2 px-5 py-2.5 bg-[#7446F3] ${navbarTextColor} rounded-xl hover:opacity-80 transition-all ease-in duration-200 mt-4`}
          onClick={() => {
            router.push("/signup");
            setIsOpen(false);
          }}
        >
          <GooglePlaySmall />
          <p className="text-md">Download app</p>
        </button>
      </motion.div>
    </>
  );
};

export default Navbar;
