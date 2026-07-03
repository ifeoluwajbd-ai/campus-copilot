import { Sparkles } from "lucide-react";

export default function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`grid h-10 w-10 place-items-center rounded-2xl ${light ? "bg-white text-sage-700" : "bg-ink text-white"}`}>
        <Sparkles size={19} />
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        Campus Copilot
      </span>
    </div>
  );
}
