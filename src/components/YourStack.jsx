import { FaLayerGroup } from 'react-icons/fa'
import StackItem from './StackItem'

function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 lg:sticky lg:top-24 lg:self-start">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <FaLayerGroup className="brand-gradient-text" />
            Your Stack
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">
            {count} Technology{count === 1 ? '' : 's'} Selected
          </p>
        </div>

        {count > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-600"
          >
            Remove All
          </button>
        )}
      </div>

      {count === 0 ? (
        <div className="mt-6 flex flex-col items-center rounded-xl border border-dashed border-slate-300 px-6 py-10 text-center">
          <FaLayerGroup className="text-3xl text-slate-300" />
          <p className="mt-3 text-sm font-semibold text-slate-700">
            Your Stack is Empty
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Start adding technologies from the cards to build your ideal stack.
          </p>
        </div>
      ) : (
        <ul className="mt-6 flex max-h-80 flex-col gap-2.5 overflow-y-auto pr-1 lg:max-h-[26rem]">
          {stack.map((tech) => (
            <StackItem key={tech.id} tech={tech} onRemove={onRemove} />
          ))}
        </ul>
      )}

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3 text-center text-xs text-slate-500">
        {count > 0
          ? `${count} stack item${count === 1 ? '' : 's'} ready to go`
          : 'Your stack lives here while you explore'}
      </div>
    </aside>
  )
}

export default YourStack