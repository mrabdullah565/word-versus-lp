import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Tiny Harvest",
  description: "Read about how Tiny Harvest collects and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FEFBF7] text-slate-900">
      <div className="tiny-container mx-auto px-6 py-24">
        <Link href="/" className="text-sm font-medium text-green-600 hover:underline">
          ← Back to Home
        </Link>

        <div className="mt-10 rounded-3xl bg-white p-10 shadow-lg shadow-slate-200/50">
          <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            At Tiny Harvest, we respect your privacy and are committed to protecting your personal data. This page explains what information we collect, how we use it, and the choices you have.
          </p>

          <section className="mt-12 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <p className="mt-3 text-slate-600 leading-7">
                We may collect information you provide directly, such as email addresses for support requests, and non-personal usage data to help improve the website experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
              <p className="mt-3 text-slate-600 leading-7">
                We use data to keep the site running, respond to inquiries, and improve our content. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Cookies and Tracking</h2>
              <p className="mt-3 text-slate-600 leading-7">
                The site may use cookies or similar technologies to support basic functionality and analytics. You can manage cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p className="mt-3 text-slate-600 leading-7">
                You can request access to any personal information we hold and ask for corrections. If you have privacy concerns, contact us through the support channels on the site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
              <p className="mt-3 text-slate-600 leading-7">
                We may update this policy occasionally. The updated version will always be available on this page.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
