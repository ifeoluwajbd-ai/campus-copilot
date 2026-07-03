import { ArrowRight, BookOpenCheck, BriefcaseBusiness, CalendarDays, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const features = [
  {
    icon: BookOpenCheck,
    title: "Assignments, under control",
    text: "See what is due, what matters most, and what you have already finished."
  },
  {
    icon: CalendarDays,
    title: "A study plan that fits",
    text: "Turn a busy week into focused sessions you can actually complete."
  },
  {
    icon: BriefcaseBusiness,
    title: "A clearer path forward",
    text: "Explore roles, skills, and milestones before graduation sneaks up on you."
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="hover:text-ink">Features</a>
          <a href="#how-it-works" className="hover:text-ink">How it works</a>
          <Link to="/profile" className="hover:text-ink">Profile</Link>
        </nav>
        <Link to="/dashboard" className="secondary-button !px-4 !py-2.5">Open app <ArrowRight size={16} /></Link>
      </header>

      <main>
        <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-16 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pt-24">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-4 py-2 text-xs font-bold text-sage-700">
              <Sparkles size={15} /> Your calmer semester starts here
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              One copilot for your <span className="relative text-sage-600">whole campus life.<span className="absolute -bottom-2 left-0 h-3 w-full -rotate-1 rounded-full bg-gold/60 -z-10" /></span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Plan the work, protect your study time, and build toward a career—all without juggling five different apps.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/dashboard" className="primary-button">Explore your dashboard <ArrowRight size={17} /></Link>
              <a href="#features" className="secondary-button">See what’s inside</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              {["Free for students", "No credit card", "Set up in 2 minutes"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sage-500" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-16 -top-12 h-52 w-52 rounded-full bg-gold/35 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-sage-200/60 blur-3xl" />
            <div className="relative rotate-2 rounded-[2rem] bg-ink p-3 shadow-2xl shadow-sage-900/20">
              <div className="overflow-hidden rounded-[1.5rem] bg-white">
                <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-coral" /><span className="h-2.5 w-2.5 rounded-full bg-gold" /><span className="h-2.5 w-2.5 rounded-full bg-sage-400" />
                  <span className="ml-auto text-xs text-slate-400">Tuesday, October 8</span>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-sage-600">Good morning, Alex</p>
                  <h2 className="mt-2 font-display text-2xl font-extrabold">Your day, at a glance.</h2>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-sage-50 p-4"><p className="text-xs text-slate-500">Tasks due</p><p className="mt-2 font-display text-3xl font-bold">3</p></div>
                    <div className="rounded-2xl bg-orange-50 p-4"><p className="text-xs text-slate-500">Focus time</p><p className="mt-2 font-display text-3xl font-bold">2.5h</p></div>
                  </div>
                  <div className="mt-5 rounded-2xl border border-slate-100 p-4">
                    <div className="flex items-center justify-between"><p className="text-sm font-bold">Research methods quiz</p><span className="rounded-full bg-coral/15 px-2.5 py-1 text-[10px] font-bold text-coral">TODAY</span></div>
                    <p className="mt-1 text-xs text-slate-400">PSY 204 · 4:00 PM</p>
                    <div className="mt-4 h-2 rounded-full bg-slate-100"><div className="h-full w-3/4 rounded-full bg-sage-500" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-sage-600">Everything in one place</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-4xl font-extrabold tracking-tight">Less scrambling. More momentum.</h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {features.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="rounded-3xl border border-slate-100 bg-cream p-7">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${index === 1 ? "bg-gold/35" : index === 2 ? "bg-coral/15 text-coral" : "bg-sage-100 text-sage-700"}`}><Icon size={22} /></span>
                  <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="rounded-[2.5rem] bg-sage-600 px-7 py-14 text-center text-white md:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage-100">Ready when you are</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-extrabold">Make this semester feel lighter.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-sage-100">Start with the sample dashboard, then make each planner your own as the semester takes shape.</p>
            <Link to="/dashboard" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-sage-700 transition hover:-translate-y-0.5">Get started <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-5 py-8 text-center text-xs text-slate-400">© 2026 Campus Copilot · Built for brighter semesters.</footer>
    </div>
  );
}
