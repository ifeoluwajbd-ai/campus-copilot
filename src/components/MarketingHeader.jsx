import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function MarketingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/75 backdrop-blur-xl dark:border-white/[0.07] dark:bg-[#080a0f]/75">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" aria-label="Campus Copilot home"><Logo /></Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold text-slate-500 dark:text-slate-400 md:flex">
          <Link to="/#platform" className="transition hover:text-slate-950 dark:hover:text-white">Platform</Link>
          <Link to="/about" className="transition hover:text-slate-950 dark:hover:text-white">About</Link>
          <Link to="/contact" className="transition hover:text-slate-950 dark:hover:text-white">Contact</Link>
        </nav>
        <div className="flex items-center gap-2"><ThemeToggle /><Link to="/dashboard" className="primary-button !px-4 !py-2.5"><span className="hidden sm:inline">Open workspace</span><span className="sm:hidden">Open app</span><ArrowRight size={15} /></Link></div>
      </div>
    </header>
  );
}
