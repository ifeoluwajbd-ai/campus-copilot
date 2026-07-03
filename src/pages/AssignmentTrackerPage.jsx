import { useMemo, useState } from "react";
import { Calendar, Check, ChevronDown, CirclePlus, Clock3, Filter, LayoutGrid, List, MoreHorizontal, Search, SlidersHorizontal, Sparkles, Tag, X } from "lucide-react";
import PageHeader from "../components/PageHeader";

const startingAssignments = [
  { id: 1, title: "Research methods quiz", course: "PSY 204", due: "2026-10-08", dueLabel: "Today · 4:00 PM", priority: "High", category: "Exam", status: "In progress", progress: 75 },
  { id: 2, title: "Market analysis draft", course: "BUS 310", due: "2026-10-09", dueLabel: "Tomorrow", priority: "Medium", category: "Project", status: "In progress", progress: 42 },
  { id: 3, title: "Field notes reflection", course: "SOC 115", due: "2026-10-11", dueLabel: "Friday", priority: "Low", category: "Writing", status: "Not started", progress: 0 },
  { id: 4, title: "Portfolio case study", course: "DES 220", due: "2026-10-14", dueLabel: "Oct 14", priority: "High", category: "Project", status: "Not started", progress: 10 },
  { id: 5, title: "Statistics problem set", course: "MAT 208", due: "2026-10-15", dueLabel: "Oct 15", priority: "Medium", category: "Homework", status: "Complete", progress: 100 },
  { id: 6, title: "Chapter 6 reading notes", course: "PSY 204", due: "2026-10-16", dueLabel: "Oct 16", priority: "Low", category: "Reading", status: "Complete", progress: 100 }
];

const priorityStyles = { High: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400", Medium: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400", Low: "bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400" };
const categoryStyles = { Exam: "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400", Project: "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400", Writing: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-400", Homework: "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400", Reading: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" };

export default function AssignmentTrackerPage() {
  const [assignments, setAssignments] = useState(startingAssignments);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [view, setView] = useState("list");
  const [newTask, setNewTask] = useState({ title: "", course: "", due: "", priority: "Medium", category: "Homework" });

  function addAssignment(event) {
    event.preventDefault();
    if (!newTask.title.trim()) return;
    setAssignments((current) => [{ id: Date.now(), ...newTask, dueLabel: newTask.due || "No date", status: "Not started", progress: 0 }, ...current]);
    setNewTask({ title: "", course: "", due: "", priority: "Medium", category: "Homework" });
    setShowForm(false);
  }

  function toggleComplete(id) {
    setAssignments((current) => current.map((task) => task.id === id ? { ...task, status: task.status === "Complete" ? "In progress" : "Complete", progress: task.status === "Complete" ? Math.max(25, task.progress - 25) : 100 } : task));
  }

  const visibleAssignments = useMemo(() => assignments.filter((task) => {
    const matchesSearch = `${task.title} ${task.course} ${task.category}`.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || task.status === statusFilter;
    const matchesPriority = priorityFilter === "All" || task.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  }), [assignments, search, statusFilter, priorityFilter]);

  const completed = assignments.filter((task) => task.status === "Complete").length;
  const percent = Math.round((completed / assignments.length) * 100);

  return (
    <div className="mx-auto max-w-[1380px]">
      <PageHeader eyebrow="Academic workflow" title="Assignment tracker" description="Prioritize the right work, see momentum at a glance, and keep every deadline visible." action={<button className="primary-button" onClick={() => setShowForm(!showForm)}>{showForm ? <X size={17} /> : <CirclePlus size={17} />}{showForm ? "Close" : "New assignment"}</button>} />

      <section className="mb-5 grid gap-4 sm:grid-cols-3">
        <div className="page-card flex items-center gap-4"><div className="relative grid h-16 w-16 place-items-center rounded-full text-brand-500" style={{ background: `conic-gradient(currentColor ${percent * 3.6}deg, rgba(148,163,184,.16) 0)` }}><div className="grid h-12 w-12 place-items-center rounded-full bg-white text-xs font-extrabold dark:bg-[#11141b]">{percent}%</div></div><div><p className="metric-label">Overall progress</p><p className="mt-1 font-display text-xl font-bold">{completed} of {assignments.length}</p><p className="mt-1 text-[10px] text-slate-400">assignments complete</p></div></div>
        <div className="page-card"><div className="flex justify-between"><div><p className="metric-label">Due this week</p><p className="mt-2 font-display text-2xl font-extrabold">4 tasks</p></div><span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400"><Calendar size={18} /></span></div><p className="mt-3 text-[10px] text-slate-400">2 are high priority</p></div>
        <div className="page-card bg-gradient-to-br from-brand-600 to-violet-600 text-white"><div className="flex justify-between"><div><p className="text-xs text-white/55">Copilot forecast</p><p className="mt-2 font-display text-xl font-bold">On track</p></div><Sparkles size={20} /></div><p className="mt-3 text-[10px] text-white/60">At your current pace, everything lands on time.</p></div>
      </section>

      {showForm && <form onSubmit={addAssignment} className="page-card mb-5 animate-rise"><div className="mb-5"><p className="eyebrow">Quick add</p><h2 className="mt-1 font-display text-lg font-bold">Create an assignment</h2></div><div className="grid gap-3 md:grid-cols-6"><input className="form-field md:col-span-2" placeholder="Assignment name" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} autoFocus /><input className="form-field" placeholder="Course" value={newTask.course} onChange={(e) => setNewTask({ ...newTask, course: e.target.value })} /><input className="form-field" type="date" value={newTask.due} onChange={(e) => setNewTask({ ...newTask, due: e.target.value })} /><select className="form-field" value={newTask.category} onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}>{Object.keys(categoryStyles).map((category) => <option key={category}>{category}</option>)}</select><select className="form-field" value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}><option>High</option><option>Medium</option><option>Low</option></select></div><div className="mt-4 flex justify-end"><button className="primary-button" type="submit"><CirclePlus size={16} /> Add to tracker</button></div></form>}

      <section className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center">
        <label className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.05]"><Search size={16} className="text-slate-400" /><input className="min-w-0 flex-1 bg-transparent text-xs outline-none" placeholder="Search assignments, courses, or categories..." value={search} onChange={(e) => setSearch(e.target.value)} /></label>
        <div className="flex flex-wrap gap-2"><label className="relative"><Filter className="pointer-events-none absolute left-3 top-3 text-slate-400" size={15} /><select className="form-field !w-auto !pl-9 !pr-8" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}><option>All</option><option>Not started</option><option>In progress</option><option>Complete</option></select></label><label className="relative"><SlidersHorizontal className="pointer-events-none absolute left-3 top-3 text-slate-400" size={15} /><select className="form-field !w-auto !pl-9 !pr-8" value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}><option>All</option><option>High</option><option>Medium</option><option>Low</option></select></label><div className="flex rounded-xl border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-white/[0.05]"><button onClick={() => setView("list")} className={`grid h-8 w-8 place-items-center rounded-lg ${view === "list" ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-400"}`} aria-label="List view"><List size={15} /></button><button onClick={() => setView("grid")} className={`grid h-8 w-8 place-items-center rounded-lg ${view === "grid" ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950" : "text-slate-400"}`} aria-label="Grid view"><LayoutGrid size={15} /></button></div></div>
      </section>

      {view === "list" ? <div className="page-card overflow-hidden !p-0"><div className="hidden grid-cols-[44px_1.5fr_.7fr_.65fr_.65fr_.7fr_34px] gap-4 border-b border-slate-100 bg-slate-50/70 px-6 py-3.5 text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:border-white/[0.07] dark:bg-white/[0.02] md:grid"><span /><span>Assignment</span><span>Due</span><span>Category</span><span>Priority</span><span>Progress</span><span /></div><div className="divide-y divide-slate-100 dark:divide-white/[0.07]">{visibleAssignments.map((task) => { const complete = task.status === "Complete"; return <div key={task.id} className="grid items-center gap-4 px-5 py-4 transition hover:bg-slate-50/60 dark:hover:bg-white/[0.02] md:grid-cols-[44px_1.5fr_.7fr_.65fr_.65fr_.7fr_34px] md:px-6"><button onClick={() => toggleComplete(task.id)} className={`grid h-6 w-6 place-items-center rounded-lg border ${complete ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-200 dark:border-white/15"}`} aria-label={`Mark ${task.title} ${complete ? "incomplete" : "complete"}`}>{complete && <Check size={13} strokeWidth={3} />}</button><div className="min-w-0"><p className={`truncate text-[13px] font-semibold ${complete ? "text-slate-400 line-through" : ""}`}>{task.title}</p><p className="mt-1 text-[10px] text-slate-400">{task.course || "Personal"} · {task.status}</p></div><span className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400"><Clock3 size={12} />{task.dueLabel}</span><span className={`w-fit rounded-lg px-2 py-1 text-[9px] font-bold ${categoryStyles[task.category] || categoryStyles.Homework}`}>{task.category}</span><span className={`w-fit rounded-lg px-2 py-1 text-[9px] font-bold ${priorityStyles[task.priority]}`}>{task.priority}</span><div><div className="mb-1 flex justify-between text-[9px] text-slate-400"><span>{task.progress}%</span></div><div className="h-1.5 rounded-full bg-slate-100 dark:bg-white/[0.07]"><div className={`h-full rounded-full ${complete ? "bg-emerald-500" : "bg-brand-500"}`} style={{ width: `${task.progress}%` }} /></div></div><button className="text-slate-300 dark:text-slate-600"><MoreHorizontal size={17} /></button></div>})}{visibleAssignments.length === 0 && <p className="px-6 py-14 text-center text-sm text-slate-400">No assignments match these filters.</p>}</div></div> : <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{visibleAssignments.map((task) => <article key={task.id} className="page-card"><div className="flex items-start justify-between"><span className={`rounded-lg px-2 py-1 text-[9px] font-bold ${categoryStyles[task.category]}`}>{task.category}</span><button className="text-slate-300"><MoreHorizontal size={18} /></button></div><h3 className="mt-5 font-display text-lg font-bold">{task.title}</h3><p className="mt-1 text-[10px] text-slate-400">{task.course} · {task.dueLabel}</p><div className="mt-6 flex items-center justify-between text-[10px]"><span className={`rounded-lg px-2 py-1 font-bold ${priorityStyles[task.priority]}`}>{task.priority}</span><span className="text-slate-400">{task.progress}% complete</span></div><div className="mt-3 h-1.5 rounded-full bg-slate-100 dark:bg-white/[0.07]"><div className="h-full rounded-full bg-brand-500" style={{ width: `${task.progress}%` }} /></div><button onClick={() => toggleComplete(task.id)} className="secondary-button mt-5 w-full !py-2 text-xs">{task.status === "Complete" ? "Reopen task" : "Mark complete"}</button></article>)}</div>}
    </div>
  );
}
