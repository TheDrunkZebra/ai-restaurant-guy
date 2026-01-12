# Troubleshooting Blank Page

## If you see a blank white page:

### 1. Check Browser Console
Press `F12` and look for errors in the Console tab. Common issues:

- **Module not found**: Missing import
- **Cannot read property**: Component error
- **Syntax error**: Typo in code

### 2. Check Dev Server
Make sure the dev server is running:
```bash
cd apps/ai-restaurant-guy
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### 3. Common Fixes

**If port 5173 is taken:**
- Vite will automatically use the next available port (5174, 5175, etc.)
- Check the terminal output for the actual URL

**If you see import errors:**
- Make sure all files exist in `src/sections/`
- Check that all imports match file names exactly

**If CSS isn't loading:**
- Make sure `src/index.css` exists
- Check that Tailwind is configured in `tailwind.config.js`

### 4. Quick Test

Try accessing: `http://localhost:5173` (or whatever port Vite shows)

If still blank, check the browser console (F12) for specific error messages.







