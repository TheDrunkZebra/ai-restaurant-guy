# UI/UX Specialist Audit Prompt: AI Restaurant Guy Website

## Your Role
You are a world-class UI/UX specialist and conversion rate optimization expert. You specialize in analyzing B2B SaaS and technology consultancy websites, with deep expertise in high-converting landing page structures (inspired by companies like Square, Stripe, Notion, Linear, and other premium tech brands).

## The Mission
Conduct a comprehensive audit of the AI Restaurant Guy website (`http://localhost:5173` or deployed version) and provide actionable recommendations to transform it into a world-class, high-converting landing page that restaurant owners will trust and want to buy from.

## Current Website Context

### Business Model
- **Target Audience:** Independent restaurant owners and operators
- **Value Proposition:** AI-powered automation systems that replace expensive agencies ($6k+/mo) and fractional CFOs ($150/hr)
- **Products:** 4 core systems (Landing Page Builder $497, Content Engine $997, Financial Intelligence $2997, ShiftPilot $97)
- **Brand Identity:** "Wildly Refined. Zero Pretense." - Chicago Culinary Discipline meets Florida Terroir
- **Key Metrics to Highlight:** $72k recovered Year 1, 80+ hours back/month, 3% prime cost reduction

### Current Structure (Issues Identified)
1. **No True Hero Section** - Current hero lacks impact, visual hierarchy, and clear value proposition above the fold
2. **Weak Information Architecture** - Sections don't follow a proven conversion flow
3. **Lack of Visual Hierarchy** - Content doesn't guide the eye naturally through the page
4. **Missing Trust Elements** - Limited social proof, testimonials, and credibility indicators
5. **No Clear Narrative Arc** - Missing the classic: Problem → Solution → Proof → Action structure

### Current Color Palette
- Background: `#0B0F14` (Deep Charcoal)
- Surface: `#0E131B` (Cement Grey)
- Primary Accent: `#00E0FF` (Cyan)
- Secondary Accent: `#9EF01A` (Green)
- Text Primary: `#F8FAFC` (White)
- Text Secondary: `#94A3B8` (Slate)

## Reference Sites for Inspiration
Study these high-converting B2B SaaS/tech sites for structure and best practices:
- **Square** - Clean hero, clear value prop, strong social proof
- **Stripe** - Minimalist design, clear CTAs, excellent typography
- **Notion** - Beautiful product showcases, clear benefits
- **Linear** - Modern, clean, conversion-focused
- **Vercel** - Strong hero sections, clear messaging
- **Figma** - Excellent visual hierarchy and product demos

## Your Audit Should Cover

### 1. Hero Section Analysis & Recommendations
- [ ] **Above-the-Fold Impact:** Does the hero immediately communicate value? What's missing?
- [ ] **Headline Hierarchy:** Is the headline compelling? Does it follow the "Dream Outcome" framework?
- [ ] **Visual Balance:** Is the portrait/image placement optimal? Should it be removed, repositioned, or replaced?
- [ ] **CTA Placement:** Are primary and secondary CTAs clear and compelling?
- [ ] **Trust Indicators:** Are badges, logos, or social proof visible above the fold?
- [ ] **Recommended Structure:** Provide a complete hero section structure (headline, subheadline, CTA, trust elements)

### 2. Information Architecture & Page Flow
- [ ] **Conversion Funnel:** Does the page follow a logical flow? (Awareness → Interest → Desire → Action)
- [ ] **Section Order:** Recommend the optimal order of sections (Hero → Problem → Solution → Proof → Products → Testimonials → CTA → Footer)
- [ ] **Scannability:** Is content easy to scan? Are there enough visual breaks?
- [ ] **Progressive Disclosure:** Is information revealed at the right pace?

### 3. Visual Design & Hierarchy
- [ ] **Typography Scale:** Are font sizes creating proper hierarchy? (H1, H2, H3, body text)
- [ ] **Whitespace:** Is there enough breathing room between sections?
- [ ] **Color Usage:** Are accent colors used strategically to guide attention?
- [ ] **Visual Weight:** Do important elements (CTAs, metrics, testimonials) have enough visual weight?
- [ ] **Consistency:** Are spacing, borders, shadows, and effects consistent throughout?

### 4. Trust & Social Proof
- [ ] **Testimonials:** Are testimonials prominent and credible?
- [ ] **Case Studies:** Is the case study section compelling? Should it be expanded?
- [ ] **Metrics Display:** Are ROI metrics displayed prominently and credibly?
- [ ] **Trust Badges:** Should we add logos, certifications, or partner badges?
- [ ] **Risk Reversal:** Are guarantees, free trials, or risk-free offers visible?

### 5. Product Showcase
- [ ] **Product Cards:** Are the 4 product cards clear and compelling?
- [ ] **Pricing Display:** Is pricing clear and easy to understand?
- [ ] **Feature Lists:** Are features scannable and benefit-focused?
- [ ] **Comparison:** Should we add a comparison table or "Why Choose Us" section?

### 6. Call-to-Action Strategy
- [ ] **CTA Placement:** Are CTAs placed at optimal decision points?
- [ ] **CTA Copy:** Is the copy action-oriented and benefit-focused?
- [ ] **CTA Design:** Do buttons stand out without being overwhelming?
- [ ] **Multiple CTAs:** Should we have different CTAs for different stages of the funnel?

### 7. Mobile Experience
- [ ] **Responsive Design:** How does the site perform on mobile?
- [ ] **Touch Targets:** Are buttons and links appropriately sized?
- [ ] **Mobile Navigation:** Is navigation clear on mobile?
- [ ] **Content Prioritization:** Is the most important content visible on mobile?

### 8. Conversion Optimization
- [ ] **Friction Points:** What elements create friction or confusion?
- [ ] **Objection Handling:** Are common objections addressed on the page?
- [ ] **Urgency/Scarcity:** Should we add urgency or scarcity elements?
- [ ] **Exit Intent:** Should we add exit-intent popups or offers?

## Deliverables Required

### 1. Executive Summary (1-2 pages)
- Overall assessment of current state
- Top 5 critical issues to fix immediately
- Quick wins that can be implemented in <2 hours
- Estimated conversion rate improvement potential

### 2. Detailed Section-by-Section Analysis
For each major section (Hero, Products, Case Study, Form, Footer):
- Current state assessment
- What's working
- What's not working
- Specific recommendations with rationale
- Visual mockup descriptions or wireframe suggestions

### 3. Recommended Page Structure
Provide a complete, recommended page structure with:
- Section order
- Section purposes
- Key content elements for each section
- CTA placement strategy

### 4. Design System Recommendations
- Typography scale (H1-H6, body, captions)
- Spacing system (consistent padding/margins)
- Color usage guidelines
- Component patterns (buttons, cards, forms)
- Animation/micro-interaction suggestions

### 5. Competitive Analysis
- How does this site compare to Square, Stripe, or other reference sites?
- What elements should we borrow/adapt?
- What makes us unique that we should emphasize?

### 6. Implementation Priority Matrix
- **P0 (Critical - Do First):** Must-fix issues blocking conversions
- **P1 (High Impact):** High ROI improvements
- **P2 (Nice to Have):** Polish and refinement
- **P3 (Future):** Advanced features or experiments

### 7. Specific Code/Design Recommendations
- Exact component structure recommendations
- CSS/Tailwind class suggestions
- Layout recommendations (grid systems, flexbox patterns)
- Specific copy suggestions for headlines, CTAs, etc.

## Constraints & Requirements

### Technical Stack
- React + Vite
- Tailwind CSS (must use Tailwind, no custom CSS unless necessary)
- Current color palette should be maintained (but usage can be optimized)
- Must be mobile-responsive

### Brand Guidelines
- Maintain "Wildly Refined. Zero Pretense." aesthetic
- Keep current color palette
- Professional but approachable tone
- Restaurant owner-focused (not tech-focused)

### Content Requirements
- Must highlight: $72k recovered, 80+ hours/month, 3% prime cost reduction
- Must showcase 4 products with pricing
- Must include case study/testimonial from Seamus O'Brien
- Must have lead capture form

## Success Criteria
After implementing your recommendations, the site should:
1. **Immediately communicate value** - Visitors understand what we do in <3 seconds
2. **Build trust quickly** - Social proof and credibility visible above the fold
3. **Guide the journey** - Clear path from awareness to action
4. **Reduce friction** - Easy to understand, easy to take action
5. **Feel premium** - Looks like a $100k agency built it
6. **Convert restaurant owners** - Clear value prop that resonates with target audience

## Additional Context
- The site is for restaurant owners who are often time-strapped and skeptical of tech solutions
- They need to see ROI quickly and understand the value before committing
- Many are not tech-savvy, so simplicity is key
- They respond to peer testimonials and real numbers

---

## Your Response Format

Please structure your response as:

1. **Executive Summary** (2-3 paragraphs)
2. **Critical Issues** (Top 5 with explanations)
3. **Recommended Page Structure** (Complete section-by-section breakdown)
4. **Detailed Recommendations** (For each section)
5. **Design System Guidelines** (Typography, spacing, colors, components)
6. **Implementation Roadmap** (Priority-ordered action items)
7. **Code Examples** (Where applicable - React/Tailwind snippets)

Be specific, actionable, and reference the best practices from Square, Stripe, and other high-converting sites. Focus on conversion optimization while maintaining the brand's "Wildly Refined" aesthetic.

---

**Ready to begin your audit. Please provide your comprehensive analysis and recommendations.**










