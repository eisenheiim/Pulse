import { Brain, CheckCircle, Key, Lock, Shield } from 'lucide-react';
import Reveal from './Reveal';

const SECURITY_INFO = {
  encryption: {
    atRest: 'AES-256-GCM encryption for OAuth tokens at rest',
    inTransit: 'TLS 1.3 for all API communications',
  },
  apiKeys: {
    storage: 'OAuth tokens encrypted at rest, never logged',
    rotation: 'Tokens refreshed automatically via OAuth refresh flows',
  },
  dataUsage: {
    purpose: 'Meeting notes and CRM data processed solely to generate updates, emails, and insights for your organization',
    retention: 'Data retained per your organization settings; deletable on request',
    sharing: 'Never shared with third parties except integration providers you connect',
  },
  aiUsage: {
    provider: 'OpenAI-compatible API',
    processing: 'Meeting notes sent to AI for schema-aware field mapping and email generation only when you trigger those actions',
    training: 'Your data is not used to train AI models',
  },
  approvalWorkflows: {
    crmUpdates: 'Manual approval required by default before CRM changes',
    emailSend: 'Manual approval required by default before sending emails',
  },
};

const SECTIONS = [
  { key: 'encryption' as const, icon: Lock, title: 'Data encryption' },
  { key: 'apiKeys' as const, icon: Key, title: 'API key handling' },
  { key: 'dataUsage' as const, icon: Shield, title: 'Data usage' },
  { key: 'aiUsage' as const, icon: Brain, title: 'AI model usage' },
];

function formatItems(key: typeof SECTIONS[number]['key']) {
  if (key === 'encryption') {
    return [
      { label: 'At rest', value: SECURITY_INFO.encryption.atRest },
      { label: 'In transit', value: SECURITY_INFO.encryption.inTransit },
    ];
  }
  if (key === 'apiKeys') {
    return [
      { label: 'Storage', value: SECURITY_INFO.apiKeys.storage },
      { label: 'Rotation', value: SECURITY_INFO.apiKeys.rotation },
    ];
  }
  if (key === 'dataUsage') {
    return [
      { label: 'Purpose', value: SECURITY_INFO.dataUsage.purpose },
      { label: 'Retention', value: SECURITY_INFO.dataUsage.retention },
      { label: 'Sharing', value: SECURITY_INFO.dataUsage.sharing },
    ];
  }
  return [
    { label: 'Provider', value: SECURITY_INFO.aiUsage.provider },
    { label: 'Processing', value: SECURITY_INFO.aiUsage.processing },
    { label: 'Training', value: SECURITY_INFO.aiUsage.training },
  ];
}

export default function SecuritySection() {
  return (
    <section id="security" className="scroll-mt-20 border-t border-white/10 bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="scale-label">Security & control</p>
          <h2 className="mt-4 scale-headline max-w-2xl">Your data, your rules</h2>
          <p className="mt-4 max-w-xl scale-subhead">
            Encryption, OAuth token handling, and approval workflows before anything syncs — built into the full application.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {SECTIONS.map(({ key, icon: Icon, title }, i) => (
            <Reveal key={key} delay={i * 80}>
              <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 transition-colors hover:border-white/20">
                <Icon className="h-5 w-5 text-zinc-400" />
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <div className="mt-4 space-y-3">
                  {formatItems(key).map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-600">{label}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-zinc-400">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-zinc-400" />
              <h3 className="font-semibold text-white">Approval workflows</h3>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                <p className="text-sm font-medium text-white">CRM updates</p>
                <p className="mt-1 text-sm text-zinc-400">{SECURITY_INFO.approvalWorkflows.crmUpdates}</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/40 p-4">
                <p className="text-sm font-medium text-white">Email sending</p>
                <p className="mt-1 text-sm text-zinc-400">{SECURITY_INFO.approvalWorkflows.emailSend}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
