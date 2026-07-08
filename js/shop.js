// Shop grid: renders PRODUCTS and filters by category client-side.
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-product-grid]");
  const filterBar = document.querySelector("[data-filter-bar]");
  if (!grid) return;

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

  filterBar.innerHTML = categories
    .map(
      (cat, i) =>
        `<button class="filter-btn${i === 0 ? " is-active" : ""}" data-category="${cat}">${cat}</button>`
    )
    .join("");

  function render(category) {
    const items =
      category === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === category);

    const ordered = [...items].sort(
      (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    );

    grid.innerHTML = ordered
      .map((p) =>
        p.featured
          ? `
      <a class="product-card-featured" href="/product.html?slug=${p.slug}">
        <div class="product-card-featured-image">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-card-featured-info">
          <p class="eyebrow">Featured Collection</p>
          <h3>${p.name}</h3>
          <p class="product-card-featured-desc">${p.description}</p>
          <span class="product-card-featured-cta">${p.priceLabel} &rarr;</span>
        </div>
      </a>`
          : `
      <a class="product-card" href="/product.html?slug=${p.slug}">
        <div class="product-card-image">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-card-info">
          <h3>${p.name}</h3>
          <p class="product-card-price">${p.priceLabel}</p>
        </div>
      </a>`
      )
      .join("");
  }

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterBar
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    render(btn.dataset.category);
  });

  render("All");
});
