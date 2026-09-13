import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Loading from './components/Loading'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    fetch(`${import.meta.env.BASE_URL}technologies.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load technologies')
        return res.json()
      })
      .then((data) => {
        if (!ignore) setTechnologies(data)
      })
      .catch(() => {
        if (!ignore) {
          setError('Something went wrong while loading the technologies.')
          toast.error('Could not load technologies list')
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [])

  const handleToggle = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  const handleRemove = (id) => {
    const tech = stack.find((item) => item.id === id)
    setStack((prev) => prev.filter((item) => item.id !== id))
    if (tech) toast.info(`${tech.name} removed from your stack`)
  }

  const handleRemoveAll = () => {
    setStack([])
    toast.info('Cleared your entire stack')
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {loading ? (
          <Loading />
        ) : error ? (
          <div className="flex flex-col items-center justify-center gap-3 py-32 text-center">
            <p className="text-lg font-semibold text-slate-900">{error}</p>
            <button
              type="button"
              className="brand-gradient-bg rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        ) : (
          <Technologies
            technologies={technologies}
            stack={stack}
            onToggle={handleToggle}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        )}
      </main>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2200}
        newestOnTop
        closeOnClick
        theme="dark"
        className="text-sm"
      />
    </>
  )
}

export default App