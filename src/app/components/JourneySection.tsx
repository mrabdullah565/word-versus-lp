"use client";

const Journey = () => {
    return (
        <section className="tiny-container py-24 bg-linear-to-b from-[#f8f4ed] to-[#f8eee6]">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2d3638] leading-tight">
                    Ready to start your farming journey?
                </h2>
                <p className="mt-4 text-gray-500 text-base md:text-lg">
                    Join thousands of players who've found their cozy escape
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
                    <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09z" />
                        </svg>
                        <span className="font-medium">Download on App Store</span>
                    </button>
                    <button className="flex items-center gap-3 bg-[#00A86B] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85C3.34 21.61 3 21.09 3 20.5zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27z" />
                        </svg>
                        <span className="font-medium">Download on Google Play</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Journey;