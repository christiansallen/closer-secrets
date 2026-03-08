import { motion } from "framer-motion";
import { videoTestimonials } from "../data/testimonials";
import { Quote } from "lucide-react";

function MarqueeColumn({ testimonials, duration = 20, reverse = false }) {
  return (
    <div className="flex flex-col overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] h-[600px]">
      <motion.div
        animate={{ translateY: reverse ? "0%" : "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="bg-brand-charcoal border border-white/5 rounded-[var(--radius-card)] p-5 max-w-xs hover:border-brand-red/20 transition-colors duration-200"
          >
            <p className="text-[10px] text-brand-red font-semibold uppercase tracking-wider mb-2">
              {t.business}
            </p>
            <Quote className="w-4 h-4 text-brand-red/30 mb-2" />
            <p className="text-sm text-brand-gray leading-relaxed mb-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-xs font-semibold text-white">{t.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialMarquee() {
  const col1 = videoTestimonials.slice(0, 4);
  const col2 = videoTestimonials.slice(4, 8);
  const col3 = videoTestimonials.slice(8, 12);

  return (
    <div className="flex justify-center gap-4 overflow-hidden">
      <MarqueeColumn testimonials={col1} duration={25} />
      <MarqueeColumn testimonials={col2} duration={30} reverse />
      <div className="hidden lg:block">
        <MarqueeColumn testimonials={col3} duration={22} />
      </div>
    </div>
  );
}
