// Shared featured-collection slideshow component. Include this script
// wherever a `[data-collection-showcase]` element exists (shop page,
// homepage, etc.) — it finds the PRODUCTS entry with type "collection"
// and renders the same interactive gallery everywhere, so every
// instance stays in sync automatically as images/copy change.
document.addEventListener("DOMContentLoaded", () => {
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
