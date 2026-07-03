import { ArrowUpRight } from "lucide-react";

export default function StatCard({ icon: Icon, label, value, detail, trend, color = "bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400" }) {
  return (
    <article className="page-card group relative overflow-hidden">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/[0.04] transition duration-500 group-hover:scale-150" />
      <div className="relative flex items-start justify-between">
        <span className={`grid h-10 w-10 place-items-center rounded-xl ${color}`}><Icon size={18} /></span>
        {trend && <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"><ArrowUpRight size={11} />{trend}</span>}
      </div>
      <p className="metric-label relative mt-5">{label}</p>
      <p className="relative mt-1 font-display text-2xl font-extrabold tracking-tight">{value}</p>
      <p className="relative mt-2 text-[11px] text-slate-400 dark:text-slate-500">{detail}</p>
    </article>
  );
}
