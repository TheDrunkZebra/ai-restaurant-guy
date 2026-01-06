# ShiftPilot Product Card Update Instructions

## ✅ Completed
1. ✅ Image moved to `public/images/card-shiftpilot.png`
2. ✅ Source component created at `src/ShopTheSystems.jsx`

## 🔧 Next Steps: Update the Minified Bundle

Since the site uses a minified React bundle (`js/index-B62n-Bav.js`), you have two options:

### Option 1: Rebuild from Source (Recommended for Long-term)

1. **Set up a React build environment:**
   ```bash
   cd ai-restaurant-guy
   npm init -y
   npm install react react-dom
   npm install -D vite @vitejs/plugin-react
   ```

2. **Create `vite.config.js`:**
   ```js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     build: {
       outDir: 'dist',
       rollupOptions: {
         input: 'src/main.jsx'
       }
     }
   });
   ```

3. **Update the main component** to use the new `ShopTheSystems` component
4. **Rebuild:** `npm run build`
5. **Copy** the new bundle to replace `js/index-B62n-Bav.js`

### Option 2: Direct Patch (Quick Fix)

Since the bundle is minified, you can directly search and replace in `js/index-B62n-Bav.js`:

**Find this section:**
```javascript
m.jsx("section",{className:"py-20 bg-[#0B0F14]",children:m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[m.jsx("div",{className:"text-center mb-16",children:m.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4 font-display",children:"Shop the Systems"})}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12",children:[
```

**Replace `lg:grid-cols-3` with `md:grid-cols-2`**

**Then find the third product card (Financial Intelligence Engine) and add the ShiftPilot card after it:**

```javascript
m.jsx(Hl,{className:"bg-[#0E131B] border-[#1F2937] hover:border-[#00E0FF]/30 transition-colors h-full",children:m.jsxs(Ke,{className:"p-8 flex flex-col h-full",children:[m.jsx("img",{src:"/images/card-shiftpilot.png",alt:"ShiftPilot Dashboard Screenshot",className:"w-full h-48 object-cover rounded-lg mb-6 bg-[#1F2937]"}),m.jsx(As,{className:"text-2xl text-[#F8FAFC] font-display mb-4",children:"ShiftPilot: The Restaurant Manager's Brain"}),m.jsx("div",{className:"text-4xl font-bold text-[#00E0FF] font-mono mb-4",children:"$97"}),m.jsx(Es,{className:"text-[#94A3B8] mb-4",children:"One-time"}),m.jsx("p",{className:"text-[#94A3B8] mb-6 flex-grow",children:"The cure for decision fatigue. A restaurant-specific AI organizer that takes your chaotic brain dump—'Call Sysco, fix ice machine, payroll'—and instantly builds a prioritized, time-blocked schedule. Adapts specifically for Chefs (Prep/Orders), GMs (Labor/Cash), or Owners (Strategy)."}),m.jsxs("ul",{className:"space-y-3 mb-6",children:[m.jsx("li",{className:"flex items-center gap-2 text-[#94A3B8] text-sm",children:[m.jsx("span",{className:"text-[#00E0FF]",children:"✓"}),"Role-Based AI Logic (Chef/GM/Owner)"]}),m.jsx("li",{className:"flex items-center gap-2 text-[#94A3B8] text-sm",children:[m.jsx("span",{className:"text-[#00E0FF]",children:"✓"}),"Auto-Prioritizes \"Brain Dumps\""]}),m.jsx("li",{className:"flex items-center gap-2 text-[#94A3B8] text-sm",children:[m.jsx("span",{className:"text-[#00E0FF]",children:"✓"}),"Builds 15-min Time Blocks"]})]}),m.jsx(zl,{size:"lg",className:"w-full bg-[#00E0FF] text-[#0B0F14] hover:bg-[#08C7E5] font-semibold rounded-2xl",children:"Buy ShiftPilot - $97",href:"#ShiftPilot-Stripe-Link"})]})})
```

**Important:** Make sure to add this card INSIDE the grid array, after the Financial Intelligence Engine card and before the closing bracket.

## 📝 Summary of Changes

1. **Grid Layout:** Changed from `lg:grid-cols-3` to `md:grid-cols-2` (2x2 layout)
2. **Added ShiftPilot Card:** 4th product with:
   - Image: `/images/card-shiftpilot.png`
   - Title: "ShiftPilot: The Restaurant Manager's Brain"
   - Price: "$97"
   - Description and features as specified
   - Button: "Buy ShiftPilot - $97" linking to `#ShiftPilot-Stripe-Link`
3. **Equal Height Cards:** All cards now have `h-full flex flex-col` for equal height

## 🎯 Final Layout

**Row 1:**
- Landing Page Builder ($497)
- Content Creation Engine ($997)

**Row 2:**
- Financial Intelligence Engine ($2,997)
- ShiftPilot ($97)

