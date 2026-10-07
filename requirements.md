# Web-Page Project - Requirements & Feature Specification

## Project Vision
Create a personalized website inspired by the design and functionality of **maheshrakheja.com** — a clean, professional portfolio/personal website that showcases skills, experience, projects, and personality.

---

## Core Requirements (Non-Negotiable)

### R1: Design Inspiration
- **Reference**: maheshrakheja.com
- **Style**: Clean, minimal, professional, modern
- **Focus**: Typography, whitespace, visual hierarchy

### R2: Responsive Design
- **Mobile-first** approach
- **Breakpoints**: 320px, 768px, 1024px, 1440px+
- **Performance**: Optimized images, lazy loading, minimal JS

### R3: Accessibility
- **WCAG 2.1 AA** compliance
- Semantic HTML5
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation
- Focus indicators

---

## Functional Requirements

### F1: Hero Section
- [ ] Full-screen or prominent hero
- [ ] Name/title display
- [ ] Brief tagline/value proposition
- [ ] CTA button(s)
- [ ] Optional: animated element, background image/video

### F2: About Section
- [ ] Professional summary/bio
- [ ] Skills/technologies (visual tags or cards)
- [ ] Profile photo or illustration
- [ ] Download CV/resume button

### F3: Experience/Work History
- [ ] Timeline or card-based layout
- [ ] Company, role, dates
- [ ] Key achievements per role
- [ ] Technologies used per role

### F4: Projects/Portfolio
- [ ] Grid or masonry layout
- [ ] Project cards with: thumbnail, title, description, tech stack, links (live/demo, GitHub)
- [ ] Filter by category/tech (optional)
- [ ] Modal or detail page on click

### F5: Blog/Writing (Optional)
- [ ] Article list with excerpts
- [ ] Categories/tags
- [ ] Reading time estimates
- [ ] RSS feed

### F6: Contact Section
- [ ] Contact form (Formspree, Netlify Forms, or custom backend)
- [ ] Social links (LinkedIn, GitHub, Twitter/X, Email)
- [ ] Location/timezone (optional)

### F7: Footer
- [ ] Copyright notice
- [ ] Quick navigation links
- [ ] Social icons
- [ ] Last updated timestamp

---

## Technical Stack (TBD - Need Your Input)

| Layer | Options | Decision |
|-------|---------|----------|
| **Framework** | Astro, Next.js, Vite+React, SvelteKit, Hugo, 11ty, plain HTML/CSS/JS | ❓ |
| **Styling** | Tailwind CSS, CSS Modules, Styled Components, vanilla CSS, UnoCSS | ❓ |
| **Deployment** | Vercel, Netlify, Cloudflare Pages, GitHub Pages, AWS | ❓ |
| **CMS/Content** | Markdown files, headless CMS (Sanity, Contentful), Notion, JSON | ❓ |
| **Forms** | Formspree, Netlify Forms, EmailJS, custom API | ❓ |
| **Analytics** | Plausible, Umami, Google Analytics, none | ❓ |

---

## Content Requirements (Need Your Input)

### Personal Information
- [ ] Full name
- [ ] Professional title/headline
- [ ] Short bio (2-3 sentences)
- [ ] Long bio (paragraph)
- [ ] Profile photo (or prefer illustration/avatar?)
- [ ] Location (city, country)
- [ ] Timezone
- [ ] Email for contact
- [ ] Phone (optional)
- [ ] Resume/CV file (PDF)

### Social Links
- [ ] LinkedIn
- [ ] GitHub
- [ ] Twitter/X
- [ ] Instagram
- [ ] YouTube
- [ ] Dev.to / Medium / Hashnode
- [ ] Other: ___________

### Skills & Technologies
- [ ] Programming languages
- [ ] Frameworks/libraries
- [ ] Tools/platforms
- [ ] Databases
- [ ] Cloud/DevOps
- [ ] Design tools
- [ ] Soft skills
- [ ] Categorization (Frontend, Backend, DevOps, Design, etc.)

### Experience
For each role:
- [ ] Company name
- [ ] Role title
- [ ] Employment type (Full-time, Contract, Freelance, Internship)
- [ ] Start date - End date (or "Present")
- [ ] Location (or Remote)
- [ ] Description (2-4 bullet points of achievements)
- [ ] Technologies used
- [ ] Company logo (optional)

### Projects
For each project:
- [ ] Project name
- [ ] Short description (1-2 sentences)
- [ ] Long description (for detail view)
- [ ] Thumbnail/screenshot image
- [ ] Tech stack (array)
- [ ] Live demo URL
- [ ] GitHub/repo URL
- [ ] Category (Web App, Mobile, CLI, Library, etc.)
- [ ] Featured flag (show prominently)
- [ ] Start/end dates

### Blog Posts (if applicable)
- [ ] Title
- [ ] Slug
- [ ] Publish date
- [ ] Excerpt/summary
- [ ] Full content (Markdown)
- [ ] Cover image
- [ ] Tags/categories
- [ ] Reading time

---

## Design Preferences (Need Your Input)

### Color Scheme
- [ ] Light mode only / Dark mode only / Both with toggle
- [ ] Preferred primary color (hex or reference)
- [ ] Preferred accent color
- [ ] Reference sites for color inspiration

### Typography
- [ ] Font preference (sans-serif, serif, monospace, specific font)
- [ ] Google Fonts / Self-hosted / System fonts
- [ ] Heading font vs body font (same or different)

### Visual Style
- [ ] Minimal/clean vs bold/expressive
- [ ] Rounded vs sharp corners
- [ ] Shadows: subtle, pronounced, none
- [ ] Animations: subtle (fade/slide), bold (complex), minimal/none
- [ ] Illustrations: custom, stock, none, geometric shapes
- [ ] Background: solid, gradient, pattern, image

### Layout Preferences
- [ ] Single-page (scroll) vs multi-page
- [ ] Navigation: fixed header, sidebar, hamburger menu
- [ ] Section transitions
- [ ] Parallax effects (yes/no)

---

## Performance & SEO Requirements
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Core Web Vitals optimized
- [ ] Meta tags (Open Graph, Twitter Cards)
- [ ] Sitemap.xml generation
- [ ] robots.txt
- [ ] Structured data (JSON-LD for Person, Website, BlogPosting)
- [ ] Image optimization (WebP/AVIF, responsive images)

---

## Open Questions / Decisions Needed

|| Question | Options | Your Preference |
||----------|---------|-----------------|
|| Framework? | Astro / Next.js / Vite+React / SvelteKit / Hugo / 11ty / Plain | **Astro** ✅ |
|| Styling? | Tailwind / CSS Modules / Styled Components / Vanilla CSS / UnoCSS | **Tailwind CSS** ✅ |
|| Deployment? | Vercel / Netlify / Cloudflare Pages / GitHub Pages / Other | **Netlify** ✅ |
|| Content source? | Markdown files / Headless CMS / Notion / JSON | **Markdown/YAML files** ✅ |
|| Dark mode? | Yes (toggle) / Yes (system) / No | **Yes (toggle)** ✅ |
|| Blog section? | Yes / No / Later | **Yes** ✅ |
|| Contact form backend? | Formspree / Netlify Forms / EmailJS / Custom / None | **Netlify Forms** ✅ |
|| Analytics? | Plausible / Umami / GA4 / None | **Plausible** ✅ |
|| Single-page or multi-page? | Single-page / Multi-page | **Single-page** ✅ |
|| Animations level? | Minimal / Subtle / Rich / None | **Subtle** ✅ |

---

## Success Metrics
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility = 100
- [ ] Lighthouse SEO > 90
- [ ] Page load < 2s on 3G
- [ ] Zero console errors
- [ ] Works without JS (progressive enhancement)

---

## References
- **Primary inspiration**: maheshrakheja.com
- **Design references**: [Add your favorites]
- **Technical references**: [Add any]
- **Personal archive reference**: bhagavanprasad.com (April 2019 snapshot) - see `archive-analysis.md`

---

## Archive Analysis Summary (bhagavanprasad.com)

### Existing Content to Leverage
From the April 2019 Wayback Machine snapshot of your previous site:

#### Personal Information
- **Name**: M. Bhagavan Prasad
- **Location**: Visakhapatnam, Andhra Pradesh, India
- **Email**: me@bhagavanprasad.com
- **Current Role**: SDE-EETP at BSNL (Employability Enhancement Training Program)
- **Mission**: Teaching telecom technology to engineering students & employees

#### Education
1. **Diploma in EEE** - Visakhapatnam
2. **B.Tech** - JNTU, Kakinada (Project: Computer Methods in Power System Analysis)
3. **M.Tech (Part-time)** - Andhra University, Visakhapatnam (Computer Science Engineering)

#### Technical Interests & Skills
- **Telecom/Communication Engineering** (profession)
- **Electrical Engineering** (degree foundation)
- **Computer Science** (passion - power systems, computerization)
- **Cyber Security & Ethical Hacking** (current passion - AFCEH certified)
- **Teaching/Pedagogy** (core job function)

#### Key Inspirations
- **Ankit Fadia** → Ethical hacking certification (AFCEH)
- **Mahesh Rakheja** → Presentation style, audience engagement

#### Personal Philosophy
- "Feeling the technology rather than just learning"
- "Playing with technology gives me peace, sharing gives me happiness"
- God's grace, officer support, family love, friends

#### Existing Site Structure (6 pages)
1. **Home** - Full bio, education journey, career pivot
2. **Trainings in BSNL** - 4 training programs offered
3. **My Activities** - Photo gallery (Zoho widget)
4. **My Photography** - Photo gallery (Zoho widget)
5. **My Other Blogs** - Link to Google Sites archive
6. **Downloads** - Link to Google Sites for software

#### External References
- BSNL Training Blog: `bsnlvisakhapatnamtrainings.blogspot.in`
- Old Google Sites: `sites.google.com/site/mbhagavanprasad/home`

#### Design Notes from Archive
- **Platform**: Zoho Sites 1.0
- **Layout**: Two-column (left content 70%, right nav 30%)
- **Banner**: 614×250px image on all pages
- **Typography**: Multiple Google Fonts (Lato, Droid Serif, Merriweather, etc.)
- **Colors**: Dark theme, white text (#ffffff), yellow accents (#faff00)
- **Navigation**: Vertical sidebar menu
- **Footer**: Visitor counter (since Dec 2016), Zoho branding

---

*Last Updated: 2026-10-07*
*Version: 1.1 - Added archive analysis from bhagavanprasad.com*