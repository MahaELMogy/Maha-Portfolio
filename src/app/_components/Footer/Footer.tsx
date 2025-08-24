import React from "react";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 cursor-pointer">
              <Link href="/">
                <svg
                  viewBox="0 0 200 80"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-26"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    fill="none"
                    stroke="#845f56"
                    strokeWidth="2"
                  />
                  <text
                    x="40"
                    y="52"
                    fontFamily="Arial, sans-serif"
                    fontSize="32"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="#845f56"
                  >
                    M
                  </text>
                  <text
                    x="90"
                    y="30"
                    fontFamily="Arial, sans-serif"
                    fontSize="20"
                    fontWeight="bold"
                    fill="#845f56"
                  >
                    MAHA
                  </text>
                  <text
                    x="90"
                    y="50"
                    fontFamily="Arial, sans-serif"
                    fontSize="20"
                    fontWeight="300"
                    fill="#845f56"
                  >
                    MOUNIR
                  </text>
                  <text
                    x="90"
                    y="62"
                    fontFamily="Arial, sans-serif"
                    fontSize="9"
                    fill="#9ca3af"
                    letterSpacing="1px"
                  >
                    PORTFOLIO
                  </text>
                  <line
                    x1="90"
                    y1="68"
                    x2="170"
                    y2="68"
                    stroke="#845f56"
                    strokeWidth="1"
                  />
                  <circle cx="175" cy="68" r="1.5" fill="#374151" />
                  <circle cx="182" cy="68" r="1" fill="#374151" opacity="0.7" />
                </svg>
              </Link>
            </div>
            <p className="text-[#845f56] text-sm leading-relaxed mb-4">
              Creative professional passionate about design and development.
              Bringing ideas to life through innovative solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#7a2d31]">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-[#7a2d31]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-[#845f56] text-sm">
                  mahamelmogy@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-[#7a2d31]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-[#845f56] text-sm">+20 11 4627 6754</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 text-[#7a2d31]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-[#845f56] text-sm">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#7a2d31]">
              Stay Connected
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/maha-elmogy-911b03216"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 hover:bg-[#7a2d31] text-[#845f56] hover:text-white p-3 rounded-lg transition-all duration-300 shadow-sm border border-gray-200"
              >
                <div className="text-2xl">
                  <CiLinkedin />
                </div>
              </a>
              <a
                href="https://github.com/MahaELMogy?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 hover:bg-[#7a2d31] text-[#845f56] hover:text-white p-3 rounded-lg transition-all duration-300 shadow-sm border border-gray-200"
              >
                <div className="text-2xl">
                  <SiGithub />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#845f56] text-sm mb-4 md:mb-0">
            <p>&copy; 2024 Maha Mounir. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-4 text-[#845f56] text-sm">
            <a
              href="#"
              className="hover:text-[#7a2d31] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-[#7a2d31] transition-colors duration-300"
            >
              Terms of Service
            </a>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <svg
                className="h-4 w-4 text-red-500"
                fill="#7a2d31"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>in Cairo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
