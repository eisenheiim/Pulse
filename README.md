# Pulse

**AI Revenue Ops Copilot** — automates the work between sales calls and your CRM.

Reps spend hours every week retyping meeting notes into HubSpot, drafting follow-ups, and chasing pipeline updates. That admin work is invisible, but it directly slows deals: fields go stale, next steps get missed, and RevOps can't trust the data they report on.

**Pulse exists to close that gap.** It reads your meeting notes, maps them to *your* HubSpot schema, and handles follow-ups and pipeline intelligence — so your team spends time selling, not copying and pasting.

---

## Why automation matters here

Sales automation usually means sequences and dialers. The harder problem is **keeping the CRM accurate after every conversation** — custom properties, stage rules, lifecycle fields, and deal context that differ in every org.

Pulse automates that layer:

- **Extract** structured deal data from raw notes (transcripts, bullets, call summaries)
- **Map** fields to your HubSpot pipelines and custom properties — not a generic template
- **Review** before anything writes to CRM (human-in-the-loop by default)
- **Act** on follow-up emails, risk flags, and team summaries once you approve

The product is built around a simple principle: **automation should remove repetitive RevOps work without removing control.** You decide what syncs, what sends, and what stays manual.

---

## Demo

<p align="center">
  <img src="./PulseDemo.gif" alt="Pulse demo — meeting notes mapped to HubSpot fields" width="900" />
</p>

Full video: [PulseDemo.mp4](./PulseDemo.mp4)

---

## What Pulse automates

| Workflow | What happens |
|----------|----------------|
| **Meeting → CRM** | Notes in → schema-aware HubSpot field mapping out. Edit the preview, then confirm sync. |
| **Follow-ups** | AI drafts recap, thank-you, or next-step emails from meeting context. Send via Gmail when connected. |
| **Pipeline risk** | Scans deals for staleness, missing activity, and stage drift — surfaces what needs attention. |
| **Team summaries** | Weekly digest on the dashboard; push a pipeline summary to Slack on demand. |

**Integrations:** HubSpot · Gmail · Google Calendar · Slack

By default, nothing syncs or sends without approval. Turn on automation per workflow in Settings when your team is ready.

---

## Try it locally

```bash
git clone https://github.com/eisenheiim/Pulse.git
cd Pulse
cp .env.example .env
npm install && npm install --prefix backend && npm install --prefix frontend

docker compose up db -d
npm run db:migrate --prefix backend
npm run db:seed --prefix backend

npm run dev
```

Open **http://localhost:5173** and sign in with the seeded demo account:

| | |
|---|---|
| Email | `demo@pulse.app` |
| Password | `demo1234` |

The walkthrough in the video covers the full product flow.

---

## Configuration

Copy `.env.example` → `.env`. For local dev, defaults + demo mode are enough.

| Need | Set in `.env` |
|------|----------------|
| AI extraction | `OPENAI_API_KEY` |
| Live HubSpot | `HUBSPOT_ACCESS_TOKEN` or OAuth client ID/secret — see [HUBSPOT_SETUP.md](./HUBSPOT_SETUP.md) |
| Gmail / Calendar | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` |
| Slack | `SLACK_CLIENT_ID`, `SLACK_CLIENT_SECRET` |
| Encrypt OAuth tokens (prod) | `TOKEN_ENCRYPTION_KEY` |

Without OAuth keys, Pulse runs in **demo mode** — integrations look connected and sample data works for demos.

---

## Stack

React · TypeScript · Tailwind · Express · PostgreSQL

```
backend/   API, AI extraction, HubSpot/Gmail/Slack integrations
frontend/  App + marketing site (demo video in public/)
```

---

## Security

- bcrypt passwords, JWT auth, OAuth tokens encrypted at rest
- Manual approval for CRM updates and email sends (default)
- Details in the in-app **Security** page

---

## License

Private — all rights reserved.
