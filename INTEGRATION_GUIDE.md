# AI Restaurant Guy - Integration Guide

## Overview

This guide covers 4 key integrations for the [ai-restaurant-guy.vercel.app](https://ai-restaurant-guy.vercel.app/) website:

1. **Database Integration** - Connect `zebra_intelligence.db` to Insights Dashboard
2. **Lead Capture Logic** - Grand Slam form triggers `price_war_recon.py`
3. **Agent UI** - Manager Agent ticket status display
4. **Aesthetic Enforcement** - Manilla Paper + Typewriter font styling

---

## 1. Database Integration: Insights Dashboard

### Architecture

**Option A: Serverless API (Recommended for Vercel)**
- Use Vercel Serverless Functions to expose SQLite database
- Create API routes that query `zebra_intelligence.db`
- Frontend React component fetches from API

**Option B: External Database Service (Production)**
- Migrate SQLite to PostgreSQL (Supabase, Railway, or Neon)
- Use REST API or GraphQL
- Better for multi-user access

### Implementation (Option A - Serverless)

#### Step 1: Create API Route

Create `apps/ai-restaurant-guy/api/insights.js`:

```javascript
// api/insights.js (Vercel Serverless Function)
import sqlite3 from 'better-sqlite3';
import path from 'path';

export default async function handler(req, res) {
  // Security: Add authentication here
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Path to database (stored in Vercel environment or uploaded)
    const dbPath = process.env.ZEBRA_DB_PATH || path.join(process.cwd(), '../../agents/data/zebra_intelligence.db');
    const db = sqlite3(dbPath);

    // Query menu trends
    const trends = db.prepare('SELECT * FROM menu_trends ORDER BY created_at DESC LIMIT 10').all();
    
    // Query chef promotions
    const promotions = db.prepare('SELECT * FROM chef_promotions ORDER BY created_at DESC LIMIT 10').all();

    db.close();

    return res.status(200).json({
      trends,
      promotions,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Database query failed' });
  }
}
```

**Note:** For Vercel, SQLite files need to be:
- Uploaded to a cloud storage (S3, R2) and downloaded at runtime, OR
- Migrated to PostgreSQL/Supabase (recommended for production)

#### Step 2: Create React Component

See `apps/ai-restaurant-guy/src/InsightsDashboard.jsx` (created below)

---

## 2. Lead Capture: Grand Slam Form + PDF Upload

### Architecture

**Flow:**
1. User fills "Grand Slam" form (vendor contract upload)
2. PDF uploaded to temporary storage (Vercel Blob or S3)
3. Trigger Python script via API endpoint (Vercel Serverless or Railway)
4. Script processes PDF, runs `price_war_recon.py`
5. Results returned to user

### Implementation

See `apps/ai-restaurant-guy/src/GrandSlamForm.jsx` (created below)

**Backend API:** Create `apps/ai-restaurant-guy/api/process-contract.js`:

```javascript
// api/process-contract.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { pdfUrl, formData } = req.body;

  try {
    // Trigger Python script (via Railway, Fly.io, or serverless)
    const response = await fetch(process.env.PYTHON_API_URL + '/process-contract', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pdfUrl, formData })
    });

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Processing failed' });
  }
}
```

**Python Backend:** Create `agents/api_server.py` (runs on Railway/Fly.io):

```python
# agents/api_server.py
from flask import Flask, request, jsonify
from price_war_recon import analyze_invoice, generate_negotiation_script
import pdfplumber

app = Flask(__name__)

@app.route('/process-contract', methods=['POST'])
def process_contract():
    data = request.json
    pdf_url = data['pdfUrl']
    
    # Download PDF, extract invoice data
    # Run price_war_recon analysis
    # Return results
    
    return jsonify({
        'analysis': {},
        'negotiation_script': ''
    })
```

---

## 3. Agent UI: Manager Agent Ticket Status

### Architecture

**Flow:**
1. Manager Agent processes emails → saves to SQLite (`agents/data/manager_agent.db`)
2. API endpoint exposes ticket statuses
3. React component displays tickets (New, In-Progress, Escalated)

### Implementation

See `apps/ai-restaurant-guy/src/ManagerAgentDashboard.jsx` (created below)

**API Route:** `apps/ai-restaurant-guy/api/tickets.js`:

```javascript
// api/tickets.js
import sqlite3 from 'better-sqlite3';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const dbPath = process.env.MANAGER_DB_PATH || '../../agents/data/manager_agent.db';
    const db = sqlite3(dbPath);

    const status = req.query.status || 'all';
    let query = 'SELECT * FROM tickets ORDER BY created_at DESC';
    
    if (status !== 'all') {
      query = `SELECT * FROM tickets WHERE status = ? ORDER BY created_at DESC`;
      const tickets = db.prepare(query).all(status);
      db.close();
      return res.status(200).json({ tickets });
    }

    const tickets = db.prepare(query).all();
    db.close();

    return res.status(200).json({ tickets });
  } catch (error) {
    return res.status(500).json({ error: 'Database query failed' });
  }
}
```

---

## 4. Aesthetic Enforcement: Manilla Paper + Typewriter Font

### CSS Updates

From Salty Zebra FOH Bible:
- **Manilla Paper Color:** `#E7C9A9` (Linen/Manilla)
- **Typewriter Font:** `'Courier New', 'Courier', monospace`

See `apps/ai-restaurant-guy/src/index.css` (updated below)

---

## Deployment Notes

### Vercel Configuration

1. **Environment Variables:**
   ```
   ZEBRA_DB_PATH=/path/to/zebra_intelligence.db
   MANAGER_DB_PATH=/path/to/manager_agent.db
   PYTHON_API_URL=https://your-python-api.railway.app
   ```

2. **File Storage:**
   - SQLite files: Use Vercel Blob Storage or external DB (PostgreSQL)
   - PDF uploads: Vercel Blob Storage or S3

3. **Serverless Functions:**
   - API routes in `api/` directory
   - Node.js runtime (SQLite requires native module - consider PostgreSQL)

### Alternative: PostgreSQL Migration (Recommended)

For production, migrate SQLite to PostgreSQL:
- Use Supabase (free tier available)
- Or Railway/Neon PostgreSQL
- Better multi-user access, easier Vercel integration

---

## Next Steps

1. ✅ Review component files created
2. ✅ Set up API endpoints
3. ✅ Configure environment variables
4. ✅ Test locally before deployment
5. ✅ Deploy to Vercel


