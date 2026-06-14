import { useState } from 'react';
import { ArrowRight, Check, FileText, Mail, Sparkles } from 'lucide-react';

const SAMPLE_NOTES = `Discovery call with Northwind Logistics — June 12

Attendees: Jamie Park (Director of Ops), Alex Rivera (AE)

• They need SSO and audit logs before procurement signs off
• Current vendor contract ends in September
• Budget range: $85–95K annually
• Jamie asked for a security questionnaire by Friday

Next: send questionnaire, schedule technical review with their IT lead.`;

const CRM_FIELDS = [
  { label: 'Deal name', value: 'Northwind Logistics — Enterprise' },
  { label: 'Deal stage', value: 'Proposal' },
  { label: 'Amount', value: '$90,000' },
  { label: 'Security requirements', value: 'SSO + audit logs required' },
  { label: 'Next step', value: 'Send security questionnaire by Friday' },
];

const EMAIL_DRAFT = {
  subject: 'Following up — security questionnaire & next steps',
  body: `Hi Jamie,

Thanks for the conversation today. I appreciated the clarity on your SSO and audit log requirements.

As discussed, I'll send over our security questionnaire by end of week.

Would Thursday or Friday work for a 30-minute follow-up?

Best,
Alex`,
};

type Step = 'idle' | 'crm' | 'email';

export default function InteractiveDemo() {
  const [step, setStep] = useState<Step>('idle');
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (step !== 'idle') return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep('crm'); }, 900);
  };

  const handleEmail = () => {
    if (step !== 'crm') return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep('email'); }, 700);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-zinc-600" />
          <span className="h-2 w-2 rounded-full bg-zinc-600" />
          <span className="h-2 w-2 rounded-full bg-zinc-600" />
        </div>
        <span className="ml-2 text-xs text-zinc-500">Pulse — Schema-aware CRM mapping</span>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
            <FileText className="h-4 w-4 text-zinc-400" />
            Meeting notes
          </div>
          <pre className="max-h-64 overflow-y-auto whitespace-pre-wrap rounded-xl border border-white/5 bg-black/50 p-4 font-sans text-xs leading-relaxed text-zinc-400">
            {SAMPLE_NOTES}
          </pre>
          <button
            onClick={handleGenerate}
            disabled={loading || step !== 'idle'}
            className="scale-btn-primary mt-4 w-full disabled:opacity-50"
          >
            {loading && step === 'idle' ? 'Mapping to your HubSpot...' : step !== 'idle' ? (
              <><Check className="h-4 w-4" /> Mapped</>
            ) : (
              <><Sparkles className="h-4 w-4" /> Map to HubSpot fields</>
            )}
          </button>
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <Sparkles className="h-4 w-4 text-zinc-400" />
              Your HubSpot schema
            </div>
            {step !== 'idle' && (
              <span className="text-[10px] text-zinc-500">Including custom properties</span>
            )}
          </div>

          {step === 'idle' && !loading && (
            <div className="flex h-48 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 text-sm text-zinc-600">
              Click to see schema-aware field mapping
            </div>
          )}

          {(step === 'crm' || step === 'email') && (
            <div className="space-y-2 animate-fade-in">
              {CRM_FIELDS.map((field) => (
                <div key={field.label} className="rounded-lg border border-white/5 bg-black/40 px-3 py-2">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-600">{field.label}</p>
                  <p className="text-sm text-white">{field.value}</p>
                </div>
              ))}
            </div>
          )}

          {(step === 'crm' || step === 'email') && (
            <button onClick={handleEmail} disabled={loading || step === 'email'} className="scale-btn-outline mt-4 w-full disabled:opacity-50">
              {step === 'email' ? <><Check className="h-4 w-4" /> Ready</> : loading ? 'Drafting...' : <><Mail className="h-4 w-4" /> Generate follow-up</>}
            </button>
          )}

          {step === 'email' && (
            <div className="mt-4 animate-slide-up rounded-xl border border-white/10 bg-black/60 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Email draft</p>
              <p className="mt-2 text-sm font-medium text-white">{EMAIL_DRAFT.subject}</p>
              <pre className="mt-2 max-h-32 overflow-y-auto whitespace-pre-wrap font-sans text-xs leading-relaxed text-zinc-400">{EMAIL_DRAFT.body}</pre>
            </div>
          )}
        </div>
      </div>

      {step === 'email' && (
        <div className="flex items-center justify-center gap-2 border-t border-white/10 py-3 text-sm text-zinc-400">
          <Check className="h-4 w-4 text-emerald-500" />
          Mapped to your fields — ready to sync to HubSpot
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      )}
    </div>
  );
}
