import { NavLink } from "react-router-dom";
import { BarChart3, BookOpenCheck, BriefcaseBusiness, CalendarDays, LayoutDashboard, LogOut, UserRound } from "lucide-react";
import Logo from "./Logo";

const navigation = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Assignments", to: "/assignments", icon: BookOpenCheck },
  { label: "Study planner", to: "/study-planner", icon: CalendarDays },
  { label: "Career pathway", to: "/career-pathway", icon: BriefcaseBusiness },
  { label: "Profile", to: "/profile", icon: UserRound }
];

export default function Sidebar({ open, onClose }) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-ink p-6 text-white transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <Logo light />

      <nav className="mt-10 space-y-2" aria-label="Main navigation">
        {navigation.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-white text-ink" : "text-white/65 hover:bg-white/10 hover:text-white"}`}
          >
            <Icon size={19} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-3xl bg-sage-600 p-5">
        <BarChart3 size={24} className="text-sage-100" />
        <p className="mt-4 font-display text-sm font-bold">Semester pulse</p>
        <p className="mt-1 text-xs leading-5 text-sage-100">You’re 72% through your weekly goals. Keep the rhythm going.</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[72%] rounded-full bg-white" />
        </div>
      </div>

      <NavLink to="/" className="mt-4 flex items-center gap-3 px-4 py-3 text-sm text-white/60 hover:text-white">
        <LogOut size={18} /> Back to home
      </NavLink>
    </aside>
  );
}
