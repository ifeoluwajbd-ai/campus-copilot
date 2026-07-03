import { useState } from "react";
import { Bell, Menu, Search, X } from "lucide-react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// AppLayout wraps every signed-in page so navigation stays consistent.
export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream lg:flex">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      {menuOpen && (
        <button
          className="fixed inset-0 z-30 bg-ink/35 lg:hidden"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div className="min-w-0 flex-1 lg:pl-72">
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200/70 bg-cream/90 px-5 backdrop-blur md:px-8 lg:px-10">
          <button className="rounded-xl p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>

          <label className="hidden w-full max-w-md items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 md:flex">
            <Search size={18} className="text-slate-400" />
            <input className="min-w-0 flex-1 text-sm outline-none" placeholder="Search your campus world..." aria-label="Search" />
            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-500">⌘ K</span>
          </label>

          <div className="ml-auto flex items-center gap-3">
            <button className="relative grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white" aria-label="Notifications">
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-coral" />
            </button>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gold font-display text-sm font-bold">AM</div>
          </div>
        </header>

        <main className="p-5 md:p-8 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
