const FoundersNote = () => {
  return (
    <section className="w-full py-24">
      <div className="tiny-container">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3638] leading-tight">
            Why we built Word Versus
          </h2>

          <p className="mt-7 text-base md:text-lg text-gray-500 leading-relaxed">
            Most vocabulary apps teach you new words. We kept noticing a
            different problem: the words people already know, used{" "}
            <em>almost</em> right. <em>Alter</em> when they meant{" "}
            <em>modify</em>. <em>Begin</em> when <em>start</em> was sharper.
          </p>

          <p className="mt-5 text-base md:text-lg text-gray-500 leading-relaxed">
            So we built the app we wanted one that makes those subtle
            differences finally click. We&apos;re early, and we&apos;d love your
            feedback as we shape what Word Versus becomes.
          </p>

          <p className="mt-8 text-base text-[#2d3638] font-medium">
            {/* TODO: Replace [FOUNDER NAME] with the actual founder's name */}
            &mdash; Abdullah R.
          </p>
        </div>
      </div>

      {/* Future testimonials block goes here */}
    </section>
  );
};

export default FoundersNote;
