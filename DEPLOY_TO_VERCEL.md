# Quick Vercel Deployment Steps

## ✅ Step 1: Push to GitHub (Choose One Option)

Since your local branch has diverged from remote, choose based on what's on GitHub:

### Option A: If Remote Has Wrong/Old Code (Recommended)
```bash
cd C:\Users\seamu\salty-zebra-latenight-v2-1\apps\ai-restaurant-guy
git push origin main --force
```
⚠️ **Warning:** This overwrites the remote branch. Use only if remote has wrong codebase.

### Option B: If You Want to Merge Remote Changes First
```bash
cd C:\Users\seamu\salty-zebra-latenight-v2-1\apps\ai-restaurant-guy
git pull origin main --rebase
# Resolve any conflicts
git push origin main
```

---

## ✅ Step 2: Create NEW Vercel Project

**CRITICAL:** Do NOT import your existing Vercel project. Create a fresh one.

1. Go to https://vercel.com and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Search for: `TheDrunkZebra/ai-restaurant-guy`
5. Click **"Import"**

---

## ✅ Step 3: Configure Project

**Project Name:** `ai-restaurant-guy` (or `airestaurantguy-v2` if name taken)

**Framework Preset:** Vite (auto-detected)

**Root Directory:** Leave blank

**Build Settings:** (Already in vercel.json, but verify)
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables:** None needed

Click **"Deploy"**

---

## ✅ Step 4: Verify

After deployment (1-2 minutes):
1. Visit the Vercel URL (e.g., `ai-restaurant-guy.vercel.app`)
2. Check pricing section shows:
   - Savings Audit: $500 (refundable)
   - Foundation: $2,000/mo
   - Growth: $4,000/mo
   - Scale: $5,500/mo
3. Verify guarantee badge in hero section

---

## ✅ Step 5: Custom Domain (Optional)

If you want a custom domain:
1. Project Settings → Domains
2. Add your domain
3. Configure DNS per Vercel instructions

---

## 🔄 Auto-Deployments

Once connected, **every push to `main` auto-deploys**. No manual steps needed.

---

**Current Status:**
- ✅ All changes committed locally
- ⏳ Ready to push to GitHub
- ⏳ Ready to deploy to Vercel
