# ArtGreenOtel — Website Super Prompt
## Paste this entire prompt into Claude (or Claude Code) to build the full React site

---

## PROJECT OVERVIEW

Build a **complete, production-ready, fully functional React website** for **ArtGreenOtel** — a premium luxury villa with 7 rooms located in **Sovata, Mureș County, Romania**, surrounded by forest and mountain scenery. The site must be ready to deploy online (Netlify / Vercel) with zero placeholders in functionality.

The site is used to **showcase and market** the villa to potential guests who then book via OTA platforms (Airbnb, Booking.com, Vrbo). There is no on-site booking engine — all "Book" CTAs open OTA links in a new tab.

---

## TECH STACK

- **Framework**: React (functional components + hooks)
- **Styling**: Tailwind CSS (utility-first, configured with custom design tokens)
- **Routing**: React Router v6 (single-page with smooth scroll + hash anchors)
- **Animations**: Framer Motion (page load stagger, scroll-triggered reveals, hover micro-interactions)
- **Icons**: Lucide React
- **Maps**: Google Maps embed (iframe) for the Location section
- **i18n**: React i18next for bilingual support (Romanian + English), with a persistent language toggle
- **Image handling**: All images use high-quality Unsplash URLs (nature, forest, mountain, luxury villa interior/exterior) as placeholders — use specific descriptive queries for each section so images feel contextually accurate
- **Build**: Vite
- **Deployment target**: Netlify or Vercel (include a `netlify.toml` or `vercel.json` with SPA redirect rules)

---

## DESIGN SYSTEM

### Aesthetic Direction
**Warm earthy elegance meets crisp white minimalism.** This is NOT a generic travel site. Every detail must feel intentional, refined, and premium. Think: a design-conscious boutique hotel site — generous whitespace, tactile warmth, restrained luxury. No dark busy backgrounds, no neon, no clutter.

### Color Palette (define as Tailwind config tokens)
```
cream-50:   #FDFAF5   ← primary background
cream-100:  #F5EFE0   ← secondary surface
warm-100:   #EDE0CC   ← card borders, dividers
warm-300:   #C4A882   ← accent lines, icon fills
warm-500:   #8B6E4E   ← primary accent / CTA background
warm-700:   #5C4230   ← headings, strong text
forest-700: #2D4A2D   ← deep green accent (nature badge, footer)
forest-500: #4A7C4A   ← secondary green accent
text-main:  #2A2218   ← body text
text-muted: #7A6A55   ← secondary text
white:      #FFFFFF
```

### Typography
- **Display font**: `Cormorant Garamond` (Google Fonts) — used for all section headings, hero titles, room names. Weights: 300, 400, 600. Italic variants for taglines.
- **Body font**: `Jost` (Google Fonts) — used for all body copy, labels, navigation, buttons. Weights: 300, 400, 500.
- **Scale**:
  - Hero title: 72px / line-height 1.05 / Cormorant 300
  - Section headings (h2): 48px / Cormorant 400
  - Sub-headings (h3): 28px / Cormorant 400
  - Body: 16px / Jost 300
  - Labels / Nav: 13px / Jost 500 / letter-spacing 0.12em uppercase
  - Buttons: 13px / Jost 500 / letter-spacing 0.1em uppercase

### Layout Principles
- Max content width: 1280px, centered, horizontal padding 24px (mobile) / 80px (desktop)
- Section vertical padding: 120px top/bottom (desktop), 72px (mobile)
- Grid: 12-column, with generous gutters
- All images use `object-fit: cover` with defined aspect ratios
- Hover states: subtle scale (1.02–1.04) on cards, color transitions on buttons (200ms ease)
- Section reveal: Framer Motion `whileInView` with `y: 40 → 0` and `opacity: 0 → 1`, `duration: 0.6`, `delay` staggered by 0.1s per child

### Navigation (sticky, transparent → white on scroll)
- Left: ArtGreenOtel logo (wordmark, Cormorant Garamond italic + a small leaf SVG icon)
- Center links (desktop): Rooms · Amenities · Spaces · Events · Gallery · Location
- Right: `Book Now` button (warm-500 bg, white text) + language toggle `RO | EN`
- Mobile: hamburger menu → full-screen slide-in drawer
- Active link: warm-500 underline indicator

---

## SITE STRUCTURE & CONTENT

Build a **single-page application** with smooth scroll to anchor sections. All sections listed below must be implemented.

---

### 1. HERO SECTION (`#home`)

**Layout**: Full viewport height. Background: full-bleed image (use Unsplash: luxury mountain forest villa exterior, golden hour). Dark gradient overlay (bottom 50%, opacity 0.5) so text reads clearly.

**Content (bilingual)**:
```
EN:
  Eyebrow label: "SOVATA · MUREȘ · ROMANIA"
  Headline: "Where Forest Meets Luxury"
  Subline: "Seven exceptional rooms. Timeless comfort. Nature at your door."
  CTA button: "Reserve Your Stay"

RO:
  Eyebrow: "SOVATA · MUREȘ · ROMÂNIA"
  Headline: "Unde Pădurea Întâlnește Luxul"
  Subline: "Șapte camere excepționale. Confort atemporal. Natura la ușa ta."
  CTA button: "Rezervă Acum"
```

**CTA button** opens a modal or scroll-to #book section with OTA links.

**Scroll indicator**: animated arrow pointing down, fades in after 1.5s.

---

### 2. ABOUT SECTION (`#about`)

**Layout**: Two-column (50/50 on desktop, stacked on mobile). Left: large portrait image (Unsplash: cozy luxury villa interior, warm fireplace tones). Right: text content.

**Content (bilingual)**:
```
EN:
  Label: "OUR STORY"
  Heading: "A Retreat Crafted for the Discerning Traveller"
  Body (3 short paragraphs):
    P1: Nestled in the heart of Sovata, surrounded by ancient forests and the 
        mineral-rich air of the Carpathians, ArtGreenOtel is a private sanctuary 
        designed for those who seek something beyond the ordinary.
    P2: Seven individually designed rooms blend natural materials — warm oak, 
        rough-cut stone, hand-woven linen — with discreet modern luxury. Every 
        detail has been considered, every comfort anticipated.
    P3: Whether you come to restore, celebrate, or connect with nature, 
        ArtGreenOtel welcomes you home.
  Small stat row: "7 Rooms · 2 Event Spaces · 1 Private Jacuzzi · Sovata Forest"

RO:
  Label: "POVESTEA NOASTRĂ"
  Heading: "Un Refugiu Creat pentru Călătorul Rafinat"
  Body:
    P1: Ascuns în inima Sovatei, înconjurat de păduri vechi și aerul mineral 
        bogat al Carpaților, ArtGreenOtel este un sanctuar privat pentru cei 
        care caută ceva dincolo de obișnuit.
    P2: Șapte camere cu design individual îmbină materiale naturale — stejar cald, 
        piatră brută, in țesut manual — cu lux modern discret. Fiecare detaliu 
        a fost gândit, fiecare confort anticipat.
    P3: Fie că vii să te refaci, să celebrezi sau să te conectezi cu natura, 
        ArtGreenOtel te primește acasă.
  Stat row: "7 Camere · 2 Spații Evenimente · 1 Jacuzzi Privat · Pădurea Sovata"
```

---

### 3. ROOMS SECTION (`#rooms`)

**Layout**: Centered heading + 7-card grid (3 columns desktop, 2 tablet, 1 mobile). Each card: room image (tall portrait aspect ratio 3:4), room name, short description, key icons (bed type, capacity, view), and a "Book This Room" button linking to Airbnb.

**Use placeholder room names and descriptions:**

```
Room 1 — "The Forest Suite"
  EN: A spacious suite with floor-to-ceiling views of the pine forest. King bed, sitting area, private balcony.
  RO: O suită spațioasă cu vedere panoramică spre pădurea de pini. Pat king, zonă de relaxare, balcon privat.
  Icons: King bed · 2 guests · Forest view · Balcony

Room 2 — "The Mountain Room"
  EN: Waking up to mountain silhouettes framed by natural oak beams. Queen bed, artisan bathroom.
  RO: Te trezești cu siluetele munților încadrate de grinzi de stejar natural. Pat queen, baie artizanală.
  Icons: Queen bed · 2 guests · Mountain view

Room 3 — "The Stone Loft"
  EN: Raw stone walls, high vaulted ceilings, and a private terrace. Double bed.
  RO: Pereți din piatră brută, tavane boltite înalte și o terasă privată. Pat dublu.
  Icons: Double bed · 2 guests · Terrace

Room 4 — "The Garden Room"
  EN: Ground floor access to the garden and outdoor lounge. Twin or double configuration.
  RO: Acces direct la grădină și lounge exterior. Configurație twin sau dublu.
  Icons: Twin/Double · 2 guests · Garden access

Room 5 — "The Hearth Room"
  EN: Centered around a handcrafted stone fireplace. Perfect for cooler seasons. King bed.
  RO: Centrat în jurul unui șemineu din piatră lucrat manual. Perfect pentru sezoanele răcoroase. Pat king.
  Icons: King bed · 2 guests · Fireplace

Room 6 — "The Canopy Suite"
  EN: Treetop views from a private mezzanine. Junior suite layout. Queen bed + sofa bed.
  RO: Vedere spre vârfurile copacilor dintr-un mezanin privat. Aspect de junior suite. Pat queen + canapea pat.
  Icons: Queen bed · 3 guests · Mezzanine · Forest view

Room 7 — "The Family Retreat"
  EN: The largest room — ideal for families or groups. Two queen beds, large bathroom, mountain views.
  RO: Cea mai mare cameră — ideală pentru familii sau grupuri. Două paturi queen, baie spațioasă, vedere spre munți.
  Icons: 2 Queen beds · 4 guests · Mountain view
```

**Card design**: cream-50 background, 1px warm-100 border, rounded-2xl, image fills top 60%, content in bottom 40%. "Book This Room" → outlined button (warm-500 border + text), on hover fills warm-500 with white text. Smooth transition.

**Airbnb OTA link placeholder**: use `https://airbnb.com` as href (user will replace with real links). Add `target="_blank" rel="noopener noreferrer"`.

---

### 4. AMENITIES SECTION (`#amenities`)

**Layout**: Centered heading, then a responsive icon-grid of amenity cards (4 columns desktop, 2 mobile). Each card: large Lucide icon, name, 1-line description.

**Amenities to include (bilingual labels)**:

| Icon (Lucide) | EN Name | RO Name | EN Description | RO Description |
|---|---|---|---|---|
| Waves | Outdoor Jacuzzi | Jacuzzi Exterior | Private hot tub under the open sky | Cadă cu hidromasaj privată sub cerul liber |
| Flame | Stone Fireplace | Șemineu din Piatră | Handcrafted fireplaces in select rooms | Șeminee lucrate manual în camere selecte |
| Thermometer | Finnish Sauna | Saună Finlandeză | Traditional dry sauna for deep relaxation | Saună uscată tradițională pentru relaxare profundă |
| Zap | Billiard Room | Sală de Biliard | Full-size billiard table in the games room | Masă de biliard completă în sala de jocuri |
| Trees | Forest & Mountain Views | Vedere la Pădure & Munte | Panoramic natural landscapes from every room | Peisaje naturale panoramice din fiecare cameră |
| UtensilsCrossed | Outdoor BBQ | Grătar Exterior | Fully equipped barbecue area with seating | Zonă de grătar complet echipată cu locuri de stat |
| Car | Private Parking | Parcare Privată | Secure on-site parking for all guests | Parcare securizată pentru toți oaspeții |
| Coffee | Gourmet Breakfast | Mic Dejun Gourmet | Optional breakfast with local Transylvanian produce | Mic dejun opțional cu produse locale transilvănene |

---

### 5. SPACES SECTION (`#spaces`)

Three visually distinct sub-sections, stacked vertically, alternating image-left / image-right layout.

**5a — Entertainment Space**
```
EN:
  Label: "ENTERTAINMENT"
  Heading: "Gather, Play, Celebrate"
  Body: The entertainment wing brings together a full bar stocked with artisan spirits 
        and local wines, and a dedicated games room with billiard, board games, and 
        a smart TV lounge. The perfect complement to long evenings with friends.

RO:
  Label: "ENTERTAINMENT"
  Heading: "Adunați-vă, Jucați, Celebrați"
  Body: Aripa de entertainment reunește un bar complet aprovizionat cu băuturi artizanale 
        și vinuri locale, și o sală de jocuri dedicată cu biliard, jocuri de societate 
        și un lounge cu smart TV. Complementul perfect pentru serile lungi cu prietenii.

Image: Unsplash — luxury bar interior warm lighting
```

**5b — Relaxation Space**
```
EN:
  Label: "WELLNESS & RELAXATION"
  Heading: "Unwind on Your Own Terms"
  Body: Step into the outdoor jacuzzi as the forest exhales around you. Breathe deep 
        in the Finnish sauna. Stretch out on the terrace lounge under open sky. 
        ArtGreenOtel is designed for the art of doing nothing beautifully.

RO:
  Label: "WELLNESS & RELAXARE"
  Heading: "Deconectați-vă în Ritmul Vostru"
  Body: Intrați în jacuzzi-ul exterior în timp ce pădurea respiră în jurul vostru. 
        Respirați adânc în sauna finlandeză. Relaxați-vă pe terasa lounge sub cerul deschis. 
        ArtGreenOtel este conceput pentru arta de a nu face nimic în mod sublim.

Image: Unsplash — outdoor jacuzzi forest luxury
```

**5c — Terrace & Outdoor**
```
EN:
  Label: "OUTDOOR LIVING"
  Heading: "The Forest as Your Living Room"
  Body: The private terrace and BBQ garden are an extension of the villa itself. 
        Dine al fresco, watch the mist rise over the mountains at dawn, or simply 
        sit in silence with a glass of local wine. Here, nature is the décor.

RO:
  Label: "VIAȚA ÎN AER LIBER"
  Heading: "Pădurea ca Sufragerie"
  Body: Terasa privată și grădina cu grătar sunt o extensie a vilei înseși. 
        Luați masa în aer liber, urmăriți ceața ridicându-se peste munți la răsărit, 
        sau stați pur și simplu în liniște cu un pahar de vin local. Natura este decorul.

Image: Unsplash — outdoor terrace mountain forest evening
```

---

### 6. EVENTS SECTION (`#events`)

**Layout**: Full-width warm earthy background (cream-100). Two event type cards side by side.

**Corporate Events:**
```
EN:
  Heading: "Corporate Retreats"
  Body: Remove your team from the noise of the city. ArtGreenOtel provides a 
        private, distraction-free environment for strategy sessions, team building, 
        and offsites. Full buyout available. Catering, AV equipment, and bespoke 
        programs available on request.
  CTA: "Enquire for Corporate Events" → mailto:events@artgreenotel.ro

RO:
  Heading: "Retreats Corporate"
  Body: Scoateți echipa din zgomotul orașului. ArtGreenOtel oferă un mediu privat, 
        fără distrageri, pentru sesiuni de strategie, team building și întâlniri offsite. 
        Închiriere exclusivă disponibilă. Catering, echipamente AV și programe personalizate 
        la cerere.
  CTA: "Contactați pentru Evenimente Corporate" → mailto:events@artgreenotel.ro
```

**Birthday Celebrations:**
```
EN:
  Heading: "Private Celebrations"
  Body: Mark the milestone in a setting that lives up to the occasion. Private dining, 
        curated décor, bar service, and exclusive use of the villa — whether for an 
        intimate gathering or a full-house celebration.
  CTA: "Plan Your Celebration" → mailto:events@artgreenotel.ro

RO:
  Heading: "Celebrări Private"
  Body: Marcați momentul important într-un cadru la înălțimea ocaziei. Cină privată, 
        decor personalizat, serviciu de bar și utilizare exclusivă a vilei — fie pentru 
        o întâlnire intimă, fie pentru o celebrare cu toată casa.
  CTA: "Planificați Celebrarea" → mailto:events@artgreenotel.ro
```

---

### 7. GALLERY SECTION (`#gallery`)

**Layout**: Masonry or CSS grid gallery — 3 columns desktop, 2 mobile. 12–16 images from Unsplash (mix: villa exterior, forest, mountain, interior rooms, jacuzzi, fireplace, terrace, food, sauna). On image click: lightbox modal with arrow navigation.

Implement a custom lightweight lightbox in React (no external lightbox library — build it with Framer Motion overlay).

---

### 8. LOCATION SECTION (`#location`)

**Layout**: Two columns. Left: Google Maps iframe centered on Sovata, Romania (lat: 46.5895, lng: 25.0824). Right: text content + getting here details.

**Embed code**:
```html
<iframe
  src="https://maps.google.com/maps?q=Sovata,+Romania&z=13&output=embed"
  width="100%"
  height="400"
  style="border:0; border-radius: 16px;"
  allowFullScreen
  loading="lazy"
/>
```

**Content (bilingual)**:
```
EN:
  Label: "FIND US"
  Heading: "Sovata, the Pearl of Transylvania"
  Body: Located in the heart of the Gurghiu Mountains, Sovata is Romania's premier 
        spa resort town, famous for Lake Ursu — the largest heliothermal lake in 
        the world. ArtGreenOtel sits minutes from the lake, enveloped by ancient 
        beech and pine forest.
  Getting Here:
    ✈ Cluj-Napoca Airport — 2h drive (127 km)
    🚗 Târgu Mureș — 45 min (55 km)
    🚂 Sovata Train Station — 10 min walk

RO:
  Label: "GĂSIȚI-NE"
  Heading: "Sovata, Perla Transilvaniei"
  Body: Situată în inima Munților Gurghiu, Sovata este cea mai importantă stațiune 
        balneară din România, faimoasă pentru Lacul Ursu — cel mai mare lac heliotermal 
        din lume. ArtGreenOtel se află la câteva minute de lac, învelit de păduri 
        vechi de fag și pin.
  Getting Here:
    ✈ Aeroportul Cluj-Napoca — 2h cu mașina (127 km)
    🚗 Târgu Mureș — 45 min (55 km)
    🚂 Gara Sovata — 10 min pe jos
```

---

### 9. BOOK NOW SECTION (`#book`)

**Layout**: Full-width section with dramatic background image (forest + villa, dark overlay). Centered white text. Three large OTA buttons.

**Content (bilingual)**:
```
EN:
  Heading: "Ready to Experience ArtGreenOtel?"
  Subline: "Choose your preferred platform to check availability and reserve your room."
  Buttons:
    [Airbnb logo/icon] "Book on Airbnb" → https://airbnb.com (placeholder)
    [Booking.com icon] "Book on Booking.com" → https://booking.com (placeholder)
    [Vrbo icon] "Book on Vrbo" → https://vrbo.com (placeholder)

RO:
  Heading: "Pregătit să Experimentezi ArtGreenOtel?"
  Subline: "Alege platforma preferată pentru a verifica disponibilitatea și a rezerva camera."
```

---

### 10. FOOTER

**Layout**: Dark forest-700 background. 4-column grid (stacked on mobile).

**Columns**:
1. Logo + tagline + social icons (Instagram, Facebook — placeholder links)
2. Quick links (all section anchors)
3. Contact: email (info@artgreenotel.ro), phone (+40 7xx xxx xxx placeholder), address (Sovata, Mureș, România)
4. Legal: Privacy Policy · Terms · Cookie Notice (placeholder pages or modals)

**Bottom bar**: © 2025 ArtGreenOtel · All rights reserved · RO | EN toggle

---

## BILINGUAL IMPLEMENTATION

Use **react-i18next**. Create two translation files:
- `src/locales/en/translation.json`
- `src/locales/ro/translation.json`

All user-visible strings must be translated. Language persists in `localStorage`. The toggle (RO | EN) appears in the navbar and footer. Default language: Romanian.

---

## PERFORMANCE & QUALITY REQUIREMENTS

- All images must have `loading="lazy"` and meaningful `alt` text (bilingual via i18next)
- Lighthouse score targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- Meta tags: title, description, Open Graph (og:title, og:description, og:image) — bilingual via `react-helmet-async`
- Fully responsive: 375px → 1920px
- Smooth scroll behavior via `scroll-behavior: smooth` on html element
- 404 page: styled, with back-to-home button

---

## FILE STRUCTURE

```
artgreenotel/
├── public/
│   └── favicon.ico (leaf/villa icon)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Rooms.jsx
│   │   ├── Amenities.jsx
│   │   ├── Spaces.jsx
│   │   ├── Events.jsx
│   │   ├── Gallery.jsx
│   │   ├── Lightbox.jsx
│   │   ├── Location.jsx
│   │   ├── BookNow.jsx
│   │   ├── Footer.jsx
│   │   └── LanguageToggle.jsx
│   ├── locales/
│   │   ├── en/translation.json
│   │   └── ro/translation.json
│   ├── hooks/
│   │   └── useScrollDirection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js     ← include custom color tokens above
├── vite.config.js
├── netlify.toml           ← SPA redirect: /* → /index.html 200
└── package.json
```

---

## CRITICAL DESIGN RULES (DO NOT VIOLATE)

1. **No sloppy design** — every spacing, font size, and color choice must be intentional and consistent with the design system defined above
2. **No generic AI aesthetics** — do not use Inter, Roboto, purple gradients, or stock travel site patterns
3. **Warmth over coldness** — the site should feel like a warm embrace, not a sterile hotel listing
4. **Mobile-first** — every section must look exceptional on mobile, not just tolerable
5. **Performance over decoration** — animations must be smooth (60fps), not laggy or distracting
6. **Bilingual parity** — every string in English must have a Romanian equivalent; no hardcoded text strings anywhere in JSX
7. **OTA links only** — do not build any booking form or calendar widget; all booking flows redirect to OTA platforms

---

## DELIVERABLE

Provide the **complete, working source code** for the entire application, file by file, ready to `npm install && npm run dev` and then `npm run build` for production. Include all translation JSON files fully populated. The site must work end-to-end with zero further configuration beyond replacing OTA placeholder links with real ones.
