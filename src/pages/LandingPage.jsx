import { ArrowRight, BarChart3, BookOpenCheck, BrainCircuit, BriefcaseBusiness, CalendarDays, Check, ChevronRight, Clock3, GraduationCap, Play, Quote, ShieldCheck, Sparkles, Star, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import MarketingFooter from "../components/MarketingFooter";
import MarketingHeader from "../components/MarketingHeader";

const features = [
  { icon: BookOpenCheck, title: "Academic command center", text: "See every deadline, course, and commitment in one calm, prioritized workspace.", color: "from-brand-500 to-indigo-600" },
  { icon: CalendarDays, title: "Adaptive study planning", text: "Build a realistic week around your energy, workload, and actual availability.", color: "from-cyan-500 to-blue-600" },
  { icon: BrainCircuit, title: "Proactive wellness intelligence", text: "Spot burnout risk early with sleep, stress, mood, and workload signals.", color: "from-fuchsia-500 to-violet-600" },
  { icon: BriefcaseBusiness, title: "Career pathway simulator", text: "Turn your major and interests into career matches, skills, internships, and a roadmap.", color: "from-amber-400 to-orange-500" }
];

const testimonials = [
  { quote: "Campus Copilot turned a chaotic semester into something I could actually see and manage. I stopped missing the small deadlines that used to snowball.", name: "Maya Chen", role: "Computer Science · UCLA", initials: "MC", color: "bg-violet-500" },
  { quote: "The burnout check caught what I was ignoring. I adjusted my week before midterms instead of crashing after them.", name: "Jordan Williams", role: "MBA Candidate · Howard", initials: "JW", color: "bg-cyan-500" },
  { quote: "Career Lab helped me connect my sociology degree to UX research—and gave me an actual roadmap for getting there.", name: "Sofia Ramirez", role: "Sociology · UT Austin", initials: "SR", color: "bg-orange-500" }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-950 transition-colors dark:bg-[#080a0f] dark:text-white">
      <MarketingHeader />

      <main>
        <section className="relative px-5 pb-28 pt-36 md:px-8 md:pt-44">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-pulse-soft absolute left-[8%] top-24 h-[28rem] w-[28rem] rounded-full bg-brand-400/20 blur-[110px] dark:bg-brand-600/20" />
            <div className="animate-pulse-soft absolute right-[5%] top-52 h-80 w-80 rounded-full bg-cyan-400/15 blur-[100px] [animation-delay:1.5s] dark:bg-cyan-500/10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,.07)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)] dark:opacity-30" />
          </div>
          <div className="relative mx-auto max-w-7xl text-center">
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-2 text-[11px] font-bold text-brand-700 shadow-sm dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-300"><Sparkles size={14} /> Built for the whole student—not just the syllabus <ChevronRight size={13} /></div>
            <h1 className="animate-rise delay-100 mx-auto mt-7 max-w-5xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
              Your most ambitious semester, <span className="animated-gradient-text">without the burnout.</span>
            </h1>
            <p className="animate-rise delay-200 mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 dark:text-slate-400 md:text-lg">Campus Copilot unifies planning, academic progress, wellbeing, and career direction in one intelligent workspace built for college and graduate students.</p>
            <div className="animate-rise delay-200 mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/dashboard" className="primary-button !px-6 !py-3.5">Explore the live workspace <ArrowRight size={17} /></Link><a href="#platform" className="secondary-button !px-6 !py-3.5"><Play size={16} fill="currentColor" /> See how it works</a></div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-medium text-slate-400">{["Free student workspace", "Private by design", "Set up in 2 minutes"].map((item) => <span key={item} className="flex items-center gap-1.5"><Check size={13} className="text-emerald-500" />{item}</span>)}</div>

            <div className="relative mx-auto mt-16 max-w-5xl animate-float">
              <div className="absolute -inset-4 rounded-[2.4rem] bg-gradient-to-r from-brand-500/20 via-violet-500/10 to-cyan-500/20 blur-2xl" />
              <div className="relative rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-2.5 shadow-2xl shadow-brand-900/15 dark:border-white/10">
                <div className="overflow-hidden rounded-[1.3rem] bg-[#f7f8fb] text-left dark:bg-[#10131a]">
                  <div className="flex h-12 items-center border-b border-slate-200/80 bg-white px-5 dark:border-white/10 dark:bg-[#151820]"><div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6b63]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f7c94b]" /><span className="h-2.5 w-2.5 rounded-full bg-[#4dcc78]" /></div><div className="mx-auto h-6 w-52 rounded-lg bg-slate-100 dark:bg-white/[0.05]" /></div>
                  <div className="grid min-h-[410px] grid-cols-[180px_1fr]">
                    <div className="hidden border-r border-slate-200/70 bg-white p-4 dark:border-white/[0.07] dark:bg-[#11141b] sm:block"><div className="mb-7 h-7 w-28 rounded-lg bg-slate-900 dark:bg-white" />{["Overview", "Assignments", "Study planner", "Career lab", "Burnout center"].map((item, index) => <div key={item} className={`mb-2 rounded-lg px-3 py-2 text-[10px] font-semibold ${index === 0 ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-400"}`}>{item}</div>)}</div>
                    <div className="p-5 md:p-7"><div className="flex items-end justify-between"><div><p className="text-[9px] font-bold uppercase tracking-widest text-brand-500">Tuesday, October 8</p><h2 className="mt-1 font-display text-xl font-bold dark:text-white">Good morning, Alex</h2></div><span className="rounded-lg bg-white px-3 py-2 text-[9px] text-slate-400 shadow-sm dark:bg-white/[0.05]">Semester 72%</span></div>
                      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">{[{ label: "GPA", value: "3.78", color: "bg-brand-500" }, { label: "Study goal", value: "8.5h", color: "bg-cyan-500" }, { label: "Productivity", value: "84", color: "bg-violet-500" }, { label: "Streak", value: "12d", color: "bg-orange-500" }].map((stat) => <div key={stat.label} className="rounded-xl border border-slate-200/70 bg-white p-3 dark:border-white/[0.07] dark:bg-white/[0.04]"><span className={`mb-4 block h-1 w-7 rounded-full ${stat.color}`} /><p className="text-[9px] text-slate-400">{stat.label}</p><p className="mt-1 font-display text-lg font-bold dark:text-white">{stat.value}</p></div>)}</div>
                      <div className="mt-3 grid gap-3 md:grid-cols-[1.35fr_.65fr]"><div className="rounded-xl border border-slate-200/70 bg-white p-4 dark:border-white/[0.07] dark:bg-white/[0.04]"><div className="flex justify-between text-[10px] font-bold dark:text-white"><span>Weekly focus</span><span className="text-slate-400">8.5 / 10h</span></div><div className="mt-5 flex h-24 items-end gap-2">{[45, 68, 36, 88, 58, 76, 28].map((height, index) => <div key={index} className="flex-1 rounded-t bg-brand-500/15" style={{ height: `${height}%` }}><div className="h-full rounded-t bg-gradient-to-t from-brand-600 to-brand-400" /></div>)}</div></div><div className="rounded-xl bg-gradient-to-br from-brand-600 to-violet-600 p-4 text-white"><BrainCircuit size={19} /><p className="mt-5 text-[9px] text-white/60">Burnout risk</p><p className="mt-1 font-display text-lg font-bold">Low · 24%</p><div className="mt-3 h-1 rounded-full bg-white/20"><div className="h-full w-1/4 rounded-full bg-white" /></div></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="reveal-on-scroll border-y border-slate-200/70 bg-slate-50/70 dark:border-white/[0.07] dark:bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200/70 px-5 dark:divide-white/[0.07] md:grid-cols-4 md:divide-y-0 md:px-8">{[{ value: "41%", label: "fewer missed deadlines" }, { value: "6.8h", label: "saved each month" }, { value: "92%", label: "feel more in control" }, { value: "18k+", label: "student goals completed" }].map((stat) => <div key={stat.label} className="px-4 py-10 text-center md:py-12"><p className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{stat.value}</p><p className="mt-2 text-[11px] font-medium text-slate-400">{stat.label}</p></div>)}</div>
        </section>

        <section id="platform" className="reveal-on-scroll mx-auto max-w-7xl px-5 py-28 md:px-8">
          <div className="max-w-2xl"><p className="eyebrow">One connected platform</p><h2 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">Every part of student life, finally working together.</h2><p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">Move from reactive to intentional with tools that understand the relationship between your workload, wellbeing, and future.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">{features.map(({ icon: Icon, title, text, color }, index) => <article key={title} className={`group relative min-h-[270px] overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/[0.08] dark:bg-[#11141b] ${index === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-10" : ""}`}><div className="relative z-10"><span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}><Icon size={21} /></span><h3 className="mt-7 font-display text-2xl font-bold tracking-tight">{title}</h3><p className="mt-3 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p><span className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-brand-400">Explore feature <ArrowRight size={14} /></span></div><div className={`pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${color} opacity-[0.09] blur-xl transition duration-500 group-hover:scale-125`} />{index === 0 && <div className="relative mt-8 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/[0.05] md:block"><div className="flex items-center justify-between"><span className="text-xs font-bold">This week</span><span className="text-[10px] text-slate-400">7 tasks · 72% done</span></div><div className="mt-5 space-y-3">{["Research methods quiz", "Market analysis draft", "Portfolio case study"].map((task, i) => <div key={task} className="flex items-center gap-3"><span className={`grid h-5 w-5 place-items-center rounded-full border ${i === 0 ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-200"}`}>{i === 0 && <Check size={11} />}</span><span className="flex-1 text-[11px] font-medium">{task}</span><span className="text-[9px] text-slate-400">{i + 1}d</span></div>)}</div></div>}</article>)}</div>
        </section>

        <section id="stories" className="reveal-on-scroll bg-slate-950 px-5 py-28 text-white dark:bg-[#0d1016] md:px-8">
          <div className="mx-auto max-w-7xl"><div className="text-center"><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">Student stories</p><h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-[-0.04em]">Built for the pressure nobody puts on the syllabus.</h2></div><div className="mt-14 grid gap-5 md:grid-cols-3">{testimonials.map((item) => <article key={item.name} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-7 transition hover:-translate-y-1 hover:bg-white/[0.08]"><div className="flex gap-1 text-amber-400">{[1,2,3,4,5].map((star) => <Star key={star} size={13} fill="currentColor" />)}</div><Quote className="mt-7 text-white/15" size={28} /><p className="mt-3 text-sm leading-7 text-white/75">“{item.quote}”</p><div className="mt-7 flex items-center gap-3"><span className={`grid h-10 w-10 place-items-center rounded-xl text-xs font-bold ${item.color}`}>{item.initials}</span><div><p className="text-xs font-bold">{item.name}</p><p className="mt-0.5 text-[10px] text-white/40">{item.role}</p></div></div></article>)}</div></div>
        </section>

        <section className="reveal-on-scroll px-5 py-28 md:px-8"><div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-violet-600 to-indigo-700 px-7 py-16 text-center text-white shadow-glow md:px-16 md:py-20"><div className="animate-orbit absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/15" /><div className="animate-pulse-soft absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" /><GraduationCap className="relative mx-auto text-white/70" size={30} /><h2 className="relative mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">Your degree is demanding. Your tools should make it feel possible.</h2><p className="relative mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">Start with a fully populated workspace and shape it around the student you are becoming.</p><Link to="/dashboard" className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5">Enter Campus Copilot <ArrowRight size={16} /></Link></div></section>
      </main>
      <MarketingFooter />
    </div>
  );
}
