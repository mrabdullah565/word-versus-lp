import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import FooterSection from "../components/FooterSection";

const SUPPORT_EMAIL = "abdullahrafique@gmail.com";

export default function SupportPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FEFBF7] min-h-screen">
        <div className="tiny-container py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1f1635]">
            Support
          </h1>

          <p className="text-gray-400 mt-4 mb-20 text-sm">
            We&apos;re here to help you get the most out of Word Versus.
          </p>

          <div className="space-y-16 text-gray-600 leading-[1.9] max-w-2xl">
            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Contact Us
              </h2>
              <p>
                Have a question, found a bug, or want to suggest a word pair?
                Email us and we&apos;ll get back to you, usually within 1–2
                business days.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="mt-4 inline-block font-medium text-[#1f1635] underline underline-offset-2 hover:text-gray-800 transition-colors"
              >
                {SUPPORT_EMAIL}
              </a>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Before You Contact Us
              </h2>
              <p className="mb-4">
                Most issues can be fixed quickly with one of these steps:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Make sure you&apos;re running the latest version of Word
                  Versus from the App Store or Google Play.
                </li>
                <li>Restart the app, or restart your device.</li>
                <li>Check that you have an active internet connection.</li>
                <li>
                  If the app won&apos;t open at all, try uninstalling and
                  reinstalling it — your progress is stored on your device, so
                  please email us first if you&apos;re worried about losing
                  data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Is Word Versus free to use?
                  </h3>
                  <p>
                    Yes — Word Versus is completely free right now. We&apos;re
                    not offering any in-app purchases or subscriptions while
                    we validate the product with early users.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    I found a bug. How do I report it?
                  </h3>
                  <p>
                    Email us at{" "}
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="underline underline-offset-2 hover:text-gray-800 transition-colors"
                    >
                      {SUPPORT_EMAIL}
                    </a>{" "}
                    with a description of what happened, your device model,
                    and OS version. Screenshots or screen recordings help a
                    lot.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Can I suggest a word pair or new feature?
                  </h3>
                  <p>
                    Absolutely — we love hearing which tricky words you&apos;d
                    like to see covered next. Send your ideas to the email
                    above.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    How do I delete my data?
                  </h3>
                  <p>
                    Word Versus doesn&apos;t require an account, so your
                    progress lives on your device and is removed when you
                    uninstall the app. If we hold any other data tied to you,
                    email us and we&apos;ll delete it promptly. See our{" "}
                    <Link
                      href="/privacy"
                      className="underline underline-offset-2 hover:text-gray-800 transition-colors"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for details.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    Which platforms is Word Versus available on?
                  </h3>
                  <p>iOS and Android, via the App Store and Google Play.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Still Need Help?
              </h2>
              <p>
                If your question wasn&apos;t answered above, reach out at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-medium text-[#1f1635] underline underline-offset-2 hover:text-gray-800 transition-colors"
                >
                  {SUPPORT_EMAIL}
                </a>{" "}
                and we&apos;ll be happy to help.
              </p>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
