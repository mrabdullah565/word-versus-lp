"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DetailSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<Array<HTMLDivElement | null>>([]);
  const textRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    return () => {
      // Immediate cleanup before component unmounts
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }

      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }

      // Kill all ScrollTriggers for this section
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });

      // Reset refs
      imagesRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    // Safety check: ensure all refs are valid
    const validImages = imagesRef.current.filter((el) => el !== null);
    if (validImages.length === 0) return;

    const ctx = gsap.context(() => {
      const texts = Array.from(textRef.current?.children || []);
      const images = validImages;

      if (images.length === 0 || texts.length === 0) return;

      // Reset elements to initial state
      gsap.set(texts, { opacity: 0, y: 0 });
      gsap.set(texts[0], { opacity: 1, y: 0 });
      gsap.set(images, { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 });

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

      timelineRef.current = tl;

      // Create smooth sequential animations
      const stepDuration = 1; // duration for each step
      const transitionDuration = 0.3;

      images.forEach((img, i) => {
        if (i === images.length - 1) {
          // Last image stays visible
          return;
        }

        const position = i * stepDuration;
        const currentText = texts[i];
        const nextText = texts[i + 1];
      
        // Image rotation and fade out
        tl.to(
          img,
          {
            rotate: 25,
            duration: stepDuration * 0.6,
            transformOrigin: "bottom",
            ease: "none",
          },
          position,
        ).to(
          img,
          {
            opacity: 0,
            duration: transitionDuration,
            ease: "none",
          },
          position + stepDuration * 0.3,
        );

        // Current text fades out and moves up
        if (currentText) {
          tl.to(
            currentText,
            {
              opacity: 0,
              y: -15,
              duration: transitionDuration,
              ease: "expo.out",
            },
            position + stepDuration * 0.5,
          );
        }

        // Next text fades in and moves from below
        if (nextText) {
          tl.fromTo(
            nextText,
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: transitionDuration,
              ease: "expo.out",
            },
            position + stepDuration * 0.6,
          );
        }
      });
    }, sectionRef);

    ctxRef.current = ctx;

    return () => {
      // Cleanup on unmount
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }

      if (ctx) {
        ctx.revert();
      }

      ctxRef.current = null;

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
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
                key={`detail-image-${i}`}
                ref={(el) => {
                  if (el) {
                    imagesRef.current[i] = el;
                  } else {
                    imagesRef.current[i] = null;
                  }
                }}
                className="absolute top-0 left-0"
                style={{ zIndex: 50 - i }}
              >
                <Image src={src} alt="img" width={300} height={400} priority={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailSection;
