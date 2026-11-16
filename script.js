/**
 * ============================================================================
 * EasyBuy - Modern Commercial Grocery Shopping Platform
 * script.js - Core Application Controller & Interaction Logic
 * 
 * Features matching the Commercial Reference Design:
 * 1. Global State Management & LocalStorage Persistence
 * 2. Multi-Language Engine (English, Hindi, Marathi)
 * 3. Accessibility Controls (A-/A/A+ Scaling, High Contrast WCAG AAA)
 * 4. Web Speech API (Voice Search & Speech Synthesis Read Aloud)
 * 5. Production E-Commerce Homepage (Deals, Best Sellers, Farm Fresh)
 * 6. Sub-Header Category Navigation & Trust Badges
 * 7. Dynamic Catalogue with Left Filters Sidebar & Sorting
 * 8. Modern Product Details Modal with Nutritional Info & Related Items
 * 9. Shopping Cart with 5-Second Undo Protection & Real-time Calculation
 * 10. 3-Step Production Checkout with Auto-Fill Demo Support
 * 11. Order Confirmation Screen with Summary & Quick Navigation
 * 12. Live Order Tracking with Delivery Partner Simulation
 * 13. Split-Screen "Good Food. Good Mood." Proto.io Login Screen
 * 14. Dedicated Accessibility Drawer Modal with Toggles
 * 15. Senior Practice Mode with Virtual ₹500 Play Money Wallet
 * ============================================================================
 */

// ==========================================
// 1. GLOBAL APPLICATION STATE
// ==========================================
const AppState = {
  // Localization: 'en' | 'hi' | 'mr'
  currentLang: localStorage.getItem('easybuy_lang') || 'en',

  // Font scale: 0.92 | 1.0 | 1.22
  fontScale: parseFloat(localStorage.getItem('easybuy_font_scale')) || 1,

  // High contrast mode (true/false)
  highContrast: localStorage.getItem('easybuy_high_contrast') === 'true',

  // Shopping cart: array of { id: string, qty: number }
  cart: JSON.parse(localStorage.getItem('easybuy_cart')) || [],

  // Favorites list: array of string product IDs
  favorites: JSON.parse(localStorage.getItem('easybuy_favs')) || [],

  // 5-Second Undo state for accidental removals
  undoState: null,
  undoBannerTimer: null,

  // Current active screen view: 'home' | 'shop' | 'cart' | 'checkout' | 'confirmation' | 'track' | 'login' | 'signup' | 'forgot' | 'account'
  currentView: 'home',

  // Filters & Search
  activeCategory: 'all',
  searchQuery: '',
  priceRange: 'all',
  minRating: 'all',
  offerFilter: 'all',
  sortBy: 'popularity',

  // 3-Step Checkout Wizard
  checkoutStep: 1,
  address: {
    fullName: 'Ramesh S. Joshi',
    phone: '9822012345',
    street: 'Flat 302, Sai Anand Apts, Near Ganesh Mandir, Karve Road',
    city: 'Pune',
    pincode: '411038',
    slot: 'superfast'
  },
  paymentMethod: 'cod',

  // Order Tracking
  activeOrder: JSON.parse(localStorage.getItem('easybuy_order')) || {
    id: '#EB-8842',
    date: 'Today, 10:30 AM',
    total: 350,
    statusStep: 2 // 1: Ordered, 2: Packed, 3: Shipped, 4: Delivered
  },

  // Authenticated user session
  currentUser: JSON.parse(localStorage.getItem('easybuy_user')) || {
    name: 'Ramesh S. Joshi',
    email: 'ramesh.joshi@example.com',
    phone: '9822012345',
    address: 'Flat 302, Sai Anand Apts, Near Ganesh Mandir, Karve Road, Pune - 411038'
  },

  // Past user orders
  userOrders: JSON.parse(localStorage.getItem('easybuy_user_orders')) || [
    { id: '#EB-8842', date: 'Today, 10:30 AM', total: 350, items: 3, status: 'Packed' },
    { id: '#EB-7910', date: 'Yesterday, 4:15 PM', total: 540, items: 4, status: 'Delivered' },
    { id: '#EB-6421', date: '12 Nov 2026', total: 290, items: 2, status: 'Delivered' }
  ],

  // Senior Practice Mode & Guided Tour
  isPracticeMode: false,
  practiceBalance: parseFloat(localStorage.getItem('easybuy_practice_bal')) || 500.0,
  guidedStep: 0,
  isGuidedActive: false,

  // Speech Synthesis
  isSpeaking: false
};

// ==========================================
// 2. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  console.log("EasyBuy Commercial Platform Initializing...");

  // Apply saved accessibility preferences
  applyFontScale(AppState.fontScale);
  applyHighContrast(AppState.highContrast);

  // Sync language dropdown selector
  const langSelect = document.getElementById('select-language');
  if (langSelect) {
    langSelect.value = AppState.currentLang;
  }
  updateLanguageUI(AppState.currentLang);

  // Render initial components
  renderHomeCategories();
  renderHomeSections();
  renderProducts();
  updateCartBadge();
  updateUserHeaderUI();

  // Attach all system event listeners
  bindNavigationEvents();
  bindAccessibilityEvents();
  bindAccessibilityModalEvents();
  bindSearchAndFilterEvents();
  bindCartEvents();
  bindCheckoutEvents();
  bindConfirmationEvents();
  bindTrackingEvents();
  bindAuthEvents();
  bindAccountEvents();
  bindGuidedModeEvents();
  bindHelpModalEvents();
  bindProductDetailModalEvents();
  bindSpeechEvents();

  // Initialize Speech Recognition if supported
  initSpeechRecognition();

  // Exact Entry Flow Routing
  const isAuthenticated = localStorage.getItem('easybuy_authenticated') === 'true';
  AppState.currentView = isAuthenticated ? 'home' : 'welcome';
  switchView(AppState.currentView);
});


// ==========================================
// 3. ACCESSIBILITY CONTROLS (Font, Contrast)
// ==========================================
function bindAccessibilityEvents() {
  const btnDecrease = document.getElementById('btn-font-decrease');
  const btnNormal = document.getElementById('btn-font-normal');
  const btnIncrease = document.getElementById('btn-font-increase');
  const toggleContrast = document.getElementById('btn-contrast-toggle');
  const langSelect = document.getElementById('select-language');

  btnDecrease?.addEventListener('click', () => applyFontScale(0.92));
  btnNormal?.addEventListener('click', () => applyFontScale(1.0));
  btnIncrease?.addEventListener('click', () => applyFontScale(1.22));

  toggleContrast?.addEventListener('change', (e) => {
    AppState.highContrast = e.target.checked;
    applyHighContrast(AppState.highContrast);
  });

  langSelect?.addEventListener('change', (e) => {
    AppState.currentLang = e.target.value;
    updateLanguageUI(AppState.currentLang);
  });
}

function bindAccessibilityModalEvents() {
  const modal = document.getElementById('a11y-modal');
  const openBtn = document.getElementById('btn-open-a11y-modal');
  const closeBtn = document.getElementById('btn-close-a11y-modal');

  openBtn?.addEventListener('click', () => {
    // Sync modal controls with current state
    const contrastSwitch = document.getElementById('btn-contrast-toggle');
    if (contrastSwitch) contrastSwitch.checked = AppState.highContrast;

    document.querySelectorAll('.lang-pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === AppState.currentLang);
    });

    modal?.classList.add('active');
  });

  closeBtn?.addEventListener('click', () => modal?.classList.remove('active'));
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Language pill buttons in modal
  document.querySelectorAll('.lang-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      document.querySelectorAll('.lang-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const langSelect = document.getElementById('select-language');
      if (langSelect) langSelect.value = selectedLang;
      AppState.currentLang = selectedLang;
      updateLanguageUI(selectedLang);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

function applyFontScale(scale) {
  AppState.fontScale = scale;
  localStorage.setItem('easybuy_font_scale', scale);
  document.documentElement.style.setProperty('--font-scale', scale);

  document.getElementById('btn-font-decrease')?.classList.toggle('active', scale < 1.0);
  document.getElementById('btn-font-normal')?.classList.toggle('active', scale === 1.0);
  document.getElementById('btn-font-increase')?.classList.toggle('active', scale > 1.0);
}

function applyHighContrast(enabled) {
  AppState.highContrast = enabled;
  localStorage.setItem('easybuy_high_contrast', enabled);
  document.body.classList.toggle('high-contrast', enabled);

  const toggle = document.getElementById('btn-contrast-toggle');
  if (toggle) toggle.checked = enabled;
}


// ==========================================
// 4. TRANSLATION & LOCALIZATION ENGINE
// ==========================================
function updateLanguageUI(lang) {
  AppState.currentLang = lang;
  localStorage.setItem('easybuy_lang', lang);
  const dict = I18N[lang] || I18N['en'];

  // Update static text elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Refresh dynamic sections
  renderHomeCategories();
  renderHomeSections();
  renderProducts();
  updateUserHeaderUI();

  if (AppState.currentView === 'cart') {
    renderCart();
  } else if (AppState.currentView === 'checkout') {
    renderCheckoutSummary();
  } else if (AppState.currentView === 'account') {
    renderAccountView();
  }
  updateTrackingStepperUI();
}

function t(key) {
  const dict = I18N[AppState.currentLang] || I18N['en'];
  return dict[key] || (I18N['en'][key] || key);
}


// ==========================================
// 5. VIEW ROUTING & NAVIGATION
// ==========================================
function bindNavigationEvents() {
  // Brand logo returns to Home
  document.getElementById('brand-logo-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('home');
  });

  // All buttons with data-nav attribute
  document.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-nav');
      if (view === 'account' && !AppState.currentUser) {
        switchView('login');
      } else {
        switchView(view);
      }
    });
  });

  // Home CTA buttons
  document.getElementById('btn-home-start-shop')?.addEventListener('click', () => switchView('shop'));
  document.getElementById('btn-header-tutorial')?.addEventListener('click', () => startGuidedTour());

  // Category "See all" button
  document.getElementById('btn-see-all-categories')?.addEventListener('click', () => {
    AppState.activeCategory = 'all';
    switchView('shop');
    renderProducts();
  });

  // Sub-header All Categories button
  document.getElementById('btn-all-categories')?.addEventListener('click', () => {
    AppState.activeCategory = 'all';
    switchView('shop');
    renderProducts();
  });

  // Sub-header category chips
  document.querySelectorAll('.sub-cat-chip[data-category]').forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.getAttribute('data-category');
      AppState.activeCategory = cat;
      switchView('shop');
      renderProducts();
    });
  });

  // Welcome View Buttons
  document.getElementById('btn-welcome-get-started')?.addEventListener('click', () => switchView('login'));
  document.getElementById('link-welcome-login')?.addEventListener('click', () => switchView('login'));
  document.getElementById('btn-welcome-guest')?.addEventListener('click', () => switchView('home'));

  // Location Chip Modal Trigger
  document.getElementById('location-chip')?.addEventListener('click', () => {
    showToast("Delivering to Pune 411038 in 10-15 minutes.");
  });
}

function switchView(viewName) {
  AppState.currentView = viewName;

  document.querySelectorAll('.view-section').forEach((sec) => {
    sec.classList.remove('active');
  });

  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.add('active');
  }

  // Update navigation button active state
  document.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-nav') === viewName);
  });

  // Also update bottom nav
  document.querySelectorAll('.bottom-nav-item').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-nav') === viewName);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewName === 'cart') {
    renderCart();
  } else if (viewName === 'checkout') {
    showCheckoutStep(AppState.checkoutStep);
  } else if (viewName === 'track') {
    updateTrackingStepperUI();
  } else if (viewName === 'account') {
    renderAccountView();
  }
}


// ==========================================
// 6. HOMEPAGE CURATED SECTIONS RENDERING
// ==========================================
function renderHomeCategories() {
  const container = document.getElementById('home-categories-grid');
  if (!container) return;

  container.innerHTML = '';

  CATEGORIES.forEach((cat) => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${cat.name[AppState.currentLang] || cat.name.en} category`);

    card.innerHTML = `
      <div class="category-img-wrap">
        <img src="${cat.image || 'assets/images/cat_fruits.jpg'}" alt="${cat.name[AppState.currentLang] || cat.name.en}" class="category-photo" onerror="this.src='assets/images/f1_apple.jpg';">
      </div>
      <div class="category-title">${cat.name[AppState.currentLang] || cat.name.en}</div>
      <div class="category-count-badge">${cat.itemCount || '4 Items'}</div>
    `;

    const handleSelect = () => {
      AppState.activeCategory = cat.id;
      document.querySelectorAll('.filter-pill').forEach((pill) => {
        pill.classList.toggle('active', pill.getAttribute('data-category') === cat.id);
      });
      // Also sync sidebar checkbox if exists
      document.querySelectorAll('input[name="filter-cat"]').forEach((cb) => {
        cb.checked = (cb.value === cat.id);
      });
      switchView('shop');
      renderProducts();
    };

    card.addEventListener('click', handleSelect);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSelect();
      }
    });

    container.appendChild(card);
  });
}

function renderHomeSections() {
  const dealsGrid = document.getElementById('home-deals-grid');
  const bestsellersGrid = document.getElementById('home-bestsellers-grid');
  const freshGrid = document.getElementById('home-fresh-grid');

  if (dealsGrid) {
    const dealItems = PRODUCTS.filter(p => p.isDeal).slice(0, 4);
    dealsGrid.innerHTML = dealItems.map(p => createProductCardHtml(p)).join('');
    bindProductCardActions(dealsGrid);
  }

  if (bestsellersGrid) {
    const bestItems = PRODUCTS.filter(p => p.isBestseller).slice(0, 4);
    bestsellersGrid.innerHTML = bestItems.map(p => createProductCardHtml(p)).join('');
    bindProductCardActions(bestsellersGrid);
  }

  if (freshGrid) {
    const freshItems = PRODUCTS.filter(p => p.isFreshFind).slice(0, 4);
    freshGrid.innerHTML = freshItems.map(p => createProductCardHtml(p)).join('');
    bindProductCardActions(freshGrid);
  }
}


// ==========================================
// 7. MODERN PRODUCT CARDS & CATALOGUE
// ==========================================
function createProductCardHtml(prod) {
  const cartItem = AppState.cart.find(c => c.id === prod.id);
  const inCartQty = cartItem ? cartItem.qty : 0;
  const isFav = AppState.favorites.includes(prod.id);

  const name = prod.name[AppState.currentLang] || prod.name.en;
  const unit = prod.unit[AppState.currentLang] || prod.unit.en;
  const badge = prod.badge[AppState.currentLang] || prod.badge.en;

  return `
    <article class="product-card-modern" data-prod-id="${prod.id}" id="prod-card-${prod.id}">
      <button type="button" class="btn-fav ${isFav ? 'active' : ''}" data-fav-id="${prod.id}" aria-label="Favorite ${name}">
        ${isFav ? '<svg class="svg-icon svg-sm" viewBox="0 0 24 24" fill="#e53935" stroke="#e53935"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>' : '<svg class="svg-icon svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>'}
      </button>

      <span class="card-badge-discount">${prod.discount || '20% OFF'}</span>
      
      <div class="product-img-box" aria-hidden="true" data-action="view-details" data-id="${prod.id}">
        ${prod.image ? `<img src="${prod.image}" alt="${name}" class="product-photo" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">` : ''}
        <div class="product-svg-fallback" ${prod.image ? 'style="display:none;"' : ''}>${prod.iconSvg}</div>
      </div>

      <div class="product-rating-row">
        <span class="rating-chip"><svg class="svg-icon svg-xs svg-star" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${prod.rating || 4.8}</span>
        <span class="reviews-count">(${prod.reviewsCount || 120})</span>
      </div>

      <h3 class="product-name-modern" data-action="view-details" data-id="${prod.id}" title="${name}">${name}</h3>
      <div class="product-unit-modern">${unit}</div>

      <div class="product-bottom-row">
        <div class="price-container">
          <span class="price-current">₹${prod.price}</span>
          <span class="price-mrp">₹${prod.mrp || Math.round(prod.price * 1.25)}</span>
        </div>

        <div class="card-action-zone">
          ${inCartQty === 0 ? `
            <button type="button" class="btn-add-modern" data-action="add" data-id="${prod.id}" aria-label="Add ${name} to cart for ₹${prod.price}">
              ${t('addBtnShort')}
            </button>
          ` : `
            <div class="qty-stepper-modern" role="group" aria-label="Quantity for ${name}">
              <button type="button" class="btn-step" data-action="decrease" data-id="${prod.id}" aria-label="Decrease quantity">−</button>
              <span class="step-value" aria-live="polite">${inCartQty}</span>
              <button type="button" class="btn-step" data-action="increase" data-id="${prod.id}" aria-label="Increase quantity">+</button>
            </div>
          `}
        </div>
      </div>
    </article>
  `;
}

function bindProductCardActions(parentContainer) {
  if (!parentContainer) return;

  parentContainer.querySelectorAll('[data-action]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = btn.getAttribute('data-action');
      const prodId = btn.getAttribute('data-id');

      if (action === 'add') {
        addToCart(prodId);
      } else if (action === 'increase') {
        updateCartQuantity(prodId, 1);
      } else if (action === 'decrease') {
        updateCartQuantity(prodId, -1);
      } else if (action === 'view-details') {
        openProductDetailModal(prodId);
      }
    });
  });

  // Favorite button
  parentContainer.querySelectorAll('.btn-fav').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-fav-id');
      toggleFavorite(prodId);
    });
  });
}

function toggleFavorite(prodId) {
  const index = AppState.favorites.indexOf(prodId);
  const prod = PRODUCTS.find(p => p.id === prodId);
  const name = prod ? (prod.name[AppState.currentLang] || prod.name.en) : 'Item';

  if (index === -1) {
    AppState.favorites.push(prodId);
    showToast(`"${name}" added to your Favorites!`);
  } else {
    AppState.favorites.splice(index, 1);
    showToast(`"${name}" removed from Favorites.`);
  }

  localStorage.setItem('easybuy_favs', JSON.stringify(AppState.favorites));
  renderProducts();
  renderHomeSections();
}

function bindSearchAndFilterEvents() {
  const searchInput = document.getElementById('search-input');

  searchInput?.addEventListener('input', (e) => {
    AppState.searchQuery = e.target.value.trim().toLowerCase();
    if (AppState.currentView !== 'shop') {
      switchView('shop');
    }
    renderProducts();
  });

  // Quick filter pills
  document.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.activeCategory = pill.getAttribute('data-category');
      // Sync sidebar checkboxes
      document.querySelectorAll('input[name="filter-cat"]').forEach((cb) => {
        cb.checked = (AppState.activeCategory === 'all' || cb.value === AppState.activeCategory);
      });
      renderProducts();
    });
  });

  // Sidebar Category Checkboxes
  document.querySelectorAll('input[name="filter-cat"]').forEach((cb) => {
    cb.addEventListener('change', () => {
      const checkedBoxes = Array.from(document.querySelectorAll('input[name="filter-cat"]:checked')).map(c => c.value);
      if (checkedBoxes.length === 0 || checkedBoxes.length === 4) {
        AppState.activeCategory = 'all';
      } else if (checkedBoxes.length === 1) {
        AppState.activeCategory = checkedBoxes[0];
      } else {
        AppState.activeCategory = 'custom';
      }
      renderProducts();
    });
  });

  // Sidebar Price Range Radio
  document.querySelectorAll('input[name="filter-price"]').forEach((rb) => {
    rb.addEventListener('change', (e) => {
      AppState.priceRange = e.target.value;
      renderProducts();
    });
  });

  // Sidebar Ratings Radio
  document.querySelectorAll('input[name="filter-rating"]').forEach((rb) => {
    rb.addEventListener('change', (e) => {
      AppState.minRating = e.target.value;
      renderProducts();
    });
  });

  // Sidebar Offers Checkboxes
  document.getElementById('filter-offer-deals')?.addEventListener('change', () => renderProducts());
  document.getElementById('filter-offer-bestsellers')?.addEventListener('change', () => renderProducts());
  document.getElementById('filter-offer-fresh')?.addEventListener('change', () => renderProducts());

  // Sidebar Clear All Button
  document.getElementById('btn-filters-clear')?.addEventListener('click', () => {
    AppState.activeCategory = 'all';
    AppState.searchQuery = '';
    AppState.priceRange = 'all';
    AppState.minRating = 'all';

    const input = document.getElementById('search-input');
    if (input) input.value = '';

    document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
    document.querySelectorAll('input[name="filter-cat"]').forEach(c => c.checked = true);
    document.querySelectorAll('input[name="filter-price"]').forEach(r => r.checked = (r.value === 'all'));
    document.querySelectorAll('input[name="filter-rating"]').forEach(r => r.checked = (r.value === 'all'));

    const d = document.getElementById('filter-offer-deals');
    const b = document.getElementById('filter-offer-bestsellers');
    const f = document.getElementById('filter-offer-fresh');
    if (d) d.checked = false;
    if (b) b.checked = false;
    if (f) f.checked = false;

    renderProducts();
    showToast("Filters cleared.");
  });

  // Sort dropdown
  document.getElementById('select-sort')?.addEventListener('change', (e) => {
    AppState.sortBy = e.target.value;
    renderProducts();
  });
}

function renderProducts() {
  const grid = document.getElementById('products-catalogue-grid') || document.getElementById('products-grid');
  const countBadge = document.getElementById('catalogue-results-count');
  if (!grid) return;

  // Active Category & checked boxes
  const checkedCats = Array.from(document.querySelectorAll('input[name="filter-cat"]:checked')).map(c => c.value);

  // Offers checked
  const onlyDeals = document.getElementById('filter-offer-deals')?.checked;
  const onlyBestsellers = document.getElementById('filter-offer-bestsellers')?.checked;
  const onlyFresh = document.getElementById('filter-offer-fresh')?.checked;

  let filtered = PRODUCTS.filter((p) => {
    // 1. Category filter
    if (AppState.activeCategory !== 'all' && AppState.activeCategory !== 'custom') {
      if (p.category !== AppState.activeCategory) return false;
    } else if (checkedCats.length > 0 && checkedCats.length < document.querySelectorAll('input[name="filter-cat"]').length) {
      if (!checkedCats.includes(p.category)) return false;
    }

    // 2. Price filter
    if (AppState.priceRange === '0-50' && p.price > 50) return false;
    if (AppState.priceRange === '50-100' && (p.price < 50 || p.price > 100)) return false;
    if (AppState.priceRange === '100-200' && (p.price < 100 || p.price > 200)) return false;
    if (AppState.priceRange === '200+' && p.price < 200) return false;

    // 3. Rating filter
    if (AppState.minRating !== 'all') {
      const minR = parseFloat(AppState.minRating);
      if (p.rating < minR) return false;
    }

    // 4. Offers filter
    if (onlyDeals && !p.isDeal) return false;
    if (onlyBestsellers && !p.isBestseller) return false;
    if (onlyFresh && !p.isFreshFind) return false;

    // 5. Search keyword
    if (!AppState.searchQuery) return true;

    const nameEn = (p.name.en || '').toLowerCase();
    const nameHi = (p.name.hi || '').toLowerCase();
    const nameMr = (p.name.mr || '').toLowerCase();
    const descEn = (p.description.en || '').toLowerCase();

    return (
      nameEn.includes(AppState.searchQuery) ||
      nameHi.includes(AppState.searchQuery) ||
      nameMr.includes(AppState.searchQuery) ||
      descEn.includes(AppState.searchQuery) ||
      p.category.toLowerCase().includes(AppState.searchQuery)
    );
  });

  // Sorting
  if (AppState.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (AppState.sortBy === 'discount') {
    filtered.sort((a, b) => {
      const discA = parseInt(a.discount) || 0;
      const discB = parseInt(b.discount) || 0;
      return discB - discA;
    });
  }

  // Update catalogue title & subtitle
  const titleEl = document.getElementById('shop-heading');
  const subEl = document.getElementById('catalogue-active-subtitle');
  if (titleEl) {
    if (AppState.activeCategory === 'all') {
      titleEl.textContent = t('shopTitle') || "All Groceries";
    } else {
      const catObj = CATEGORIES.find(c => c.id === AppState.activeCategory);
      titleEl.textContent = catObj ? (catObj.name[AppState.currentLang] || catObj.name.en) : "Groceries";
    }
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${t('itemsAvailable')}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px;">
        <div style="margin-bottom: 8px;"><svg class="svg-icon svg-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
        <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 6px;">No items match your search</h3>
        <p style="color: var(--text-muted); margin-bottom: 16px;">Try adjusting your filters or search for "apples", "milk", "atta".</p>
        <button type="button" class="btn-secondary" id="btn-clear-search-filter">Clear All Filters</button>
      </div>
    `;
    document.getElementById('btn-clear-search-filter')?.addEventListener('click', () => {
      document.getElementById('btn-filters-clear')?.click();
    });
    return;
  }

  grid.innerHTML = filtered.map(p => createProductCardHtml(p)).join('');
  bindProductCardActions(grid);
}


// ==========================================
// 8. PRODUCT DETAILS MODAL (Real E-Commerce)
// ==========================================
function bindProductDetailModalEvents() {
  const modal = document.getElementById('product-detail-modal');
  const closeBtn = document.getElementById('btn-close-detail-modal');

  closeBtn?.addEventListener('click', () => modal?.classList.remove('active'));
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

function openProductDetailModal(prodId) {
  const product = PRODUCTS.find(p => p.id === prodId);
  const modal = document.getElementById('product-detail-modal');
  const content = document.getElementById('product-detail-content');
  if (!product || !modal || !content) return;

  const name = product.name[AppState.currentLang] || product.name.en;
  const unit = product.unit[AppState.currentLang] || product.unit.en;
  const desc = product.description[AppState.currentLang] || product.description.en;
  const nutrition = product.nutrition ? (product.nutrition[AppState.currentLang] || product.nutrition.en) : '';

  const cartItem = AppState.cart.find(c => c.id === product.id);
  const inCartQty = cartItem ? cartItem.qty : 0;

  // Related products from same category
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  content.innerHTML = `
    <div class="detail-modal-grid">
      <div class="detail-img-box" aria-hidden="true" style="position:relative;">
        <span style="position:absolute; top:8px; left:8px; color:var(--primary);"><svg class="svg-icon svg-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg></span>
        ${product.image ? `<img src="${product.image}" alt="${name}" class="product-photo" style="width:100%; height:100%; object-fit:contain; border-radius:var(--radius-md);" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">` : ''}
        <div class="product-svg-fallback" ${product.image ? 'style="display:none;"' : ''}>${product.iconSvg}</div>
      </div>

      <div>
        <div style="display:flex; gap:8px; align-items:center; margin-bottom:6px;">
          <span class="card-badge-discount" style="position:static;">${product.discount || '20% OFF'}</span>
          <span class="rating-chip"><svg class="svg-icon svg-xs svg-star" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${product.rating || 4.8} (${product.reviewsCount || 200}+ ${t('reviewsLabel')})</span>
        </div>

        <h3 style="font-size:1.45rem; font-weight:900; margin-bottom:4px;">${name}</h3>
        <div style="font-size:0.92rem; color:var(--text-muted); font-weight:700; margin-bottom:12px;">${unit}</div>

        <div style="display:flex; align-items:baseline; gap:10px; margin-bottom:14px;">
          <span style="font-size:1.75rem; font-weight:900; color:var(--primary);">₹${product.price}</span>
          <span style="font-size:1.05rem; color:var(--text-light); text-decoration:line-through;">₹${product.mrp || Math.round(product.price * 1.25)}</span>
          <span style="font-size:0.85rem; font-weight:800; color:#15803d; background:#dcfce7; padding:2px 8px; border-radius:4px;">
            ${t('saveBadge')} ₹${(product.mrp || Math.round(product.price * 1.25)) - product.price}
          </span>
        </div>

        <p style="font-size:0.95rem; color:var(--text-body); line-height:1.6; margin-bottom:14px;">${desc}</p>

        <!-- Availability Status -->
        <div style="display:inline-flex; align-items:center; gap:6px; background:#dcfce7; color:#15803d; font-weight:800; font-size:0.85rem; padding:4px 10px; border-radius:var(--radius-full); margin-bottom:16px;">
          In Stock • Sourced Fresh Today
        </div>

        <!-- 3 Feature Chips (Matching Reference) -->
        <div style="display:flex; gap:10px; margin-bottom:16px; flex-wrap:wrap;">
          <span style="background:var(--bg-subtle); padding:6px 12px; border-radius:var(--radius-sm); font-size:0.85rem; font-weight:700;">100% Fresh</span>
          <span style="background:var(--bg-subtle); padding:6px 12px; border-radius:var(--radius-sm); font-size:0.85rem; font-weight:700;">Quality Checked</span>
          <span style="background:var(--bg-subtle); padding:6px 12px; border-radius:var(--radius-sm); font-size:0.85rem; font-weight:700;">Direct from Farm</span>
        </div>

        <div id="modal-action-zone">
          ${inCartQty === 0 ? `
            <button type="button" class="btn-primary-large" id="btn-modal-add-cart" style="width:100%;">
              ${t('addToCartBtn')} • ₹${product.price}
            </button>
          ` : `
            <div style="display:flex; align-items:center; justify-content:space-between; background:var(--primary-light); padding:10px 18px; border-radius:var(--radius-md);">
              <span style="font-weight:800; color:var(--primary);">${t('addedToCartBtn')}</span>
              <div class="qty-stepper-modern">
                <button type="button" class="btn-step" id="btn-modal-dec">−</button>
                <span class="step-value" id="modal-qty-val">${inCartQty}</span>
                <button type="button" class="btn-step" id="btn-modal-inc">+</button>
              </div>
            </div>
          `}
        </div>
      </div>
    </div>

    ${related.length > 0 ? `
      <div style="margin-top:24px; padding-top:18px; border-top:1px solid var(--border-color);">
        <h4 style="font-size:1.05rem; font-weight:800; margin-bottom:12px;">${t('modalRelatedTitle')}</h4>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px;">
          ${related.map(r => `
            <div style="border:1px solid var(--border-color); border-radius:var(--radius-md); padding:8px; text-align:center; cursor:pointer;" onclick="openProductDetailModal('${r.id}')">
              <div style="height:60px; display:flex; align-items:center; justify-content:center; overflow:hidden; border-radius:var(--radius-sm); margin-bottom:4px;">
                ${r.image ? `<img src="${r.image}" alt="" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">` : ''}
                <div class="product-svg-fallback" ${r.image ? 'style="display:none;"' : ''}>${r.iconSvg}</div>
              </div>
              <div style="font-size:0.82rem; font-weight:800; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${r.name[AppState.currentLang] || r.name.en}</div>
              <div style="font-size:0.85rem; font-weight:900; color:var(--primary);">₹${r.price}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;

  // Bind modal button events
  document.getElementById('btn-modal-add-cart')?.addEventListener('click', () => {
    addToCart(product.id);
    openProductDetailModal(product.id);
  });
  document.getElementById('btn-modal-inc')?.addEventListener('click', () => {
    updateCartQuantity(product.id, 1);
    openProductDetailModal(product.id);
  });
  document.getElementById('btn-modal-dec')?.addEventListener('click', () => {
    updateCartQuantity(product.id, -1);
    openProductDetailModal(product.id);
  });

  modal.classList.add('active');
}
window.openProductDetailModal = openProductDetailModal;


// ==========================================
// 9. CART LOGIC WITH 5-SECOND UNDO
// ==========================================
function bindCartEvents() {
  document.getElementById('btn-clear-cart')?.addEventListener('click', () => {
    if (AppState.cart.length === 0) return;
    if (confirm("Clear all items from your shopping bag?")) {
      const prevCart = [...AppState.cart];
      AppState.cart = [];
      saveCart();
      updateCartBadge();
      renderCart();
      renderProducts();
      renderHomeSections();

      showUndoToast("Shopping bag cleared.", () => {
        AppState.cart = prevCart;
        saveCart();
        updateCartBadge();
        renderCart();
        renderProducts();
        renderHomeSections();
        showToast("Cart items restored!");
      });
    }
  });

  document.getElementById('btn-cart-undo')?.addEventListener('click', () => {
    if (AppState.undoState) {
      AppState.cart.splice(AppState.undoState.index, 0, AppState.undoState.item);
      AppState.undoState = null;
      saveCart();
      updateCartBadge();
      renderCart();
      renderProducts();
      renderHomeSections();

      const banner = document.getElementById('cart-undo-banner');
      if (banner) banner.style.display = 'none';

      showToast("Item restored to your bag!");
    }
  });
}

function addToCart(prodId) {
  const existing = AppState.cart.find(c => c.id === prodId);
  if (existing) {
    existing.qty += 1;
  } else {
    AppState.cart.push({ id: prodId, qty: 1 });
  }

  saveCart();
  updateCartBadge();
  renderProducts();
  renderHomeSections();

  const prod = PRODUCTS.find(p => p.id === prodId);
  const name = prod ? (prod.name[AppState.currentLang] || prod.name.en) : 'Item';
  showToast(`"${name}" added to your bag!`);
}

function updateCartQuantity(prodId, delta) {
  const itemIndex = AppState.cart.findIndex(c => c.id === prodId);
  if (itemIndex === -1) return;

  AppState.cart[itemIndex].qty += delta;

  if (AppState.cart[itemIndex].qty <= 0) {
    removeItemWithUndo(prodId);
    return;
  }

  saveCart();
  updateCartBadge();
  renderProducts();
  renderHomeSections();

  if (AppState.currentView === 'cart') {
    renderCart();
  }
}

function removeItemWithUndo(prodId) {
  const itemIndex = AppState.cart.findIndex(c => c.id === prodId);
  if (itemIndex === -1) return;

  const removedItem = AppState.cart[itemIndex];
  const prod = PRODUCTS.find(p => p.id === prodId);
  const name = prod ? (prod.name[AppState.currentLang] || prod.name.en) : 'Item';

  // Store for undo
  AppState.undoState = { item: removedItem, index: itemIndex };

  // Remove from cart
  AppState.cart.splice(itemIndex, 1);
  saveCart();
  updateCartBadge();
  renderProducts();
  renderHomeSections();

  if (AppState.currentView === 'cart') {
    renderCart();
    
    // Show green in-page undo banner (matching reference image)
    const banner = document.getElementById('cart-undo-banner');
    const undoText = document.getElementById('cart-undo-text');
    if (banner && undoText) {
      undoText.textContent = `"${name}" removed`;
      banner.style.display = 'flex';

      clearTimeout(AppState.undoBannerTimer);
      AppState.undoBannerTimer = setTimeout(() => {
        banner.style.display = 'none';
      }, 5000);
    }
  }

  // Also trigger toast undo
  showUndoToast(`"${name}" removed from bag.`, () => {
    if (AppState.undoState && AppState.undoState.item.id === prodId) {
      AppState.cart.splice(AppState.undoState.index, 0, AppState.undoState.item);
      AppState.undoState = null;
      saveCart();
      updateCartBadge();
      renderProducts();
      renderHomeSections();
      if (AppState.currentView === 'cart') renderCart();
      showToast(`↩️ "${name}" restored to bag!`);
    }
  });
}

function saveCart() {
  localStorage.setItem('easybuy_cart', JSON.stringify(AppState.cart));
}

function updateCartBadge() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.qty, 0);

  const badgeDesktop = document.getElementById('cart-badge-desktop');
  const badgeMobile = document.getElementById('cart-badge-mobile');

  if (badgeDesktop) badgeDesktop.textContent = totalCount;
  if (badgeMobile) badgeMobile.textContent = totalCount;
}

function renderCart() {
  const container = document.getElementById('cart-content-wrapper');
  if (!container) return;

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-box">
        <div class="cart-empty-graphic" aria-hidden="true"><svg class="svg-icon svg-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></div>
        <h2 style="font-size:1.45rem; font-weight:900; margin-bottom:6px;">${t('emptyCartMsg')}</h2>
        <p style="color:var(--text-muted); margin-bottom:20px;">${t('emptyCartSub')}</p>
        <button type="button" class="btn-primary-large" id="btn-empty-cart-shop" style="display:inline-flex; width:auto; margin:0 auto;">
          ${t('continueShoppingBtn')}
        </button>
      </div>
    `;
    document.getElementById('btn-empty-cart-shop')?.addEventListener('click', () => switchView('shop'));
    return;
  }

  let subtotal = 0;
  let totalSavings = 0;
  let itemsHtml = '';

  AppState.cart.forEach((cartItem) => {
    const product = PRODUCTS.find(p => p.id === cartItem.id);
    if (!product) return;

    const itemTotal = product.price * cartItem.qty;
    const mrpTotal = (product.mrp || Math.round(product.price * 1.25)) * cartItem.qty;
    subtotal += itemTotal;
    totalSavings += (mrpTotal - itemTotal);

    const name = product.name[AppState.currentLang] || product.name.en;
    const unit = product.unit[AppState.currentLang] || product.unit.en;

    itemsHtml += `
      <div class="cart-row-modern" id="cart-row-${product.id}">
        <div class="cart-row-left">
          <div class="cart-thumbnail" aria-hidden="true">
            ${product.image ? `<img src="${product.image}" alt="" style="width:100%; height:100%; object-fit:cover; border-radius:var(--radius-sm);" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">` : ''}
            <div class="product-svg-fallback" ${product.image ? 'style="display:none;"' : ''}>${product.iconSvg}</div>
          </div>
          <div>
            <div class="cart-row-title">${name}</div>
            <div class="cart-row-unit-price">₹${product.price} / ${unit}</div>
          </div>
        </div>

        <div class="cart-row-right">
          <div class="qty-stepper-modern" role="group" aria-label="Change quantity for ${name}">
            <button type="button" class="btn-step" data-cart-action="dec" data-id="${product.id}">−</button>
            <span class="step-value" aria-live="polite">${cartItem.qty}</span>
            <button type="button" class="btn-step" data-cart-action="inc" data-id="${product.id}">+</button>
          </div>

          <div class="cart-row-subtotal">₹${itemTotal}</div>

          <button type="button" class="btn-remove-item" data-cart-action="remove" data-id="${product.id}" title="Remove item">
            <svg class="svg-icon svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
          </button>
        </div>
      </div>
    `;
  });

  const isFreeDelivery = subtotal >= 499;

  container.innerHTML = `
    <div class="cart-layout-container">
      <div class="cart-items-card">
        <div style="font-weight:900; font-size:1.15rem; margin-bottom:12px; display:flex; justify-content:space-between;">
          <span>Items in Bag (${AppState.cart.reduce((s, i) => s + i.qty, 0)})</span>
          <span style="color:var(--primary); font-size:0.9rem;">10-15 Min Delivery</span>
        </div>
        ${itemsHtml}
      </div>

      <div class="cart-summary-sidebar">
        ${totalSavings > 0 ? `
          <div class="savings-banner-pill">
            
            <span>You are saving <strong>₹${totalSavings}</strong> on this order!</span>
          </div>
        ` : ''}

        <h3 style="font-size:1.15rem; font-weight:900; margin-bottom:14px;">Bill Details</h3>

        <div class="bill-line-item">
          <span>${t('itemTotalLabel')}</span>
          <span style="font-weight:800;">₹${subtotal}</span>
        </div>
        <div class="bill-line-item">
          <span>${t('deliveryFeeLabel')}</span>
          <span class="free-tag-badge">${isFreeDelivery ? 'FREE' : '₹29'}</span>
        </div>
        <div class="bill-line-item">
          <span>Handling & Bag:</span>
          <span style="color:var(--primary); font-weight:800;">FREE</span>
        </div>
        <div class="bill-line-item total-line">
          <span>Total Amount</span>
          <span style="color:var(--primary); font-size:1.35rem;">₹${subtotal + (isFreeDelivery ? 0 : 29)}</span>
        </div>

        <button type="button" class="btn-checkout-primary" id="btn-cart-proceed-checkout" style="margin-top:16px;">
          Proceed to Checkout
        </button>
      </div>
    </div>
  `;

  // Bind actions
  container.querySelectorAll('[data-cart-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-cart-action');
      const prodId = btn.getAttribute('data-id');

      if (action === 'inc') updateCartQuantity(prodId, 1);
      if (action === 'dec') updateCartQuantity(prodId, -1);
      if (action === 'remove') removeItemWithUndo(prodId);
    });
  });

  document.getElementById('btn-cart-proceed-checkout')?.addEventListener('click', () => {
    switchView('checkout');
    showCheckoutStep(2); // Jump straight to Address step
  });
}


// ==========================================
// 10. 3-STEP CHECKOUT WIZARD
// ==========================================
function bindCheckoutEvents() {
  document.getElementById('btn-checkout-back-to-shop')?.addEventListener('click', () => switchView('shop'));
  document.getElementById('btn-checkout-go-step-2')?.addEventListener('click', () => showCheckoutStep(2));

  document.getElementById('btn-address-back-step-1')?.addEventListener('click', () => showCheckoutStep(1));
  document.getElementById('btn-address-go-step-3')?.addEventListener('click', () => {
    if (validateAddressForm()) {
      showCheckoutStep(3);
    }
  });

  document.getElementById('btn-pay-back-step-2')?.addEventListener('click', () => showCheckoutStep(2));
  document.getElementById('btn-confirm-place-order')?.addEventListener('click', () => placeOrderSafely());

  // Auto-Fill sample address button
  document.getElementById('btn-autofill-address')?.addEventListener('click', () => {
    document.getElementById('input-fullname').value = "Ramesh S. Joshi";
    document.getElementById('input-phone').value = "9822012345";
    document.getElementById('input-street').value = "Flat 302, Sai Anand Apts, Near Ganesh Mandir, Karve Road";
    document.getElementById('input-city').value = "Pune";
    document.getElementById('input-pincode').value = "411038";
    document.getElementById('select-delivery-slot').value = "superfast";
    showToast("Sample address auto-filled for fast checkout!");
  });

  // Payment option radio cards
  document.querySelectorAll('.payment-option-card').forEach((card) => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.payment-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        AppState.paymentMethod = radio.value;
      }
    });
  });
}

function showCheckoutStep(stepNumber) {
  AppState.checkoutStep = stepNumber;

  [1, 2, 3].forEach((step) => {
    const indicator = document.getElementById(`wizard-step-${step}`);
    const panel = document.getElementById(`checkout-panel-step-${step}`);

    indicator?.classList.toggle('active', step === stepNumber);
    indicator?.classList.toggle('completed', step < stepNumber);
    panel?.classList.toggle('active', step === stepNumber);
  });

  if (stepNumber === 1) {
    renderStep1Summary();
  } else if (stepNumber === 3) {
    renderCheckoutSummary();
  }
}

function renderStep1Summary() {
  const container = document.getElementById('checkout-step1-items-summary');
  if (!container) return;

  if (AppState.cart.length === 0) {
    container.innerHTML = `<p>${t('emptyCartMsg')}</p>`;
    return;
  }

  let subtotal = 0;
  let itemsListHtml = '<ul style="list-style:none; padding:0;">';

  AppState.cart.forEach((c) => {
    const prod = PRODUCTS.find(p => p.id === c.id);
    if (!prod) return;
    const itemTotal = prod.price * c.qty;
    subtotal += itemTotal;
    const name = prod.name[AppState.currentLang] || prod.name.en;
    itemsListHtml += `
      <li style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid var(--border-color);">
        <span>${name} × <strong>${c.qty}</strong></span>
        <strong>₹${itemTotal}</strong>
      </li>
    `;
  });
  itemsListHtml += '</ul>';

  container.innerHTML = `
    ${itemsListHtml}
    <div style="display:flex; justify-content:space-between; margin-top:16px; font-size:1.2rem; font-weight:900;">
      <span>Total Amount</span>
      <span style="color:var(--primary);">₹${subtotal}</span>
    </div>
  `;
}

function validateAddressForm() {
  const fullName = document.getElementById('input-fullname')?.value.trim();
  const phone = document.getElementById('input-phone')?.value.trim();
  const street = document.getElementById('input-street')?.value.trim();
  const city = document.getElementById('input-city')?.value.trim();
  const pincode = document.getElementById('input-pincode')?.value.trim();
  const slot = document.getElementById('select-delivery-slot')?.value;

  if (!fullName || !phone || !street || !city || !pincode) {
    alert("Please fill in your delivery name, phone number, and address.");
    return false;
  }

  AppState.address = { fullName, phone, street, city, pincode, slot };
  return true;
}

function renderCheckoutSummary() {
  const addressContainer = document.getElementById('checkout-delivery-address-summary');
  const linesContainer = document.getElementById('checkout-payment-summary-lines');

  if (addressContainer) {
    addressContainer.innerHTML = `
      <div style="background:var(--bg-subtle); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
        <strong>${t('deliverToSummary')}</strong> ${AppState.address.fullName || "Ramesh S. Joshi"} (${AppState.address.phone || "9822012345"})<br>
        <span style="color:var(--text-muted);">${AppState.address.street || "Flat 302, Sai Anand Apts"}, ${AppState.address.city || "Pune"} - ${AppState.address.pincode || "411038"}</span>
      </div>
    `;
  }

  const subtotal = AppState.cart.reduce((sum, item) => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    return sum + (prod ? prod.price * item.qty : 0);
  }, 0);

  if (linesContainer) {
    linesContainer.innerHTML = `
      <div class="bill-line-item">
        <span>${t('itemTotalLabel')}</span>
        <span>₹${subtotal}</span>
      </div>
      <div class="bill-line-item">
        <span>${t('deliveryFeeLabel')}</span>
        <span class="free-tag-badge">${t('freeDeliveryText')}</span>
      </div>
      <div class="bill-line-item total-line">
        <span>${t('grandTotalLabel')}</span>
        <span style="color:var(--primary);">₹${subtotal}</span>
      </div>
    `;
  }
}

function placeOrderSafely() {
  if (AppState.cart.length === 0) {
    alert("Your shopping bag is empty! Please add some groceries first.");
    switchView('shop');
    return;
  }

  const subtotal = AppState.cart.reduce((sum, item) => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    return sum + (prod ? prod.price * item.qty : 0);
  }, 0);

  const itemCount = AppState.cart.reduce((sum, item) => sum + item.qty, 0);

  if (AppState.isPracticeMode) {
    AppState.practiceBalance = Math.max(0, AppState.practiceBalance - subtotal);
    localStorage.setItem('easybuy_practice_bal', AppState.practiceBalance);
    updatePracticeBanner();
  }

  const orderId = '#EB-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const timeStr = "Today, " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  AppState.activeOrder = {
    id: orderId,
    date: timeStr,
    total: subtotal,
    items: itemCount,
    statusStep: 1
  };
  localStorage.setItem('easybuy_order', JSON.stringify(AppState.activeOrder));

  // Push into user order history
  AppState.userOrders.unshift({
    id: orderId,
    date: timeStr,
    total: subtotal,
    items: itemCount,
    status: 'Ordered'
  });
  localStorage.setItem('easybuy_user_orders', JSON.stringify(AppState.userOrders));

  // Clear cart
  AppState.cart = [];
  saveCart();
  updateCartBadge();

  // Populate Order Confirmation Screen
  const confirmOrderId = document.getElementById('confirm-order-id');
  const confirmDeliveryTime = document.getElementById('confirm-delivery-time');
  const confirmAddress = document.getElementById('confirm-address-display');
  const confirmAmount = document.getElementById('confirm-amount-display');

  if (confirmOrderId) confirmOrderId.textContent = orderId;
  if (confirmDeliveryTime) confirmDeliveryTime.textContent = "Today within 15 minutes";
  if (confirmAddress) {
    confirmAddress.innerHTML = `
      <strong>${AppState.address.fullName || "Ramesh S. Joshi"}</strong> (${AppState.address.phone || "9822012345"})<br>
      ${AppState.address.street || "Flat 302, Sai Anand Apts"}, ${AppState.address.city || "Pune"} - ${AppState.address.pincode || "411038"}
    `;
  }
  if (confirmAmount) {
    confirmAmount.textContent = `₹${subtotal}`;
  }

  // Update tracking view elements
  const orderIdEl = document.getElementById('track-order-id');
  if (orderIdEl) orderIdEl.textContent = orderId;

  // Switch to Order Confirmation Screen
  switchView('confirmation');
  showToast(`Order ${orderId} placed successfully!`);
}


// ==========================================
// 11. CONFIRMATION VIEW EVENT HANDLERS
// ==========================================
function bindConfirmationEvents() {
  document.getElementById('btn-confirm-track-order')?.addEventListener('click', () => {
    switchView('track');
  });
  document.getElementById('btn-confirm-continue-shop')?.addEventListener('click', () => {
    switchView('shop');
  });
}


// ==========================================
// 12. ORDER TRACKING & LIVE SIMULATION
// ==========================================
function bindTrackingEvents() {
  document.getElementById('btn-simulate-tracking')?.addEventListener('click', () => {
    let current = AppState.activeOrder.statusStep || 1;
    current = (current >= 4) ? 1 : (current + 1);
    AppState.activeOrder.statusStep = current;
    localStorage.setItem('easybuy_order', JSON.stringify(AppState.activeOrder));
    updateTrackingStepperUI();

    const stepNames = ["Order Received", "Packed Fresh", "Out for Delivery", "Delivered Safely"];
    showToast(`Live Tracking: ${stepNames[current - 1]}`);
  });

  document.getElementById('btn-track-shop-again')?.addEventListener('click', () => switchView('shop'));
}

function updateTrackingStepperUI() {
  const currentStep = AppState.activeOrder.statusStep || 1;

  for (let s = 1; s <= 4; s++) {
    const stepEl = document.getElementById(`track-step-${s}`);
    if (!stepEl) continue;

    stepEl.classList.remove('completed', 'current');
    const node = stepEl.querySelector('.timeline-node');

    if (s < currentStep) {
      stepEl.classList.add('completed');
      if (node) node.innerHTML = '<svg class="svg-icon svg-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
    } else if (s === currentStep) {
      stepEl.classList.add('current');
      if (node) node.textContent = s;
    } else {
      if (node) node.textContent = s;
    }
  }
}


// ==========================================
// 13. AUTHENTICATION & ACCOUNT DASHBOARD
// ==========================================
function bindAuthEvents() {
  // Login Form
  document.getElementById('btn-submit-login')?.addEventListener('click', handleLoginSubmit);
  document.getElementById('btn-quick-demo-login')?.addEventListener('click', handleQuickDemoLogin);
  document.getElementById('btn-google-login')?.addEventListener('click', handleGoogleLogin);
  document.getElementById('btn-toggle-password')?.addEventListener('click', togglePasswordVisibility);

  // Routing links between Auth views
  document.getElementById('link-to-forgot')?.addEventListener('click', () => switchView('forgot'));
  document.getElementById('link-to-signup')?.addEventListener('click', () => switchView('signup'));
  document.getElementById('link-to-login')?.addEventListener('click', () => switchView('login'));
  document.getElementById('link-back-login')?.addEventListener('click', () => switchView('login'));

  // Sign up Form
  document.getElementById('btn-submit-signup')?.addEventListener('click', handleSignupSubmit);

  // Forgot Password Form
  document.getElementById('btn-submit-forgot')?.addEventListener('click', handleForgotSubmit);
}

function togglePasswordVisibility() {
  const pwInput = document.getElementById('login-password');
  const btn = document.getElementById('btn-toggle-password');
  if (!pwInput) return;
  if (pwInput.type === 'password') {
    pwInput.type = 'text';
    btn.innerHTML = '<svg class="svg-icon svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
  } else {
    pwInput.type = 'password';
    btn.innerHTML = '<svg class="svg-icon svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>';
  }
}

function handleLoginSubmit() {
  const emailOrPhone = document.getElementById('login-email')?.value.trim();
  const password = document.getElementById('login-password')?.value.trim();

  if (!emailOrPhone || !password) {
    alert("Please enter both email/phone and password.");
    return;
  }

  // Demo authentication simulation
  AppState.currentUser = {
    name: emailOrPhone.includes('@') ? emailOrPhone.split('@')[0].toUpperCase() : 'Valued Customer',
    email: emailOrPhone.includes('@') ? emailOrPhone : 'customer@example.com',
    phone: !emailOrPhone.includes('@') ? emailOrPhone : '9822012345',
    address: 'Flat 302, Sai Anand Apts, Near Ganesh Mandir, Karve Road, Pune - 411038'
  };

  localStorage.setItem('easybuy_authenticated', 'true');
  localStorage.setItem('easybuy_user', JSON.stringify(AppState.currentUser));
  updateUserHeaderUI();
  showToast(`Welcome back, ${AppState.currentUser.name}!`);
  switchView('home');
}

function handleQuickDemoLogin() {
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-password');
  if (emailInput) emailInput.value = "ramesh@example.com";
  if (passInput) passInput.value = "SeniorCare2026";

  AppState.currentUser = {
    name: 'Ramesh S. Joshi',
    email: 'ramesh.joshi@example.com',
    phone: '9822012345',
    address: 'Flat 302, Sai Anand Apts, Near Ganesh Mandir, Karve Road, Pune - 411038'
  };

  localStorage.setItem('easybuy_authenticated', 'true');
  localStorage.setItem('easybuy_user', JSON.stringify(AppState.currentUser));
  updateUserHeaderUI();
  showToast("Logged in as Ramesh S. Joshi (Verified Senior Citizen)");
  switchView('home');
}

function handleGoogleLogin() {
  AppState.currentUser = {
    name: 'Ramesh S. Joshi',
    email: 'ramesh.joshi@gmail.com',
    phone: '9822012345',
    address: 'Flat 302, Sai Anand Apts, Near Ganesh Mandir, Karve Road, Pune - 411038'
  };

  localStorage.setItem('easybuy_authenticated', 'true');
  localStorage.setItem('easybuy_user', JSON.stringify(AppState.currentUser));
  updateUserHeaderUI();
  showToast("Signed in with Google (Demo Simulation)");
  switchView('home');
}

function handleSignupSubmit() {
  const name = document.getElementById('signup-name')?.value.trim();
  const email = document.getElementById('signup-email')?.value.trim();
  const phone = document.getElementById('signup-phone')?.value.trim();
  const pass = document.getElementById('signup-password')?.value.trim();
  const confirmPass = document.getElementById('signup-confirm-password')?.value.trim();

  if (!name || !email || !phone || !pass) {
    alert("Please fill in all registration fields.");
    return;
  }

  if (pass !== confirmPass) {
    alert("Passwords do not match! Please verify your password entry.");
    return;
  }

  AppState.currentUser = {
    name: name,
    email: email,
    phone: phone,
    address: 'Pune, Maharashtra'
  };

  localStorage.setItem('easybuy_authenticated', 'true');
  localStorage.setItem('easybuy_user', JSON.stringify(AppState.currentUser));
  updateUserHeaderUI();
  showToast(`Account created! Welcome to EasyBuy, ${name}.`);
  switchView('home');
}

function handleForgotSubmit() {
  const inputVal = document.getElementById('forgot-email')?.value.trim();
  if (!inputVal) {
    alert("Please enter your registered email or phone number.");
    return;
  }

  const alertBox = document.getElementById('forgot-alert-box');
  if (alertBox) {
    alertBox.style.display = 'block';
  }
  showToast("Password reset verification SMS/Email simulated!");
}

function bindAccountEvents() {
  document.getElementById('btn-account-logout')?.addEventListener('click', () => {
    AppState.currentUser = null;
    localStorage.removeItem('easybuy_authenticated');
    localStorage.removeItem('easybuy_user');
    updateUserHeaderUI();
    showToast("You have logged out safely.");
    switchView('login');
  });

  document.getElementById('btn-reset-practice-wallet')?.addEventListener('click', () => {
    AppState.practiceBalance = 500.0;
    localStorage.setItem('easybuy_practice_bal', 500.0);
    updatePracticeBanner();
    renderAccountView();
    showToast("Virtual Practice Wallet refilled to ₹500.00!");
  });
}

function updateUserHeaderUI() {
  const headerUserLabel = document.getElementById('header-user-label');
  if (!headerUserLabel) return;

  if (AppState.currentUser) {
    const firstName = AppState.currentUser.name.split(' ')[0];
    headerUserLabel.textContent = firstName;
  } else {
    headerUserLabel.textContent = t('navAccount');
  }
}

function renderAccountView() {
  if (!AppState.currentUser) {
    switchView('login');
    return;
  }

  const nameEl = document.getElementById('account-user-name');
  const contactEl = document.getElementById('account-user-contact');
  const addressBox = document.getElementById('account-address-box');
  const ordersList = document.getElementById('account-orders-list');
  const practiceBalEl = document.getElementById('account-practice-balance');

  if (nameEl) nameEl.textContent = AppState.currentUser.name;
  if (contactEl) contactEl.textContent = `${AppState.currentUser.phone} • ${AppState.currentUser.email}`;
  if (addressBox) {
    addressBox.innerHTML = `
      <strong>Home (Default)</strong><br>
      <span style="font-size:0.9rem; color:var(--text-body);">${AppState.currentUser.address || "Flat 302, Sai Anand Apts, Near Ganesh Mandir, Karve Road, Pune - 411038"}</span>
    `;
  }
  if (practiceBalEl) {
    practiceBalEl.textContent = `₹${AppState.practiceBalance.toFixed(2)}`;
  }

  if (ordersList) {
    if (AppState.userOrders.length === 0) {
      ordersList.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">No orders placed yet.</p>`;
    } else {
      ordersList.innerHTML = AppState.userOrders.map(order => `
        <div style="background:var(--bg-subtle); border-radius:var(--radius-md); padding:12px; margin-bottom:10px; border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <div>
            <div style="font-weight:800; font-size:0.95rem; color:var(--primary);">${order.id}</div>
            <div style="font-size:0.82rem; color:var(--text-muted);">${order.date} • ${order.items || 3} items</div>
            <div style="font-weight:800; font-size:0.95rem; margin-top:2px;">₹${order.total} <span style="font-size:0.75rem; font-weight:700; background:#dcfce7; color:#15803d; padding:2px 6px; border-radius:4px; margin-left:6px;">${order.status}</span></div>
          </div>
          <button type="button" class="btn-pill" style="font-size:0.85rem; padding:6px 12px; border-color:var(--primary); color:var(--primary); font-weight:800;" onclick="viewPastOrder('${order.id}')">
            Track Order
          </button>
        </div>
      `).join('');
    }
  }
}

function viewPastOrder(orderId) {
  const found = AppState.userOrders.find(o => o.id === orderId);
  if (found) {
    AppState.activeOrder = {
      id: found.id,
      date: found.date,
      total: found.total,
      statusStep: found.status === 'Delivered' ? 4 : 2
    };
    localStorage.setItem('easybuy_order', JSON.stringify(AppState.activeOrder));
    const trackOrderId = document.getElementById('track-order-id');
    if (trackOrderId) trackOrderId.textContent = found.id;
    switchView('track');
  }
}
window.viewPastOrder = viewPastOrder;


// ==========================================
// 14. GUIDED MODE ("Teach Me How to Shop")
// ==========================================
function bindGuidedModeEvents() {
  document.getElementById('btn-guided-next')?.addEventListener('click', () => advanceGuidedStep(1));
  document.getElementById('btn-guided-prev')?.addEventListener('click', () => advanceGuidedStep(-1));
  document.getElementById('btn-guided-skip')?.addEventListener('click', () => exitGuidedTour());
  document.getElementById('btn-exit-practice')?.addEventListener('click', () => exitGuidedTour());
}

const GUIDED_STEPS = [
  { step: 1, view: 'home', highlightSelector: '#home-categories-grid', textKey: 'guidedStep1' },
  { step: 2, view: 'shop', highlightSelector: '.product-card-modern', textKey: 'guidedStep2' },
  { step: 3, view: 'shop', highlightSelector: '[data-nav="cart"]', textKey: 'guidedStep3' },
  { step: 4, view: 'cart', highlightSelector: '#btn-cart-proceed-checkout', textKey: 'guidedStep4' },
  { step: 5, view: 'checkout', highlightSelector: '#btn-autofill-address', textKey: 'guidedStep5' },
  { step: 6, view: 'checkout', highlightSelector: '#pay-card-cod', textKey: 'guidedStep6' }
];

function startGuidedTour() {
  AppState.isGuidedActive = true;
  AppState.isPracticeMode = true;
  AppState.guidedStep = 0;

  document.getElementById('practice-banner')?.classList.add('active');
  updatePracticeBanner();

  document.getElementById('guided-tour-box')?.classList.add('active');
  advanceGuidedStep(0);
}
window.startGuidedTour = startGuidedTour;

function startPracticeModeDirect() {
  AppState.isPracticeMode = true;
  AppState.practiceBalance = 500.0;
  localStorage.setItem('easybuy_practice_bal', 500.0);
  document.getElementById('practice-banner')?.classList.add('active');
  updatePracticeBanner();
  showToast("Practice Mode Activated: ₹500.00 virtual wallet ready!");
}
window.startPracticeModeDirect = startPracticeModeDirect;

function advanceGuidedStep(delta) {
  document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));

  let newIndex = AppState.guidedStep + delta;
  if (newIndex < 0) newIndex = 0;
  if (newIndex >= GUIDED_STEPS.length) {
    exitGuidedTour();
    showToast("Congratulations! You have completed the practice shopping tutorial!");
    return;
  }

  AppState.guidedStep = newIndex;
  const stepObj = GUIDED_STEPS[newIndex];

  if (AppState.currentView !== stepObj.view) {
    switchView(stepObj.view);
  }

  const indicator = document.getElementById('guided-step-indicator');
  const textEl = document.getElementById('guided-step-text');
  const nextBtn = document.getElementById('btn-guided-next');

  if (indicator) indicator.textContent = `STEP ${stepObj.step} OF ${GUIDED_STEPS.length}`;
  if (textEl) textEl.textContent = t(stepObj.textKey);
  if (nextBtn) {
    nextBtn.textContent = (newIndex === GUIDED_STEPS.length - 1) ? t('guidedFinishBtn') : t('guidedNextBtn');
  }

  setTimeout(() => {
    const target = document.querySelector(stepObj.highlightSelector);
    if (target) {
      target.classList.add('tour-highlight');
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 200);
}

function exitGuidedTour() {
  AppState.isGuidedActive = false;
  AppState.isPracticeMode = false;
  document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));

  document.getElementById('guided-tour-box')?.classList.remove('active');
  document.getElementById('practice-banner')?.classList.remove('active');
}

function updatePracticeBanner() {
  const bannerText = document.getElementById('practice-banner-text');
  if (bannerText) {
    bannerText.textContent = `PRACTICE MODE ACTIVE: Using Virtual Play Wallet (₹${AppState.practiceBalance.toFixed(2)} Balance). Safe demonstration.`;
  }
}


// ==========================================
// 15. CONTEXTUAL HELP MODAL
// ==========================================
function bindHelpModalEvents() {
  const modal = document.getElementById('help-modal');
  const closeBtn = document.getElementById('btn-close-help-modal');

  closeBtn?.addEventListener('click', () => modal?.classList.remove('active'));
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

function openHelpModal() {
  const modal = document.getElementById('help-modal');
  const body = document.getElementById('help-modal-content');
  if (!modal || !body) return;

  let helpText = '';
  switch (AppState.currentView) {
    case 'home':
      helpText = t('helpHomeText');
      break;
    case 'shop':
      helpText = t('helpShopText');
      break;
    case 'cart':
      helpText = t('helpCartText');
      break;
    case 'checkout':
      helpText = t('helpCheckoutText');
      break;
    case 'track':
      helpText = t('helpTrackText');
      break;
    case 'login':
    case 'signup':
    case 'forgot':
      helpText = "Sign In & Security Help:\n• Tap 'Quick Demo Login' to instantly test the platform with a verified account.\n• Continue with Google offers demo single sign-on.\n• Passwords can be shown or hidden with the eye icon.";
      break;
    case 'account':
      helpText = "Account Assistance:\n• Review all previous orders, check delivery statuses, or track your live grocery order.\n• Refill your virtual practice money anytime with the 'Reset ₹500' button.";
      break;
    case 'confirmation':
      helpText = "Order Success Help:\n• Your order is now registered at our hub!\n• Tap 'Track Live Order' to see Santosh M. preparing your delivery.";
      break;
    default:
      helpText = t('helpHomeText');
  }

  body.textContent = helpText;
  modal.classList.add('active');
}
window.openHelpModal = openHelpModal;


// ==========================================
// 16. WEB SPEECH API: VOICE SEARCH & READ ALOUD
// ==========================================
let speechRecognitionInstance = null;

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const btnVoice = document.getElementById('btn-voice-search');
  const alertBox = document.getElementById('search-alert-box');

  if (!btnVoice || !SpeechRecognition) return;

  try {
    speechRecognitionInstance = new SpeechRecognition();
    speechRecognitionInstance.continuous = false;
    speechRecognitionInstance.interimResults = false;

    speechRecognitionInstance.onstart = () => {
      btnVoice.classList.add('listening');
      if (alertBox) {
        alertBox.textContent = t('searchVoiceListening');
        alertBox.classList.add('active');
      }
    };

    speechRecognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.value = transcript;
        AppState.searchQuery = transcript.trim().toLowerCase();
        if (AppState.currentView !== 'shop') switchView('shop');
        renderProducts();
        showToast(`Voice search recognized: "${transcript}"`);
      }
    };

    speechRecognitionInstance.onerror = (event) => {
      stopVoiceSearch();
      if (alertBox) {
        alertBox.textContent = `Could not hear audio clearly (${event.error}). Please type in search.`;
        alertBox.classList.add('active');
        setTimeout(() => alertBox.classList.remove('active'), 4000);
      }
    };

    speechRecognitionInstance.onend = () => stopVoiceSearch();
  } catch (err) {
    console.error("Failed to init SpeechRecognition:", err);
  }
}

function stopVoiceSearch() {
  const btnVoice = document.getElementById('btn-voice-search');
  const alertBox = document.getElementById('search-alert-box');

  btnVoice?.classList.remove('listening');
  alertBox?.classList.remove('active');
}

function bindSpeechEvents() {
  const btnVoice = document.getElementById('btn-voice-search');
  const alertBox = document.getElementById('search-alert-box');

  btnVoice?.addEventListener('click', () => {
    if (!speechRecognitionInstance) {
      if (alertBox) {
        alertBox.textContent = t('searchVoiceNotSupported');
        alertBox.classList.add('active');
        setTimeout(() => alertBox.classList.remove('active'), 5000);
      } else {
        alert(t('searchVoiceNotSupported'));
      }
      return;
    }

    const langCodes = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };
    speechRecognitionInstance.lang = langCodes[AppState.currentLang] || 'en-IN';

    try {
      speechRecognitionInstance.start();
    } catch (err) {
      speechRecognitionInstance.stop();
    }
  });

  document.getElementById('btn-read-aloud')?.addEventListener('change', (e) => {
    if (e.target.checked) {
      if (!AppState.isSpeaking) toggleReadAloud();
    } else {
      if (AppState.isSpeaking) toggleReadAloud();
    }
  });
}

function toggleReadAloud() {
  if (!('speechSynthesis' in window)) {
    alert("Speech Synthesis is not supported in this browser.");
    return;
  }

  if (AppState.isSpeaking) {
    window.speechSynthesis.cancel();
    AppState.isSpeaking = false;
    updateReadAloudBtnUI();
    return;
  }

  let textToSpeak = '';
  switch (AppState.currentView) {
    case 'home':
      textToSpeak = `${t('welcomeTitle')}. Fresh fruits, vegetables, milk and grains delivered fast at your doorstep.`;
      break;
    case 'shop':
      textToSpeak = `${t('shopTitle')}. Fresh groceries available for delivery.`;
      break;
    case 'cart':
      const total = AppState.cart.reduce((s, c) => {
        const p = PRODUCTS.find(prod => prod.id === c.id);
        return s + (p ? p.price * c.qty : 0);
      }, 0);
      textToSpeak = `Your Cart. You have ${AppState.cart.length} items in your bag. Total amount is ${total} rupees.`;
      break;
    case 'checkout':
      textToSpeak = "Please confirm your delivery address and choose Cash on Delivery.";
      break;
    case 'confirmation':
      textToSpeak = "Order Placed Successfully! Your order will be delivered within 15 minutes. Thank you for shopping with EasyBuy.";
      break;
    case 'track':
      textToSpeak = "Your order is being carefully packed. Rider Santosh is on the way.";
      break;
    case 'login':
      textToSpeak = "Welcome back to EasyBuy. Please enter your email or mobile number and password, or tap Quick Demo Login.";
      break;
    case 'account':
      textToSpeak = `User Account for ${AppState.currentUser ? AppState.currentUser.name : 'User'}. You have ${AppState.userOrders.length} past orders. Virtual practice wallet balance is ${AppState.practiceBalance} rupees.`;
      break;
    default:
      textToSpeak = t('welcomeTitle');
  }

  const cleanText = textToSpeak.replace(/[\u{1F300}-\u{1F9FF}]/gu, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);

  const langCodes = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };
  utterance.lang = langCodes[AppState.currentLang] || 'en-IN';
  utterance.rate = 0.9;

  utterance.onstart = () => {
    AppState.isSpeaking = true;
    updateReadAloudBtnUI();
  };
  utterance.onend = () => {
    AppState.isSpeaking = false;
    updateReadAloudBtnUI();
  };
  utterance.onerror = () => {
    AppState.isSpeaking = false;
    updateReadAloudBtnUI();
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function updateReadAloudBtnUI() {
  const switchToggle = document.getElementById('btn-read-aloud');
  if (switchToggle) {
    switchToggle.checked = AppState.isSpeaking;
  }
}


// ==========================================
// 17. TOAST NOTIFICATIONS & 5-SEC UNDO
// ==========================================
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function showUndoToast(message, onUndo) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `
    <span>${message}</span>
    <button type="button" class="toast-btn" id="btn-toast-undo">${t('undoBtn')}</button>
  `;

  container.appendChild(toast);

  const undoBtn = toast.querySelector('#btn-toast-undo');
  undoBtn?.addEventListener('click', () => {
    onUndo();
    toast.remove();
  });

  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }
  }, 5000);
}
