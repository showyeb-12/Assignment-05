import { FaTimes } from 'react-icons/fa'

function StackItem({ tech, onRemove }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-indigo-400/40">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
        <img src={tech.icon} alt={`${tech.name} logo`} className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-900">{tech.name}</p>
        <p className="truncate text-xs text-slate-500">{tech.category}</p>
      </div>

      <button
        type="button"
        onClick={() => onRemove(tech.id)}
        aria-label={`Remove ${tech.name} from stack`}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-rose-500/10 hover:text-rose-600"
      >
        <FaTimes />
      </button>
    </li>
  )
}

export default StackItem