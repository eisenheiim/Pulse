import { MARQUEE_WORDS } from './data';

export default function MarqueeTicker() {
  const words = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <section className="overflow-hidden border-b border-white/10 bg-black py-6">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="mx-8 text-3xl font-semibold tracking-tight text-zinc-800 sm:text-4xl lg:text-5xl"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
