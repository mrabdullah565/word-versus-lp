"use client";

import Image from "next/image";

const reviews = [
    {
        id: 1,
        name: "- Muskan",
        review: "Absolutely amazing game with much love for the details!",
        rating: 5,
    },
    {
        id: 2,
        name: "- Neha",
        review: "Great game — only thing I play now while slaving away at my corporate 9-5.",
        rating: 4,
    },
    {
        id: 3,
        name: "- Hajra",
        review:
            "Every other farm game is overstimulating, full of ads and paywalls. This one is so intuitive and fun!",
        rating: 5,
    },
    {
        id: 4,
        name: "- Hira",
        review:
            "No ads and the IAPs don't seem in your face or necessary. Love the polish and progression.",
        rating: 5,
    },
    {
        id: 5,
        name: "- Ali Raza",
        review:
            "Such a chill little game. No timers, no stress—just planting crops and enjoying cozy vibes.",
        rating: 4,
    },
    {
        id: 6,
        name: "- Sara Ahmed",
        review:
            "Tiny Harvest really has soul behind it. Developer listens and updates constantly!",
        rating: 5,
    },
];

const Reviews = () => {
    return (
        <section className="w-full py-20 bg-[#FEFAF5] mb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d3638]">
                    Loved by farmers everywhere
                </h2>
                <p className="text-center text-gray-600 mt-16 text-lg">
                    Join thousands of players growing their tiny farms
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {reviews.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white pt-6 pb-18 px-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex gap-1 mb-3">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <Image
                                        key={i}
                                        src="/images/star.webp"
                                        alt="star"
                                        width={18}
                                        height={18}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                "{item.review}"
                            </p>
                            <h4 className="mt-4 font-semibold text-gray-600">
                                {item.name}
                            </h4>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Reviews;