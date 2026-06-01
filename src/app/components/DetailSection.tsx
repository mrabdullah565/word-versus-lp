"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DetailSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = textRef.current?.children || [];
      const images = imagesRef.current;

      gsap.set(texts, { opacity: 0, y: 0 });
      gsap.set(texts[0], { opacity: 1 });

      gsap.set(images, { opacity: 1, scale: 1, x: 0, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      images.forEach((img, i) => {
        const currentText = texts[i];
        const nextText = texts[i + 1];

        if (!img) return;

        if (i !== images.length - 1) {
          tl.to(
            img,
            {
              rotate: 25,
              transformOrigin: "bottom",
              ease: "none",
            },
            i,
          ).to(
            img,
            {
              opacity: 0,
              duration: 0.3,
              ease: "none",
            },
            i + 0.3,
          );
        }

        if (currentText && i !== texts.length - 1) {
          tl.to(
            currentText,
            {
              opacity: 0,
              y: -20,
              duration: 0.2,
            },
            i,
          );
        }

        if (nextText) {
          tl.fromTo(
            nextText,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.2,
            },
            i + 0.2,
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const title = [
    "Your cozy farming adventure begins here",
    "Relax and build your dream world",
    "Grow crops and explore nature",
    "Every scroll unlocks a new story",
    "Creativity meets peaceful farming",
    "Your journey starts now",
  ];

  const images = [
    "/images/image_4.png",
    "/images/image_5.png",
    "/images/edited_photo.png",
    "/images/image_7.png",
    "/images/image_8.png",
    "/images/image_9.png",
  ];

  return (
    <>
      <h1 className="text-center lg:text-5xl text-gray-700 font-bold mt-24 text-4xl">
        See our Actions
      </h1>

      <section
        ref={sectionRef}
        className="w-full min-h-screen flex items-center"
      >
        <div className="tiny-container grid grid-cols-1 md:grid-cols-2 lg:gap-64 items-center">
          <div ref={textRef} className="relative h-40">
            {title.map((t, i) => (
              <p
                key={i}
                className="absolute top-0 left-0 text-3xl sm:text-4xl md:text-4xl font-extrabold text-[#2d3638] opacity-0"
              >
                {t}
              </p>
            ))}
          </div>

          <div className="relative w-88 h-88 mb-44">
            {images.map((src, i) => (
              <div
                key={i}
                ref={(el) => {
                  imagesRef.current[i] = el;
                }}
                className="absolute top-0 left-0"
                style={{ zIndex: 50 - i }}
              >
                <Image src={src} alt="img" width={300} height={400}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailSection;
