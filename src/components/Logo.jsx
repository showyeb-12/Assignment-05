function Logo({ size = 'md' }) {
  const box = size === 'lg' ? 'h-9 w-9' : 'h-8 w-8'
  const text = size === 'lg' ? 'text-xl' : 'text-lg'

  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span
        className={`${box} brand-gradient-bg inline-flex items-center justify-center rounded-lg shadow-lg shadow-indigo-500/20`}
      >
        <svg viewBox="0 0 32 32" className="h-[60%] w-[60%]" aria-hidden="true">
          <path fill="#fff" d="M16 5l10 5-10 5L6 10z" />
          <path fill="#fff" opacity=".8" d="M6 16l10 5 10-5v4L16 25l-10-5z" />
          <rect x="6" y="15.4" width="20" height="4.6" rx="2.3" fill="#fff" opacity=".5" />
        </svg>
      </span>
      <span className={`${text} font-extrabold tracking-tight text-slate-900`}>
        Dev<span className="brand-gradient-text">Stack</span>
      </span>
    </a>
  )
}

export default Logo