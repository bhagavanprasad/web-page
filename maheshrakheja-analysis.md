# Mahesh Rakheja Site Analysis (maheshrakheja.com)

## Overview
Reference site for the web-page project. Clean, minimal, professional portfolio/personal website.

## Color Scheme
- **Primary**: Dark theme with white/light text
- **Background**: Near-black (#0a0a0a or similar)
- **Text**: White (#ffffff) for headings, light gray for body
- **Accent**: Yellow/gold (#faff00 or similar) - used for highlights, links, CTAs
- **Secondary accents**: Subtle blues/greens for code snippets or tech tags

## Typography
- **Headings**: Serif font (likely Playfair Display or similar elegant serif)
- **Body**: Clean sans-serif (Inter, System UI, or similar)
- **Code/Technical**: Monospace (JetBrains Mono, Fira Code, or similar)
- **Hierarchy**: Clear distinction between heading levels

## Layout Structure
### Homepage (Single-page scroll)
1. **Hero Section**
   - Full viewport height
   - Name + title prominently displayed
   - Tagline/philosophy quote
   - CTA buttons (Know More, Contact)
   - Location + email inline
   - Social links (GitHub, LinkedIn, Twitter, etc.)
   - Scroll indicator animation

2. **About Section**
   - Two-column layout (bio + philosophy/inspirations)
   - Philosophy cards with checkmarks
   - Inspiration cards with avatars/initials

3. **Experience/Education Timeline**
   - Vertical timeline with dots
   - Alternating or left-aligned cards
   - Company/institution, role, dates
   - Description bullets
   - Technologies/tags
   - Achievements highlighted

4. **Skills Section**
   - Categorized skill groups (Telecom, Cyber Security, Electrical, CS, Teaching, Tools)
   - Icon + category name + skill list
   - Grid layout (2-3 columns)

5. **Projects Section**
   - Featured projects first (larger cards)
   - Thumbnail + title + description + tech stack
   - Live demo + GitHub links
   - Collapsible "Other Projects" section

6. **Contact Section**
   - Contact form (left) + contact info (right)
   - Form fields: Name, Email, Subject, Message
   - Direct contact: Email, Phone, Location
   - Social links grid

7. **Footer**
   - Name/brand
   - Quick navigation links
   - Social icons
   - Copyright + "Built with Astro & Tailwind"

## Animations & Micro-interactions
- **Page load**: Fade-in/slide-up for hero elements
- **Scroll animations**: IntersectionObserver-based reveal (fade + slide)
- **Hover effects**: 
  - Cards: subtle scale + border color change
  - Buttons: background color transition + shadow
  - Links: underline animation
  - Social icons: scale + color change
- **Navigation**: Smooth scroll to sections
- **Dark mode toggle**: Icon swap (sun/moon) with smooth transition
- **Mobile menu**: Slide-down animation
- **Timeline dots**: Pulse or highlight on scroll
- **Project cards**: Image zoom on hover, overlay fade-in

## Responsive Behavior
- **Desktop (>1024px)**: Full multi-column layouts, fixed navigation
- **Tablet (768-1024px)**: 2-column grids, hamburger menu
- **Mobile (<768px)**: Single column, stacked sections, bottom navigation considerations

## Key Design Principles Observed
1. **Minimal whitespace** - generous padding, breathing room
2. **Visual hierarchy** - clear heading sizes, weight contrast
3. **Consistent spacing** - 8px base unit system
4. **Dark-first design** - optimized for dark mode
5. **Content-focused** - no unnecessary decorative elements
6. **Accessibility** - semantic HTML, focus states, ARIA labels
7. **Performance** - optimized images, minimal JS

## Technical Stack Indicators
- Static site generator (likely Astro, Next.js, or similar)
- Tailwind CSS or similar utility-first framework
- No heavy JS frameworks (vanilla JS for interactions)
- Netlify/Vercel deployment

## Differences from Current Implementation
| Aspect | Current | Maheshrakheja |
|--------|---------|---------------|
| Color accent | Blue | Yellow/Gold |
| Hero background | Solid/gradient | May have subtle pattern |
| Timeline | Left-aligned | Centered with line |
| Skills icons | Emoji | Custom SVG icons |
| Project cards | Featured + collapsible | Similar |

## Recommendations for Our Site
1. Consider yellow/gold accent instead of blue (matches archive analysis)
2. Use serif font for headings (Playfair Display already in use ✓)
3. Add scroll-triggered animations (IntersectionObserver)
4. Enhance timeline with center line
5. Add subtle background pattern/texture to hero
6. Consider custom SVG icons for skills categories
7. Add reduced-motion media query support
8. Ensure Lighthouse scores > 90 across all metrics