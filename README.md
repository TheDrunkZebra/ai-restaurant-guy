# The AI Restaurant Guy Website

This is a static website recreated from the original Manus AI-hosted site, now ready for deployment on Vercel.

## Project Structure

```
ai-restaurant-guy/
├── index.html          # Main HTML file
├── css/               # Stylesheets
├── js/                # JavaScript bundles
├── img/               # Images and favicon
├── vercel.json        # Vercel configuration
└── README.md          # This file
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Navigate to the project directory:
   ```bash
   cd ai-restaurant-guy
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to link your project or create a new one.

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository (if you've pushed this to GitHub/GitLab)
   OR
   Drag and drop the `ai-restaurant-guy` folder directly to the Vercel dashboard

### Option 3: Using Git Integration

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to Vercel dashboard
3. Click "Add New Project"
4. Import your repository
5. Vercel will automatically detect it as a static site and deploy it

## Notes

- This is a static React application (SPA - Single Page Application)
- The `vercel.json` file ensures all routes redirect to `index.html` for proper SPA routing
- All Manus AI-specific scripts and editor code have been removed
- The site should work exactly as it did before, but now independently hosted

## Custom Domain

After deployment, you can add a custom domain in the Vercel project settings under "Domains".

