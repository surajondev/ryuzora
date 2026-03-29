# Design System Strategy: The Digital Pitch

## 1. Overview & Creative North Star
**The Creative North Star: "The Curated Stadium"**

This design system is built to transform a standard e-commerce transaction into an editorial experience. We are moving away from the "boxy" grid-locked feel of generic Shopify themes and moving toward a layout that feels like a high-end football periodical. By combining the minimalist precision of poster art with the aggressive conversion tactics of long-form performance brands, we create a "Curated Stadium"—an environment that is clean, professional, and deeply rooted in football culture.

The system breaks the "template" look through:
- **Intentional Asymmetry:** Using the `Spacing Scale` to create offset content blocks that guide the eye downward.
- **Tonal Layering:** Replacing harsh borders with depth created by subtle color shifts.
- **High-Contrast Typography:** Utilizing massive `Display` scales for impact, balanced with tight, functional `Label` scales for technical data.

---

## 2. Colors: Pitch & Performance
The palette is a sophisticated interpretation of the beautiful game. It avoids the neon "gamer" aesthetic in favor of deep stadium tones and crisp pitch whites.

- **Primary (`#002d1c`):** The "Deep Stadium Green." Used for high-authority elements, headers, and primary CTAs to ground the brand.
- **Secondary (`#705d00` / `#fcd400`):** The "Referee Yellow." A high-visibility accent used sparingly for "Bundle & Save" highlights, "Sale" badges, and urgent micro-copy.
- **Tertiary (`#550005`):** The "Jersey Red." Reserved for error states or limited-edition alerts.
- **Surface Hierarchy:** We utilize the `surface_container` tokens to create a "nested" depth.
    - **Surface (`#f9f9f9`):** The base pitch.
    - **Surface-Container-Low (`#f3f3f3`):** For secondary content sections (e.g., "How it Works").
    - **Surface-Container-Highest (`#e2e2e2`):** For interactive card backgrounds.

**The "No-Line" Rule:** 
Prohibit the use of `1px solid` borders to separate sections. Boundaries must be defined solely through background color shifts. For instance, a "Product Specs" section using `surface-container-low` should sit directly against a `surface` hero section. 

**The "Glass & Gradient" Rule:** 
For the sticky 'Add to Cart' and floating navigation, use `surface_container_lowest` with a 85% opacity and a `backdrop-blur: 12px` effect. Use a subtle linear gradient (Primary to Primary-Container) for main CTAs to give them a "poly-glass" tactile feel.

---

## 3. Typography: The Editorial Playbook
The typography strategy creates a hierarchy that feels both athletic and premium.

- **The Power (Space Grotesk):** Our `display` and `headline` tiers use Space Grotesk. It provides a geometric, sporty "tech" feel that mirrors modern jersey typography.
    - *Usage:* `display-lg` (3.5rem) for Hero Headlines; `headline-sm` (1.5rem) for section titles.
- **The Precision (Inter):** Our `title`, `body`, and `label` tiers use Inter. It is the gold standard for readability in long-form product descriptions.
    - *Usage:* `body-md` (0.875rem) for product descriptions; `label-md` (0.75rem) for technical specs (dimensions, paper weight).

---

## 4. Elevation & Depth: Tonal Layering
Rather than using shadows to lift elements, we use "Tonal Layering" to create a sense of physical sheets of paper stacked on a pitch.

- **The Layering Principle:** Place a `surface_container_lowest` card (Pure White) on a `surface_container_low` background. This creates a soft, natural lift without the "dirty" look of heavy shadows.
- **Ambient Shadows:** For floating elements like the "Bundle & Save" box, use an extra-diffused shadow: `0 20px 40px rgba(26, 28, 28, 0.06)`. This mimics soft stadium lighting rather than harsh digital shadows.
- **The "Ghost Border" Fallback:** If a boundary is required for accessibility in input fields, use `outline_variant` at 20% opacity. Never use 100% opaque borders.
- **Glassmorphism:** Apply to floating "Review Popups" and "Sticky ATC" bars to allow the poster artwork to bleed through, maintaining a sense of place.

---

## 5. Components: The High-Conversion Kit

### Buttons
- **Primary:** Background `primary`, Text `on_primary`. 0.25rem (sm) corner radius. Use `spacing-6` for horizontal padding.
- **Secondary:** Background `surface_container_highest`, Text `on_surface`. No border.
- **Sticky Add to Cart:** A floating `surface_container_lowest` bar with `backdrop-blur` and a `primary` button.

### Bundle & Save Boxes
- **Structure:** Use `surface_container_low` for the container.
- **Highlight:** Use a `secondary_container` (Yellow) "Most Popular" badge in the top right, using `label-sm` uppercase text.
- **Separation:** No lines. Use `surface_container_lowest` white backgrounds for the individual option cards to make them "pop" against the grey container.

### Benefit-Driven Iconography
- **Style:** 24px stroke-based icons. Use the `primary` color for the icon and `secondary_fixed` (light yellow) for a soft circular background "halo."

### Cards & Lists
- **The Poster Card:** Image-first. Content is center-aligned using `title-sm` for the name and `body-sm` for the price. Forbid divider lines; use `spacing-4` (1.4rem) of vertical white space to separate the image from the text.

---

## 6. Do's and Don'ts

### Do
- **DO** use asymmetric margins (e.g., `margin-left: 10` and `margin-right: 0`) for editorial layouts to create a sense of movement.
- **DO** use the `secondary` (Yellow) for "conversion triggers" only—ATC buttons, sale prices, and trust badges.
- **DO** crop poster images with a very subtle `roundedness-sm` (0.125rem) to soften the "digital" edge.

### Don't
- **DON'T** use black (`#000000`) for text. Use `on_surface` (`#1a1c1c`) to maintain a premium, ink-on-paper feel.
- **DON'T** use 1px solid borders to define the grid. If the layout feels messy, increase the `spacing` scale values instead.
- **DON'T** use standard "Star Rating" yellows. Use our `secondary` token to ensure the gold-tone feels intentional to the brand.

---

## 7. Interaction Pattern
- **Hover States:** When hovering over a poster card, the background should shift from `surface` to `surface_container_low` with a 200ms ease-in-out transition.
- **Micro-copy:** Use `label-sm` for "Tax included" or "Shipping calculated" text, set in `on_surface_variant` to reduce visual noise and keep the focus on the product title.