import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import PulseLogo from '../PulseLogo';
import { GITHUB_REPO_URL } from '../../lib/site';

const NAV = [
  { label: 'Product', href: '#demo' },
  { label: 'Security', href: '#security' },
  { label: 'FAQ', href: '#faq' },
];

export default function LandingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <PulseLogo className="h-9 w-auto" />
          <span className="text-2xl font-bold tracking-tight text-black">Pulse</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link group relative text-base font-semibold tracking-wide text-zinc-700 transition-colors duration-300 hover:text-black"
            >
              <span className="relative z-10">{label}</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full" />
              <span className="absolute inset-0 -z-0 scale-75 rounded-lg bg-zinc-100 opacity-0 blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#demo" className="text-sm font-medium text-zinc-700 hover:text-black">
            See demo
          </a>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="scale-btn-dark"
          >
            GitHub
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-zinc-700 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-100 bg-white px-6 py-4 md:hidden">
          {NAV.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block py-3 text-base font-semibold tracking-wide text-zinc-800 transition-colors hover:text-black"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t border-zinc-100 pt-4">
            <a href="#demo" className="text-center text-sm font-medium py-2" onClick={() => setMobileOpen(false)}>See demo</a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="scale-btn-dark w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
