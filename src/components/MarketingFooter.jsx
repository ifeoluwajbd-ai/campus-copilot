import { ArrowUpRight, Code2, Heart, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const groups = [
  { title: "Platform", links: [{ label: "Dashboard", to: "/dashboard" }, { label: "Study planner", to: "/study-planner" }, { label: "Career Lab", to: "/career-pathway" }, { label: "Burnout Center", to: "/burnout-center" }] },
  { title: "Company", links: [{ label: "About", to: "/about" }, { label: "Contact", to: "/contact" }, { label: "Student stories", to: "/#stories" }] },
  { title: "Legal", links: [{ label: "Privacy policy", to: "/privacy" }, { label: "Terms of service", to: "/terms" }] }
];

export default function MarketingFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-slate-50 dark:border-white/[0.07] dark:bg-[#0b0d12]">
      <div className="pointer-events-none absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-brand-500/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 md:px-8">
        <div className="grid gap-12 border-b border-slate-200/70 pb-14 dark:border-white/[0.07] lg:grid-cols-[1.25fr_1.75fr]">
          <div><Logo /><p className="mt-5 max-w-sm text-xs leading-6 text-slate-500 dark:text-slate-400">The intelligent workspace helping students plan with clarity, protect their wellbeing, and build a future they are excited about.</p><div className="mt-6 flex gap-2"><a href="mailto:hello@campuscopilot.app" className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-400 transition hover:-translate-y-0.5 hover:text-brand-500 dark:border-white/10 dark:bg-white/[0.05]" aria-label="Email Campus Copilot"><Mail size={15} /></a><a href="https://github.com/ifeoluwajbd-ai/campus-copilot" className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-400 transition hover:-translate-y-0.5 hover:text-brand-500 dark:border-white/10 dark:bg-white/[0.05]" aria-label="Campus Copilot source code"><Code2 size={15} /></a><span className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-400 dark:border-white/10 dark:bg-white/[0.05]" aria-label="Student community"><Users size={15} /></span></div></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">{groups.map((group) => <div key={group.title}><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{group.title}</p><div className="mt-5 space-y-3">{group.links.map((link) => <Link key={link.label} to={link.to} className="group flex w-fit items-center gap-1 text-xs font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white">{link.label}<ArrowUpRight size={11} className="opacity-0 transition group-hover:opacity-100" /></Link>)}</div></div>)}</div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-[10px] text-slate-400 sm:flex-row"><p>© 2026 Campus Copilot, Inc. All rights reserved.</p><p className="flex items-center gap-1.5">Designed with <Heart size={11} className="text-rose-400" fill="currentColor" /> for ambitious students everywhere.</p><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> All systems operational</span></div>
      </div>
    </footer>
  );
}
