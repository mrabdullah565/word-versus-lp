const ProblemSection = () => {
  return (
    <section className="w-full py-24">
      <div className="tiny-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3638] leading-tight">
            The wrong word is quietly weakening your writing.
          </h2>

          <p className="mt-7 text-base md:text-lg text-gray-500 leading-relaxed">
            You write <em>modify</em> when you mean <em>alter</em>. You say{" "}
            <em>begin</em> when <em>start</em> was sharper. Each one is{" "}
            <em>almost</em> right — close enough that no one corrects you, but
            off enough that your meaning blurs.
          </p>

          <p className="mt-5 text-base md:text-lg text-gray-500 leading-relaxed">
            The hardest part? You don&apos;t notice. These aren&apos;t mistakes
            you can look up, because you don&apos;t know to look. They&apos;re
            the words you <em>almost</em>{" "}know — and they&apos;re shaping how
            clearly you come across, every single day.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 px-7 py-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Sentence A
            </p>
            {/* TODO: Replace with final Sentence A — uses "alter" */}
            <p className="text-[#2d3638] text-base leading-relaxed">
              The changes will{" "}
              <span className="rounded-md bg-amber-100 px-1.5 py-0.5 font-semibold text-amber-800">
                alter
              </span>{" "}
              how the team shares information.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow-sm border border-gray-100 px-7 py-6">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Sentence B
            </p>
            {/* TODO: Replace with final Sentence B — uses "modify" */}
            <p className="text-[#2d3638] text-base leading-relaxed">
              The changes will{" "}
              <span className="rounded-md bg-sky-100 px-1.5 py-0.5 font-semibold text-sky-800">
                modify
              </span>{" "}
              how the team shares information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
