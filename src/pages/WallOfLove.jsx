import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import WistiaVideo from "../components/WistiaVideo";
import { featuredLeaders, videoTestimonials } from "../data/testimonials";

export default function WallOfLove() {
  return (
    <main>
      <WallHero />
      <VideoTestimonialsSection />
      <EndorsedByGrid />
      <CTABanner />
    </main>
  );
}

function WallHero() {
  return (
    <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-14 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.1),transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
            Wall of Love
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Real Results From{" "}
            <span className="text-brand-red">Real Leaders</span>
          </h1>

          <p className="mt-6 text-lg text-brand-gray leading-relaxed max-w-xl mx-auto">
            Don&apos;t take our word for it. Hear directly from the industry
            leaders who trust Closer Secrets to build and scale their
            high-performing sales teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


function VideoTestimonialsSection() {
  return (
    <section className="pb-20 lg:pb-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoTestimonials.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className="bg-brand-charcoal border border-white/5 rounded-[var(--radius-card)] overflow-hidden hover:border-brand-red/20 transition-all duration-300"
            >
              {/* Wistia Embed */}
              <div className="aspect-video">
                <WistiaVideo videoId={video.id} className="w-full h-full" />
              </div>

              {/* Info below video */}
              <div className="p-4">
                <p className="text-white font-semibold text-sm">{video.name}</p>
                <p className="text-brand-gray-dark text-xs mt-0.5">{video.business}</p>
                <p className="text-brand-gray text-sm mt-2 italic leading-relaxed">
                  &ldquo;{video.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EndorsedByGrid() {
  return (
    <section className="py-20 lg:py-28 bg-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Endorsed By"
          title="Trusted by Industry Leaders"
          subtitle="Some of the biggest names in online business, coaching, and digital marketing."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {featuredLeaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative mb-3">
                <div className="absolute -inset-1 bg-brand-red/0 group-hover:bg-brand-red/20 rounded-full transition-all duration-300 blur-md" />
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-brand-red/30 transition-all duration-300 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <p className="text-sm font-semibold text-white">{leader.name}</p>
              <p className="text-[11px] text-brand-gray-dark leading-tight mt-0.5">{leader.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function CTABanner() {
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
            Want Results Like These?
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed mb-8 max-w-xl mx-auto">
            Join 50+ industry leaders who trust Closer Secrets to build and
            scale their elite sales teams.
          </p>
          <Link
            to="/contact#inquiry"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold px-8 py-4 rounded-[var(--radius-card)] transition-all duration-200 cursor-pointer hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] text-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-xs text-brand-gray-dark">
            No commitment. We&apos;ll reach out within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
