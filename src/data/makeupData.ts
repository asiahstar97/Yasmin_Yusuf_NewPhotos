import { ServicePackage, PortfolioItem, Testimonial, FaqItem, TermItem } from '../types';

export const ARTIST_INFO = {
  name: 'Yasmin Yusuf',
  tagline: {
    bm: 'Natural Makeup Artist & Hijab Stylist',
    en: 'Natural Makeup Artist & Hijab Stylist',
  },
  location: 'Melaka Tengah, Melaka',
  phone: '+6013-4775513',
  phoneRaw: '60134775513',
  email: 'yasminyusuf1993@gmail.com',
  instagram: '@makeup.melaka',
  instagramUrl: 'https://instagram.com/makeup.melaka',
  facebook: 'Mua Yasmin Yusuf',
  facebookUrl: 'https://www.facebook.com/search/top?q=Mua%20Yasmin%20Yusuf',
  threads: '@yasmeaneyusuf',
  threadsUrl: 'https://www.threads.com/@yasmeaneyusuf?igshid=NTc4MTIwNjQ2YQ==',
  experienceCount: '1,000+',
  certification: 'Sijil Rasmi KKKM',
  fixedDeposit: 50, // Fixed MYR 50 deposit
};

export const PACKAGES: ServicePackage[] = [
  // 1. Nikah
  {
    id: 'nikah',
    name: {
      bm: 'Nikah',
      en: 'Solemnization (Nikah)',
    },
    category: 'wedding',
    price: 199,
    duration: {
      bm: '1.5 - 2 Jam',
      en: '1.5 - 2 Hours',
    },
    popular: true,
    image: '/images/Sanding.jpeg',
    description: {
      bm: 'Solekan suci, manis dan bercahaya untuk detik akad nikah. Tahan lama dan tidak bercapuk.',
      en: 'Radiant, gentle soft glam designed for the solemnization ceremony. Long-lasting and sweat-resistant.',
    },
    inclusions: [
      { bm: 'Kemasan Natural Soft Glam / Glass Skin', en: 'Natural Soft Glam or Glass Skin finish' },
      { bm: 'Skin prepping & hidrasi intensif', en: 'Intensive skin prep & moisture lock' },
      { bm: 'Produk halal mesra wudhu', en: 'Halal wudhu-friendly certified cosmetics' },
      { bm: 'Tanpa bulu mata palsu (Lentik semulajadi)', en: 'No fake lashes (Natural curled & defined lashes)' },
    ],
    recommendedFor: {
      bm: 'Majlis akad nikah di masjid atau kediaman',
      en: 'Solemnization at mosque or home',
    },
  },

  // 2. Sanding
  {
    id: 'sanding',
    name: {
      bm: 'Sanding',
      en: 'Reception (Sanding)',
    },
    category: 'wedding',
    price: 250,
    duration: {
      bm: '2 Jam',
      en: '2 Hours',
    },
    popular: true,
    image: '/images/Sanding.jpeg',
    description: {
      bm: 'Solekan anggun memikat berseri untuk sesi atas pelamin dan fotografi dewan.',
      en: 'Camera-ready radiant finish tailored for stage lighting and ballroom photography.',
    },
    inclusions: [
      { bm: 'Kemasan High-Definition Camera-Ready', en: 'High-Definition camera-ready finish' },
      { bm: 'Ketahanan tinggi terhadap suhu dewan & pelamin', en: 'Formulated to withstand stage lights and warmth' },
      { bm: 'Persiapan kulit mendalam berasaskan teori warna', en: 'Skin prep tailored using color theory' },
      { bm: 'Bantuan pemasangan veil atau aksesori', en: 'Veil & bridal accessory adjustment assistance' },
    ],
    recommendedFor: {
      bm: 'Majlis persandingan dewan atau rumah',
      en: 'Wedding reception & dais photography',
    },
  },

  // 3. Nikah + Sanding Combo
  {
    id: 'nikah-sanding',
    name: {
      bm: 'Nikah + Sanding (Kombo)',
      en: 'Nikah + Sanding (Combo)',
    },
    category: 'combo',
    price: 439,
    duration: {
      bm: '2 Sesi Majlis',
      en: '2 Ceremony Sessions',
    },
    popular: true,
    image: '/images/Photoshoot.jpeg',
    description: {
      bm: 'Pakej kombo lengkap paling jimat untuk kedua-dua majlis akad nikah dan persandingan.',
      en: 'Best value complete combo package covering both Solemnization and Reception sessions.',
    },
    inclusions: [
      { bm: '2x Sesi Solekan Penuh (Nikah & Sanding)', en: '2x Full Makeup Sessions (Nikah & Sanding)' },
      { bm: 'Penjimatan hebat pakej kombo istimewa', en: 'Special discounted combo rate' },
      { bm: 'Penjagaan kulit & touch-up profesional', en: 'Professional skin prep & touch-up regimen' },
      { bm: 'Formulasi halal mesra wudhu & tahan lama', en: 'Wudhu-friendly halal long-wear formulation' },
    ],
    recommendedFor: {
      bm: 'Pengantin yang melangsungkan kedua-dua majlis',
      en: 'Brides hosting both ceremonies',
    },
  },

  // 4. Engagement
  {
    id: 'engagement',
    name: {
      bm: 'Pertunangan (Engagement)',
      en: 'Engagement',
    },
    category: 'wedding',
    price: 180,
    duration: {
      bm: '1.5 Jam',
      en: '1.5 Hours',
    },
    image: '/images/High Tea.jpeg',
    description: {
      bm: 'Gaya manis, segar dan berhias lembut untuk majlis pertunangan dan merisik.',
      en: 'Sweet, fresh, and gentle glow tailored for engagement and family introduction ceremonies.',
    },
    inclusions: [
      { bm: 'Tona Peachy / Dusty Rose Romantik', en: 'Romantic peachy / dusty rose tones' },
      { bm: 'Solekan kening natural kemas', en: 'Neatly groomed natural brows' },
      { bm: 'Skin prep ringan dan berseri', en: 'Lightweight dewy skin prep' },
      { bm: 'Pilihan add-on hijab styling RM20', en: 'Optional basic hijab styling add-on RM20' },
    ],
    recommendedFor: {
      bm: 'Bakal tunang & majlis merisik',
      en: 'Engagement ceremonies & ring exchanges',
    },
  },

  // 5. Bridesmaid / Family / Graduation / Event (RM165)
  {
    id: 'bridesmaid-family-event',
    name: {
      bm: 'Bridesmaid / Family / Graduasi / Event',
      en: 'Bridesmaid / Family / Graduation / Event',
    },
    category: 'occasion',
    price: 165,
    duration: {
      bm: '1 Jam / Pax',
      en: '1 Hour / Pax',
    },
    popular: true,
    image: '/images/Bridesmaid.jpeg',
    description: {
      bm: 'Solekan segar & berseri untuk bridesmaid, ahli keluarga, graduan konvokesyen, atau majlis makan malam.',
      en: 'Radiant look tailored for bridesmaids, bridal family, graduation portraits, or gala dinners.',
    },
    inclusions: [
      { bm: 'Kemasan Natural Glow / Soft Glamour', en: 'Natural Glow / Soft Glamour finish' },
      { bm: 'Skin prep hidrasi mesra wudhu', en: 'Wudhu-friendly hydration skin prep' },
      { bm: 'Disesuaikan mengikut tema majlis & pakaian', en: 'Customized for event theme & outfit' },
      { bm: 'Pilihan add-on hijab styling RM20', en: 'Optional basic hijab styling add-on RM20' },
    ],
    recommendedFor: {
      bm: 'Bridesmaid, keluarga pengantin, graduan & jemputan dinner',
      en: 'Bridesmaids, family entourage, graduates & dinner guests',
    },
  },

  // 10. Walk-in Studio
  {
    id: 'walk-in',
    name: {
      bm: 'Walk-In Studio',
      en: 'Walk-In Studio Service',
    },
    category: 'occasion',
    price: 115,
    duration: {
      bm: '45 Minit - 1 Jam',
      en: '45 Mins - 1 Hour',
    },
    popular: true,
    image: "/images/Mother's Bride 2.jpeg",
    description: {
      bm: 'Pilihan paling jimat! Hadir terus ke studio MUA di Melaka Tengah tanpa caj pengangkutan.',
      en: 'Best budget-friendly option! Visit MUA studio directly in Melaka Tengah with RM0 travel fee.',
    },
    inclusions: [
      { bm: 'Kadar paling mampu milik serendah RM115', en: 'Most affordable rate starting at RM115' },
      { bm: 'Tiada caj pengangkutan (RM0 travel fee)', en: 'Zero transportation charge (Studio visit)' },
      { bm: 'Sangat disarankan untuk Masjid Tanah & Alor Gajah', en: 'Highly recommended for Masjid Tanah & Alor Gajah clients' },
      { bm: 'Kemasan natural berseri & skin prepping rapi', en: 'Radiant natural finish with dedicated skin prep' },
    ],
    recommendedFor: {
      bm: 'Klien yang inginkan penjimatan maksimum',
      en: 'Clients seeking maximum savings',
    },
  },
];

export const DISCLAIMER_POINTS: TermItem[] = [
  {
    badge: { bm: 'Harga Tetap', en: 'Fixed Pricing' },
    title: {
      bm: 'Harga Tidak Boleh Dirunding (No Price Bargaining)',
      en: 'Prices are strictly non-negotiable',
    },
    detail: {
      bm: 'Harga tidak boleh dinegotiate kerana sudah sangat affordable dan mengikut standard semasa bagi menjamin kualiti produk dan sentuhan MUA.',
      en: 'Prices are non-negotiable as they are already set at the most affordable rate according to current industry standards.',
    },
  },
  {
    badge: { bm: 'Deposit Tetap', en: 'Fixed Deposit' },
    title: {
      bm: 'Deposit Tetap MYR 50 Untuk Kunci Tarikh (Date Lock)',
      en: 'Fixed MYR 50 Deposit to lock date and slot',
    },
    detail: {
      bm: 'Bayaran deposit tetap sebanyak MYR 50 diperlukan untuk mengunci slot bagi semua jenis pakej. Pembatalan saat akhir adalah tertakluk kepada deposit yang tidak dikembalikan.',
      en: 'A fixed deposit of MYR 50 is required to confirm and lock your booking slot for any package. Last-minute cancellations are non-refundable.',
    },
  },
  {
    badge: { bm: 'Hijab Styling', en: 'Hijab Styling' },
    title: {
      bm: 'Servis Basic Hijab Styling (Add-On RM20)',
      en: 'Basic Hijab Styling Service (Add-on RM20)',
    },
    detail: {
      bm: 'Untuk perkhidmatan kemasan basic hijab styling, terdapat caj tambahan serendah RM20 sahaja bagi setiap pax.',
      en: 'Basic hijab styling is available as an affordable add-on at RM20 per pax.',
    },
  },
  {
    badge: { bm: 'Awal Pagi', en: 'Early Morning' },
    title: {
      bm: 'Makeup Awal Pagi (Add-On RM20)',
      en: 'Early Morning Makeup (Add-on RM20)',
    },
    detail: {
      bm: 'Untuk sesi solekan awal pagi (early morning session sebelum 7:00 AM), terdapat caj tambahan RM20.',
      en: 'For early morning makeup appointments (before 7:00 AM), an add-on of RM20 applies.',
    },
  },
  {
    badge: { bm: 'Pengangkutan', en: 'Transportation' },
    title: {
      bm: 'Kadar Caj Pengangkutan Melaka',
      en: 'Melaka Transportation Fees',
    },
    detail: {
      bm: 'Harga makeup tidak termasuk caj pengangkutan. Kawasan Bandaraya Melaka RM20 sahaja. Masjid Tanah dan Alor Gajah RM50. Walk-in studio percuma RM0.',
      en: 'Makeup prices exclude transportation. Melaka City area is RM20 only. Masjid Tanah and Alor Gajah are RM50. Walk-in studio visit is RM0.',
    },
  },
  {
    badge: { bm: 'Muslimah', en: 'Muslimah Only' },
    title: {
      bm: 'Perkhidmatan Pengantin Perempuan Sahaja (No Groom)',
      en: 'Female & Bride service only (No groom)',
    },
    detail: {
      bm: 'MUA hanya menyediakan perkhidmatan solekan untuk pengantin perempuan dan wanita. Tiada bulu mata palsu atau kanta lekap disediakan.',
      en: 'MUA strictly caters to brides and women only. No fake lashes or contact lenses provided.',
    },
  },
];

// Gallery strictly organized by type of makeup
export const PORTFOLIO_GALLERY: PortfolioItem[] = [
  {
    id: 'p-sanding',
    title: {
      bm: 'Majlis Sanding & Resepsi',
      en: 'Wedding Reception (Sanding)',
    },
    category: 'sanding',
    image: '/images/Sanding.jpeg',
    lookType: { bm: 'Sanding & Pelamin', en: 'Reception & Dais' },
    finish: { bm: 'High-Definition Radiant Glow', en: 'High-Definition Radiant Glow' },
    notes: {
      bm: 'Solekan berseri di bawah lampu pelamin dipadankan dengan tiara pearl dan veil renda putih yang anggun.',
      en: 'Radiant look under stage lights paired with pearl tiara and delicate white lace veil.',
    },
    productsHighlight: {
      bm: 'Camera-safe foundation, wudhu-friendly skincare, moisture lock setting mist.',
      en: 'Camera-safe foundation, wudhu-friendly skincare, moisture lock setting mist.',
    },
  },
  {
    id: 'p-nikah',
    title: {
      bm: 'Akad Nikah Soft Glam',
      en: 'Solemnization (Nikah) Soft Glam',
    },
    category: 'nikah',
    image: '/images/Sanding_Updated.png',
    lookType: { bm: 'Akad Nikah', en: 'Solemnization' },
    finish: { bm: 'Luminous Dewy Glass Skin', en: 'Luminous Dewy Glass Skin' },
    notes: {
      bm: 'Sentuhan blush merah jambu lembut dan bibir natural glossy. Bulu mata asli dilentik rapi tanpa bulu mata palsu, anggun dan sopan.',
      en: 'Soft pink blush and natural glossy lips. Genuine lashes curled neatly without fake falsies, elegant and modest.',
    },
    productsHighlight: {
      bm: 'Skin prep hidrasi mawar, serum foundation ringan, kosmetik halal telus wudhu.',
      en: 'Rose hydration skin prep, lightweight serum foundation, halal wudhu-permeable cosmetics.',
    },
  },
  {
    id: 'p-bridesmaid',
    title: {
      bm: 'Bridesmaid & Pengiring',
      en: 'Bridesmaid Entourage',
    },
    category: 'bridesmaid',
    image: '/images/Bridesmaid.jpeg',
    lookType: { bm: 'Bridesmaid Look', en: 'Bridesmaid Look' },
    finish: { bm: 'Fresh Youthful Glow', en: 'Fresh Youthful Glow' },
    notes: {
      bm: 'Solekan pengiring pengantin yang kemas, menaikkan seri wajah manis sedondon sepanjang hari majlis.',
      en: 'Neat, sweet entourage makeup enhancing coordinated radiance throughout the celebrations.',
    },
    productsHighlight: {
      bm: 'Lightweight dewy base, gentle winged liner, soft glossy lip tint.',
      en: 'Lightweight dewy base, gentle winged liner, soft glossy lip tint.',
    },
  },
  {
    id: 'p-dinner',
    title: {
      bm: 'Annual Dinner & Event',
      en: 'Annual Dinner & Evening Event',
    },
    category: 'dinner',
    image: '/images/Dinner.jpeg',
    lookType: { bm: 'Dinner & Malam Gala', en: 'Dinner & Gala Evening' },
    finish: { bm: 'Sophisticated Soft Glam', en: 'Sophisticated Soft Glam' },
    notes: {
      bm: 'Kemasan sofistikated yang tahan suhu pendingin hawa dewan makan malam tanpa rasa tebal.',
      en: 'Sophisticated finish enduring air-conditioned banquet halls comfortably without feeling heavy.',
    },
    productsHighlight: {
      bm: 'Hydrating base, neutral peach contouring, non-drying lip lacquer.',
      en: 'Hydrating base, neutral peach contouring, non-drying lip lacquer.',
    },
  },
  {
    id: 'p-mother',
    title: {
      bm: 'Mother of the Bride (Keluarga)',
      en: 'Mother of the Bride (Family)',
    },
    category: 'family',
    image: "/images/Mother's Bride 1.jpeg",
    lookType: { bm: 'Ibu Pengantin & Keluarga', en: 'Mother of Bride & Family' },
    finish: { bm: 'Youthful Lifting Smooth Finish', en: 'Youthful Lifting Smooth Finish' },
    notes: {
      bm: 'Solekan awet muda menaikkan seri ibu pengantin. Formula anti-crease yang tidak merekah pada garisan halus.',
      en: 'Youthful lifting makeup for mother of the bride. Anti-crease formula that does not settle into fine lines.',
    },
    productsHighlight: {
      bm: 'Mature skin peptide prep, soft blurring velvet foundation, dignified mauve blush.',
      en: 'Mature skin peptide prep, soft blurring velvet foundation, dignified mauve blush.',
    },
  },
  {
    id: 'p-engagement',
    title: {
      bm: 'Pertunangan & Merisik',
      en: 'Engagement & Merisik',
    },
    category: 'engagement',
    image: '/images/High Tea.jpeg',
    lookType: { bm: 'Pertunangan & Merisik', en: 'Engagement Look' },
    finish: { bm: 'Romantic Peach Rose Soft Glam', en: 'Romantic Peach Rose Soft Glam' },
    notes: {
      bm: 'Sentuhan manis tona peach dan rose lembut yang menaikkan seri wajah bakal tunang dengan kemasan satin.',
      en: 'Sweet peachy and soft rose notes elevating the bride-to-be natural radiance with satin glow.',
    },
    productsHighlight: {
      bm: 'Hydrating base primer, peachy cream blush, long-wear lip tint.',
      en: 'Hydrating base primer, peachy cream blush, long-wear lip tint.',
    },
  },
  {
    id: 'p-glass-skin',
    title: {
      bm: 'Glass Skin Glow & Walk-In Studio',
      en: 'Glass Skin Glow & Walk-In Studio',
    },
    category: 'glass-skin',
    image: "/images/Mother's Bride 2.jpeg",
    lookType: { bm: 'Glass Skin Semulajadi', en: 'Natural Glass Skin' },
    finish: { bm: 'Luminous Dewy Skin-Like Glow', en: 'Luminous Dewy Skin-Like Glow' },
    notes: {
      bm: 'Tekstur kulit sebenar yang lembap dan glowing bercahaya tanpa lapisan tebal foundation.',
      en: 'Genuine dewy skin texture with a radiant glow without heavy cakey layers.',
    },
    productsHighlight: {
      bm: 'Hyaluronic acid prep, illuminating glow drops, breathable sheer base.',
      en: 'Hyaluronic acid prep, illuminating glow drops, breathable sheer base.',
    },
  },
  {
    id: 'p-hightea',
    title: {
      bm: 'High Tea & Photoshoot',
      en: 'High Tea & Studio Photoshoot',
    },
    category: 'hightea',
    image: '/images/Photoshoot 2.jpeg',
    lookType: { bm: 'Hi-Tea & Photoshoot', en: 'Hi-Tea & Studio Shoot' },
    finish: { bm: 'Daytime Fresh Bloom', en: 'Daytime Fresh Bloom' },
    notes: {
      bm: 'Gaya santai berdimensi kemas di hadapan lensa kamera untuk sesi outdoor, gathering atau minum petang.',
      en: 'Relaxed yet photogenic dimension before camera lenses for outdoor sessions, gatherings or afternoon tea.',
    },
    productsHighlight: {
      bm: 'Breathable day tint, soft peachy cheeks, natural brow grooming.',
      en: 'Breathable day tint, soft peachy cheeks, natural brow grooming.',
    },
  },
  {
    id: 'p-sambut-menantu',
    title: {
      bm: 'Majlis Sambut Menantu',
      en: 'Majlis Sambut Menantu',
    },
    category: 'sambut-menantu',
    image: '/images/Majlis_Sambut_Menantu.jpeg',
    lookType: { bm: 'Majlis Sambut Menantu', en: 'Reception (Sambut Menantu)' },
    finish: { bm: 'Radiant Royal Soft Glam', en: 'Radiant Royal Soft Glam' },
    notes: {
      bm: 'Solekan anggun dan berseri meraikan majlis sambut menantu dengan kemasan tahan lama, segar dan selesa.',
      en: 'Elegant, radiant glow celebrating welcoming the bride reception ceremony with comfortable long-lasting finish.',
    },
    productsHighlight: {
      bm: 'Hydrating base, soft defined lashes, radiant blush, wudhu-friendly skincare.',
      en: 'Hydrating base, soft defined lashes, radiant blush, wudhu-friendly skincare.',
    },
  },
  {
    id: 'p-graduasi',
    title: {
      bm: 'Graduasi',
      en: 'Graduation',
    },
    category: 'graduation',
    image: '/images/Graduasi_New.jpeg',
    lookType: { bm: 'Solekan Graduasi / Konvo', en: 'Graduation / Convocation' },
    finish: { bm: 'Fresh Youthful Photo-Ready Glow', en: 'Fresh Youthful Photo-Ready Glow' },
    notes: {
      bm: 'Kemasan solekan kemas dan berseri tahan seharian di bawah mortar board dan dewan konvokesyen.',
      en: 'Neat, fresh photo-ready makeup lasting all day under graduation cap and convocation auditorium lights.',
    },
    productsHighlight: {
      bm: 'Sweat-resistant lightweight base, soft peachy lips, natural neat brows.',
      en: 'Sweat-resistant lightweight base, soft peachy lips, natural neat brows.',
    },
  },
];

export interface BusinessStatItem {
  id: string;
  value: string;
  label: { bm: string; en: string };
  description: { bm: string; en: string };
  badge?: { bm: string; en: string };
}

export const BUSINESS_STATS: BusinessStatItem[] = [
  {
    id: 'clients',
    value: '1,000+',
    label: { bm: 'Klien Disolek', en: 'Clients Dolled Up' },
    description: {
      bm: 'Pengantin, bridesmaid & klien peribadi seluruh Melaka sejak 2018',
      en: 'Brides, bridesmaids & personal clients across Melaka since 2018',
    },
    badge: { bm: 'Dipercayai', en: 'Trusted' },
  },
  {
    id: 'experience',
    value: '6+ Tahun',
    label: { bm: 'Pengalaman Seni MUA', en: 'Years Experience' },
    description: {
      bm: 'Artistry profesional disokong Sijil Rasmi KKKM Melaka',
      en: 'Professional artistry backed by official KKKM certification',
    },
    badge: { bm: 'Bertauliah', en: 'Certified' },
  },
  {
    id: 'rating',
    value: '5.0 ★★★★★',
    label: { bm: 'Penarafan Penuh Bintang', en: '5-Star Flawless Rating' },
    description: {
      bm: '100% maklum balas berpuas hati & ulasan ikhlas daripada klien',
      en: '100% genuine satisfied reviews from real brides and clients',
    },
    badge: { bm: '5 Bintang', en: '5-Star Review' },
  },
  {
    id: 'deposit',
    value: 'MYR 50',
    label: { bm: 'Deposit Tetap Kunci Slot', en: 'Fixed Deposit Slot Lock' },
    description: {
      bm: 'Kadar tetap MYR 50 bagi semua jenis pakej untuk mengunci tarikh majlis',
      en: 'Flat MYR 50 deposit across all packages to lock event date',
    },
    badge: { bm: 'Mampu Milik', en: 'Best Value' },
  },
  {
    id: 'lashes',
    value: '100%',
    label: { bm: 'Tanpa Bulu Mata Palsu', en: 'No Fake Lashes' },
    description: {
      bm: 'Lentikan maskara asli, mesra wudhu & patuh syariah tanpa rasa berat',
      en: 'Naturally curled lashes, wudhu-friendly & modest without heavy falsies',
    },
    badge: { bm: 'Semulajadi', en: 'Natural' },
  },
  {
    id: 'crack-free',
    value: '0%',
    label: { bm: 'Rekahan (Crack-Free)', en: 'Zero Crack / Melting' },
    description: {
      bm: 'Ketahanan terbukti sehingga 6+ jam dalam cuaca panas Melaka',
      en: 'Proven 6+ hours endurance in warm humid weather without cracking',
    },
    badge: { bm: 'Tahan Lama', en: 'Long-Wear' },
  },
];

// Testimonials: EXACT 4 testimonials from the user with rating (5 stars), testimonial text, and name only
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aishah',
    rating: 5,
    review: {
      bm: 'thank you kak untuk makeup tadi! suka sangat, rasa cantik terus hehe 💕 kak memang terbaik, hasil dia smooth and lawa sangat. service pun selesa je, tak rasa awkward langsung. memang puas hati gila. nanti kalau akak nak guna canvas lagi apa apa inform je tau 🫶🏻.',
      en: 'thank you kak untuk makeup tadi! suka sangat, rasa cantik terus hehe 💕 kak memang terbaik, hasil dia smooth and lawa sangat. service pun selesa je, tak rasa awkward langsung. memang puas hati gila. nanti kalau akak nak guna canvas lagi apa apa inform je tau 🫶🏻.',
    },
  },
  {
    id: 't-2',
    name: 'Munirah',
    rating: 5,
    review: {
      bm: 'akakkkk, makeup akak masih bertahan sampai sekaranggg ye! takdee crackkkk langsung 😍😍😍 sayaaa sukaaaa 💕💕💕',
      en: 'akakkkk, makeup akak masih bertahan sampai sekaranggg ye! takdee crackkkk langsung 😍😍😍 sayaaa sukaaaa 💕💕💕',
    },
  },
  {
    id: 't-3',
    name: 'Nadirah',
    rating: 5,
    review: {
      bm: 'pakai kluar time panas tgh hari tu g makan apa semua , so far takde crack . Makin lama dia nampal mcm makin glowing . Ramai kawan2 ws kata cantek makeup nya . Hehee , tq akk',
      en: 'pakai kluar time panas tgh hari tu g makan apa semua , so far takde crack . Makin lama dia nampal mcm makin glowing . Ramai kawan2 ws kata cantek makeup nya . Hehee , tq akk',
    },
  },
  {
    id: 't-4',
    name: 'Naleeyna',
    rating: 5,
    review: {
      bm: 'assalammualaikum thankyou sebab sudi makeup saya ni update feedback makeup 🥺 Saya really love the overall look, especially the base & eye makeup! Saya suka sebab nampak natural, clean and tak terlalu heavy. This pic is after around 6 hours, saya mostly indoor je sebab ada class kena ganti ajar.After 6 hours, base masih nampak pretty good, tak banyak crack atau patchy. Cuma dekat nose area dah. Overall saya memang puas hati sebab makeup still nampak fresh, soft & skin-like. Thank youuu, saya really love how you did my makeup. 🥺🫶🏻',
      en: 'assalammualaikum thankyou sebab sudi makeup saya ni update feedback makeup 🥺 Saya really love the overall look, especially the base & eye makeup! Saya suka sebab nampak natural, clean and tak terlalu heavy. This pic is after around 6 hours, saya mostly indoor je sebab ada class kena ganti ajar.After 6 hours, base masih nampak pretty good, tak banyak crack atau patchy. Cuma dekat nose area dah. Overall saya memang puas hati sebab makeup still nampak fresh, soft & skin-like. Thank youuu, saya really love how you did my makeup. 🥺🫶🏻',
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: {
      bm: 'Berapakah jumlah deposit untuk mengunci tarikh majlis?',
      en: 'How much is the deposit to lock the event date?',
    },
    answer: {
      bm: 'Kadar deposit adalah tetap sebanyak MYR 50 sahaja untuk semua pakej tanpa mengira pakej yang dipilih. Baki bayaran selebihnya dijelaskan pada hari majlis.',
      en: 'The deposit is strictly fixed at MYR 50 for all packages regardless of which package is selected. The remaining balance is payable on the event day.',
    },
  },
  {
    question: {
      bm: 'Bolehkah saya minta atau bawa bulu mata palsu sendiri?',
      en: 'Can I bring or request fake eyelashes (falsies)?',
    },
    answer: {
      bm: 'Tidak boleh. Prinsip dan identiti Yasmin Yusuf adalah 100% natural and minimalist makeup tanpa bulu mata palsu. Kami menggunakan teknik lentikan teliti dan maskara halal berkualiti tinggi yang menyerlahkan mata anda secara anggun tanpa mengubah rupa asli.',
      en: 'No. Yasmin Yusuf\'s hallmark is 100% natural, minimalist makeup strictly with no fake lashes. We use precise curling and premium mascara to accentuate your natural eyes gracefully.',
    },
  },
  {
    question: {
      bm: 'Berapakah caj tambahan untuk basic hijab styling & makeup awal pagi?',
      en: 'How much are the add-ons for hijab styling and early morning sessions?',
    },
    answer: {
      bm: 'Servis basic hijab styling adalah add on RM20 bagi setiap pax. Untuk sesi solekan awal pagi (sebelum 7:00 AM), terdapat caj tambahan RM20.',
      en: 'Basic hijab styling is an add-on at RM20 per pax. For early morning appointments (before 7:00 AM), an add-on of RM20 applies.',
    },
  },
  {
    question: {
      bm: 'Berapakah kadar caj pengangkutan di Melaka?',
      en: 'What are the transportation rates across Melaka?',
    },
    answer: {
      bm: 'Kawasan Bandaraya Melaka adalah RM20 sahaja. Kawasan Masjid Tanah dan Alor Gajah adalah RM50. Anda juga sangat dialu-alukan untuk walk-in ke studio di Melaka Tengah dengan caj pengangkutan RM0 (Percuma).',
      en: 'Melaka City area is RM20 only. Masjid Tanah and Alor Gajah are RM50. You are also welcome to visit our studio in Melaka Tengah with RM0 transportation fee.',
    },
  },
  {
    question: {
      bm: 'Bagaimana cara untuk mengunci tarikh dan bayar deposit?',
      en: 'How do I lock the date and pay the MYR 50 deposit?',
    },
    answer: {
      bm: 'Anda boleh gunakan Kira Sebut Harga di laman ini atau terus WhatsApp kami di +6013-4775513. Selepas tarikh disemak dan kosong, anda hanya perlu bayar deposit tetap MYR 50 melalui pemindahan bank (online transfer) untuk mengunci tarikh majlis.',
      en: 'Use the Price Calculator on this website or chat directly on WhatsApp at +6013-4775513. Once your date is verified, simply pay the fixed MYR 50 deposit via online bank transfer to secure the slot.',
    },
  },
];
