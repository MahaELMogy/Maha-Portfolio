"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="logo">
              <Link href="/">
                <svg
                  viewBox="0 0 200 80"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-32 md:h-20 md:w-40"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    fill="none"
                    stroke="#7a2d31"
                    strokeWidth="2"
                  />
                  <text
                    x="40"
                    y="52"
                    fontFamily="Arial, sans-serif"
                    fontSize="32"
                    fontWeight="bold"
                    textAnchor="middle"
                    fill="#7a2d31"
                  >
                    M
                  </text>
                  <text
                    x="90"
                    y="30"
                    fontFamily="Arial, sans-serif"
                    fontSize="20"
                    fontWeight="bold"
                    fill="#7a2d31"
                  >
                    MAHA
                  </text>
                  <text
                    x="90"
                    y="50"
                    fontFamily="Arial, sans-serif"
                    fontSize="20"
                    fontWeight="300"
                    fill="#7a2d31"
                  >
                    MOUNIR
                  </text>
                  <text
                    x="90"
                    y="62"
                    fontFamily="Arial, sans-serif"
                    fontSize="9"
                    fill="#666"
                    letterSpacing="1px"
                  >
                    PORTFOLIO
                  </text>
                  <line
                    x1="90"
                    y1="68"
                    x2="170"
                    y2="68"
                    stroke="#7a2d31"
                    strokeWidth="1"
                  />
                  <circle cx="175" cy="68" r="1.5" fill="#7a2d31" />
                  <circle cx="182" cy="68" r="1" fill="#7a2d31" opacity="0.7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/contact" className="btn text-2xl">
              <LuMessageCircleMore />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#7a2d31] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link
                href="/contact"
                className="block px-3 py-2 text-center bg-[#7a2d31] text-white rounded-md hover:bg-[#5a1f23] font-medium mx-3 mt-4"
                onClick={toggleMenu}
              >
                Contact With me <FiPhoneCall className="inline-block mr-2" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
