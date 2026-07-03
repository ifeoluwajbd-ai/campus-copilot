import { useMemo, useState } from "react";
import { Activity, ArrowRight, BatteryCharging, BedDouble, BrainCircuit, CalendarClock, CheckCircle2, ChevronRight, Coffee, HeartPulse, Info, Moon, RefreshCw, ShieldCheck, Smile, Sparkles, Sun, TrendingDown, TriangleAlert, Waves } from "lucide-react";
import PageHeader from "../components/PageHeader";

const moodLabels = ["Very low", "Low", "Okay", "Good", "Great"];

function SignalSlider({ icon: Icon, label, value, setValue, min, max, step = 1, unit, helper, color }) {
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div className="rounded-2xl border border-slate-100 p-4 dark:border-white/[0.07]">
      <div className="flex items-start justify-between"><div className="flex items-center gap-3"><span className={`grid h-9 w-9 place-items-center rounded-xl ${color}`}><Icon size={16} /></span><div><p className="text-xs font-bold">{label}</p><p className="mt-0.5 text-[9px] text-slate-400">{helper}</p></div></div><p className="font-display text-lg font-extrabold">{value}<span className="ml-1 text-[10px] font-medium text-slate-400">{unit}</span></p></div>
      <input className="mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-100 accent-brand-500 dark:bg-white/10" type="range" min={min} max={max} step={step} value={value} onInput={(e) => setValue(Number(e.currentTarget.value))} style={{ background: `linear-gradient(to right, rgb(99 102 241) ${percent}%, rgba(148,163,184,.16) ${percent}%)` }} />
      <div className="mt-2 flex justify-between text-[8px] text-slate-400"><span>{min}{unit}</span><span>{max}{unit}</span></div>
    </div>
  );
}

export default function BurnoutCenterPage() {
  const [sleep, setSleep] = useState(6.8);
  const [stress, setStress] = useState(6);
  const [workload, setWorkload] = useState(8);
  const [mood, setMood] = useState(3);

  const risk = useMemo(() => {
    const sleepRisk = Math.max(0, (8 - sleep) * 9);
    const stressRisk = stress * 4.5;
    const workloadRisk = Math.max(0, (workload - 4) * 3.2);
    const moodRisk = (5 - mood) * 5;
    return Math.max(8, Math.min(96, Math.round(sleepRisk + stressRisk + workloadRisk + moodRisk - 25)));
  }, [sleep, stress, workload, mood]);

  const level = risk < 35 ? "Low" : risk < 65 ? "Moderate" : "High";
  const riskColor = level === "Low" ? "text-emerald-500" : level === "Moderate" ? "text-amber-500" : "text-rose-500";
  const recommendations = [
    sleep < 7.5 ? { icon: Moon, title: "Protect tonight’s sleep window", text: "Move the 9:30 PM reading block to tomorrow and aim for 7.5+ hours.", action: "Adjust study plan", tone: "violet" } : { icon: CheckCircle2, title: "Sleep rhythm is supporting you", text: "Keep your current bedtime within a 30-minute window tonight.", action: "View sleep trend", tone: "emerald" },
    workload > 7 ? { icon: CalendarClock, title: "Redistribute two focus blocks", text: "Thursday is overloaded. Moving 60 minutes to Saturday lowers your projected risk by 9%.", action: "Balance my week", tone: "brand" } : { icon: BatteryCharging, title: "Your workload is sustainable", text: "You have enough recovery space between demanding study sessions.", action: "View workload", tone: "cyan" },
    stress > 5 ? { icon: Waves, title: "Add a short nervous-system reset", text: "A 10-minute walk after your quiz is likely to improve afternoon focus quality.", action: "Add wellness break", tone: "amber" } : { icon: Smile, title: "Stress signals are stable", text: "Your reported stress is within your healthy weekly range.", action: "Keep checking in", tone: "emerald" }
  ];

  return (
    <div className="mx-auto max-w-[1380px]">
      <PageHeader eyebrow="AI wellness intelligence" title="Burnout Prediction Center" description="Understand how sleep, stress, mood, and workload interact—then make small changes before overload becomes burnout." action={<button className="secondary-button"><RefreshCw size={15} /> Sync latest signals</button>} />

      <section className="grid gap-5 xl:grid-cols-[.75fr_1.25fr]">
        <div className="space-y-5">
          <div className="page-card relative overflow-hidden">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand-500/[0.08] blur-3xl" />
            <div className="relative flex items-start justify-between"><div><p className="eyebrow">7-day prediction</p><h2 className="mt-1 font-display text-xl font-bold">Your burnout risk</h2></div><span className={`rounded-full px-3 py-1 text-[9px] font-bold ${level === "Low" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : level === "Moderate" ? "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400" : "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"}`}>{level.toUpperCase()} RISK</span></div>
            <div className="relative mt-8 flex flex-col items-center gap-7 sm:flex-row">
              <div className={`relative grid h-44 w-44 shrink-0 place-items-center rounded-full ${riskColor}`} style={{ background: `conic-gradient(currentColor ${risk * 3.6}deg, rgba(148,163,184,.13) 0)` }}><div className="grid h-[138px] w-[138px] place-items-center rounded-full bg-white text-center dark:bg-[#11141b]"><div><BrainCircuit className="mx-auto mb-2 opacity-60" size={21} /><p className="font-display text-4xl font-extrabold">{risk}%</p><p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">predicted risk</p></div></div></div>
              <div className="flex-1"><p className="text-sm font-bold">{level === "Low" ? "Your signals are mostly balanced." : level === "Moderate" ? "A few signals need attention." : "Your current pattern needs recovery."}</p><p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{level === "Low" ? "Workload is elevated, but steady mood and improving sleep are protecting your capacity." : "Short sleep and a dense workload are combining to reduce your recovery margin."}</p><div className="mt-5 flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-[10px] dark:bg-white/[0.04]"><TrendingDown className="text-emerald-500" size={16} /><span><strong className="text-emerald-500">6% lower</strong> than your midterm average</span></div></div>
            </div>
          </div>

          <div className="page-card">
            <div className="flex items-center justify-between"><div><p className="eyebrow">Pattern analysis</p><h2 className="mt-1 font-display text-lg font-bold">Risk trend</h2></div><span className="text-[9px] text-slate-400">Last 14 days</span></div>
            <div className="relative mt-8 h-40"><div className="absolute inset-0 flex flex-col justify-between">{[1,2,3,4].map((line) => <span key={line} className="border-t border-dashed border-slate-100 dark:border-white/[0.06]" />)}</div><svg className="relative h-full w-full" viewBox="0 0 600 160" preserveAspectRatio="none" aria-label="Burnout risk trend chart"><defs><linearGradient id="riskFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity=".25" /><stop offset="100%" stopColor="#6366f1" stopOpacity="0" /></linearGradient></defs><path d="M0 95 C45 80,70 105,110 88 S180 52,220 72 S285 118,330 98 S400 42,445 62 S515 100,600 72 L600 160 L0 160 Z" fill="url(#riskFill)" /><path d="M0 95 C45 80,70 105,110 88 S180 52,220 72 S285 118,330 98 S400 42,445 62 S515 100,600 72" fill="none" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" /></svg></div><div className="mt-2 flex justify-between text-[8px] text-slate-400"><span>Sep 25</span><span>Sep 29</span><span>Oct 3</span><span>Today</span></div>
          </div>

          <div className="page-card flex items-start gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400"><ShieldCheck size={18} /></span><div><p className="text-xs font-bold">Private, supportive, and not a diagnosis</p><p className="mt-1.5 text-[10px] leading-4 text-slate-400">Your check-ins stay in your workspace. Campus Copilot identifies patterns and suggests planning changes; contact a qualified professional for medical support.</p></div></div>
        </div>

        <div className="space-y-5">
          <section className="page-card">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><p className="eyebrow">Daily check-in</p><h2 className="mt-1 font-display text-lg font-bold">What is your body telling you?</h2></div><span className="flex items-center gap-1.5 text-[9px] font-medium text-slate-400"><Sparkles size={12} className="text-brand-500" /> Updates prediction instantly</span></div>
            <div className="mt-6 grid gap-4 md:grid-cols-2"><SignalSlider icon={BedDouble} label="Sleep last night" value={sleep} setValue={setSleep} min={4} max={10} step={0.1} unit="h" helper="Your recovery foundation" color="bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400" /><SignalSlider icon={Activity} label="Stress level" value={stress} setValue={setStress} min={1} max={10} unit="/10" helper="How activated you feel" color="bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400" /><SignalSlider icon={CalendarClock} label="Workload today" value={workload} setValue={setWorkload} min={1} max={12} unit="h" helper="Classes + study + work" color="bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400" /><SignalSlider icon={Smile} label="Mood check" value={mood} setValue={setMood} min={1} max={5} unit="/5" helper={moodLabels[mood - 1]} color="bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400" /></div>
          </section>

          <section className="grid gap-4 sm:grid-cols-4">
            {[{ icon: BedDouble, label: "Sleep avg", value: "6.9h", note: "+0.4h", color: "text-violet-500" }, { icon: HeartPulse, label: "Stress avg", value: "5.8", note: "-0.6", color: "text-rose-500" }, { icon: CalendarClock, label: "Workload", value: "43h", note: "+3h", color: "text-brand-500" }, { icon: Smile, label: "Mood avg", value: "3.6", note: "+0.3", color: "text-amber-500" }].map((item) => <div key={item.label} className="page-card !p-4"><item.icon size={16} className={item.color} /><p className="mt-4 text-[9px] text-slate-400">{item.label}</p><div className="mt-1 flex items-end justify-between"><p className="font-display text-lg font-extrabold">{item.value}</p><span className={`text-[9px] font-bold ${item.note.startsWith("+") && item.label === "Workload" ? "text-rose-500" : "text-emerald-500"}`}>{item.note}</span></div></div>)}</section>

          <section className="page-card">
            <div className="flex items-center justify-between"><div><p className="eyebrow">Personalized plan</p><h2 className="mt-1 font-display text-lg font-bold">Recommended next moves</h2></div><span className="rounded-lg bg-brand-50 px-2.5 py-1.5 text-[9px] font-bold text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">AI PRIORITIZED</span></div>
            <div className="mt-5 space-y-3">{recommendations.map((item, index) => { const tones = { violet: "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400", emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400", brand: "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400", cyan: "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400", amber: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400" }; return <article key={item.title} className="group flex flex-col gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-brand-200 hover:bg-slate-50/50 dark:border-white/[0.07] dark:hover:border-brand-500/20 dark:hover:bg-white/[0.02] sm:flex-row sm:items-center"><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tones[item.tone]}`}><item.icon size={19} /></span><div className="flex-1"><div className="flex items-center gap-2"><p className="text-xs font-bold">{item.title}</p>{index === 0 && <span className="rounded-md bg-rose-50 px-1.5 py-0.5 text-[8px] font-bold text-rose-500 dark:bg-rose-500/10">HIGHEST IMPACT</span>}</div><p className="mt-1 text-[10px] leading-4 text-slate-400">{item.text}</p></div><button className="flex shrink-0 items-center gap-1 text-[10px] font-bold text-brand-600 dark:text-brand-400">{item.action} <ChevronRight size={13} /></button></article>})}</div>
          </section>
        </div>
      </section>
    </div>
  );
}
