"use client";

import Image from "next/image";

const features = [
  { id: 1, title: "Your Farm", image: "/images/image_4.png" },
  { id: 2, title: "Crafting", image: "/images/image_5.png" },
  { id: 3, title: "Orders", image: "/images/edited_photo.png" },
  { id: 4, title: "Adventures", image: "/images/image_7.png" },
  { id: 5, title: "Market", image: "/images/image_8.png" },
  { id: 6, title: "Expeditions", image: "/images/image_9.png" },
];

const Action = () => {
  return (
    <section className="w-full py-24 bg-[#FEFBF7]">
      <div className="tiny-container mx-auto px-6 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2d3638] mb-16">
          See it in action
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {features.slice(0, 4).map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="relative w-40 h-90 sm:w-48 sm:h-100 rounded-3xl bg-white lg:p-26 overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-3 hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-5 text-md font-medium text-gray-500 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-10 justify-center justify-items-center mt-12 max-w-125 mx-auto">
          {features.slice(4, 6).map((item) => (
            <div key={item.id} className="flex flex-col items-center">

              <div className="relative w-40 h-90 sm:w-48 sm:h-100 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-3 hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-5 text-md font-medium text-gray-500 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Action;