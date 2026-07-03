import { useMemo, useState } from "react";
import { ArrowRight, BadgeDollarSign, BookOpen, Building2, Check, ChevronRight, Circle, Code2, Compass, GraduationCap, Lightbulb, Map, Rocket, Sparkles, Star, Target, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";

const careers = {
  "Product Designer": { match: 94, salary: "$78k–$142k", growth: "+16%", description: "Turn complex human problems into clear, useful digital experiences.", skills: ["User research", "Figma", "Prototyping", "Design systems", "Storytelling"], internships: ["UX Design Intern · Adobe", "Product Design Co-op · HubSpot"], grad: ["MS Human-Computer Interaction", "MDes Interaction Design"], color: "from-brand-500 to-violet-600" },
  "UX Researcher": { match: 89, salary: "$75k–$135k", growth: "+13%", description: "Study how people think and behave to guide smarter product decisions.", skills: ["Interviews", "Usability testing", "Data synthesis", "Research planning", "Statistics"], internships: ["UX Research Intern · Google", "Insights Fellow · IDEO"], grad: ["MS Human Factors", "PhD Cognitive Psychology"], color: "from-cyan-500 to-blue-600" },
  "Product Manager": { match: 83, salary: "$88k–$160k", growth: "+10%", description: "Connect customer needs, business strategy, and a team’s best work.", skills: ["Product strategy", "Analytics", "Communication", "Prioritization", "Leadership"], internships: ["APM Intern · Salesforce", "Product Strategy Intern · Spotify"], grad: ["MBA Technology Management", "MS Product Management"], color: "from-amber-400 to-orange-500" },
  "People Analyst": { match: 78, salary: "$68k–$118k", growth: "+12%", description: "Use behavioral and workforce data to improve how organizations work.", skills: ["People analytics", "SQL", "Survey design", "Data visualization", "Consulting"], internships: ["People Analytics Intern · Deloitte", "HR Insights Intern · Microsoft"], grad: ["MS Industrial Psychology", "MS Business Analytics"], color: "from-emerald-500 to-teal-600" }
};

const interestOptions = ["Solving human problems", "Visual creativity", "Research & behavior", "Building technology", "Leading teams", "Data & patterns"];
const majors = ["Psychology", "Computer Science", "Business", "Design", "Sociology", "Engineering"];

export default function CareerPathwayPage() {
  const [major, setMajor] = useState("Psychology");
  const [interests, setInterests] = useState(["Solving human problems", "Visual creativity", "Research & behavior"]);
  const [selectedCareer, setSelectedCareer] = useState("Product Designer");
  const career = careers[selectedCareer];

  function toggleInterest(interest) { setInterests((current) => current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest]); }

  const recommendations = useMemo(() => Object.entries(careers).map(([name, details], index) => ({ name, ...details, match: Math.max(65, details.match - (major === "Psychology" ? 0 : index * 2) + Math.min(3, interests.length)) })).sort((a, b) => b.match - a.match), [major, interests]);

  return (
    <div className="mx-auto max-w-[1400px]">
      <PageHeader eyebrow="AI career intelligence" title="Career pathway simulator" description="Turn your major, interests, and strengths into evidence-backed career options and a practical roadmap." action={<button className="secondary-button"><Sparkles size={16} className="text-brand-500" /> Refresh matches</button>} />

      <section className="grid gap-5 xl:grid-cols-[360px_1fr]">
        <aside className="space-y-5">
          <div className="page-card">
            <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"><Compass size={18} /></span><div><p className="eyebrow">Your profile</p><h2 className="mt-0.5 font-display text-lg font-bold">Career inputs</h2></div></div>
            <label className="mt-6 block text-[10px] font-bold uppercase tracking-wider text-slate-400">Current major<select className="form-field mt-2 normal-case" value={major} onChange={(e) => setMajor(e.target.value)}>{majors.map((item) => <option key={item}>{item}</option>)}</select></label>
            <div className="mt-6"><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">What energizes you?</p><div className="mt-3 flex flex-wrap gap-2">{interestOptions.map((interest) => { const selected = interests.includes(interest); return <button key={interest} onClick={() => toggleInterest(interest)} className={`rounded-xl border px-3 py-2 text-[10px] font-semibold transition ${selected ? "border-brand-300 bg-brand-50 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300" : "border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-400"}`}>{selected && <Check size={11} className="mr-1 inline" />}{interest}</button>})}</div></div>
          </div>

          <div className="page-card !p-3"><p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Top recommendations</p>{recommendations.map((item, index) => <button key={item.name} onClick={() => setSelectedCareer(item.name)} className={`mb-1 flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${selectedCareer === item.name ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "hover:bg-slate-50 dark:hover:bg-white/[0.04]"}`}><span className={`grid h-9 w-9 place-items-center rounded-xl text-xs font-extrabold ${selectedCareer === item.name ? "bg-white/15 dark:bg-slate-950/10" : "bg-slate-100 dark:bg-white/[0.05]"}`}>0{index + 1}</span><span className="min-w-0 flex-1"><span className="block truncate text-xs font-bold">{item.name}</span><span className={`mt-0.5 block text-[9px] ${selectedCareer === item.name ? "text-white/50 dark:text-slate-500" : "text-slate-400"}`}>{item.match}% profile match</span></span><ChevronRight size={15} /></button>)}</div>

          <div className="page-card bg-gradient-to-br from-slate-950 to-slate-800 text-white dark:from-brand-800 dark:to-violet-900"><Lightbulb className="text-amber-400" size={20} /><p className="mt-4 text-sm font-bold">A direction, not a verdict.</p><p className="mt-1.5 text-[10px] leading-5 text-white/50">Career fit grows through experience. Try every path and treat curiosity as useful data.</p></div>
        </aside>

        <div className="space-y-5">
          <section className={`relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${career.color} p-7 text-white shadow-glow md:p-8`}>
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/15" /><div className="absolute -bottom-32 right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end"><div className="max-w-2xl"><div className="flex items-center gap-2"><span className="rounded-full bg-white/15 px-3 py-1 text-[9px] font-bold uppercase tracking-wider">Best overall fit</span><span className="flex items-center gap-1 text-[10px] text-white/60"><Star size={11} fill="currentColor" /> Based on 6 signals</span></div><h2 className="mt-5 font-display text-4xl font-extrabold tracking-[-0.04em]">{selectedCareer}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/65">{career.description}</p></div><div className="flex gap-3"><div className="rounded-2xl bg-black/15 p-4 backdrop-blur"><p className="text-[9px] uppercase tracking-wider text-white/50">Profile match</p><p className="mt-1 font-display text-2xl font-extrabold">{recommendations.find((item) => item.name === selectedCareer)?.match}%</p></div><div className="rounded-2xl bg-white p-4 text-slate-950"><p className="text-[9px] uppercase tracking-wider text-slate-400">Salary range</p><p className="mt-1 font-display text-lg font-extrabold">{career.salary}</p></div></div></div>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            <div className="page-card"><div className="flex justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"><BadgeDollarSign size={18} /></span><span className="text-[10px] font-bold text-emerald-500">{career.growth} demand</span></div><p className="mt-5 metric-label">Estimated salary</p><p className="mt-1 font-display text-xl font-extrabold">{career.salary}</p><p className="mt-1 text-[9px] text-slate-400">US market · experience adjusted</p></div>
            <div className="page-card"><span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400"><Building2 size={18} /></span><p className="mt-5 metric-label">Open internships</p><p className="mt-1 font-display text-xl font-extrabold">146 matches</p><p className="mt-1 text-[9px] text-slate-400">22 accept your graduation year</p></div>
            <div className="page-card"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"><Target size={18} /></span><p className="mt-5 metric-label">Skill readiness</p><p className="mt-1 font-display text-xl font-extrabold">68%</p><p className="mt-1 text-[9px] text-slate-400">3 priority skills to develop</p></div>
          </section>

          <section className="page-card">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><p className="eyebrow">Roadmap visualization</p><h2 className="mt-1 font-display text-lg font-bold">Your path from campus to career</h2></div><span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">18–24 month plan</span></div>
            <div className="relative mt-9 grid gap-6 md:grid-cols-4"><div className="absolute left-[12%] right-[12%] top-5 hidden h-px bg-gradient-to-r from-emerald-400 via-brand-400 to-slate-200 dark:to-white/10 md:block" />{[
              { icon: BookOpen, phase: "Now", title: "Build foundations", text: "Complete research methods and design thinking", active: true },
              { icon: Code2, phase: "Next semester", title: "Practice the craft", text: `Develop ${career.skills.slice(0,2).join(" + ")}` },
              { icon: Users, phase: "Summer 2027", title: "Work in the field", text: career.internships[0] },
              { icon: Rocket, phase: "Senior year", title: "Launch your career", text: `Apply to 12 ${selectedCareer} roles` }
            ].map((step, index) => <div key={step.title} className="relative"><span className={`relative z-10 grid h-10 w-10 place-items-center rounded-full ${step.active ? "bg-emerald-500 text-white ring-4 ring-emerald-500/15" : index === 1 ? "bg-brand-500 text-white ring-4 ring-brand-500/15" : "bg-slate-100 text-slate-400 dark:bg-white/[0.07]"}`}><step.icon size={17} /></span><p className="mt-5 text-[9px] font-bold uppercase tracking-wider text-brand-500">{step.phase}</p><h3 className="mt-1 text-xs font-bold">{step.title}</h3><p className="mt-1.5 text-[10px] leading-4 text-slate-400">{step.text}</p></div>)}</div>
          </section>

          <section className="grid gap-5 lg:grid-cols-3">
            <div className="page-card"><div className="flex items-center gap-2"><Code2 size={17} className="text-brand-500" /><h2 className="font-display text-base font-bold">Required skills</h2></div><div className="mt-5 space-y-3">{career.skills.map((skill, index) => <div key={skill}><div className="mb-1.5 flex justify-between text-[10px]"><span className="font-medium">{skill}</span><span className="text-slate-400">{[82, 74, 58, 45, 62][index]}%</span></div><div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/[0.07]"><div className="h-full rounded-full bg-brand-500" style={{ width: `${[82, 74, 58, 45, 62][index]}%` }} /></div></div>)}</div></div>
            <div className="page-card"><div className="flex items-center gap-2"><Building2 size={17} className="text-cyan-500" /><h2 className="font-display text-base font-bold">Internship suggestions</h2></div><div className="mt-5 space-y-3">{career.internships.map((item, index) => <div key={item} className="rounded-xl border border-slate-100 p-3 dark:border-white/[0.07]"><div className="flex justify-between"><p className="text-[11px] font-bold">{item.split(" · ")[0]}</p><span className="text-[9px] font-bold text-emerald-500">{index === 0 ? "Strong fit" : "Good fit"}</span></div><p className="mt-1 text-[9px] text-slate-400">{item.split(" · ")[1]} · Summer 2027</p></div>)}</div><button className="mt-4 text-[10px] font-bold text-brand-600 dark:text-brand-400">Browse all 146 matches →</button></div>
            <div className="page-card"><div className="flex items-center gap-2"><GraduationCap size={17} className="text-violet-500" /><h2 className="font-display text-base font-bold">Graduate school</h2></div><p className="mt-3 text-[10px] leading-4 text-slate-400">Optional paths that deepen your specialization.</p><div className="mt-4 space-y-3">{career.grad.map((program) => <div key={program} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-white/[0.04]"><span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-violet-500 shadow-sm dark:bg-white/[0.07]"><GraduationCap size={13} /></span><div><p className="text-[10px] font-bold">{program}</p><p className="mt-0.5 text-[9px] text-slate-400">2 years · Recommended</p></div></div>)}</div></div>
          </section>
        </div>
      </section>
    </div>
  );
}
