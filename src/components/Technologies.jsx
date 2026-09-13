import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'

function Technologies({ technologies, stack, onToggle, onRemove, onRemoveAll }) {
  const stackIds = new Set(stack.map((t) => t.id))

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Section heading */}
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          Technology Catalog
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Pick from the <span className="brand-gradient-text">best-in-class</span> tools
        </h2>
        <p className="mt-4 text-slate-500">
          Every technology ships with a rating, difficulty level and category so
          you can choose what fits your project best.
        </p>
      </div>

      {/* Grid + stack sidebar */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_330px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              inStack={stackIds.has(tech.id)}
              onToggle={onToggle}
            />
          ))}
        </div>

        <YourStack
          stack={stack}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
        />
      </div>
    </section>
  )
}

export default Technologies