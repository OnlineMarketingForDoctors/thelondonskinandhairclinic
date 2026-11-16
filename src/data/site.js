// Content for the homepage. Links point at the current live site until the
// matching pages are rebuilt on the new site.
export const OLD = 'https://thelondonskinandhairclinic.com';
const u = (slug) => `${OLD}/${slug}/`;

export const contact = {
  phone: '020 7183 4565',
  phoneHref: 'tel:+442071834565',
  email: 'doctor@LSAH.co.uk',
  address: ['233 High Holborn', 'London', 'WC1V 7DN'],
  hours: [
    ['Monday to Friday', '9:00am to 6:00pm'],
    ['Saturday', '9:30am to 5:00pm'],
  ],
  booking: u('book-online'),
  maps: 'https://www.google.com/maps/search/?api=1&query=The+London+Skin+and+Hair+Clinic+233+High+Holborn+London+WC1V+7DN',
  instagram: 'https://www.instagram.com/thelondonskinandhairclinic/',
  googleReviews: 'https://www.google.com/maps/search/?api=1&query=The+London+Skin+and+Hair+Clinic',
};

export const conditions = [
  {
    id: 'skin',
    title: 'Skin conditions',
    blurb: 'Rashes, spots, lumps, moles and pigmentation, from first diagnosis to long-term care.',
    image: '/images/ai/skin-profile.webp',
    alt: 'Profile of a woman with clear, healthy skin lit against a navy backdrop',
    href: u('dermatology-conditions'),
    links: [
      ['Acne', 'dermatology-conditions-acne'], ['Contact Dermatitis', 'contact-dermatitis'], ['Cysts', 'cysts'],
      ['Eczema and Dermatitis', 'eczema-and-dermatitis'], ['Fungal Skin Infection', 'fungal-skin-infection'],
      ['Hyperhidrosis', 'hyperhidrosis'], ['Impetigo', 'impetigo'], ['Keloids', 'keloids'], ['Melasma', 'melasma'],
      ['Milia', 'milia'], ['Moles', 'moles'], ['Onycholysis', 'onycholysis'], ['Psoriasis', 'psoriasis'],
      ['Rosacea', 'rosacea'], ['Scabies', 'scabies'], ['Skin Cancer', 'skin-cancer'], ['Urticaria', 'urticaria'],
      ['Vitiligo', 'vitiligo'], ['Warts and Verrucas', 'warts-verrucas'],
    ],
  },
  {
    id: 'hair',
    title: 'Hair loss and scalp',
    blurb: 'Thinning, shedding, patches and an itchy or flaky scalp, assessed by hair specialists.',
    image: '/images/ai/hair-scalp.webp',
    alt: 'A woman running her fingers through long dark hair, seen from behind',
    href: u('dermatology-conditions'),
    links: [
      ['Alopecia Areata', 'alopecia-areata'], ['Androgenetic Alopecia (Female)', 'androgenetic-alopecia-female'],
      ['Androgenetic Alopecia (Male)', 'androgenetic-alopecia-male'], ['Excessive Dandruff', 'excessive-dandruff'],
      ['Folliculitis', 'folliculitis'], ['Frontal Fibrosing Alopecia', 'frontal-fibrosing-alopecia'],
      ['Lichen Planopilaris', 'lichen-planopilaris'], ['Scarring Alopecia', 'scarring-alopecia'],
      ['Seborrhoeic Dermatitis (Scalp)', 'seborrhoeic-dermatitis-scalp'], ['Tinea Capitis', 'tinea-capitis'],
    ],
  },
  {
    id: 'children',
    title: 'Children and babies',
    blurb: 'Paediatric dermatology in a calm setting, with a play corner for younger patients.',
    image: '/images/photos/baby.webp',
    alt: 'A toddler sitting up on the examination couch at the clinic',
    href: u('dermatology-conditions'),
    links: [
      ['Acne', 'dermatology-conditions-acne'], ['Cradle Cap', 'cradle-cap'], ['Eczema and Dermatitis', 'eczema-and-dermatitis'],
      ['Epidermolysis Bullosa', 'epidermolysis-bullosa'], ['Haemangioma of Infancy', 'haemangioma-of-infancy'],
      ['Molluscum', 'molluscum'], ['Impetigo', 'impetigo'], ['Rosacea', 'rosacea'],
    ],
  },
  {
    id: 'sexual',
    title: 'Sexual health',
    blurb: 'Discreet, private assessment of genital skin conditions by a consultant.',
    image: '/images/ai/private-door.webp',
    alt: 'A private consultation room door with warm light behind frosted glass',
    href: u('dermatology-conditions'),
    links: [['Balanitis', 'balanitis'], ['Genital Warts', 'genital-warts']],
  },
].map((g) => ({ ...g, links: g.links.map(([label, slug]) => ({ label, href: u(slug) })) }));

export const treatments = [
  {
    id: 'skin',
    title: 'Medical skin treatments',
    summary: 'Prescription treatments, light therapies and minor surgery for acne, rosacea, psoriasis, warts and skin lesions.',
    image: '/images/photos/phototherapy-booth.webp',
    alt: 'A patient standing in the clinic’s full-body phototherapy cabinet',
    satellite: '/images/photos/cryo-smile-sm.webp',
    satelliteAlt: 'Dr Martin Wade chatting with a patient before cryotherapy',
    links: [
      ['Acne Treatment', 'acne-treatment'], ['Isotretinoin (Roaccutane)', 'isotretinoin-acne-treatment-roaccutane'],
      ['Kleresca Acne Treatment', 'kleresca-acne-treatment'], ['Kleresca Rosacea Treatment', 'kleresca-rosacea-treatment'],
      ['Photodynamic Therapy', 'photodynamic-therapy'], ['Phototherapy', 'phototherapy'], ['Cryotherapy', 'cryotherapy'],
      ['Iontophoresis', 'iontopheresis-treatment'], ['Skin Surgery', 'skin-surgery'], ['Wart Treatment', 'wart-treatment'],
    ],
  },
  {
    id: 'hair',
    title: 'Medical hair treatments',
    summary: 'Evidence-based options for alopecia and thinning hair, from injections and PRP to the latest JAK inhibitors.',
    image: '/images/photos/scalp-exam.webp',
    alt: 'A dermatologist examining a patient’s scalp with a dermatoscope',
    satellite: '/images/photos/scalp-parting-sm.webp',
    satelliteAlt: 'Close-up of a scalp parting being examined',
    links: [
      ['PRP for Hair Loss', 'prp-for-hair-loss'], ['PRP with Exosomes', 'prp-with-exosomes-hybrid-hair-loss-treatment'],
      ['Tricopat Hair Loss Treatment', 'tricopat-hair-loss-treatment'],
      ['Dutasteride Mesotherapy', 'dutasteride-mesotherapy-scalp-injections'], ['Steroid Injections', 'steroid-injections'],
      ['Trichology', 'trichology'], ['Male Pattern Balding', 'male-pattern-balding'],
      ['DCP for Alopecia Areata', 'dcp-treatment-for-alopecia-areata'],
      ['JAK Inhibitors for Alopecia Areata', 'jak-inhibitor-biologics-for-alopecia-areata'],
    ],
  },
  {
    id: 'tests',
    title: 'Diagnostics and tests',
    summary: 'Mole mapping, biopsies and allergy testing on site, so you get answers without a separate referral.',
    image: '/images/photos/dermatoscope-face.webp',
    alt: 'A dermatologist examining a patient’s face through a dermatoscope',
    satellite: '/images/ai/dermatoscope.webp',
    satelliteAlt: 'A handheld dermatoscope with its lens lit',
    links: [
      ['Mole Mapping', 'mole-mapping'], ['Skin Biopsy', 'skin-biopsy'], ['Scalp Biopsy', 'scalp-biopsy'],
      ['Patch Testing', 'patch-testing'], ['Allergy Testing', 'allergy-testing'], ['Skin Prick Allergy Test', 'skin-prick-allergy-test'],
    ],
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic treatments',
    summary: 'Doctor-led cosmetic care at our sister clinic, London Real Skin, in the same building.',
    image: '/images/ai/cosmetic.webp',
    alt: 'A clinician assessing the skin of a woman reclining on a treatment couch',
    satellite: '/images/photos/treatment-room-sm.webp',
    satelliteAlt: 'A bright treatment room at the clinic',
    external: true,
    links: [
      ['Hyperhidrosis Injections', 'https://londonrealskin.com/treatments/excessive-sweating/'],
      ['Anti-Wrinkle Injections', 'https://londonrealskin.com/treatments/anti-wrinkle-injections/'],
      ['Dermal Filler Injections', 'https://londonrealskin.com/treatments/dermal-fillers/'],
      ['Laser Skin Treatment', 'https://londonrealskin.com/treatments/sciton-bbl-hero/'],
    ],
  },
].map((g) => ({
  ...g,
  links: g.links.map(([label, slug]) => ({ label, href: slug.startsWith('http') ? slug : u(slug) })),
}));

export const team = [
  {
    id: 'wade',
    name: 'Dr Martin Wade',
    role: 'Consultant Dermatologist and Medical Director',
    letters: 'BMed Sci, MB BS, FACD',
    image: '/images/team/wade.webp',
    href: u('dermatologist-dr-martin-wade'),
    bio: [
      'Dr Martin Wade is an experienced, Australian-trained Consultant Dermatologist based at The London Skin and Hair Clinic. He is registered with the General Medical Council and is on the Specialist Register for Dermatology.',
      'He specialises in hair loss and scalp conditions in women, men and children, and is experienced in diagnosing and treating skin cancer, having trained with major Australian melanoma units. He also consults across all general dermatology, with a special interest in acne, general skin health and cosmetic dermatology.',
    ],
    focus: ['Hair loss', 'Skin cancer', 'Acne', 'Children'],
  },
  {
    id: 'clayton',
    name: 'Dr Nicola Clayton',
    role: 'Consultant Dermatologist',
    letters: 'MB, ChB, BSc, MRCP(UK) (Dermatology)',
    image: '/images/team/clayton.webp',
    href: u('dermatologist-dr-nicola-clayton'),
    bio: [
      'Dr Nicola Clayton is a British-trained Consultant Dermatologist with a special interest in hair loss and scalp conditions. Her NHS Consultant post is at West Middlesex University Hospital and Chelsea & Westminster Hospital NHS Foundation Trust, where she treats adults and paediatric patients with a wide range of general dermatological diseases.',
      'Through personal experience of widespread hair loss secondary to alopecia areata, Dr Clayton understands first-hand what it is like to have an appearance-altering condition. She sees and treats women, men and children with scalp conditions and hair loss, and takes time to understand each patient’s concerns.',
    ],
    focus: ['Alopecia', 'Scalp conditions', 'Adults and children'],
  },
  {
    id: 'crawley',
    name: 'Dr Jennifer Crawley',
    role: 'Consultant Dermatologist',
    letters: 'MBChB, BSc, MRCP UK (Derm)',
    image: '/images/team/crawley.webp',
    href: u('dermatologist-dr-jennifer-crawley'),
    bio: [
      'Dr Jennifer Crawley is a Consultant Dermatologist. Her NHS post is at University College Hospital London (UCLH). She consults on all general adult dermatology in addition to paediatric dermatology, and undertook specialist training at St John’s Institute of Dermatology.',
      'Specialist interests include psoriasis, eczema, acne, rosacea, skin cancer, lumps and bumps and mole checks. She also performs minor surgical excisions, skin biopsies, cryotherapy, steroid injections, removal of cysts and curettage and cautery.',
    ],
    focus: ['Psoriasis', 'Eczema', 'Mole checks', 'Minor surgery'],
  },
  {
    id: 'mashayekhi',
    name: 'Dr Soudeh Mashayekhi',
    role: 'Consultant Dermatologist',
    letters: 'MBBS (Distinction), BSc, MRCP (Derm), PGCert (Research)',
    image: '/images/team/mashayekhi.webp',
    href: u('dr-soudeh-mashayekhi'),
    bio: [
      'Dr Soudeh Mashayekhi is a UK trained Consultant Dermatologist who sees and treats adults and children for all skin conditions. She works as a Consultant in the NHS at the West Hertfordshire Hospitals NHS Trust.',
      'She excels in diagnosing and managing acne, eczema, psoriasis, vitiligo, nail disease, hair loss and urticaria, with a specialist interest in medical dermatology for severe skin disease that has not responded to first line treatments. She also has extensive experience in skin checks for skin cancer.',
    ],
    focus: ['Medical dermatology', 'Vitiligo', 'Skin checks', 'Keloids'],
  },
];

export const posts = [
  {
    title: 'What Causes Eczema Flare-Ups, and How Can You Reduce Them?',
    date: '2026-10-27',
    excerpt: 'Eczema has a frustrating habit of settling down for a while and then flaring up again, often just when you thought your skin had finally calmed.',
    image: '/images/ai/blog-eczema.webp',
    alt: 'Hands smoothing emollient cream onto a forearm with dry eczema patches',
    href: `${OLD}/what-causes-eczema-flare-ups-and-how-can-you-reduce-them/`,
    tag: 'Eczema',
  },
  {
    title: 'Managing Adult Breakouts: How to Control and Prevent Hormonal Acne',
    date: '2026-10-08',
    excerpt: 'Acne is usually thought of as a teenage problem, but for plenty of adults it never really goes away, or it returns years after adolescence.',
    image: '/images/ai/blog-hormonal-acne.webp',
    alt: 'A woman checking breakouts along her jawline in a bathroom mirror',
    href: `${OLD}/managing-adult-breakouts-how-to-control-and-prevent-hormonal-acne/`,
    tag: 'Acne',
  },
  {
    title: 'Mole Mapping Explained: When (and Why) to Get Your Moles Checked',
    date: '2026-09-30',
    excerpt: 'Skin cancer is one of the most treatable cancers when it is found early, and early detection almost always comes down to noticing that a mole has changed.',
    image: '/images/ai/blog-mole-mapping.webp',
    alt: 'A dermatologist examining a mole on a patient’s back with a dermatoscope',
    href: `${OLD}/mole-mapping-explained-when-and-why-to-get-your-moles-checked/`,
    tag: 'Moles',
  },
  {
    title: 'How Long Does It Take for Acne Scars to Fade?',
    date: '2026-09-18',
    excerpt: 'Once a breakout has settled, the marks it leaves behind can be just as frustrating as the spots were.',
    image: '/images/ai/blog-acne-scars.webp',
    alt: 'Close-up of a cheek with faded post-acne marks',
    href: `${OLD}/how-long-does-it-take-for-acne-scars-to-fade/`,
    tag: 'Acne',
  },
  {
    title: 'What Does Skin Cancer Look Like? A Dermatologist’s Guide to Spotting the Signs',
    date: '2026-09-09',
    excerpt: 'Most of us notice something on our skin from time to time and wonder whether it matters.',
    image: '/images/ai/blog-skin-cancer.webp',
    alt: 'A man checking a mole on his shoulder with a hand mirror',
    href: `${OLD}/what-does-skin-cancer-look-like-a-dermatologists-guide-to-spotting-the-signs/`,
    tag: 'Skin cancer',
  },
  {
    title: 'Finasteride and Dutasteride: Updated Information for Patients',
    date: '2026-08-27',
    excerpt: 'The MHRA has reviewed the evidence for finasteride and dutasteride and recommended further measures for patients.',
    image: '/images/ai/blog-finasteride.webp',
    alt: 'A pharmacy bottle, tablets and a patient leaflet on navy linen',
    href: `${OLD}/finasteride-and-dutasteride-updated-information-for-patients/`,
    tag: 'Hair loss',
  },
];

export const faqs = [
  {
    q: 'Do I need a referral to book an appointment?',
    a: 'No. You can book directly with us. If you are using private health insurance, check with your insurer, as many require a GP referral before they cover the fees. If your GP has written a referral, bring it along, as it may hold useful information for your dermatologist.',
  },
  {
    q: 'How quickly can I be seen?',
    a: 'We offer appointments Monday to Saturday, including lunchtimes and evenings. If you are self-paying and happy to see any of our dermatologists, we can often book you in within a few days. Seeing a specific dermatologist or using insurance can take up to a few weeks.',
  },
  {
    q: 'How much does a consultation cost?',
    a: 'A new skin condition consultation is £285, a new hair or scalp consultation is £360, and a follow-up is £225. Tests, procedures and specialised conditions are charged separately. Prescribed medication is on a private prescription. Our fee guide has the full list.',
    link: { label: 'View the fee guide', href: `${OLD}/fee-guide/` },
  },
  {
    q: 'Can you bill my private health insurer directly?',
    a: 'Yes. With a valid membership number and authorisation code from one of our approved insurers, we bill them directly for consultations and treatment. Without an authorisation code, you pay on the day and we give you an invoice to claim back. Laser, cosmetic treatments and products cannot be billed to insurers.',
    link: { label: 'Read the insured patient guide', href: `${OLD}/insured-patient-guide/` },
  },
  {
    q: 'What happens during a dermatology consultation?',
    a: 'Your dermatologist reviews your medical history, asks about your symptoms and examines you. They may suggest tests such as swabs, blood tests or a skin biopsy. Many patients leave with a diagnosis and treatment plan, and most are invited back for a follow-up to check how treatment is working.',
  },
  {
    q: 'Can I have a procedure on the same day as my consultation?',
    a: 'Procedures are usually booked on a separate day. This gives you time to consider the information first, and many insurers need a medical report before they approve a procedure.',
  },
  {
    q: 'Do you offer video consultations?',
    a: 'Yes. Many of our dermatologists offer remote video consultations as well as face to face appointments at our clinic beside Holborn station.',
  },
];

export const navMain = [
  { label: 'Conditions', href: u('dermatology-conditions'), mega: 'conditions' },
  { label: 'Treatments', href: u('dermatology-treatments'), mega: 'treatments' },
  { label: 'Dermatologists', href: u('find-a-dermatologist') },
  { label: 'Fees', href: u('fee-guide') },
  { label: 'About', href: u('our-vision-mission-and-values') },
  { label: 'Contact', href: u('contact-our-clinic') },
];

export const patientLinks = [
  ['Patient Registration', 'patient-registration'], ['Fee Guide', 'fee-guide'], ['Insured Patient Guide', 'insured-patient-guide'],
  ['Repeat Prescription Request', 'repeat-prescription-request'], ['FAQs', 'frequently-asked-questions'],
  ['For GPs and Referrers', 'for-gps-and-specialists'], ['News', 'news'], ['Recruitment', 'recruitment'],
].map(([label, slug]) => ({ label, href: u(slug) }));

export const legalLinks = [
  ['Privacy Policy', 'privacy-policy'], ['Terms and Conditions', 'terms-and-conditions'], ['CMA 2014 Order', 'cma-2014-order'],
].map(([label, slug]) => ({ label, href: u(slug) }));
