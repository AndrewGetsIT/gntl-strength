// Shop grid: renders PRODUCTS and filters by category client-side.
// Featured collections (type: "collection") are excluded from the
// filterable grid — see collection-showcase.js for how those render.
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-product-grid]");
  const filterBar = document.querySelector("[data-filter-bar]");
  if (!grid) return;

  const gridProducts = PRODUCTS.filter((p) => p.type !== "collection");
  const categories = ["All", ...new Set(gridProducts.map((p) => p.category))];

  filterBar.innerHTML = categories
    .map(
      (cat, i) =>
        `<button class="filter-btn${i === 0 ? " is-active" : ""}" data-category="${cat}">${cat}</button>`
    )
    .join("");

  function render(category) {
    const items =
      category === "All"
        ? gridProducts
        : gridProducts.filter((p) => p.category === category);

    grid.innerHTML = items
      .map(
        (p) => `
      <a class="product-card" href="/product.html?slug=${p.slug}" data-reveal data-reveal-stagger>
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

    if (window.initScrollReveal) window.initScrollReveal(grid);
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
