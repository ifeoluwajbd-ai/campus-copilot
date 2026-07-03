import { useState } from "react";
import { Bell, Command, Menu, Search, X } from "lucide-react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f7f8fb] transition-colors dark:bg-[#090b10] lg:flex">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && <button className="fixed inset-0 z-30 bg-slate-950/55 backdrop-blur-sm lg:hidden" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}
      <div className="min-w-0 flex-1 lg:pl-[268px]">
        <header className="sticky top-0 z-20 flex h-[72px] items-center border-b border-slate-200/70 bg-[#f7f8fb]/85 px-5 backdrop-blur-xl dark:border-white/[0.07] dark:bg-[#090b10]/85 md:px-8 lg:px-10">
          <button className="mr-3 rounded-xl p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">{menuOpen ? <X /> : <Menu />}</button>
          <label className="hidden w-full max-w-sm items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-400 shadow-sm dark:border-white/10 dark:bg-white/[0.05] md:flex">
            <Search size={16} /><input className="min-w-0 flex-1 bg-transparent text-xs text-slate-900 outline-none placeholder:text-slate-400 dark:text-white" placeholder="Search your workspace..." aria-label="Search" />
            <span className="flex items-center gap-1 rounded-md border border-slate-200 px-1.5 py-0.5 text-[9px] dark:border-white/10"><Command size={9} />K</span>
          </label>
          <div className="ml-auto flex items-center gap-2.5">
            <ThemeToggle />
            <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300" aria-label="Notifications"><Bell size={17} /><span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-coral ring-2 ring-white dark:ring-[#11141b]" /></button>
            <div className="ml-1 flex items-center gap-2.5 border-l border-slate-200 pl-3 dark:border-white/10"><div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-xs font-bold text-white">AM</div><div className="hidden sm:block"><p className="text-xs font-bold">Alex Morgan</p><p className="text-[10px] text-slate-400">Psychology · 2027</p></div></div>
          </div>
        </header>
        <main className="p-5 md:p-8 lg:p-10"><Outlet /></main>
      </div>
    </div>
  );
}
