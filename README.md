# RootLens AI — Frontend

RootLens AI is an AI-powered incident investigation and documentation platform.

The frontend prototype demonstrates the complete user experience:

- Incident dashboard
- Connected GitHub repository
- Recent commit analysis
- Incident/crash capture
- AI root-cause analysis
- Evidence and confidence
- Affected files
- Incident timeline
- Changes made during incident recovery
- Generated incident report

## Current status

This repository contains the **frontend MVP** with realistic mock data.

The next implementation phase will connect:

1. GitHub API
2. Backend (Node.js + Express)
3. LLM API
4. Real incident/log ingestion
5. Report export
6. Database, if required

## Tech stack

- React
- JavaScript / JSX
- Vite
- Lucide React icons
- CSS

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Frontend flow

```text
Dashboard
   ↓
New Incident
   ↓
Incident Investigation
   ↓
AI Analysis
   ↓
Timeline + Changes During Incident
   ↓
Incident Report
```

## Production architecture

```text
Monitoring / Crash
        ↓
Backend
        ↓
GitHub API ── Recent commits / diffs
        ↓
Context Builder
        ↓
LLM
        ↓
Root Cause + Evidence + Fix
        ↓
React Dashboard
        ↓
Incident Report
```

## Important product principle

RootLens should not require developers to remember every change after an incident.

The production version should automatically reconstruct the incident from available engineering signals such as:

- errors and logs
- Git commits
- changed files
- code diffs
- timestamps
- developers
- recovery commits

Manual incident input should remain available as a fallback when automatic monitoring data is unavailable.

## Demo note

The current prototype intentionally uses mock data so the UI can be developed and tested before connecting external APIs.
