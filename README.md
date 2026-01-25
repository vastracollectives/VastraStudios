# Vastra Studios

> Culture, craft, and conscience.

**Website:** [Preview locally or deploy to Vercel]

---

## 🎨 Brand Identity

Vastra Studios is the apparel and object division of the VASTRA collective. We focus on "slow fashion"—timeless silhouettes, ethical construction, and a minimalist "Bone & Charcoal" aesthetic.

### Design Tokens
- **Palette:** Bone (`#F7F3EF`), Charcoal (`#222222`)
- **Typography:** Serif (Cormorant Garamond) for headers, Sans (Inter) for systems.

---

## 🛠️ Stack

- **React 18** + **Vite**
- **Vanilla CSS** (Vastra Design System v2.0)
- **React Router** for seamless lookbook navigation.
- **Lucide React** for minimalist iconography.

---

## 📁 Structure

```
VastraStudios/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Studios branding
│   │   ├── ProductCard.jsx   # Grid items for apparel
│   │   └── Layout.jsx        # App wrapper
│   └── pages/
│       ├── Home.jsx          # "Culture & Craft" landing
│       ├── Collections.jsx   # Apparel catalog
│       ├── Lookbook.jsx      # Visual storytelling
│       └── About.jsx         # Study in essentialism
└── vercel.json               # SPA routing
```

---

## 🚀 Development

### Setup
```bash
npm install
npm run dev
```

### Deployment
1. Create a new repository on GitHub.
2. Link the repository:
   ```bash
   git remote add origin https://github.com/your-username/VastraStudios.git
   git push -u origin main
   ```
3. Import to **Vercel** for automatic hosting.

---

© 2024 Vastra Studios. All rights reserved.
