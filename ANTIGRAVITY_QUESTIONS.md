# Questions for Antigravity - URGENT

## 🎯 CRITICAL QUESTIONS - PLEASE ANSWER:

### 1. **Which Website/URL Are You Working On?**
   - Are you deploying to `saltyzebrabistro.com` (the restaurant website)?
   - OR are you deploying to a separate URL for the AI Restaurant Guy consulting website?
   - What is the exact URL where the new design should appear?

### 2. **Vercel Deployment Configuration**
   - Do you have access to Vercel dashboard?
   - How many Vercel projects do you see?
   - Which project is connected to which domain?
   - What is the build/output directory configured for each project?

### 3. **Current Deployment Status**
   - What URL are you currently viewing when you see the "Escape the ordinary" design?
   - Is that URL supposed to show:
     - **A)** The restaurant website (saltyzebrabistro.com) - which should NOT change
     - **B)** The AI Restaurant Guy consulting website - which SHOULD have the new design
   
### 4. **File Structure Understanding**
   - Are you aware that there are TWO separate websites?
     1. **Restaurant Website:** `restaurants/salty-zebra/` → saltyzebrabistro.com
     2. **Consulting Website:** `apps/ai-restaurant-guy/` → Should be separate domain
   - Which one were you supposed to update?

### 5. **What Should Happen?**
   - Should the AI Restaurant Guy consulting website (new design) replace the restaurant website?
   - OR should they be separate websites on separate domains?
   - What is the intended final URL structure?

### 6. **Build Configuration**
   - In `apps/ai-restaurant-guy/vercel.json`, the output directory is set to `dist`
   - Is Vercel building from the `apps/ai-restaurant-guy/` directory?
   - Is it deploying to the correct project?

### 7. **Domain Mapping**
   - What domain should `apps/ai-restaurant-guy/` be deployed to?
   - Should `saltyzebrabistro.com` remain unchanged (showing the restaurant site)?
   - Is there a separate domain for the consulting website (e.g., `ai-restaurant-guy.vercel.app`)?

---

## 📋 WHAT WE NEED TO KNOW:

**Please provide:**
1. ✅ The exact URL where the new design should appear
2. ✅ The exact URL where you're currently seeing the old design
3. ✅ Whether these should be the same URL or different URLs
4. ✅ Which Vercel project(s) exist and their configurations
5. ✅ What changes (if any) were made to deployment settings

---

## 🔍 ADDITIONAL INFO FOR ANTIGRAVITY:

**Repository Structure:**
```
salty-zebra-latenight-v2-1/
├── restaurants/
│   └── salty-zebra/              ← RESTAURANT WEBSITE (saltyzebrabistro.com)
│       └── index.html            ← Has "Escape the ordinary" design
│
└── apps/
    └── ai-restaurant-guy/        ← CONSULTING WEBSITE (new design)
        ├── src/
        │   └── sections/
        │       └── HeroSection.jsx  ← Has "Recover $72k" design
        └── vercel.json           ← Builds to 'dist' directory
```

**Root vercel.json:**
- Points to `restaurants/salty-zebra` as output directory
- Routes `www.saltyzebrabistro.com` to restaurant site

**apps/ai-restaurant-guy/vercel.json:**
- Points to `dist` as output directory
- Should be a separate Vercel project

---

**Once we have these answers, we can fix the deployment configuration!**

