// Hardcoded product data. No database — edit this array directly to
// add, remove, or update products.
const PRODUCTS = [
  {
    slug: "boot-stripes",
    name: "Boot Straps",
    category: "Boot Straps",
    type: "stock",
    priceLabel: "₦12,000 – ₦18,000",
    sizes: [],
    description:
      "Reflective and leather strap sets for boots, sold in pairs. A small detail that changes how a worn pair reads. Fits most lace-up work and combat boots.",
    images: [
      "/assets/images/products/boot-stripes/real-1.jpg",
      "/assets/images/products/boot-stripes/real-2.jpg",
      "/assets/images/products/boot-stripes/real-3.jpg",
      "/assets/images/products/boot-stripes/real-4.jpg"
    ]
  },
  {
    slug: "custom-pant",
    name: "Custom Pant",
    category: "Pants",
    type: "made_to_order",
    priceLabel: "₦30,000 – ₦45,000",
    sizes: [],
    description:
      "Made to your measurements. Straight leg, mid-rise, built from durable twill. Choose your fabric and we cut to fit. Every pair is made after the order is placed — allow time for production.",
    images: [
      "/assets/images/products/custom-pant/real-1.jpg",
      "/assets/images/products/custom-pant/real-2.jpg",
      "/assets/images/products/custom-pant/real-3.jpg",
      "/assets/images/products/custom-pant/real-4.jpg",
      "/assets/images/products/custom-pant/real-5.jpg",
      "/assets/images/products/custom-pant/real-6.jpg",
      "/assets/images/products/custom-pant/real-7.jpg",
      "/assets/images/products/custom-pant/real-11.jpg",
      "/assets/images/products/custom-pant/real-13.jpg",
      "/assets/images/products/custom-pant/real-15.jpg"
    ]
  },
  {
    slug: "custom-boot",
    name: "Custom Boot",
    category: "Boots",
    type: "made_to_order",
    priceLabel: "₦50,000",
    sizes: [],
    description:
      "Built to order from full-grain leather. Reinforced toe, stitched sole, made for daily wear and standing work. Tell us your size and we build from there.",
    images: [
      "/assets/images/products/custom-boot/real-1.jpg",
      "/assets/images/products/custom-boot/real-2.jpg",
      "/assets/images/products/custom-boot/real-3.jpg",
      "/assets/images/products/custom-boot/real-4.jpg",
      "/assets/images/products/custom-boot/real-5.jpg",
      "/assets/images/products/custom-boot/real-6.jpg",
      "/assets/images/products/custom-boot/real-7.jpg"
    ]
  },
  {
    slug: "custom-cap",
    name: "Custom Cap",
    category: "Caps & Hats",
    type: "inquiry",
    priceLabel: "Price on request",
    sizes: [],
    description:
      "Bedazzled and studded caps and visors, customized with rhinestones, medallions, and charms. Colorway and embellishment are worked out with you. Pricing and availability to be confirmed.",
    images: [
      "/assets/images/products/custom-caps-hats/real-1.jpg",
      "/assets/images/products/custom-caps-hats/real-2.jpg"
    ]
  },
  {
    slug: "leather-shorts",
    name: "Leather Shorts",
    category: "Shorts",
    type: "inquiry",
    priceLabel: "Price on request",
    sizes: [],
    description:
      "Black faux leather shorts with lace-up grommet detail and tab closures at the waist. Pricing and availability to be confirmed.",
    images: [
      "/assets/images/products/leather-shorts/real-1.jpg",
      "/assets/images/products/leather-shorts/real-2.jpg"
    ]
  },
  {
    slug: "leather-backpack",
    name: "Leather Backpack",
    category: "Bags",
    type: "inquiry",
    priceLabel: "Price on request",
    sizes: [],
    description:
      "Studded leather backpack with a flap closure, drawstring top, and a zip front pocket. Pricing and availability to be confirmed.",
    images: [
      "/assets/images/products/leather-backpack/real-2.jpg",
      "/assets/images/products/leather-backpack/real-1.jpg"
    ]
  },
  {
    slug: "custom-leather-mini-skirt",
    name: "Custom Leather Mini Skirt",
    category: "Skirts",
    type: "inquiry",
    priceLabel: "Price on request",
    sizes: [],
    description:
      "Croc-embossed leather mini skirt with grommet and lacing detail at the waist. Pricing and availability to be confirmed.",
    images: [
      "/assets/images/products/custom-leather-mini-skirt/real-1.jpg",
      "/assets/images/products/custom-leather-mini-skirt/real-2.jpg",
      "/assets/images/products/custom-leather-mini-skirt/real-3.jpg"
    ]
  },
  {
    slug: "leather-jacket",
    name: "Custom Leather Jacket",
    category: "Jackets",
    type: "inquiry",
    priceLabel: "Price on request",
    sizes: [],
    description:
      "Black leather jacket with hardware detail, built to order. Style and finish vary piece to piece. Pricing and availability to be confirmed.",
    images: [
      "/assets/images/products/leather-jacket/real-1.jpg",
      "/assets/images/products/leather-jacket/real-2.jpg"
    ]
  },
  {
    slug: "freedom-and-rebellion",
    name: "Freedom & Rebellion Collection",
    category: "Freedom & Rebellion",
    type: "collection",
    featured: true,
    priceLabel: "Browse the collection",
    sizes: [],
    description:
      "A capsule of studded leather, lace-up hardware, and grommet detail — jackets and pants.",
    images: [
      "/assets/images/products/freedom-and-rebellion/cover.jpg",
      "/assets/images/products/freedom-and-rebellion/jacket-1.jpg",
      "/assets/images/products/freedom-and-rebellion/jacket-2.jpg",
      "/assets/images/products/freedom-and-rebellion/jacket-4.jpg",
      "/assets/images/products/freedom-and-rebellion/pants-1.jpg",
      "/assets/images/products/freedom-and-rebellion/pants-2.jpg",
      "/assets/images/products/freedom-and-rebellion/buckle-jacket-1.jpg"
    ]
  }
];
