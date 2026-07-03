import { AlertTriangle, ArrowRight, BookOpenCheck, BrainCircuit, CalendarClock, CheckCircle2, ChevronRight, CircleGauge, Clock3, Flame, GraduationCap, MoreHorizontal, Sparkles, Target, TrendingUp, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

const deadlines = [
  { title: "Research methods quiz", course: "PSY 204", time: "Today · 4:00 PM", priority: "High", progress: 75, color: "bg-rose-500" },
  { title: "Market analysis draft", course: "BUS 310", time: "Tomorrow · 11:59 PM", priority: "Medium", progress: 42, color: "bg-amber-400" },
  { title: "Field notes reflection", course: "SOC 115", time: "Friday · 5:00 PM", priority: "Low", progress: 20, color: "bg-cyan-500" },
  { title: "Portfolio case study", course: "DES 220", time: "Monday · 9:00 AM", priority: "High", progress: 10, color: "bg-violet-500" }
];

const week = [
  { day: "M", hours: 1.2 }, { day: "T", hours: 2.1 }, { day: "W", hours: 0.8 }, { day: "T", hours: 2.6 }, { day: "F", hours: 1.4 }, { day: "S", hours: 0.4 }, { day: "S", hours: 0 }
];

function RingMetric({ value, label, color = "text-brand-500" }) {
  return <div className={`relative grid h-24 w-24 place-items-center rounded-full ${color}`} style={{ background: `conic-gradient(currentColor ${value * 3.6}deg, rgba(148,163,184,.16) 0)` }}><div className="grid h-[76px] w-[76px] place-items-center rounded-full bg-white text-center text-slate-950 dark:bg-[#11141b] dark:text-white"><div><p className="font-display text-xl font-extrabold">{value}</p><p className="text-[9px] uppercase tracking-wider text-slate-400">{label}</p></div></div></div>;
}

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <PageHeader eyebrow="Tuesday, October 8 · Week 7" title="Good morning, Alex." description="Your semester is moving well. One deadline needs attention, and your wellness signals are steady." action={<button className="secondary-button"><Sparkles size={16} className="text-brand-500" /> Ask Copilot</button>} />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard icon={GraduationCap} label="Current GPA" value="3.78" detail="Target: 3.80 this term" trend="0.12" />
        <StatCard icon={Target} label="Weekly study goal" value="8.5 / 10h" detail="1.5 hours remaining" color="bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400" />
        <StatCard icon={CircleGauge} label="Productivity score" value="84 / 100" detail="Excellent focus quality" trend="7%" color="bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400" />
        <StatCard icon={Flame} label="Study streak" value="12 days" detail="Personal best: 16 days" color="bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400" />
        <StatCard icon={BrainCircuit} label="Burnout indicator" value="Low · 24%" detail="Stable over 7 days" color="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" />
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
        <div className="page-card !p-0">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 dark:border-white/[0.07] md:px-6"><div><p className="eyebrow">Priority queue</p><h2 className="mt-1 font-display text-lg font-bold">Upcoming deadlines</h2></div><Link to="/assignments" className="flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-brand-400">View all <ArrowRight size={14} /></Link></div>
          <div className="divide-y divide-slate-100 dark:divide-white/[0.07]">{deadlines.map((task) => <div key={task.title} className="group grid items-center gap-4 px-5 py-4 transition hover:bg-slate-50/70 dark:hover:bg-white/[0.02] sm:grid-cols-[8px_1fr_130px_80px_30px] md:px-6"><span className={`h-8 w-1.5 rounded-full ${task.color}`} /><div><p className="text-[13px] font-semibold">{task.title}</p><p className="mt-1 text-[10px] text-slate-400">{task.course} · {task.time}</p></div><div><div className="mb-1.5 flex justify-between text-[9px] text-slate-400"><span>Progress</span><span>{task.progress}%</span></div><div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/[0.07]"><div className={`h-full rounded-full ${task.color}`} style={{ width: `${task.progress}%` }} /></div></div><span className={`w-fit rounded-lg px-2 py-1 text-[9px] font-bold ${task.priority === "High" ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400" : task.priority === "Medium" ? "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400" : "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400"}`}>{task.priority}</span><button className="text-slate-300 dark:text-slate-600"><MoreHorizontal size={17} /></button></div>)}</div>
        </div>

        <div className="space-y-5">
          <div className="page-card relative overflow-hidden bg-slate-950 text-white dark:bg-gradient-to-br dark:from-brand-700 dark:to-violet-800">
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-500/25 blur-2xl" />
            <div className="relative flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-widest text-white/45">Semester progress</p><p className="mt-2 font-display text-3xl font-extrabold">Week 7 of 15</p></div><RingMetric value={47} label="complete" color="text-brand-400" /></div>
            <div className="relative mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[47%] rounded-full bg-gradient-to-r from-brand-400 to-cyan-400" /></div><div className="relative mt-3 flex justify-between text-[9px] text-white/40"><span>Aug 26</span><span>Finals · Dec 13</span></div>
          </div>
          <Link to="/burnout-center" className="page-card group flex items-center gap-4 hover:border-emerald-200 dark:hover:border-emerald-500/20"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"><BrainCircuit size={21} /></span><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="text-sm font-bold">Wellness check</p><span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">LOW RISK</span></div><p className="mt-1 text-[10px] leading-4 text-slate-400">Sleep improved 8% this week</p></div><ChevronRight size={17} className="text-slate-300 transition group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <section className="mt-5 grid gap-5 xl:grid-cols-[1fr_.7fr_.65fr]">
        <div className="page-card">
          <div className="flex items-start justify-between"><div><p className="eyebrow">Weekly study goals</p><h2 className="mt-1 font-display text-lg font-bold">Focus hours</h2></div><span className="rounded-lg bg-brand-50 px-2.5 py-1.5 text-[10px] font-bold text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">85% complete</span></div>
          <div className="mt-7 flex h-40 items-end gap-3">{week.map((item, index) => <div key={index} className="flex h-full flex-1 flex-col justify-end gap-2"><div className="relative flex-1 overflow-hidden rounded-lg bg-slate-100 dark:bg-white/[0.05]"><div className="absolute bottom-0 w-full rounded-lg bg-gradient-to-t from-brand-600 to-brand-400 transition-all" style={{ height: `${(item.hours / 3) * 100}%` }} /></div><div className="text-center"><p className="text-[9px] font-semibold text-slate-400">{item.day}</p><p className="mt-0.5 text-[9px] font-bold">{item.hours || "—"}</p></div></div>)}</div>
        </div>

        <div className="page-card">
          <div className="flex items-start justify-between"><div><p className="eyebrow">Performance</p><h2 className="mt-1 font-display text-lg font-bold">GPA tracker</h2></div><TrendingUp className="text-emerald-500" size={20} /></div>
          <div className="mt-7 flex items-center gap-5"><RingMetric value={95} label="target" color="text-brand-500" /><div><p className="font-display text-3xl font-extrabold">3.78</p><p className="mt-1 text-[10px] text-slate-400">Cumulative GPA</p><p className="mt-3 flex items-center gap-1 text-[10px] font-bold text-emerald-500"><TrendingUp size={12} /> +0.12 this year</p></div></div>
          <div className="mt-5 grid grid-cols-3 gap-2">{[{ course: "PSY", grade: "A" }, { course: "BUS", grade: "A-" }, { course: "SOC", grade: "B+" }].map((item) => <div key={item.course} className="rounded-xl bg-slate-50 p-2.5 text-center dark:bg-white/[0.04]"><p className="text-[9px] text-slate-400">{item.course}</p><p className="mt-1 text-sm font-bold">{item.grade}</p></div>)}</div>
        </div>

        <div className="page-card bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/[0.08] dark:to-orange-500/[0.04]">
          <div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400 text-slate-950"><Trophy size={18} /></span><span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">WEEKLY WIN</span></div><h2 className="mt-5 font-display text-lg font-bold">You started early.</h2><p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">Three assignments were opened more than 48 hours before their deadlines.</p><div className="mt-5 flex items-center gap-2 text-[10px] font-bold text-amber-700 dark:text-amber-400"><CheckCircle2 size={14} /> Better than 82% of your weeks</div>
        </div>
      </section>

      <section className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="page-card flex items-center justify-between gap-5"><div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"><CalendarClock size={21} /></span><div><p className="text-sm font-bold">Next study session</p><p className="mt-1 text-[10px] text-slate-400">Research methods · Today at 2:30 PM · 45 min</p></div></div><button className="secondary-button !px-3 !py-2 text-xs">Start</button></div>
        <div className="page-card flex items-center justify-between gap-5"><div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-50 text-rose-500 dark:bg-rose-500/10 dark:text-rose-400"><AlertTriangle size={21} /></span><div><p className="text-sm font-bold">Deadline watch</p><p className="mt-1 text-[10px] text-slate-400">Your PSY 204 quiz is due in 4 hours</p></div></div><Link to="/assignments" className="secondary-button !px-3 !py-2 text-xs">Review</Link></div>
      </section>
    </div>
  );
}
