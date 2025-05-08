import React from "react";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import BrandLogo from "@/assets/BrandLogo.svg";
import GooglePlaylogo from "@/assets/MobileAppStore.svg";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/piplub",
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/piplub",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/piplub",
    },
  ];

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#1B1B1B] text-white pt-16"
    >
      <div className="md:flex justify-between md:mx-24 px-8 ">
        <motion.div className="container mx-auto" variants={containerVariants}>
          {/* Logo and Mission */}
          <motion.div className="mb-8" variants={logoVariants}>
            <BrandLogo className="h-10 mb-6" />
            <motion.p className="text-gray-300 text-md" variants={itemVariants}>
              Building an amazing shopping experiences
              <br />
              that creates more happiness in the world.
            </motion.p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div className="flex gap-6 mb-8" variants={containerVariants}>
            {["Careers", "Help", "Privacy"].map((item, index) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white font-bold transition-colors cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="text-md text-purple-500 mb-4 font-semibold"
            variants={itemVariants}
          >
            Get the app
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GooglePlaylogo />
          </motion.button>
        </motion.div>
      </div>

      <motion.div variants={containerVariants}>
        {/* Bottom Section */}
        <div className="md:flex justify-between items-center bg-black py-6 md:px-32 px-8 flex-col md:flex-row text-center md:text-left ">
          {/* Centered Text Section */}
          <motion.div
            className="text-gray-400 mb-6 md:mb-0"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} Piplub. All right reserved.
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex gap-8 justify-center md:justify-start"
            variants={containerVariants}
          >
            {socialLinks.map(({ icon: Icon, name, url }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex gap-2 items-center"
                variants={socialVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
                <p>{name}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
