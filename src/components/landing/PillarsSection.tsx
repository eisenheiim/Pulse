import { useState } from 'react';
import { Brain, ChevronRight, Shield, Sparkles, Workflow } from 'lucide-react';
import { PILLARS } from './data';
import Reveal from './Reveal';

const PILLAR_ICONS = [Brain, Workflow, Sparkles, Shield];

export default function PillarsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-t border-white/10 bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="scale-label">Why Pulse</p>
          <h2 className="mt-4 scale-headline max-w-3xl">
            We set the benchmark for post-call revenue ops
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-3">
          {PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? Sparkles;
            const isActive = activeIndex === i;

            return (
              <Reveal key={pillar.title} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : i)}
                  className={`group w-full rounded-2xl border text-left transition-all duration-500 ${
                    isActive
                      ? 'border-white/25 bg-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.04)]'
                      : 'border-white/10 bg-zinc-950/60 hover:border-white/20 hover:bg-zinc-950'
                  }`}
                >
                  <div className="flex items-start gap-5 p-6 sm:p-8">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${
                        isActive
                          ? 'border-pulse-500/40 bg-pulse-600/20 text-pulse-300'
                          : 'border-white/10 bg-white/5 text-zinc-400 group-hover:border-white/20 group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`text-lg font-semibold leading-snug transition-colors duration-300 sm:text-xl ${
                            isActive ? 'text-white' : 'text-zinc-200 group-hover:text-white'
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <ChevronRight
                          className={`h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-500 ${
                            isActive ? 'rotate-90 text-white' : 'group-hover:translate-x-0.5 group-hover:text-zinc-300'
                          }`}
                        />
                      </div>

                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          isActive ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                            {pillar.desc}
                          </p>
                          <a
                            href={pillar.href}
                            onClick={(e) => e.stopPropagation()}
                            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-pulse-300 transition-colors hover:text-pulse-200"
                          >
                            {pillar.cta} <ChevronRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
