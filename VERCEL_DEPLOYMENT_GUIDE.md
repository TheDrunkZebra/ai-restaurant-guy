# Vercel Deployment Guide — AI Restaurant Guy

**Goal:** Deploy the current codebase (with updated pricing) to Vercel as a **NEW project** — do NOT overwrite your existing Vercel project.

---

## Step 1: Commit Your Current Changes

First, commit all your current changes to the `ai-restaurant-guy` repo:

```bash
cd C:\Users\seamu\salty-zebra-latenight-v2-1\apps\ai-restaurant-guy

# Add all changes
git add .

# Commit with message
git commit -m "Update pricing: Foundation $2k, Growth $4k, Scale $5.5k + Savings Audit entry offer"

# Push to GitHub (you may need to pull/merge first if branches diverged)
git push origin main
```

**Note:** If `git push` fails because branches diverged, you'll need to either:
- **Option A (Recommended):** Force push to overwrite remote (if remote has wrong codebase)
  ```bash
  git push origin main --force
  ```
- **Option B:** Pull and merge first
  ```bash
  git pull origin main --rebase
  # Resolve conflicts if any
  git push origin main
  ```

---

## Step 2: Create NEW Vercel Project (Do NOT Import Existing)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. **DO NOT** select any existing project — create a fresh one
4. In the "Import Git Repository" section:
   - Search for: `TheDrunkZebra/ai-restaurant-guy`
   - Or paste: `https://github.com/TheDrunkZebra/ai-restaurant-guy.git`
5. Click **"Import"**

---

## Step 3: Configure Project Settings

**Project Name:** Choose a new name (e.g., `ai-restaurant-guy-v2` or `airestaurantguy`) to avoid conflicts with your old project.

**Framework Preset:** Vite (should auto-detect)

**Root Directory:** Leave blank (or set to `.`)

**Build and Output Settings:**
- **Build Command:** `npm run build` (already in vercel.json)
- **Output Directory:** `dist` (already in vercel.json)
- **Install Command:** `npm install`

**Environment Variables:** None needed for now

---

## Step 4: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (~1-2 minutes)
3. Vercel will assign a URL like: `ai-restaurant-guy-v2.vercel.app`

---

## Step 5: Custom Domain (Optional)

If you want to use a custom domain:

1. Go to Project Settings → Domains
2. Add your domain (e.g., `airestaurantguy.com`)
3. Follow DNS configuration instructions

---

## Step 6: Verify Deployment

1. Visit your Vercel URL
2. Check that pricing shows:
   - Savings Audit: $500 (refundable)
   - Foundation: $2,000/mo + $2,000 setup
   - Growth: $4,000/mo + $3,500 setup
   - Scale: $5,500/mo + $5,000 setup
3. Verify guarantee badge appears in hero section
4. Test the "Start with $500 Savings Audit" CTA

---

## Troubleshooting

**If build fails:**
- Check Vercel build logs
- Ensure `package.json` has correct build script
- Verify `vercel.json` is in root directory

**If wrong codebase deploys:**
- Double-check you're importing `TheDrunkZebra/ai-restaurant-guy` (not the monorepo)
- Verify latest commit is pushed to GitHub
- In Vercel, check "Deployments" → "Source" to confirm correct commit

**If you accidentally connected to old project:**
- Delete the project in Vercel
- Create a new one following Step 2

---

## Future Deployments

Once connected, **every push to `main` branch will auto-deploy**. No manual steps needed.

To deploy manually:
1. Push changes to GitHub
2. Vercel auto-detects and deploys
3. Or trigger deployment from Vercel dashboard

---

## Current Repository Info

- **GitHub Repo:** `TheDrunkZebra/ai-restaurant-guy`
- **GitHub URL:** `https://github.com/TheDrunkZebra/ai-restaurant-guy.git`
- **Local Path:** `C:\Users\seamu\salty-zebra-latenight-v2-1\apps\ai-restaurant-guy`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework:** Vite + React

---

**Once deployed, share the Vercel URL so we can verify everything works correctly.**
