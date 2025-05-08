"use client";
import React from "react";
import GooglePlays from "@/assets/GooglePlaylogo24.svg";
import Footer from "@/components/footer";
import Section from "@/components/section";

const Page = () => {
  return (
    <>
      <div className="flex items-center h-screen">
        <div className="text-left px-0 pl-32">
          <div className="text-4xl md:text-[80px] font-semibold mb-6 leading-tight">
            We are{" "}
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              India's first social commerce Marketplace
            </span>{" "}
            -go live, chat with buyers, and{" "}
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              Sell 3x Faster
            </span>
          </div>
          <p className="text-xl md:text-2xl mt-6 leading-relaxed">
            a next-generation e-commerce marketplace built to redefine how
            humans buy and sell
          </p>

          <div className="flex flex-col sm:flex-row gap-16 mt-16">
            <button className="px-6 py-4 bg-white text-black rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 border border-blue-600 flex gap-2 items-center font-semibold">
              <GooglePlays className="hidden md:block" />
              Download for Android
            </button>
            <button className="px-6 py-3 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300">
              See how it works
            </button>
          </div>
        </div>
      </div>

      {/* second phase */}
      <div>hello</div>

      {/* third phase */}
      <div>hello</div>

      {/* FAQ */}
      <div>FAQ</div>

      {/* Section */}
      <Section />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Page;
