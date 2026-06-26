"use client";

import Image from "next/image";

const features = [
  { id: 1, title: "Home", image: "/word-versus-screenshots/home.png" },
  {
    id: 2,
    title: "Categories",
    image: "/word-versus-screenshots/categories.png",
  },
  {
    id: 3,
    title: "Word Lists",
    image: "/word-versus-screenshots/category-words.png",
  },
  {
    id: 4,
    title: "Featured Pairs",
    image: "/word-versus-screenshots/featured-list.png",
  },
  { id: 5, title: "Search", image: "/word-versus-screenshots/search.png" },
  {
    id: 6,
    title: "Saved Words",
    image: "/word-versus-screenshots/saved-list.png",
  },
  {
    id: 7,
    title: "Word Comparison",
    image: "/word-versus-screenshots/word-detail-1.png",
  },
  {
    id: 8,
    title: "When to Use",
    image: "/word-versus-screenshots/word-detail-2.png",
  },
  {
    id: 9,
    title: "Real Examples",
    image: "/word-versus-screenshots/word-detail-3.png",
  },
  { id: 10, title: "Quiz", image: "/word-versus-screenshots/quiz-1.png" },
  {
    id: 11,
    title: "Quiz Question",
    image: "/word-versus-screenshots/quiz-2.png",
  },
  {
    id: 12,
    title: "Quiz Progress",
    image: "/word-versus-screenshots/quiz-3.png",
  },
  {
    id: 13,
    title: "Quiz Result",
    image: "/word-versus-screenshots/quiz-result.png",
  },
];

const Action = () => {
  return (
    <section id="qa-action-section" className="w-full py-24 bg-[#FEFBF7]">
      <div className="tiny-container mx-auto px-6 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#2d3638] mb-16">
          See it in action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {features.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="relative w-40 h-90 border-4 sm:w-48 sm:h-100 rounded-3xl bg-white overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-3 hover:scale-105">
                <img
                  src={item.image}
                  alt={item.title}
                  sizes="(max-width: 640px) 100vw, 192px"
                  className="object-cover"
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
