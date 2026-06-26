"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, title: "Support", link: "/support" },
  { id: 2, title: "Privacy Policy", link: "/privacy" },
  { id: 3, title: "Terms of Use", link: "/terms" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="w-full fixed top-0 left-0 z-50  border-b border-gray-100"
      style={{
        background:
          "linear-gradient(120deg, #f5f3ff 0%, #ede9fe 35%, #ddd6fe 75%, #c4b5fd 100%)",
      }}
    >
      <nav className=" tiny-container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50">
          <svg
            width={32}
            height={32}
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2005_758)">
              <path fill="#fff" d="M0 0H1024V1024H0z" />
              <path
                d="M295.198 219.474c-2.937-8.81-6.503-15.523-10.698-20.138-3.776-5.034-8.391-8.39-13.845-10.069-5.034-2.097-11.747-3.146-20.138-3.146h-1.888V159.69h155.44v26.431h-8.181c-12.586 0-22.026 1.888-28.319 5.664-6.293 3.356-9.44 10.278-9.44 20.767 0 3.356.42 7.552 1.259 12.586a696.856 696.856 0 003.776 14.474l29.577 105.724c2.937 10.069 5.664 21.397 8.181 33.983a1989.95 1989.95 0 018.181 35.241c2.518 10.908 4.406 19.929 5.664 27.061h1.888c1.259-7.132 3.147-15.733 5.664-25.802a7818.327 7818.327 0 019.44-32.095l10.698-32.095 65.448-190.051h39.647l62.931 186.276c2.517 7.551 5.034 15.732 7.551 24.543a463.198 463.198 0 018.181 25.801 3481.967 3481.967 0 016.923 24.543c2.097 7.552 3.566 13.845 4.405 18.88h1.888c1.258-7.132 2.937-15.104 5.034-23.914a2530.71 2530.71 0 008.181-30.836 2648.493 2648.493 0 0111.328-37.13l31.465-101.318c1.679-5.454 2.937-11.118 3.776-16.992 1.259-6.293 1.888-11.118 1.888-14.474 0-10.908-3.566-18.669-10.698-23.284-6.713-5.035-16.991-7.552-30.836-7.552h-4.405V159.69h134.672v26.431h-8.181c-7.971 0-14.684 1.258-20.138 3.776-5.454 2.097-10.279 6.712-14.474 13.845-4.196 7.132-8.391 17.62-12.586 31.465L653.276 497h-50.345l-86.216-263.052L427.353 497h-49.715l-82.44-277.526z"
                fill="#000"
              />
              <path fill="#000" d="M106 505H918V517H106z" />
              <path
                d="M736.536 802.649c2.96 8.803 6.543 15.506 10.751 20.11 3.789 5.024 8.413 8.369 13.871 10.032 5.04 2.085 11.756 3.116 20.147 3.094l1.887-.005.07 26.431-155.439.41-.07-26.431 8.181-.021c12.587-.034 22.021-1.947 28.304-5.739 6.285-3.373 9.413-10.304 9.385-20.792-.009-3.356-.439-7.551-1.292-12.583a704.241 704.241 0 00-3.814-14.464L638.66 677.045c-2.963-10.061-5.72-21.381-8.27-33.961a1990 1990 0 01-8.274-35.219c-2.546-10.902-4.458-19.917-5.736-27.046l-1.887.005c-1.24 7.136-3.105 15.741-5.596 25.817a7919.306 7919.306 0 01-9.355 32.12l-10.613 32.123-64.947 190.223-39.646.105-63.423-186.109c-2.537-7.545-5.076-15.719-7.616-24.523a463.159 463.159 0 01-8.249-25.78 3471.03 3471.03 0 01-6.988-24.525c-2.117-7.546-3.602-13.835-4.455-18.867l-1.887.005c-1.24 7.135-2.897 15.111-4.972 23.927a2555.175 2555.175 0 00-8.099 30.857 2636.552 2636.552 0 01-11.23 37.159l-31.198 101.402c-1.663 5.459-2.907 11.126-3.731 17.001-1.242 6.297-1.858 11.123-1.849 14.479.029 10.908 3.615 18.661 10.759 23.257 6.726 5.016 17.012 7.506 30.856 7.47l4.406-.012.069 26.431-134.671.356-.07-26.431 8.181-.022c7.971-.021 14.68-1.297 20.128-3.829 5.448-2.112 10.261-6.739 14.437-13.883 4.177-7.143 8.344-17.642 12.503-31.498l80.49-262.007 50.344-.133 86.91 262.823 88.667-263.286 49.715-.132 83.173 277.307z"
                fill="#000"
                fillOpacity={0.59}
              />
            </g>
            <defs>
              <clipPath id="clip0_2005_758">
                <path fill="#fff" d="M0 0H1024V1024H0z" />
              </clipPath>
            </defs>
          </svg>
          {/* <Image
            src="/images/logo.png"
            alt="Word Versus Logo"
            width={32}
            height={32}
            className="rounded"
          /> */}
          <span className="text-xl font-medium text-black">Word Versus</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
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

        <button onClick={() => setOpen(!open)} className="md:hidden z-50">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
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
      )}
    </header>
  );
};

export default Navbar;
