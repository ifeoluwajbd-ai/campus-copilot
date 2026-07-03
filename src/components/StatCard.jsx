import { ArrowUpRight } from "lucide-react";

export default function StatCard({ icon: Icon, label, value, detail, color = "bg-sage-100 text-sage-700" }) {
  return (
    <div className="page-card">
      <div className="flex items-start justify-between">
        <span className={`grid h-11 w-11 place-items-center rounded-2xl ${color}`}><Icon size={20} /></span>
        <ArrowUpRight size={18} className="text-slate-300" />
      </div>
      <p className="mt-5 text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-display text-3xl font-extrabold">{value}</p>
      <p className="mt-2 text-xs text-slate-400">{detail}</p>
    </div>
  );
}
