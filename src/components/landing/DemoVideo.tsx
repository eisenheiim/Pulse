import Reveal from './Reveal';

export default function DemoVideo() {
  return (
    <Reveal>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/40">
        <video
          className="aspect-video w-full bg-black"
          controls
          playsInline
          preload="metadata"
          src="/PulseDemo.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </Reveal>
  );
}
