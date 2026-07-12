// Hardcoded product data. No database — edit this array directly to
// add, remove, or update products.
const PRODUCTS = [
  {
    slug: "boot-stripes",
    name: "Boot Straps",
    category: "Boot Straps",
    type: "stock",
    priceLabel: "₦30,000",
    sizes: [],
    description:
      "Reflective and leather strap sets for boots, sold in pairs. A small detail that changes how a worn pair reads. Fits most lace-up work and combat boots.",
    images: [
      "/assets/images/products/boot-stripes/real-4.jpg",
      "/assets/images/products/boot-stripes/real-1.jpg",
      "/assets/images/products/boot-stripes/real-2.jpg",
      "/assets/images/products/boot-stripes/real-3.jpg"
    ]
  },
  {
    slug: "custom-pant",
    name: "Custom Pants",
    category: "Pants",
    type: "made_to_order",
    priceLabel: "₦30,000 – ₦45,000",
    sizes: [],
    sizeGuideLink: true,
    orderFields: [
      { name: "waist", label: "Waist (in)", type: "text", required: true },
      { name: "hip", label: "Hip (in)", type: "text", required: true },
      { name: "length", label: "Inseam / Length (in)", type: "text", required: true },
      { name: "fabric", label: "Fabric / material", type: "text", placeholder: "e.g. black twill", required: true }
    ],
    description:
      "Made to your measurements. Straight leg, mid-rise, built from durable twill. Choose your fabric and we cut to fit. Every pair is made after the order is placed — allow time for production.",
    images: [
      "/assets/images/products/custom-pant/real-1.jpg",
      "/assets/images/products/custom-pant/real-2.jpg",
      "/assets/images/products/custom-pant/real-3.jpg",
      "/assets/images/products/custom-pant/real-4.jpg",
      "/assets/images/products/custom-pant/real-5.jpg",
      "/assets/images/products/custom-pant/real-6.jpg",
      "/assets/images/products/custom-pant/real-7.jpg"
    ]
  },
  {
    slug: "custom-boot",
    name: "Custom Boots",
    category: "Boots",
    type: "made_to_order",
    priceLabel: "₦50,000",
    sizes: [],
    orderFields: [
      { name: "shoeSize", label: "Shoe size (UK/EU)", type: "text", placeholder: "e.g. UK 9 / EU 43", required: true },
      { name: "designRequest", label: "Custom design request", type: "textarea", placeholder: "Describe the design, colors, patches, or theme you want", required: true }
    ],
    description:
      "Sneakers customized to order — studs, patches, hand-painted designs, and rework on your own pair or ours. Tell us your size and what you want built.",
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
    type: "made_to_order",
    priceLabel: "Price on request",
    sizes: [],
    orderFields: [
      { name: "headCircumference", label: "Head circumference (in)", type: "text", placeholder: "e.g. 22.5", required: false },
      { name: "notes", label: "Customization notes", type: "textarea", placeholder: "Rhinestones, medallions, charms, colorway, etc.", required: true }
    ],
    description:
      "Bedazzled and studded caps and visors, customized with rhinestones, medallions, and charms. Colorway and embellishment are worked out with you. Pricing and availability to be confirmed.",
    images: [
      "/assets/images/products/custom-caps-hats/real-1.jpg",
      "/assets/images/products/custom-caps-hats/real-2.jpg"
    ]
  },
  {
    slug: "leather-shorts",
    name: "HEX",
    category: "Shorts",
    type: "inquiry",
    priceLabel: "₦15,000",
    sizes: [],
    description:
      "Black faux leather shorts with lace-up grommet detail and tab closures at the waist. Pricing and availability to be confirmed.",
    images: [
      "/assets/images/products/leather-shorts/real-4.jpg",
      "/assets/images/products/leather-shorts/real-1.jpg",
      "/assets/images/products/leather-shorts/real-2.jpg",
      "/assets/images/products/leather-shorts/real-3.jpg"
    ]
  },
  {
    slug: "freedom-and-rebellion",
    name: "Rebellion & Freedom Collection",
    category: "Rebellion & Freedom",
    type: "collection",
    featured: true,
    priceLabel: "Browse the collection",
    sizes: [],
    description:
      "A capsule of studded leather, lace-up hardware, and grommet detail — jackets, pants, the mini skirt, and the bag.",
    images: [
      "/assets/images/products/freedom-and-rebellion/cover.jpg",
      "/assets/images/products/freedom-and-rebellion/jacket-2.jpg",
      "/assets/images/products/freedom-and-rebellion/jacket-4.jpg"
    ],
    items: [
      {
        name: "Buckle Strap Leather Jacket",
        priceLabel: "Price on request",
        description:
          "Studded leather jacket with a snap-button closure and buckle straps. Style and finish vary piece to piece.",
        images: [
          "/assets/images/products/freedom-and-rebellion/buckle-jacket-1.jpg",
          "/assets/images/products/freedom-and-rebellion/jacket-4.jpg",
          "/assets/images/products/freedom-and-rebellion/buckle-jacket-2.jpg",
          "/assets/images/products/freedom-and-rebellion/buckle-jacket-3.jpg"
        ]
      },
      {
        name: "Lace-Up Leather Panel Pants",
        priceLabel: "Price on request",
        description:
          "Black pants with leather side panels and lace-up grommet detail.",
        images: ["/assets/images/products/freedom-and-rebellion/pants-1.jpg"]
      },
      {
        name: "Buckled Cargo Pants",
        priceLabel: "Price on request",
        description:
          "Cargo-style pants with a buckled leg strap and chain accent.",
        images: ["/assets/images/products/freedom-and-rebellion/pants-2.jpg"]
      },
      {
        name: "Custom Leather Mini Skirt",
        priceLabel: "₦15,000",
        description:
          "Croc-embossed leather mini skirt with grommet and lacing detail at the waist.",
        images: [
          "/assets/images/products/custom-leather-mini-skirt/real-1.jpg",
          "/assets/images/products/custom-leather-mini-skirt/real-2.jpg",
          "/assets/images/products/custom-leather-mini-skirt/real-3.jpg"
        ]
      },
      {
        name: "Leather Backpack",
        priceLabel: "Price on request",
        description:
          "Studded leather backpack with a flap closure, drawstring top, and a zip front pocket.",
        images: [
          "/assets/images/products/leather-backpack/real-2.jpg",
          "/assets/images/products/leather-backpack/real-1.png"
        ]
      },
      {
        name: "Lace-Up Collar Sweater",
        priceLabel: "Price on request",
        description:
          "Heather knit top with a leather lace-up bib collar and grommet detail.",
        images: [
          "/assets/images/products/freedom-and-rebellion/lace-collar-sweater-1.jpg",
          "/assets/images/products/freedom-and-rebellion/lace-collar-sweater-2.jpg"
        ]
      }
    ]
  }
];
