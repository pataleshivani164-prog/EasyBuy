/**
 * EasyBuy - Modern Production Grocery E-Commerce Platform
 * data.js - Product catalogue, categories, and trilingual translations (English, Hindi, Marathi)
 * Enriched with local studio grocery photography and SVG fallbacks.
 */

// 1. SAMPLE PRODUCT CATALOGUE
const PRODUCTS = [
  // --- FRUITS (फळे / फल) ---
  {
    id: "f1",
    category: "fruits",
    image: "assets/images/f1_apple.jpg",
    name: {
      en: "Fresh Red Apples",
      hi: "ताज़े लाल सेब (Apples)",
      mr: "ताजी लाल सफरचंद (Apples)"
    },
    price: 120,
    mrp: 160,
    discount: "25% OFF",
    rating: 4.8,
    reviewsCount: 342,
    isBestseller: true,
    isDeal: true,
    isFreshFind: true,
    unit: {
      en: "1 kg (approx. 4-5 apples)",
      hi: "1 किलो (लगभग 4-5 सेब)",
      mr: "1 किलो (अंदाजे 4-5 सफरचंद)"
    },
    description: {
      en: "Sweet, crisp and juicy red apples sourced directly from Himachal orchards. Hand-picked, washed and packed.",
      hi: "मीठे, कुरकुरे और रसीले लाल सेब। हिमाचल के बगीचों से सीधे चुने हुए और साफ़ किए हुए।",
      mr: "गोड, रसाळ आणि ताजी सफरचंद. आरोग्यासाठी उत्तम आणि ताजी निवडलेली."
    },
    badge: { en: "Best Seller", hi: "सबसे पसंदीदा", mr: "सर्वाधिक पसंती" },
    nutrition: {
      en: "Rich in Dietary Fiber, Vitamin C & Antioxidants • 100% Organic",
      hi: "फाइबर और विटामिन सी से भरपूर • 100% प्राकृतिक",
      mr: "फायबर आणि व्हिटॅमिन सी ने भरपूर • 100% नैसर्गिक"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <defs>
        <radialGradient id="appleGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#ff5252" />
          <stop offset="45%" stop-color="#d32f2f" />
          <stop offset="100%" stop-color="#880e4f" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="65" r="44" fill="url(#appleGrad)"/>
      <path d="M60 25 C 58 14, 66 6, 62 4" stroke="#4e342e" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M62 16 C 76 10, 86 16, 82 24 C 72 24, 64 20, 62 16" fill="#388e3c"/>
      <ellipse cx="44" cy="48" rx="6" ry="12" fill="#ffffff" opacity="0.4" transform="rotate(-20 44 48)"/>
    </svg>`
  },
  {
    id: "f2",
    category: "fruits",
    image: "assets/images/f2_banana.jpg",
    name: {
      en: "Fresh Ripe Bananas",
      hi: "पके हुए ताज़े केले (Bananas)",
      mr: "पिकलेली ताजी केळी (Bananas)"
    },
    price: 45,
    mrp: 60,
    discount: "25% OFF",
    rating: 4.9,
    reviewsCount: 512,
    isBestseller: true,
    isDeal: false,
    isFreshFind: true,
    unit: {
      en: "1 Dozen (12 pieces)",
      hi: "1 दर्जन (12 केले)",
      mr: "1 डझन (12 केळी)"
    },
    description: {
      en: "Naturally ripened Robusta bananas. Sweet, soft, and an instant source of natural energy.",
      hi: "कुदरती रूप से पके, मीठे और पौष्टिक केले। तुरंत ऊर्जा देने वाले।",
      mr: "नैसर्गिकरीत्या पिकलेली गोड आणि ताकद देणारी केळी. नाश्त्यासाठी उत्तम."
    },
    badge: { en: "Daily Essential", hi: "रोज़ की ज़रूरत", mr: "रोजची गरज" },
    nutrition: {
      en: "High Potassium, Vitamin B6 & Natural Electrolytes",
      hi: "पोटेशियम और विटामिन बी6 से भरपूर",
      mr: "पोटॅशियम आणि व्हिटॅमिन बी6 ने समृद्ध"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <path d="M32 28 C 60 22, 94 48, 84 98 C 80 102, 72 101, 72 94 C 80 56, 54 36, 30 34 Z" fill="#fbc02d" stroke="#e65100" stroke-width="1.5"/>
      <path d="M46 30 C 74 34, 102 62, 96 104 C 92 107, 86 106, 85 100 C 90 68, 68 44, 44 36 Z" fill="#fdd835" stroke="#e65100" stroke-width="1.5"/>
      <rect x="28" y="24" width="12" height="10" rx="3" fill="#5d4037" />
    </svg>`
  },
  {
    id: "f3",
    category: "fruits",
    image: "assets/images/f3_orange.jpg",
    name: {
      en: "Sweet Nagpur Oranges",
      hi: "नागपुरी संतरे (Oranges)",
      mr: "नागपूरची ताजी संत्री (Oranges)"
    },
    price: 80,
    mrp: 110,
    discount: "27% OFF",
    rating: 4.7,
    reviewsCount: 198,
    isBestseller: false,
    isDeal: true,
    isFreshFind: true,
    unit: {
      en: "1 kg (approx. 6 pieces)",
      hi: "1 किलो (लगभग 6 संतरे)",
      mr: "1 किलो (अंदाजे 6 संत्री)"
    },
    description: {
      en: "Authentic Nagpur oranges. Packed with immunity-boosting Vitamin C, easy to peel and very juicy.",
      hi: "विटामिन सी से भरपूर, छीलने में आसान और रसीले नागपुरी संतरे।",
      mr: "व्हिटॅमिन सी ने भरपूर, सोलायला सोपी आणि रसाळ नागपुरी संत्री."
    },
    badge: { en: "Vitamin C Boost", hi: "विटामिन सी", mr: "व्हिटॅमिन सी" },
    nutrition: {
      en: "100% RDA Vitamin C, Antioxidants & Hydration",
      hi: "इम्युनिटी बढ़ाने वाला विटामिन सी",
      mr: "रोगप्रतिकारक शक्ती वाढवणारे व्हिटॅमिन सी"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <circle cx="60" cy="64" r="44" fill="#fb8c00" />
      <path d="M60 20 Q 68 10 76 16 Q 68 25 60 20" fill="#43a047"/>
      <circle cx="60" cy="24" r="3.5" fill="#5d4037"/>
    </svg>`
  },
  {
    id: "f4",
    category: "fruits",
    image: "assets/images/f4_mango.jpg",
    name: {
      en: "Sweet Alphonso Mangoes",
      hi: "मीठा हापुस आम (Alphonso Mango)",
      mr: "गोड हापूस आंबा (Mango)"
    },
    price: 250,
    mrp: 350,
    discount: "28% OFF",
    rating: 5.0,
    reviewsCount: 680,
    isBestseller: true,
    isDeal: true,
    isFreshFind: true,
    unit: {
      en: "1 Box (6 pieces)",
      hi: "1 पेटी (6 आम)",
      mr: "1 पेटी (6 आंबे)"
    },
    description: {
      en: "Authentic Ratnagiri Alphonso mangoes. Golden saffron pulp, heavenly aroma and mouthwatering sweetness.",
      hi: "रत्नागिरी के मशहूर खुशबूदार और मीठे हापुस आम। प्रीमियम क्वालिटी।",
      mr: "रत्नागिरीचा अस्सल, सुवासिक आणि गोड हापूस आंबा. अत्यंत चविष्ट."
    },
    badge: { en: "Premium Grade", hi: "प्रीमियम क्वालिटी", mr: "उत्कृष्ट दर्जा" },
    nutrition: {
      en: "Rich in Vitamin A, Dietary Enzymes & Pure Sunshine",
      hi: "विटामिन ए और प्राकृतिक मिठास से भरपूर",
      mr: "व्हिटॅमिन ए ने समृद्ध आणि नैसर्गिक गोडवा"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <path d="M58 24 C 92 24, 106 58, 86 98 C 68 114, 38 102, 34 76 C 30 48, 42 24, 58 24 Z" fill="#ffb300" stroke="#f57c00" stroke-width="2"/>
      <path d="M58 24 C 54 12, 48 6, 46 4" stroke="#4e342e" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M48 8 C 36 8, 28 18, 34 26 C 44 24, 46 14, 48 8" fill="#43a047"/>
    </svg>`
  },

  // --- MILK & DAIRY (दूध आणि दुग्धजन्य / दूध और डेयरी) ---
  {
    id: "m1",
    category: "milk",
    image: "assets/images/m1_milk.jpg",
    name: {
      en: "Fresh Cow Milk (Pasteurized)",
      hi: "ताज़ा गाय का दूध (Fresh Milk)",
      mr: "ताजे गाईचे दूध (Milk)"
    },
    price: 32,
    mrp: 35,
    discount: "9% OFF",
    rating: 4.9,
    reviewsCount: 940,
    isBestseller: true,
    isDeal: false,
    isFreshFind: true,
    unit: {
      en: "500 ml Pouch",
      hi: "500 मिली पैकेट",
      mr: "500 मिली पिशवी"
    },
    description: {
      en: "Farm-fresh, wholesome cow milk. 100% pasteurized, safe and sealed with cream intact.",
      hi: "शुद्ध और सेहतमंद गाय का दूध। पाश्चुरीकृत और सुरक्षित।",
      mr: "शुद्ध, पाश्चराईज्ड आणि आरोग्यदायी गाईचे ताजे दूध."
    },
    badge: { en: "Farm Fresh", hi: "सीधा डेयरी से", mr: "थेट गोठ्यातून" },
    nutrition: {
      en: "Calcium Rich, Vitamin D & Pure Dairy Protein",
      hi: "कैल्शियम और विटामिन डी से भरपूर",
      mr: "कॅल्शियम आणि व्हिटॅमिन डी ने समृद्ध"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <rect x="34" y="28" width="52" height="76" rx="10" fill="#e1f5fe" stroke="#0288d1" stroke-width="3"/>
      <circle cx="60" cy="58" r="14" fill="#0288d1"/>
      <text x="60" y="88" font-family="sans-serif" font-size="11" font-weight="900" fill="#0277bd" text-anchor="middle">MILK</text>
    </svg>`
  },
  {
    id: "m2",
    category: "milk",
    image: "assets/images/m2_curd.jpg",
    name: {
      en: "Fresh Thick Curd (Dahi)",
      hi: "ताज़ा गाढ़ा दही (Dahi)",
      mr: "ताजे घट्ट दही (Curd)"
    },
    price: 40,
    mrp: 48,
    discount: "17% OFF",
    rating: 4.8,
    reviewsCount: 420,
    isBestseller: true,
    isDeal: false,
    isFreshFind: true,
    unit: {
      en: "400 g Tub",
      hi: "400 ग्राम डिब्बा",
      mr: "400 ग्रॅम डबा"
    },
    description: {
      en: "Thick, creamy and mildly sweet dahi set with traditional live cultures. Excellent for gut health.",
      hi: "गाढ़ा, मलाईदार और ताज़ा दही। पेट के लिए बहुत गुणकारी।",
      mr: "घरगुती चवीचे घट्ट आणि रुचकर दही. पचनासाठी आणि आरोग्यासाठी उत्तम."
    },
    badge: { en: "Probiotic", hi: "पाचन में आसान", mr: "पचनास हलके" },
    nutrition: {
      en: "Live Active Cultures, Gut-Friendly Probiotics & Calcium",
      hi: "पाचन शक्ति बढ़ाने वाले प्रोबायोटिक्स",
      mr: "पचनक्रिया सुधारणारे प्रोबायोटिक्स"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <path d="M28 48 L 92 48 L 84 100 L 36 100 Z" fill="#f8fafc" stroke="#64748b" stroke-width="2.5"/>
      <ellipse cx="60" cy="48" rx="32" ry="10" fill="#ffffff" stroke="#64748b" stroke-width="2.5"/>
      <text x="60" y="80" font-family="sans-serif" font-size="12" font-weight="900" fill="#1565c0" text-anchor="middle">DAHI</text>
    </svg>`
  },
  {
    id: "m3",
    category: "milk",
    image: "assets/images/m3_paneer.jpg",
    name: {
      en: "Fresh Soft Malai Paneer",
      hi: "ताज़ा नरम पनीर (Soft Paneer)",
      mr: "ताजे मऊ पनीर (Paneer)"
    },
    price: 90,
    mrp: 110,
    discount: "18% OFF",
    rating: 4.8,
    reviewsCount: 310,
    isBestseller: false,
    isDeal: true,
    isFreshFind: true,
    unit: {
      en: "200 g Pack",
      hi: "200 ग्राम पैकेट",
      mr: "200 ग्रॅम पाकीट"
    },
    description: {
      en: "Ultra-soft and melt-in-mouth cottage cheese made from fresh cow milk. High protein content.",
      hi: "मुलायम और शुद्ध पनीर। प्रोटीन से भरपूर और घर जैसा स्वाद।",
      mr: "अतिशय मऊ आणि शुद्ध ताजे पनीर. प्रथिनांचा उत्कृष्ट स्रोत."
    },
    badge: { en: "High Protein", hi: "प्रोटीन से भरपूर", mr: "प्रथिनेयुक्त" },
    nutrition: {
      en: "18g Protein per 100g • Low Carb • 100% Pure Milk",
      hi: "उच्च प्रोटीन और शुद्ध दूध से निर्मित",
      mr: "उच्च प्रथिने आणि शुद्ध दुधापासून बनवलेले"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <rect x="30" y="38" width="60" height="50" rx="6" fill="#fffde7" stroke="#fbc02d" stroke-width="3"/>
      <text x="60" y="68" font-family="sans-serif" font-size="11" font-weight="900" fill="#f57f17" text-anchor="middle">PANEER</text>
    </svg>`
  },
  {
    id: "m4",
    category: "milk",
    image: "assets/images/m4_ghee.jpg",
    name: {
      en: "Pure Golden Cow Ghee",
      hi: "शुद्ध गाय का घी (Cow Ghee)",
      mr: "शुद्ध गाईचे तूप (Pure Ghee)"
    },
    price: 180,
    mrp: 230,
    discount: "22% OFF",
    rating: 4.9,
    reviewsCount: 750,
    isBestseller: true,
    isDeal: true,
    isFreshFind: false,
    unit: {
      en: "200 g Jar",
      hi: "200 ग्राम डिब्बी",
      mr: "200 ग्रॅम बरणी"
    },
    description: {
      en: "Traditional bilona-style golden cow ghee. Aromatic, granular texture with authentic homemade aroma.",
      hi: "पारंपरिक दानेदार और खुशबूदार शुद्ध गाय का घी।",
      mr: "पारंपरिक सुवासिक आणि दाणेदार शुद्ध गाईचे तूप. घरगुती चव."
    },
    badge: { en: "100% Pure", hi: "100% शुद्ध", mr: "100% शुद्ध" },
    nutrition: {
      en: "Rich in Omega-3, CLA, Vitamin A, D & E • Ayurvedic Goodness",
      hi: "ओमेगा 3 और जरूरी विटामिन्स से भरपूर",
      mr: "आरोग्यदायी फॅट्स आणि व्हिटॅमिन्सनी समृद्ध"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <path d="M36 48 L 84 48 L 78 98 L 42 98 Z" fill="#fff9c4" stroke="#fbc02d" stroke-width="3"/>
      <text x="60" y="78" font-family="sans-serif" font-size="10" font-weight="900" fill="#bf360c" text-anchor="middle">GHEE</text>
    </svg>`
  },

  // --- GRAINS & STAPLES (धान्ये आणि डाळी / अनाज और दालें) ---
  {
    id: "g1",
    category: "grains",
    image: "assets/images/g1_atta.jpg",
    name: {
      en: "Sharbati Whole Wheat Atta",
      hi: "शरबती गेहूं का आटा (Atta)",
      mr: "शरबती गव्हाचे पीठ (Atta)"
    },
    price: 210,
    mrp: 260,
    discount: "19% OFF",
    rating: 4.8,
    reviewsCount: 890,
    isBestseller: true,
    isDeal: false,
    isFreshFind: false,
    unit: {
      en: "5 kg Bag",
      hi: "5 किलो थैली",
      mr: "5 किलो पिशवी"
    },
    description: {
      en: "100% MP Sharbati wheat, stone-ground with zero maida. Makes soft, fluffy rotis that stay tender all day.",
      hi: "100% चक्की का पिसा शुद्ध शरबती आटा। रोटियां हमेशा नरम रहें।",
      mr: "100% चक्कीवर दळलेले शुद्ध गव्हाचे पीठ. मऊ चपात्यांसाठी सर्वोत्तम."
    },
    badge: { en: "Top Pick", hi: "चक्की ताज़ा", mr: "मऊ चपात्या" },
    nutrition: {
      en: "Zero Maida • 100% Whole Grain Fiber • Protein Rich",
      hi: "बिना मैदा • प्राकृतिक फाइबर से भरपूर",
      mr: "मैदा विरहित • चोथायुक्त आणि पौष्टिक"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <path d="M32 36 L 88 36 L 80 102 L 40 102 Z" fill="#d7ccc8" stroke="#8d6e63" stroke-width="3"/>
      <text x="60" y="75" font-family="sans-serif" font-size="12" font-weight="900" fill="#5d4037" text-anchor="middle">ATTA 5KG</text>
    </svg>`
  },
  {
    id: "g2",
    category: "grains",
    image: "assets/images/g2_rice.jpg",
    name: {
      en: "Royal Long Grain Basmati Rice",
      hi: "बासमती चावल (Basmati Rice)",
      mr: "उत्कृष्ट बासमती तांदूळ (Rice)"
    },
    price: 135,
    mrp: 175,
    discount: "23% OFF",
    rating: 4.7,
    reviewsCount: 380,
    isBestseller: false,
    isDeal: true,
    isFreshFind: false,
    unit: {
      en: "1 kg Pack",
      hi: "1 किलो पैकेट",
      mr: "1 किलो पाकीट"
    },
    description: {
      en: "Aged long-grain aromatic basmati rice. Fluffy, non-sticky grains with an enticing traditional fragrance.",
      hi: "लंबे दानेदार और खुशबूदार बासमती चावल। पुलाव और रोज़ के खाने के लिए।",
      mr: "लांब दाण्यांचा, सुवासिक आणि चविष्ट बासमती तांदूळ. उत्कृष्ट दर्जा."
    },
    badge: { en: "Aged 2 Years", hi: "लंबे दाने", mr: "लांब दाणे" },
    nutrition: {
      en: "Gluten Free, Naturally Low Fat & Easy Digestibility",
      hi: "ग्लूटेन मुक्त और पचने में आसान",
      mr: "पचनास हलके आणि ग्लुटेन मुक्त"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <rect x="34" y="34" width="52" height="68" rx="8" fill="#fffde7" stroke="#c0ca33" stroke-width="3"/>
      <text x="60" y="70" font-family="sans-serif" font-size="11" font-weight="900" fill="#827717" text-anchor="middle">RICE</text>
    </svg>`
  },
  {
    id: "g3",
    category: "grains",
    image: "assets/images/g3_dal.jpg",
    name: {
      en: "Unpolished Toor Dal (Arhar)",
      hi: "बिना पॉलिश तूर दाल (Toor Dal)",
      mr: "गावरान तूर डाळ (Toor Dal)"
    },
    price: 145,
    mrp: 180,
    discount: "19% OFF",
    rating: 4.9,
    reviewsCount: 610,
    isBestseller: true,
    isDeal: false,
    isFreshFind: false,
    unit: {
      en: "1 kg Pack",
      hi: "1 किलो पैकेट",
      mr: "1 किलो पाकीट"
    },
    description: {
      en: "Unpolished, chemical-free yellow pigeon pea dal. Retains all natural nutrients and cooks quickly into hearty dal.",
      hi: "प्राकृतिक और बिना पॉलिश वाली पौष्टिक तूर दाल।",
      mr: "अस्सल, अनपॉलिश्ड आणि प्रथिनांनी भरपूर पिवळी तूर डाळ. चविष्ट वरण."
    },
    badge: { en: "Chemical Free", hi: "बिना पॉलिश", mr: "घरगुती चव" },
    nutrition: {
      en: "Rich in Plant Protein, Iron & Folate • Essential for Daily Diet",
      hi: "शाकाहारी प्रोटीन और आयरन का उत्तम स्रोत",
      mr: "शाकाहारी प्रथिने आणि लोहाचा उत्तम स्रोत"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <rect x="34" y="34" width="52" height="68" rx="8" fill="#fff9c4" stroke="#fbc02d" stroke-width="3"/>
      <text x="60" y="70" font-family="sans-serif" font-size="12" font-weight="900" fill="#e65100" text-anchor="middle">TOOR DAL</text>
    </svg>`
  },
  {
    id: "g4",
    category: "grains",
    image: "assets/images/g4_poha.jpg",
    name: {
      en: "Thick Poha (Flattened Rice)",
      hi: "जाड़ा पोहा (Thick Poha)",
      mr: "जाड नाश्त्याचे पोहे (Poha)"
    },
    price: 55,
    mrp: 70,
    discount: "21% OFF",
    rating: 4.8,
    reviewsCount: 290,
    isBestseller: false,
    isDeal: true,
    isFreshFind: false,
    unit: {
      en: "1 kg Pack",
      hi: "1 किलो पैकेट",
      mr: "1 किलो पाकीट"
    },
    description: {
      en: "Hygienically cleaned and roasted thick poha. Perfect for creating quick, delicious and healthy Kanda Poha.",
      hi: "साफ़ और बढ़िया पोहा। सुबह के हल्के और स्वादिष्ट नाश्ते के लिए।",
      mr: "स्वच्छ, जाड आणि मऊ पोहे. सकाळच्या गरमागरम कांदे पोह्यांसाठी उत्तम."
    },
    badge: { en: "Quick Breakfast", hi: "हल्का नाश्ता", mr: "पौष्टिक नाश्ता" },
    nutrition: {
      en: "Iron Fortified, Low Calorie & Easy on Stomach",
      hi: "आयरन से भरपूर और हल्का सुपाच्य",
      mr: "लोहाने समृद्ध आणि पचनास हलके"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <path d="M30 40 L 90 40 L 82 98 L 38 98 Z" fill="#f1f8e9" stroke="#7cb342" stroke-width="3"/>
      <text x="60" y="72" font-family="sans-serif" font-size="11" font-weight="900" fill="#33691e" text-anchor="middle">POHA</text>
    </svg>`
  },

  // --- VEGETABLES (भाज्या / सब्जियां) ---
  {
    id: "v1",
    category: "vegetables",
    image: "assets/images/v1_potato.jpg",
    name: {
      en: "Fresh Farm Potatoes (Aloo)",
      hi: "ताज़े आलू (Potatoes)",
      mr: "ताजे बटाटे (Potatoes)"
    },
    price: 35,
    mrp: 45,
    discount: "22% OFF",
    rating: 4.8,
    reviewsCount: 820,
    isBestseller: true,
    isDeal: false,
    isFreshFind: true,
    unit: {
      en: "1 kg (approx. 6-7 potatoes)",
      hi: "1 किलो (लगभग 6-7 आलू)",
      mr: "1 किलो (अंदाजे 6-7 बटाटे)"
    },
    description: {
      en: "Freshly harvested, mud-free uniform potatoes. Firm texture, ideal for everyday curries, fries, and parathas.",
      hi: "साफ़ और बढ़िया आलू। सब्ज़ी और पराठे के लिए उत्तम।",
      mr: "स्वच्छ, मोठे आणि ताजे बटाटे. रोजच्या स्वयंपाकासाठी."
    },
    badge: { en: "Daily Fresh", hi: "खेत से सीधा", mr: "ताजे बटाटे" },
    nutrition: {
      en: "Complex Carbohydrates, Potassium & Vitamin C",
      hi: "ऊर्जा और पोटेशियम का प्राकृतिक स्रोत",
      mr: "ऊर्जा आणि पोटॅशियमने समृद्ध"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <ellipse cx="60" cy="65" rx="42" ry="32" fill="#bcaaa4" stroke="#5d4037" stroke-width="2"/>
    </svg>`
  },
  {
    id: "v2",
    category: "vegetables",
    image: "assets/images/v2_tomato.jpg",
    name: {
      en: "Juicy Red Tomatoes (Tamatar)",
      hi: "ताज़े लाल टमाटर (Tomatoes)",
      mr: "ताजे लाल टोमॅटो (Tomatoes)"
    },
    price: 40,
    mrp: 55,
    discount: "27% OFF",
    rating: 4.8,
    reviewsCount: 710,
    isBestseller: true,
    isDeal: true,
    isFreshFind: true,
    unit: {
      en: "1 kg (approx. 7-8 tomatoes)",
      hi: "1 किलो (लगभग 7-8 टमाटर)",
      mr: "1 किलो (अंदाजे 7-8 टोमॅटो)"
    },
    description: {
      en: "Plump, glossy red country tomatoes. Tangy and sweet flavor profile, packed with antioxidant lycopene.",
      hi: "खट्टे-मीठे और ताज़े देशी लाल टमाटर। ग्रेवी और सलाद के लिए।",
      mr: "लालभडक, ताजे आणि आंबट-गोड गावठी टोमॅटो. उत्तम चव."
    },
    badge: { en: "Plump & Tangy", hi: "देशी स्वाद", mr: "लालभडक" },
    nutrition: {
      en: "High Lycopene, Vitamin C, K & Heart-Healthy Flavonoids",
      hi: "लाइकोपीन और विटामिन सी से भरपूर",
      mr: "लाइकोपीन आणि व्हिटॅमिन सी चा समृद्ध स्रोत"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <circle cx="60" cy="65" r="42" fill="#e53935" stroke="#c62828" stroke-width="2"/>
    </svg>`
  },
  {
    id: "v3",
    category: "vegetables",
    image: "assets/images/v3_onion.jpg",
    name: {
      en: "Nashik Red Onions (Pyaaz)",
      hi: "नासिक के लाल प्याज (Onions)",
      mr: "नाशिकचा लाल कांदा (Onions)"
    },
    price: 30,
    mrp: 40,
    discount: "25% OFF",
    rating: 4.9,
    reviewsCount: 950,
    isBestseller: true,
    isDeal: false,
    isFreshFind: true,
    unit: {
      en: "1 kg (approx. 6-7 onions)",
      hi: "1 किलो (लगभग 6-7 प्याज)",
      mr: "1 किलो (अंदाजे 6-7 कांदे)"
    },
    description: {
      en: "Crisp and flavorful red onions from famous Nashik farms. Long shelf-life with strong aroma and sweetness.",
      hi: "नासिक के मशहूर और स्वादिष्ट लाल प्याज।",
      mr: "नाशिकचा अस्सल, चवदार आणि दीर्घकाळ टिकणारा लाल कांदा."
    },
    badge: { en: "Nashik Quality", hi: "नासिक प्याज", mr: "नाशिक कांदा" },
    nutrition: {
      en: "Quercetin Antioxidants, Immunity Support & Prebiotic Fiber",
      hi: "नेचुरल एंटीऑक्सीडेंट्स और फाइबर से भरपूर",
      mr: "नैसर्गिक ॲन्टिऑक्सिडंट्स आणि तंतूमय घटक"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <ellipse cx="60" cy="68" rx="40" ry="36" fill="#ab47bc" stroke="#4a148c" stroke-width="2.5"/>
    </svg>`
  },
  {
    id: "v4",
    category: "vegetables",
    image: "assets/images/v4_spinach.jpg",
    name: {
      en: "Fresh Green Spinach (Palak)",
      hi: "ताज़ा हरा पालक (Palak)",
      mr: "ताजी हिरवीगार पालक (Palak)"
    },
    price: 25,
    mrp: 35,
    discount: "28% OFF",
    rating: 4.8,
    reviewsCount: 390,
    isBestseller: false,
    isDeal: true,
    isFreshFind: true,
    unit: {
      en: "1 Big Bunch (approx. 300g)",
      hi: "1 बड़ी गड्डी (लगभग 300 ग्राम)",
      mr: "1 मोठी जुडी (अंदाजे 300 ग्रॅम)"
    },
    description: {
      en: "Tender, hand-sorted and pre-washed green spinach leaves. Packed with vital iron and essential greens.",
      hi: "साफ़ और हरी पत्तियां। आयरन और विटामिन्स से भरपूर।",
      mr: "कोवळी, धुऊन स्वच्छ केलेली हिरवीगार आणि पौष्टिक पालक जुडी."
    },
    badge: { en: "Iron Rich", hi: "आयरन से भरपूर", mr: "पौष्टिक पालेभाजी" },
    nutrition: {
      en: "Rich in Iron, Folate, Lutein & Vitamin A, C, K",
      hi: "आयरन और फोलिक एसिड का पावरहाउस",
      mr: "लोह आणि व्हिटॅमिन्सचा खजिना"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <path d="M60 22 C 36 34, 24 58, 36 88 C 48 100, 72 100, 84 88 C 96 58, 84 34, 60 22 Z" fill="#388e3c" stroke="#1b5e20" stroke-width="2.5"/>
    </svg>`
  },
  // --- SNACKS & MUNCHIES (नाश्ता और स्नैक्स / कुरकुरीत स्नॅक्स) ---
  {
    id: "s1",
    category: "snacks",
    image: "assets/images/s1_chips.jpg",
    name: {
      en: "Crispy Potato Chips (Classic Salted)",
      hi: "आलू के चिप्स (Potato Chips)",
      mr: "बटाटा चिप्स (Potato Chips)"
    },
    price: 30,
    mrp: 40,
    discount: "25% OFF",
    rating: 4.7,
    reviewsCount: 420,
    isBestseller: true,
    isDeal: true,
    isFreshFind: false,
    unit: {
      en: "1 Pack (95g)",
      hi: "1 पैकेट (95 ग्राम)",
      mr: "1 पॅकेट (95 ग्रॅम)"
    },
    description: {
      en: "Crunchy, lightly salted golden potato chips. Perfectly spiced for family tea time snacks.",
      hi: "कुरकुरे और स्वादिष्ट आलू चिप्स। चाय के समय के लिए उत्तम।",
      mr: "कुरकुरीत आणि चवदार बटाटा चिप्स. चहाच्या वेळी खाण्यासाठी उत्तम."
    },
    badge: { en: "Crunchy Snack", hi: "कुरकुरा स्नैक", mr: "कुरकुरीत" },
    nutrition: {
      en: "Trans-Fat Free • Made with 100% Real Potatoes",
      hi: "ट्रांस-फैट मुक्त • असली आलू से निर्मित",
      mr: "ट्रान्स-फॅट मुक्त • १००% बटाट्यांपासून तयार"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <ellipse cx="60" cy="65" rx="44" ry="34" fill="#fbc02d" stroke="#f57f17" stroke-width="2"/>
    </svg>`
  },
  {
    id: "s2",
    category: "snacks",
    image: "assets/images/s2_biscuits.jpg",
    name: {
      en: "Whole Wheat Digestive Biscuits",
      hi: "गेहूं के डाइजेस्टिव बिस्कुट (Biscuits)",
      mr: "गहू डायजेस्टिव्ह बिस्किटे (Biscuits)"
    },
    price: 40,
    mrp: 50,
    discount: "20% OFF",
    rating: 4.8,
    reviewsCount: 310,
    isBestseller: true,
    isDeal: false,
    isFreshFind: false,
    unit: {
      en: "1 Pack (250g)",
      hi: "1 पैकेट (250 ग्राम)",
      mr: "1 पॅकेट (250 ग्रॅम)"
    },
    description: {
      en: "Wholesome wheat digestive cookies rich in dietary fiber. Low sugar, ideal for seniors and daily tea.",
      hi: "फाइबर से भरपूर गेहूं के डाइजेस्टिव बिस्कुट। बुजुर्गों और चाय के साथ खाने के लिए उत्तम।",
      mr: "फायबरयुक्त पौष्टिक गव्हाची बिस्किटे. ज्येष्ठ नागरिकांसाठी आणि चहासाठी उत्तम."
    },
    badge: { en: "High Fiber", hi: "फाइबर युक्त", mr: "फायबरयुक्त" },
    nutrition: {
      en: "Zero Trans-Fat • High Dietary Fiber • Low Sugar",
      hi: "कम चीनी • उच्च फाइबर",
      mr: "कमी साखर • भरपूर फायबर"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <circle cx="60" cy="60" r="42" fill="#d7ccc8" stroke="#8d6e63" stroke-width="2"/>
    </svg>`
  },
  {
    id: "s3",
    category: "snacks",
    image: "assets/images/s3_almonds.jpg",
    name: {
      en: "Roasted California Almonds (Badam)",
      hi: "भुने हुए कैलिफ़ोर्निया बादाम (Almonds)",
      mr: "भाजलेले कॅलिफोर्निया बदाम (Almonds)"
    },
    price: 190,
    mrp: 250,
    discount: "24% OFF",
    rating: 4.9,
    reviewsCount: 540,
    isBestseller: true,
    isDeal: true,
    isFreshFind: true,
    unit: {
      en: "200g Vacuum Pouch",
      hi: "200 ग्राम पैकेट",
      mr: "200 ग्रॅम पॅकेट"
    },
    description: {
      en: "Premium handpicked California badam, slow-roasted with light sea salt. High in healthy fats and Vitamin E.",
      hi: "प्रीमियम कैलिफ़ोर्निया बादाम, हल्के भुने हुए। दिमाग और सेहत के लिए फायदेमंद।",
      mr: "उत्कृष्ट दर्जाचे भाजलेले बदाम. मेंदू आणि आरोग्यासाठी अत्यंत गुणकारी."
    },
    badge: { en: "Superfood", hi: "सुपरफूड", mr: "सुपरफूड" },
    nutrition: {
      en: "Rich in Vitamin E, Magnesium & Healthy Plant Proteins",
      hi: "विटामिन ई और प्रोटीन से भरपूर",
      mr: "व्हिटॅमिन ई आणि प्रोटीन्सने समृद्ध"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <ellipse cx="60" cy="62" rx="32" ry="46" fill="#a1887f" stroke="#5d4037" stroke-width="2"/>
    </svg>`
  },
  {
    id: "s4",
    category: "snacks",
    image: "assets/images/s4_namkeen.jpg",
    name: {
      en: "Traditional Crispy Namkeen Mix",
      hi: "शाही भुजिया नमकीन (Namkeen)",
      mr: "शाही चिवडा नमकीन (Namkeen)"
    },
    price: 55,
    mrp: 70,
    discount: "21% OFF",
    rating: 4.6,
    reviewsCount: 280,
    isBestseller: false,
    isDeal: true,
    isFreshFind: false,
    unit: {
      en: "1 Pack (200g)",
      hi: "1 पैकेट (200 ग्राम)",
      mr: "1 पॅकेट (200 ग्रॅम)"
    },
    description: {
      en: "Classic Indian crunchy namkeen mix prepared with mild aromatic spices. Easy to chew, delightful flavor.",
      hi: "स्वादिष्ट और कुरकुरा पारंपरिक नमकीन। हल्की मिर्च और बढ़िया स्वाद।",
      mr: "कुरकुरीत आणि चवदार पारंपरिक चिवडा नमकीन. सौम्य मसाले आणि उत्तम चव."
    },
    badge: { en: "Tea-Time Classic", hi: "चाय का साथी", mr: "चहाचा सोबती" },
    nutrition: {
      en: "Mild Spices • Gram Flour & Lentils • No Artificial Preservatives",
      hi: "बिना किसी कृत्रिम रंग के • शुद्ध बेसन",
      mr: "नैसर्गिक मसाले • कोणतेही कृत्रिम घटक नाहीत"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <polygon points="60,20 95,95 25,95" fill="#ffd54f" stroke="#ff8f00" stroke-width="2"/>
    </svg>`
  },

  // --- HOUSEHOLD & CLEANING (घरेलू सामान / घरगुती वस्तू) ---
  {
    id: "h1",
    category: "household",
    image: "assets/images/h1_dishwash.jpg",
    name: {
      en: "Lemon Dishwash Liquid Gel",
      hi: "नींबू डिशवॉश लिक्विड जेल (Dishwash)",
      mr: "लिंबू डिशवॉश लिक्विड जेल (Dishwash)"
    },
    price: 105,
    mrp: 135,
    discount: "22% OFF",
    rating: 4.8,
    reviewsCount: 610,
    isBestseller: true,
    isDeal: true,
    isFreshFind: false,
    unit: {
      en: "750 ml Bottle",
      hi: "750 मिली बोतल",
      mr: "750 मिली बॉटल"
    },
    description: {
      en: "Cuts tough grease instantly with the natural power of 100 lemons. Gentle on hands, leaves zero white residue.",
      hi: "100 नींबू की शक्ति से बर्तनों की चिकनाई तुरंत हटाए। हाथों पर कोमल।",
      mr: "१०० लिंबांच्या शक्तीने भांड्यांवरील तेलकटपणा लगेच स्वच्छ करतो. हातांसाठी सुरक्षित."
    },
    badge: { en: "Grease Fighter", hi: "चिकनाई हटाए", mr: "स्वच्छ भांडी" },
    nutrition: {
      en: "Natural Lemon Extract • Phosphate-Free • Safe on Hands",
      hi: "प्राकृतिक नींबू का अर्क • हाथों पर कोमल",
      mr: "नैसर्गिक लिंबू अर्क • हातांना मऊ ठेवणारे"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <rect x="42" y="35" width="36" height="70" rx="8" fill="#fff176" stroke="#fbc02d" stroke-width="2"/>
      <rect x="52" y="20" width="16" height="15" fill="#81c784"/>
    </svg>`
  },
  {
    id: "h2",
    category: "household",
    image: "assets/images/h2_detergent.jpg",
    name: {
      en: "Active Fabric Detergent Liquid",
      hi: "डिटर्जेंट लिक्विड (Laundry Detergent)",
      mr: "डिटर्जंट लिक्विड (Laundry Detergent)"
    },
    price: 180,
    mrp: 240,
    discount: "25% OFF",
    rating: 4.8,
    reviewsCount: 490,
    isBestseller: true,
    isDeal: true,
    isFreshFind: false,
    unit: {
      en: "1 Litre Bottle",
      hi: "1 लीटर बोतल",
      mr: "1 लिटर बॉटल"
    },
    description: {
      en: "Superior stain removal with pleasant floral fragrance. Dissolves faster than powder and keeps clothes bright.",
      hi: "कपड़ों के दाग तुरंत साफ़ करे और रखे उन्हें नया जैसा। भीनी खुशबू।",
      mr: "कपड्यांवरील डाग सहज घालवून कपडे चमकदार आणि सुवासिक ठेवणारे लिक्विड."
    },
    badge: { en: "Stain Remover", hi: "दाग हटाए", mr: "डागमुक्त" },
    nutrition: {
      en: "Fabric Safe Enzymes • Color Protection • Low Foam Formula",
      hi: "कपड़ों की चमक बरकरार रखे • सौम्य फार्मूला",
      mr: "कपड्यांचा रंग सुरक्षित ठेवणारे फॉर्म्युला"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <path d="M40 35 L80 35 L85 105 L35 105 Z" fill="#64b5f6" stroke="#1976d2" stroke-width="2"/>
      <rect x="50" y="18" width="20" height="17" rx="3" fill="#0d47a1"/>
    </svg>`
  },
  {
    id: "h3",
    category: "household",
    image: "assets/images/h3_floorcleaner.jpg",
    name: {
      en: "Citrus Disinfectant Floor Cleaner",
      hi: "फ्लोर क्लीनर (Surface Cleaner)",
      mr: "फ्लोर क्लिनर (Floor Cleaner)"
    },
    price: 115,
    mrp: 145,
    discount: "21% OFF",
    rating: 4.7,
    reviewsCount: 380,
    isBestseller: false,
    isDeal: false,
    isFreshFind: false,
    unit: {
      en: "1 Litre Bottle",
      hi: "1 लीटर बोतल",
      mr: "1 लिटर बॉटल"
    },
    description: {
      en: "Kills 99.9% germs and viruses. Gives sparkling shine with a refreshing citrus aroma for living rooms and kitchens.",
      hi: "99.9% कीटाणुओं का नाश करे। फर्श को दे चमक और ताजगी भरी खुशबू।",
      mr: "९९.९% जंतूंचा नाश करून फरशीला देतो चमकदार स्वच्छता आणि ताजी सुगंध."
    },
    badge: { en: "99.9% Germ Kill", hi: "कीटाणु नाशक", mr: "जंतू नाशक" },
    nutrition: {
      en: "Hospital-Grade Disinfection • Safe for Pets & Children",
      hi: "कीटाणु रोधक • बच्चों और पालतू जानवरों के लिए सुरक्षित",
      mr: "जंतू प्रतिबंधक • लहान मुले व पाळीव प्राण्यांसाठी सुरक्षित"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <rect x="42" y="32" width="36" height="74" rx="6" fill="#ffb74d" stroke="#f57c00" stroke-width="2"/>
      <rect x="52" y="18" width="16" height="14" fill="#e65100"/>
    </svg>`
  },
  {
    id: "h4",
    category: "household",
    image: "assets/images/h4_tissues.jpg",
    name: {
      en: "2-Ply Kitchen Paper Towels",
      hi: "किचन टिशू रोल्स (Kitchen Towels)",
      mr: "किचन टिशू रोल्स (Kitchen Towels)"
    },
    price: 75,
    mrp: 100,
    discount: "25% OFF",
    rating: 4.8,
    reviewsCount: 220,
    isBestseller: false,
    isDeal: true,
    isFreshFind: false,
    unit: {
      en: "Pack of 2 Rolls (120 Pulls)",
      hi: "2 रोल का पैकेट",
      mr: "२ रोलचे पॅकेट"
    },
    description: {
      en: "Extra absorbent, food-grade 2-ply kitchen paper towels. Absorbs oil from fried snacks and cleans spills quickly.",
      hi: "तेल और पानी तुरंत सोखने वाले मजबूत किचन टिशू पेपर। खाने के लिए सुरक्षित।",
      mr: "तेल आणि पाणी लगेच शोषून घेणारे मजबूत किचन टिशू पेपर. अन्नपदार्थांसाठी सुरक्षित."
    },
    badge: { en: "Super Absorbent", hi: "तेल सोखने वाला", mr: "अधिक शोषक" },
    nutrition: {
      en: "100% Virgin Pulp • Food-Contact Certified • Lint-Free",
      hi: "100% शुद्ध पल्प • खाद्य उपयोग के लिए प्रमाणित",
      mr: "१००% शुद्ध पल्प • अन्न संपर्कासाठी प्रमाणित"
    },
    iconSvg: `<svg viewBox="0 0 120 120" class="prod-svg" aria-hidden="true">
      <ellipse cx="60" cy="30" rx="30" ry="12" fill="#eceff1" stroke="#90a4ae" stroke-width="2"/>
      <path d="M30 30 L30 90 A30 12 0 0 0 90 90 L90 30 Z" fill="#ffffff" stroke="#90a4ae" stroke-width="2"/>
    </svg>`
  },
];

// 2. ESSENTIAL CATEGORIES
const CATEGORIES = [
  {
    id: "fruits",
    name: { en: "Fruits", hi: "फल (Fruits)", mr: "फळे (Fruits)" },
    subtitle: { en: "Apples, Bananas, Oranges, Mangoes...", hi: "सेब, केले, संतरे, आम...", mr: "सफरचंद, केळी, संत्री, आंबे..." },
    icon: "fruits",
    image: "assets/images/cat_fruits.jpg",
    itemCount: "4 Fresh Items",
    bgColor: "#ffebee"
  },
  {
    id: "vegetables",
    name: { en: "Vegetables", hi: "सब्जियां (Vegetables)", mr: "भाज्या (Vegetables)" },
    subtitle: { en: "Potatoes, Tomatoes, Onions, Spinach...", hi: "आलू, टमाटर, प्याज, पालक...", mr: "बटाटा, टोमॅटो, कांदा, पालक..." },
    icon: "vegetables",
    image: "assets/images/cat_vegetables.jpg",
    itemCount: "4 Farm Picks",
    bgColor: "#e8f5e9"
  },
  {
    id: "milk",
    name: { en: "Dairy & Eggs", hi: "दूध और डेयरी (Dairy)", mr: "दूध आणि दुग्धजन्य (Dairy)" },
    subtitle: { en: "Milk, Dahi, Paneer, Pure Ghee...", hi: "दूध, दही, पनीर, शुद्ध घी...", mr: "दूध, दही, पनीर, शुद्ध तूप..." },
    icon: "milk",
    image: "assets/images/cat_dairy.jpg",
    itemCount: "4 Fresh Items",
    bgColor: "#e1f5fe"
  },
  {
    id: "snacks",
    name: { en: "Snacks", hi: "नाश्ता और स्नैक्स (Snacks)", mr: "नाश्ता आणि स्नॅक्स (Snacks)" },
    subtitle: { en: "Cookies, Namkeen, Biscuits, Munchies...", hi: "नमकीन, बिस्कुट, कुकीज़...", mr: "कुरकुरीत स्नॅक्स, बिस्किटे..." },
    icon: "snacks",
    image: "assets/images/cat_snacks.jpg",
    itemCount: "4 Tasty Items",
    bgColor: "#fff3e0"
  },
  {
    id: "household",
    name: { en: "Household", hi: "घरेलू सामान (Household)", mr: "घरगुती वस्तू (Household)" },
    subtitle: { en: "Cleaners, Detergents, Paper Towels...", hi: "सफाई का सामान, डिटर्जेंट...", mr: "स्वच्छता साहित्य, डिटर्जंट..." },
    icon: "household",
    image: "assets/images/cat_household.jpg",
    itemCount: "4 Daily Items",
    bgColor: "#f3e5f5"
  },
  {
    id: "grains",
    name: { en: "Bakery & Staples", hi: "अनाज और बेकरी (Staples)", mr: "धान्ये व बेकरी (Staples)" },
    subtitle: { en: "Atta, Basmati Rice, Toor Dal, Poha...", hi: "आटा, चावल, दाल, पोहा...", mr: "गहू पीठ, तांदूळ, डाळ, पोहे..." },
    icon: "grains",
    image: "assets/images/cat_bakery.jpg",
    itemCount: "4 Kitchen Staples",
    bgColor: "#fff9c4"
  }
];

// 3. COMPLETE UI TRANSLATIONS (English, Hindi, Marathi)
const I18N = {
  en: {
    appTitle: "EasyBuy",
    appTagline: "Fresh Groceries Delivered in 10-15 Minutes",
    prototypeBadge: "10-15 Min Superfast Delivery",
    prototypeNotice: "100% Fresh Groceries • Delivered to your doorstep in minutes.",
    
    // Top Bar & Accessibility
    textSizeLabel: "Text Size:",
    contrastLabel: "High Contrast",
    languageLabel: "Language:",
    readAloudBtn: "Read Aloud",
    stopReadAloudBtn: "Stop Voice",
    callHelpBtn: "Helpline: 1800-000-EASY",
    a11yMenuBtn: "Accessibility",
    a11yMenuTitle: "Accessibility & Senior Assistance",
    
    // Location chip
    deliverTo: "Deliver to:",
    defaultLocation: "Pune, MH - 411038",
    deliveryETA: "In 12 Mins",
    
    // Navigation Tabs
    navHome: "Home",
    navShop: "Shop",
    navCart: "Cart",
    navTrack: "Track Order",
    navAccount: "Account",
    
    // Home Screen
    welcomeTitle: "Fresh Groceries, Delivered Fast",
    welcomeSubtitle: "Farm-fresh vegetables, seasonal fruits, dairy & daily kitchen staples at honest prices.",
    startShoppingBtn: "Start Shopping Now",
    startShoppingSub: "Browse simple essentials at best prices",
    teachMeBtn: "Teach Me How to Shop",
    teachMeSub: "Step-by-step easy practice (No real money)",
    helpMeBtn: "Help on This Page",
    helpMeSub: "Simple explanation of this screen",
    
    // Homepage Sections
    categoriesTitle: "Shop by Category",
    categoriesSubtitle: "Handpicked fresh farm produce and daily staples",
    allCategoriesBtn: "View All Items",
    
    sectionDealsTitle: "Today's Mega Deals & Discounts",
    sectionDealsSubtitle: "Biggest savings on fresh daily essentials",
    sectionBestsellersTitle: "Most Loved / Best Sellers",
    sectionBestsellersSubtitle: "Highest rated groceries ordered by our customers",
    sectionFreshTitle: "Farm Fresh Harvest",
    sectionFreshSubtitle: "Direct from verified local farms every morning",
    
    viewDetailsBtn: "Quick View",
    reviewsLabel: "reviews",
    mrpLabel: "MRP:",
    saveBadge: "SAVE",
    
    // Shop & Search Screen
    shopTitle: "Product Catalogue",
    shopSubtitle: "Tap '+ ADD' to place any item in your bag. Quantity adjusts effortlessly.",
    searchPlaceholder: "Search 'apples', 'atta', 'milk', 'tomatoes'...",
    searchVoiceBtn: "Voice",
    searchVoiceListening: "Listening... Speak item name clearly",
    searchVoiceNotSupported: "Voice search not supported in this browser. Please type in search box.",
    allFilter: "All Items",
    filterFruits: "Fruits",
    filterVegetables: "Vegetables",
    filterMilk: "Dairy & Eggs",
    filterSnacks: "Snacks",
    filterHousehold: "Household",
    filterGrains: "Bakery & Staples",
    filterMilk: "Milk & Dairy",
    filterGrains: "Grains & Dal",
    filterVegetables: "Vegetables",
    noProductsFound: "No items match your search. Try searching 'milk', 'apple' or 'atta'.",
    resetSearchBtn: "Show All Products",
    
    // Product Card
    addToCartBtn: "Add to Cart",
    addBtnShort: "+ ADD",
    addedToCartBtn: "Added (Add More)",
    priceLabel: "Price:",
    
    // Product Details Modal
    modalNutritionTitle: "Nutritional & Freshness Highlights",
    modalStorageTitle: "Storage & Shelf Life",
    modalGuaranteeText: "Fast 10-15 Min Delivery • No Questions Asked Returns",
    modalRelatedTitle: "Frequently Bought Together",
    
    // Cart Screen
    cartTitle: "Your Shopping Bag",
    cartSubtitle: "Review your selected items. Adjust quantities or remove any product freely.",
    emptyCartMsg: "Your shopping bag is empty right now!",
    emptyCartSub: "Add fresh fruits, milk, veggies or grains to get started.",
    continueShoppingBtn: "Explore Fresh Catalogue",
    itemTotalLabel: "Items Subtotal:",
    deliveryFeeLabel: "Home Delivery:",
    freeDeliveryText: "FREE (Senior Special)",
    discountSavedText: "You are saving on this order!",
    grandTotalLabel: "Final Amount to Pay:",
    checkoutBtn: "Proceed to Checkout (Step 1 of 3) ",
    undoNotice: "Item removed from cart.",
    undoBtn: "Undo (Put Back)",
    itemRemovedToast: "Item removed. You have 5 seconds to undo.",
    
    // Checkout (3 Steps)
    checkoutStepTitle: "Seamless 3-Step Checkout",
    step1Title: "1. Review Bag",
    step2Title: "2. Delivery Address",
    step3Title: "3. Safe Payment",
    stepIndicator: "Step {step} of 3",
    
    // Checkout Step 2 Form
    addressTitle: "Where Should We Deliver?",
    addressSubtitle: "Enter simple address details. Senior-priority door delivery.",
    sampleAddressBtn: "Auto-Fill Sample Address (For Demo)",
    fullNameLabel: "Full Name (व्यक्ति का नाम):",
    fullNamePlaceholder: "e.g., Ramesh S. Joshi",
    phoneLabel: "Mobile Number (मोबाइल नंबर):",
    phonePlaceholder: "e.g., 9822012345",
    streetLabel: "House No., Building, Street (घर का पता):",
    streetPlaceholder: "e.g., Flat 302, Sai Anand Apts, Karve Road",
    cityLabel: "City / Village (शहर / गाव):",
    cityPlaceholder: "e.g., Pune / Mumbai",
    pincodeLabel: "Pin Code (पिन कोड):",
    pincodePlaceholder: "e.g., 411038",
    deliveryTimeLabel: "Preferred Delivery Time:",
    timeMorning: "Morning (8 AM - 12 PM)",
    timeAfternoon: "Afternoon (12 PM - 4 PM)",
    timeEvening: "Evening (4 PM - 8 PM)",
    nextToPaymentBtn: "Proceed to Payment (Step 2 of 3) ",
    backToCartBtn: " Back to Bag",
    
    // Checkout Step 3 Payment
    paymentTitle: "Choose Safe Payment Method",
    paymentSubtitle: "Select your preferred payment method. Cash on Delivery is 100% supported.",
    demoPayDisclaimer: "Prototype Simulation: No real money is deducted. Select any demo option safely.",
    payCod: "Cash on Delivery (Pay cash when driver arrives)",
    payCodDesc: "Most popular for seniors! Pay with paper cash or coins to the delivery partner.",
    payUpi: "UPI / Google Pay / PhonePe (Demo Simulation)",
    payUpiDesc: "Scan QR code or approve on your mobile phone without sharing bank passwords.",
    payCard: "ATM / Debit Card on Delivery",
    payCardDesc: "The delivery partner will bring a small swiping machine to your doorstep.",
    finalBillSummaryTitle: "Final Bill Summary",
    deliverToSummary: "Deliver to:",
    placeOrderBtn: "Place Order Safely",
    backToAddressBtn: " Back to Address",
    
    // Order Placed / Tracking Screen
    orderSuccessTitle: "Order Placed Successfully!",
    orderSuccessSubtitle: "Sit back and relax. Your groceries are being carefully packed at our nearest hub.",
    orderIdLabel: "Order ID:",
    estDeliveryLabel: "Estimated Delivery:",
    estDeliveryValue: "Today within 15 minutes",
    trackingTitle: "Live Order Status",
    simulateNextStatusBtn: "Simulate Next Step (For Teacher / Demo)",
    statusOrdered: "1. Order Received",
    statusOrderedDesc: "Your grocery list is received at our local hub.",
    statusPacked: "2. Carefully Packed",
    statusPackedDesc: "Fresh items are washed, packed and checked for quality.",
    statusShipped: "3. Out for Delivery",
    statusShippedDesc: "Rider Santosh M. (4.9) is on his way to your home.",
    statusDelivered: "4. Delivered Safely",
    statusDeliveredDesc: "Items handed over safely at your doorstep. Thank you!",
    trackNewOrderBtn: "Shop for More Items",
    riderName: "Santosh M. (Verified Delivery Partner )",
    riderPhone: "Call Rider (98765-43210)",
    
    // Account & Auth Pages
    loginTitle: "Welcome Back to EasyBuy",
    loginSubtitle: "Sign in to access your saved address and fast checkout.",
    emailOrMobileLabel: "Email or Mobile Number:",
    passwordLabel: "Password:",
    rememberMeLabel: "Remember me on this browser",
    forgotPasswordLink: "Forgot Password?",
    loginBtn: "Sign In Safely",
    demoLoginBtn: "Quick Demo Login (Ramesh Joshi)",
    noAccountText: "Don't have an account?",
    signUpLink: "Create New Account",
    
    signUpTitle: "Create Your Account",
    signUpSubtitle: "Join EasyBuy for fresh groceries delivered at your doorstep.",
    confirmPasswordLabel: "Confirm Password:",
    createAccountBtn: "Create Free Account",
    alreadyHaveAccountText: "Already have an account?",
    signInLink: "Sign In Here",
    
    forgotTitle: "Reset Your Password",
    forgotSubtitle: "Enter your registered email or mobile to receive password reset guidance.",
    sendResetBtn: "Send Demo Reset Instructions",
    backToLoginLink: " Back to Login",
    
    accountTitle: "My Profile & Preferences",
    accountSubtitle: "Manage your delivery addresses, past orders and accessibility preferences.",
    myOrdersTab: "Past Orders",
    addressesTab: "Saved Addresses",
    settingsTab: "Preferences & Assistance",
    logoutBtn: "Log Out",
    
    // Help Panel ("Help me on this page")
    helpModalTitle: "Easy Help for This Screen",
    helpCloseBtn: "Close Help",
    helpCallBanner: "Need to speak with a human? Call our free senior helpline:",
    helpCallPhone: "1800-000-EASY (1800-000-3279)",
    
    helpHomeText: "• Tap 'Start Shopping Now' to see groceries with pictures and prices.\n• Tap 'Teach Me How to Shop' for an easy tutorial.\n• Change text size or contrast anytime using the Accessibility button.\n• Switch between English, Hindi, and Marathi.",
    helpShopText: "• Tap the '+ ADD' button under any item to put it in your bag.\n• Tap 'Voice' to speak the item name instead of typing.\n• Tap category buttons (Fruits, Milk, Grains, Vegetables) to find what you want quickly.\n• Tap the Cart tab to see your chosen items.",
    helpCartText: "• Here you see all items in your bag.\n• Tap '+' or '-' to increase or decrease quantities.\n• Tap 'Remove' to take an item out (you can tap 'Undo' if done by mistake!).\n• When ready, tap 'Proceed to Checkout'.",
    helpCheckoutText: "• Step 1: Check your items.\n• Step 2: Type your name, phone number, and address (or tap 'Auto-Fill Sample Address').\n• Step 3: Pick Cash on Delivery (recommended) or UPI simulation.\n• Tap 'Place Order Safely' to finish.",
    helpTrackText: "• Watch your grocery order travel to your home.\n• The stages light up in green as your order moves from store to your door.\n• Tap 'Simulate Next Step' to see how the status updates in real life.",
    helpPracticeText: "• You are currently in Practice Mode! No real money is spent.\n• Feel free to click anywhere, add items, and try placing a dummy order with your virtual ₹500 balance.",

    // Guided Mode ("Teach Me How to Shop")
    guidedWelcomeTitle: "Welcome to Practice Shopping!",
    guidedWelcomeBody: "We will guide you step-by-step with simple instructions. We have loaded ₹500 in practice play-money for you. Nothing will be charged!",
    guidedStep1: "Step 1: Look at the categories (Fruits, Milk, Grains, Vegetables). Let's start by browsing products!",
    guidedStep2: "Step 2: Find any item you like (for example, Fresh Red Apples) and tap the green '+ ADD' button.",
    guidedStep3: "Step 3: Great job! Now tap the Cart button at the top to see your shopping bag.",
    guidedStep4: "Step 4: Here is your cart! Notice the total bill. Now tap 'Proceed to Checkout'.",
    guidedStep5: "Step 5: Fill in your address or tap 'Auto-Fill Sample Address' to proceed.",
    guidedStep6: "Step 6: Choose 'Cash on Delivery' and tap 'Place Order Safely'. You did it!",
    guidedNextBtn: "Next Step ",
    guidedPrevBtn: " Previous",
    guidedFinishBtn: "Finish Practice & Return Home",
    guidedSkipBtn: "Skip Tutorial",
    practiceBannerText: "PRACTICE MODE ACTIVE: Using Virtual Wallet (₹500.00 Balance). No real order will be placed.",
    exitPracticeBtn: "Exit Practice Mode"
  },

  hi: {
    appTitle: "ईज़ीबाय (EasyBuy)",
    appTagline: "ताज़ा राशन और फल-सब्जियां 10-15 मिनट में घर पर",
    prototypeBadge: "10-15 मिनट में सुपरफास्ट डिलीवरी",
    prototypeNotice: "100% ताज़ा ग्रोसरी • सीधे आपके द्वार पर।",
    
    textSizeLabel: "अक्षर का आकार:",
    contrastLabel: "हाई कंट्रास्ट",
    languageLabel: "भाषा:",
    readAloudBtn: "बोलकर सुनाएं",
    stopReadAloudBtn: "आवाज़ रोकें",
    callHelpBtn: "हेल्पलाइन: 1800-000-EASY",
    a11yMenuBtn: "सुलभता (Accessibility)",
    a11yMenuTitle: "सुलभता व सहायता केंद्र",
    
    deliverTo: "डिलीवरी का स्थान:",
    defaultLocation: "पुणे, महाराष्ट्र - 411038",
    deliveryETA: "12 मिनट में",
    
    navHome: "होम",
    navShop: "दुकान",
    navCart: "झोला (Cart)",
    navTrack: "ऑर्डर ट्रैक",
    navAccount: "खाता",
    
    welcomeTitle: "ताज़ा राशन, तुरंत घर पर",
    welcomeSubtitle: "ताज़ा फल, सब्जियां, दूध और रोज़मर्रा का सामान सही दामों में और वरिष्ठ सहायता के साथ।",
    startShoppingBtn: "खरीदारी शुरू करें",
    startShoppingSub: "ताज़ा राशन और फल-सब्जियां देखें",
    teachMeBtn: "मुझे खरीदारी सिखाएं",
    teachMeSub: "कदम-दर-कदम अभ्यास (कोई असली पैसे नहीं कटेंगे)",
    helpMeBtn: "इस पेज को समझें",
    helpMeSub: "इस स्क्रीन पर क्या करना है, सरल भाषा में जानें",
    
    categoriesTitle: "श्रेणी के अनुसार चुनें",
    categoriesSubtitle: "ताज़ा फल, सब्जियां, दूध और रोज़मर्रा का सामान",
    allCategoriesBtn: "सभी सामान देखें",
    
    sectionDealsTitle: "आज के धमाकेदार ऑफर्स",
    sectionDealsSubtitle: "ताज़े सामान पर सबसे बड़ी बचत",
    sectionBestsellersTitle: "सबसे लोकप्रिय सामान",
    sectionBestsellersSubtitle: "ग्राहकों द्वारा सबसे ज्यादा पसंद किया गया राशन",
    sectionFreshTitle: "खेत से सीधे ताज़ा",
    sectionFreshSubtitle: "हर सुबह स्थानीय किसानों से सीधे चयनित",
    
    viewDetailsBtn: "विवरण देखें",
    reviewsLabel: "समीक्षाएं",
    mrpLabel: "एमआरपी:",
    saveBadge: "बचत",
    
    shopTitle: "सामान की सूची",
    shopSubtitle: "झोले में सामान जोड़ने के लिए '+ जोड़ें' दबाएं।",
    searchPlaceholder: "सेब, दूध, आटा, सब्जियां खोजें...",
    searchVoiceBtn: "आवाज़",
    searchVoiceListening: "सुन रहे हैं... कृपया सामान का नाम बोलिए",
    searchVoiceNotSupported: "इस ब्राउज़र में आवाज़ से खोजना उपलब्ध नहीं है। कृपया लिखकर खोजें।",
    allFilter: "सभी सामान",
    filterFruits: "फल",
    filterMilk: "दूध व डेयरी",
    filterGrains: "अनाज व दालें",
    filterVegetables: "सब्जियां",
    noProductsFound: "कोई सामान नहीं मिला। कृपया 'दूध', 'सेब' या 'आलू' खोजें।",
    resetSearchBtn: "सभी सामान दिखाएं",
    
    addToCartBtn: "झोले में डालें",
    addBtnShort: "+ जोड़ें",
    addedToCartBtn: "जुड़ गया (और जोड़ें)",
    priceLabel: "कीमत:",
    
    modalNutritionTitle: "पोषक तत्व व ताज़गी की जानकारी",
    modalStorageTitle: "रख-रखाव व अवधि",
    modalGuaranteeText: "10-15 मिनट में सुरक्षित डिलीवरी • आसान वापसी",
    modalRelatedTitle: "इसके साथ अक्सर खरीदे जाने वाले सामान",
    
    cartTitle: "आपका खरीदारी झोला (Cart)",
    cartSubtitle: "चुना हुआ सामान देखें। आप मात्रा बढ़ा सकते हैं या हटा सकते हैं।",
    emptyCartMsg: "आपका झोला अभी खाली है!",
    emptyCartSub: "सामान चुनने के लिए नीचे दिए गए बटन को दबाएं।",
    continueShoppingBtn: "सामान देखने जाएं",
    itemTotalLabel: "कुल सामान:",
    deliveryFeeLabel: "घर तक डिलीवरी:",
    freeDeliveryText: "मुफ़्त (वरिष्ठ नागरिकों हेतु)",
    discountSavedText: "आप इस ऑर्डर पर भारी बचत कर रहे हैं!",
    grandTotalLabel: "कुल भुगतान राशि:",
    checkoutBtn: "ऑर्डर करने आगे बढ़ें (चरण 1 of 3) ",
    undoNotice: "सामान झोले से हटा दिया गया है।",
    undoBtn: "वापस लाएं (Undo)",
    itemRemovedToast: "सामान हट गया। वापस लाने के लिए 5 सेकंड हैं।",
    
    checkoutStepTitle: "आसान 3-चरण चेकआउट",
    step1Title: "1. झोला जांचें",
    step2Title: "2. घर का पता",
    step3Title: "3. सुरक्षित भुगतान",
    stepIndicator: "चरण {step} / 3",
    
    addressTitle: "सामान कहां पहुंचाना है?",
    addressSubtitle: "सरल पता भरें। त्वरित जांच के लिए 'नमूना पता भरें' दबा सकते हैं।",
    sampleAddressBtn: "अपने आप नमूना पता भरें (Demo)",
    fullNameLabel: "पूरा नाम:",
    fullNamePlaceholder: "जैसे: रमेश शर्मा",
    phoneLabel: "मोबाइल नंबर:",
    phonePlaceholder: "जैसे: 9876543210",
    streetLabel: "घर का नंबर, इमारत, सड़क का नाम:",
    streetPlaceholder: "जैसे: फ्लैट 204, शांति निवास, स्टेशन रोड",
    cityLabel: "शहर या गांव:",
    cityPlaceholder: "जैसे: पुणे / मुंबई",
    pincodeLabel: "पिन कोड:",
    pincodePlaceholder: "जैसे: 411001",
    deliveryTimeLabel: "सामान मंगाने का पसंदीदा समय:",
    timeMorning: "सुबह (8 बजे - 12 बजे)",
    timeAfternoon: "दोपहर (12 बजे - 4 बजे)",
    timeEvening: "शाम (4 बजे - 8 बजे)",
    nextToPaymentBtn: "भुगतान की ओर बढ़ें (चरण 2 of 3) ",
    backToCartBtn: " झोले पर वापस जाएं",
    
    paymentTitle: "सुरक्षित भुगतान का तरीका चुनें",
    paymentSubtitle: "सामान घर आने पर आप किस तरह भुगतान करना चाहते हैं?",
    demoPayDisclaimer: "डेमो प्रोटोटाइप: कोई असली पैसे नहीं कटेंगे। कोई भी विकल्प सुरक्षित रूप से चुनें।",
    payCod: "सामान मिलने पर नकद दें (Cash on Delivery)",
    payCodDesc: "सबसे आसान और सुरक्षित! सामान घर आने पर डिलीवरी वाले को नकद पैसे दें।",
    payUpi: "यूपीआई / गूगल पे / फोनपे (डेमो सिमुलेशन)",
    payUpiDesc: "मोबाइल से सुरक्षित क्यूआर कोड स्कैन करें।",
    payCard: "घर पर एटीएम कार्ड स्वाइप करें",
    payCardDesc: "डिलीवरी साथी आपके दरवाजे पर छोटी स्वाइप मशीन लाएगा।",
    finalBillSummaryTitle: "अंतिम बिल विवरण",
    deliverToSummary: "इस पते पर पहुंचेगा:",
    placeOrderBtn: "सुरक्षित ऑर्डर दर्ज करें",
    backToAddressBtn: " पते पर वापस जाएं",
    
    orderSuccessTitle: "आपका ऑर्डर सफलतापूर्वक दर्ज हो गया!",
    orderSuccessSubtitle: "आराम से बैठिए। आपका ताज़ा सामान हमारे पास के स्टोर में पैक किया जा रहा है।",
    orderIdLabel: "ऑर्डर नंबर:",
    estDeliveryLabel: "अनुमानित समय:",
    estDeliveryValue: "आज 15 मिनट के भीतर",
    trackingTitle: "ऑर्डर की स्थिति (Live Tracking)",
    simulateNextStatusBtn: "अगला चरण चलाकर देखें (शिक्षक / डेमो हेतु)",
    statusOrdered: "1. ऑर्डर प्राप्त हुआ",
    statusOrderedDesc: "आपकी खरीदारी सूची स्थानीय स्टोर को मिल गई है।",
    statusPacked: "2. ताज़ा पैक हो गया",
    statusPackedDesc: "सब्जियां व सामान साफ़ करके पैक कर दिए गए हैं।",
    statusShipped: "3. डिलीवरी के लिए निकला",
    statusShippedDesc: "डिलीवरी साथी संतोष एम. (4.9) आपके घर की ओर निकल चुका है।",
    statusDelivered: "4. घर पर सुरक्षित पहुंचा",
    statusDeliveredDesc: "सामान आपके हाथों में सौंप दिया गया है। धन्यवाद!",
    trackNewOrderBtn: "और खरीदारी करें",
    riderName: "संतोष एम. (प्रमाणित डिलीवरी साथी )",
    riderPhone: "डिलीवरी साथी को फोन करें",
    
    loginTitle: "ईज़ीबाय में पुनः स्वागत है",
    loginSubtitle: "अपने सहेजे गए पते और तेज़ चेकआउट के लिए साइन इन करें।",
    emailOrMobileLabel: "ईमेल या मोबाइल नंबर:",
    passwordLabel: "पासवर्ड:",
    rememberMeLabel: "मुझे इस ब्राउज़र पर याद रखें",
    forgotPasswordLink: "पासवर्ड भूल गए?",
    loginBtn: "सुरक्षित साइन इन करें",
    demoLoginBtn: "त्वरित डेमो लॉगिन (रमेश जोशी)",
    noAccountText: "क्या आपका खाता नहीं है?",
    signUpLink: "नया खाता बनाएं",
    
    signUpTitle: "अपना खाता बनाएं",
    signUpSubtitle: "घर पर ताज़ा राशन मंगाने के लिए ईज़ीबाय से जुड़ें।",
    confirmPasswordLabel: "पासवर्ड की पुष्टि करें:",
    createAccountBtn: "मुफ़्त खाता बनाएं",
    alreadyHaveAccountText: "पहले से खाता है?",
    signInLink: "यहाँ साइन इन करें",
    
    forgotTitle: "पासवर्ड रीसेट करें",
    forgotSubtitle: "रीसेट निर्देश प्राप्त करने के लिए अपना ईमेल या मोबाइल दर्ज करें।",
    sendResetBtn: "डेमो रीसेट निर्देश भेजें",
    backToLoginLink: " लॉगिन पर वापस जाएं",
    
    accountTitle: "मेरी प्रोफाइल व प्राथमिकताएं",
    accountSubtitle: "अपने पते, पिछले ऑर्डर और सुलभता सेटिंग्स प्रबंधित करें।",
    myOrdersTab: "पिछले ऑर्डर",
    addressesTab: "सहेजे गए पते",
    settingsTab: "प्राथमिकताएं व सहायता",
    logoutBtn: "लॉग आउट करें",
    
    helpModalTitle: "इस स्क्रीन के लिए सरल निर्देश",
    helpCloseBtn: "बंद करें",
    helpCallBanner: "किसी व्यक्ति से सीधे बात करनी है? हमारे टोल-फ्री नंबर पर कॉल करें:",
    helpCallPhone: "1800-000-EASY (1800-000-3279)",
    
    helpHomeText: "• सामान देखने के लिए 'खरीदारी शुरू करें' का हरा बटन दबाएं।\n• सीखने के लिए 'मुझे खरीदारी सिखाएं' दबाएं।\n• यदि अक्षर छोटे लगें, तो सुलभता (Accessibility) बटन दबाकर बड़े कर लें।\n• हिंदी, मराठी या अंग्रेजी भाषा कभी भी बदल सकते हैं।",
    helpShopText: "• किसी भी सामान के नीचे '+ जोड़ें' बटन दबाने से वह जुड़ जाता है।\n• लिखकर खोजना कठिन लगे तो 'आवाज़' माइक दबाकर बोलें।\n• ऊपर के फल, दूध, अनाज के बटन दबाकर तुरंत मनपसंद चीज़ ढूंढें।\n• चुने हुए सामान देखने के लिए ऊपर या नीचे 'झोला (Cart)' दबाएं।",
    helpCartText: "• यहाँ आपका चुना हुआ सामान दिखता है।\n• संख्या बढ़ाने या घटाने के लिए '+' या '-' दबाएं।\n• 'हटाएं' दबाने पर सामान हट जाएगा (गलती से हट जाए तो 'वापस लाएं' दबा सकते हैं)।\n• खरीदने के लिए 'ऑर्डर करने आगे बढ़ें' दबाएं।",
    helpCheckoutText: "• चरण 1: अपना सामान जांचें।\n• चरण 2: अपना नाम और पता लिखें (या 'नमूना पता भरें' दबाएं)।\n• चरण 3: 'सामान मिलने पर नकद' चुनें।\n• अंत में 'सुरक्षित ऑर्डर दर्ज करें' दबाएं।",
    helpTrackText: "• यहाँ आप देख सकते हैं कि आपका सामान कहाँ तक पहुंचा है।\n• जैसे-जैसे सामान आगे बढ़ता है, हरा निशान आगे बढ़ता है।\n• डेमो देखने के लिए 'अगला चरण चलाकर देखें' दबाएं।",
    helpPracticeText: "• आप अभी अभ्यास मोड में हैं! कोई असली पैसे खर्च नहीं होते।\n• बिना किसी डर के सामान जोड़ें और ₹500 के नकली पैसों से ऑर्डर का अभ्यास करें।",

    guidedWelcomeTitle: "खरीदारी अभ्यास में आपका स्वागत है!",
    guidedWelcomeBody: "हम आपको सरल शब्दों में एक-एक कदम सिखाएंगे। हमने आपको ₹500 आभासी (नकली) पैसे दिए हैं ताकि आप बिना डर के सीख सकें!",
    guidedStep1: "चरण 1: श्रेणियां देखें (फल, दूध, अनाज, सब्जियां)। चलिए खरीदारी शुरू करते हैं!",
    guidedStep2: "चरण 2: कोई भी सामान चुनें (जैसे सेब) और '+ जोड़ें' बटन दबाएं।",
    guidedStep3: "चरण 3: बहुत बढ़िया! अब ऊपर दिए गए 'झोला (Cart)' बटन पर छुएं।",
    guidedStep4: "चरण 4: यह आपका झोला है। बिल देखकर 'ऑर्डर करने आगे बढ़ें' दबाएं।",
    guidedStep5: "चरण 5: अपना पता लिखें या 'नमूना पता भरें' बटन दबाकर आगे बढ़ें।",
    guidedStep6: "चरण 6: 'सामान मिलने पर नकद' चुनें और 'सुरक्षित ऑर्डर दर्ज करें' दबाएं। बधाई हो!",
    guidedNextBtn: "अगला कदम ",
    guidedPrevBtn: " पिछला",
    guidedFinishBtn: "अभ्यास समाप्त करें और घर जाएं",
    guidedSkipBtn: "ट्यूटोरियल छोड़ें",
    practiceBannerText: "अभ्यास मोड चालू है: वर्चुअल वॉलेट (₹500.00 बैलेंस)। कोई असली ऑर्डर नहीं होगा।",
    exitPracticeBtn: "अभ्यास से बाहर निकलें"
  },

  mr: {
    appTitle: "इझीबाय (EasyBuy)",
    appTagline: "ताजी फळे, भाज्या व किराणा सामान 10-15 मिनिटांत घरपोच",
    prototypeBadge: "10-15 मिनिटांत सुपरफास्ट डिलिव्हरी",
    prototypeNotice: "100% ताजा किराणा • थेट आपल्या दारात.",
    
    textSizeLabel: "अक्षरांचा आकार:",
    contrastLabel: "हाय कॉन्ट्रास्ट",
    languageLabel: "भाषा:",
    readAloudBtn: "मोठ्याने वाचून दाखवा",
    stopReadAloudBtn: "आवाज थांबवा",
    callHelpBtn: "हेल्पलाइन: 1800-000-EASY",
    a11yMenuBtn: "सुलभता (Accessibility)",
    a11yMenuTitle: "सुलभता व ज्येष्ठ नागरिक मदत केंद्र",
    
    deliverTo: "पोहोचवण्याचे ठिकाण:",
    defaultLocation: "पुणे, महाराष्ट्र - 411038",
    deliveryETA: "12 मिनिटांत",
    
    navHome: "मुख्य पान",
    navShop: "खरेदी दालन",
    navCart: "पिशवी (Cart)",
    navTrack: "ऑर्डर ट्रॅक",
    navAccount: "माझे खाते",
    
    welcomeTitle: "ताजा किराणा, झटपट घरपोच",
    welcomeSubtitle: "ताजी फळे, भाज्या, दूध आणि रोजचा पौष्टिक किराणा रास्त भावात आणि घरपोच सेवेसह.",
    startShoppingBtn: "खरेदी सुरू करा",
    startShoppingSub: "ताज्या भाज्या, फळे आणि किराणा सामान पाहा",
    teachMeBtn: "मला खरेदी शिकवा",
    teachMeSub: "हळूहळू सराव करा (खरे पैसे कट होणार नाहीत)",
    helpMeBtn: "या पानाची मदत",
    helpMeSub: "या स्क्रीनवर काय करायचे ते सोप्या भाषेत समजून घ्या",
    
    categoriesTitle: "प्रकारानुसार खरेदी करा",
    categoriesSubtitle: "ताजी फळे, भाज्या, दूध आणि रोजचा पौष्टिक किराणा",
    allCategoriesBtn: "सर्व वस्तू पाहा",
    
    sectionDealsTitle: "आजच्या खास सवलती आणि ऑफर्स",
    sectionDealsSubtitle: "रोजच्या किराणा सामानावर सर्वात मोठी बचत",
    sectionBestsellersTitle: "सर्वाधिक पसंतीचे सामान",
    sectionBestsellersSubtitle: "ग्राहकांनी सर्वाधिक मागणी केलेल्या वस्तू",
    sectionFreshTitle: "थेट शेतातून ताजे",
    sectionFreshSubtitle: "स्थानिक शेतकऱ्यांकडून दररोज सकाळी ताजे निवडलेले",
    
    viewDetailsBtn: "माहिती पाहा",
    reviewsLabel: "अभिप्राय",
    mrpLabel: "एमआरपी:",
    saveBadge: "बचत",
    
    shopTitle: "किराणा मालाची यादी",
    shopSubtitle: "वस्तू पिशवीत टाकण्यासाठी '+ टाका' हे बटण दाबा.",
    searchPlaceholder: "सफरचंद, दूध, पीठ, भाज्या शोधा...",
    searchVoiceBtn: "आवाज",
    searchVoiceListening: "ऐकत आहे... कृपया वस्तूचे नाव बोला",
    searchVoiceNotSupported: "या ब्राउझरमध्ये आवाजाने शोधणे उपलब्ध नाही. कृपया लिहून शोधा.",
    allFilter: "सर्व वस्तू",
    filterFruits: "फळे",
    filterMilk: "दूध व दुग्धजन्य",
    filterGrains: "धान्ये व डाळी",
    filterVegetables: "भाज्या",
    noProductsFound: "कोणतीही वस्तू सापडली नाही. कृपया 'दूध', 'सफरचंद' किंवा 'बटाटा' शोधा.",
    resetSearchBtn: "सर्व वस्तू दाखवा",
    
    addToCartBtn: "पिशवीत टाका",
    addBtnShort: "+ टाका",
    addedToCartBtn: "जोडले (आणखी टाका)",
    priceLabel: "किंमत:",
    
    modalNutritionTitle: "आरोग्य व ताजेपणाची माहिती",
    modalStorageTitle: "साठवणूक व टिकण्याची मुदत",
    modalGuaranteeText: "10-15 मिनिटांत सुरक्षित घरपोच • सोपी परतावा सुविधा",
    modalRelatedTitle: "यासोबत वारंवार खरेदी केल्या जाणाऱ्या वस्तू",
    
    cartTitle: "आपली खरेदी पिशवी (Cart)",
    cartSubtitle: "निवडलेल्या वस्तू तपासा. आपण प्रमाण वाढवू शकता किंवा वस्तू काढू शकता.",
    emptyCartMsg: "आपली पिशवी सध्या रिकामी आहे!",
    emptyCartSub: "सामान निवडण्यासाठी खालील बटण दाबा.",
    continueShoppingBtn: "खरेदी करायला जा",
    itemTotalLabel: "एकूण वस्तू:",
    deliveryFeeLabel: "घरपोच डिलिव्हरी:",
    freeDeliveryText: "मोफत (ज्येष्ठांसाठी खास)",
    discountSavedText: "आपण या ऑर्डरवर मोठी बचत करत आहात!",
    grandTotalLabel: "एकूण देय रक्कम:",
    checkoutBtn: "ऑर्डर पूर्ण करण्यासाठी पुढे जा (टप्पा 1 of 3) ",
    undoNotice: "वस्तू पिशवीतून काढली आहे.",
    undoBtn: "परत आणा (Undo)",
    itemRemovedToast: "वस्तू काढली. परत आणण्यासाठी 5 सेकंद आहेत.",
    
    checkoutStepTitle: "सोपे 3 टप्प्यांचे चेकआउट",
    step1Title: "1. पिशवी तपासा",
    step2Title: "2. घरचा पत्ता",
    step3Title: "3. सुरक्षित पैसे भरणे",
    stepIndicator: "टप्पा {step} / 3",
    
    addressTitle: "सामान कुठे पोहोचवायचे आहे?",
    addressSubtitle: "सोपा पत्ता भरा. जलद तपासणीसाठी 'नमुना पत्ता भरा' बटण वापरू शकता.",
    sampleAddressBtn: "नमुना पत्ता आपोआप भरा (Demo)",
    fullNameLabel: "पूर्ण नाव:",
    fullNamePlaceholder: "उदा: रमेश जोशी",
    phoneLabel: "मोबाईल नंबर:",
    phonePlaceholder: "उदा: 9876543210",
    streetLabel: "घर क्रमांक, इमारत, गल्लीचे नाव:",
    streetPlaceholder: "उदा: फ्लॅट 204, शांती निवास, स्टेशन रोड",
    cityLabel: "शहर किंवा गाव:",
    cityPlaceholder: "उदा: पुणे / मुंबई",
    pincodeLabel: "पिन कोड:",
    pincodePlaceholder: "उदा: 411001",
    deliveryTimeLabel: "सामान आणण्याची सोयीची वेळ:",
    timeMorning: "सकाळ (8 ते 12)",
    timeAfternoon: "दुपार (12 ते 4)",
    timeEvening: "संध्याकाळ (4 ते 8)",
    nextToPaymentBtn: "पैसे भरण्याकडे जा (टप्पा 2 of 3) ",
    backToCartBtn: " पिशवीकडे परत जा",
    
    paymentTitle: "सुरक्षित पैसे भरण्याची पद्धत निवडा",
    paymentSubtitle: "सामान दारात आल्यावर आपण पैसे कसे देऊ इच्छिता?",
    demoPayDisclaimer: "डेमो प्रोटोटाइप: कोणतेही खरे पैसे कट होणार नाहीत. कोणताही पर्याय बिनधास्त निवडा.",
    payCod: "सामान आल्यावर रोख पैसे द्या (Cash on Delivery)",
    payCodDesc: "ज्येष्ठांसाठी सर्वात सोपे आणि विश्वासू! डिलिव्हरी व्यक्तीला रोख पैसे द्या.",
    payUpi: "युपीआय / गुगल पे / फोनपे (डेमो सिमुलेशन)",
    payUpiDesc: "मोबाईलवरून सुरक्षित क्यूआर कोड स्कॅन करा.",
    payCard: "घरपोच एटीएम कार्ड स्वाइप करा",
    payCardDesc: "डिलिव्हरी व्यक्ती आपल्या दारात छोटी स्वाइप मशीन आणेल.",
    finalBillSummaryTitle: "अंतिम बिलाचा तपशील",
    deliverToSummary: "या पत्त्यावर पोहोचणार:",
    placeOrderBtn: "सुरक्षित ऑर्डर पूर्ण करा",
    backToAddressBtn: " पत्त्यावर परत जा",
    
    orderSuccessTitle: "आपली ऑर्डर यशस्वीरीत्या नोंदवली गेली आहे!",
    orderSuccessSubtitle: "निश्चिंत राहा. आपल्या ताज्या वस्तू आमच्या नजीकच्या हबमध्ये भरल्या जात आहेत.",
    orderIdLabel: "ऑर्डर क्रमांक:",
    estDeliveryLabel: "अंदाजे वेळ:",
    estDeliveryValue: "आज 15 मिनिटांच्या आत",
    trackingTitle: "ऑर्डरची सद्यस्थिती (Live Tracking)",
    simulateNextStatusBtn: "पुढचा टप्पा चालवून पाहा (शिक्षक / डेमोसाठी)",
    statusOrdered: "1. ऑर्डर मिळाली",
    statusOrderedDesc: "आपली खरेदी यादी स्थानिक स्टोअरला मिळाली आहे.",
    statusPacked: "2. व्यवस्थित भरली (पॅक केली)",
    statusPackedDesc: "भाज्या व किराणा स्वच्छ करून पॅक केला आहे.",
    statusShipped: "3. डिलिव्हरीसाठी निघाली",
    statusShippedDesc: "डिलिव्हरी मित्र संतोष एम. (4.9) आपल्या घराकडे निघाला आहे.",
    statusDelivered: "4. घरी सुखरूप पोहोचली",
    statusDeliveredDesc: "सामान आपल्या हातात सुपूर्द केले आहे. धन्यवाद!",
    trackNewOrderBtn: "आणखी खरेदी करा",
    riderName: "संतोष एम. (प्रमाणित डिलिव्हरी मित्र )",
    riderPhone: "डिलिव्हरी मित्राला फोन करा",
    
    loginTitle: "इझीबाय मध्ये पुन्हा स्वागत आहे",
    loginSubtitle: "जतन केलेले पत्ते आणि जलद खरेदीसाठी साइन इन करा.",
    emailOrMobileLabel: "ईमेल किंवा मोबाईल नंबर:",
    passwordLabel: "पासवर्ड:",
    rememberMeLabel: "मला या ब्राउझरवर लक्षात ठेवा",
    forgotPasswordLink: "पासवर्ड विसरलात?",
    loginBtn: "सुरक्षित साइन इन करा",
    demoLoginBtn: "झटपट डेमो लॉगिन (रमेश जोशी)",
    noAccountText: "खाते नाही का?",
    signUpLink: "नवीन खाते उघडा",
    
    signUpTitle: "नवीन खाते तयार करा",
    signUpSubtitle: "घरी ताजा किराणा मागवण्यासाठी इझीबाय सोबत जोडा.",
    confirmPasswordLabel: "पासवर्डची पुष्टी करा:",
    createAccountBtn: "मोफत खाते तयार करा",
    alreadyHaveAccountText: "आधीच खाते आहे का?",
    signInLink: "येथे साइन इन करा",
    
    forgotTitle: "पासवर्ड रीसेट करा",
    forgotSubtitle: "रीसेट सूचना मिळवण्यासाठी आपला नोंदणीकृत ईमेल किंवा मोबाईल टाका.",
    sendResetBtn: "डेमो रीसेट सूचना पाठवा",
    backToLoginLink: " लॉगिनकडे परत जा",
    
    accountTitle: "माझे प्रोफाइल व प्राधान्ये",
    accountSubtitle: "आपले पत्ते, मागील ऑर्डर्स आणि सुलभता सेटिंग्ज व्यवस्थापित करा.",
    myOrdersTab: "मागील ऑर्डर्स",
    addressesTab: "जतन केलेले पत्ते",
    settingsTab: "प्राधान्ये व मदत",
    logoutBtn: "बाहेर पडा (Log Out)",
    
    helpModalTitle: "या स्क्रीनसाठी सोप्या सूचना",
    helpCloseBtn: "बंद करा",
    helpCallBanner: "कोणाशी थेट बोलायचे आहे का? आमच्या मोफत क्रमांकावर कॉल करा:",
    helpCallPhone: "1800-000-EASY (1800-000-3279)",
    
    helpHomeText: "• वस्तू पाहण्यासाठी 'खरेदी सुरू करा' हे मोठे हिरवे बटण दाबा.\n• शिकण्यासाठी 'मला खरेदी शिकवा' दाबा.\n• अक्षरे लहान वाटल्यास सुलभता (Accessibility) बटण दाबून मोठी करा.\n• मराठी, हिंदी किंवा इंग्रजी भाषा कधीही बदलू शकता.",
    helpShopText: "• कोणत्याही वस्तूखालील '+ टाका' बटण दाबल्यास ती पिशवीत जमा होते.\n• टाईप करणे अवघड वाटल्यास 'आवाज' माइक दाबून बोला.\n• वरील फळे, दूध, धान्य बटणे दाबून हवी ती वस्तू पटकन शोधा.\n• निवडलेले सामान पाहण्यासाठी वर किंवा खाली 'पिशवी (Cart)' दाबा.",
    helpCartText: "• येथे आपण निवडलेल्या सर्व वस्तू दिसतात.\n• प्रमाण वाढवण्यासाठी '+' किंवा कमी करण्यासाठी '-' दाबा.\n• 'काढा' दाबल्यास वस्तू निघून जाईल (चुकून काढल्यास 'परत आणा' दाबा).\n• खरेदी करण्यासाठी 'ऑर्डर पूर्ण करण्यासाठी पुढे जा' दाबा.",
    helpCheckoutText: "• टप्पा 1: सामान तपासा.\n• टप्पा 2: नाव आणि पत्ता लिहा (किंवा 'नमुना पत्ता भरा' दाबा).\n• टप्पा 3: 'सामान आल्यावर रोख पैसे द्या' निवडा.\n• शेवटी 'सुरक्षित ऑर्डर पूर्ण करा' दाबा.",
    helpTrackText: "• येथे सामान आपल्या घरापर्यंत कसे येते ते पाहता येते.\n• सामान जसे पुढे येईल तसा हिरवा रंग पुढे जाईल.\n• शिक्षकांना दाखवण्यासाठी 'पुढचा टप्पा चालवून पाहा' दाबा.",
    helpPracticeText: "• आपण सध्या सराव पद्धतीत (Practice Mode) आहात! कोणतेही खरे पैसे लागत नाहीत.\n• निर्धास्तपणे वस्तू निवडा आणि ₹500 च्या सराव पैशांनी ऑर्डर पूर्ण करण्याचा सराव करा.",

    guidedWelcomeTitle: "खरेदी सरावामध्ये आपले स्वागत आहे!",
    guidedWelcomeBody: "आम्ही आपल्याला टप्प्याटप्प्याने सोप्या शब्दात शिकवू. आम्ही आपल्याला ₹500 चे आभासी (सराव) पैसे दिले आहेत जेणेकरून आपण कोणतीही भीती न बाळगता शिकू शकता!",
    guidedStep1: "टप्पा 1: डाव्या बाजूला किंवा खालील प्रकार पाहा (फळे, दूध, धान्ये, भाज्या). चला वस्तू पाहूया!",
    guidedStep2: "टप्पा 2: कोणतीही एक वस्तू निवडा (उदा: सफरचंद) आणि '+ टाका' बटण दाबा.",
    guidedStep3: "टप्पा 3: खूप छान! आता वर दिलेल्या 'पिशवी (Cart)' बटणावर स्पर्श करा.",
    guidedStep4: "टप्पा 4: ही आपली खरेदी पिशवी आहे. बिल पाहून 'ऑर्डर पूर्ण करण्यासाठी पुढे जा' दाबा.",
    guidedStep5: "टप्पा 5: आपला पत्ता लिहा किंवा 'नमुना पत्ता भरा' बटण दाबून पुढे जा.",
    guidedStep6: "टप्पा 6: 'सामान आल्यावर रोख पैसे द्या' निवडा आणि 'सुरक्षित ऑर्डर पूर्ण करा' दाबा. अभिनंदन!",
    guidedNextBtn: "पुढचा टप्पा ",
    guidedPrevBtn: " मागील टप्पा",
    guidedFinishBtn: "सराव पूर्ण करा आणि मुख्य पानावर जा",
    guidedSkipBtn: "सराव थांबवा",
    practiceBannerText: "सराव पद्धत चालू आहे: व्हर्च्युअल वॉलेट (₹500.00 शिल्लक). कोणतीही खरी ऑर्डर होणार नाही.",
    exitPracticeBtn: "सराव पद्धतीतून बाहेर पडा"
  }
};
