export const business = {
  name: "Peffers Driving School",
  instructor: "Andrew Peffers",
  shortName: "Peffers",
  phoneDisplay: "07756 317023",
  phoneHref: "tel:+447756317023",
  smsHref: "sms:+447756317023",
  facebookUrl:
    "https://www.facebook.com/p/Peffers-Driving-School-61579952023348/",
  googleUrl:
    "https://www.google.com/maps/place/Peffers+Driving+school/data=!4m7!3m6!1s0x671a0b81e303b4f3:0xb25fb2864c8e4ce9!8m2!3d51.670229!4d-3.9896716!16s%2Fg%2F11srrk99m3!19sChIJ87QD44ELGmcR6UyOTIayX7I",
  heroImage: "/images/andrew-peffers.webp",
  rating: "5.0",
  reviewCount: 69,
  basedIn: "Pontardawe, Swansea area",
  areas: [
    "Pontardawe",
    "Swansea",
    "Clydach",
    "Morriston",
    "Llansamlet",
    "Gorseinon",
    "Sketty",
    "Uplands",
    "Neath",
    "Port Talbot",
    "Brynaman",
    "Llanelli",
    "Ystradgynlais",
  ],
};

export const navigation = [
  { label: "Lessons", href: "#lessons" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Andy", href: "#about" },
  { label: "Areas", href: "#areas" },
  { label: "FAQs", href: "#lesson-faqs" },
];

export const reviews = [
  {
    name: "Kristofferson Fiddle",
    rating: 5,
    source: "Google review",
    quote:
      "Andrew is the nicest, most genuine, down to earth instructor you will ever meet. He explains driving concepts with grace and kindness and his effortless chats will have you feeling calm and confident before you know what hit you.",
  },
  {
    name: "Ash Wills",
    rating: 5,
    source: "Google review",
    quote:
      "Andy is an extremely patient and polite driving instructor, who helped me to pass first time in just over 20 hours of lessons. He always has a smile and gives you clear direction when it comes to correcting mistakes.",
  },
  {
    name: "Kunle Osinubi",
    rating: 5,
    source: "Google review",
    quote:
      "Andy is a great driving instructor and an even better human being. Thanks for your tuition, company, advice and helping me pass my test.",
  },
];

export const lessonTypes = [
  {
    number: "01",
    icon: "start",
    title: "First lessons",
    eyebrow: "Start from zero",
    description:
      "Learn the basics, including moving off, steering and junctions. We start at a pace that suits you.",
    note: "For new learners",
  },
  {
    number: "02",
    icon: "refresh",
    title: "Refresher lessons",
    eyebrow: "Get your rhythm back",
    description:
      "Had a break from driving? Go over the basics again and build your confidence.",
    note: "For returning drivers",
  },
  {
    number: "03",
    icon: "test",
    title: "Test preparation",
    eyebrow: "Make test day feel familiar",
    description:
      "Practise independent driving, difficult junctions and mock tests so you know what to expect on test day.",
    note: "For test-ready learners",
  },
  {
    number: "04",
    icon: "theory",
    title: "Theory support",
    eyebrow: "Theory help",
    description:
      "Get help with theory topics and hazard perception alongside your driving lessons.",
    note: "Alongside your tuition",
  },
] as const;

export const lessonPlans = [
  {
    number: "01",
    title: "Single lesson",
    subtitle: "Pay as you go",
    price: "£39",
    priceDetail: "per hour",
    description:
      "For a first lesson, a refresher or a one-off session.",
    meta: "Pay as you go",
    tag: "Flexible start",
  },
  {
    number: "02",
    title: "1.5 hr",
    subtitle: "More time to settle in",
    price: "£58.50",
    priceDetail: "per lesson",
    description:
      "More time to practise a route or work on a few skills in one session.",
    meta: "Flexible length",
    tag: "Flexible length",
  },
  {
    number: "03",
    title: "2 hour",
    subtitle: "Focused practice",
    price: "£78",
    priceDetail: "per lesson",
    description:
      "Useful for test practice, longer routes and more time behind the wheel.",
    meta: "Focused session",
    tag: "Focused session",
  },
  {
    number: "04",
    title: "6-hour block",
    subtitle: "Build a rhythm",
    price: "£222",
    priceDetail: "£37 per hour",
    description:
      "Six hours of lessons for regular practice and steady progress.",
    meta: "6-hour block",
    tag: "Save with a block",
  },
  {
    number: "05",
    title: "10-hour block",
    subtitle: "Ten-hour option",
    price: "£370",
    priceDetail: "£37 per hour",
    description:
      "Ten hours of lessons to help you prepare for your test and build confidence.",
    meta: "10-hour block",
    tag: "Best value",
  },
];

export const faqs = [
  {
    question: "Do I need a provisional licence before I start?",
    answer:
      "Yes. You need a provisional driving licence before you drive on public roads. You must also be at least 17, or 16 if you receive the enhanced rate of the mobility component of Personal Independence Payment. Bring your licence to your first lesson.",
  },
  {
    question: "How many lessons will I need before my test?",
    answer:
      "It depends on your experience, how often you practise and how quickly you pick things up. I will tell you how you are doing and when you are ready.",
  },
  {
    question: "I’m nervous about driving. Is that okay?",
    answer:
      "Yes. Tell me what worries you. I will explain things clearly and give you time to practise.",
  },
  {
    question: "Do you work with neurodivergent learners?",
    answer:
      "Yes. I have worked with neurodivergent learners and will take time to understand what helps you learn best.",
  },
  {
    question: "Do you help with the theory test?",
    answer:
      "Yes. I can help with the main theory topics and hazard perception while you learn to drive.",
  },
  {
    question: "Where do you teach?",
    answer:
      "I am based in Pontardawe and cover Swansea, Neath, Port Talbot, Brynaman, Llanelli and Ystradgynlais. If you are just outside the area, get in touch and ask.",
  },
  {
    question: "How do I book or change a lesson?",
    answer:
      "Call or text me on 07756 317023, or use the enquiry form to prepare a text with your details. We can arrange availability and lesson changes directly.",
  },
];

export function buildEnquiryText(details: {
  name: string;
  phone: string;
  postcode: string;
  lessonType: string;
  message: string;
}) {
  const lines = [
    "Hi Andrew, I’d like to enquire about driving lessons.",
    "",
    `Name: ${details.name}`,
    `Mobile: ${details.phone}`,
    `Postcode: ${details.postcode}`,
    `Lesson type: ${details.lessonType}`,
  ];

  if (details.message.trim()) {
    lines.push("", `Notes: ${details.message.trim()}`);
  }

  return lines.join("\n");
}
