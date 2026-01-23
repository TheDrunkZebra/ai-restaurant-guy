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
