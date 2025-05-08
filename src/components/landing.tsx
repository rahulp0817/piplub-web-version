"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Home from "@/assets/Home.svg";
import Showcase from "@/assets/Showcase.svg";
import Marginline from "@/assets/Marginline.svg";
import FrameHome from "@/assets/FrameHome.svg";
import Starts from "@/assets/Stars.svg";
import Categories from "@/assets/Categories.svg";
import CategoriesSmall from "@/assets/CategoriesSmall.svg";
import GooglePlays from "@/assets/GooglePlaylogo24.svg";
import Starbig from "@/assets/Starbig.svg";
import Starreel from "@/assets/Starreels.svg";
import Startrust from "@/assets/Startrust.svg";
// import Video1 from "@/assets/Video1.gif";
// import Video2 from "@/assets/Video2.gif";
import Framesmall from "@/assets/Framesmall.svg";
import ShowcaseSmall from "@/assets/ShowcaseSmall.svg";
import Footer from "./footer";
import Trust from "./trust";
import GooglePlaySmall from "@/assets/GooglePlaySmall.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./navbar";

function Landing() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  // Color configurations for sections
  const sectionColors = [
    {
      navbarTextColor: "text-white",
      navbarbuttontextColor: "text-white",
      activeIndicatorColor: "bg-[#7446F3]",
      navbarbg: "bg-[#7446F3]",
      brandlogo: true,
    },
    {
      navbarTextColor: "text-black",
      navbarbuttontextColor: "text-white",
      activeIndicatorColor: "bg-[#7446F3]",
      navbarbg: "bg-[#7446F3]",
      brandlogo: false,
    },
    {
      navbarTextColor: "text-black",
      navbarbuttontextColor: "text-white",
      activeIndicatorColor: "bg-[#7446F3]",
      navbarbg: "bg-[#7446F3]",
      brandlogo: false,
    },
    {
      navbarTextColor: "text-white",
      navbarbuttontextColor: "text-[#7446F3]",
      activeIndicatorColor: "bg-[#fff]",
      navbarbg: "bg-[#fff]",
      brandlogo: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current || !footerRef.current) return;

      const sections = mainRef.current.querySelectorAll("section");
      const scrollPosition = mainRef.current.scrollTop;

      sections.forEach((section: any, index: number) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index);
        }
      });

      // Check if footer is visible
      const footerTop = footerRef.current.offsetTop;
      const actuallyAtFooter =
        scrollPosition >= footerTop - window.innerHeight / 2;
      setIsFooterVisible(actuallyAtFooter);
      // setIsFooterVisible(scrollPosition >= footerTop - window.innerHeight);
    };

    const currentMainRef = mainRef.current;
    if (currentMainRef) {
      currentMainRef.addEventListener("scroll", handleScroll);
      return () => currentMainRef.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Pass current section colors to Navbar
  const currentSectionColors =
    sectionColors[currentSection] || sectionColors[0];

  return (
    <>
      <motion.div
        animate={{
          opacity: isFooterVisible ? 0 : 1,
          transition: { duration: 0.4 },
        }}
      >
        <Navbar
          navbarTextColor={currentSectionColors.navbarTextColor}
          activeIndicatorColor={currentSectionColors.activeIndicatorColor}
          navbarbuttontextColor={currentSectionColors.navbarbuttontextColor}
          navbarbg={currentSectionColors.navbarbg}
          brandlogo={currentSectionColors.brandlogo}
        />
      </motion.div>
      <motion.main
        ref={mainRef}
        className="relative h-screen overflow-y-scroll snap-mandatory snap-y overflow-hidden"
      >
        {/* Hero Section */}
        <section className="min-h-screen relative snap-start snap-always text-center md:text-left">
          <div className="absolute inset-0 z-0">
            <Home className="w-full h-full" />
          </div>

          <div className="relative z-10 md:pl-28 md:pr-6 px-4">
            <div className="lg:flex md:flex-row justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl md:pt-10 pt-36"
              >
                <div className="inline-block bg-gray-800/80 px-5 py-2 rounded-full">
                  <span className="text-gray-400 font-medium">
                    JOIN THE FUTURE
                  </span>
                </div>

                <h1 className="text-4xl md:text-[65px] mt-6 text-white leading-tight relative">
                  Experience the Future of{" "}
                  <span className="font-bold relative z-10">
                    shopping online!
                  </span>
                  <div className="ml-24 md:-mt-5 -mt-2 object-cover">
                    <Marginline className="md:w-full w-[254px] h-[10px] rounded-full md:h-full" />
                  </div>
                </h1>

                <p className="text-[#A7A7A7] mt-8 text-xl max-w-xl">
                  Marketplace like never before. Connect with Sellers, checkout
                  products on live, buy the best from the best.
                </p>

                <div className="mt-10 items-center flex justify-center md:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#7446F3] hover:bg-[#6235e4] text-white font-semibold md:py-5 md:px-4 py-4 px-3 rounded-xl flex items-center gap-3 transition-colors duration-300 shadow-sm shadow-[#7446F3] text-sm md:text-base"
                  >
                    <GooglePlays className="hidden md:block" />
                    <GooglePlaySmall className="md:hidden block" />
                    Download for Android
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-full overflow-hidden">
                  <div className="hidden md:block md:mt-6">
                    <FrameHome />
                  </div>
                  <div className="block md:hidden mt-14 px-8 mb-8">
                    <Framesmall />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute md:ml-[47.2%] md:mt-[134px]"
              >
                <div className="overflow-hidden">
                  <div className="hidden md:block">
                    <Showcase />
                  </div>
                  <div className="block absolute md:hidden px-36 -top-[344px]">
                    <ShowcaseSmall />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="min-h-screen relative bg-white snap-start snap-always">
          <div className="container md:pt-24 pt-8 md:mx-auto md:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col-reverse items-center md:flex-row justify-between md:gap-24 gap-6 pt-16 md:ml-16 px-8 md:px-0"
            >
              <div className="flex-shrink-0 mb-20 z-10">
                <div className="hidden md:block">
                  <Categories />
                </div>
                <div className="block md:hidden">
                  <CategoriesSmall />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center md:text-left z-10 md:mt-0"
              >
                <h2 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-4">
                  Discover Your <br />
                  <span className="block mt-3 md:mt-0 text-[#7446F3] font-bold">
                    Perfect Product
                  </span>
                </h2>
                <p className="text-gray-500 max-w-lg mx-auto md:mx-0 text-xl">
                  Explore our curated collection where your dream products are
                  just a click away.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute right-4 bottom-0"
            >
              <Starts />
            </motion.div>
          </div>
        </section>

        {/* Live Shows Section */}
        <section className="min-h-screen bg-[#DBCFFC] snap-start snap-always">
          <div className="absolute right-0">
            <Starbig />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute md:mt-80 mt-[518px] left-0"
          >
            <Starreel />
          </motion.div>
          <div className="container md:mx-44 px-8 py-20 md:pt-28 pt-56 text-center md:text-left">
            <div className="md:flex items-center gap-32">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 max-w-sm"
              >
                <h2 className="text-4xl sm:text-7xl text-black mb-6">
                  Join Epic{" "}
                  <span className="text-[#7446F3] font-bold">Live Shows</span>
                </h2>
                <p className="text-gray-500 text-xl">
                  Connect with passionate sellers and explore hidden gems all
                  over India.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 flex gap-6 mt-8 md:mt-0"
              >
                <div className="md:h-[502px] md:w-[242px] h-full w-44 bg-gray-100 rounded-3xl border-8 border-[#DBCFFC] shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.5)] overflow-hidden z-10">
                  {/* <Image src={Video1} alt="my gif" height={500} width={500} /> */}
                </div>
                <div className="md:h-[502px] md:w-[242px] h-full w-44 bg-gray-100 rounded-3xl border-8 border-[#DBCFFC] shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.5)] mt-28 overflow-hidden">
                  {/* <Image src={Video2} alt="my gif" height={500} width={500} /> */}
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute mt-4 -left-6 md:-left-0 md:mt-0 overflow:hidden"
          >
            <Startrust className="" />
          </motion.div>
        </section>

        {/* Trust Section */}
        <section className="min-h-screen bg-[#7446F3] py-20 md:pt-40 snap-start snap-always z-10">
          <Trust />
        </section>

        {/* footer with ref */}
        <div ref={footerRef} className="snap-start snap-always">
          <Footer />
        </div>
      </motion.main>
    </>
  );
}

export default Landing;
