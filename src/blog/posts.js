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
