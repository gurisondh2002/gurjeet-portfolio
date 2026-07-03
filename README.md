# Gurjeet Kaur — Developer Portfolio

A modern, animated single-page portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features
- Typing animation with role rotation in the hero
- Floating side-nav dots for active-section tracking
- Responsive design (mobile & desktop)
- Dark navy + electric teal theme
- Timeline-based experience section
- Categorized skills with color-coded pills
- Project cards with tech stack tags
- Contact cards + email CTA

---

## 🚀 How to Run

### Prerequisites
- **Node.js** v18 or later → https://nodejs.org
- **npm** (comes with Node)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser.

### Production build
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
gurjeet-portfolio/
├── app/
│   ├── globals.css      ← All global styles
│   ├── layout.tsx       ← Root layout with metadata
│   └── page.tsx         ← Composes all sections
├── components/
│   ├── Navbar.tsx       ← Top nav + side dots
│   ├── Hero.tsx         ← Typing animation hero
│   ├── About.tsx        ← Summary + education
│   ├── Skills.tsx       ← Categorised skill pills
│   ├── Experience.tsx   ← Timeline of jobs
│   ├── Projects.tsx     ← Project cards
│   ├── Contact.tsx      ← Contact links + CTA
│   └── Footer.tsx
├── lib/
│   └── data.ts          ← All resume content (edit here!)
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Customisation

All content lives in **`lib/data.ts`** — update your name, email, GitHub link, experience, skills, and projects there. No other files need to be touched for content changes.

To change the accent color, update `#00D4AA` (teal) in `tailwind.config.ts` and `globals.css`.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling |
| React Icons | Icon set |
| Google Fonts | Space Grotesk + Inter |
