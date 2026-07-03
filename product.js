/* ============================================================
   PRODUCT DETAIL PAGE LOGIC
   Reads ?slug=... from the URL, matches it against the entry's
   "url" field in Contentstack, and renders the detail view.
   ============================================================ */

async function initProductPage() {
  const container = document.getElementById("product-detail");
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug) {
    container.innerHTML = `<div class="empty-state">No product specified.</div>`;
    return;
  }

  try {
    const product = await csFetchEntryByUrl("product", `/${slug}`);
    if (!product) {
      container.innerHTML = `<div class="empty-state">Couldn't find that phone. It may have been unpublished in Contentstack.</div>`;
      return;
    }
    renderProduct(container, product);
  } catch (err) {
    console.error(err);
    renderErrorBanner(err.message);
  }
}

function renderProduct(el, p) {
  document.title = `${p.title} — Nova Mobile`;
  const imageUrl = p.image && p.image.url ? p.image.url : "https://placehold.co/600x700/1D2027/F5F3EF?text=No+Image";

  el.innerHTML = `
    <img src="${imageUrl}" alt="${p.title}" />
    <div>
      <span class="brand-tag">${p.brand}</span>
      <h1>${p.title}</h1>
      <span class="amount mono">${formatPrice(p.price)}</span>
      <p class="description">${p.short_description || ""}</p>
      <div class="spec-sheet">
        <span class="spec-sheet-label">Specifications</span>
        ${(p.specs || "").split("•").map((s) => s.trim()).filter(Boolean).join("\n")}
      </div>
      <a class="btn btn-ghost" href="index.html">← Back to all phones</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", initProductPage);
