# Chakravarthi Portfolio — React + Tailwind CSS

A bold, dark-themed portfolio website inspired by [theqream.com](https://theqream.com) design aesthetic.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠 Tech Stack
- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- Vanilla Canvas API (particle hero animation)
- IntersectionObserver (scroll reveal animations)
- Custom CSS cursor

## 📁 Project Structure

```
src/
├── components/
│   ├── Cursor.jsx       # Custom animated cursor
│   ├── Navbar.jsx       # Sticky nav with mobile menu
│   ├── Hero.jsx         # Animated particle hero
│   ├── MarqueeTicker.jsx # Acid-green scrolling ticker
│   ├── About.jsx        # About section with scan-line card
│   ├── Skills.jsx       # Tabbed skills with progress bars
│   ├── Projects.jsx     # Expandable project cards
│   ├── Experience.jsx   # Work & education timeline
│   ├── Contact.jsx      # Contact section
│   └── Footer.jsx
├── data/
│   └── constants.js     # ← All skills & projects data here
├── hooks/
│   └── useReveal.js     # Scroll reveal hook
├── App.jsx
├── main.jsx
└── index.css
```

## ✏️ Customizing Content

All content is stored in **`src/data/constants.js`**:

- `SKILLS` — Skill categories and proficiency levels
- `SKILL_TAGS` — Tag cloud items
- `PROJECTS` — Project cards with metrics, highlights, and tech stack
- `EXPERIENCE` — Work history
- `MARQUEE_ITEMS` — Scrolling ticker text

## 🎨 Design Tokens

Edit `tailwind.config.js` to customize:
- `acid` (#C8FF00) — Primary accent color
- `carbon` (#0A0A0A) — Background dark
- `ghost` (#F0F0F0) — Text light
