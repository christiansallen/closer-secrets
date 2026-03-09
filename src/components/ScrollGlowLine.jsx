import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollGlowLine() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });
  const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <div className="fixed left-6 top-0 bottom-0 z-[60] pointer-events-none hidden md:block">
      {/* Track rail */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />

      {/* 1-yard ticks every 1% */}
      {Array.from({ length: 99 }, (_, i) => i + 1).map((pct) => {
        const isTen = pct % 10 === 0;
        const isFifty = pct === 50;
        return (
          <div
            key={pct}
            className="absolute flex items-center"
            style={{ top: `${pct}%`, left: "-2px" }}
          >
            <div
              className={`h-px ${
                isFifty
                  ? "w-5 bg-white/25"
                  : isTen
                    ? "w-3 bg-white/15"
                    : "w-1.5 bg-white/[0.07]"
              }`}
            />
            {isTen && (
              <span className="text-[8px] text-white/20 ml-1.5 font-mono leading-none select-none">
                {pct <= 50 ? pct : 100 - pct}
              </span>
            )}
          </div>
        );
      })}

      {/* Progress line */}
      <motion.div
        className="absolute left-0 top-0 w-px origin-top"
        style={{
          height,
          opacity: glowOpacity,
          background:
            "linear-gradient(to bottom, #22C55E, #16A34A 40%, #FFFFFF 50%, #16A34A 60%, #22C55E)",
          boxShadow:
            "0 0 8px rgba(34,197,94,0.6), 0 0 20px rgba(34,197,94,0.3)",
        }}
      />

      {/* Glow dot */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
        style={{
          top: height,
          opacity: glowOpacity,
          backgroundColor: "#FFFFFF",
          boxShadow:
            "0 0 8px rgba(255,255,255,0.8), 0 0 24px rgba(255,255,255,0.5), 0 0 48px rgba(255,255,255,0.2)",
        }}
      />
    </div>
  );
}
