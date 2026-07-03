/* ============================================================
   CONTENTSTACK DELIVERY API HELPERS
   ------------------------------------------------------------
   Thin wrapper around Contentstack's Content Delivery REST API.
   Docs: https://www.contentstack.com/docs/developers/apis/content-delivery-api
   You should not need to edit this file.
   ============================================================ */

async function csFetchEntries(contentTypeUid) {
  if (CONFIG.USE_MOCK_DATA) {
    if (contentTypeUid === "product") return MOCK_PRODUCTS;
    if (contentTypeUid === "hero_banner") return [MOCK_HERO];
    return [];
  }

  const baseUrl = REGION_BASE_URLS[CONFIG.REGION];
  const url = `${baseUrl}/v3/content_types/${contentTypeUid}/entries?environment=${CONFIG.ENVIRONMENT}`;

  const response = await fetch(url, {
    headers: {
      api_key: CONFIG.API_KEY,
      access_token: CONFIG.DELIVERY_TOKEN,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Contentstack request failed (${response.status}) for "${contentTypeUid}". ` +
        `Double-check API_KEY, DELIVERY_TOKEN, ENVIRONMENT and REGION in js/config.js.\n${body}`
    );
  }

  const data = await response.json();
  return data.entries || [];
}

async function csFetchEntryByUrl(contentTypeUid, urlPath) {
  if (CONFIG.USE_MOCK_DATA) {
    const all = contentTypeUid === "product" ? MOCK_PRODUCTS : [];
    return all.find((entry) => entry.url === urlPath) || null;
  }

  const baseUrl = REGION_BASE_URLS[CONFIG.REGION];
  const query = encodeURIComponent(JSON.stringify({ url: urlPath }));
  const url = `${baseUrl}/v3/content_types/${contentTypeUid}/entries?environment=${CONFIG.ENVIRONMENT}&query=${query}`;

  const response = await fetch(url, {
    headers: {
      api_key: CONFIG.API_KEY,
      access_token: CONFIG.DELIVERY_TOKEN,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Contentstack request failed (${response.status}).\n${body}`);
  }

  const data = await response.json();
  return (data.entries && data.entries[0]) || null;
}

function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function renderErrorBanner(message) {
  const el = document.createElement("div");
  el.className = "cs-error-banner";
  el.innerHTML = `<strong>Couldn't load content from Contentstack.</strong><br>${message}`;
  document.body.prepend(el);
}
