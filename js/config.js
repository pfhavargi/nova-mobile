/* ============================================================
   CONTENTSTACK CONFIG
   ------------------------------------------------------------
   This is the ONLY file you need to edit to connect this
   website to your own Contentstack stack.

   Leave USE_MOCK_DATA = true to preview the site right now
   with sample data (no Contentstack account needed yet).

   Once you've created your Stack, Content Types and Entries
   in Contentstack (see the step-by-step guide), come back here,
   fill in the four values below, and flip USE_MOCK_DATA to false.
   ============================================================ */

const CONFIG = {
  // Set to false once your Contentstack stack is ready
  USE_MOCK_DATA: false,

  // Stack API Key -> Settings > Stack > API Key
  API_KEY: "blt30fddd08d040f1f8",

  // Delivery Token -> Settings > Tokens > Delivery Tokens
  DELIVERY_TOKEN: "csb52141f1794a1224b349b70f",

  // Environment name -> Settings > Environments (e.g. "development" or "production")
  ENVIRONMENT: "development",

  // Region your stack was created in. Pick ONE:
  // "us"        -> https://cdn.contentstack.io
  // "eu"        -> https://eu-cdn.contentstack.com
  // "azure-na"  -> https://azure-na-cdn.contentstack.com
  // "azure-eu"  -> https://azure-eu-cdn.contentstack.com
  REGION: "us",

  ENABLE_PERSONALIZE: true,
  PERSONALIZE_PROJECT_UID: "YOUR_PERSONALIZE_PROJECT_UID",
  PERSONALIZE_EDGE_URL: "https://personalize-edge.contentstack.com",
};

const REGION_BASE_URLS = {
  us: "https://cdn.contentstack.io",
  eu: "https://eu-cdn.contentstack.com",
  "azure-na": "https://azure-na-cdn.contentstack.com",
  "azure-eu": "https://azure-eu-cdn.contentstack.com",
};
