// Collection detail page: reads ?slug= from the URL and renders every
// item in the collection, each with its own price (if set) and an
// "I'm Interested" button that opens a pre-filled WhatsApp message for
// that specific item.
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("[data-collection-root]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const collection = PRODUCTS.find((p) => p.slug === slug && p.type === "collection");

  if (!collection) {
    root.innerHTML = `
      <div class="pdp-missing">
        <h1>Collection not found</h1>
        <p>That collection isn't in the current lineup.</p>
        <a class="btn btn-primary" href="/shop.html">Back to shop</a>
      </div>`;
    return;
  }

  document.title = `${collection.name} — GNTL STRENGTH`;

  const leadImage = `<img class="collection-lead-image" src="${collection.images[0]}" alt="${collection.name}" loading="eager" data-reveal>`;

  const items = collection.items || [];

  const itemsMarkup = items
    .map((item, i) => {
      const gallery = item.images
        .map(
          (src, j) =>
            `<img src="${src}" alt="${item.name} view ${j + 1}" loading="lazy">`
        )
        .join("");
      return `
      <div class="collection-item" data-reveal data-reveal-stagger>
        <div class="collection-item-gallery">${gallery}</div>
        <div class="collection-item-info">
          <h3>${item.name}</h3>
          ${item.description ? `<p class="collection-item-desc">${item.description}</p>` : ""}
          <div class="collection-item-footer">
            <button type="button" class="btn btn-primary" data-item-interested="${i}">I'm Interested</button>
            <span class="collection-item-price">${item.priceLabel}</span>
          </div>
        </div>
      </div>`;
    })
    .join("");

  root.innerHTML = `
    <p class="eyebrow">Collection</p>
    <h1 class="mb-lg">${collection.name}</h1>
    <p class="max-prose mb-lg">${collection.description}</p>
    ${leadImage}
    <div class="collection-items">${itemsMarkup}</div>`;

  if (window.initScrollReveal) window.initScrollReveal(root);

  root.querySelectorAll("[data-item-interested]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = items[Number(btn.dataset.itemInterested)];
      const pricePart =
        item.priceLabel && item.priceLabel !== "Price on request"
          ? ` (${item.priceLabel})`
          : "";
      const message = `Hi, I'm interested in this item from the ${collection.name}: ${item.name}${pricePart}.`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener");
    });
  });
});
