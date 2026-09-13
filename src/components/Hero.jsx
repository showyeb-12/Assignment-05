function Hero() {
  return (
    <section id="home" className="dev-grid-bg relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            12+ Modern Technologies
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

        {/* Banner image — container illustration */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div className="pointer-events-none absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-indigo-500/20 blur-2xl" />
          <img
            src={`${import.meta.env.BASE_URL}images/Container.png`}
            alt="Stack container illustration"
            className="w-full rounded-[2rem] border border-white/40 shadow-2xl shadow-indigo-500/20"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;