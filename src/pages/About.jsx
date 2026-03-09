import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Smile,
  Users,
  ArrowRight,
  Linkedin,
  Award,
  Building,
  GraduationCap,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const team = [
  {
    name: "Randall Grizzle",
    role: "Founder & CEO",
    image: "/team/randall-grizzle.jpg",
    imagePosition: "center 20%",
    bio: "A dynamic leader from Idaho with 20+ years in high-ticket sales, having personally closed tens of millions of dollars for some of the world's top marketers. His journey began part-time during construction work's slow season before fully transitioning to sales. He founded Closer Secrets to connect business owners with elite sales professionals, operating by the G.O.A.T. mindset. Additionally an author, speaker, and course creator, Randall prioritizes meaningful relationships and offering solutions that genuinely improve people's lives.",
    highlights: ["20+ Years Experience", "Author & Speaker"],
  },
  {
    name: "Deborah Burris",
    role: "Managing Partner",
    image: "/team/deborah-burris.jpg",
    imagePosition: "center 25%",
    bio: "Over 30 years of professional sales, team leadership, and strategic consulting experience. She spent six years in pharmaceutical industry roles, including positions with organizations acquired by Pfizer. Since joining Closer Secrets in 2017, she's led over 100 high-performing sales professionals generating over $60 million in annual revenue. Co-author of The Ultimate Playbook for High Performing Sales Teams and a frequent speaker at industry events. Holds a Bachelor's in Economics from BYU, an MBA, and professional certifications in sales training and leadership coaching.",
    highlights: ["$60M Annual Revenue", "BYU / MBA"],
  },
  {
    name: "Valerie Grizzle",
    role: "Chief Financial Officer",
    image: "/team/valerie-grizzle.jpg",
    bio: "A problem-solver and former Micron Corporation contributor who developed the original Closer Secrets Lead Tracker System — the first of its kind to give closers a simple way to make notes, resolve leads and have visibility to commissions. The system enables real-time business profitability analysis. Known for strong work ethic and attention to detail. Former Boise State University basketball player.",
    highlights: ["Lead Tracker Creator", "Micron Corporation"],
  },
  {
    name: "Val Ledezma",
    role: "Director of Compliance",
    image: "/team/val-ledezma.jpg",
    imagePosition: "center top",
    bio: "With over five years in the industry, trained by a top attorney in the field. Audits calls for accuracy across the sales floor, ensuring communication upholds the highest standards of integrity and precision. Committed to staying current with FTC developments and regulatory compliance through continuous education on current cases.",
    highlights: ["FTC Compliance", "5+ Years Industry"],
  },
  {
    name: "Pamela Noriega",
    role: "Head of Administration",
    image: "/team/pamela-noriega.jpg",
    bio: "Oversees internal operations and administrative processes, ensuring smooth day-to-day company functioning. Her meticulous attention to detail and proactive approach enable the team to focus on client success. Expertise includes schedule management, workflow optimization, and implementing operational best practices.",
    highlights: ["Operations Leadership"],
  },
  {
    name: "Marysol Cecena",
    role: "Administrative Assistant",
    image: "/team/marysol-cecena.jpg",
    bio: "Brings 11 years in administration within sales, covering roles in customer service, contracts, project direction, loan verification, and audits. Skilled in creating and analyzing corporate reports and tracking KPIs. Naturally curious with a focus on professional and personal growth, she provides operational support to streamline sales operations.",
    highlights: ["11 Years Experience", "KPI Analytics"],
  },
];

const goatValues = [
  {
    letter: "G",
    word: "Gratitude",
    icon: Heart,
    description:
      "Every conversation, every deal, and every success is an opportunity to serve and uplift others.",
  },
  {
    letter: "O",
    word: "Ownership",
    icon: Shield,
    description:
      "We take full accountability for our results. From every call to every close, we don't make excuses — we make solutions.",
  },
  {
    letter: "A",
    word: "Attitude",
    icon: Smile,
    description:
      "A winning mindset fuels winning sales. We foster resilience, positivity, and a relentless drive to elevate our teams.",
  },
  {
    letter: "T",
    word: "Team",
    icon: Users,
    description:
      "Success is built together. We cultivate collaboration, mentorship, and excellence across every level.",
  },
];

export default function About() {
  return (
    <main>
      <AboutHero />
      <GOATSection />
      <TeamSection />
      <AboutCTA />
    </main>
  );
}

function AboutHero() {
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
            About Us
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            Driven by Integrity.{" "}
            <span className="text-brand-red">Built for Success.</span>
          </h1>

          <p className="mt-6 text-lg text-brand-gray leading-relaxed max-w-xl mx-auto">
            At Closer Secrets, we believe in more than just sales — we believe
            in trust, transparency, and transforming businesses.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-brand-charcoal to-brand-charcoal-light border border-white/5 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "50+", label: "Years Combined Experience" },
              { value: "$150M+", label: "Revenue Generated" },
              { value: "200+", label: "Sales Professionals Managed" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-bold text-3xl text-brand-emerald">
                  {stat.value}
                </p>
                <p className="text-sm text-brand-gray mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GOATSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Values"
          title="The Closer Secrets Way — G.O.A.T. Ethos"
          subtitle="Closer Secrets isn't just a sales organization — it's a movement. We lead with integrity, operate with excellence, and build sales teams that create real impact."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goatValues.map((value, i) => (
            <motion.div
              key={value.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-brand-charcoal border border-white/5 rounded-[var(--radius-card)] p-6 lg:p-8 cursor-default hover:border-brand-red/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading font-bold text-4xl text-brand-red">
                  {value.letter}
                </span>
                <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                  <value.icon className="w-5 h-5 text-brand-red" />
                </div>
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">
                {value.word}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Leadership"
          title="Meet the Team Behind the Results"
          subtitle="Our leadership team brings decades of experience in high-ticket sales, operations, and business scaling."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-brand-charcoal border border-white/5 rounded-[var(--radius-card)] overflow-hidden hover:border-brand-red/20 transition-all duration-300 cursor-default"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  style={{ objectPosition: member.imagePosition || "center top" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-brand-red font-medium mt-0.5">
                  {member.role}
                </p>
                <p className="text-sm text-brand-gray leading-relaxed mt-3">
                  {member.bio}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {member.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[10px] font-semibold uppercase tracking-wider bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 px-2.5 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="py-20 lg:py-28 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
            Ready to Scale With a{" "}
            <span className="text-brand-red">High-Performing Sales Team?</span>
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us about your business and discover how our proven systems can
            transform your sales operation.
          </p>
          <Link
            to="/contact#inquiry"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold px-8 py-4 rounded-[var(--radius-card)] transition-all duration-200 cursor-pointer hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] text-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
