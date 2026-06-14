import {
  AlertTriangle,
  BarChart3,
  Building2,
  Calendar,
  Clock,
  Database,
  FileText,
  Key,
  Lock,
  Mail,
  MessageSquare,
  PenLine,
  Shield,
  Slack,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react';

export const PAINS = [
  {
    icon: Clock,
    title: 'Notes sit in docs for days',
    desc: 'You had a great call. The CRM still says "discovery" because nobody had time to update it.',
  },
  {
    icon: PenLine,
    title: 'Follow-ups take too long',
    desc: 'Writing a thoughtful recap after your fifth meeting of the day? It often does not happen.',
  },
  {
    icon: Database,
    title: 'CRM data goes stale',
    desc: 'Stages, next steps, and contact details drift. Pipeline reviews become guesswork.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk shows up too late',
    desc: 'Deals go quiet. By the time someone notices, the window to save them has narrowed.',
  },
  {
    icon: MessageSquare,
    title: 'Leadership wants summaries',
    desc: 'Weekly pipeline updates mean hours pulling data, writing Slack posts, and chasing reps.',
  },
];

export const FEATURES = [
  {
    icon: FileText,
    title: 'Meeting notes → CRM',
    desc: 'Paste a transcript or notes. Pulse learns your HubSpot schema and maps deal stages, custom properties, and lifecycle fields — you review and edit before sync.',
  },
  {
    icon: Mail,
    title: 'Follow-up generation',
    desc: 'Generate a personalized email from meeting context. Edit it, then send through Gmail.',
  },
  {
    icon: TrendingUp,
    title: 'Pipeline risk detection',
    desc: 'Pulse flags deals that are stalling, overdue, or missing key activity — before quarter-end surprises.',
  },
  {
    icon: BarChart3,
    title: 'Weekly summary',
    desc: 'Get a clear pipeline digest every week — what moved, what stalled, and what needs attention.',
  },
  {
    icon: Slack,
    title: 'Slack summaries',
    desc: 'Daily or weekly pipeline digests posted to your team channel. No manual report building.',
  },
  {
    icon: Database,
    title: 'HubSpot-native mapping',
    desc: 'Every org\'s HubSpot is different. Pulse syncs your schema — deal stages, custom properties, lifecycle stages — and learns from your corrections.',
  },
  {
    icon: Shield,
    title: 'Settings & policies',
    desc: 'Control approval workflows, notification preferences, and what gets synced automatically.',
  },
];

export const STEPS = [
  {
    num: '01',
    title: 'Connect your CRM and tools',
    desc: 'Connect HubSpot — Pulse syncs your deal pipelines, custom properties, and lifecycle stages automatically.',
  },
  {
    num: '02',
    title: 'Paste meeting notes',
    desc: 'Drop in a transcript, bullet points, or rough notes after a call.',
  },
  {
    num: '03',
    title: 'Review CRM updates',
    desc: 'Pulse maps extracted data to your HubSpot fields and proposes CRM changes. You edit and approve before anything syncs.',
  },
  {
    num: '04',
    title: 'Get follow-ups and summaries',
    desc: 'Send follow-up emails, flag at-risk deals, and share pipeline summaries with your team.',
  },
];

export const INTEGRATIONS = [
  { name: 'HubSpot', color: 'bg-orange-50 text-orange-700 ring-orange-100' },
  { name: 'Gmail', color: 'bg-red-50 text-red-700 ring-red-100' },
  { name: 'Google Calendar', color: 'bg-emerald-50 text-emerald-700 ring-emerald-100' },
  { name: 'Slack', color: 'bg-purple-50 text-purple-700 ring-purple-100' },
];

export const AUDIENCES = [
  {
    icon: Building2,
    title: 'B2B SaaS companies',
    desc: 'Teams with long sales cycles, multiple stakeholders, and detailed discovery calls.',
  },
  {
    icon: Users,
    title: 'Sales Ops & RevOps',
    desc: 'People who own CRM hygiene, reporting, and the tools reps actually use.',
  },
  {
    icon: UserCheck,
    title: 'Sales managers',
    desc: 'Leaders who need accurate pipeline data without chasing reps for updates.',
  },
  {
    icon: Database,
    title: 'HubSpot users',
    desc: 'Teams already living in HubSpot who want post-call admin to happen automatically.',
  },
];

export const SECURITY_ITEMS = [
  {
    icon: Lock,
    title: 'Data encryption',
    desc: 'Data encrypted at rest and in transit. Connections to your CRM and email use industry-standard TLS.',
  },
  {
    icon: Key,
    title: 'API key handling',
    desc: 'Integration tokens stored securely. You can disconnect any tool at any time from your settings.',
  },
  {
    icon: Shield,
    title: 'Approval workflows',
    desc: 'Choose manual approval for CRM updates and email sends — or automate what you trust.',
  },
  {
    icon: Calendar,
    title: 'You stay in control',
    desc: 'Decide what Pulse can access, what runs automatically, and what needs a human sign-off.',
  },
];

export const METRICS = [
  { value: '5+ hrs', label: 'saved per rep, per week' },
  { value: '90%', label: 'follow-up rate after calls' },
  { value: 'Same day', label: 'CRM updates from meetings' },
];

export const LOGOS = ['Northwind', 'Brightpath', 'Globex', 'Acme SaaS', 'Vertex', 'Clearline'];

export const TESTIMONIALS = [
  {
    quote: 'We used to spend Monday mornings cleaning up the CRM from the week before. Pulse cut that down to a quick review on Friday afternoon.',
    name: 'Jamie Park',
    role: 'Director of Sales Ops',
    company: 'Northwind Logistics',
  },
  {
    quote: 'The follow-up drafts actually reference what was discussed on the call. Reps edit them in two minutes instead of writing from scratch.',
    name: 'Sarah Chen',
    role: 'VP Sales',
    company: 'Brightpath Analytics',
  },
  {
    quote: 'Our weekly pipeline summary used to take me an hour. Now it posts to Slack before I finish my coffee.',
    name: 'Mike Torres',
    role: 'RevOps Lead',
    company: 'Globex Platform',
  },
];

export const MARQUEE_WORDS = [
  'CRM Updates',
  'Pipeline',
  'Follow-ups',
  'HubSpot',
  'RevOps',
  'Slack',
  'Meetings',
  'Forecasting',
  'Custom Properties',
  'Field Mapping',
  'Lifecycle',
  'Calendar',
];

export const CASE_STUDIES = [
  {
    headline: 'Turning meeting notes into CRM updates without chasing reps.',
    company: 'Northwind Logistics',
    gradient: 'from-blue-900/40 to-zinc-900',
  },
  {
    headline: 'Cutting follow-up time from 20 minutes to under two per call.',
    company: 'Brightpath Analytics',
    gradient: 'from-violet-900/40 to-zinc-900',
  },
  {
    headline: 'Weekly pipeline summaries posted to Slack before Monday standup.',
    company: 'Globex Platform',
    gradient: 'from-emerald-900/40 to-zinc-900',
  },
  {
    headline: 'Same-day CRM hygiene across a 40-person sales team.',
    company: 'Vertex Systems',
    gradient: 'from-amber-900/40 to-zinc-900',
  },
  {
    headline: 'Pipeline risk flags surfaced before deals went quiet.',
    company: 'Clearline Health',
    gradient: 'from-rose-900/40 to-zinc-900',
  },
];

export const PILLARS = [
  {
    title: 'Mapping intelligence, not generic extract.',
    desc: 'Pulse syncs your HubSpot schema on connect — deal pipelines, custom properties, lifecycle stages. Every correction makes the next mapping smarter for your team.',
    cta: 'See mapping demo',
    href: '#demo',
  },
  {
    title: 'Built for how sales teams actually work.',
    desc: 'Pulse handles the post-call admin that reps skip — CRM updates, follow-ups, and next-step logging — so your pipeline reflects reality.',
    cta: 'Learn more',
    href: '#demo',
  },
  {
    title: 'The standard for RevOps automation.',
    desc: 'From meeting notes to HubSpot deals, Gmail follow-ups, and Slack summaries — one workflow instead of five disconnected tools.',
    cta: 'See how it works',
    href: '#demo',
  },
  {
    title: 'Your data. Your approvals. Your rules.',
    desc: 'Nothing syncs without your sign-off unless you choose otherwise. Encrypted connections, approval workflows, and full control over automation.',
    cta: 'Security details',
    href: '#security',
  },
];

export const WORD_STAT = [
  'Teams', 'using', 'Pulse', 'save', '5+', 'hours', 'per', 'rep', 'every', 'week.',
];

export const FAQ_ITEMS = [
  {
    q: 'How does Pulse work with my CRM?',
    a: 'Connect HubSpot and Pulse syncs your schema — pipelines, custom properties, and lifecycle stages. After a call, paste notes and Pulse maps them to your fields. Nothing syncs until you approve.',
  },
  {
    q: 'Is my data safe?',
    a: 'Yes. Data is encrypted in transit and at rest. Integration tokens are stored securely, and you can disconnect any tool at any time. Pulse only accesses what you authorize during setup.',
  },
  {
    q: 'Can I control what is automatic?',
    a: 'Fully. You can require approval for CRM updates and email sends, set default templates, and choose which notifications you receive. Automatic sync is opt-in, not the default.',
  },
  {
    q: 'Do I need to be technical?',
    a: 'No. Connect HubSpot (about 5 minutes), review suggested field mappings, paste a sample note, and Pulse maps to your CRM dialect — not a generic template.',
  },
  {
    q: 'How much time does it save?',
    a: 'Most teams save 30–60 minutes per meeting on CRM updates, follow-ups, and logging. For a rep with 8 calls a week, that is often 4–6 hours back — use the calculator on this page to estimate for your team.',
  },
];
