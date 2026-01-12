# Manus Site Analysis & Migration Guide

## 🔍 Comparison: Manus Site vs Current Site

### Key Differences Found

#### **1. Color Scheme**
- **Manus Site**: `bg-[#0B0F14]` (slightly bluer dark background)
- **Current Site**: `bg-[#0D0D0E]` (pure black background)

#### **2. Hero Message**
- **Manus Site**: "Hire a 24/7 AI Crew that runs your restaurant."
- **Current Site**: "RECOVER OVER $100K IN LOST PROFIT."

#### **3. Design Approach**
- **Manus Site**: Focus on "AI Crew" / workforce automation
- **Current Site**: Focus on "Profit Recovery" / revenue recovery

#### **4. Layout Structure** (from HTML analysis)
- Both use React + Vite
- Both use Tailwind CSS
- Manus site has simpler, cleaner structure

---

## 📥 How to Get the Full Source Code from Manus

### Option 1: Download from Manus Editor (RECOMMENDED)

1. **Log into Manus**: Go to https://manus.im and sign in
2. **Open Your Space**: Navigate to space `lxohzush` or find "The AI Restaurant Guy" project
3. **Export/Download**:
   - Look for "Export" or "Download" button in the editor
   - Or check "Settings" → "Export Project"
   - This should give you the full React source code

### Option 2: Use Browser DevTools to Extract

1. **Open the site**: https://lxohzush.manus.space/
2. **Open DevTools**: F12 or Right-click → Inspect
3. **Sources Tab**: 
   - Look in `Sources` → `top` → `lxohzush.manus.space`
   - Find the React components (might be in webpack chunks)
   - This is harder but possible if Manus doesn't have export

### Option 3: Contact Manus Support

- Ask them to export the full source code
- They should be able to provide the React component files

### Option 4: Reverse Engineer from Built Files

- The built JS file (`index-B62n-Bav.js`) contains all the code
- But it's minified and hard to work with
- We can extract component structure, but it's tedious

---

## 🎯 What We Need to Migrate

Based on the HTML analysis, the Manus site has:

1. **Different Hero Section**
   - New headline: "Hire a 24/7 AI Crew that runs your restaurant."
   - Different layout/structure
   - Possibly different form placement

2. **Updated Color Scheme**
   - Background: `#0B0F14` instead of `#0D0D0E`

3. **Different Content/Messaging**
   - Focus shifted from "Profit Recovery" to "AI Crew/Workforce"

4. **Layout Changes**
   - Need to see full structure to compare

---

## 🚀 Migration Steps (Once We Have Source)

1. **Backup Current Site**
   ```bash
   cd apps/ai-restaurant-guy
   git commit -am "Backup before Manus migration"
   ```

2. **Replace Components**
   - Update HeroSection.jsx with Manus version
   - Update color scheme in tailwind.config.js
   - Update App.jsx if structure changed

3. **Test & Deploy**
   - Run `npm run dev` to test locally
   - Build and deploy to Vercel

---

## 🔧 Quick Fix: Update Colors Now

If you want to match the Manus color scheme immediately:

**Update `tailwind.config.js`:**
```js
background: '#0B0F14',  // Change from '#0D0D0E'
```

**Update `src/index.css`:**
```css
--background: #0B0F14;  // Change from #0D0D0E
```

---

## 📋 Next Steps

1. ✅ **Get source code from Manus** (use Option 1 above)
2. ✅ **Share the source files** with me
3. ✅ **I'll help migrate** everything over
4. ✅ **Test and deploy**

---

**Need help?** Once you have the source code, I can help you:
- Compare component by component
- Merge any custom features you want to keep
- Update the design to match exactly
- Ensure everything works before deployment







