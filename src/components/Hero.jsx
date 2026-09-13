const heroIcons = [
  { src: 'https://icon.icepanel.io/Technology/svg/React.svg', label: 'React', pos: 'left-0 top-0', anim: 'animate-float' },
  { src: 'https://icon.icepanel.io/Technology/svg/Node.js.svg', label: 'Node.js', pos: 'right-4 top-8', anim: 'animate-float-delay' },
  { src: 'https://icon.icepanel.io/Technology/svg/PostgresSQL.svg', label: 'PostgreSQL', pos: 'left-6 bottom-4', anim: 'animate-float-delay' },
  { src: 'https://icon.icepanel.io/Technology/svg/Docker.svg', label: 'Docker', pos: 'right-0 bottom-10', anim: 'animate-float' },
]

function Hero() {
  return (
    <section id="home" className="dev-grid-bg relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            15+ Modern Technologies
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg lg:mx-0">
            Explore hand-picked frontend, backend, database and DevOps
            technologies. Compare ratings and difficulty, then assemble your
            perfect toolkit — one click at a time.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#technologies"
              className="brand-gradient-bg rounded-full px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-500/30 transition hover:opacity-90"
            >
              Explore the Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Banner image — layered stack illustration */}
        <div className="relative mx-auto hidden w-full max-w-md sm:block">
          <div className="pointer-events-none absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-indigo-500/20 blur-2xl" />

          <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-indigo-500/10 backdrop-blur">
            <div className="flex items-center gap-2 rounded-t-xl border-b border-slate-200 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="mt-4 space-y-3">
              {[
                { title: 'Frontend', techs: ['React', 'Next.js', 'Tailwind'] },
                { title: 'Backend', techs: ['Node.js', 'Express'] },
                { title: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis'] },
              ].map((layer) => (
                <div
                  key={layer.title}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <span className="text-sm font-semibold text-slate-800">{layer.title}</span>
                  <span className="font-mono text-xs text-indigo-600">{layer.techs.join(' · ')}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-3 text-center text-xs text-slate-500">
              +2 more layers ready to add
            </div>
          </div>

          {/* Floating tech icon badges */}
          {heroIcons.map((icon) => (
            <div
              key={icon.label}
              className={`absolute ${icon.pos} ${icon.anim} flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-xl`}
              title={icon.label}
            >
              <img src={icon.src} alt={icon.label} className="h-7 w-7" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero