import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GITHUB_REPO_URL } from '../../lib/site';
import { WORD_STAT } from './data';

const PANEL_COUNT = 3;
/** Viewport height + this much scroll per panel transition (lower = faster switching) */
const SCROLL_VH_PER_PANEL = 40;
const TRACK_HEIGHT_VH = 100 + (PANEL_COUNT - 1) * SCROLL_VH_PER_PANEL;

type Panel = {
  id: string;
  label?: string;
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
};

const PANELS: Panel[] = [
  {
    id: 'hero',
    title: "The world's sales teams need a CRM that keeps up.",
    subtitle:
      'Pulse learns your HubSpot schema and maps meeting notes to the right deal fields — custom properties, stages, and lifecycle — with your approval.',
    actions: (
      <>
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
      </>
    ),
  },
  {
    id: 'platform',
    label: 'Platform',
    title: 'Reliable revenue ops has no shortcuts.',
    subtitle:
      'Pulse is the AI copilot for sales and RevOps teams — built to turn meeting notes into CRM updates, follow-ups, and pipeline intelligence you can trust.',
    actions: (
      <>
        <a href="#demo" className="scale-btn-primary">
          See the demo
        </a>
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="scale-btn-outline"
        >
          GitHub
        </a>
      </>
    ),
  },
  {
    id: 'applications',
    label: 'Applications',
    title: 'Revenue operations that actually work.',
    subtitle:
      'From meeting notes to HubSpot deals, Gmail follow-ups, and Slack summaries — Pulse handles the workflow your team keeps putting off.',
    actions: (
      <a href="#demo" className="scale-btn-outline inline-flex">
        See how it works <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
      </a>
    ),
  },
];

function WordStatLine({ active }: { active: boolean }) {
  return (
    <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-lg font-medium text-zinc-600 sm:text-xl lg:text-2xl">
      {WORD_STAT.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`inline-block transition-all duration-700 ${
            active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          } ${['5+', 'hours', 'Pulse'].includes(word) ? 'text-white' : ''}`}
          style={{ transitionDelay: active ? `${i * 60}ms` : '0ms' }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default function PinnedStorySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const updateFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const scrollable = track.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;

    const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
    const p = scrolled / scrollable;
    setProgress(p);
    setActiveIndex(Math.min(PANEL_COUNT - 1, Math.floor(p * PANEL_COUNT)));
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    updateFromScroll();
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);
    return () => {
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
    };
  }, [reducedMotion, updateFromScroll]);

  if (reducedMotion) {
    return (
      <div className="bg-black">
        {PANELS.map((panel) => (
          <section key={panel.id} className="flex min-h-[calc(100vh-4rem)] flex-col justify-center border-b border-white/10 px-6 py-24">
            <PanelContent panel={panel} showWordStat={panel.id === 'hero'} wordStatActive />
          </section>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={trackRef}
      className="relative bg-black"
      style={{ height: `${TRACK_HEIGHT_VH}vh` }}
      aria-label="Product story"
    >
      <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col overflow-hidden">
        {/* Shared background */}
        <div className="pointer-events-none absolute inset-0 scale-hero-gradient" />
        <div className="pointer-events-none absolute inset-0 scale-grid-bg opacity-20" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-pulse-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Panels */}
        {PANELS.map((panel, i) => {
          const isActive = i === activeIndex;
          const distance = Math.abs(i - activeIndex);
          return (
            <div
              key={panel.id}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700 ease-out lg:px-8"
              style={{
                opacity: distance === 0 ? 1 : 0,
                transform: distance === 0 ? 'translateY(0)' : i < activeIndex ? 'translateY(-32px)' : 'translateY(32px)',
                pointerEvents: isActive ? 'auto' : 'none',
                zIndex: isActive ? 10 : 0,
              }}
              aria-hidden={!isActive}
            >
              <PanelContent
                panel={panel}
                showWordStat={panel.id === 'hero'}
                wordStatActive={isActive && panel.id === 'hero'}
              />
            </div>
          );
        })}

        {/* Progress dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
          {PANELS.map((panel, i) => (
            <div
              key={panel.id}
              className={`rounded-full transition-all duration-500 ${
                i === activeIndex ? 'h-2 w-8 bg-white' : 'h-2 w-2 bg-white/30'
              }`}
              aria-label={`Section ${i + 1} of ${PANEL_COUNT}`}
            />
          ))}
        </div>

        {/* Scroll progress bar (right edge) */}
        <div className="absolute right-4 top-1/2 z-20 hidden h-32 w-px -translate-y-1/2 bg-white/10 md:block lg:right-8">
          <div
            className="w-full bg-white transition-all duration-150"
            style={{ height: `${Math.max(8, progress * 100)}%` }}
          />
        </div>

        {activeIndex < PANEL_COUNT - 1 && (
          <div className="absolute bottom-8 right-6 z-20 hidden animate-pulse text-xs text-zinc-500 md:block lg:right-10">
            Scroll
          </div>
        )}
      </div>
    </div>
  );
}

function PanelContent({
  panel,
  showWordStat,
  wordStatActive,
}: {
  panel: Panel;
  showWordStat?: boolean;
  wordStatActive?: boolean;
}) {
  const TitleTag = panel.id === 'hero' ? 'h1' : 'h2';

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      {panel.label && <p className="scale-label">▼ {panel.label}</p>}
      <TitleTag className={`scale-headline max-w-4xl ${panel.label ? 'mt-6' : ''}`}>
        {panel.title}
      </TitleTag>
      <p className="mx-auto mt-6 max-w-2xl scale-subhead">{panel.subtitle}</p>
      {showWordStat && <WordStatLine active={!!wordStatActive} />}
      {panel.actions && (
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {panel.actions}
        </div>
      )}
    </div>
  );
}
