import { motion } from "framer-motion";

export default function SectionHeading({ badge, title, subtitle, align = "center" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${alignment} max-w-2xl ${align === "center" ? "mx-auto" : ""} mb-12 lg:mb-16`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base lg:text-lg text-brand-gray leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
