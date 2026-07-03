export default function BrandMark({ className = "h-9 w-9" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Campus Copilot graduation cap and AI network mark">
      <defs>
        <linearGradient id="brand-mark-bg" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818CF8" />
          <stop offset="0.5" stopColor="#6366F1" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="brand-mark-shine" x1="18" y1="15" x2="46" y2="47" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E0E7FF" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#0F172A" />
      <circle cx="49" cy="14" r="13" fill="url(#brand-mark-bg)" opacity="0.38" />
      <path d="M10 25.5 32 15l22 10.5L32 36 10 25.5Z" fill="url(#brand-mark-shine)" />
      <path d="M19 31v9.2c0 2.9 5.8 6.8 13 6.8s13-3.9 13-6.8V31l-13 6.1L19 31Z" fill="none" stroke="url(#brand-mark-shine)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M53 26v12" stroke="#67E8F9" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="53" cy="41.5" r="3" fill="#67E8F9" />
      <circle cx="24" cy="24" r="2" fill="#818CF8" />
      <circle cx="32" cy="20" r="2" fill="#67E8F9" />
      <circle cx="40" cy="24" r="2" fill="#A5B4FC" />
      <path d="m24 24 8-4 8 4" fill="none" stroke="#0F172A" strokeWidth="1.5" opacity="0.55" />
    </svg>
  );
}
