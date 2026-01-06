# 🚀 BUILD INSTRUCTIONS FOR ANTIGRAVITY

## ✅ APPROVAL TO PROCEED WITH BUILD

**You have approval to build the website!** We want you to implement the design you created since it looks much better than our samples.

---

## 🎯 YOUR MISSION

Build the complete React/Vite website with your beautiful design in the `apps/ai-restaurant-guy/` directory.

---

## 📋 IMPLEMENTATION CHECKLIST

### 1. **Structure Confirmation** ✅
- **Location:** `apps/ai-restaurant-guy/`
- **Framework:** React + Vite + Tailwind CSS
- **Build Command:** `npm run build`
- **Output:** `dist/` directory

### 2. **Components to Build** (Complete Files)

#### ✅ Required Components (`src/components/`):
- [ ] `GuaranteeBadge.jsx` - 60-Day Conversion Guarantee badge
- [ ] `TrustIndicators.jsx` - Social proof indicators
- [ ] `MetricsDisplay.jsx` - Metrics display ($72k, 80+ hours, 3%)

#### ✅ Required Sections (`src/sections/`):
- [ ] `HeroSection.jsx` - **CRITICAL: Form above-the-fold**
  - Dream Outcome headline ("Recover $72k...")
  - Guarantee badge prominent
  - Form in right column (visible without scrolling)
  - Trust indicators
  - Two CTAs (Primary + Secondary)
  
- [ ] `ShopTheSystems.jsx` - Product showcase (4 cards)
  - 2x2 grid on desktop
  - Each card: price, title, description, features, CTA
  - Hover effects
  
- [ ] `CaseStudy.jsx` - Metrics and testimonial
  - 4 metrics cards
  - Story section with testimonial
  
- [ ] `RevenueRecoveryAudit.jsx` - Secondary form section
  - **Good Friction:** Include qualification fields:
    - Monthly Revenue Range (dropdown)
    - POS System (dropdown)
    - Likelihood of Implementing Changes (dropdown)
  - Value proposition
  - Trust indicators
  
- [ ] `Footer.jsx` - Simple footer (no "Wildly Refined. Zero Pretense." tagline)

#### ✅ Core Files:
- [ ] `App.jsx` - Main app component (imports all sections)
- [ ] `main.jsx` - React entry point
- [ ] `index.css` - Tailwind + custom styles
- [ ] `index.html` - HTML entry point

#### ✅ Configuration:
- [ ] `package.json` - Dependencies (framer-motion, lucide-react, etc.)
- [ ] `tailwind.config.js` - Tailwind config with colors
- [ ] `vite.config.js` - Vite configuration
- [ ] `vercel.json` - Vercel deployment config

---

## 🎨 DESIGN REQUIREMENTS

### Visual Style:
- **Reference:** Your previous design samples (the nice ones!)
- **Colors:**
  - Background: `#0B0F14`
  - Surface: `#0E131B`
  - Primary: `#00E0FF` (Cyan)
  - Secondary: `#9EF01A` (Green)
  - Text Primary: `#F8FAFC`
  - Text Secondary: `#94A3B8`

### Typography:
- Font: Inter (sans-serif)
- Headlines: Bold, large (text-5xl to text-7xl)
- Body: text-xl, leading-relaxed

---

## 📝 CONTENT REQUIREMENTS (Brand Voice)

### ✅ Headlines (Dream Outcomes - NOT Services):
- ✅ "Recover $72k in Hidden Revenue Your First Year"
- ✅ "Get 80 Hours Back Per Month"
- ❌ NO: "Replace Expensive Agencies With AI Systems"

### ✅ Tone (Seamus Style):
- Bold. Scrappy. Honest.
- Short sentences. No fluff.
- **PROHIBITED PHRASES:**
  - "Nestled in"
  - "Culinary journey"
  - "Mouth-watering"
  - "Delve"
  - Generic AI-speak

### ✅ Guarantee:
- Must be prominent above-the-fold
- Text: "60-DAY CONVERSION GUARANTEE"
- Green badge with shield icon

---

## 🏗️ CRO REQUIREMENTS (Zieman/Hormozi)

### ✅ Hero Section:
- [ ] Form above-the-fold (visible without scrolling on desktop)
- [ ] Dream Outcome headline
- [ ] Guarantee badge prominent
- [ ] Two CTAs (Primary: "Get Free Revenue Audit", Secondary: "View Systems")

### ✅ Forms (Good Friction):
- **Hero Form:** 3-5 fields (name, email, restaurant name)
- **Audit Form:** 7+ fields including:
  - Name, Restaurant, Email, Phone
  - POS System (dropdown)
  - Monthly Revenue Range (dropdown)
  - Likelihood of Implementing Changes (dropdown)

### ✅ Value Stacking:
- Products show: Price + Features + Value
- Guarantee mentioned in multiple places
- Clear outcome focus

---

## 🔧 TECHNICAL REQUIREMENTS

### Build:
- `npm run build` must work
- Output to `dist/` directory
- Production-ready code

### Dependencies:
- react, react-dom
- framer-motion (for animations)
- lucide-react (for icons)
- tailwindcss v4
- vite

### Mobile Responsive:
- Mobile-first design
- Forms stack on mobile
- Touch-friendly buttons
- Test on mobile viewport

---

## 📦 FILES TO REFERENCE

### Design Guidelines:
- `reference/ZEBRA_KNOWLEDGE_BASE.md` - Complete design frameworks
- `reference/voice_config.py` - Brand voice guidelines

### Current Code (For Reference):
- `src/sections/HeroSection.jsx` - Current implementation
- `src/sections/RevenueRecoveryAudit.jsx` - Current form (needs Good Friction fields)

---

## ✅ VERIFICATION

Before marking complete:

1. [ ] Run `npm run build` - builds successfully
2. [ ] All sections render correctly
3. [ ] Form above-the-fold on desktop
4. [ ] Guarantee badge visible
5. [ ] Dream Outcome headline (not service-focused)
6. [ ] Good Friction fields in Audit form
7. [ ] Mobile responsive
8. [ ] No "AI Slop" phrases
9. [ ] Colors match design system
10. [ ] All components import correctly

---

## 🚀 DEPLOYMENT

### Vercel Configuration:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### After Build:
- Files ready in `dist/`
- Can deploy to Vercel
- Should work as standalone React app

---

## 💡 REMINDER

**Use YOUR beautiful design!** We love what you created before. Just make sure to:
- Follow brand voice (no AI-speak)
- Include all CRO requirements (form above-fold, guarantee, Good Friction)
- Use the Dream Outcome headlines
- Make it production-ready

---

## ✅ READY TO BUILD?

**Yes!** Please proceed with building the complete website in `apps/ai-restaurant-guy/` with all the requirements above.

**We want your design - just make sure it follows the brand voice and CRO principles!**

---

**Let's build something amazing! 🚀**

