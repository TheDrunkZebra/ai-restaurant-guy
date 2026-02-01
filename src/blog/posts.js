/**
 * Blog Posts Data
 *
 * Each post has:
 * - slug: URL path (kebab-case)
 * - title: Post title
 * - description: Short description for cards and SEO
 * - date: Publication date (YYYY-MM-DD)
 * - tags: Array of category tags
 * - youtubeId: Optional YouTube video ID (privacy-enhanced embed)
 * - content: Markdown-style content (rendered with basic formatting)
 * - readTime: Optional read time in minutes
 */

export const posts = [
    {
        slug: 'how-we-4x-private-event-bookings-with-ai',
        title: "How We're Using AI to 4x Our Private Event Bookings (And Track Every Dollar)",
        description: "A real-time case study: AI-generated proposals, a Google Ads blitz, and a tracking dashboard that shows actual ROAS. Plus the one Google Ads setting that was silently burning our budget.",
        date: '2026-02-01',
        tags: ['AI Systems', 'Marketing', 'Case Study'],
        readTime: 8,
        youtubeId: null,
        content: `
## The Insight That Started Everything

Three months ago, I noticed something weird in our private events pipeline.

Leads that got a **custom proposal within 2 hours** were converting at nearly **4x the rate** of ones we responded to the next day. Not 2x. Four.

The problem? Custom proposals used to take forever. Pulling menu options, calculating per-person pricing, writing personalized copy about "your rehearsal dinner" or "Sarah's 50th birthday" — it was a 45-minute job minimum. So we'd batch them. Respond the next morning. Lose the momentum.

Then we started using AI to generate proposals in minutes.

Now when someone inquires about a bridal shower at 9pm, they have a beautiful, personalized proposal in their inbox before they go to bed. Same quality. Fraction of the time.

**Result: 4x conversion rate on fast responses.**

That got us thinking — what if we went on offense?

---

## The Private Events Blitz

Instead of waiting for leads to find us, we decided to blitz.

Here's what we deployed in a single weekend:

### 1. Google Ads Campaign Overhaul

We had Google Ads running for private events, but they were underperforming. The campaigns were spending 1.8% of their daily budget. Basically nothing.

**The problems we found:**
- Keywords too narrow
- Bids too low for our market
- Ad copy was generic ("Private Dining Available" — yawn)
- 7 ads were disapproved and nobody noticed
- Landing pages didn't match search intent (killing our Quality Score)

**What we fixed:**
- Added 22 high-intent keywords targeting specific event types (rehearsal dinners, bridal showers, corporate events, celebrations of life)
- Raised bids from $2.50 to $3.50-4.00
- Wrote new ad copy with specifics: "65 Seats. One Chef." / "14-Day Dry-Aged Duck" / "Michelin-Trained Chef"
- Created a dedicated landing page optimized for "fine dining Jupiter FL"
- Added 48 negative keywords to block budget-wasters ("cheap", "free", "miami", "food truck")

**The gotcha we almost missed:**

When we dug into why our Rehearsal Dinners campaign had zero conversions despite spending budget, we found something infuriating.

The geographic targeting was set to "Presence or interest" instead of "Presence only."

Translation: Google was showing our ads to people in **Milwaukee, San Diego, and San Francisco** who had *searched* for things related to Jupiter, FL — not people actually *in* Jupiter planning a rehearsal dinner.

We're a 65-seat bistro in South Florida. Someone in Wisconsin isn't booking a rehearsal dinner here.

That setting was silently burning budget for who knows how long. One checkbox. Thousands of wasted impressions.

**The fix:** Campaign Settings → Locations → Location options → "Presence only"

This is the kind of thing that hides in plain sight. We only caught it because we actually looked at where clicks were coming from instead of just trusting the defaults.

**Budget allocation:**
| Campaign | Monthly Budget |
|----------|----------------|
| Rehearsal Dinners | $600 |
| Corporate Events | $500 |
| Birthday Celebrations | $400 |
| General Private Events | $350 |

Total: ~$2,000/month. One booked event pays for 3 months of ads.

### 2. PR Editorial Push

We had AI write a complete press release and editorial package about our private events program. Not a rough draft — a finished piece ready for distribution.

**What it included:**
- Feature article on Chef Michael Luth's approach to private dining
- Venue photography captions
- Pull quotes
- Social media snippets
- Email pitch to editors

Sent to Seabreeze Communications (our local PR network) the same day.

Time to create: 45 minutes.
Time it would have taken manually: 4-6 hours.

### 3. Campaign-Specific Landing Pages

Here's where it gets interesting.

We didn't just run ads — we built landing pages that track exactly where every lead comes from:

- \`/fine-dining-jupiter-fl\` — Google Ads for dinner reservations
- \`/private-events/rehearsal-dinners\` — Rehearsal dinner campaign
- \`/private-events/corporate\` — Corporate events campaign

Each page captures UTM parameters automatically. When someone fills out our inquiry form, we know:
- Which campaign they came from
- Which keyword triggered the ad
- Which ad variant they clicked
- Their Google Click ID (for conversion tracking)

**Why this matters:** We can calculate *actual* ROAS. Not "we think ads are working." We know that Campaign X generated Lead Y who booked Event Z for $8,500.

### 4. Real-Time Results Dashboard

We built a dashboard that shows:
- Pipeline value by campaign
- Cost per lead
- True ROAS (booked revenue ÷ ad spend)
- Lead status (new → contacted → proposal → booked)

No more guessing. No more "I feel like ads are working."

Data.

---

## The AI Advantage (Why This Was Possible in a Weekend)

Let me be clear: none of this is complicated individually.

Google Ads? Been around for 20 years.
Landing pages? Basic web stuff.
UTM tracking? Standard marketing practice.

What's different is the **speed**.

In one weekend, with AI assistance, we:
- Researched 14,000+ words of competitive intelligence
- Wrote 60+ ad headlines and descriptions
- Created 3 landing pages
- Built a tracking dashboard
- Generated a PR package
- Deployed everything live

That's not a marketing agency timeline. That's not even a "fast" agency timeline.

That's what happens when AI handles the grunt work and humans make the decisions.

---

## What We're Watching

Here's what we'll know in 30 days:

1. **Quality Score improvement** — Did our landing page fix the QS=1 problem on "fine dining near me"?
2. **Private event spend rate** — Are campaigns actually spending their budgets now?
3. **Cost per lead by campaign** — Which event types are cheapest to acquire?
4. **Conversion rate by source** — Do Google Ads leads convert better or worse than organic?
5. **True ROAS** — For every $1 in ads, how much booked revenue?

If something's working, we double down.
If something's not, we kill it.

No more running the same campaigns for 6 months because "that's what we've always done."

---

## The Bottom Line

Private events are high-margin. A single rehearsal dinner can be $5,000-15,000. A corporate buyout can be $8,000+.

If we can acquire those leads for $50-100 each, and convert 30%+ of them, the math is stupid good.

**Current pipeline:** 5 leads, $21,485 in potential value, 2 awaiting deposits.

That's from campaigns that were basically broken a week ago.

AI didn't replace our judgment. It replaced the busywork that was stopping us from executing.

---

## Try This Yourself

If you run a restaurant and you're not tracking private event leads by source, you're flying blind.

Here's the minimum viable version:
1. Add UTM parameters to every ad link
2. Capture those parameters in your inquiry form (hidden fields)
3. Track which leads came from where
4. Calculate your actual cost per booking

You don't need fancy software. A spreadsheet works.

**And for the love of god, check your Google Ads location targeting.**

Go to Campaign Settings → Locations → Location options right now. If it says "Presence or interest," you're probably showing ads to people who will never walk through your door. Change it to "Presence only."

This one setting has burned more restaurant ad budgets than bad creative ever will.

But you do need to stop guessing.

---

*Seamus O'Brien runs Salty Zebra Bistro, The Locals Pub, and Bagel Boyz in Jupiter, Florida. He writes about AI in restaurants at theairestaurantguy.com.*
        `.trim()
    },
    {
        slug: 'how-i-made-my-ai-agents-10x-faster-with-one-architecture-change',
        title: "How I Made My AI Agents 10x Faster With One Architecture Change",
        description: "My restaurant AI was getting slow and expensive. Then I applied a simple pattern: give workers only what they need. Here's the exact change that cut processing time from minutes to seconds.",
        date: '2026-01-28',
        tags: ['AI Systems', 'Operations', 'Technical'],
        readTime: 5,
        youtubeId: null,
        content: `
## The Problem: Too Much Context

I run three restaurants with an AI agent system handling content, invoices, scheduling, and daily briefings. It worked—but it was getting slow and expensive.

Every time I asked it to write a simple GMB post, it was loading 532 lines of business context. Menu details, financial history, strategic plans, competitor analysis—everything.

For a 50-word social post.

That's like giving someone your entire company handbook when they just need to know the hours of operation.

## The Fix: Scoped Context

I learned this pattern from studying how high-performing AI systems are built: **workers should stay ignorant of the big picture.**

The orchestrator (main AI session) knows everything. The workers know only what they need for their specific task.

Here's what that looks like in practice:

**Before (532 lines):**
- All three venue details
- Complete menu with prices
- Financial history
- Strategic plans
- Competitive analysis
- Staff directory
- Event calendar
- Marketing guidelines
- Brand voice docs
- ...everything

**After (60 lines):**
- Venue name and contact info
- Brand voice guide
- Banned phrases list
- The specific topic

That's it. Nothing else.

## Real Example: Sunday Supper GMB Post

I needed a Google My Business post for our new Sunday Supper family-style dinner.

With the old system: 45 seconds, wandering output that mentioned things irrelevant to the post.

With the new system: 6 seconds, focused output that nailed the voice.

Here's what the AI produced:

> Sundays just got better. Starting February 2nd, Chef Michael Luth brings Sunday Supper to the table — family-style dishes meant for sharing, conversation, and slowing down. Think big platters, bold flavors, and the kind of meal that turns strangers into friends. One seating. One menu. All the good stuff.
>
> Book your table: OpenTable or (561) 250-6350

No wasted words. Right voice. Clear CTA. Done.

## The Architecture Pattern

Here's how this works:

**Orchestrator (Main Session):**
- Has full business context
- Decides what tasks need doing
- Selects which worker to spawn
- Passes ONLY relevant context
- Collects and verifies results

**Workers (Focused Subagents):**
- Get narrow, specific instructions
- Know nothing beyond their task
- Complete one thing and exit
- No shared state between workers

The key insight: **complexity belongs in the orchestrator, not the workers.**

10,000 dumb agents beats one brilliant agent trying to do everything.

## How I Implemented It

### Step 1: Split the giant context file

I took my 532-line SHARED_CONTEXT.md and broke it into small, focused files:

- \`venue_basics.md\` (20 lines)
- \`content_writing_guide.md\` (40 lines)
- \`financial_context.md\` (30 lines)
- \`events_calendar.md\` (40 lines)

### Step 2: Build a context selector

A simple tool that combines only the files needed for each task type:

- GMB post → venue_basics + content_writing_guide
- Invoice processing → venue_basics + financial_context
- Event promotion → venue_basics + content_writing_guide + events_calendar

### Step 3: Spawn focused workers

Instead of one long conversation, I spawn separate workers for each task. They get their scoped context, do their job, and exit.

## The Results

| Metric | Before | After |
|--------|--------|-------|
| Context size | 532 lines | 60 lines |
| Processing time | 30-45 sec | 5-8 sec |
| Output quality | Wandering | Focused |
| Cost per task | ~$0.15 | ~$0.03 |

Over hundreds of tasks per week, that adds up.

## Why This Matters for Your Restaurant

If you're using AI tools in your restaurant—even just ChatGPT—you're probably making the same mistake I was.

Copying your entire menu, all your SOPs, and your brand guidelines into every prompt.

Try this instead:

1. **Break your context into small files** by category
2. **Only include what's relevant** to the specific task
3. **Be specific about the output format** you want

A simple "write a 50-word Instagram caption for our Tuesday taco special, using casual voice, ending with a CTA to call (555) 123-4567" will outperform a 2000-word prompt with your entire business history.

## The Bigger Lesson

This isn't just about AI efficiency. It's about how we run restaurants.

We tend to over-brief people. New server's first day? Here's a 50-page manual. Line cook's first shift? Here's everything that could possibly go wrong.

Instead: give people exactly what they need for the task at hand. Nothing more.

The best systems—whether AI or human—are the ones where workers can focus on their job without drowning in irrelevant information.

---

*I build AI systems for restaurant operators. If you're curious what focused AI agents could do for your operations, content, or financial tracking, that's what the Discovery Audit is for.*
        `.trim()
    },
    {
        slug: '94-percent-forecast-accuracy-how-ai-predicts-weekly-sales',
        title: "94% Forecast Accuracy: How AI Predicts My Weekly Sales",
        description: "Most owners guess at next week's sales. I stopped guessing and built a system that hits within 6% every week. Here's how it works.",
        date: '2026-01-23',
        tags: ['AI Systems', 'Operations', 'Forecasting'],
        readTime: 7,
        youtubeId: null,
        content: `
## I Used to Guess Like Everyone Else

Every Sunday night, same ritual: stare at last week's numbers, think about the weather, remember that big party coming in, and write down a sales target for the week.

Sometimes I was close. Mostly I wasn't.

Labor scheduling was a disaster. I'd overstaff slow days and scramble on busy ones. Food orders were either too much (waste) or too little (86'd items and angry guests).

Then I built a forecasting system that changed everything.

## What 94% Accuracy Actually Means

When I say 94% accuracy, I mean: **my predicted weekly sales land within 6% of actual sales, every week.**

That's not a one-time lucky guess. That's consistent, reliable forecasting across three different restaurant concepts.

Here's a recent example from Bagel Boyz:

- **Predicted:** $48,200
- **Actual:** $49,847
- **Variance:** 3.4%

That level of precision means:
- Labor schedules that actually match demand
- Food orders that minimize waste
- Cash flow projections I can trust
- Less stress on Monday morning

## The Old Way vs. The New Way

**How most restaurants forecast:**

1. Look at last year's same week
2. Adjust for "feel" (weather, events, gut)
3. Hope for the best
4. React when it's wrong

**How my AI system forecasts:**

1. Analyze 3+ years of historical data by day
2. Factor in seasonality patterns (13-week rolling)
3. Adjust for day-of-week trends
4. Weight recent performance vs. historical
5. Flag anomalies (holidays, local events)
6. Generate confidence intervals

The difference isn't just accuracy—it's the ability to know *why* the forecast is what it is.

## The Data That Powers It

The system needs clean data to work. Here's what feeds into my forecasts:

**From Toast/POS:**
- Daily sales by revenue center
- Hourly sales patterns
- Day-of-week performance
- Product mix data

**Historical Context:**
- Same week last year
- Same week two years ago
- 13-week rolling average
- Trend direction (up/down/flat)

**Manual Inputs:**
- Known large parties
- Local events (concerts, sports)
- Weather extremes
- Marketing pushes

## How I Built It

I'm not a data scientist. I'm a restaurant operator who got obsessed with spreadsheets and then discovered AI tools that could do the heavy lifting.

The core system runs on:

1. **Data extraction** from Toast (automated weekly export)
2. **Historical database** tracking 3+ years of daily sales
3. **AI analysis** that finds patterns I'd never see manually
4. **Forecast generation** every Sunday for the coming week
5. **Variance tracking** to continuously improve accuracy

The first version was a mess of spreadsheets. The current version runs mostly automatically—I review and adjust, but I'm not building formulas anymore.

## What I Learned About Restaurant Patterns

Building this system taught me things about my own business I'd never noticed:

**Bagel Boyz patterns:**
- 55.8% of revenue happens by 9 AM
- Thursdays outperform Fridays by 12%
- Week 1 of the month is always strongest

**Salty Zebra patterns:**
- Saturday dinner is 3x any weeknight
- Weather impacts Tuesday more than Friday
- Holiday weekends destroy our forecasts (need special handling)

**Locals Pub patterns:**
- Live music nights add exactly 34% on average
- Football Sundays are their own category
- Wednesday is mysteriously strong (wing special working)

You can't see these patterns by glancing at a P&L. You need to track daily, over years, and let the data speak.

## The Labor Scheduling Payoff

Here's where forecasting pays off most: **labor**.

Before accurate forecasts:
- Overstaffed Mondays (slow, paying people to stand around)
- Understaffed Saturdays (chaos, bad service, burnt-out team)
- Labor cost swinging between 22% and 31%

After accurate forecasts:
- Schedule matches predicted demand
- Labor cost holds between 17-19% at Bagel Boyz
- Staff prefer it (consistent hours, less chaos)

At a 10-point labor cost improvement on $2.5M revenue, that's **$250K annually** in savings. Just from knowing what's coming.

## Why Most "Forecasting Tools" Fail

POS companies love to sell forecasting features. Most are useless because:

1. **They only use your data** - No context from similar restaurants
2. **They ignore your business patterns** - Generic algorithms, not your reality
3. **They don't learn** - Same dumb predictions even when wrong
4. **No human review** - Garbage in, garbage out

My system works because it combines AI pattern recognition with human judgment. I review every forecast before it becomes the target. The AI does the math; I apply the context.

## Building This For Other Restaurants

When I install AI systems for other operators, forecasting is usually the first module.

Here's what it takes:

**Week 1:** Data audit and extraction setup
- Pull historical sales data (need 12+ months minimum)
- Clean and structure for analysis
- Identify data gaps or quality issues

**Week 2:** Pattern analysis
- AI analyzes historical trends
- Identifies seasonality, day-of-week, anomalies
- Creates baseline forecast model

**Week 3:** Calibration
- Run predictions against recent actuals
- Adjust model weights
- Add business-specific factors

**Week 4+:** Live forecasting
- Weekly forecasts delivered Sunday
- Variance tracking and continuous improvement
- Quarterly model refinement

Most operators see 80%+ accuracy within the first month. 90%+ within three months.

## The Real Point

Forecasting isn't about predicting the future perfectly. It's about **making better decisions with imperfect information**.

When you know—with reasonable confidence—that next Tuesday will be slow, you can:
- Schedule lighter
- Run a targeted special
- Focus prep on high-margin items
- Plan your own time better

When you're guessing, you're reacting. When you're forecasting, you're operating.

---

*If you're tired of guessing at next week's sales, this is one of the first systems I install in the Discovery Audit. We'll pull your historical data, build a forecasting baseline, and show you what 90%+ accuracy looks like in your restaurant.*
        `.trim()
    },
    {
        slug: 'how-we-decide-which-specials-to-run',
        title: "How We Decide Which Specials to Run (It's Not Guessing)",
        description: "Tuesday was dying at Salty Zebra. Then we pulled the data, found the right item, and watched sales jump 56% year-over-year. Here's the exact process.",
        date: '2026-01-23',
        tags: ['Operations', 'Data Analysis', 'Menu Strategy'],
        readTime: 6,
        youtubeId: null,
        content: `
## Tuesday Was Dying

Tuesday was dying at Salty Zebra Bistro.

Year-over-year, sales were flat while every other day grew. Staff dreaded Tuesday shifts. The vibe was off. We needed to do something.

Most owners would slap a discount on the menu and hope for the best. We didn't.

Instead, we pulled Toast data, analyzed what customers actually valued, and built a special around it. Tuesday sales jumped **56% year-over-year**.

Here's the exact process.

## The Problem With "Let's Try a Discount"

Go to any struggling restaurant on a slow night. You'll see the same playbook:

- Happy hour pricing extended
- BOGO deals
- 20% off coupons

It works. Temporarily. Then customers learn to wait for the discount. Your full-price days suffer. Your margins collapse. You've trained people to never pay full price.

We took a different approach.

## Step 1: Identify the Weak Day

Pull day-of-week sales data from your POS. Compare year-over-year.

Our data showed:

- **Tuesday:** Flat YoY (problem)
- **Thursday:** Down 21% YoY (bigger problem)
- **Saturday:** Up 18% YoY (no intervention needed)

Tuesday was the starting point.

## Step 2: Find What Customers Already Value

This is the key insight most operators miss.

Don't create a new discount. Find an item customers already pay full price for and build around it.

We looked at our product mix:

- **Smash Burger & Fries:** 3,179 sold in 2 months
- **Revenue:** $44,318
- **Discount rate:** Only 1%

Customers loved the Smash Burger. They weren't waiting for deals. They paid full price happily.

## Step 3: Make It a Menu Item, Not a Discount

Here's the critical distinction:

**Discount approach:** "20% off all burgers on Tuesday!"

**Menu approach:** "$10 Smash Burger (Tuesdays only)"

The difference matters:

- Discounts feel like charity. Menu items feel like value.
- Discounts train customers to wait. Menu items create specific-day demand.
- Discounts require coupon codes. Menu items are just the price.

We added a $10 Smash Burger to the Tuesday menu. Not a discount. The price.

## Step 4: Track the Results

After implementation, we compared year-over-year:

- **Before:** $38,743 total Tuesday revenue
- **After:** $60,346 total Tuesday revenue
- **Lift:** +$21,603 (+56%)

Tuesday went from our worst day to a legitimate draw.

## Why This Works

The psychology is simple:

When you discount, customers think: *"This must not be worth full price."*

When you price strategically, customers think: *"I'm getting a great deal on something they're proud of."*

The Smash Burger was already popular at $14. At $10 on Tuesdays, it felt like stealing. But we didn't call it a discount. It's just what the burger costs on Tuesday.

## Applying This Across the Portfolio

Same framework, different venues:

**Locals Pub - Wing Wednesday**
- Data: 455 wings sold (strong volume)
- Recommendation: $10-12 wing special
- Status: Testing

**Salty Zebra - Truffle Pasta Night (Wednesday)**
- Data: Truffle pasta has 1% discount rate (premium perception)
- Recommendation: Feature it Wednesday, premium positioning
- Status: Active

**Locals Pub - Thursday (The Problem Child)**
- Data: Down 21% YoY (worst day)
- Recommendation: Crunchwrap special (high-margin, crowd-pleaser)
- Status: Planning

## The Framework for Your Restaurant

Here's how to run this yourself:

### 1. Export 12 months of day-of-week sales data

From Toast, Square, or whatever POS you use. You need total revenue by day of week, same period last year for comparison.

### 2. Identify your weak day(s)

Look for flat or declining YoY, consistent underperformance, staff complaints about slow shifts.

### 3. Analyze your product mix

Find items with high volume (people already order them), low discount rate (people pay full price), and good margins.

### 4. Create a menu-priced special

Not a discount. A price. "$12 Tacos on Taco Tuesday" hits different than "25% off tacos Tuesday."

### 5. Track YoY after implementation

Give it 8-12 weeks. Compare same period last year. If you're not up 20%+, adjust.

## What Doesn't Work

A few things we learned the hard way:

**Discounting premium items:** Don't put your $45 steak on a 30% discount. It cheapens the brand and attracts deal-seekers who won't return at full price.

**Too many special nights:** If every night is a special, no night is special. Pick 1-2 weak days and fix those.

**Complicated promotions:** "Buy two apps, get the third 50% off with a drink purchase" makes servers' heads explode. Simple works.

**Ignoring the data:** Your gut says wings are popular. The data says burgers outsell wings 3:1. Trust the data.

## Your Turn

Pull your day-of-week sales data for the last 12 months. Find your weakest day.

Then answer:

- What's your highest-volume item with a low discount rate?
- What would it look like to feature that item on your weak day?
- How would you measure success?

Tuesday doesn't have to be your worst day. It can be your growth story.

---

*If you want us to run this analysis for your restaurants, that's part of the Discovery Audit. We'll identify your weak days, analyze your product mix, and recommend specials that actually drive revenue—not just traffic.*
        `.trim()
    },
    {
        slug: 'messy-new-years-eve-secretly-a-win',
        title: "What I Learned from a 'Messy' New Year's Eve That Was Secretly a Win",
        description: "Sometimes the nights that feel like chaos are the ones that reveal your systems are actually working. Here's what NYE 2025 taught me about restaurant operations.",
        date: '2026-01-02',
        tags: ['Operations', 'Lessons Learned', 'Restaurant Life'],
        readTime: 4,
        youtubeId: null,
        content: `
## The Night Everything Felt Wrong

New Year's Eve 2025. Three restaurants. 600+ covers total. And by 9 PM, I was convinced it was all falling apart.

The POS went down at Salty Zebra for 12 minutes. A no-call no-show on the line at Locals. The Lightbulb ran out of champagne flutes an hour before midnight.

Classic restaurant chaos, right?

## Then I Checked the Numbers

Here's what I found the next morning when I actually looked at the data:

- **Revenue was up 18%** from last NYE across all three spots
- **Food cost came in at 28%** despite the madness (we budgeted 30%)
- **Labor held at 24%** even with the overtime we had to pay
- **Zero negative reviews** posted that night

The systems worked. The budgets held. The team executed.

## What Actually Matters

I spent years thinking success meant everything running perfectly. Now I know better.

Success is when your systems catch the problems before they become disasters. When your team knows what to do without you standing over them. When the numbers tell a different story than your stress level.

## The Real Lesson

Your restaurant doesn't need to feel smooth to be profitable. It needs systems that work even when things get messy.

That's what I build for restaurant owners now. Not perfection—resilience.

---

**If you're tired of the chaos without the profits to show for it, let's talk.** I'll audit your contracts and operations to find where money is leaking—using the same system I use in my own restaurants.
        `.trim()
    }
];

/**
 * Get all posts sorted by date (newest first)
 */
export const getAllPosts = () => {
    return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Get a single post by slug
 */
export const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug);
};

/**
 * Get all unique tags
 */
export const getAllTags = () => {
    const tags = new Set();
    posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
};
