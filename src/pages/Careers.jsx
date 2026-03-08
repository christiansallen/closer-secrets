import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  ArrowRight,
  Briefcase,
  DollarSign,
  GraduationCap,
  TrendingUp,
  LinkIcon,
  CheckCircle,
  Heart,
  Shield,
  Smile,
  Users,
  Star,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const benefits = [
  {
    icon: Briefcase,
    title: "Work With Industry-Leading Businesses",
    description:
      "Close deals for some of the biggest names in online education, coaching, and digital marketing.",
  },
  {
    icon: Star,
    title: "Proven Offers That Convert",
    description:
      "No cold calling or chasing bad leads. Our clients have dialed-in funnels and high-quality prospects ready to buy.",
  },
  {
    icon: GraduationCap,
    title: "World-Class Training & Support",
    description:
      "Ongoing coaching, call reviews, and mentorship from seasoned closers who've done tens of millions in sales.",
  },
  {
    icon: DollarSign,
    title: "Performance-Based Uncapped Commissions",
    description:
      "Your earning potential is limited only by your effort. Top closers consistently earn six figures and beyond.",
  },
];

const idealCandidate = [
  "You have a strong work ethic and a hunger to succeed",
  "You're coachable and eager to learn from the best",
  "You thrive in a high-performance, results-driven environment",
  "You take ownership of your pipeline and your outcomes",
  "You believe in serving prospects, not just selling to them",
  "You have excellent communication and listening skills",
];

export default function Careers() {
  return (
    <main>
      <CareersHero />
      <BenefitsSection />
      <IdealCandidateSection />
      <ApplicationSection />
    </main>
  );
}

function CareersHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-black overflow-hidden">
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
            We&apos;re Hiring
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Join an Elite Sales Team &{" "}
            <span className="text-brand-red">Elevate Your Career</span>
          </h1>

          <p className="mt-6 text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Are you a high-performing sales professional looking for the
            ultimate opportunity to grow, earn, and thrive? At Closer Secrets,
            we build and lead top-performing sales teams that consistently
            drive results.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Gratitude", "Ownership", "Attitude", "Team"].map((value) => (
              <span
                key={value}
                className="text-xs font-semibold uppercase tracking-wider bg-brand-charcoal border border-white/10 text-brand-gray px-3 py-1.5 rounded-full"
              >
                {value}
              </span>
            ))}
          </div>

          <a
            href="#apply"
            className="mt-8 inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold px-7 py-3.5 rounded-[var(--radius-card)] transition-all duration-200 cursor-pointer hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] text-base"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Join Us"
          title="What You Get at Closer Secrets"
          subtitle="We don't just offer a job — we offer a career-defining opportunity in high-ticket sales."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-brand-charcoal border border-white/5 rounded-[var(--radius-card)] p-6 lg:p-8 hover:border-brand-red/20 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <benefit.icon className="w-5 h-5 text-brand-red" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IdealCandidateSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              badge="Who We're Looking For"
              title="Do You Have the Drive to Win?"
              subtitle="If you have the discipline, mindset, and hunger to succeed in high-ticket sales, we want to hear from you."
              align="left"
            />

            <div className="space-y-4">
              {idealCandidate.map((trait, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {trait}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-red/10 via-brand-charcoal to-brand-charcoal border border-brand-red/10 rounded-2xl p-8 lg:p-10"
          >
            <h3 className="font-heading font-bold text-2xl text-white mb-6">
              Our G.O.A.T. Ethos
            </h3>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Our success is built on the foundation of G.O.A.T. — every team
              member embodies these values daily.
            </p>
            <div className="space-y-4">
              {[
                { icon: Heart, label: "Gratitude", color: "text-pink-400" },
                { icon: Shield, label: "Ownership", color: "text-blue-400" },
                { icon: Smile, label: "Attitude", color: "text-yellow-400" },
                { icon: Users, label: "Team", color: "text-brand-emerald" },
              ].map((value) => (
                <div
                  key={value.label}
                  className="flex items-center gap-3 bg-brand-black/30 border border-white/5 rounded-[var(--radius-card)] px-4 py-3"
                >
                  <value.icon className={`w-5 h-5 ${value.color}`} />
                  <span className="text-sm font-semibold text-white">
                    {value.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || "";

function ApplicationSection() {
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
      message: form.experience.value,
      resumeLink: form.resumeLink.value,
      source: "Careers",
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
    <section
      id="apply"
      className="py-20 lg:py-28 bg-brand-charcoal/30 scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Apply Now"
          title="Take the Next Step"
          subtitle="Fill out the form below to start your journey with Closer Secrets."
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-charcoal border border-brand-emerald/20 rounded-2xl p-8 lg:p-12 text-center"
          >
            <CheckCircle className="w-12 h-12 text-brand-emerald mx-auto mb-4" />
            <h3 className="font-heading font-bold text-2xl text-white mb-2">
              Application Received
            </h3>
            <p className="text-brand-gray">
              Thank you for your interest in Closer Secrets. Our team will
              review your application and reach out soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-brand-charcoal border border-white/5 rounded-2xl p-6 lg:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-[var(--radius-card)] px-4 py-3 text-white text-sm placeholder-brand-gray-dark focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-brand-gray mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-[var(--radius-card)] px-4 py-3 text-white text-sm placeholder-brand-gray-dark focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-gray mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-brand-black border border-white/10 rounded-[var(--radius-card)] px-4 py-3 text-white text-sm placeholder-brand-gray-dark focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-brand-gray mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full bg-brand-black border border-white/10 rounded-[var(--radius-card)] px-4 py-3 text-white text-sm placeholder-brand-gray-dark focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-brand-gray mb-2"
              >
                Sales Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                rows={4}
                className="w-full bg-brand-black border border-white/10 rounded-[var(--radius-card)] px-4 py-3 text-white text-sm placeholder-brand-gray-dark focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-colors resize-none"
                placeholder="Tell us about your sales background, experience closing high-ticket offers, and why you want to join Closer Secrets..."
              />
            </div>

            <div>
              <label
                htmlFor="resumeLink"
                className="block text-sm font-medium text-brand-gray mb-2"
              >
                Resume Link
              </label>
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-dark" />
                <input
                  type="url"
                  id="resumeLink"
                  name="resumeLink"
                  className="w-full bg-brand-black border border-white/10 rounded-[var(--radius-card)] pl-10 pr-4 py-3 text-white text-sm placeholder-brand-gray-dark focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/50 transition-colors"
                  placeholder="Google Drive, Dropbox, or LinkedIn URL"
                />
              </div>
              <p className="text-xs text-brand-gray-dark mt-1.5">
                Paste a link to your resume or LinkedIn profile
              </p>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                className="mt-1 w-4 h-4 accent-brand-red cursor-pointer"
              />
              <label
                htmlFor="consent"
                className="text-xs text-brand-gray-dark leading-relaxed cursor-pointer"
              >
                I consent to receive SMS notifications, alerts & occasional
                marketing communication from Closer Secrets. Message frequency
                varies. Message & data rates may apply. Reply STOP to
                unsubscribe at any time.
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-red hover:bg-brand-red-light text-white font-semibold py-3.5 rounded-[var(--radius-card)] transition-all duration-200 cursor-pointer hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
