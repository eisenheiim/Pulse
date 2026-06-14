import PulseLogo from '../PulseLogo';
import { GITHUB_REPO_URL } from '../../lib/site';

const FOOTER_LINKS = {
  Product: [
    { label: 'Interactive demo', href: '#demo' },
    { label: 'Security', href: '#security' },
    { label: 'FAQ', href: '#faq' },
  ],
  Project: [
    { label: 'GitHub', href: GITHUB_REPO_URL, external: true },
  ],
};

export default function LandingFooter() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <PulseLogo className="h-8 w-auto" light />
              <span className="text-xl font-bold text-white">Pulse</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              AI Revenue Ops Copilot — public landing for a portfolio project. Full application source is private.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="scale-label">{title}</p>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Pulse. Portfolio landing.
          </p>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-zinc-400"
          >
            github.com/eisenheiim/Pulse-landing
          </a>
        </div>
      </div>
    </footer>
  );
}
