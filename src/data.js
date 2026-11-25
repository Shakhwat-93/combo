// ম্যাংগো গার্ডেন — খাঁটি খেজুরের গুড়ের বিশেষ কম্বো প্যাকেজ ও বাস্তব রিভিউ
export const DELIVERY_CHARGE = 0
export const DELIVERY_START_NOTICE = '১৫ নভেম্বর থেকে ডেলিভারি শুরু, ইনশাআল্লাহ'
export const FREE_BONUS_MIN_KG = 3
export const FREE_BONUS_ITEM_NAME = '৫০০ গ্রাম ঝোলা গুড় (ফ্রি অফার)'
export const MAX_LOOSE_KG_PER_ITEM = 5
export const MAX_COMBO_PACKS = 5
export const WHATSAPP_DISPLAY = '01318-007554'
export const WHATSAPP_E164 = '8801318007554'

export const BRAND_IMAGES = {
  logo: '/img/file_00000000bb8c8208935485c59b7b5c83.png',
  combo990: '/img/combo-990.jpg',
  makerStory: '/img/file_00000000ba2c8208b0aa4b8c2b4fc3c3.png',
  craftVideo: '/img/lv_0_20261109191525.mp4',
  craftVideoPoster: '/img/lv_0_poster.jpg',
}

export const combos = [
  {
    id: 'gur-combo-990',
    title: 'মাত্র ৯৯০ টাকায় ৫ ধরনের খাঁটি খেজুরের গুড়',
    shortTitle: '৫ ধরনের গুড়ের বিশেষ কম্বো (২.৫ কেজি)',
    priceLabel: '৯৯০ কম্বো',
    price: 990,
    totalWeight: '২.৫ কেজি',
    freeDelivery: true,
    featured: true,
    badge: '🪔 বেস্ট সেলার · ৫ স্বাদ',
    deliveryText: 'হোম ডেলিভারি চার্জ একেবারেই ফ্রি!',
    items: [
      { text: 'হাফ কেজি গোল পাটালি গুড়', isFree: false },
      { text: 'হাফ কেজি ফয়েল পাটালি গুড়', isFree: false },
      { text: 'হাফ কেজি ঝোলা গুড়', isFree: false },
      { text: 'হাফ কেজি দানাদার গুড়', isFree: false },
      { text: 'হাফ কেজি চকলেট গুড়', isFree: false },
    ],
    image: '/img/combo-990.jpg',
    hasImage: true,
    pos: 'center center',
  },
]

// এই পেজে শুধু ৯৯০ টাকার বিশেষ কম্বো প্যাকেজটি থাকবে
export const gurPrices = []

export const craftSteps = [
  {
    step: '০১',
    title: 'ভোরের টাটকা রস',
    desc: 'শীতের কুয়াশা ভোর হওয়ার আগেই গাছির হাতে মাটির কলস থেকে সংগ্রহ করা খাঁটি খেজুর রস।',
  },
  {
    step: '০২',
    title: 'চিনি ও কেমিক্যালমুক্ত জ্বাল',
    desc: 'কোনো চিনি, হাইড্রোজ বা ফিটকিরি ছাড়াই শুধু কাঠের চুলায় মৃদু আঁচে ঘন করা হয়।',
  },
  {
    step: '০৩',
    title: 'হাতে গড়া পাটালি ও জার প্যাক',
    desc: 'সতেজ ঘ্রাণ অটুট রাখতে ফুড-গ্রেড লিক-প্রুফ জার ও হাইজেনিক ফয়েল ট্রেতে প্যাকিং।',
  },
  {
    step: '০৪',
    title: '১৫ নভেম্বর ডেলিভারি',
    desc: '১৫ নভেম্বর থেকে সিরিয়াল অনুযায়ী সারা বাংলাদেশে ক্যাশ অন ডেলিভারি শুরু, ইনশাআল্লাহ।',
  },
]

export const customerReviews = [
  {
    id: 'rev-unbox',
    image: '/img/review/FB_IMG_1794229112421~2.jpg.jpeg',
    hasPhotoHighlight: true,
    photoFocus: 'center 62%',
    channel: 'হোয়াটসঅ্যাপ আনবক্সিং',
    badge: '📦 আনবক্সিং ছবি',
    quote: 'আপনাদের গুড় পেয়ে ভালো লাগলো। এইমাত্র হাতে পেলাম। ধন্যবাদ।',
    customer: 'সম্মানিত ক্রেতা · ক্যাশ অন ডেলিভারি',
  },
  {
    id: 'rev-jars',
    image: '/img/review/FB_IMG_1794229115579~2.jpg.jpeg',
    hasPhotoHighlight: true,
    photoFocus: 'center 56%',
    channel: 'ফেসবুক ইনবক্স ছবি',
    badge: '🍯 লিক-প্রুফ প্যাক',
    quote: 'ধন্যবাদ ভাইয়া আজকেই হাতে পেয়েছি! গুড়গুলি অনেক ভালো!',
    customer: 'ভেরিফাইড ক্রেতা · কম্বো প্যাকেজ',
  },
  {
    id: 'rev-chocolate',
    image: '/img/review/FB_IMG_1794229127862~2.jpg.jpeg',
    hasPhotoHighlight: false,
    photoFocus: 'center 56%',
    channel: 'হোয়াটসঅ্যাপ রিভিউ',
    badge: '🍫 চকলেট গুড়',
    quote: 'আপনাদের চকলেট গুড় যেটা দিয়েছেন... খুব ই মজা! আমার বাচ্চারা তো পছন্দ করছেই, আমারও খুব পছন্দ।',
    customer: 'নিয়মিত ক্রেতা · ফ্যামিলি কম্বো',
  },
  {
    id: 'rev-repeat',
    image: '/img/review/FB_IMG_1794229143718~2.jpg.jpeg',
    hasPhotoHighlight: false,
    photoFocus: 'center 42%',
    channel: 'ফেসবুক ইনবক্স',
    badge: '🔁 রিপিট অর্ডার',
    quote: 'আপনাদের গুড়ের কোয়ালিটি খুব ভালো ছিল। আমি আরেকটা অর্ডার করতে চাচ্ছি।',
    customer: 'রিপিট কাস্টমার · ২য় অর্ডার',
  },
  {
    id: 'rev-original',
    image: '/img/review/FB_IMG_1794229147651~2.jpg.jpeg',
    hasPhotoHighlight: false,
    photoFocus: 'center 75%',
    channel: 'হোয়াটসঅ্যাপ রিভিউ',
    badge: '⭐ ১০০% অরিজিনাল',
    quote: 'আলহামদুলিল্লাহ ভাই গুড়গুলো খুব ভালো মানের ছিল। অরজিনাল, ধন্যবাদ ভাই আপনাদের সবাইকে।',
    customer: 'সন্তুষ্ট ক্রেতা · খাঁটি খেজুরের গুড়',
  },
  {
    id: 'rev-ratna',
    image: '/img/review/FB_IMG_1794229132562~2.jpg.jpeg',
    hasPhotoHighlight: false,
    photoFocus: 'center 58%',
    channel: 'ফেসবুক ইনবক্স',
    badge: '👌 যেমন চেয়েছিলাম',
    quote: 'আলহামদুলিল্লাহ সত্যি কম্বো টি খুব সুন্দর, যেমনটা চেয়েছিলাম ঠিক তেমনই খুব সুন্দর মিষ্টি।',
    customer: 'ভেরিফাইড ক্রেতা · কম্বো প্যাক',
  },
  {
    id: 'rev-zannatul',
    image: '/img/review/FB_IMG_1794229123628~2.jpg.jpeg',
    hasPhotoHighlight: false,
    photoFocus: 'center 56%',
    channel: 'ফেসবুক ইনবক্স',
    badge: '🌿 সন্তুষ্ট গ্রাহক',
    quote: 'অনেক অনেক ধন্যবাদ আপনাদের, এত ভালো কম্বো দেওয়ার জন্য। আপনারা আরো অনেক দূর এগিয়ে যান।',
    customer: 'ভেরিফাইড ক্রেতা · ম্যাংগো গার্ডেন',
  },
]

export const products = combos.map((c) => ({
  id: c.id,
  name: c.shortTitle,
  price: c.price,
  unit: 'প্যাকেজ',
  image: c.image,
}))

export const orderOptions = combos.map((c) => ({
  id: c.id,
  label: c.shortTitle,
  priceLabel: c.priceLabel,
  sub: `ফ্রি হোম ডেলিভারি · সর্বমোট ${c.totalWeight}`,
  totalWeight: c.totalWeight,
  items: c.items,
  price: c.price,
  freeDelivery: true,
  min: 1,
  max: MAX_COMBO_PACKS,
  unit: 'প্যাকেজ',
  image: c.image,
  hasImage: c.hasImage,
  isCombo: true,
}))
