import Navbar from "../components/navbar/Navbar";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FEFBF7] min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-24">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-gray-500 mt-4 mb-20">
            Last updated: June 7, 2026
          </p>

          <div className="space-y-20 text-gray-700 leading-[1.9]">

            <section>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Overview
              </h2>
              <p>
                Tiny Harvest respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services. By using our platform, you agree to this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Information We Collect
              </h2>
              <p>
                We collect information that you provide directly such as your name, email address, and contact details. We also collect usage data including pages visited, actions taken, device information, and browser type to improve user experience and platform performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-6">
                How We Use Information
              </h2>
              <p>
                We use your information to operate and improve our services, respond to user requests, provide support, analyze platform usage, and enhance security. We may also use data to send important updates and service notifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Cookies
              </h2>
              <p>
                Cookies help us understand how users interact with our platform. They allow us to improve functionality and personalize your experience. You can disable cookies in your browser settings, but some features may stop working properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Data Security
              </h2>
              <p>
                We implement industry-standard security practices to protect your data. However, no method of online transmission or storage is completely secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Third-Party Services
              </h2>
              <p>
                We may use third-party tools for analytics, hosting, and performance monitoring. These services only access the minimum data required and are not allowed to misuse it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Your Rights
              </h2>
              <p>
                You have the right to access, update, or delete your personal data depending on your region. You may also request restrictions on how your data is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Changes
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted here with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-6">
                Contact
              </h2>
              <p>
                If you have any questions, you can contact us at:
              </p>

              <p className="mt-6 font-medium text-black">
                hello@tinyharvest.com
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}