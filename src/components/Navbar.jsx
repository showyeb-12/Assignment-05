import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#technologies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div
        className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-4 px-4 py-3.5 sm:px-6
          lg:grid-cols-[1fr_auto_1fr] lg:px-8"
      >
        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-100
            lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile centered brand */}
        <div className="justify-self-center lg:hidden">
          <Logo />
        </div>

        {/* Desktop brand (left) */}
        <div className="hidden lg:flex lg:justify-start">
          <Logo />
        </div>

        {/* Desktop nav links (center) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Auth buttons (right) */}
        <div className="hidden items-center gap-3 lg:flex lg:justify-end">
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="brand-gradient-bg rounded-full px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-90"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile auth buttons (right) */}
        <div className="flex items-center justify-self-end gap-2 lg:hidden">
          <a
            href="#contact"
            className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="brand-gradient-bg rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-90"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="border-t border-slate-200 bg-white/95 px-4 py-3 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar