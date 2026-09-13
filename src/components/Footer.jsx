import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import Logo from './Logo'

const linkGroups = [
  {
    title: 'Product',
    links: ['Explore Technologies', 'Featured Stacks', 'Technology Compare', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press Kit'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses'],
  },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: FaGithub },
  { label: 'Twitter', href: 'https://x.com', icon: FaXTwitter },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn },
]

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        {/* Brand block */}
        <div id="about">
          <Logo size="lg" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
            Dev Stack Builder helps developers discover, compare and curate the
            modern technologies behind today's best products — all in one place.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-600"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Link groups */}
        {linkGroups.map((group) => (
          <div key={group.title} id={group.title === 'Company' ? 'contact' : undefined}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              {group.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    className="text-sm text-slate-500 transition hover:text-indigo-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dev Stack Builder. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#top" className="transition hover:text-indigo-600">
              Privacy
            </a>
            <a href="#top" className="transition hover:text-indigo-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer