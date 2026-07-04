// Hardcoded product data. No database — edit this array directly to
// add, remove, or update products.
const PRODUCTS = [
  {
    slug: "jacket",
    name: "Jacket",
    category: "Jackets",
    type: "stock",
    priceLabel: "₦30,000",
    sizes: ["S", "M", "L", "XL"],
    description:
      "A structured outer layer built for movement. Heavyweight cotton, reinforced seams, cut close without restricting the shoulders. Made to hold its shape through repeated wear.",
    images: [
      "/assets/images/products/jacket/1.jpg",
      "/assets/images/products/jacket/2.jpg",
      "/assets/images/products/jacket/3.jpg"
    ]
  },
  {
    slug: "boot-stripes",
    name: "Boot Stripes",
    category: "Boot Stripes",
    type: "stock",
    priceLabel: "₦12,000 – ₦18,000",
    sizes: [],
    description:
      "Reflective and leather stripe sets for boots, sold in pairs. A small detail that changes how a worn pair reads. Fits most lace-up work and combat boots.",
    images: [
      "/assets/images/products/boot-stripes/1.jpg",
      "/assets/images/products/boot-stripes/2.jpg"
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
      "/assets/images/products/custom-pant/1.jpg",
      "/assets/images/products/custom-pant/2.jpg"
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
      "/assets/images/products/custom-boot/1.jpg",
      "/assets/images/products/custom-boot/2.jpg"
    ]
  }
];
