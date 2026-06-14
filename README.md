# Pulse Landing

Public portfolio site for **Pulse** — AI Revenue Ops Copilot.

This repo contains **only the marketing landing page** (interactive demo, product story, security overview). The full application — backend, AI mapping pipeline, HubSpot integrations — lives in a **private** repository.

<p align="center">
  <img src="./PulseDemo.gif" alt="Pulse demo — meeting notes mapped to HubSpot fields" width="900" />
</p>

---

## What's here

- Scroll-driven product story
- Interactive demo (client-side, no API)
- Demo video walkthrough
- Security & FAQ sections (static content)

## What's not here (private app)

- Express API & PostgreSQL
- HubSpot / Gmail / Slack OAuth
- AI extraction & CRM sync logic

---

## Local dev

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

---

## Deploy on Render

1. Push this repo to GitHub (**public**)
2. Render → **New Static Site** → connect `Pulse-landing`
3. Settings:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Or use the included `render.yaml` blueprint

No environment variables required.

---

## Keep in sync with the main app

When you update landing components in the private `Pulse` repo (`frontend/src/components/landing/`), copy the changed files into this repo:

```bash
# From your machine — adjust paths if needed
cp ../pulse/frontend/src/components/landing/*.tsx src/components/landing/
cp ../pulse/frontend/public/PulseDemo.mp4 public/
```

Then re-apply landing-only tweaks (no login/signup/API calls) before committing.

---

## License

Portfolio project — landing source is public; full product remains private.
