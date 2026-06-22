import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import FooterSection from "../components/FooterSection";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FEFBF7] min-h-screen">
        <div className="tiny-container py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1f1635]">
            Privacy Policy
          </h1>

          <p className="text-gray-400 mt-4 mb-20 text-sm">
            Last updated: June 22, 2026
          </p>

          <div className="space-y-16 text-gray-600 leading-[1.9] max-w-2xl">
            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Overview
              </h2>
              <p>
                Word Versus is committed to protecting your privacy. This
                Privacy Policy describes how we collect, use, and protect
                information when you use the Word Versus mobile app and this
                website. By using our services, you agree to the practices
                described here and to our{" "}
                <Link href="/terms" className="underline underline-offset-2 hover:text-[#1f1635] transition-colors">
                  Terms of Use
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We collect only the information necessary to provide a great
                learning experience:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-gray-700">Usage data</span>{" "}
                  — words practiced, quiz results, streaks, and in-app progress,
                  used solely to power your personal learning history and stats.
                </li>
                <li>
                  <span className="font-medium text-gray-700">
                    Device information
                  </span>{" "}
                  — OS version, device model, and app version, used for
                  debugging and compatibility.
                </li>
                <li>
                  <span className="font-medium text-gray-700">Analytics</span> —
                  anonymised, aggregated data on feature usage and app
                  performance (e.g. session length, screens visited). No
                  individual user is identifiable from this data.
                </li>
                <li>
                  <span className="font-medium text-gray-700">
                    Purchase records
                  </span>{" "}
                  — if you make an in-app purchase, the transaction is processed
                  by Apple App Store or Google Play. We receive only a
                  confirmation and do not store payment card details.
                </li>
              </ul>
              <p className="mt-4">
                We do <span className="font-medium text-gray-700">not</span>{" "}
                require you to create an account or provide your name, email, or
                any personally identifying information to use Word Versus.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">We use the data we collect to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Deliver and improve the Word Versus app experience</li>
                <li>Track your personal learning progress across sessions</li>
                <li>Diagnose crashes and technical issues</li>
                <li>
                  Understand which features are most useful so we can improve
                  them
                </li>
                <li>Process and verify in-app purchases</li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or trade your data to third parties for
                marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Third-Party Services
              </h2>
              <p className="mb-4">
                To operate the app we use a small number of trusted third-party
                services. Each service is contractually bound to process data
                only for the purpose for which it was shared and in compliance
                with applicable privacy laws:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium text-gray-700">
                    Apple App Store / Google Play
                  </span>{" "}
                  — distribute the app and process in-app purchases.
                </li>
                <li>
                  <span className="font-medium text-gray-700">
                    Analytics provider
                  </span>{" "}
                  — collects anonymised crash reports and aggregate usage
                  metrics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Cookies & Tracking
              </h2>
              <p>
                The Word Versus mobile app does not use cookies. This website
                may use first-party cookies solely for analytics and to remember
                your preferences (e.g. scroll position). We do not use
                advertising tracking cookies or cross-site tracking pixels. You
                can disable cookies in your browser settings at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Children&apos;s Privacy
              </h2>
              <p>
                Word Versus is designed for general audiences and does not
                knowingly collect personal information from children under the
                age of 13 (or the applicable age of digital consent in your
                jurisdiction). If you believe a child has provided us with
                personal information, please contact us and we will promptly
                delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Data Retention
              </h2>
              <p>
                Usage and progress data is retained for as long as the app is
                installed on your device. Anonymised aggregate analytics data
                may be retained for up to 24 months to help us identify
                long-term trends and improve the product.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Data Security
              </h2>
              <p>
                We use industry-standard security practices including encrypted
                storage and secure transmission (TLS) for any data sent to our
                servers. No method of internet transmission or electronic
                storage is 100% secure, but we take reasonable steps to protect
                your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Request access to the data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict how your data is processed</li>
                <li>Data portability (EU/EEA users under GDPR)</li>
                <li>
                  Opt out of the sale of personal information (California
                  residents under CCPA — note: we do not sell personal
                  information)
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the
                details below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Material
                changes will be reflected by an updated date at the top of this
                page. Continued use of Word Versus after any changes constitutes
                your acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Contact
              </h2>
              <p>
                If you have any privacy questions or requests, please reach out:
              </p>
              <p className="mt-4 font-medium text-[#1f1635]">
                {/* TODO: Support email */}
                mrabdullahrafique@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
