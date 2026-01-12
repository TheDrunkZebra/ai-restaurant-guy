# 🎨 HERO SECTION UPDATE: Replace Form with Portrait Image

## 🎯 REQUEST

**Replace the right-side form in HeroSection with the portrait image.**

---

## 📋 WHAT TO CHANGE

### **KEEP (Left Side):**
- Keep the left column content exactly as is
- The text that says: "RECOVER OVER $100K IN LOST PROFIT. We don't do 'consulting.' We deploy the **Profit Protocol**—specialized agents designed to find bleeding cash in your operations."
- Guarantee badge
- CTAs
- Trust indicators

### **REPLACE (Right Side):**
- **REMOVE:** The entire form section (lines 55-111 in HeroSection.jsx)
- **REPLACE WITH:** Portrait image

---

## 🖼️ IMAGE TO USE

**File Location:**
- `public/seamus-portrait.jpg` (if using relative path: `/seamus-portrait.jpg`)
- OR: `assets/seamus-obrien-portrait-hero.jpg` (if copying to public folder)

**Image Path for React:**
```jsx
<img src="/seamus-portrait.jpg" alt="Seamus O'Brien" />
```

---

## 🎨 DESIGN REQUIREMENTS

### **Styling:**
- Make the image fit beautifully in the right column
- Maintain the same grid layout (2 columns on desktop)
- Image should be:
  - Properly sized and cropped
  - Rounded corners (match the form's rounded-2xl style)
  - Professional, elegant presentation
  - Consider adding subtle border or shadow to match the design system

### **Responsive:**
- On mobile: Image should stack below the text (maintain current responsive behavior)
- On desktop: Image on right, text on left (current layout)

### **Visual Treatment Options:**
- Consider adding a subtle border (border-white/10 or border-white/5)
- Maybe a shadow (shadow-2xl or shadow-xl)
- Rounded corners (rounded-2xl or rounded-xl)
- Consider object-fit: cover or contain based on what looks best
- Optional: Add a subtle gradient overlay if it improves readability/design

---

## 📝 CODE STRUCTURE

**Replace this section:**
```jsx
{/* Right Column: Form */}
<div className="bg-surface border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm relative">
  {/* ... entire form code ... */}
</div>
```

**With something like:**
```jsx
{/* Right Column: Portrait */}
<div className="relative">
  <img 
    src="/seamus-portrait.jpg" 
    alt="Seamus O'Brien - The AI Restaurant Guy"
    className="rounded-2xl shadow-2xl object-cover w-full h-auto"
  />
</div>
```

**Adjust styling as needed to match the design aesthetic!**

---

## ✅ CHECKLIST

After update:
- [ ] Form removed from hero section
- [ ] Portrait image displays correctly
- [ ] Image is properly sized (not too large, not too small)
- [ ] Responsive behavior works (stacks on mobile)
- [ ] Styling matches the design system (rounded corners, shadows, borders)
- [ ] Left side content remains unchanged
- [ ] No broken imports or console errors

---

## 🎯 DESIGN GUIDANCE

**Make it look:**
- Professional and premium
- Matches the Executive Zebra aesthetic
- Complements the left-side text
- Balanced composition
- Clean and modern

**Feel free to adjust:**
- Image sizing
- Border radius
- Shadow intensity
- Object-fit properties
- Any visual treatments that make it look better

---

**Please replace the form with the portrait image and make any adjustments needed to make it look perfect! 🎨**









