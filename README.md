# Gentrit Qorri — Portfolio

A clean, modern React portfolio with dark mode, typing effect, scroll reveal animations, and a projects section with live/source code links.

## Tech Stack
- **React 18** + **Vite 5**
- CSS Modules for scoped styling
- No external UI libraries — pure CSS animations

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Adding Your Assets

Place your images inside `/public/assets/`:

| File | Used in |
|------|---------|
| `profile.jpeg` | About Me section |
| `Resume Gentrit Qorri.pdf` | About Me — View Resume button |
| `workout-app.jpg` | Break the Limits project |
| `loop-bar.jpg` | Loop-Bar project |
| `cocktails.jpg` | Cocktails project |
| `robofriends.jpg` | Robofriends project |
| `Github.jpg` | GitHub Profile project |
| `ps5.jpg` | Split-Landing project |
| `groceryy.jpg` | Grocery Bud project |
| `Menu.jpg` | Menu project |

> The images you already have from the old project can be copied directly from their `assets/` folder.

## Customisation

- **Projects** → `src/data/projects.js`
- **Skills** → `src/data/skills.js`
- **Bio text** → `src/components/About.jsx`
- **Typing phrases** → `src/components/Hero.jsx` (`TYPED_TEXTS` array)
- **Social links** → `src/components/Footer.jsx`

## Deploying to Netlify

1. Push to GitHub
2. Connect repo in Netlify dashboard
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable: `NODE_VERSION = 22`
