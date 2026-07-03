import { Sparkles } from "lucide-react";

export default function Logo({ light = false, compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl ${light ? "bg-white text-slate-950" : "bg-slate-950 text-white dark:bg-white dark:text-slate-950"}`}>
        <span className="absolute inset-0 bg-gradient-to-br from-brand-400/50 to-transparent" />
        <Sparkles size={17} className="relative" />
      </span>
      {!compact && <span className={`font-display text-[17px] font-extrabold tracking-[-0.03em] ${light ? "text-white" : "text-slate-950 dark:text-white"}`}>Campus Copilot</span>}
    </div>
  );
}
