# Git Practice — Developer Profile Card

A pre-built React Router v7 profile card app used to practice the full Git workflow: **fork → clone → edit → commit → push**.

## Quick Start

**1. Fork this repo** — Click the **Fork** button at the top right of this page.

**2. Clone your fork:**
```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/fpp-git-practice.git
cd fpp-git-practice
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

> **Windows users:** If you get a "running scripts is disabled" error, open PowerShell as Admin and run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

## Exercise Instructions

This repo is part of the **From Prompt to Production** course.

👉 **[Find the full exercise instructions on the course platform](https://aicode-academy.com)**

Don't follow random tutorials — the exercise page has the exact tasks, hints, and completion criteria you need.

## Tech Stack

- React Router v7 (framework mode)
- Tailwind CSS v4
- TypeScript

## Project Structure

```
app/
├── routes/
│   ├── home.tsx          ← Landing page
│   └── profile.tsx       ← ⭐ The file you'll edit
├── components/
│   └── ProfileCard.tsx   ← Card display component
├── root.tsx              ← App shell
└── routes.ts             ← Route definitions
```

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
