# EasyBuy — Modern Commercial Grocery E-Commerce Platform
*A production-grade, accessible quick-commerce grocery web application inspired by Blinkit, Zepto, and Amazon Fresh.*

---

## 1. Commercial Design System & Master Implementation

EasyBuy has been completely transformed into a **production-style commercial supermarket platform** designed to provide a fast, accessible, and delightful shopping experience for first-time shoppers and senior citizens:

1. **Exact Entry Flow (Session-Aware)**:
   - **First-Time Visitors**: Loads dedicated **Welcome Splash Page** (`#view-welcome`) highlighting 10-15 minute delivery, farm-fresh harvest, and senior accessibility.
   - **Get Started CTA**: Clicking **Get Started** (`#btn-welcome-get-started`) navigates smoothly to the **Proto.io Split Login Page** (`#view-login`).
   - **Authentication**: Signing in or clicking **Quick Demo Login (Ramesh Joshi)** authenticates the session (`easybuy_authenticated = 'true'`) and navigates directly to the **Homepage** (`#view-home`).
   - **Repeat Visits**: With an active session, users land directly on the **Homepage Storefront** (`#view-home`).
   - **Logout**: Clicking **Log Out** in the Account view clears the session and returns to the **Login Page** (`#view-login`).

2. **Zero Emoji Vector Icon System**:
   - 100% of emojis have been completely eliminated across the entire user interface, navigation, filters, cards, and modal dialogs.
   - Replaced with clean, professional, accessible inline SVG vector icons with standard viewBox and consistent stroke weights.

3. **Expanded Product Catalogue (24 Products across 6 Categories)**:
   - **Fruits (4 items)**: Fresh Red Apples, Ripe Bananas, Sweet Nagpur Oranges, Alphonso Mangoes.
   - **Vegetables (4 items)**: Farm Potatoes, Juicy Red Tomatoes, Nashik Red Onions, Fresh Green Spinach.
   - **Dairy & Eggs (4 items)**: Cow Milk Pouch, Natural Set Curd (Dahi), Fresh Malai Paneer, Pure Cow Ghee.
   - **Bakery & Staples (4 items)**: Whole Wheat Chakki Atta, Royal Basmati Rice, Unpolished Toor Dal, Thick Poha.
   - **Snacks & Munchies (4 items)**: Crispy Potato Chips, Whole Wheat Digestive Biscuits, Roasted California Almonds, Traditional Crispy Namkeen Mix.
   - **Household & Cleaning (4 items)**: Lemon Dishwash Gel 750ml, Active Fabric Detergent Liquid 1L, Citrus Disinfectant Floor Cleaner 1L, 2-Ply Kitchen Paper Towels.
   - **Bug Fix**: The previously reported issue where Snacks and Household displayed "No items match your search" has been completely fixed with real products, local photography, realistic pricing, discount tags, and nutritional information.

4. **Typography & Commercial Color Palette**:
   - **Font Family**: Standardized Inter typography (`'Inter', Arial, sans-serif`) linked from Google Fonts with strict weight hierarchy (400 body, 500-600 controls/names, 700 headings/prices).
   - **Commercial Color System**:
     - Primary Green: `#138A36`
     - Dark Green Hover: `#075C2C`
     - Light Accent Green: `#EAF5EC`
     - Subtle Green Tint: `#F0FDF4`
     - Background: `#F7F8FA`
     - Text Primary: `#202124`
     - Text Muted: `#6B7280`
     - Card Border: `#E5E7EB`

5. **Accessibility & Senior-Friendly Assistance**:
   - **A- / A / A+ Text Scaler**: Dynamically adjusts typography across the entire page using CSS variable `--font-scale` without breaking page layout.
   - **WCAG AAA High Contrast Theme**: High-contrast black and yellow palette for low-vision accessibility.
   - **Trilingual Localization**: Instant English, Hindi, and Marathi translation of buttons, banners, product details, and checkout steps.
   - **Voice Search & Speech Synthesis**: Browser Web Speech API for voice search with automatic graceful fallback.
   - **Senior Practice Mode**: ₹500.00 virtual play-money wallet allowing risk-free practice with zero real currency.
   - **5-Second Undo Protection**: Instant green banner and toast notification with 5-second countdown to reverse accidental item removals.
   - **Senior Helpline Link**: Direct dialer shortcut to `1800-000-EASY` (`1800-000-3279`).

6. **3-Step Checkout, Post-Purchase Confirmation & Live Tracking**:
   - **Step 1**: Review Bag & Subtotals.
   - **Step 2**: Doorstep Delivery Address with **Auto-Fill Sample Address** for fast demonstration.
   - **Step 3**: Safe Payment selection with prioritized Cash on Delivery (COD), UPI, and Debit/Credit Card.
   - **Confirmation**: Post-purchase confirmation banner with live-generated Order ID (`#EB-XXXX`).
   - **Live Tracking**: 4-stage tracking stepper (*Order Received -> Packed Fresh -> Out for Delivery -> Delivered Safely*) with delivery partner card (*Santosh M., Verified Rider*) and **Simulate Next Step** demo button.

---

## 2. File Organization

```
EasyBuy/
├── index.html          # Semantic HTML5 single-page application with 11 view sections
├── style.css           # Modern production CSS design system with Inter font & #138A36 palette
├── data.js             # 24 local products, 6 categories, and complete EN/HI/MR translations
├── script.js           # Vanilla JavaScript application controller, state management, & routing
├── assets/
│   └── images/         # 35 high-resolution local photography assets (100% offline-ready)
└── README.md           # Documentation & Architecture Guide
```

---

## 3. How to Run

1. Open `index.html` in any modern web browser (Edge, Chrome, Safari, Firefox).
2. The site operates 100% client-side with zero external build tools, zero frameworks, and zero backend required.
3. All photography and icons are locally bundled for full offline functionality.
