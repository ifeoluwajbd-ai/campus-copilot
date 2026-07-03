import { ChevronLeft, ChevronRight, Clock3, MapPin, Plus, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";

const days = [
  { name: "Mon", date: "7", sessions: [{ time: "10:00", title: "Market analysis", course: "BUS 310", color: "bg-amber-50 border-amber-400 dark:bg-amber-500/10" }] },
  { name: "Tue", date: "8", today: true, sessions: [{ time: "2:30", title: "Research review", course: "PSY 204", color: "bg-brand-50 border-brand-500 dark:bg-brand-500/10" }, { time: "5:00", title: "Stats practice", course: "MAT 208", color: "bg-violet-50 border-violet-400 dark:bg-violet-500/10" }] },
  { name: "Wed", date: "9", sessions: [{ time: "11:00", title: "Draft workshop", course: "BUS 310", color: "bg-amber-50 border-amber-400 dark:bg-amber-500/10" }] },
  { name: "Thu", date: "10", sessions: [{ time: "3:00", title: "Field notes", course: "SOC 115", color: "bg-rose-50 border-rose-400 dark:bg-rose-500/10" }] },
  { name: "Fri", date: "11", sessions: [{ time: "9:30", title: "Weekly review", course: "Planning", color: "bg-cyan-50 border-cyan-400 dark:bg-cyan-500/10" }] },
  { name: "Sat", date: "12", sessions: [] },
  { name: "Sun", date: "13", sessions: [{ time: "4:00", title: "Plan next week", course: "Planning", color: "bg-cyan-50 border-cyan-400 dark:bg-cyan-500/10" }] }
];

export default function StudyPlannerPage() {
  return (
    <div className="mx-auto max-w-[1380px]">
      <PageHeader eyebrow="Plan with intention" title="Study planner" description="Shape your week around focused work, rest, and the life happening in between." action={<button className="primary-button"><Plus size={17} /> New session</button>} />
      <section className="mb-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.05]"><button className="rounded-xl p-2 hover:bg-slate-50 dark:hover:bg-white/[0.05]" aria-label="Previous week"><ChevronLeft size={18} /></button><div className="text-center"><p className="font-display text-sm font-bold">October 7–13, 2026</p><p className="mt-0.5 text-[9px] uppercase tracking-wider text-slate-400">Midterm season</p></div><button className="rounded-xl p-2 hover:bg-slate-50 dark:hover:bg-white/[0.05]" aria-label="Next week"><ChevronRight size={18} /></button></div>
        <button className="secondary-button">Jump to today</button>
      </section>
      <section className="page-card overflow-x-auto !p-3 md:!p-5"><div className="grid min-w-[900px] grid-cols-7 gap-3">{days.map((day) => <div key={day.name} className={`min-h-[420px] rounded-2xl p-3 ${day.today ? "bg-brand-50 ring-1 ring-brand-200 dark:bg-brand-500/[0.08] dark:ring-brand-500/20" : "bg-slate-50/70 dark:bg-white/[0.025]"}`}><div className="flex items-center justify-between"><span className={`text-[11px] font-bold ${day.today ? "text-brand-700 dark:text-brand-400" : "text-slate-400"}`}>{day.name}</span><span className={`grid h-8 w-8 place-items-center rounded-xl text-xs font-bold ${day.today ? "bg-brand-600 text-white" : "bg-white shadow-sm dark:bg-white/[0.07]"}`}>{day.date}</span></div><div className="mt-5 space-y-3">{day.sessions.map((session) => <article key={session.title} className={`rounded-xl border-l-[3px] p-3 ${session.color}`}><p className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{session.time}</p><p className="mt-2 text-[11px] font-bold leading-4">{session.title}</p><p className="mt-1 text-[9px] text-slate-400">{session.course}</p></article>)}{day.sessions.length === 0 && <button className="flex w-full items-center justify-center gap-1 rounded-xl border border-dashed border-slate-200 py-3 text-[9px] font-medium text-slate-400 dark:border-white/10"><Plus size={12} /> Add focus time</button>}</div></div>)}</div></section>
      <section className="mt-5 grid gap-5 lg:grid-cols-[.7fr_1.3fr]"><div className="page-card bg-gradient-to-br from-brand-600 to-violet-700 text-white"><Sparkles className="text-amber-300" size={22} /><h2 className="mt-5 font-display text-lg font-bold">Copilot suggestion</h2><p className="mt-2 text-xs leading-5 text-white/60">Tuesday is dense. Move statistics practice to Wednesday at 3:30 PM for a better energy match.</p><button className="mt-5 text-xs font-bold text-amber-300">Apply suggestion →</button></div><div className="page-card"><p className="eyebrow">Today’s focus</p><div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><h2 className="font-display text-lg font-bold">Research methods review</h2><div className="mt-2 flex flex-wrap gap-4 text-[10px] text-slate-400"><span className="flex items-center gap-1.5"><Clock3 size={13} /> 45 minutes</span><span className="flex items-center gap-1.5"><MapPin size={13} /> Library quiet floor</span></div></div><button className="primary-button">Start focus session</button></div></div></section>
    </div>
  );
}
