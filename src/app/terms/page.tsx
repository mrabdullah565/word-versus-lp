import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import FooterSection from "../components/FooterSection";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FEFBF7] min-h-screen">
        <div className="tiny-container py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1f1635]">
            Terms of Use
          </h1>

          <p className="text-gray-400 mt-4 mb-20 text-sm">
            Last updated: June 22, 2026
          </p>

          <div className="space-y-16 text-gray-600 leading-[1.9] max-w-2xl">
            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using the Word Versus mobile app
                or this website, you agree to be bound by these Terms of Use and
                our{" "}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-[#1f1635] transition-colors">
                  Privacy Policy
                </Link>
                . If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Description of Service
              </h2>
              <p>
                Word Versus is a vocabulary learning app that teaches the subtle
                differences between similar-looking words. The app provides
                quizzes, definitions, example sentences, and progress tracking
                to help you choose the right word every time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Eligibility
              </h2>
              <p>
                Word Versus is available to users of all ages. Users under the
                age of 13 must have verifiable parental consent before using the
                app. By using Word Versus, you represent that you meet these
                eligibility requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Account &amp; Access
              </h2>
              <p>
                Word Versus does not currently require an account to use core
                features. If account functionality is introduced in the future,
                you will be responsible for maintaining the confidentiality of
                your credentials and for all activity under your account. You
                agree to notify us immediately of any unauthorised use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                In-App Purchases &amp; Subscriptions
              </h2>
              <p className="mb-4">
                Word Versus may offer optional in-app purchases or subscriptions
                to unlock premium content. By making a purchase you agree to the
                following:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  All purchases are processed by Apple App Store or Google Play
                  and are subject to their respective payment terms.
                </li>
                <li>
                  Subscription fees are billed in advance on a recurring basis
                  and will auto-renew unless cancelled at least 24 hours before
                  the end of the current period.
                </li>
                <li>
                  You may manage or cancel your subscription at any time through
                  your App Store or Google Play account settings.
                </li>
                <li>
                  Refunds are handled in accordance with the policies of the
                  relevant app store. We do not issue refunds directly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Acceptable Use
              </h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Reverse engineer, decompile, or disassemble any part of the
                  app
                </li>
                <li>
                  Use the app for any unlawful purpose or in violation of any
                  applicable laws or regulations
                </li>
                <li>
                  Attempt to gain unauthorised access to any part of our systems
                  or infrastructure
                </li>
                <li>
                  Reproduce, redistribute, or resell any content from the app
                  without our express written permission
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the
                  app
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Intellectual Property
              </h2>
              <p>
                All content within Word Versus — including but not limited to
                word definitions, example sentences, quiz content, graphics, UI
                design, and the Word Versus name and logo — is owned by or
                licensed to us and is protected by copyright and other
                intellectual property laws. You are granted a limited,
                non-exclusive, non-transferable licence to use the app for
                personal, non-commercial purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Disclaimer of Warranties
              </h2>
              <p>
                Word Versus is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express
                or implied. We do not warrant that the app will be
                uninterrupted, error-free, or free of viruses or other harmful
                components. Your use of the app is at your sole risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, we shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages arising from your use of, or inability to
                use, Word Versus — even if we have been advised of the
                possibility of such damages. Our total liability for any claim
                arising from these Terms shall not exceed the amount you paid us
                in the twelve months preceding the claim, or £10 GBP, whichever
                is greater.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Third-Party Links &amp; Services
              </h2>
              <p>
                The app or website may contain links to third-party websites or
                services. We are not responsible for the content, privacy
                practices, or terms of any third-party services. Access to those
                services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your access to Word
                Versus at any time, with or without notice, if we believe you
                have violated these Terms or if required by law. You may stop
                using the app at any time by uninstalling it from your device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of England and Wales, without regard to its conflict of law
                provisions. Any disputes arising under these Terms shall be
                subject to the exclusive jurisdiction of the courts of England
                and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. Material changes
                will be reflected by an updated date at the top of this page.
                Continued use of Word Versus after changes are posted
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#1f1635] mb-4">
                Contact
              </h2>
              <p>
                If you have any questions about these Terms, please contact us:
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
