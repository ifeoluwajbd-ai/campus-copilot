export default function PageHeader({ eyebrow, title, description, action }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div className="animate-rise">
        <p className="eyebrow mb-2">{eyebrow}</p>
        <h1 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-slate-950 dark:text-white md:text-[2.35rem]">{title}</h1>
        {description && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>}
      </div>
      {action}
    </div>
  );
}
