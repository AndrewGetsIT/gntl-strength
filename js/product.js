// Product detail page: reads ?slug= from the URL, renders the product,
// and builds the pre-filled WhatsApp order link.
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("[data-product-root]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    root.innerHTML = `
      <div class="pdp-missing">
        <h1>Product not found</h1>
        <p>That item isn't in the current lineup.</p>
        <a class="btn btn-primary" href="/shop.html">Back to shop</a>
      </div>`;
    return;
  }

  document.title = `${product.name} — GNTL STRENGTH`;

  const gallery = product.images
    .map(
      (src, i) =>
        `<img src="${src}" alt="${product.name} view ${i + 1}" loading="${i === 0 ? "eager" : "lazy"}">`
    )
    .join("");

  const sizesMarkup =
    product.type === "stock" && product.sizes.length
      ? `
      <div class="pdp-sizes">
        <span class="pdp-label">Size</span>
        <div class="size-options" data-size-options>
          ${product.sizes
            .map(
              (s, i) =>
                `<button type="button" class="size-btn${i === 0 ? " is-active" : ""}" data-size="${s}">${s}</button>`
            )
            .join("")}
        </div>
      </div>`
      : "";

  const orderMarkup =
    product.type === "stock"
      ? `
      <button type="button" class="btn btn-primary btn-order" data-order-stock>
        Order on WhatsApp
      </button>`
      : `
      <form class="custom-order-form" data-custom-order-form>
        <p class="pdp-label">Custom order details</p>
        <label>
          Name
          <input type="text" name="name" required>
        </label>
        <label>
          Phone
          <input type="tel" name="phone" required>
        </label>
        <div class="measurement-grid">
          <label>
            Chest (in)
            <input type="text" name="chest" required>
          </label>
          <label>
            Waist (in)
            <input type="text" name="waist" required>
          </label>
          <label>
            Hip (in)
            <input type="text" name="hip" required>
          </label>
          <label>
            Length (in)
            <input type="text" name="length" required>
          </label>
        </div>
        <label>
          Fabric / material
          <input type="text" name="fabric" placeholder="e.g. black twill" required>
        </label>
        <button type="submit" class="btn btn-primary btn-order">
          Send order on WhatsApp
        </button>
      </form>
      <p class="pdp-note">Not sure on measurements? See the <a href="/size-guide.html">size guide</a>.</p>`;

  root.innerHTML = `
    <div class="pdp-gallery">${gallery}</div>
    <div class="pdp-info">
      <p class="pdp-category">${product.category}</p>
      <h1>${product.name}</h1>
      <p class="pdp-price">${product.priceLabel}</p>
      <p class="pdp-description">${product.description}</p>
      ${sizesMarkup}
      ${orderMarkup}
      <a class="pdp-size-link" href="/size-guide.html">Size guide</a>
    </div>`;

  let selectedSize = product.sizes && product.sizes[0];

  const sizeOptions = root.querySelector("[data-size-options]");
  if (sizeOptions) {
    sizeOptions.addEventListener("click", (e) => {
      const btn = e.target.closest(".size-btn");
      if (!btn) return;
      sizeOptions
        .querySelectorAll(".size-btn")
        .forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      selectedSize = btn.dataset.size;
    });
  }

  const orderStockBtn = root.querySelector("[data-order-stock]");
  if (orderStockBtn) {
    orderStockBtn.addEventListener("click", () => {
      const sizePart = selectedSize ? `, size ${selectedSize}` : "";
      const message = `Hi, I'd like to order: ${product.name}${sizePart}. Price: ${product.priceLabel}.`;
      openWhatsApp(message);
    });
  }

  const customForm = root.querySelector("[data-custom-order-form]");
  if (customForm) {
    customForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(customForm);
      const message =
        `Hi, I'd like to order a ${product.name}. ` +
        `Measurements — Chest: ${data.get("chest")}, Waist: ${data.get("waist")}, ` +
        `Hip: ${data.get("hip")}, Length: ${data.get("length")}. ` +
        `Fabric: ${data.get("fabric")}. ` +
        `Name: ${data.get("name")}, Phone: ${data.get("phone")}.`;
      openWhatsApp(message);
    });
  }

  function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
  }
});
