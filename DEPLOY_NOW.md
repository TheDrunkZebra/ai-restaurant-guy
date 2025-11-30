# Quick Deploy Instructions

## Option 1: Vercel Dashboard (Recommended - 2 minutes)

1. Go to https://vercel.com and sign in
2. Click **"Add New Project"**
3. Under **"Import Git Repository"**, find and select **`TheDrunkZebra/ai-restaurant-guy`**
4. Click **"Import"**
5. Vercel will auto-detect the settings:
   - Framework Preset: Other
   - Root Directory: `./` (leave as is)
   - Build Command: (leave empty - it's a static site)
   - Output Directory: (leave empty)
6. Click **"Deploy"**
7. Your site will be live in ~30 seconds!

## Option 2: Vercel CLI (If you prefer command line)

1. Open terminal in the `ai-restaurant-guy` folder
2. Run: `vercel login`
3. Follow the browser login flow
4. Run: `vercel --prod`
5. Done!

## After Deployment

- Your site will be live at: `https://ai-restaurant-guy.vercel.app` (or similar)
- You can add a custom domain in Vercel project settings
- Every push to GitHub will auto-deploy (if Git integration is used)


