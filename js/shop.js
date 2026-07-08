// Shop grid: renders PRODUCTS and filters by category client-side.
// Featured collections (type: "collection") are excluded from the
// filterable grid and rendered separately as an inline slideshow.
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

  // Featured collection slideshow
  const showcase = document.querySelector("[data-collection-showcase]");
  const collection = PRODUCTS.find((p) => p.type === "collection");
  if (showcase && collection) {
    renderCollectionShowcase(showcase, collection);
  }
});

function renderCollectionShowcase(root, product) {
  let index = 0;

  root.innerHTML = `
    <div class="collection-showcase">
      <div class="collection-showcase-slide">
        <button type="button" class="collection-nav collection-nav-prev" data-carousel-prev aria-label="Previous image">&larr;</button>
        <div class="collection-showcase-image">
          <img data-carousel-image src="${product.images[0]}" alt="${product.name} view 1">
        </div>
        <button type="button" class="collection-nav collection-nav-next" data-carousel-next aria-label="Next image">&rarr;</button>
      </div>
      <div class="collection-showcase-info">
        <p class="eyebrow">Featured Collection</p>
        <h3>${product.name}</h3>
        <p class="collection-showcase-desc">${product.description}</p>
        <p class="collection-showcase-counter" data-carousel-counter>1 / ${product.images.length}</p>
      </div>
    </div>`;

  const img = root.querySelector("[data-carousel-image]");
  const counter = root.querySelector("[data-carousel-counter]");

  function show(i) {
    index = (i + product.images.length) % product.images.length;
    img.src = product.images[index];
    img.alt = `${product.name} view ${index + 1}`;
    counter.textContent = `${index + 1} / ${product.images.length}`;
  }

  root.querySelector("[data-carousel-prev]").addEventListener("click", () => show(index - 1));
  root.querySelector("[data-carousel-next]").addEventListener("click", () => show(index + 1));
}
