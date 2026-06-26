// ============================================================
//  Arutperunjothi Jothida Nilayam — Dr. N. Thangabharathi
//  Site content & configuration
// ============================================================

export const siteConfig = {
  brandName: "Arutperunjothi Jothida Nilayam",
  astrologerName: "Dr. N. Thangabharathi",
  established: "2010",
  tagline: "Celestial Insight. Timeless Guidance.",
  subTagline: "Where ancient Vedic science meets the modern seeker.",
  location: "Thirupur, Tamil Nadu",
  credentials: ["MBA", "MA in Vedic Astrology", "M.Sc. in Yoga for Human Excellence"],
  contact: {
    phones: ["84288 21907", "63810 37364", "98653 40263"],
    whatsapp: "918428821907",
    email: "astrothangabharathi@gmail.com",
    upi: "astrothangabharathi@upi",
    address: {
      lines: [
        "31, 2/605, Narayana Nagar, 1st Street",
        "Ganapathi Palayam, Palladam Road",
        "Tirupur – 641605",
      ],
      landmark: "Near VAT School",
    },
    hours: "9:00 AM – 8:00 PM",
    days: "All Days Including Sundays",
  },
};

// Main navigation (multi-page)
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Temple History", href: "/temple-history" },
  { label: "Book Consultation", href: "/book-consultation" },
  { label: "E-Seva", href: "/e-seva" },
  { label: "E-Donation", href: "/e-donation" },
];

// ---------- HOME PAGE ----------
export const homeContent = {
  hero: {
    tagline: "Celestial Insight. Timeless Guidance.",
    sub: "Where ancient Vedic science meets the modern seeker.",
  },
  introduction:
    "Each horoscope holds a story — of purpose, potential, and the paths yet to unfold. My calling is to decode that story for you, offering not just predictions, but perspective and renewed confidence to face whatever lies ahead. This work is carried forward by divine grace and the wisdom passed down through an unbroken lineage of Gurus.",
  aboutVedic: {
    title: "About Vedic Astrology",
    body: [
      "Among the six auxiliary disciplines of the Vedas, Jyotish — the science of light — stands as one of the most profound. Rooted in the Upanishads and refined over millennia, it forms the backbone of what we call Vedic or Jyotish astrology today.",
      "The seers of antiquity — Parashara, Varahamihira, Garga, and Jaimini among them — charted the heavens with extraordinary precision. Armed with nothing but contemplative insight, they mapped planetary positions and movements that modern space observation has since confirmed with remarkable accuracy. This is not coincidence; it is the fruit of a civilization deeply attuned to cosmic order.",
    ],
  },
  purpose: {
    title: "Purpose of Astrology",
    body: "Vedic astrology serves two essential roles in human life. The first is navigational — helping individuals understand the forces at play in their circumstances, relationships, and inner world. The second is practical — identifying auspicious windows of time, known as Muhurtha, in which to begin significant undertakings, from ceremonies and marriages to new ventures, so that every important beginning is supported by cosmic alignment.",
  },
  science: {
    title: "Science & Cosmos",
    body: "Contemporary science has yet to fully embrace astrology, yet evidence of planetary influence on human behavior surrounds us. Medical professionals working in psychiatric care have consistently noted heightened agitation and irregular conduct among patients during full moon and new moon phases. Law enforcement agencies have similarly documented patterns tied to lunar cycles. While modern science has begun to explore the impact of ultraviolet, gamma, and other forms of cosmic radiation on living beings, the ancient sages already possessed an integrated understanding of these forces — one that encompassed not just the physical, but the psychological and spiritual dimensions of human existence.",
  },
  credentialsBlock: {
    heading: "Three disciplines. One practitioner.",
    line: "MBA · MA in Vedic Astrology · M.Sc. in Yoga for Human Excellence",
    sub: "Decades of learning, distilled into every reading.",
  },
};

// ---------- ABOUT PAGE ----------
export const aboutContent = {
  eyebrow: "Know About Us",
  title: "Our Journey in the Stars",
  intro:
    "Founded in 2010, Arutperunjothi Jothida Nilayam has grown into one of the region's most respected centres for Vedic astrology consultation and education. What began as a singular vision — to make authentic astrological wisdom accessible to all — has evolved into a thriving practice trusted by clients across India and beyond.",
  whoWeAre: {
    title: "Who We Are",
    body: [
      "Arutperunjothi Jothida Nilayam is a premier Astrology Consultation and Training Centre based in Thirupur, Tamil Nadu. Established with the purpose of delivering expert guidance across the many dimensions of Vedic astrology and its allied sciences, the centre has remained committed to accuracy, integrity, and compassionate counsel since its founding.",
      "Our lead astrologer trained under distinguished and traditionally rooted masters of this ancient science, acquiring not merely academic knowledge but the lived wisdom that only years of devoted practice can cultivate. This depth of preparation enables near-precise readings and meaningful insights that have transformed the lives of countless individuals.",
    ],
  },
  specialities: {
    title: "Our Specialities",
    intro: "We offer exceptional expertise across a range of astrological disciplines:",
    items: [
      { title: "Marriage Matching", text: "Thorough horoscope compatibility analysis to ensure a harmonious and prosperous union between partners." },
      { title: "Conception & Fertility Guidance", text: "For couples facing challenges with conception after marriage, we provide astrological insights and remedial measures to support and strengthen the path to parenthood." },
      { title: "Divorce & Separation Counsel", text: "Astrological guidance for individuals navigating marital discord — identifying root planetary causes and offering remedies to restore harmony or bring peaceful resolution." },
      { title: "Love Marriage Support", text: "Dedicated consultation for couples seeking family acceptance and a smooth transition from a love relationship into a blessed and recognised marriage." },
      { title: "Delayed Marriage Solutions", text: "For those experiencing unexplained delays in marriage, we analyse planetary positions and doshas responsible for the delay and prescribe effective Vedic remedies to open the path forward." },
    ],
  },
  education: {
    title: "Astrology Education",
    body: "Beyond personal consultations, Arutperunjothi Jothida Nilayam proudly conducts structured Astrology Classes led by a certified and experienced astrologer. These courses are designed to nurture genuine understanding of Vedic astrology — from foundational principles to advanced techniques — in a focused and enriching learning environment.",
  },
  recognition: {
    title: "Our Reach & Recognition",
    body: "Over the years, our astrologer has been invited by numerous national and international organisations to present and share knowledge on the various facets of this ancient science. Clients consistently return — and refer others — drawn by the quality of consultation, the accuracy of forecasts, and the genuine warmth with which every session is conducted.",
  },
  guideOn: {
    title: "What We Can Guide You On",
    intro: "By simply sharing your date, time, and place of birth, you can receive a thorough horoscope reading that illuminates:",
    items: [
      "Education", "Career", "Business", "Marriage", "Love Life",
      "Finance & Income", "Foreign Settlement", "Property & Assets",
      "Health — Physical and Mental", "Litigation & Debt", "Auspicious Timings (Muhurtha)",
    ],
  },
  promise: {
    title: "Our Promise",
    body: "Every consultation at Arutperunjothi Jothida Nilayam is conducted with sincerity, scholarship, and a heartfelt commitment to your well-being. We do not merely read charts — we listen, understand, and guide.",
  },
};

// ---------- SOLUTIONS PAGE ----------
export const solutions = [
  {
    id: "marriage-matching",
    title: "Marriage Matching",
    subtitle: "Horoscope Compatibility for a Blessed Union",
    intro:
      "In Vedic astrology, marriage is not merely a union of two individuals — it is the coming together of two destinies. Ensuring compatibility between those destinies is the sacred purpose of horoscope matching, known as Kundali Milan or Jathaka Porutham.",
    blocks: [
      { heading: "What is Marriage Matching?", body: "Marriage matching is a detailed astrological analysis of the birth charts of both the bride and groom. By carefully examining planetary positions, star alignments, and cosmic influences present at the time of each person's birth, an experienced astrologer can assess the depth of compatibility across multiple dimensions of life." },
      { heading: "Why It Matters", body: "A well-matched horoscope does not guarantee a perfect marriage — but it reveals the natural strengths and potential challenges of the relationship. With this knowledge, couples and families can enter marriage with awareness, preparation, and confidence. Overlooking compatibility can sometimes lead to prolonged difficulties in health, finance, childbearing, or emotional well-being. A thorough matching conducted by a qualified astrologer helps identify these concerns early and prescribe appropriate remedies." },
      { heading: "Our Approach", body: "At Arutperunjothi Jothida Nilayam, marriage matching is conducted with the utmost care, scholarship, and sensitivity. We go beyond a simple points-based score. Every chart is read in full depth — considering the complete life picture of both individuals — before an honest and compassionate assessment is shared. We also provide remedial guidance where doshas or incompatibilities are found, so that no match is dismissed without first exploring every possible solution." },
    ],
  },
  {
    id: "conception-fertility",
    title: "Conception & Fertility Guidance",
    subtitle: "Astrological Support for the Gift of Parenthood",
    intro:
      "In Vedic tradition, the arrival of a child is considered one of life's most sacred blessings — a continuation of the family lineage and a fulfilment of one of the four fundamental purposes of human existence. When this blessing is delayed or denied, the emotional weight carried by a couple can be profound. Vedic astrology offers a compassionate and time-tested pathway to understanding and addressing the planetary causes behind conception challenges.",
    blocks: [
      { heading: "What is Conception Astrology?", body: "Conception astrology is the in-depth study of a couple's birth charts to identify planetary combinations, doshas, and cosmic influences that may be creating obstacles to parenthood. Rather than viewing fertility challenges purely through a medical lens, this ancient science examines the karmic and celestial dimensions that medicine alone may not address. It does not replace medical treatment — instead, it works alongside it, offering deeper insight and powerful remedial support." },
      { heading: "A Word of Compassion", body: "We understand that the longing for a child touches the deepest part of the human heart. Every consultation in this area is conducted with the highest sensitivity, privacy, and respect. Our role is not to offer false hope — but to illuminate what the stars reveal, provide every available remedy, and walk alongside you on this deeply personal journey." },
    ],
  },
  {
    id: "divorce-separation",
    title: "Divorce & Separation Counsel",
    subtitle: "Astrological Guidance Through Life's Most Difficult Crossroads",
    intro:
      "Marriage is one of life's most sacred commitments — yet there are times when two individuals, despite their best efforts, find themselves standing at the edge of separation. Whether the relationship is marked by persistent conflict, emotional distance, betrayal, or irreconcilable differences, the pain of a failing marriage is among the deepest a human being can experience. Vedic astrology does not judge. It listens — through the language of the planets — and offers both understanding and a path forward.",
    blocks: [
      { heading: "What is Divorce & Separation Counsel in Astrology?", body: "This is a specialised consultation that examines the birth charts of one or both partners to understand the planetary roots of marital discord. By identifying the cosmic influences driving conflict, disconnection, or breakdown within a marriage, an experienced astrologer can offer clarity on why the difficulties arose, whether reconciliation is astrologically supported, and what remedies or decisions may lead to the most peaceful and constructive resolution. This is not about predicting divorce — it is about understanding the full picture and empowering you to make the most informed and dignified choice for your life." },
      { heading: "Path of Reconciliation", body: "Where planetary positions and remedial potential suggest that the marriage can be healed, we prescribe targeted Vedic remedies, counsel on behavioural adjustments aligned with planetary influences, and identify auspicious periods during which reconciliation efforts are most likely to bear fruit." },
      { heading: "Path of Dignified Separation", body: "Where the charts clearly indicate that the union has served its karmic purpose and separation is the most constructive path forward, we help you navigate this transition with clarity, emotional strength, and astrological guidance on timing — so that the next chapter of your life begins on the most favourable footing possible." },
    ],
  },
  {
    id: "love-marriage",
    title: "Love Marriage Support",
    subtitle: "Astrological Guidance for Hearts That Have Already Chosen",
    intro:
      "Love is one of life's most beautiful and courageous experiences. When two hearts find each other and choose to build a life together, that bond deserves every possible support — celestial and practical alike. Yet in the rich cultural fabric of Indian society, the journey from love to marriage is not always straightforward. Family reservations, caste differences, religious distinctions, societal pressures, and unexplained delays can cast shadows over what should be one of life's most joyful transitions. Vedic astrology offers both understanding and a powerful pathway to help love find its rightful and blessed culmination in marriage.",
    blocks: [
      { heading: "What is Love Marriage Support in Astrology?", body: "This is a dedicated consultation for individuals or couples who are in a loving relationship and seeking a clear path toward marriage. Through careful analysis of both birth charts, our astrologer identifies the planetary combinations that indicate the nature of the relationship, the likelihood and timing of marriage, the specific obstacles standing in the way, and the most effective Vedic remedies to overcome them. The goal is not to force an outcome — but to align the cosmic energies surrounding your relationship so that love may flourish into a lasting, accepted, and harmonious union." },
    ],
    list: {
      heading: "Obstacles We Help Navigate",
      items: [
        { title: "Family Opposition", text: "Where parents or family members resist the relationship, we identify the planetary reasons for their resistance and prescribe remedies that soften opposition and open the path to acceptance and blessing." },
        { title: "Caste & Community Differences", text: "Relationships that cross traditional social boundaries often carry specific planetary signatures. We provide guidance and remedies to ease social friction and support a peaceful transition into marriage." },
        { title: "Repeated Delays & Postponements", text: "When a relationship is strong but marriage keeps getting delayed without clear reason, specific planetary afflictions are almost always responsible. We identify and address these directly." },
        { title: "Fear & Uncertainty", text: "Sometimes one or both partners carry deep uncertainty about whether to proceed. Astrological insight into the nature and longevity of the relationship brings the clarity needed to move forward with confidence." },
        { title: "Legal & Logistical Hurdles", text: "Certain planetary combinations create practical obstacles in formalising a union. We identify these and recommend remedies alongside practical astrological timing guidance." },
      ],
    },
    closing: {
      heading: "Our Commitment to You",
      body: "Every love story is unique. Every obstacle is specific. And every consultation at Arutperunjothi Jothida Nilayam is approached with the same depth of care — honouring the courage it takes to love, and the sincerity it takes to seek guidance. We do not simply read a chart and offer generic remedies. We listen to your story, study your planetary landscape with full attention, and walk with you — step by step — toward the future you are building together. All consultations are conducted in complete confidentiality and with the utmost respect for your relationship and your journey.",
    },
  },
  {
    id: "delayed-marriage",
    title: "Delayed Marriage Solutions",
    subtitle: "Astrological Answers for Those Still Waiting to Begin Their Journey Together",
    intro:
      "Marriage is one of life's most anticipated milestones. Yet for many individuals — regardless of their qualities, achievements, or sincere desire to settle down — the right partner simply does not appear. Proposals fall through without reason. Promising relationships dissolve unexpectedly. Years pass, and the question that weighs most heavily becomes: why is this taking so long? Vedic astrology has answered this question for thousands of individuals across centuries. Behind every unexplained delay in marriage lies a specific planetary cause — and where there is a cause, there is always a remedy.",
    blocks: [
      { heading: "What is Delayed Marriage in Astrology?", body: "In Vedic astrology, marriage is considered delayed when it does not occur within the traditionally expected period of an individual's life — typically between the ages of 22 and 30 for women and 25 and 32 for men, though this varies by individual chart. When marriage is repeatedly postponed, cancelled, or simply absent despite genuine readiness, the birth chart almost always reveals specific planetary afflictions, doshas, or unfavourable planetary periods responsible for the delay. Identifying these causes is the essential first step toward resolving them." },
    ],
    list: {
      heading: "Challenges We Address",
      items: [
        { title: "Repeated Proposal Failures", text: "When proposals consistently fail to materialise into marriage despite apparent compatibility, specific planetary patterns are almost always responsible. We identify and remedy these precisely." },
        { title: "No Suitable Match Found", text: "When years pass without a genuinely compatible partner appearing, the seventh house and Venus require urgent astrological attention and strengthening." },
        { title: "Family & Social Pressure", text: "The emotional burden of societal and family expectations compounds the pain of delay. We provide not only astrological remedies but also compassionate guidance to help individuals navigate this pressure with dignity and patience." },
        { title: "Self Doubt & Emotional Fatigue", text: "Prolonged waiting erodes confidence and hope. Understanding the planetary reason for delay — and knowing that it is temporary and addressable — brings profound relief and renewed faith in the future." },
        { title: "Age-Related Concerns", text: "For individuals in their mid-thirties or beyond, concerns about age intensify the urgency. We assess the chart with full sensitivity to this reality and provide the most direct and effective remedial pathway available." },
      ],
    },
    closing: {
      heading: "A Message of Hope",
      body: "If you have been waiting — and wondering — please know this: delay is not denial. In Vedic astrology, every planetary obstacle carries within it the seed of its own resolution. The same ancient science that identifies the cause of your delay also holds the remedy for it. Thousands of individuals who once sat where you sit today — carrying the weight of unexplained waiting — have gone on to find deeply fulfilling and blessed marriages after seeking astrological counsel and following the prescribed remedial path with sincerity and faith. Your time is coming. Let us help you align with it.",
    },
  },
];

// ---------- TEMPLE HISTORY PAGE ----------
export const templeContent = {
  title: "Arulmigu Sri Naga Kanniamman Temple, Pongalur",
  intro:
    "Arulmigu Sri Naga Kanniamman Temple, situated in the historic town of Pongalur near Tiruppur, is a sacred shrine renowned for its spiritual significance and powerful parihara worship. For generations, devotees have visited this temple seeking divine blessings for prosperity, good health, marriage, childbirth, family welfare, and protection from various doshas.",
  history: [
    "According to the temple's sacred tradition, during their search for Goddess Sita, Lord Rama and Lakshmana passed through this region. As night approached, they reached Pongalur and decided to rest there. Using branches and leaves from the surrounding forest, they constructed a simple shelter and spent the night at this holy place.",
    "It is believed that Lord Rama and Lakshmana collected sacred soil from a nearby anthill and crafted idols of the divine Kannimars (Virgin Goddesses). They worshipped the divine feminine power, seeking strength, guidance, and success in their mission. The place where this worship was performed became sanctified by their divine presence and is revered by devotees to this day.",
    "The presiding deity, Sri Naga Kanniamman, is worshipped as a powerful guardian goddess who protects devotees from obstacles and grants peace, prosperity, and spiritual well-being. The temple is especially known for remedies related to Naga Dosha, marriage delays, childbirth blessings, and family harmony.",
    "The temple also houses the sacred shrine of Lord Vinayagar (Ganesha), the remover of obstacles and the embodiment of wisdom, knowledge, and auspicious beginnings. Devotees traditionally offer their prayers to Lord Vinayagar before worshipping the main deity, seeking his blessings for success in all endeavors and the removal of difficulties from their lives.",
    "Another important deity worshipped in the temple is Sri Karuppasamy, the powerful guardian deity revered throughout Tamil Nadu. Known for his unwavering justice, protection, and divine vigilance, Sri Karuppasamy is worshipped as the protector of the temple and the surrounding community. Devotees pray to him for courage, truth, protection from negative forces, and the resolution of personal and family issues. His presence symbolizes righteousness and the safeguarding of devotees from all forms of harm.",
    "With its unique combination of the divine grace of Sri Naga Kanniamman, the blessings of Lord Vinayagar, and the protective presence of Sri Karuppasamy, the temple stands as a beacon of faith and devotion. Surrounded by a peaceful atmosphere and enriched by centuries of worship, it continues to inspire devotees and preserve its sacred heritage for future generations.",
  ],
  significance: {
    title: "Temple Significance",
    items: [
      "Special Parihara Sthalam for Naga Dosha remedies.",
      "Worship for marriage, childbirth, education, career growth, and family welfare.",
      "Blessings of Sri Naga Kanniamman for protection and prosperity.",
      "Lord Vinayagar's grace for success and obstacle removal.",
      "Sri Karuppasamy's divine protection, justice, and safeguarding of devotees.",
    ],
    quote:
      "May the divine blessings of Sri Naga Kanniamman, Lord Vinayagar, and Sri Karuppasamy bring peace, prosperity, protection, and spiritual fulfillment to all devotees.",
  },
  nagaDevathai: {
    title: "Sri Naga Devathai Amman",
    body: [
      "Sri Naga Devathai Amman is revered as the divine embodiment of the sacred serpent energy and is worshipped as a powerful protector of devotees, nature, fertility, and prosperity. In Hindu tradition, Nagas are considered divine beings associated with the earth, water, fertility, wisdom, and spiritual protection.",
      "At Arulmigu Sri Naga Kanniamman Temple, Sri Naga Devathai Amman is worshipped as a compassionate mother goddess who safeguards devotees from negative influences and blesses them with health, happiness, and abundance. Devotees believe that sincere prayers offered to the Goddess help remove obstacles related to marriage, childbirth, family welfare, and Naga Dosha.",
      "According to ancient beliefs, serpent deities are guardians of sacred lands, water sources, and agricultural prosperity. Worship of Naga Devathai is deeply rooted in Tamil culture and has been practiced for generations as a means of seeking divine protection and harmony with nature.",
    ],
    offeringsIntro: "Special prayers and offerings are made to Sri Naga Devathai Amman by devotees seeking:",
    offerings: [
      "Relief from Naga Dosha and Sarpa Dosha.",
      "Marriage blessings and family harmony.",
      "Fertility and childbirth blessings.",
      "Protection from negative energies and obstacles.",
      "Health, prosperity, and overall well-being.",
    ],
    putru:
      "The sacred anthill (Putru), traditionally associated with serpent deities, is considered highly auspicious. Worship performed with faith and devotion is believed to invoke the divine grace of Sri Naga Devathai Amman and bring peace, prosperity, and spiritual fulfillment.",
    blessing:
      "Sri Naga Devathai Amman lovingly protects all devotees, removes obstacles, grants righteous desires, and showers her blessings upon those who worship her with faith and devotion.",
    closing:
      "This sacred tradition continues to make Arulmigu Sri Naga Kanniamman Temple a revered spiritual center and a powerful Parihara Sthalam for devotees from all walks of life.",
  },
};

// ---------- E-SEVA PAGE ----------
export const eSevaContent = {
  intro:
    "Receive authentic Vedic astrology guidance from anywhere in the world — delivered personally to your WhatsApp and Email by Dr. N. Thangabharathi.",
  steps: [
    { n: "1", title: "Choose Your Service", text: "Select the E Seva that best addresses your need" },
    { n: "2", title: "Share Your Details", text: "Provide birth details and your specific concern" },
    { n: "3", title: "Make Payment", text: "Pay securely via UPI, GPay, or bank transfer" },
    { n: "4", title: "Receive Prediction", text: "Your reading is delivered via WhatsApp and Email" },
  ],
  featured: [
    { title: "Horoscope by WhatsApp / Email", text: "Detailed written horoscope analysis delivered directly to your WhatsApp or Email inbox", price: "From ₹ 500" },
    { title: "Online Video Consultation", text: "Live one-on-one consultation via WhatsApp Video, Zoom, or Google Meet", price: "From ₹ 1,000" },
    { title: "Recorded Audio Prediction", text: "Personalised audio reading recorded by Dr. Thangabharathi and sent to your WhatsApp", price: "From ₹ 700" },
  ],
  fees: [
    { service: "General Life Prediction", type: "Written Report", delivery: "WhatsApp + Email", fee: "₹ 500" },
    { service: "Marriage Matching", type: "Written Report", delivery: "WhatsApp + Email", fee: "₹ 800" },
    { service: "Jamakkol Prasanam", type: "Audio + Written", delivery: "WhatsApp + Email", fee: "₹ 1,000" },
    { service: "Chandra Naadi Reading", type: "Audio + Written", delivery: "WhatsApp + Email", fee: "₹ 1,200" },
    { service: "Video Consultation — 30 mins", type: "Live Video", delivery: "Zoom / WhatsApp", fee: "₹ 1,000" },
    { service: "Video Consultation — 60 mins", type: "Live Video", delivery: "Zoom / WhatsApp", fee: "₹ 1,800" },
    { service: "Recorded Audio Prediction", type: "Audio Message", delivery: "WhatsApp", fee: "₹ 700" },
    { service: "Full Detailed Chart — Premium", type: "Written + Audio", delivery: "WhatsApp + Email", fee: "₹ 2,500" },
  ],
  feeNote: "Fees are indicative. Final fee confirmed at time of booking. International clients welcome.",
  timeline: [
    { n: "1", title: "Request Received", text: "Your E Seva request and payment are confirmed by our team", when: "Immediately upon submission" },
    { n: "2", title: "Chart Preparation", text: "Dr. Thangabharathi personally prepares your horoscope analysis based on your birth details", when: "Within 12 – 24 hours" },
    { n: "3", title: "Prediction Delivered", text: "Your complete reading is sent to your WhatsApp and Email", when: "Within 24 – 48 hours of payment" },
    { n: "4", title: "Follow-Up Clarification", text: "You may ask up to two clarifying questions within 48 hours of receiving your prediction — at no additional charge", when: "Within 48 hours of delivery" },
  ],
  payment: {
    methods: ["UPI / GPay / PhonePe", "Bank Transfer", "International Transfer"],
    upi: "astrothangabharathi@upi",
    note: "Pay via GPay, PhonePe, Paytm, or any UPI app. After payment, please send the screenshot to WhatsApp: 84288 21907",
  },
  confidentiality:
    "All E Seva consultations are conducted personally by Dr. N. Thangabharathi. Your birth details and personal information are kept in complete confidentiality. For urgent queries, call or WhatsApp: 84288 21907 · 63810 37364 · 98653 40263",
};

// Consultation services for booking dropdowns
export const consultationServices = [
  "Marriage Matching",
  "Conception & Fertility Guidance",
  "Divorce & Separation Counsel",
  "Love Marriage Support",
  "Delayed Marriage Solutions",
  "Birth Chart Reading",
  "Muhurtha Selection",
  "General Life Prediction",
];

export const languages = ["Tamil", "English", "Hindi", "Telugu", "Kannada", "Malayalam"];

// ---------- E-DONATION PAGE ----------
export const donationContent = {
  intro:
    "We welcome devotees from across the world to contribute towards the maintenance, development, and spiritual activities of the temple. Your generous donations help us conduct daily poojas, festivals, annadhanam, renovation works, charitable activities, and preservation of our sacred traditions.",
  quote: "Every contribution, big or small, is a sacred offering to the Divine.",
  categories: [
    { n: "1", title: "General Donation", text: "Support the day-to-day maintenance and temple activities." },
    { n: "2", title: "Annadhanam Donation", text: "Contribute towards providing free meals to devotees and the needy." },
  ],
  upi: "donation@upi",
  apps: ["Google Pay", "PhonePe", "Paytm", "BHIM UPI", "All UPI Applications"],
  terms: [
    "Donations made to the temple are voluntary and non-refundable.",
    "The temple reserves the right to utilize donations for religious, charitable, developmental, and administrative purposes.",
    "Donors must provide accurate contact information for receipt generation.",
    "The temple shall not be responsible for errors arising from incorrect payment details entered by the donor.",
    "Online transaction charges, if any, shall be borne by the donor.",
    "Receipt issuance is subject to successful confirmation of payment.",
    "The temple reserves the right to modify donation policies without prior notice.",
  ],
  privacy:
    "The temple respects the privacy of all devotees. Personal information collected during the donation process will be used solely for donation processing, receipt generation, communication, and statutory compliance. The information will not be shared with third parties except where required by law.",
  closing: "May the Divine Bless You and Your Family with Health, Prosperity, and Happiness.",
};
