import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="home container mx-auto px-4 py-16">
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        <div className="w-full xl:w-2/3">
          <p className="font-bold text-3xl flex items-center">
            Hey, I&apos;m Maha 🌟
          </p>
          <h1 className="text-8xl font-bold leading-tight max-w-3xs text-[#302020]">
            <span className="text-[#7a2d31]">Front</span>end Developer
          </h1>
          <p className="max-w-lg my-5 text-xl text-[#bf9476]">
            I&apos;m a frontend developer based in Egypt, I&apos;ll help you
            build beautiful websites your users will love.
          </p>
          <div className="flex gap-4">
            <a
              href="/Maha_Monir_Ali_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-lg"
            >
              View CV
            </a>

            <a href="/Maha_Monir_Ali_CV.pdf" download className="btn text-lg">
              Download CV
            </a>
          </div>
        </div>
        <div className="w-full xl:w-1/3 flex justify-center">
          <div className="relative w-[380px] h-[380px] rounded-full border-[1px] border-[#7a2d31]  flex items-center justify-center">
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
