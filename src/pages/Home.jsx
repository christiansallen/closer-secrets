import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Award,
  ChevronRight,
  Play,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialMarquee from "../components/TestimonialMarquee";
import MetricCard from "../components/MetricCard";
import SectionHeading from "../components/SectionHeading";
import WistiaVideo from "../components/WistiaVideo";
import { featuredLeaders, videoTestimonials } from "../data/testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <BentoTestimonials />
      <TransformationSection />
      <WallOfLovePreview />
      <CTASection />
    </main>
  );
}

function BlurRevealText({ text, className = "", delay = 0 }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 8 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black to-brand-charcoal" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Aurora glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="aurora-blob-1 absolute -top-48 -left-48 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(220,38,38,0.18) 0%, rgba(220,38,38,0.06) 35%, transparent 65%)",
          }}
        />
        <div
          className="aurora-blob-2 absolute -top-32 -right-56 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,68,68,0.12) 0%, rgba(220,38,38,0.04) 35%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
              Trusted by 50+ Industry Leaders
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.1]">
              <BlurRevealText text="Build" delay={0.3} />
              <motion.span
                initial={{ opacity: 0, filter: "blur(12px)", y: 8 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-brand-red"
              >
                High-Performing&nbsp;
              </motion.span>
              <BlurRevealText text="Sales Teams That Scale" delay={0.46} />
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-brand-gray leading-relaxed max-w-lg">
              Years of experience, proven systems, and a commitment to
              excellence. We transform businesses by building high-impact sales
              departments.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/contact#inquiry"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold px-7 py-3.5 rounded-[var(--radius-card)] transition-all duration-200 cursor-pointer hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] text-base"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 text-brand-gray hover:text-white font-medium transition-colors duration-200 cursor-pointer text-base"
              >
                See Our Results
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="mt-4 text-sm text-brand-gray-dark">
              Want to join as a closer?{" "}
              <Link to="/careers" className="text-brand-red hover:text-brand-red-light transition-colors underline underline-offset-2">
                Apply here
              </Link>
            </p>

            {/* Mini social proof */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {featuredLeaders.slice(0, 4).map((leader) => (
                  <img
                    key={leader.name}
                    src={leader.image}
                    alt={leader.name}
                    className="w-8 h-8 rounded-full border-2 border-brand-black object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <p className="text-xs text-brand-gray">
                <span className="text-white font-semibold">Russell Brunson, Dean Graziosi</span>{" "}
                & 50+ leaders trust us
              </p>
            </div>
          </motion.div>

          {/* Right: Wistia Sales Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-brand-red/5 rounded-3xl blur-2xl" />

            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-red/5">
              <div className="aspect-video">
                <WistiaVideo videoId="cb1jgf8n4m" className="w-full h-full" />
              </div>
            </div>

            {/* Metric cards below video */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-3 mt-4"
            >
              <div className="bg-brand-charcoal border border-white/10 rounded-[var(--radius-card)] px-4 py-3 flex-1">
                <p className="text-brand-emerald font-heading font-bold text-lg">$150M+</p>
                <p className="text-[10px] text-brand-gray-dark uppercase tracking-wider">Revenue Generated</p>
              </div>
              <div className="bg-brand-charcoal border border-white/10 rounded-[var(--radius-card)] px-4 py-3 flex-1">
                <p className="text-brand-emerald font-heading font-bold text-lg">24/7</p>
                <p className="text-[10px] text-brand-gray-dark uppercase tracking-wider">Live Analytics & Reporting</p>
              </div>
              <div className="bg-brand-charcoal border border-white/10 rounded-[var(--radius-card)] px-4 py-3 flex-1">
                <p className="text-brand-emerald font-heading font-bold text-lg">200+</p>
                <p className="text-[10px] text-brand-gray-dark uppercase tracking-wider">Closers Placed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function TrustedBySection() {
  return (
    <section className="py-16 lg:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-brand-gray-dark font-medium mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {featuredLeaders.slice(0, 7).map((leader) => (
            <div key={leader.name} className="flex items-center gap-2.5 opacity-40 hover:opacity-80 transition-opacity duration-300">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-8 h-8 rounded-full object-cover grayscale"
                loading="lazy"
              />
              <span className="text-sm text-brand-gray font-medium whitespace-nowrap">
                {leader.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "Recruit the Best Players",
      description:
        "Our rigorous recruitment process sources, vets, and places top-tier sales talent that aligns with your brand and goals.",
    },
    {
      icon: Target,
      title: "Coach for Success",
      description:
        "Ongoing coaching and training programs ensure your team is continuously improving and staying ahead of the competition.",
    },
    {
      icon: TrendingUp,
      title: "Drive Performance",
      description:
        "Advanced performance tracking and management systems deliver sustained results and measurable ROI.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Do"
          title="Accelerate Your Sales Team's Performance"
          subtitle="Partner with industry experts to design, build, and scale your high-performing sales department."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <MetricCard key={service.title} {...service} index={i} />
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-brand-charcoal to-brand-charcoal-light border border-white/5 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight mb-4">
                We Don&apos;t Just Build Sales Teams &mdash;{" "}
                <span className="text-brand-red">We Create the Foundation for Sustained Success</span>
              </h3>
              <p className="text-brand-gray leading-relaxed">
                With decades of experience in the high-ticket space, we expertly
                manage recruitment, training, and development of elite sales
                professionals. Our proven systems have generated over $150M in
                revenue for our clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Vetted Closers", value: "200+" },
                { icon: Zap, label: "Avg Ramp Time", value: "14 days" },
                { icon: BarChart3, label: "Close Rate", value: "34%" },
                { icon: Award, label: "Live Reporting", value: "24/7" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-brand-black/50 border border-white/5 rounded-[var(--radius-card)] p-4 text-center"
                >
                  <item.icon className="w-5 h-5 text-brand-red mx-auto mb-2" />
                  <p className="font-heading font-bold text-lg text-brand-emerald">
                    {item.value}
                  </p>
                  <p className="text-[10px] text-brand-gray-dark uppercase tracking-wider mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BentoTestimonials() {
  const featured = featuredLeaders.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Social Proof"
          title="High-Performing Sales Teams Delivering Results"
          subtitle="See what industry leaders say about working with Closer Secrets."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Featured large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-brand-red/10 via-brand-charcoal to-brand-charcoal border border-brand-red/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full" />
                {featured[0].metric}
              </div>
              <blockquote className="text-xl lg:text-2xl text-white font-medium leading-relaxed mb-6 max-w-lg">
                &ldquo;{featured[0].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src={featured[0].image}
                  alt={featured[0].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-red/30"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-white">{featured[0].name}</p>
                  <p className="text-sm text-brand-gray">{featured[0].title}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side cards */}
          {featured.slice(1, 3).map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}

          {/* Bottom row */}
          {featured.slice(3, 6).map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i + 2} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red-light font-semibold transition-colors duration-200 cursor-pointer"
          >
            View All Testimonials
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              badge="The Process"
              title="From Hiring Headaches to a Scalable Sales Machine"
              subtitle="Most businesses struggle with inconsistent sales. We fix that with a proven 3-step system."
              align="left"
            />

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  desc: "We analyze your offer, market, and goals to design the perfect sales team structure.",
                },
                {
                  step: "02",
                  title: "Recruit & Deploy",
                  desc: "Our network of vetted closers means we can staff your team in as little as 14 days.",
                },
                {
                  step: "03",
                  title: "Train & Scale",
                  desc: "Ongoing coaching, performance tracking, and optimization to continuously grow revenue.",
                },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4"
                >
                  <span className="font-heading font-bold text-2xl text-brand-red/30 shrink-0 w-10">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side: scrolling testimonials */}
          <div className="hidden lg:block">
            <TestimonialMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}

function WallOfLovePreview() {
  return (
    <section className="py-20 lg:py-28 bg-brand-charcoal/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Wall of Love"
          title="Hear It Directly From Our Clients"
          subtitle="Real video testimonials from industry leaders who've transformed their sales operations with us."
        />

        {/* Video Testimonial Grid — first 6 with real Wistia embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoTestimonials.slice(0, 6).map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-charcoal border border-white/5 rounded-[var(--radius-card)] overflow-hidden hover:border-brand-red/20 transition-all duration-300"
            >
              <div className="aspect-video">
                <WistiaVideo videoId={video.id} className="w-full h-full" />
              </div>
              <div className="p-3">
                <p className="text-white font-semibold text-sm">{video.name}</p>
                <p className="text-brand-gray-dark text-xs">{video.business}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-3 rounded-[var(--radius-card)] transition-all duration-200 cursor-pointer"
          >
            See All Video Testimonials
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
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
            Ready to Build Your{" "}
            <span className="text-brand-red">Elite Sales Team?</span>
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us about your business and discover how we can help you
            recruit, train, and scale a world-class sales department.
          </p>
          <Link
            to="/contact#inquiry"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold px-8 py-4 rounded-[var(--radius-card)] transition-all duration-200 cursor-pointer hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] text-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-xs text-brand-gray-dark">
            No commitment required. We&apos;ll reach out within 24 hours.
          </p>
          <p className="mt-3 text-sm text-brand-gray-dark">
            Looking to join as a sales rep?{" "}
            <Link to="/careers" className="text-brand-red hover:text-brand-red-light transition-colors underline underline-offset-2">
              Apply to our team
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
