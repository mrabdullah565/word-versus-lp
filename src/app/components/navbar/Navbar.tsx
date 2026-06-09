"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, title: "Support", link: "/" },
  { id: 2, title: "Privacy Policy", link: "/privacy" },
  { id: 3, title: "Terms of Use", link: "/terms" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#FEFBF7] border-b border-gray-100">
      
      <nav className="tiny-container py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 z-50"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="TinyHarvest Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-xl font-medium text-black">
            Tiny Harvest
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6">

          {/* ICON 1 */}
          <Link href="/" className="hover:text-green-600 text-black">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515..."></path>
            </svg>
          </Link>

          {/* ICON 2 */}
          <Link href="/" className="hover:text-green-600 text-black">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25..."></path>
            </svg>
          </Link>

          {/* NAV LINKS */}
          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-gray-700 hover:text-green-600 transition"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU (SAFE RENDER FIX) */}
      {open ? (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#FEFBF7] border-b border-gray-100 px-6 py-6 flex flex-col gap-5">

          {navLinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-gray-700 hover:text-green-600 transition"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}

        </div>
      ) : null}

    </header>
  );
};

export default Navbar;