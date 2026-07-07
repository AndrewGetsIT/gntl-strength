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

    grid.innerHTML = items
      .map(
        (p) => `
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
