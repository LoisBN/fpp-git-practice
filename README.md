# Git Practice — Developer Profile Card

A tiny React Router v7 + Supabase app you'll use to practice the Git workflow: **clone, edit, commit, push, and pull**.

## What is this?

This is a pre-built Developer Profile Card app. Your job is **not** to build it from scratch — it's to practice Git by making changes to it, committing those changes, and pushing them to **your own** GitHub repository.

> ⚠️ **Important:** You will clone this repo from the course account, but you **cannot push back to it** — it's read-only for students. You'll create your own GitHub repo and push there instead. The steps below explain exactly how.

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

> 💡 **What just happened?** You downloaded a copy of this project from GitHub onto your computer. That's what `git clone` does. You cloned the **course** repo — it's read-only for students. You'll create your own repo to push to in Step 6.

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

> 💡 **How to find it:** In VSCode, look at the left sidebar (file explorer). Click the `app` folder, then `routes` folder, then `profile.tsx`. Or press `Ctrl+P` (Windows) / `Cmd+P` (Mac) and type `profile.tsx`.

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

### Step 6: Create YOUR own GitHub repo

> 📍 **Where:** Your browser — go to [github.com](https://github.com)

**Why?** You cloned the course repo, which is **read-only** for students. You cannot push to it. You need to create your own repo to push your work to.

1. Click the **+** icon in the top-right corner of GitHub
2. Select **"New repository"**
3. Name it `fpp-git-practice` (or anything you like)
4. ⚠️ **Do NOT check "Add a README file"** — leave it unchecked!
5. ⚠️ **Do NOT add a .gitignore or license** — leave everything unchecked!
6. Click **"Create repository"**

> ⚠️ **Why must the repo be empty?** Because you already have all the files from the clone. If GitHub creates a README too, Git will get confused because both repos have different starting histories.

You'll see a page with setup instructions — **keep this page open**, you'll need the URL in the next step.

---

### Step 7: Add your repo as a remote and push

> 📍 **Where:** Your VSCode terminal

Right now, your project has one "remote" called `origin` — that's the course repo (read-only). You need to add YOUR repo as a second remote.

**Add your repo as a remote called `myrepo`:**
```bash
git remote add myrepo https://github.com/YOUR-USERNAME/fpp-git-practice.git
```

> ⚠️ **Replace `YOUR-USERNAME`** with your actual GitHub username! For example, if your GitHub is `janedoe`, the URL would be `https://github.com/janedoe/fpp-git-practice.git`

**Push your code to YOUR repo:**
```bash
git push myrepo main
```

> 💡 **First time pushing?** Git might ask you to log in to GitHub. Follow the prompts — it usually opens a browser window to authenticate.

> 📍 **Where:** Your browser — go to your repo at `github.com/YOUR-USERNAME/fpp-git-practice`

Refresh the page. You should see all the project files and your profile changes!

> 💡 **What just happened?** You now have two remotes:
> - `origin` = the course repo (LoisBN's — read-only, you can only pull from it)
> - `myrepo` = YOUR repo (you can push and pull)
>
> You can verify this by running: `git remote -v`

---

### Step 8: Practice `git pull` — edit on GitHub, pull locally

> 📍 **Where:** Your browser — go to **YOUR** repo (not the course repo!)

Go to `github.com/YOUR-USERNAME/fpp-git-practice`:

1. Click on the `README.md` file
2. Click the **pencil icon** (✏️) in the top right to edit it
3. Add a line at the bottom, like: `> Completed by [Your Name] on [today's date]!`
4. Click **"Commit changes"** (the green button)

Now pull that change to your computer:

> 📍 **Where:** Your VSCode terminal

```bash
git pull myrepo main
```

Open the `README.md` file in VSCode — you should see the change you made on GitHub!

> 💡 **What just happened?** You made a change _on GitHub_ (your remote repo), and then used `git pull myrepo main` to download that change to your computer. Notice you pull from `myrepo` — that's YOUR repo. This is how teams stay in sync!

---

## Summary: Key Remotes

| Remote | Points to | Can you push? | Usage |
|--------|-----------|---------------|-------|
| `origin` | Course repo (LoisBN) | ❌ No (read-only) | Pull course updates |
| `myrepo` | Your repo (YOUR-USERNAME) | ✅ Yes | Push your work |

**Quick reference:**
```bash
git push myrepo main     # Push YOUR changes to YOUR repo
git pull myrepo main     # Pull changes from YOUR repo
git remote -v            # See all your remotes
```

---

## Bonus: Use Claude to Help

If you get stuck on any step, you can ask Claude! Here are some example prompts:

- **"I'm getting 'Permission denied' when I push — what do I do?"** — Claude will help you set up your own remote
- **"What does `git remote -v` show and what does it mean?"** — Great for understanding remotes
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

**"Permission denied" or "403 error" when running `git push`:**
- ⚠️ **This is the most common mistake!** You're trying to push to `origin` (the course repo), which is read-only for students
- You need to create your own GitHub repo and push there instead (see Step 6 and Step 7)
- If you already created your repo, make sure you added it as a remote: `git remote add myrepo https://github.com/YOUR-USERNAME/fpp-git-practice.git`
- Then push to it: `git push myrepo main`

**"git push myrepo main" says "rejected" or "failed to push":**
- This can happen if your GitHub repo is not empty. Delete the repo on GitHub, create a new empty one (with NO README), and try again
- Or try: `git push myrepo main --force` (only use this for exercise repos, not real projects!)

**"Running scripts is disabled" error on Windows:**
- Open PowerShell as Administrator: right-click Start Menu, click "Windows PowerShell (Admin)"
- Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
- Type Y and press Enter. Close the admin window and try again in your VSCode terminal

**Page shows a blank screen or error:**
- Open your browser's developer tools (`F12`), go to the Console tab, and look for red error messages
- Try stopping the server (`Ctrl+C`) and restarting it (`npm run dev`)

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
