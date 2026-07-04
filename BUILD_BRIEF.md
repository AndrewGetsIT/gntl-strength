# GNTL STRENGTH — Claude Code Build Brief (v2 — lean scope)

For: Claude Code, via GitHub web editor → Netlify deploy
From: Andrew Lennon, on behalf of his cousin's friend (client)
Source doc: Gntl_Strength_Website_Build_Guide.pdf

**Scope note:** This is a small paid job on a tight timeline. No payment gateway, no database, no backend functions. Ordering happens via WhatsApp click-to-order. Product data is hardcoded in the repo. Keep everything as simple as it can be while still matching the brand's visual direction.

---

## 1. Tech stack

| Layer | Tool | Notes |
|---|---|---|
| Frontend | Static HTML/CSS/vanilla JS, one file per page | No framework, no build step |
| Product data | Hardcoded JS/JSON file in repo | 4 products, no DB needed |
| Ordering | WhatsApp click-to-order (`wa.me` links) | No cart, no payment gateway |
| Forms (email signup, contact) | Netlify Forms | Built-in, zero backend code |
| Hosting | Netlify | |
| Repo | GitHub (web editor only) | |

No Supabase. No Paystack. No Netlify Functions required for launch.

---

## 2. Design tokens

Pulled directly from the brand guide — do not substitute a generic palette.

```css
--bg-light: #EDE8E0;   /* warm bone */
--bg-dark: #1C1B19;    /* deep charcoal */
--accent: #8A9A7E;     /* sage green — CONFIRM with client, clay (#B5654A) is the alternative */
--text-on-light: #1C1B19;
--text-on-dark: #EDE8E0;
--radius: 2px;         /* sharp corners, no pill shapes, no heavy shadows */
```

**Typography**
- Headlines: tall, slightly condensed sans — Neue Montreal, Aktiv Grotesk, or PP Neue Machina if licensed; otherwise free fallback (Archivo, Barlow Condensed)
- Body: lighter weight of the same family, or a simple humanist sans (Inter, General Sans)
- No script/handwriting fonts anywhere

**Layout rules**
- Sections alternate bone/charcoal backgrounds as the page scrolls
- Generous negative space around products — do not crowd
- Full-bleed hero image on homepage with headline overlaid
- Subtle grain/texture overlay on hero images (CSS noise texture or a semi-transparent PNG overlay)
- **Mobile-first** — guide states most traffic is Instagram/TikTok → mobile

**Tone of voice**
Calm, direct, physical. Short sentences. No exclamation points, no hype language.

---

## 3. Repo structure

```
/
├── index.html              (Home)
├── shop.html                (Product grid)
├── product.html              (PDP — reads ?slug= from URL)
├── size-guide.html
├── about.html
├── contact.html
├── /css/
│   └── styles.css
├── /js/
│   ├── main.js              (nav, shared UI)
│   ├── products.js            (hardcoded product data array)
│   ├── shop.js               (grid + filtering, reads products.js)
│   └── product.js             (PDP logic, builds WhatsApp order link)
├── /assets/
│   └── images/
│       ├── hero/
│       ├── products/jacket/
│       ├── products/boot-stripes/
│       ├── products/custom-pant/
│       ├── products/custom-boot/
│       └── texture/
└── netlify.toml
```

**Image handling:** Andrew pulls images from the client's Google Drive folder into `/assets/images/` per the structure above. Claude Code builds pages with `<img>` paths pointing at the expected locations and doesn't need to wait on the actual files to build the rest.

---

## 4. Product data (`js/products.js`)

Hardcode as a plain array, no database:

```js
const PRODUCTS = [
  {
    slug: "jacket",
    name: "Jacket",
    category: "Jackets",
    type: "stock",
    priceLabel: "₦30,000",
    sizes: ["S", "M", "L", "XL"],
    description: "...",
    images: ["/assets/images/products/jacket/1.jpg", ...]
  },
  {
    slug: "boot-stripes",
    name: "Boot Stripes",
    category: "Boot Stripes",
    type: "stock",
    priceLabel: "₦12,000 – ₦18,000",
    sizes: [],
    description: "...",
    images: [...]
  },
  {
    slug: "custom-pant",
    name: "Custom Pant",
    category: "Pants",
    type: "made_to_order",
    priceLabel: "₦30,000 – ₦45,000",
    description: "...",
    images: [...]
  },
  {
    slug: "custom-boot",
    name: "Custom Boot",
    category: "Boots",
    type: "made_to_order",
    priceLabel: "₦50,000",
    description: "...",
    images: [...]
  }
];
```

Exact price within a range is settled over WhatsApp — no pricing logic needed in code.

---

## 5. Pages

### Home (`index.html`)
- Full-bleed hero, headline "Strong in Motion" overlaid, grain texture
- Featured/current drop section — pulls from `PRODUCTS`
- Short brand statement (from PDF concept section, rewritten to spec voice)
- Email signup form — Netlify Forms, `data-netlify="true"`, no JS needed

### Shop (`shop.html`)
- Grid of all products from `PRODUCTS`
- Filter by category: Jackets, Boot Stripes, Pants, Boots (pure client-side JS filter)

### Product Detail (`product.html`)
- Reads `?slug=` from URL, looks up product in `PRODUCTS`
- Images, description, price label, size selection (stock items only)
- **Stock items:** "Order on WhatsApp" button → opens `wa.me/[NUMBER]?text=...` pre-filled with product name, size, price
- **Made-to-order items:** on-page form (name, phone, measurements: chest/waist/hip/length, fabric/material choice) → on submit, builds a pre-filled WhatsApp message from the form values and opens `wa.me` link. Pure client-side string building, no server storage.
- Link to Size Guide page

### Size Guide (`size-guide.html`)
- Static measurement chart: chest, waist, hip, length + how-to-measure instructions

### About (`about.html`)
- Brand story in spec tone

### Contact (`contact.html`)
- Simple form via Netlify Forms, or just a WhatsApp button + email address

---

## 6. WhatsApp ordering flow

- Every product page has a primary CTA that opens `https://wa.me/[NUMBER]?text=[URL-ENCODED MESSAGE]`
- Stock item message template: `Hi, I'd like to order: [Product name], size [X]. Price: [priceLabel].`
- Custom item message template (built from form fields): `Hi, I'd like to order a [Product name]. Measurements — Chest: X, Waist: X, Hip: X, Length: X. Fabric: X. Name: X, Phone: X.`
- **Need the client's WhatsApp Business number before this can be wired up.**

---

## 7. Functionality checklist

- [ ] Product grid with category filtering
- [ ] WhatsApp click-to-order on stock items
- [ ] Custom order form → pre-filled WhatsApp message on submit
- [ ] Size guide linked from every PDP
- [ ] Email signup (Netlify Forms, homepage + footer)
- [ ] Mobile-responsive, mobile-first build order
- [ ] Grain/texture overlay on hero images
- [ ] Alternating light/dark section backgrounds

---

## 8. Before Claude Code starts building — confirm with client

1. **WhatsApp Business number** — required for every order button to work
2. **Accent color** — sage green (#8A9A7E) is the working default; confirm vs. clay/terracotta (#B5654A)
3. **Font licensing** — confirm client owns Neue Montreal/Aktiv Grotesk/PP Neue Machina, or approve free fallback
