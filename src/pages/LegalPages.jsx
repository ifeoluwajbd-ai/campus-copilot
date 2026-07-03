import MarketingFooter from "../components/MarketingFooter";
import MarketingHeader from "../components/MarketingHeader";

const privacySections = [
  { title: "Information we collect", text: "Campus Copilot may store profile details, academic planning information, preferences, and wellness check-ins that you intentionally add to your workspace. This starter application currently uses local sample data and does not transmit it to a production backend." },
  { title: "How information is used", text: "Information is used to personalize planning suggestions, calculate progress, identify workload patterns, and improve the relevance of career and wellness recommendations." },
  { title: "Your wellness information", text: "Wellness inputs are treated as sensitive. Campus Copilot is a planning and educational tool, not a medical provider, and its burnout insights are not a diagnosis." },
  { title: "Data sharing", text: "We do not sell personal information. When third-party services are introduced, they should receive only the information necessary to provide their specific function." },
  { title: "Your choices", text: "You may review, change, export, or delete information associated with your workspace. Contact us for privacy questions or requests." }
];

const termsSections = [
  { title: "Using Campus Copilot", text: "Campus Copilot provides productivity, academic planning, career exploration, and general wellness tools. You are responsible for the accuracy of information you add and for using the platform lawfully." },
  { title: "Educational guidance", text: "Recommendations are informational and should not replace guidance from instructors, academic advisors, career professionals, counselors, or healthcare providers." },
  { title: "Accounts and security", text: "When accounts are enabled, you are responsible for protecting your sign-in credentials and notifying us about suspected unauthorized access." },
  { title: "Acceptable use", text: "Do not misuse the platform, attempt unauthorized access, interfere with other users, or use Campus Copilot to violate another person’s rights." },
  { title: "Changes and availability", text: "Features may evolve as the product grows. We aim for a reliable experience but cannot guarantee uninterrupted availability in every circumstance." }
];

function LegalPage({ title, eyebrow, introduction, sections }) {
  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-[#080a0f] dark:text-white"><MarketingHeader /><main className="px-5 pb-28 pt-36 md:px-8 md:pt-44"><div className="mx-auto max-w-3xl"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 font-display text-5xl font-extrabold tracking-[-0.05em] md:text-6xl">{title}</h1><p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">{introduction}</p><div className="mt-7 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-[10px] font-semibold text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-300">Last updated July 3, 2026 · This document describes the Campus Copilot product experience.</div><div className="mt-14 space-y-10">{sections.map((section, index) => <section key={section.title} className="grid gap-4 border-t border-slate-200/70 pt-8 dark:border-white/[0.08] sm:grid-cols-[48px_1fr]"><span className="font-display text-sm font-bold text-brand-500">0{index + 1}</span><div><h2 className="font-display text-xl font-bold">{section.title}</h2><p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">{section.text}</p></div></section>)}</div><div className="mt-14 rounded-2xl bg-slate-950 p-6 text-white dark:bg-[#11141b]"><h2 className="font-display text-lg font-bold">Questions about this document?</h2><p className="mt-2 text-xs leading-5 text-white/50">Email legal@campuscopilot.app and we’ll help clarify anything that feels unclear.</p></div></div></main><MarketingFooter /></div>
  );
}

export function PrivacyPage() { return <LegalPage eyebrow="Your data" title="Privacy Policy" introduction="We believe students should understand what happens to their information. This policy explains the principles guiding how Campus Copilot handles data." sections={privacySections} />; }
export function TermsPage() { return <LegalPage eyebrow="The agreement" title="Terms of Service" introduction="These terms set expectations for using Campus Copilot responsibly and explain the role the platform plays in your academic and personal planning." sections={termsSections} />; }
