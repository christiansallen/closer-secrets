import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <main>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.05),transparent_50%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-brand-gray-dark mb-12">
            Last updated: March 8, 2026
          </p>

          <div className="space-y-10 text-brand-gray text-sm leading-relaxed">
            <Section title="1. Introduction">
              <p>
                Closer Secrets (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy
                and is committed to protecting the personal information you share
                with us. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website closersecrets.com and use our services.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p className="mb-3">We collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Personal Information:</strong>{" "}
                  Name, email address, phone number, company name, website URL,
                  and other details you provide through our contact and
                  application forms.
                </li>
                <li>
                  <strong className="text-white">Business Information:</strong>{" "}
                  Monthly revenue range, product/service type, and sales team
                  requirements submitted through our business inquiry form.
                </li>
                <li>
                  <strong className="text-white">Career Information:</strong>{" "}
                  Sales experience, resume links, and related professional
                  details submitted through our careers application.
                </li>
                <li>
                  <strong className="text-white">Usage Data:</strong>{" "}
                  Browser type, IP address, pages visited, time spent on pages,
                  and other diagnostic data collected automatically.
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to your inquiries and process your applications</li>
                <li>Schedule strategy calls and consultations</li>
                <li>Evaluate your business needs and determine fit for our services</li>
                <li>Send SMS notifications, alerts, and occasional marketing communications (with your consent)</li>
                <li>Improve our website, services, and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Section>

            <Section title="4. SMS Communications">
              <p>
                By providing your phone number and consenting to SMS
                communications, you agree to receive text messages from Closer
                Secrets. Message frequency varies. Message and data rates may
                apply. You may opt out at any time by replying STOP to any
                message. Reply HELP for assistance.
              </p>
            </Section>

            <Section title="5. Information Sharing">
              <p className="mb-3">
                We do not sell, rent, or trade your personal information. We may
                share your information with:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Service Providers:</strong>{" "}
                  Third-party tools we use to operate our business (e.g., Google
                  Sheets for form storage, scheduling platforms).
                </li>
                <li>
                  <strong className="text-white">Legal Requirements:</strong>{" "}
                  When required by law, regulation, or legal process.
                </li>
                <li>
                  <strong className="text-white">Business Transfers:</strong>{" "}
                  In connection with a merger, acquisition, or sale of assets.
                </li>
              </ul>
            </Section>

            <Section title="6. Data Storage & Security">
              <p>
                Your information is stored securely using industry-standard
                practices. Form submissions are stored in secured Google
                Workspace infrastructure. While we implement reasonable security
                measures, no method of electronic storage is 100% secure.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Withdraw consent for SMS communications by replying STOP</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at the information
                provided below.
              </p>
            </Section>

            <Section title="8. Third-Party Links">
              <p>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these external sites and encourage you to review their privacy
                policies.
              </p>
            </Section>

            <Section title="9. Children&rsquo;s Privacy">
              <p>
                Our services are not directed to individuals under the age of 18.
                We do not knowingly collect personal information from children.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Changes will
                be posted on this page with an updated &quot;Last updated&quot; date. Your
                continued use of our website after changes constitutes acceptance
                of the updated policy.
              </p>
            </Section>

            <Section title="11. Contact Us">
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your data rights, please{" "}
                <Link
                  to="/contact"
                  className="text-brand-red hover:text-brand-red-light transition-colors underline underline-offset-2"
                >
                  contact us
                </Link>
                .
              </p>
            </Section>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-heading font-semibold text-lg text-white mb-3">
        {title}
      </h2>
      {children}
    </div>
  );
}
