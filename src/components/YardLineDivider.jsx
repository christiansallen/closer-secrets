export default function YardLineDivider() {
  return (
    <div className="relative py-1">
      {/* Center hash line */}
      <div className="border-t border-dashed border-white/10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />
      {/* Side hash marks */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 flex gap-3">
        <div className="w-3 h-px bg-white/10" />
        <div className="w-3 h-px bg-white/10" />
      </div>
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 flex gap-3">
        <div className="w-3 h-px bg-white/10" />
        <div className="w-3 h-px bg-white/10" />
      </div>
    </div>
  );
}
