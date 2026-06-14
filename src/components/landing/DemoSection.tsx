import Reveal from './Reveal';
import DemoVideo from './DemoVideo';
import InteractiveDemo from './InteractiveDemo';
import TimeCalculator from './TimeCalculator';

export default function DemoSection() {
  return (
    <section id="demo" className="scroll-mt-20 border-t border-white/10 bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="scale-label">Product demo</p>
          <h2 className="mt-4 scale-headline max-w-2xl">
            See Pulse map meeting notes to HubSpot
          </h2>
          <p className="mt-4 max-w-xl scale-subhead">
            Watch the full walkthrough — extract, review mapped fields, edit, and sync to CRM.
          </p>
        </Reveal>

        <div className="mt-12">
          <DemoVideo />
        </div>

        <Reveal delay={100} className="mt-16">
          <p className="scale-label">Try it yourself</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            From notes to action in two clicks
          </h3>
          <p className="mt-2 max-w-xl text-zinc-400">
            Click through a sample — custom property mapping to your HubSpot schema. No signup required.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-8">
          <InteractiveDemo />
        </Reveal>

        <div className="mt-16">
          <TimeCalculator />
        </div>
      </div>
    </section>
  );
}
