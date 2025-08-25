"use client";
import React from "react";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="home container mx-auto px-4 pt-15">
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-2/3">
          <h2 className=" text-[#302020]">
            Get In Touch <span className="text-[#7a2d31]">.</span>
          </h2>

          <p className="max-w-lg my-5 text-[#845f56] leading-relaxed">
            Hi, I&apos;m excited to share my Frontend Development portfolio with
            you. I&apos;ve recently completed a diploma where I gained solid
            skills in React.js, Next.js, JavaScript, HTML, CSS, Tailwind CSS,
            and Bootstrap. I&apos;m eager to contribute to your team and build
            awesome, user-friendly projects together. Please feel free to get in
            touch if you&apos;d like to discuss potential opportunities
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3 py-2">
              <span className="border border-[#7a2d31] text-[#7a2d31] p-2 rounded-2xl bg-[#f9f5f2]">
                <TfiEmail />
              </span>
              <p className="text-[#845f56] text-lg">mahamelmogy@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="border border-[#7a2d31] text-[#7a2d31] p-2 rounded-2xl bg-[#f9f5f2]">
                <IoCallOutline />
              </span>
              <p className="text-[#845f56] text-lg">+20 114 627 6754</p>
            </div>
          </div>

          {/* Back Button */}
          <Link href="/">
            <button className="bg-[#e5d6c6] text-[#302020] px-4 py-2 my-6 rounded-md hover:bg-[#d8c0ae] transition cursor-pointer flex items-center gap-2">
              <span>←</span> Back to Home
            </button>
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-[330px] h-[330px] rounded-full border-2 border-[#7a2d31] flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
              <Image
                src="/images/download1.png"
                alt="Maha's Profile"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
