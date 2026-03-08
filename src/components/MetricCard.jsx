import { motion } from "framer-motion";

export default function MetricCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className="group relative bg-brand-charcoal border border-white/5 rounded-[var(--radius-card)] p-6 lg:p-8 cursor-default transition-all duration-300 hover:border-brand-red/20"
    >
      <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors duration-200">
        <Icon className="w-5 h-5 text-brand-red" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-brand-gray leading-relaxed">{description}</p>
    </motion.div>
  );
}
