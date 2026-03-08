import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      className="group relative bg-brand-charcoal border border-white/5 rounded-[var(--radius-card)] p-6 lg:p-8 cursor-default transition-all duration-300 hover:border-brand-red/20 hover:shadow-[0_0_30px_rgba(220,38,38,0.05)]"
    >
      {/* Metric Badge */}
      {testimonial.metric && (
        <div className="inline-flex items-center gap-1.5 bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full" />
          {testimonial.metric}
        </div>
      )}

      {/* Quote Icon */}
      <Quote className="w-5 h-5 text-brand-red/40 mb-3" />

      {/* Quote Text */}
      <blockquote className="text-sm lg:text-base text-brand-gray leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-brand-red/30 transition-all duration-300"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-brand-gray-dark">{testimonial.title}</p>
        </div>
      </div>
    </motion.div>
  );
}
