"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="h-22 w-screen bg-[#211f1b] flex items-center justify-between px-4">
      {/* Logo */}
      <div>
        <Link href="/">
          <img
            src="/mountain.png"
            alt="Mountain"
            width={100}
            height={60}
            className="h-14 transition-transform duration-200 hover:cursor-pointer hover:scale-105"
          />
        </Link>
      </div>

      {/* Nav Items */}
      <div className="flex gap-6 justify-between text-white relative">

        <Link href="/" className="border-b-2 border-[#eab308] hover:text-[#eab308] text-md">
          Home
        </Link>

        <Link href="/product" className="hover:text-[#eab308] text-md">
          Product
        </Link>

        <Link href="/about" className="hover:text-[#eab308] text-md">
          About
        </Link>

        <Link href="/blog" className="hover:text-[#eab308] text-md">
          Blog
        </Link>

        {/* Gallery Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1 text-md hover:text-[#eab308]"
          >
            Gallery {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
          </button>

          {showDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-[#211f1b] text-white rounded-lg border border-[#eab308]/30 p-2 z-10 shadow-lg">
              <ul className="flex flex-col p-2">
                <Link
                  href="/gallery/photo"
                  className="px-4 py-2 cursor-pointer hover:bg-[#eab308] rounded-md"
                >
                  Photo Gallery
                </Link>

                <Link
                  href="/gallery/vedio"
                  className="px-4 py-2 cursor-pointer hover:bg-[#eab308] rounded-md"
                >
                  Video Gallery
                </Link>
              </ul>
            </div>
          )}
        </div>

        <Link href="/contact" className="hover:text-[#eab308] text-md">
          Contact
        </Link>
      </div>

      {/* Button */}
      <div>
        <button className="bg-[#eab308] text-md px-7 py-2 rounded font-bold hover:bg-[#d4a007] transition-all">
          Inquire Now
        </button>
      </div>
    </div>
  );
}
