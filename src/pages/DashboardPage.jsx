import { ArrowRight, BookOpenCheck, CalendarClock, CheckCircle2, Clock3, Flame, Target } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

const tasks = [
  { title: "Research methods quiz", course: "PSY 204", due: "Today, 4:00 PM", level: "High", color: "bg-coral" },
  { title: "Market analysis draft", course: "BUS 310", due: "Tomorrow", level: "Medium", color: "bg-gold" },
  { title: "Read chapters 6–7", course: "SOC 115", due: "Friday", level: "Low", color: "bg-sage-400" }
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader eyebrow="Tuesday, October 8" title="Good morning, Alex 👋" description="You have a focused day ahead. Here’s the plan we made together." />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={BookOpenCheck} label="Open assignments" value="7" detail="3 due this week" />
        <StatCard icon={Clock3} label="Study time" value="8.5h" detail="1.5h ahead of last week" color="bg-gold/30 text-amber-700" />
        <StatCard icon={Target} label="Weekly goals" value="72%" detail="5 of 7 goals complete" color="bg-coral/15 text-coral" />
        <StatCard icon={Flame} label="Focus streak" value="12 days" detail="A new personal best" color="bg-violet-100 text-violet-700" />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_.7fr]">
        <div className="page-card">
          <div className="flex items-center justify-between">
            <div><p className="text-xs font-bold uppercase tracking-widest text-sage-600">Up next</p><h2 className="mt-1 font-display text-xl font-bold">Assignment queue</h2></div>
            <Link to="/assignments" className="flex items-center gap-1 text-sm font-semibold text-sage-600">View all <ArrowRight size={15} /></Link>
          </div>
          <div className="mt-5 divide-y divide-slate-100">
            {tasks.map((task) => (
              <div key={task.title} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                <button className="grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-slate-200 hover:border-sage-400" aria-label={`Mark ${task.title} complete`} />
                <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{task.title}</p><p className="mt-1 text-xs text-slate-400">{task.course} · {task.due}</p></div>
                <span className="hidden items-center gap-1.5 text-xs font-medium text-slate-500 sm:flex"><span className={`h-2 w-2 rounded-full ${task.color}`} />{task.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="page-card bg-ink text-white">
          <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10"><CalendarClock size={21} /></span><span className="rounded-full bg-sage-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Next session</span></div>
          <p className="mt-8 text-xs uppercase tracking-widest text-white/50">Today · 2:30–3:15 PM</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Research methods review</h2>
          <p className="mt-2 text-sm leading-6 text-white/55">45 minutes · Library quiet floor</p>
          <Link to="/study-planner" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold">Open study plan <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="page-card lg:col-span-2">
          <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-sage-600">Your rhythm</p><h2 className="mt-1 font-display text-xl font-bold">Focus this week</h2></div><span className="text-xs text-slate-400">8.5 of 10 hours</span></div>
          <div className="mt-7 flex h-44 items-end justify-between gap-3">
            {[45, 68, 36, 88, 58, 76, 28].map((height, index) => (
              <div key={index} className="flex h-full flex-1 flex-col justify-end gap-2 text-center">
                <div className="relative flex-1 rounded-full bg-slate-100"><div className="absolute bottom-0 w-full rounded-full bg-sage-500 transition-all" style={{ height: `${height}%` }} /></div>
                <span className="text-[10px] font-medium text-slate-400">{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="page-card">
          <p className="text-xs font-bold uppercase tracking-widest text-sage-600">Small win</p>
          <CheckCircle2 className="mt-5 text-sage-500" size={34} />
          <h2 className="mt-4 font-display text-xl font-bold">You planned before the panic.</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">Three assignments were started more than 48 hours early this week.</p>
        </div>
      </section>
    </div>
  );
}
