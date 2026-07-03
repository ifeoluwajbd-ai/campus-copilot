import { useState } from "react";
import { ArrowRight, BookOpen, CheckCircle2, Circle, Code2, Lightbulb, Rocket, Sparkles, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";

const pathways = {
  "Product Designer": {
    match: 92,
    description: "Turn messy human problems into clear, useful digital experiences.",
    skills: ["User research", "Figma", "Prototyping", "Design systems"],
    next: "Build one end-to-end mobile app case study"
  },
  "UX Researcher": {
    match: 86,
    description: "Study how people think and behave to guide better product decisions.",
    skills: ["Interviews", "Usability testing", "Data synthesis", "Research planning"],
    next: "Run five interviews and publish a findings report"
  },
  "Product Manager": {
    match: 79,
    description: "Connect customer needs, business goals, and a team’s best work.",
    skills: ["Product strategy", "Analytics", "Communication", "Prioritization"],
    next: "Write a product brief for a campus problem"
  }
};

export default function CareerPathwayPage() {
  const [selectedCareer, setSelectedCareer] = useState("Product Designer");
  const career = pathways[selectedCareer];

  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader eyebrow="Imagine what’s next" title="Career pathway simulator" description="Explore a direction, spot the skill gaps, and leave with one practical next move." />

      <section className="grid gap-6 xl:grid-cols-[.72fr_1.28fr]">
        <div className="page-card h-fit">
          <p className="text-xs font-bold uppercase tracking-widest text-sage-600">Choose a destination</p>
          <h2 className="mt-2 font-display text-xl font-bold">What sounds interesting?</h2>
          <div className="mt-5 space-y-3">
            {Object.entries(pathways).map(([name, item]) => (
              <button key={name} onClick={() => setSelectedCareer(name)} className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition ${selectedCareer === name ? "border-sage-500 bg-sage-50" : "border-slate-100 hover:border-sage-200"}`}>
                <div><p className="text-sm font-bold">{name}</p><p className="mt-1 text-xs text-slate-400">{item.match}% profile match</p></div>
                <span className={`grid h-7 w-7 place-items-center rounded-full ${selectedCareer === name ? "bg-sage-500 text-white" : "bg-slate-100 text-slate-400"}`}><ArrowRight size={15} /></span>
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-ink p-5 text-white">
            <Lightbulb size={20} className="text-gold" />
            <p className="mt-4 text-sm font-bold">This is a simulator, not a verdict.</p>
            <p className="mt-1 text-xs leading-5 text-white/50">Try every path. Curiosity is useful career data.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="page-card relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sage-100" />
            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-sage-600">Your simulated path</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold">{selectedCareer}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">{career.description}</p>
              </div>
              <div className="relative grid h-32 w-32 shrink-0 place-items-center rounded-full bg-ink text-white">
                <div className="text-center"><p className="font-display text-3xl font-extrabold">{career.match}%</p><p className="text-[10px] uppercase tracking-widest text-white/50">Match</p></div>
                <Sparkles className="absolute -right-2 -top-2 text-coral" size={28} />
              </div>
            </div>
          </div>

          <div className="page-card">
            <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-sage-600">The road ahead</p><h2 className="mt-1 font-display text-xl font-bold">Your pathway milestones</h2></div><span className="text-xs text-slate-400">2 of 5 underway</span></div>
            <div className="mt-8 space-y-0">
              {[
                { icon: BookOpen, title: "Build the foundation", text: "Complete a design-thinking or research methods course", done: true },
                { icon: Code2, title: "Learn the tools", text: `Practice ${career.skills.slice(0, 2).join(" and ")}`, active: true },
                { icon: Users, title: "Work with real people", text: "Join a student team or community project" },
                { icon: Rocket, title: "Show your thinking", text: career.next },
                { icon: CheckCircle2, title: "Step into the field", text: "Apply for an internship or mentorship" }
              ].map((step, index, list) => (
                <div key={step.title} className="grid grid-cols-[42px_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${step.done ? "bg-sage-500 text-white" : step.active ? "bg-gold text-ink ring-4 ring-gold/20" : "bg-slate-100 text-slate-400"}`}>{step.done ? <CheckCircle2 size={19} /> : <step.icon size={18} />}</span>
                    {index < list.length - 1 && <span className={`h-12 w-px ${step.done ? "bg-sage-300" : "bg-slate-200"}`} />}
                  </div>
                  <div className="pb-6"><div className="flex items-center gap-2"><p className="text-sm font-bold">{step.title}</p>{step.active && <span className="rounded-full bg-gold/30 px-2 py-0.5 text-[9px] font-bold uppercase">Now</span>}</div><p className="mt-1 text-xs leading-5 text-slate-400">{step.text}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="page-card"><p className="text-xs font-bold uppercase tracking-widest text-sage-600">Skills to grow</p><div className="mt-5 flex flex-wrap gap-2">{career.skills.map((skill) => <span key={skill} className="rounded-full bg-sage-50 px-3 py-2 text-xs font-semibold text-sage-700">{skill}</span>)}</div></div>
            <div className="page-card bg-coral/10"><p className="text-xs font-bold uppercase tracking-widest text-coral">One next move</p><p className="mt-4 font-display text-lg font-bold">{career.next}</p><button className="mt-5 flex items-center gap-2 text-sm font-bold text-coral">Add to my plan <ArrowRight size={15} /></button></div>
          </div>
        </div>
      </section>
    </div>
  );
}
