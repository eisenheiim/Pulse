import { useState } from 'react';
import Reveal from './Reveal';

export default function TimeCalculator() {
  const [meetings, setMeetings] = useState(8);
  const [adminMinutes, setAdminMinutes] = useState(45);

  const savedMinutes = Math.round(meetings * adminMinutes * 0.72);
  const savedHours = Math.floor(savedMinutes / 60);
  const savedMins = savedMinutes % 60;
  const monthlyHours = Math.round((savedMinutes * 4.3) / 60);

  return (
    <Reveal>
      <div className="rounded-2xl border border-white/10 bg-zinc-950 p-8">
        <h3 className="text-xl font-semibold text-white">How much time could your team get back?</h3>
        <p className="mt-2 text-sm text-zinc-400">
          Most reps spend 30–60 minutes after each call on CRM updates and follow-ups.
        </p>

        <div className="mt-8 space-y-8">
          <div>
            <div className="mb-3 flex justify-between text-sm">
              <span className="text-zinc-400">Meetings per week</span>
              <span className="font-semibold text-white">{meetings}</span>
            </div>
            <input type="range" min={2} max={25} value={meetings} onChange={(e) => setMeetings(Number(e.target.value))} className="w-full accent-white" />
          </div>
          <div>
            <div className="mb-3 flex justify-between text-sm">
              <span className="text-zinc-400">Admin minutes per meeting</span>
              <span className="font-semibold text-white">{adminMinutes}m</span>
            </div>
            <input type="range" min={15} max={90} step={5} value={adminMinutes} onChange={(e) => setAdminMinutes(Number(e.target.value))} className="w-full accent-white" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white">{savedHours > 0 ? `${savedHours}h ${savedMins}m` : `${savedMins}m`}</p>
            <p className="mt-1 text-xs text-zinc-500">per week</p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center">
            <p className="text-2xl font-bold text-black">{monthlyHours}h</p>
            <p className="mt-1 text-xs text-zinc-600">per month</p>
          </div>
          <div className="rounded-xl border border-white/10 p-4 text-center">
            <p className="text-2xl font-bold text-white">{Math.round(monthlyHours * 12)}h</p>
            <p className="mt-1 text-xs text-zinc-500">per year</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
