"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

 
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
   const navClass = (path) =>
    `text-md cursor-pointer  border-b-2 transition-all
     ${
       pathname === path
         ? "border-[#eab308] text-[#eab308]"
         : "border-transparent hover:text-[#eab308]"
     }`;
 const dropdownClass = (path) =>
    `px-4 py-2 cursor-pointer rounded-md transition-all ${
      pathname === path
        ? "bg-[#eab308] text-black"
        : "hover:bg-[#eab308] hover:text-black"
    }`;
      const isGalleryActive = pathname.startsWith("/gallery");

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

        <Link href="/" className={navClass("/")}>
          Home
        </Link>

        
        <Link href="/product" className={navClass("/product")}>
          Product
        </Link>

        <Link href="/about" className={navClass("/about")}>
          About
        </Link>

        <Link href="/blog" className={navClass("/blog")}>
          Blog
        </Link>

        {/* Gallery Dropdown */}
         <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className={`flex items-center gap-1 text-md border-b-2 transition-all ${
            isGalleryActive
              ? "border-[#eab308] text-[#eab308]"
              : "border-transparent hover:text-[#eab308]"
          }`}
        >
          Gallery {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
        </button>

        {showDropdown && (
          <div className="absolute top-full  mt-1 w-48 bg-[#211f1b] text-white rounded-lg border border-[#eab308]/30 p-2 z-10 shadow-lg overflow-hidden transition-all duration-500 ease-in-out pl-4  border-l-2 opacity-100">
            <ul className="flex flex-col p-2">
              <Link
                href="/gallery/photo"
                className={dropdownClass("/gallery/photo")}
                onClick={() => setShowDropdown(false)}
              >
                Photo Gallery
              </Link>
              <Link
                href="/gallery/video"
                className={dropdownClass("/video")}
                onClick={() => setShowDropdown(false)}
              >
                Video Gallery
              </Link>
            </ul>
          </div>
        )}
      </div>

        <Link href="/contact" className={navClass("/contact")}>
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
