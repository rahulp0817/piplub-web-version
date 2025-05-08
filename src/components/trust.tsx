import React from "react";
import { motion } from "framer-motion";
import Bubblegum from "@/assets/Bubblegum.svg";
import Bubblegumsmall from "@/assets/Bubblegumsmall.svg";
import GooglePlays from "@/assets/GooglePlaylogo24.svg";
import GooglePlaySmall from "@/assets/GoogleplaySmall.svg";

function Trust() {
  return (
    <div className="container px-8 md:mx-auto md:px-0 md:flex gap-24 items-center">
      <motion.div>
        <div className="hidden md:block">
          <Bubblegum />
        </div>
        <div className="block md:hidden">
          <Bubblegumsmall />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-auto text-center md:text-left "
      >
        <div className="text-4xl mt-6 md:mt-0 sm:text-7xl font-semibold text-gray-300 mb-6 space-y-2">
          <span>Quality That Speaks,</span>
          <span className="font-bold text-white block">Trust That Lasts</span>
        </div>

        <p className="text-white/80 text-lg mb-10">
          Join a community where every purchase is verified, every seller is
          vetted, and excellence isn't just promised - it's guaranteed
        </p>
        <div>
          <p className="text-white font-semibold text-xl">Join us</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#7446F3] font-semibold md:py-5 md:px-6 py-4 px-5 rounded-xl gap-3 inline-block mt-4 text-sm md:text-base"
        >
          <div className="flex md:gap-4 gap-2 items-center">
            <GooglePlays className="hidden md:block" />
            <GooglePlaySmall className="md:hidden block" />
            Download for Android
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Trust;
