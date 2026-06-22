const HowItWorksSection = () => {
  return (
    <section className="w-full py-24">
      <div className="tiny-container">
        {/* Section header */}
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3638] leading-tight">
            How Word Versus works
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500 leading-relaxed">
            Three steps. A minute a day. Words you&apos;ll never confuse again.
          </p>
        </div>

        {/* Steps: single column on mobile, 3-card row with connectors on desktop */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_36px_1fr_36px_1fr] gap-6 md:gap-0 items-stretch">

          {/* ── Step 1: Meet a word pair ── */}
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-7 flex flex-col gap-6">
            <span className="w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-bold inline-flex items-center justify-center flex-shrink-0">
              1
            </span>

            {/* Micro-visual: two words side by side */}
            {/* TODO: Replace "alter" / "modify" with the final daily word pair */}
            <div className="rounded-xl bg-amber-50 border border-amber-100 px-5 py-5 flex items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400">
                  Word A
                </span>
                <span className="rounded-lg bg-white border border-amber-200 px-4 py-2 font-semibold text-amber-800 text-sm shadow-sm">
                  alter
                </span>
              </div>
              <span className="text-amber-300 text-sm font-medium">vs</span>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-400">
                  Word B
                </span>
                <span className="rounded-lg bg-white border border-sky-200 px-4 py-2 font-semibold text-sky-700 text-sm shadow-sm">
                  modify
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2d3638]">Meet a word pair</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Each day brings two words you&apos;ve been treating as the same — like{" "}
                <em>alter</em> and <em>modify</em>. We show you both, side by side.
              </p>
            </div>
          </div>

          {/* ── Connector 1 → 2 (desktop only) ── */}
          <div aria-hidden="true" className="hidden md:flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#d1d5db"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* ── Step 2: See the difference in context ── */}
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-7 flex flex-col gap-6">
            <span className="w-7 h-7 rounded-full bg-sky-500 text-white text-xs font-bold inline-flex items-center justify-center flex-shrink-0">
              2
            </span>

            {/* Micro-visual: example sentence with the word highlighted in context */}
            {/* TODO: Replace with the final example sentence for the word pair */}
            <div className="rounded-xl bg-sky-50 border border-sky-100 px-5 py-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-sky-400 mb-3">
                Example
              </p>
              <p className="text-sm text-[#2d3638] leading-relaxed">
                &ldquo;The new rule will{" "}
                <span className="rounded-md bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-800">
                  alter
                </span>{" "}
                how requests are approved.&rdquo;
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2d3638]">
                See the difference in context
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Real example sentences make the distinction click — not a dry
                definition, but the exact moment one word fits and the other
                doesn&apos;t.
              </p>
            </div>
          </div>

          {/* ── Connector 2 → 3 (desktop only) ── */}
          <div aria-hidden="true" className="hidden md:flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="#d1d5db"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* ── Step 3: Lock it in ── */}
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-7 flex flex-col gap-6">
            <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs font-bold inline-flex items-center justify-center flex-shrink-0">
              3
            </span>

            {/* Micro-visual: quiz / check confirmation cue */}
            {/* TODO: Replace with the final quiz sentence for the word pair */}
            <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-5 py-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-500 mb-2">
                Which fits?
              </p>
              <p className="text-sm text-[#2d3638] mb-4 leading-relaxed">
                &ldquo;The proposal will ___ the timeline.&rdquo;
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white border border-gray-200 px-3 py-1.5 text-sm text-gray-400">
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-300 flex-shrink-0" />
                  alter
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-100 border border-emerald-200 px-3 py-1.5 text-sm font-medium text-emerald-800">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6.5l2.5 2.5 5.5-5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  modify
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2d3638]">Lock it in</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                A quick check confirms you&apos;ve got it. The pair moves from
                &ldquo;almost know&rdquo; to &ldquo;know for good.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
