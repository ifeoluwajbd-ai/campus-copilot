import BrandMark from "./BrandMark";

export default function Logo({ light = false, compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <BrandMark className="h-9 w-9 drop-shadow-[0_8px_18px_rgba(99,102,241,0.28)]" />
      {!compact && <span className={`font-display text-[17px] font-extrabold tracking-[-0.035em] ${light ? "text-white" : "text-slate-950 dark:text-white"}`}>Campus Copilot</span>}
    </div>
  );
}
