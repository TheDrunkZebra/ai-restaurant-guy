# AI Restaurant Guy - Checkout Flow Plan

## Key Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Discovery Audit standalone? | **Yes** | Lower barrier, proves value first, audit reveals problems creating urgency for solution |
| Add-ons | **3 options** | Google Ads (+$500), Priority Response (+$300), Monthly Strategy Call (+$200) |
| Flow structure | **5 steps** | Quiz → Recommendation → Customize → Investment → Checkout |
| Technical approach | **Stripe Checkout (hosted)** | Faster to build, automatic PCI compliance, Apple/Google Pay included |
| Guarantee | **60-Day Visibility Guarantee** | Setup fee refund if not seeing results |

---

## The Flow

### Step 1: Assessment Quiz (2 minutes)

**Purpose:** Make them feel understood. Qualify. Personalize recommendations.

**Questions:**
1. How many locations do you operate? (1 / 2-3 / 4-10 / 10+)
2. What's your biggest pain point? (select up to 2)
   - Can't get accurate financials without digging
   - Negative reviews are killing us
   - Vendors are overcharging
   - Marketing is inconsistent
   - Working IN the business, not ON it
   - Want to scale but can't
3. Hours per week on admin/back-office? (5-10 / 10-20 / 20-30 / 30+)
4. Current tech stack? (Toast / Square / Other POS / QuickBooks / Google Business Profile)
5. What would success look like in 90 days? (free text)

**No email required yet** - reduce friction.

---

### Step 2: Your Situation + Recommendation

Personalized summary based on quiz answers:
- Location count
- Admin hours estimate
- Top pain points identified
- Estimated money being left on the table
- **Recommended package with reasoning**

Show all three packages with recommended one highlighted.

---

### Step 3: Customize Your Package

**Base Package Selection:**
- Essentials / Growth / Scale (with comparison)

**Add-Ons (toggles):**
- Google Ads Management: +$500/mo - "Done-for-you local ads. Avg ROI: 4-6x"
- Priority Response: +$300/mo - "Same-day turnaround when you can't wait"
- Monthly Strategy Call: +$200/mo - "Extra 30-min 1:1 each month"

**Running total updates live**

---

### Step 4: Investment Summary

- Today's setup fee
- Monthly cost
- 3-month minimum total
- **ROI Calculator** showing typical returns:
  - Vendor savings: $800-1,500/mo
  - Labor optimization: $400-900/mo
  - Review-driven covers: $300-600/mo
  - Time saved: 10-15 hrs/week

**Two CTAs:**
1. "Get Started Now" → Full checkout
2. "Start with Discovery Audit - $1,000" → Lower commitment path

**Trust signals:**
- 3-month minimum (not a 12-month trap)
- All locations included
- Cancel anytime after 3 months
- "I answer my own emails"

---

### Step 5: Checkout

**Collect:**
- Name, email, phone
- Restaurant name(s)
- Business address
- (Optional) "What's your biggest challenge right now?"

**Payment via Stripe Checkout:**
- Setup fee + first month
- Or just $1,000 for Discovery Audit

**Confirmation:**
- Thank you page
- Calendar embed to book kickoff call
- "I'll reach out within 24 hours"

---

## Exit Ramps (Not Ready to Commit)

In order of preference:
1. **Discovery Audit** - $1,000, applied to setup if they sign in 30 days
2. **Book a Call** - Free 20-min "is this right for you" call
3. **Free Guide** - "5 AI Tools Every Restaurant Should Use" PDF, email capture
4. **Newsletter** - Weekly tips, email only

**Exit Intent Popup:**
Push toward Discovery Audit with "no high-pressure sales call, just data"

---

## Stripe Products to Create

### One-Time
- Discovery Audit: $1,000
- Essentials Setup: $2,500
- Growth Setup: $4,000
- Scale Setup: $6,000

### Monthly Subscriptions
- Essentials: $1,500/mo
- Growth: $2,500/mo
- Scale: $4,000/mo
- Google Ads Add-On: $500/mo
- Priority Response Add-On: $300/mo
- Strategy Call Add-On: $200/mo

---

## The Guarantee

**60-Day Visibility Guarantee**

> If you don't have clearer visibility into your operations after 60 days -
> real dashboards, real insights, real time saved - I'll refund your setup
> fee and we'll part ways. No hoops.

---

## Implementation Phases

### Phase 1: MVP (This Week)
- [ ] Create CheckoutWizard component with 5 steps
- [ ] Assessment quiz logic
- [ ] Package selection with add-ons
- [ ] Stripe Checkout integration
- [ ] Basic thank you page

### Phase 2: Polish (Week 2)
- [ ] ROI calculator with inputs
- [ ] Exit intent popup
- [ ] Email automation (welcome sequence)
- [ ] Calendar embed on thank you page

### Phase 3: Optimization (Month 2+)
- [ ] A/B test pricing display
- [ ] Retargeting pixels
- [ ] Case studies integration
- [ ] Referral program

---

## Files to Create

```
src/
├── components/
│   └── CheckoutWizard/
│       ├── index.jsx           # Main wizard container
│       ├── StepAssessment.jsx  # Quiz step
│       ├── StepRecommendation.jsx
│       ├── StepCustomize.jsx
│       ├── StepInvestment.jsx
│       ├── StepCheckout.jsx
│       └── ProgressBar.jsx
├── pages/
│   ├── GetStarted.jsx          # Entry point to wizard
│   └── ThankYou.jsx            # Post-checkout
└── lib/
    └── stripe.js               # Stripe checkout session helper
```

---

## Environment Variables Needed

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx (server-side only)
```

For Vercel serverless function to create checkout sessions.
