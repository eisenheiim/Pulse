import Reveal from './Reveal';
import { GITHUB_REPO_URL } from '../../lib/site';

export default function FinalCTASection() {
  return (
    <section className="border-t border-white/10 bg-black py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="scale-headline">Automate the work after every call.</h2>
          <p className="mx-auto mt-6 max-w-xl scale-subhead">
            Try the interactive demo or explore this landing repo on GitHub. The full application backend stays private.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#demo" className="scale-btn-primary px-8 py-3">
              Try the demo
            </a>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="scale-btn-outline px-8 py-3"
            >
              View on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
