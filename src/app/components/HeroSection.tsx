"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-linear-to-b from-[#f1efec] to-[#f3ede3] flex items-center pt-24">
      <div className="tiny-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <button className="text-xs md:text-sm text-black flex items-center bg-[#e7e9e1] py-2 px-4 rounded-full border border-green-100 font-medium">
            <Image src="/star.webp" alt="star" width={20} height={20} />
            <Image src="/star.webp" alt="star" width={20} height={20} />
            <Image src="/star.webp" alt="star" width={20} height={20} />
            <Image src="/star.webp" alt="star" width={20} height={20} />
            <Image
              src="/star.webp"
              alt="star"
              width={20}
              height={20}
              className="mr-4"
            />
            4.7 Rating · 190+ Reviews
          </button>

          <h1 className="text-3xl sm:text-4xl mt-4 md:text-5xl lg:text-6xl font-extrabold text-[#2d3638] leading-tight">
            Your cozy farming adventure begins here
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg lg:text-xl">
            Tiny Harvest is a cozy farming RPG where you grow crops, craft
            items, send explorers into mines, and unlock new systems as your
            farm expands.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <button className="flex items-center justify-center gap-3 bg-black hover:scale-105 text-white px-6 py-4 rounded-xl hover:opacity-90 transition w-full sm:w-auto lg:w-80">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09z" />
              </svg>

              <span className="font-bold text-sm">
                Download Free on App Store
              </span>
            </button>

            <button className="flex items-center justify-center gap-3 bg-[#028E61] hover:scale-105 text-white px-6 py-4 lg:py-6 rounded-xl hover:opacity-90 transition w-full sm:w-auto lg:w-80">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85C3.34 21.61 3 21.09 3 20.5zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27z" />
              </svg>

              <span className="font-bold text-sm">
                Download Free on Google Play
              </span>
            </button>
          </div>

          <p className="text-xs md:text-sm text-gray-500 pt-4">
            Free to play · No forced ads
          </p>
        </div>

        <div className="relative w-full h-100 md:h-125 lg:h-180">
          <Image
            src="/images/image_4.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div> 
      </div>
    </section>
  );
}
