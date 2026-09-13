import { FaCheck, FaPlus, FaStar } from 'react-icons/fa'

const difficultyColor = {
  'Beginner-Friendly': 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
  Intermediate: 'bg-amber-500/10 text-amber-700 border-amber-500/30',
  Advanced: 'bg-rose-500/10 text-rose-700 border-rose-500/30',
}

function TechnologyCard({ tech, inStack, onToggle }) {
  const isAdded = inStack

  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/10">
      {/* Icon + badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow-inner transition group-hover:scale-105">
          <img src={tech.icon} alt={`${tech.name} logo`} className="h-8 w-8" />
        </div>
        <span className="brand-gradient-bg rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>

      {/* Description */}
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">
        {tech.description}
      </p>

      {/* Category chip + difficulty */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {tech.category}
        </span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${difficultyColor[tech.difficulty] || 'bg-slate-100 text-slate-600 border-slate-200'}`}
        >
          {tech.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-3 flex items-center gap-1 text-sm">
        <FaStar className="text-amber-400" />
        <span className="font-semibold text-slate-900">{tech.rating}</span>
        <span className="text-slate-400">/ 5</span>
      </div>

      {/* Action */}
      <button
        type="button"
        onClick={() => onToggle(tech)}
        disabled={isAdded}
        className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
          isAdded
            ? 'cursor-default border border-emerald-500/30 bg-emerald-500/10 text-emerald-700'
            : 'brand-gradient-bg text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 active:scale-[0.98]'
        }`}
      >
        {isAdded ? (
          <>
            <FaCheck /> Added to Stack
          </>
        ) : (
          <>
            <FaPlus /> Add to Stack
          </>
        )}
      </button>
    </article>
  )
}

export default TechnologyCard