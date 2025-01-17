"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import Image from "next/image";

const Pengumuman = () => {
  return (
    <section
      id="pengumuman"
      className="flex flex-row relative items-center justify-center min-h-[70vh] lg:min-h-screen w-full "
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] lg:text-[50px]  font-semibold text-center bg-clip-text bg-gradient-to-r text-transparent  from-white via-[#00BBE0] to-[#00BBE0]"
        >
          Pengumuman
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center w-auto h-auto cursor-pointer group">
          <Image
            src="/shackle-only.svg"
            alt="Lock top"
            width={150}
            height={150}
            className="w-[50px] translate-y-20 transition-all duration-200 group-hover:translate-y-14"
          />
          <Image
            src="/diamond-lock.svg"
            alt="Lock Main"
            width={100}
            height={100}
            className="z-10 "
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Mari bergabung bersama kami
        </div>
      </div>

      <div className="absolute flex items-start justify-center w-full">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="h-auto w-full"
          src="/encryption-color-changed.webm/"
        />
      </div>
    </section>
  );
};

export default Pengumuman;
