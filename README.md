# Git Practice — Developer Profile Card

A tiny React Router v7 + Supabase app you'll use to practice the Git workflow: **clone, edit, commit, push, and pull**.

## What is this?

This is a pre-built Developer Profile Card app. Your job is **not** to build it from scratch — it's to practice Git by making changes to it, committing those changes, and pushing them to your own repository.

## Tech Stack

- **React Router v7** (framework mode) — handles pages and routing
- **Supabase** — database and auth (pre-configured client)
- **Tailwind CSS v4** — styling
- **TypeScript** — type-safe JavaScript

---

## Exercise: Step-by-Step Instructions

> **Read each step carefully.** We tell you exactly _where_ to do each thing — your VSCode terminal, your browser, or a specific file.

---

### Step 1: Clone the repository

> 📍 **Where:** Your VSCode terminal (`` Ctrl + ` `` to open it)

First, navigate to where you want to put the project. For example, your Desktop:

```bash
cd ~/Desktop
```

Then clone the repo:

```bash
git clone https://github.com/LoisBN/fpp-git-practice.git
```

Now open the project folder in VSCode:

```bash
cd fpp-git-practice
code .
```

> 💡 **What just happened?** You downloaded a copy of this project from GitHub onto your computer. That's what `git clone` does.

---

### Step 2: Install dependencies and start the app

> 📍 **Where:** Your VSCode terminal (inside the `fpp-git-practice` folder)

Run these commands **one at a time**:

```bash
npm install
```

Wait for it to finish (you'll see a lot of text scroll by — that's normal). Then:

**On Mac/Linux:**
```bash
cp .env.example .env
```

**On Windows (Command Prompt):**
```bash
copy .env.example .env
```

**On Windows (PowerShell):**
```bash
Copy-Item .env.example .env
```

> 💡 **What is this?** The `.env` file stores environment variables (like API keys). For this exercise, the app works fine with the placeholder values — we just need the file to exist.

Now start the development server:

```bash
npm run dev
```

You should see something like:

```
  ➜  Local:   http://localhost:5173/
```

---

### Step 3: See the app running

> 📍 **Where:** Your browser (Chrome, Firefox, Edge, etc.)

Open your browser and go to:

```
http://localhost:5173
```

You should see the **"Welcome to Git Practice"** page with a task list. Click the **"Profile page"** link to see the placeholder profile card.

> 💡 **Leave this tab open!** As you edit files, the page will update automatically.

---

### Step 4: Edit the profile with your info

> 📍 **Where:** VSCode — file explorer on the left side

In VSCode, find and open this file:

```
app/routes/profile.tsx
```

> 💡 **How to find it:** In VSCode, look at the left sidebar (file explorer). Click the `app` folder → `routes` folder → `profile.tsx`. Or press `Ctrl+P` (Windows) / `Cmd+P` (Mac) and type `profile.tsx`.

You'll see a section that looks like this:

```tsx
const developerProfile = {
  name: "Your Name Here",
  role: "Aspiring Full-Stack Developer",
  bio: "I'm learning to build web apps...",
  location: "Earth",
  skills: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/your-username",
  funFact: "Replace this with something fun about yourself!",
};
```

**Replace the placeholder text with your own info!** For example:

```tsx
const developerProfile = {
  name: "Jane Doe",
  role: "Full-Stack Developer in Training",
  bio: "I love building things and I'm learning React and Supabase!",
  location: "Paris, France",
  skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  github: "https://github.com/janedoe",
  funFact: "I can solve a Rubik's cube in under 2 minutes!",
};
```

Save the file (`Ctrl+S` on Windows / `Cmd+S` on Mac).

> 📍 **Where:** Your browser — check `http://localhost:5173/profile`

Go back to your browser. The profile card should automatically update with your info!

---

### Step 5: Commit your changes

> 📍 **Where:** Your VSCode terminal

First, stop the dev server by pressing `Ctrl+C` in the terminal (you can restart it later with `npm run dev`).

> 💡 **You don't have to stop the server** to commit — but it keeps things less confusing for now.

Now run these commands one at a time:

**See what files you changed:**
```bash
git status
```

You should see `app/routes/profile.tsx` listed in red (meaning it's modified but not staged).

**Stage your changes** (tell Git you want to include them in the next commit):
```bash
git add app/routes/profile.tsx
```

**Commit** (save a snapshot of your changes with a message):
```bash
git commit -m "Add my profile info"
```

> 💡 **What just happened?** You created a "commit" — a saved checkpoint of your work. Think of it like a save point in a video game. The message in quotes describes what you changed.

---

### Step 6: Push to GitHub

> 📍 **Where:** Your VSCode terminal

```bash
git push
```

> ⚠️ **First time pushing?** Git might ask you to log in to GitHub. Follow the prompts — it usually opens a browser window to authenticate.

> 💡 **What just happened?** You uploaded your commit from your computer to GitHub. Now your changes are online, and anyone can see them!

---

### Step 7: Make a change on GitHub (practice `git pull`)

> 📍 **Where:** Your browser — go to [github.com](https://github.com)

1. Go to **your** repo on GitHub (the URL will look like `github.com/YOUR-USERNAME/fpp-git-practice`)
2. Click on the `README.md` file
3. Click the **pencil icon** (✏️) in the top right to edit it
4. Add a line at the bottom, like: `> Completed by [Your Name] on [today's date]!`
5. Click **"Commit changes"** (the green button)

Now go back to your VSCode terminal:

> 📍 **Where:** Your VSCode terminal

```bash
git pull
```

Open the `README.md` file in VSCode — you should see the change you made on GitHub now appears locally!

> 💡 **What just happened?** You made a change _on GitHub_ (the remote), and then used `git pull` to download that change to your computer (the local copy). This is how teams stay in sync!

---

## Bonus: Use Claude to Help

If you get stuck on any step, you can ask Claude! Here are some example prompts:

- **"What does `git status` mean?"** — Claude will explain what the command does
- **"I'm getting an error when I run `npm install`, here's what it says: [paste error]"** — Claude can help debug
- **"Can you explain what a commit is in Git?"** — Great for understanding concepts

---

## Project Structure

```
app/
├── routes/
│   ├── home.tsx          ← Landing page (shows your task list)
│   └── profile.tsx       ← ⭐ YOUR PROFILE CARD — edit this file!
├── components/
│   └── ProfileCard.tsx   ← The card component (no need to edit this)
├── lib/
│   └── supabase.ts       ← Supabase client setup (no need to edit this)
├── app.css               ← Global styles
├── root.tsx              ← App shell and layout
└── routes.ts             ← Route definitions
```

---

## Troubleshooting

**"npm install" is taking forever or failing:**
- Make sure you have Node.js installed (version 18 or higher). Check with `node --version`
- Try deleting the `node_modules` folder and `package-lock.json`, then run `npm install` again

**The app won't start (`npm run dev` gives an error):**
- Make sure you're inside the `fpp-git-practice` folder (check with `pwd` on Mac/Linux or `cd` on Windows)
- Make sure you ran `npm install` first
- Make sure the `.env` file exists (see Step 2)

**"git push" says "permission denied" or "authentication failed":**
- You need to fork this repo first (click "Fork" on GitHub), then clone _your_ fork instead of the original
- If you already cloned, update the remote: `git remote set-url origin https://github.com/YOUR-USERNAME/fpp-git-practice.git`

**Page shows a blank screen or error:**
- Open your browser's developer tools (`F12`), go to the Console tab, and look for red error messages
- Try stopping the server (`Ctrl+C`) and restarting it (`npm run dev`)

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
