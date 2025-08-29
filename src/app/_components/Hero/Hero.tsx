import React from "react";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

export default function Hero() {
  return (
    <section className="home container mx-auto px-4 ">
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        <div className="w-full xl:w-2/3">
          <p className="font-bold text-2xl sm:text-3xl flex items-center">
            Hey, I&apos;m Maha 🌟
          </p>
          <h1 className="text-7xl sm:text-8xl font-bold leading-tight max-w-lg text-[#302020]">
            <span className="text-[#7a2d31] me-8">Front</span>end Developer
          </h1>
          <p className=" my-5 sm:text-xl text-[#302020]">
            Frontend Developer | React & Next.js | Building fast, accessible UIs
          </p>
          {/* Social Icons */}
          <div className="mb-5">
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/maha-elmogy-911b03216"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#302020] bg-[#e5d6c6] p-1 rounded-full hover:bg-[#d8c0ae] transition-colors duration-300"
              >
                <div className="text-2xl">
                  <CiLinkedin />
                </div>
              </a>
              <a
                href="https://github.com/MahaELMogy?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#302020] bg-[#e5d6c6] p-1 rounded-full hover:bg-[#d8c0ae] transition-colors duration-300"
              >
                <div className="text-2xl">
                  <SiGithub />
                </div>
              </a>
              <a
                href="https://wa.me/201146276754"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#302020] bg-[#e5d6c6] p-1 rounded-full hover:bg-[#d8c0ae] transition-colors duration-300"
              >
                <div className="text-2xl">
                  <SiWhatsapp />
                </div>
              </a>
            </div>
          </div>
          {/* CV Buttons */}
          <div className="flex gap-4">
            <a
              href="/Maha_Monir_Ali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-sm sm:text-lg"
            >
              View CV
            </a>
            <a
              href="/Maha_Monir_Ali_CV.pdf"
              download
              className="btn text-s sm:text-lg"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full xl:w-1/3 flex justify-center">
          <div className="w-[350px] h-[350px] rounded-full border-2 border-[#7a2d31] flex items-center justify-center">
            <div className="w-[320px] h-[320px] rounded-full overflow-hidden">
              <Image
                src="/images/download1.png"
                alt="Maha's Profile"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
