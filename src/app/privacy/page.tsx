import Navbar from "../components/navbar/Navbar";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-24">
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-500 mb-14">
            Last updated: June 7, 2026
          </p>

          <div className="space-y-14 text-gray-700 leading-8">

            {/* 1 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Overview
              </h2>
              <p>
                Tiny Harvest is committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website, services, and related features. By using our platform, you agree to the practices described in this policy.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p>
                We collect different types of information to improve our services and provide a better user experience. This may include personal information such as your name, email address, and contact details when you sign up or contact us. We may also collect non-personal data such as browser type, device information, pages visited, and usage behavior on our website.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p>
                The information we collect is used to operate, maintain, and improve our services. This includes providing customer support, responding to inquiries, improving website performance, analyzing user behavior, and developing new features. We may also use your information to send important updates, notifications, or service-related messages.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to enhance user experience and understand how our platform is being used. Cookies help us remember your preferences, analyze traffic patterns, and improve overall functionality. You can disable cookies through your browser settings, but some features of the website may not function properly.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Data Protection and Security
              </h2>
              <p>
                We take appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Third-Party Services
              </h2>
              <p>
                We may use third-party services for analytics, hosting, or other operational purposes. These third-party providers may have access to certain data only to perform tasks on our behalf and are obligated not to disclose or use it for other purposes.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Your Rights
              </h2>
              <p>
                Depending on your location, you may have rights regarding your personal data, including the right to access, update, or delete your information. You may also request restrictions on how your data is processed or withdraw consent where applicable.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically to stay informed about how we protect your information.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or how your data is handled, you can contact us at:
              </p>

              <p className="mt-4 font-medium text-black">
                hello@tinyharvest.com
              </p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}