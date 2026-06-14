import { ChevronRight } from 'lucide-react';
import { PILLARS } from './data';
import Reveal from './Reveal';

export default function PillarsSection() {
  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="scale-label">Why Pulse</p>
          <h2 className="mt-4 scale-headline max-w-3xl">
            We set the benchmark for post-call revenue ops
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-950 p-8 transition-all duration-300 hover:border-white/20">
                <div className="mb-6 h-40 rounded-xl bg-gradient-to-br from-zinc-800/80 to-zinc-950 border border-white/5 scale-grid-bg" />
                <h3 className="text-xl font-semibold leading-snug text-white">{pillar.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{pillar.desc}</p>
                <a
                  href={pillar.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-zinc-300"
                >
                  {pillar.cta} <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
