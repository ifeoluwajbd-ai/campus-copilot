import { useState } from "react";
import { Check, ChevronDown, CirclePlus, Filter, MoreHorizontal, Search } from "lucide-react";
import PageHeader from "../components/PageHeader";

const startingAssignments = [
  { id: 1, title: "Research methods quiz", course: "PSY 204", due: "Oct 8", priority: "High", status: "In progress" },
  { id: 2, title: "Market analysis draft", course: "BUS 310", due: "Oct 9", priority: "Medium", status: "Not started" },
  { id: 3, title: "Field notes reflection", course: "SOC 115", due: "Oct 11", priority: "Low", status: "In progress" },
  { id: 4, title: "Portfolio case study", course: "DES 220", due: "Oct 14", priority: "High", status: "Not started" },
  { id: 5, title: "Statistics problem set", course: "MAT 208", due: "Oct 15", priority: "Medium", status: "Complete" }
];

const priorityStyles = {
  High: "bg-coral/15 text-coral",
  Medium: "bg-gold/25 text-amber-700",
  Low: "bg-sage-100 text-sage-700"
};

export default function AssignmentTrackerPage() {
  const [assignments, setAssignments] = useState(startingAssignments);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState({ title: "", course: "", due: "", priority: "Medium" });

  // This function adds one assignment using the values from the small form.
  function addAssignment(event) {
    event.preventDefault();
    if (!newTask.title.trim()) return;
    setAssignments((current) => [
      { id: Date.now(), ...newTask, due: newTask.due || "No date", status: "Not started" },
      ...current
    ]);
    setNewTask({ title: "", course: "", due: "", priority: "Medium" });
    setShowForm(false);
  }

  function toggleComplete(id) {
    setAssignments((current) => current.map((task) => task.id === id ? { ...task, status: task.status === "Complete" ? "In progress" : "Complete" } : task));
  }

  const visibleAssignments = assignments.filter((task) => `${task.title} ${task.course}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="mx-auto max-w-7xl">
      <PageHeader
        eyebrow="Keep the momentum"
        title="Assignment tracker"
        description="Turn every deadline into a small, visible next step."
        action={<button className="primary-button" onClick={() => setShowForm(!showForm)}><CirclePlus size={18} /> Add assignment</button>}
      />

      {showForm && (
        <form onSubmit={addAssignment} className="page-card mb-6 grid gap-3 md:grid-cols-5">
          <input className="form-field md:col-span-2" placeholder="Assignment name" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} autoFocus />
          <input className="form-field" placeholder="Course (e.g. BIO 101)" value={newTask.course} onChange={(e) => setNewTask({ ...newTask, course: e.target.value })} />
          <input className="form-field" type="date" value={newTask.due} onChange={(e) => setNewTask({ ...newTask, due: e.target.value })} />
          <div className="flex gap-2">
            <select className="form-field" value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
              <option>High</option><option>Medium</option><option>Low</option>
            </select>
            <button className="primary-button !rounded-2xl !px-4" type="submit">Add</button>
          </div>
        </form>
      )}

      <div className="mb-5 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <Search size={18} className="text-slate-400" /><input className="min-w-0 flex-1 bg-transparent text-sm outline-none" placeholder="Search assignments..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
        <button className="secondary-button !rounded-2xl"><Filter size={17} /> All courses <ChevronDown size={15} /></button>
        <button className="secondary-button !rounded-2xl">Due date <ChevronDown size={15} /></button>
      </div>

      <div className="page-card overflow-hidden !p-0">
        <div className="hidden grid-cols-[48px_1.5fr_.7fr_.6fr_.7fr_40px] gap-4 border-b border-slate-100 bg-slate-50/70 px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 md:grid">
          <span /><span>Assignment</span><span>Due date</span><span>Priority</span><span>Status</span><span />
        </div>
        <div className="divide-y divide-slate-100">
          {visibleAssignments.map((task) => {
            const complete = task.status === "Complete";
            return (
              <div key={task.id} className="grid items-center gap-4 px-5 py-5 md:grid-cols-[48px_1.5fr_.7fr_.6fr_.7fr_40px] md:px-6">
                <button onClick={() => toggleComplete(task.id)} className={`grid h-7 w-7 place-items-center rounded-full border-2 ${complete ? "border-sage-500 bg-sage-500 text-white" : "border-slate-200"}`} aria-label={`Mark ${task.title} ${complete ? "incomplete" : "complete"}`}>
                  {complete && <Check size={15} strokeWidth={3} />}
                </button>
                <div className="min-w-0"><p className={`truncate text-sm font-semibold ${complete ? "text-slate-400 line-through" : ""}`}>{task.title}</p><p className="mt-1 text-xs text-slate-400">{task.course || "Personal"}</p></div>
                <p className="text-xs font-medium text-slate-500">{task.due}</p>
                <span className={`w-fit rounded-full px-3 py-1 text-[10px] font-bold ${priorityStyles[task.priority]}`}>{task.priority}</span>
                <span className="text-xs text-slate-500">{task.status}</span>
                <button className="text-slate-400" aria-label={`More options for ${task.title}`}><MoreHorizontal size={19} /></button>
              </div>
            );
          })}
          {visibleAssignments.length === 0 && <p className="px-6 py-14 text-center text-sm text-slate-400">No assignments match that search.</p>}
        </div>
      </div>
    </div>
  );
}
