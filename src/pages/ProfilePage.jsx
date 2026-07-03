import { Award, Camera, Check, GraduationCap, Mail, MapPin, Pencil, Save, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader eyebrow="Make it yours" title="Your profile" description="A few details help Campus Copilot shape plans and suggestions around your real goals." />

      <section className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
        <div className="space-y-6">
          <div className="page-card text-center">
            <div className="relative mx-auto w-fit">
              <div className="grid h-28 w-28 place-items-center rounded-full bg-gold font-display text-3xl font-extrabold">AM</div>
              <button className="absolute bottom-0 right-0 grid h-9 w-9 place-items-center rounded-full border-4 border-white bg-ink text-white" aria-label="Change profile photo"><Camera size={15} /></button>
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold">Alex Morgan</h2>
            <p className="mt-1 text-sm text-slate-400">Psychology + Business</p>
            <div className="mt-5 flex justify-center gap-4 text-xs text-slate-500"><span className="flex items-center gap-1.5"><GraduationCap size={14} /> Class of 2027</span><span className="flex items-center gap-1.5"><MapPin size={14} /> Boston, MA</span></div>
            <button className="secondary-button mt-6 w-full"><Pencil size={16} /> Edit photo</button>
          </div>

          <div className="page-card bg-ink text-white">
            <Award size={24} className="text-gold" />
            <h3 className="mt-5 font-display text-lg font-bold">Your semester style</h3>
            <p className="mt-2 text-sm leading-6 text-white/55">Steady planner with a strong afternoon focus window.</p>
            <div className="mt-5 flex gap-2"><span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold">CONSISTENT</span><span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold">CURIOUS</span></div>
          </div>
        </div>

        <div className="space-y-6">
          <form className="page-card" onSubmit={(event) => event.preventDefault()}>
            <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-sage-600">The basics</p><h2 className="mt-1 font-display text-xl font-bold">Personal information</h2></div><button className="primary-button !px-4 !py-2.5" type="submit"><Save size={16} /> Save</button></div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-semibold text-slate-500">First name<input className="form-field mt-2" defaultValue="Alex" /></label>
              <label className="text-xs font-semibold text-slate-500">Last name<input className="form-field mt-2" defaultValue="Morgan" /></label>
              <label className="text-xs font-semibold text-slate-500 sm:col-span-2">Email address<div className="relative mt-2"><Mail className="absolute left-4 top-3.5 text-slate-400" size={17} /><input className="form-field pl-11" type="email" defaultValue="alex.morgan@university.edu" /></div></label>
              <label className="text-xs font-semibold text-slate-500">Major<input className="form-field mt-2" defaultValue="Psychology" /></label>
              <label className="text-xs font-semibold text-slate-500">Minor<input className="form-field mt-2" defaultValue="Business" /></label>
              <label className="text-xs font-semibold text-slate-500">Graduation year<select className="form-field mt-2" defaultValue="2027"><option>2026</option><option>2027</option><option>2028</option><option>2029</option></select></label>
              <label className="text-xs font-semibold text-slate-500">Time zone<select className="form-field mt-2" defaultValue="Eastern"><option>Eastern</option><option>Central</option><option>Mountain</option><option>Pacific</option></select></label>
            </div>
          </form>

          <div className="page-card">
            <p className="text-xs font-bold uppercase tracking-widest text-sage-600">How you work best</p>
            <h2 className="mt-1 font-display text-xl font-bold">Study preferences</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[{ title: "Afternoon focus", text: "Best between 1–5 PM" }, { title: "45-minute sessions", text: "With a 10-minute reset" }, { title: "Quiet spaces", text: "Library or study room" }, { title: "Visual learning", text: "Maps, diagrams, examples" }].map((preference) => (
                <button key={preference.title} className="flex items-start gap-3 rounded-2xl border border-sage-200 bg-sage-50 p-4 text-left"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage-500 text-white"><Check size={12} strokeWidth={3} /></span><span><span className="block text-sm font-bold">{preference.title}</span><span className="mt-1 block text-xs text-slate-400">{preference.text}</span></span></button>
              ))}
            </div>
          </div>

          <div className="page-card flex flex-col justify-between gap-5 bg-gold/20 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold"><Sparkles size={20} /></span><div><h3 className="font-display text-lg font-bold">Profile strength: 85%</h3><p className="mt-1 text-xs text-slate-500">Add your interests to get sharper career suggestions.</p></div></div>
            <button className="text-sm font-bold">Complete profile →</button>
          </div>
        </div>
      </section>
    </div>
  );
}
