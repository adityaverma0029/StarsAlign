# Phase 0 — Site Audit Inventory

## 1. Project Context
- **Product Name**: starsalign (starsalign.in)
- **Nature**: Influence Marketing Agency
- **Audience**: Brands looking for creator partnerships; Content creators applying to talent roster
- **Stack**: Pure HTML5, Vanilla CSS, Vanilla JavaScript (ES6+), Google Apps Script API endpoints for form submissions

---

## 2. Interactive Elements & Routes Inventory

### Navigation & Header
- `a.logo` (`href="/"`, `aria-label="starsalign Homepage"`) — Contains `.logo-icon-wrapper` (`logo.png`) + text `starsalign.`
- `a.nav-link` (`href="#services"`) — "Services"
- `a.nav-link` (`href="#why-starsalign"`) — "Why us?"
- `a.nav-link` (`href="#contact"`) — "Contact"
- `a.btn.btn-primary` (`href="#contact"`) — "Get in Touch" (contains inline style)
- `button.mobile-toggle#mobileToggle` (`aria-label="Toggle Menu"`) — Hamburger toggle

### Mobile Menu Drawer (`#mobileMenu`)
- `a.mobile-nav-link` (`href="#services"`) — "services"
- `a.mobile-nav-link` (`href="#why-starsalign"`) — "why us"
- `a.mobile-nav-link` (`href="#contact"`) — "contact"
- `a.btn.btn-primary` (`href="#contact"`) — "Get in Touch" (contains inline style)

### Hero Section (`#hero`)
- `canvas#heroCanvas` — 160-frame scroll-linked canvas
- `a.btn.btn-hero-primary` (`href="#contact"`) — "GET IN TOUCH" with circular arrow icon
- `a.btn.btn-secondary` (`href="https://tally.so/r/eqX7q0"`, `target="_blank"`, `rel="noopener noreferrer"`) — "I'm a Creator" with external link icon

### Contact Section (`#contact`)
- `form#companyForm`
- `input#companyName` (`name="name"`, `type="text"`, required)
- `input#companyBrand` (`name="brand"`, `type="text"`, required)
- `input#companyEmail` (`name="email"`, `type="email"`, required)
- `div#companyCountryPicker`
  - `button#companyCountryBtn` (`type="button"`) — Country picker button
  - `div#companyCountryDropdown` — Dropdown with `.country-search-input` and `.country-list`
- `input#companyPhoneInput` (`name="phone"`, `type="tel"`, required)
- `textarea#companyMessage` (`name="message"`)
- `button.submit-btn#companySubmitBtn` (`type="submit"`) — "Submit Brand Inquiry"
- `div#companyFeedback` (`.form-feedback`) — Submission alert status
- `a.creator-link` (`href="https://tally.so/r/eqX7q0"`, `target="_blank"`, `rel="noopener noreferrer"`) — Creator application link

### Footer
- `a.logo` (`href="#"`) — Needs retarget to `#hero` or `/`

---

## 3. Style & Layout Defects Found
1. **Critical Hero Visibility Bug**: `.hero-left-content` has `opacity: 0; pointer-events: none; transform: translateY(40px)`. Only becomes visible when scrolled > 6% (`.scroll-visible`). On page load, hero is blank / invisible.
2. **Missing Scroll Margin**: Anchor jumps (`#services`, `#why-starsalign`, `#contact`) get partially covered by the fixed navigation bar.
3. **Global Focus Ring Stripped**: `outline: none` on inputs without `:focus-visible` replacement.
4. **Ad-hoc & Inline Styles**: Inline styles on header CTA, mobile drawer CTA, hero creator CTA icon, and footer tagline.
5. **Dead CSS Rules**: `.hero-portal-container`, `.hero-portal-img`, `.hero-media-wrapper` leftover from previous portal iteration.
6. **Contrasts & Typography**: Dark palette does not adhere to the requested warm off-white `#FAF8F4`, charcoal `#111216`, mint `#2EE6A0`, amber `#FFC21A` palette with Bricolage Grotesque and Inter fonts.

---

## 4. Media & Assets Inventory
- `logo.png`: 13KB black star icon on white background.
- `frames/ezgif-frame-001.png` - `160.png`: 160 sequence frames for cinematic canvas.
- Unsplash imagery (Services 1-3 and Why Us).
