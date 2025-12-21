"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  /* Close dropdown on outside click (desktop) */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Close menus on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
    setShowDropdown(false);
  }, [pathname]);

  const navClass = (path) =>
    `text-md cursor-pointer border-b-2 transition-all ${
      pathname === path
        ? "border-[#eab308] text-[#eab308]"
        : "border-transparent hover:text-[#eab308]"
    }`;

  const navMobile = (path) =>
    `text-lg cursor-pointer transition-all border-b-2 pb-1 ${
      pathname === path
        ? "border-[#eab308] text-[#eab308]"
        : "border-transparent text-white hover:text-[#eab308]"
    }`;

  const dropdownClass = (path) =>
    `px-4 py-2 rounded-md transition-all cursor-pointer ${
      pathname === path
        ? "bg-[#eab308] text-black"
        : "hover:bg-[#eab308] hover:text-black"
    }`;

  const dropdownMobile = (path) =>
    `pl-2 py-1 ${
      pathname === path ? "text-[#eab308]" : "text-white"
    }`;

  const isGalleryActive = pathname.startsWith("/gallery");

  return (
    <header className="w-full bg-[#211f1b] fixed top-0 left-0 z-50">
      {/* TOP BAR */}
      <div className="h-22 flex items-center justify-between px-4 md:px-10">

        {/* LEFT – LOGO */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/mountain.png"
              alt="Mountain"
              width={100}
              height={60}
              className="h-14 hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* CENTER – DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <Link href="/" className={navClass("/")}>Home</Link>
          <Link href="/product" className={navClass("/product")}>Product</Link>
          <Link href="/about" className={navClass("/about")}>About</Link>
          <Link href="/blog" className={navClass("/blog")}>Blog</Link>

          {/* Gallery Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={`flex items-center gap-1 border-b-2 transition-all ${
                isGalleryActive
                  ? "border-[#eab308] text-[#eab308]"
                  : "border-transparent hover:text-[#eab308]"
              }`}
            >
              Gallery {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
            </button>

            {showDropdown && (
              <div className="absolute top-full mt-2 w-48 bg-[#211f1b] border border-[#eab308]/30 rounded-lg shadow-lg p-2 z-50">
                <div className="flex flex-col gap-2">
                  <Link
                    href="/gallery/photo"
                    className={dropdownClass("/gallery/photo")}
                    onClick={() => setShowDropdown(false)}
                  >
                    Photo Gallery
                  </Link>
                  <Link
                    href="/gallery/video"
                    className={dropdownClass("/gallery/video")}
                    onClick={() => setShowDropdown(false)}
                  >
                    Video Gallery
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className={navClass("/contact")}>Contact</Link>
        </div>

        {/* RIGHT – DESKTOP BUTTON */}
        <div className="hidden md:block">
          <button className="bg-[#eab308] px-6 py-2 rounded font-bold text-black hover:bg-[#d4a007] transition">
            Inquire Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#211f1b] text-white flex flex-col gap-4 px-6 py-6 border-t border-[#eab308]/20">
          <Link href="/" className={navMobile("/")}>Home</Link>
          <Link href="/product" className={navMobile("/product")}>Product</Link>
          <Link href="/about" className={navMobile("/about")}>About</Link>
          <Link href="/blog" className={navMobile("/blog")}>Blog</Link>

          {/* Mobile Gallery */}
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-1 text-lg"
          >
            Gallery {showDropdown ? <FaAngleUp /> : <FaAngleDown />}
          </button>

          {showDropdown && (
            <div className="border-l-2 border-[#5e4b14] pl-3 flex flex-col gap-2">
              <Link href="/gallery/photo" className={dropdownMobile("/gallery/photo")}>
                Photo Gallery
              </Link>
              <Link href="/gallery/video" className={dropdownMobile("/gallery/video")}>
                Video Gallery
              </Link>
            </div>
          )}

          <Link href="/contact" className={navMobile("/contact")}>Contact</Link>

          <button className="bg-[#eab308] text-black py-2 rounded font-bold">
            Inquire Now
          </button>
        </div>
      )}
    </header>
  );
}
