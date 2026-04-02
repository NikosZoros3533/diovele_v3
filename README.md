# React Template (Vite + Tailwind + shadcn)

A minimal, scalable starter template for building React projects using:

- Vite
- React (JavaScript)
- Tailwind CSS
- shadcn/ui

---

## 🚀 Purpose

This repository is designed to act as a **template hub** for starting new projects quickly without repeating setup work.

Instead of configuring everything from scratch each time:

- Clone or use this template
- Remove Git history
- Start building immediately

No boilerplate cleanup. No wasted time.

---

## 📦 Base Stack

- ⚡ Vite (fast dev server & build tool)
- ⚛️ React (JavaScript)
- 🎨 Tailwind CSS
- 🧩 shadcn/ui (optional via presets)

---

## 🧱 Project Structure

```
src/
├── components/
├── lib/
├── pages/
├── hooks/
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧑‍💻 Usage

### Option 1 — Use as GitHub Template (Recommended)

Click **"Use this template"** on GitHub to create a new repo with no history.

---

### Option 2 — Manual Clone (Detached)

```bash
git clone -b base <repo-url> my-app
cd my-app
rm -rf .git
git init
```

---

## 🎨 Installing shadcn/ui

This project is prepared to work with shadcn/ui.

### Standard setup

Run:

```bash
npx shadcn@latest init -t vite
```

This initializes:

- component system
- styling variables
- utilities (`cn`)
- dependencies

The CLI supports multiple frameworks including Vite via the `-t` flag. ([ui.shadcn.com][1])

---

## ⚡ Using shadcn Presets (Recommended)

You can generate a fully configured setup using presets.

👉 Use the official builder:
https://ui.shadcn.com/create?preset=b3GKtLxNbP&template=vite

Presets allow you to:

- bundle theme, components, and config into one code
- reuse the same design system across projects
- skip manual setup entirely

Then run:

```bash
npx shadcn@latest init --preset <your-preset-code>
```

Presets are designed to package your entire UI configuration into a single reusable string. ([ui.shadcn.com][2])

---

## ➕ Adding Components

After initialization:

```bash
npx shadcn@latest add button
```

You can also add multiple components:

```bash
npx shadcn@latest add button card dialog input
```

---

## 🌿 Branch Strategy

This repository is structured to support **modular project setups via branches**:

- `base` → minimal setup (no shadcn)
- `base-ui` → shadcn initialized
- `feat/router` → routing setup
- `feat/auth` → authentication setup
- `feat/ui-*` → UI presets

---

## ⚠️ Important Notes

- This repo is meant to be **copied, not used directly**
- Always remove `.git` if cloning manually
- Do not push changes back to the template repo

---

## 🧭 Next Steps

After setup, you can:

- initialize shadcn
- add components
- switch to feature branches for additional functionality

---

## 📄 License

MIT (optional — add if needed)

[1]: https://ui.shadcn.com/docs/cli?utm_source=chatgpt.com "shadcn - shadcn/ui"
[2]: https://ui.shadcn.com/docs/changelog/2026-03-cli-v4?utm_source=chatgpt.com "March 2026 - shadcn/cli v4 - shadcn/ui"
