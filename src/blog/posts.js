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
