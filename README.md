# Git Practice — Developer Profile Card

A tiny React Router v7 + Supabase app you'll use to practice the Git workflow: **clone, edit, commit, push, and pull**.

## What is this?

This is a pre-built Developer Profile Card app. Your job is **not** to build it from scratch — it's to practice Git by making changes to it, committing those changes, and pushing them to your own repository.

## Tech Stack

- **React Router v7** (framework mode) — handles pages and routing
- **Supabase** — database and auth (pre-configured client)
- **Tailwind CSS v4** — styling
- **TypeScript** — type-safe JavaScript

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment file
cp .env.example .env

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Project Structure

```
app/
├── routes/
│   ├── home.tsx          ← Landing page
│   └── profile.tsx       ← Your profile card (edit this!)
├── components/
│   └── ProfileCard.tsx   ← The profile card component
├── lib/
│   └── supabase.ts       ← Supabase client setup
├── app.css               ← Global styles
├── root.tsx              ← App shell and layout
└── routes.ts             ← Route definitions
```

## Your Exercise Tasks

See the exercise instructions on the course platform for the full task list. The short version:

1. Clone this repo
2. Run the app locally
3. Edit `app/routes/profile.tsx` to add your own info
4. Commit and push your changes
5. Make a change on GitHub and practice `git pull`

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
