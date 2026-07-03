import { ChevronLeft, ChevronRight, Clock3, MapPin, Plus, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";

const days = [
  { name: "Mon", date: "7", sessions: [{ time: "10:00", title: "Market analysis", course: "BUS 310", color: "bg-gold/30 border-amber-300" }] },
  { name: "Tue", date: "8", today: true, sessions: [{ time: "2:30", title: "Research review", course: "PSY 204", color: "bg-sage-100 border-sage-300" }, { time: "5:00", title: "Stats practice", course: "MAT 208", color: "bg-violet-100 border-violet-300" }] },
  { name: "Wed", date: "9", sessions: [{ time: "11:00", title: "Draft workshop", course: "BUS 310", color: "bg-gold/30 border-amber-300" }] },
  { name: "Thu", date: "10", sessions: [{ time: "3:00", title: "Field notes", course: "SOC 115", color: "bg-coral/10 border-coral/40" }] },
  { name: "Fri", date: "11", sessions: [{ time: "9:30", title: "Weekly review", course: "Planning", color: "bg-sky-100 border-sky-300" }] },
  { name: "Sat", date: "12", sessions: [] },
  { name: "Sun", date: "13", sessions: [{ time: "4:00", title: "Plan next week", course: "Planning", color: "bg-sky-100 border-sky-300" }] }
];

export default function StudyPlannerPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader eyebrow="Plan with intention" title="Study planner" description="Shape your week around focused work, rest, and the life happening in between." action={<button className="primary-button"><Plus size={18} /> New session</button>} />

      <section className="mb-6 grid gap-4 md:grid-cols-[1fr_auto]">
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <button className="rounded-xl p-2 hover:bg-slate-50" aria-label="Previous week"><ChevronLeft size={19} /></button>
          <div className="text-center"><p className="font-display text-sm font-bold">October 7–13, 2026</p><p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-400">Midterm season</p></div>
          <button className="rounded-xl p-2 hover:bg-slate-50" aria-label="Next week"><ChevronRight size={19} /></button>
        </div>
        <button className="secondary-button !rounded-2xl">Jump to today</button>
      </section>

      <section className="page-card overflow-x-auto !p-3 md:!p-5">
        <div className="grid min-w-[900px] grid-cols-7 gap-3">
          {days.map((day) => (
            <div key={day.name} className={`min-h-[420px] rounded-2xl p-3 ${day.today ? "bg-sage-50 ring-1 ring-sage-200" : "bg-slate-50/70"}`}>
              <div className="flex items-center justify-between"><span className={`text-xs font-bold ${day.today ? "text-sage-700" : "text-slate-400"}`}>{day.name}</span><span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${day.today ? "bg-sage-600 text-white" : "bg-white"}`}>{day.date}</span></div>
              <div className="mt-5 space-y-3">
                {day.sessions.map((session) => (
                  <article key={session.title} className={`rounded-xl border-l-[3px] p-3 ${session.color}`}>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{session.time}</p>
                    <p className="mt-2 text-xs font-bold leading-4">{session.title}</p>
                    <p className="mt-1 text-[10px] text-slate-500">{session.course}</p>
                  </article>
                ))}
                {day.sessions.length === 0 && <button className="flex w-full items-center justify-center gap-1 rounded-xl border border-dashed border-slate-200 py-3 text-[10px] font-medium text-slate-400"><Plus size={13} /> Add focus time</button>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
        <div className="page-card bg-ink text-white">
          <Sparkles className="text-gold" size={24} />
          <h2 className="mt-5 font-display text-xl font-bold">Copilot suggestion</h2>
          <p className="mt-2 text-sm leading-6 text-white/55">Your Tuesday is full. Move the stats session to Wednesday at 3:30 PM for a better energy match.</p>
          <button className="mt-5 text-sm font-bold text-gold">Apply suggestion →</button>
        </div>
        <div className="page-card">
          <p className="text-xs font-bold uppercase tracking-widest text-sage-600">Today’s focus</p>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div><h2 className="font-display text-xl font-bold">Research methods review</h2><div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-400"><span className="flex items-center gap-1.5"><Clock3 size={14} /> 45 minutes</span><span className="flex items-center gap-1.5"><MapPin size={14} /> Library quiet floor</span></div></div>
            <button className="primary-button">Start focus session</button>
          </div>
        </div>
      </section>
    </div>
  );
}
