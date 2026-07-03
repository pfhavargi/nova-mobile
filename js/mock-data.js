/* ============================================================
   MOCK DATA
   ------------------------------------------------------------
   This mimics exactly what Contentstack's Delivery API will
   return once you build the "hero_banner" and "product"
   content types described in the setup guide.

   You never need to edit this file for the real site to work -
   it's only used while CONFIG.USE_MOCK_DATA is true.
   ============================================================ */

const MOCK_HERO = {
  title: "The Future Fits In Your Pocket",
  subtitle: "Flagship phones from Apple, Samsung, Nokia and OnePlus — configured, compared, and ready to ship.",
  button_text: "Shop All Phones",
  button_url: "#catalog",
  background_image: null,
};

const MOCK_PRODUCTS = [
  {
    uid: "mock-1",
    title: "iPhone 15 Pro",
    url: "/iphone-15-pro",
    brand: "Apple",
    price: 134900,
    short_description: "Titanium design. A17 Pro chip. The most powerful iPhone camera system yet.",
    specs: "6.1\" Super Retina XDR • 128GB • A17 Pro • 5G",
    featured: true,
    image: { url: "https://placehold.co/600x700/1D2027/F5F3EF?font=roboto&text=iPhone+15+Pro" },
  },
  {
    uid: "mock-2",
    title: "Galaxy S24 Ultra",
    url: "/galaxy-s24-ultra",
    brand: "Samsung",
    price: 129999,
    short_description: "Galaxy AI is here. Epic, in every sense of the word — built-in S Pen included.",
    specs: "6.8\" Dynamic AMOLED 2X • 256GB • Snapdragon 8 Gen 3 • 5G",
    featured: true,
    image: { url: "https://placehold.co/600x700/1D2027/F5F3EF?font=roboto&text=Galaxy+S24+Ultra" },
  },
  {
    uid: "mock-3",
    title: "OnePlus 12",
    url: "/oneplus-12",
    brand: "OnePlus",
    price: 64999,
    short_description: "Smooth Beyond Belief. Hasselblad camera tuning and 100W SuperVOOC charging.",
    specs: "6.82\" LTPO AMOLED • 256GB • Snapdragon 8 Gen 3 • 5G",
    featured: true,
    image: { url: "https://placehold.co/600x700/1D2027/F5F3EF?font=roboto&text=OnePlus+12" },
  },
  {
    uid: "mock-4",
    title: "Nokia G42 5G",
    url: "/nokia-g42-5g",
    brand: "Nokia",
    price: 15999,
    short_description: "Built to last, easy to repair, and priced for everyone. Three-day battery life.",
    specs: "6.56\" HD+ • 128GB • Snapdragon 480+ • 5G",
    featured: false,
    image: { url: "https://placehold.co/600x700/1D2027/F5F3EF?font=roboto&text=Nokia+G42" },
  },
  {
    uid: "mock-5",
    title: "iPhone 15",
    url: "/iphone-15",
    brand: "Apple",
    price: 79900,
    short_description: "Dynamic Island. A16 Bionic. A 48MP camera that captures incredible detail.",
    specs: "6.1\" Super Retina XDR • 128GB • A16 Bionic • 5G",
    featured: false,
    image: { url: "https://placehold.co/600x700/1D2027/F5F3EF?font=roboto&text=iPhone+15" },
  },
  {
    uid: "mock-6",
    title: "Galaxy A55",
    url: "/galaxy-a55",
    brand: "Samsung",
    price: 39999,
    short_description: "Awesome is for everyone. A tougher Gorilla Glass Victus+ front and back.",
    specs: "6.6\" Super AMOLED • 128GB • Exynos 1480 • 5G",
    featured: false,
    image: { url: "https://placehold.co/600x700/1D2027/F5F3EF?font=roboto&text=Galaxy+A55" },
  },
  {
    uid: "mock-7",
    title: "OnePlus Nord CE 4",
    url: "/oneplus-nord-ce-4",
    brand: "OnePlus",
    price: 24999,
    short_description: "Flagship-grade performance meets all-day battery in a slim aluminum frame.",
    specs: "6.7\" AMOLED • 128GB • Snapdragon 7 Gen 3 • 5G",
    featured: false,
    image: { url: "https://placehold.co/600x700/1D2027/F5F3EF?font=roboto&text=Nord+CE+4" },
  },
  {
    uid: "mock-8",
    title: "Nokia XR21",
    url: "/nokia-xr21",
    brand: "Nokia",
    price: 34999,
    short_description: "Military-grade toughness. Survives drops, dust, and dunks without a case.",
    specs: "6.49\" FHD+ • 128GB • Snapdragon 695 • 5G",
    featured: false,
    image: { url: "https://placehold.co/600x700/1D2027/F5F3EF?font=roboto&text=Nokia+XR21" },
  },
];
