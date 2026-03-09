import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Terms() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-brand-gray-dark mb-12">
            Last updated: March 8, 2026
          </p>

          <div className="space-y-10 text-brand-gray text-sm leading-relaxed">
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing or using the Closer Secrets website
                (closersecrets.com) and services, you agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do
                not use our website or services.
              </p>
            </Section>

            <Section title="2. Description of Services">
              <p>
                Closer Secrets provides sales team recruitment, training,
                coaching, and management services for businesses in the
                high-ticket space. Our website provides information about our
                services, client testimonials, career opportunities, and a means
                to contact us.
              </p>
            </Section>

            <Section title="3. Eligibility">
              <p>
                You must be at least 18 years of age to use our website and
                services. By using our website, you represent and warrant that
                you meet this requirement.
              </p>
            </Section>

            <Section title="4. User Submissions">
              <p className="mb-3">
                When you submit information through our forms (business
                inquiries, career applications, or contact forms), you agree
                that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All information you provide is accurate, current, and complete</li>
                <li>You have the authority to provide such information</li>
                <li>Your submission does not violate any applicable law or regulation</li>
                <li>
                  We may use the information in accordance with our{" "}
                  <Link
                    to="/privacy"
                    className="text-brand-red hover:text-brand-red-light transition-colors underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </Section>

            <Section title="5. SMS Communications">
              <p>
                By opting in to SMS communications, you consent to receive text
                messages from Closer Secrets including notifications, alerts, and
                occasional marketing communications. Message frequency varies.
                Message and data rates may apply. You may opt out at any time by
                replying STOP. This consent is not a condition of purchase or
                service.
              </p>
            </Section>

            <Section title="6. Intellectual Property">
              <p>
                All content on this website — including text, graphics, logos,
                images, videos, and software — is the property of Closer Secrets
                or its content suppliers and is protected by United States and
                international copyright laws. You may not reproduce, distribute,
                modify, or create derivative works from any content without our
                express written permission.
              </p>
            </Section>

            <Section title="7. Testimonials & Results">
              <p>
                Testimonials and case studies displayed on our website represent
                the experiences of specific clients. Results vary and are not
                guaranteed. Past performance does not guarantee future results.
                Individual outcomes depend on many factors including but not
                limited to business model, market conditions, and implementation.
              </p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, Closer Secrets shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages arising out of or related to your use of our
                website or services. Our total liability shall not exceed the
                amount you have paid us in the twelve (12) months preceding the
                claim.
              </p>
            </Section>

            <Section title="9. Disclaimer of Warranties">
              <p>
                Our website and services are provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express or
                implied. We do not warrant that our website will be
                uninterrupted, error-free, or free of viruses or other harmful
                components.
              </p>
            </Section>

            <Section title="10. Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless Closer Secrets,
                its officers, directors, employees, and agents from and against
                any claims, liabilities, damages, losses, and expenses arising
                out of or in any way connected with your use of our website or
                violation of these Terms.
              </p>
            </Section>

            <Section title="11. Third-Party Links">
              <p>
                Our website may contain links to third-party websites or
                services. We do not control and are not responsible for the
                content, privacy policies, or practices of any third-party sites.
                Use of third-party sites is at your own risk.
              </p>
            </Section>

            <Section title="12. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with
                the laws of the State of Florida, without regard to its conflict
                of law provisions. Any disputes arising under these Terms shall
                be resolved in the state or federal courts located in Florida.
              </p>
            </Section>

            <Section title="13. Changes to These Terms">
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be posted on this page with an updated &quot;Last updated&quot; date.
                Your continued use of our website after changes constitutes
                acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="14. Severability">
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the
                minimum extent necessary, and the remaining provisions shall
                remain in full force and effect.
              </p>
            </Section>

            <Section title="15. Contact Us">
              <p>
                If you have questions about these Terms of Service, please{" "}
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
