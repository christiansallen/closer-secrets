import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle,
  Send,
  Building2,
  Globe,
  DollarSign,
  Users,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const contactMethods = [
  {
    icon: Building2,
    title: "Business Inquiry",
    description: "Tell us about your business and we'll reach out to schedule a strategy call.",
    action: "Fill Out the Form Below",
    href: "#inquiry",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message and we'll respond within 24 hours.",
    action: "info@closersecrets.com",
    href: "mailto:info@closersecrets.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Monday - Friday, 9:00 AM - 6:00 PM EST. We're always here for our clients.",
    action: null,
    href: null,
  },
];

export default function Contact() {
  return (
    <main>
      <ContactHero />
      <ContactMethodsSection />
      <ContactFormSection />
    </main>
  );
}

function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.08),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
            Contact Us
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Let&apos;s Connect and{" "}
            <span className="text-brand-red">Scale Your Sales Success</span>
          </h1>

          <p className="mt-6 text-lg text-brand-gray leading-relaxed max-w-xl mx-auto">
            At Closer Secrets, we&apos;re here to help you build and manage a
            high-performing sales team that drives real results. Whether you
            have questions, need more information, or are ready to take the
            next step, we&apos;d love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactMethodsSection() {
  return (
    <section className="py-16 lg:py-20 bg-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-brand-charcoal border border-white/5 rounded-[var(--radius-card)] p-6 lg:p-8 hover:border-brand-red/20 transition-all duration-300 cursor-default text-center"
            >
              <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors">
                <method.icon className="w-6 h-6 text-brand-red" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">
                {method.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed mb-4">
                {method.description}
              </p>
              {method.href && (
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-sm text-brand-red hover:text-brand-red-light font-medium transition-colors cursor-pointer"
                >
                  {method.action}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || "";

const inputClass =
  "w-full bg-brand-black border border-white/10 rounded-[var(--radius-card)] px-4 py-3.5 text-white text-sm placeholder-brand-gray-dark focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-colors";

const selectClass =
  "w-full bg-brand-black border border-white/10 rounded-[var(--radius-card)] px-4 py-3.5 text-white text-sm focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-colors appearance-none cursor-pointer";

function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target;
    const data = {
      name: `${form.firstName.value} ${form.lastName.value}`,
      email: form.email.value,
      phone: form.phone.value,
      companyName: form.companyName.value,
      websiteUrl: form.websiteUrl.value,
      whatDoYouSell: form.whatDoYouSell.value,
      monthlyRevenue: form.monthlyRevenue.value,
      repsNeeded: form.repsNeeded.value,
      message: form.message.value,
      source: "Business Inquiry",
    };

    try {
      if (APPS_SCRIPT_URL) {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-brand-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <SectionHeading
              badge="For Businesses"
              title="Tell Us About Your Business"
              subtitle="Fill out the form and our team will review your info and reach out to schedule a strategy call."
              align="left"
            />

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">
                    We Review Every Submission
                  </h4>
                  <p className="text-sm text-brand-gray mt-1">
                    Our team personally reviews each inquiry and responds within
                    24 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">
                    What Happens Next?
                  </h4>
                  <p className="text-sm text-brand-gray mt-1">
                    If we&apos;re a good fit, we&apos;ll send you a link to book
                    a free strategy call with our team.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">
                    Looking to Join as a Closer?
                  </h4>
                  <p className="text-sm text-brand-gray mt-1">
                    <Link
                      to="/careers"
                      className="text-brand-red hover:text-brand-red-light transition-colors underline underline-offset-2"
                    >
                      Apply on our Careers page
                    </Link>{" "}
                    instead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Business Inquiry Form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-charcoal border border-brand-emerald/20 rounded-2xl p-8 lg:p-12 text-center"
              >
                <CheckCircle className="w-12 h-12 text-brand-emerald mx-auto mb-4" />
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  Inquiry Received
                </h3>
                <p className="text-brand-gray">
                  Thank you! Our team will review your info and reach out within
                  24 hours to schedule a strategy call.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="bg-brand-charcoal border border-white/5 rounded-2xl p-6 lg:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contactFirstName" className="block text-sm font-medium text-brand-gray mb-2">
                      First Name
                    </label>
                    <input type="text" id="contactFirstName" name="firstName" required className={inputClass} placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="contactLastName" className="block text-sm font-medium text-brand-gray mb-2">
                      Last Name
                    </label>
                    <input type="text" id="contactLastName" name="lastName" required className={inputClass} placeholder="Doe" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-brand-gray mb-2">
                      Email
                    </label>
                    <input type="email" id="contactEmail" name="email" required className={inputClass} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-brand-gray mb-2">
                      Phone
                    </label>
                    <input type="tel" id="contactPhone" name="phone" required className={inputClass} placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-brand-gray mb-2">
                      Company Name
                    </label>
                    <input type="text" id="companyName" name="companyName" required className={inputClass} placeholder="Acme Inc." />
                  </div>
                  <div>
                    <label htmlFor="websiteUrl" className="block text-sm font-medium text-brand-gray mb-2">
                      Website URL
                    </label>
                    <input type="url" id="websiteUrl" name="websiteUrl" className={inputClass} placeholder="https://example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="whatDoYouSell" className="block text-sm font-medium text-brand-gray mb-2">
                    What Do You Sell?
                  </label>
                  <select id="whatDoYouSell" name="whatDoYouSell" required className={selectClass} defaultValue="">
                    <option value="" disabled>Select one...</option>
                    <option value="Coaching/Consulting">Coaching / Consulting</option>
                    <option value="Online Course">Online Course</option>
                    <option value="SaaS">SaaS</option>
                    <option value="Agency">Agency</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-brand-gray mb-2">
                      Monthly Revenue
                    </label>
                    <select id="monthlyRevenue" name="monthlyRevenue" required className={selectClass} defaultValue="">
                      <option value="" disabled>Select range...</option>
                      <option value="Under $50K">Under $50K</option>
                      <option value="$50K - $100K">$50K - $100K</option>
                      <option value="$100K - $500K">$100K - $500K</option>
                      <option value="$500K - $1M">$500K - $1M</option>
                      <option value="$1M+">$1M+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="repsNeeded" className="block text-sm font-medium text-brand-gray mb-2">
                      How Many Sales Reps Do You Need?
                    </label>
                    <select id="repsNeeded" name="repsNeeded" required className={selectClass} defaultValue="">
                      <option value="" disabled>Select...</option>
                      <option value="1-2">1 - 2</option>
                      <option value="3-5">3 - 5</option>
                      <option value="6-10">6 - 10</option>
                      <option value="10+">10+</option>
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-sm font-medium text-brand-gray mb-2">
                    Anything Else We Should Know?
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your current sales setup, challenges, goals..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="contactConsent" name="consent" required className="mt-1 w-4 h-4 accent-brand-red cursor-pointer" />
                  <label htmlFor="contactConsent" className="text-xs text-brand-gray-dark leading-relaxed cursor-pointer">
                    I consent to receive SMS notifications, alerts & occasional
                    marketing communication from Closer Secrets. Message
                    frequency varies. Message & data rates may apply. Reply STOP
                    to unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold py-3.5 rounded-[var(--radius-card)] transition-all duration-200 cursor-pointer hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? "Submitting..." : "Submit Inquiry"}
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
