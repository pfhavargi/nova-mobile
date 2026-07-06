/* ============================================================
   PERSONALIZE HELPERS
   ============================================================ */

function getVisitorUid() {
  let uid = localStorage.getItem("cs_personalize_user_uid");
  if (!uid) {
    uid = crypto.randomUUID();
    localStorage.setItem("cs_personalize_user_uid", uid);
  }
  return uid;
}

async function fetchPersonalizeManifest() {
  if (!CONFIG.ENABLE_PERSONALIZE) return null;
  try {
    const response = await fetch(`${CONFIG.PERSONALIZE_EDGE_URL}/manifest`, {
      headers: {
        "X-Project-Uid": CONFIG.PERSONALIZE_PROJECT_UID,
        "X-Cs-Personalize-User-Uid": getVisitorUid(),
        "X-Page-Url": window.location.href,
      },
    });
    if (!response.ok) return null;
    return await response.json();
  } catch (err) {
    console.warn("Personalize manifest fetch failed:", err);
    return null;
  }
}

function getVariantAliasesFromManifest(manifest) {
  if (!manifest || !manifest.experiences) return [];
  return manifest.experiences
    .filter((exp) => exp.activeVariantShortUid !== null && exp.activeVariantShortUid !== undefined)
    .map((exp) => `cs_personalize_${exp.shortUid}_${exp.activeVariantShortUid}`);
}

async function setPreferredBrand(brand) {
  if (!CONFIG.ENABLE_PERSONALIZE) return;
  try {
    await fetch(`${CONFIG.PERSONALIZE_EDGE_URL}/user-attributes`, {
      method: "PATCH",
      headers: {
        "x-project-uid": CONFIG.PERSONALIZE_PROJECT_UID,
        "x-cs-personalize-user-uid": getVisitorUid(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ preferred_brand: brand }),
    });
  } catch (err) {
    console.warn("Personalize set attribute failed:", err);
  }
}
