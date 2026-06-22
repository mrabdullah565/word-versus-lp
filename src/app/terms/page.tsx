import Navbar from "../components/navbar/Navbar";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FEFBF7] min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-24">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Terms of Service
          </h1>

          <p className="text-gray-500 mt-4 mb-20">
            Last updated: June 22, 2026
          </p>

          {/* TODO: Replace this placeholder with the full Terms of Service copy before launch. */}
          <div className="space-y-8 text-gray-500 leading-relaxed">
            <p>
              The Terms of Service for Word Versus are coming soon. Please check back before launch.
            </p>
            <p>
              For questions in the meantime, contact us at:{" "}
              {/* TODO: replace with real support email */}
              <span className="font-medium text-gray-700">[SUPPORT_EMAIL]</span>
            </p>
          </div>

        </div>
      </main>
    </>
  );
}
