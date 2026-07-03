import { NavLink } from "react-router-dom";
import { BookOpenCheck, BrainCircuit, BriefcaseBusiness, CalendarDays, ChevronRight, LayoutDashboard, LogOut, UserRound } from "lucide-react";
import Logo from "./Logo";

const navigation = [
  { label: "Overview", to: "/dashboard", icon: LayoutDashboard },
  { label: "Assignments", to: "/assignments", icon: BookOpenCheck },
  { label: "Study planner", to: "/study-planner", icon: CalendarDays },
  { label: "Career lab", to: "/career-pathway", icon: BriefcaseBusiness },
  { label: "Burnout center", to: "/burnout-center", icon: BrainCircuit, badge: "AI" },
  { label: "Profile", to: "/profile", icon: UserRound }
];

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-[268px] flex-col border-r border-slate-200/80 bg-white p-5 text-slate-950 transition-transform duration-300 dark:border-white/[0.07] dark:bg-[#0d1016] dark:text-white lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="px-2 py-1"><Logo /></div>
      <p className="mb-3 mt-10 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-600">Workspace</p>
      <nav className="space-y-1" aria-label="Main navigation">
        {navigation.map(({ label, to, icon: Icon, badge }) => (
          <NavLink key={to} to={to} onClick={onClose} className={({ isActive }) => `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition ${isActive ? "bg-slate-950 text-white shadow-md shadow-slate-950/10 dark:bg-white dark:text-slate-950" : "text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-white"}`}>
            <Icon size={17} /><span className="flex-1">{label}</span>{badge && <span className="rounded-md bg-brand-500/15 px-1.5 py-0.5 text-[9px] font-extrabold text-brand-500">{badge}</span>}
          </NavLink>
        ))}
      </nav>
      <div className="relative mt-auto overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 p-5 text-white shadow-glow">
        <div className="absolute -right-7 -top-7 h-24 w-24 rounded-full border border-white/20" />
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Semester pulse</p>
        <div className="mt-3 flex items-end justify-between"><span className="font-display text-2xl font-extrabold">72%</span><span className="text-[10px] text-white/60">On track</span></div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/15"><div className="h-full w-[72%] rounded-full bg-white" /></div>
        <NavLink to="/burnout-center" className="mt-4 flex items-center gap-1 text-[11px] font-bold">View wellness report <ChevronRight size={13} /></NavLink>
      </div>
      <NavLink to="/" className="mt-3 flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-white"><LogOut size={16} /> Back to website</NavLink>
    </aside>
  );
}
