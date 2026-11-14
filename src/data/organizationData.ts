import griquaRoyalImbizoImg from "../assets/images/griqua_royal_imbizo_1794486836205.jpg";
import womenDigitalHubImg from "../assets/images/women_digital_hub_1794486836687.jpg";
import communityDignityDriveImg from "../assets/images/community_dignity_drive_1794486836033.jpg";

export interface RoyalPrincess {
  id: string;
  name: string;
  title: string;
  role: string;
  royalRelation: string;
  bio: string;
  quote: string;
  focusAreas: string[];
  portrait: string;
  phone?: string;
  fullPhoto?: string;
  familyTreePhoto?: string;
}

export interface LineageLeader {
  title: string;
  name: string;
  era: string;
  historicalSignificance: string;
  legacyContribution: string;
}

export interface FlagshipProgramme {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  leadPartner: string;
  impactMetrics: { label: string; value: string }[];
  description: string;
  objectives: string[];
  targetBeneficiaries: string;
  provinces: string;
  image?: string;
}

export interface StrategicPartner {
  id: string;
  name: string;
  sector: string;
  focus: string;
  collaborationScope: string;
  keyInitiatives: string[];
  deliverables: string[];
  mouStatus: string;
  badge: string;
}

export interface ComplianceItem {
  title: string;
  status: string;
  reference: string;
  description: string;
}

export const ROYAL_ORGANIZATION = {
  name: "Royal Sisterhood AK 1 to 4 Bloodline",
  registrationNumber: "2025/191780/07",
  cipcCode: "K2025191780",
  type: "Non-Profit Institution / Royal Community Development Organisation",
  officialLogo: "/drive_assets/royal_sisterhood_official_crest.jpg",
  registrationCertificate: "/drive_assets/official_registration_certificate.jpg",
  kingDelegationPhoto: "/drive_assets/king_adam_kok_v_and_princesses.jpg",
  threePrincessesStandingPhoto: "/drive_assets/three_princesses_full_standing.jpg",
  genealogicalTreePhoto: "/drive_assets/adam_kok_genealogical_tree.jpg",
  headquarters: {
    address: "2445 5th Avenue, Mid Ennerdale",
    city: "Johannesburg",
    province: "Gauteng",
    postalCode: "1830",
    country: "South Africa",
  },
  leadershipTitle: "Direct Royal House Stewardship",
  patronage: "Under the Blessing & Lineage of King Adam Kok V",
  contactEmail: "futurecodecorp@gmail.com",
  secretariatPhone: "081 302 7763 / 066 586 2829",
  emergencyCrisisLine: "0800 428 428",
  bankingDetails: {
    bankName: "Capitec Bank South Africa",
    accountName: "Royal Sisterhood AK 1 to 4 Bloodline",
    accountType: "Capitec Account",
    accountNumber: "1055214607",
    branchCode: "470010",
    swiftCode: "CABLZAJJ",
    referenceFormat: "DONOR-NAME or CSI-ORGANISATION",
  },
};

export const ROYAL_PRINCESSES: RoyalPrincess[] = [
  {
    id: "eva-cornelia-julius",
    name: "Princess Cornelia Eva Julius",
    title: "Her Royal Highness Princess Cornelia",
    role: "Founding Director & Head of Royal Governance",
    royalRelation: "Sister of King Adam Kok V | Direct Bloodline of Kaptein Adam Kok I-IV",
    portrait: "/drive_assets/portrait_princess_cornelia.jpg",
    phone: "066 586 2829",
    fullPhoto: "/drive_assets/three_princesses_full_standing.jpg",
    familyTreePhoto: "/drive_assets/princess_cornelia_julius_family.jpg",
    bio: "Princess Cornelia Eva Julius stands as a cornerstone of the modern Griqua Royal House. Carrying centuries of royal heritage and grassroots service, Her Royal Highness steers institutional governance, diplomatic liaison with traditional councils across South Africa's nine provinces, and policy advocacy for the constitutional recognition and socio-economic elevation of indigenous Khoisan-Griqua families.",
    quote: "Our bloodline is not a title of detachment; it is an ancestral covenant of servitude to our women, our youth, and the sacred soil of our people.",
    focusAreas: [
      "Traditional Council Diplomatic Relations",
      "Constitutional & Heritage Recognition",
      "Gender-Based Violence Community Advocacy",
      "Inter-generational Griqua Archiving",
    ],
  },
  {
    id: "maggie-gibbs",
    name: "Princess Maggie Kok Gibbs",
    title: "Her Royal Highness Princess Maggie",
    role: "Founding Director & Head of Community Welfare & Dignity",
    royalRelation: "Sister of King Adam Kok V | Direct Bloodline of Kaptein Adam Kok I-IV",
    portrait: "/drive_assets/portrait_princess_maggie.jpg",
    phone: "081 302 7763",
    fullPhoto: "/drive_assets/three_princesses_full_standing.jpg",
    bio: "Princess Maggie Kok Gibbs is the compassionate operational heart of the Sisterhood, directing field-level relief, safe-haven networks, and humanitarian outreach. Her work in Mid Ennerdale and surrounding peri-urban townships has saved hundreds of vulnerable women and orphaned children through emergency sheltering, food garden cultivation, and trauma-informed family restoration.",
    quote: "No mother in our communities should ever weep in hunger or live in fear of violence under the open skies of our motherland.",
    focusAreas: [
      "Safe Haven Crisis Support & GBV Network",
      "Peri-Urban Food Sovereignty & Community Kitchens",
      "Child & Maternal Dignity Outreach",
      "Elderly Care & Social Upliftment",
    ],
  },
  {
    id: "may-paulsen",
    name: "Princess May Kok Paulsen",
    title: "Her Royal Highness Princess May",
    role: "Founding Director & Head of Economic Liberation & Youth Futures",
    royalRelation: "Sister of King Adam Kok V | Direct Bloodline of Kaptein Adam Kok I-IV",
    portrait: "/drive_assets/portrait_princess_may.jpg",
    fullPhoto: "/drive_assets/three_princesses_full_standing.jpg",
    familyTreePhoto: "/drive_assets/princess_may_paulsen_family.jpg",
    bio: "Princess May Kok Paulsen bridges royal legacy with 21st-century economic self-determination. Spearheading national alliances with technology and commercial partners, Her Royal Highness champions digital coding education, vocational micro-enterprise development, and commercial supply chain inclusion for Griqua women and youth, breaking generational cycles of poverty.",
    quote: "When we empower our daughters with technology, enterprise skills, and land knowledge, we restore sovereign dignity to every household.",
    focusAreas: [
      "Digital Literacy & Future Tech Initiatives",
      "Women-Led Cooperative Agri-Business",
      "Vocational & Enterprise Incubation",
      "Financial Literacy & CSI Partnership Oversight",
    ],
  },
];

export const LINEAGE_LEADERS: LineageLeader[] = [
  {
    title: "Kaptein Adam Kok I",
    name: "Adam Kok I",
    era: "c. 1710 – 1795",
    historicalSignificance:
      "Founder and legendary patriarch of the Griqua nation. Guided his people out of colonial servitude in the Western Cape toward independence along the Orange River.",
    legacyContribution:
      "Established the foundation of Griqua nationhood, sovereign self-governance, and communal solidarity.",
  },
  {
    title: "Kaptein Adam Kok II",
    name: "Adam Kok II",
    era: "c. 1771 – 1835",
    historicalSignificance:
      "Paramount leader who consolidated Griqua territory at Philippolis, enacting formal legal codes and defending tribal sovereignty amidst rapid colonial expansion.",
    legacyContribution:
      "Instituted constitutional governance and sovereign alliances across the central plains of Southern Africa.",
  },
  {
    title: "Kaptein Adam Kok III",
    name: "Adam Kok III",
    era: "1811 – 1875",
    historicalSignificance:
      "Statesman and heroic leader of the historic 1861–1862 Griqua Trek across the treacherous Drakensberg mountains to found Griqualand East and its capital, Kokstad.",
    legacyContribution:
      "Preserved the nation against impossible physical and geopolitical odds; an immortal symbol of Griqua fortitude.",
  },
  {
    title: "Kaptein Adam Kok IV",
    name: "Adam Kok IV",
    era: "Late 19th Century",
    historicalSignificance:
      "Custodianship of the Griqua Royal House during intensifying colonial annexations, keeping the flame of cultural identity alive through oral tradition and ancestral land claims.",
    legacyContribution:
      "Protected ancestral lineages and royal records through generations of forced displacement.",
  },
  {
    title: "King Adam Kok V",
    name: "His Majesty King Adam Kok V",
    era: "Present Era",
    historicalSignificance:
      "Current reigning Monarch of the Adam Kok Griqua Royal House, standing alongside his royal sisters to drive holistic cultural renaissance, indigenous recognition, and socio-economic transformation.",
    legacyContribution:
      "Sanctioned the Royal Sisterhood AK 1 to 4 Bloodline as the executive vanguard for grassroots social justice and women's empowerment.",
  },
];

export const FLAGSHIP_PROGRAMMES: FlagshipProgramme[] = [
  {
    id: "griqua-royal-imbizo",
    number: "01",
    title: "The Griqua Royal Houses Unification & National Imbizo",
    subtitle: "Convening traditional leaders, royal councils, and diaspora across all 9 provinces",
    leadPartner: "Royal House Secretariat & Changing Life Ministries",
    impactMetrics: [
      { label: "Provinces Reached", value: "9 / 9" },
      { label: "Traditional Leaders", value: "140+" },
      { label: "Community Imbizos", value: "24 Annual" },
    ],
    description:
      "A national diplomatic initiative convening Griqua royal houses, traditional councils, and elders across South Africa to rebuild cultural unity, resolve historical territorial fragmentation, and present a unified voice to government and continental bodies.",
    objectives: [
      "Facilitate bi-annual National Imbizo assemblies bringing together royal houses from Gauteng, Western Cape, Northern Cape, Free State, and Eastern Cape.",
      "Codify customary governance protocols and establish a permanent Council of Royal Matriarchs.",
      "Engage the National Department of Traditional Affairs on indigenous rights and community land stewardship.",
    ],
    targetBeneficiaries: "Traditional councils, Griqua communities, diaspora families, and civic elders.",
    provinces: "National Coverage (Gauteng, Western Cape, Northern Cape, KZN, Free State)",
    image: griquaRoyalImbizoImg,
  },
  {
    id: "heritage-youth-archive",
    number: "02",
    title: "The Griqua Heritage, Language & Youth Archive Project",
    subtitle: "Documenting Adam Kok I-IV historical records, oral epics, and indigenous Khoekhoegowab revival",
    leadPartner: "Future Coding Corp & Royal Cultural Custodians",
    impactMetrics: [
      { label: "Historical Records", value: "1,200+" },
      { label: "Youth Enrolled", value: "3,500+" },
      { label: "School Curricula", value: "18 Pilots" },
    ],
    description:
      "Preserving and revitalizing the suppressed history of the Griqua people. Through digital archiving, oral history capture with elders, and secondary school youth workshops, this project ensures the heroic history of Adam Kok I-IV is etched into national memory.",
    objectives: [
      "Digitize historic treaties, letters, and artifacts from Kokstad, Philippolis, and Griquatown into a public online repository.",
      "Develop interactive multimedia learning modules on indigenous Khoisan-Griqua history for South African basic education.",
      "Train 50 youth cultural ambassadors annually to conduct oral history interviews with community matriarchs.",
    ],
    targetBeneficiaries: "Primary & secondary school learners, university researchers, and cultural historians.",
    provinces: "Gauteng, Northern Cape, Western Cape",
  },
  {
    id: "gbv-safe-haven-network",
    number: "03",
    title: "Safe Haven & GBV Rapid Response Network",
    subtitle: "Survivor-centred 24/7 crisis intervention, trauma counselling, court accompaniment & safe houses",
    leadPartner: "Changing Life Ministries & Mid Ennerdale Community Forum",
    impactMetrics: [
      { label: "Survivors Sheltered", value: "480+" },
      { label: "Legal Accompaniments", value: "620+" },
      { label: "Emergency Response", value: "< 45 Min" },
    ],
    description:
      "A proactive grassroots response to the national emergency of Gender-Based Violence in high-risk peri-urban communities. We operate verified safe sanctuary spaces, trauma counseling referral chains, court advocacy support, and dignity relocation assistance for women and children in immediate danger.",
    objectives: [
      "Maintain a 24/7 community rapid-response hotline coordinated with local SAPS and accredited social workers.",
      "Provide emergency transition shelter for up to 60 days, inclusive of psycho-social rehabilitation and legal assistance.",
      "Conduct community bystander intervention workshops across taxi ranks, churches, and youth clubs to dismantle GBV cultures.",
    ],
    targetBeneficiaries: "Women, adolescent girls, and children subjected to domestic abuse and trauma.",
    provinces: "Gauteng (Mid Ennerdale, Eldorado Park, Orange Farm) & Northern Cape",
  },
  {
    id: "women-economic-tech-hub",
    number: "04",
    title: "Women’s Economic Empowerment, Digital & Agri-Business Hub",
    subtitle: "Coding bootcamps, accredited digital literacy, cooperative agriculture & micro-enterprise incubation",
    leadPartner: "Future Coding Corp & Young Investments Holdings and Consulting",
    impactMetrics: [
      { label: "Graduates Trained", value: "850+" },
      { label: "Enterprises Incubated", value: "64" },
      { label: "Average Income Lift", value: "+185%" },
    ],
    description:
      "Bridging the socio-economic divide by equipping peri-urban women and unemployed youth with high-value technical capabilities. In partnership with Future Coding Corp and Young Investments, learners gain software, web, and data skills alongside hands-on agribusiness production and financial literacy.",
    objectives: [
      "Deliver 12-week intensive bootcamps in web development, digital administration, and e-commerce for young women.",
      "Establish cooperative hydroponic and regenerative agro-processing facilities in Mid Ennerdale.",
      "Facilitate access to micro-seed grants and formal procurement supply chains for women-owned enterprises.",
    ],
    targetBeneficiaries: "Unemployed youth (18–35), single mothers, and aspiring female entrepreneurs.",
    provinces: "Gauteng & National Online Cohorts",
    image: womenDigitalHubImg,
  },
  {
    id: "food-security-dignity-drive",
    number: "05",
    title: "Rural & Peri-Urban Food Security & Dignity Drive",
    subtitle: "Community soup kitchens, household agro-ecology gardens & monthly dignity health parcel distributions",
    leadPartner: "RSBC Trading & Community Matriarchs",
    impactMetrics: [
      { label: "Meals Served Monthly", value: "14,500+" },
      { label: "Household Gardens", value: "320+" },
      { label: "Dignity Kits Distributed", value: "8,000+" },
    ],
    description:
      "Tackling chronic nutritional insecurity and menstrual poverty. Through community-led food gardens, daily nutrition centers, and distribution of essential dignity packs (sanitary products, hygiene essentials, warm blankets), we safeguard the basic human dignity of vulnerable families.",
    objectives: [
      "Supply 14,500 hot nutritious meals every month to vulnerable children, elderly pensioners, and destitute households.",
      "Install 300+ bio-intensive backyard vegetable gardens with rainwater harvesting tanks and organic seed starter kits.",
      "Distribute monthly dignity and hygiene care packs to adolescent schoolgirls to ensure zero school days are missed.",
    ],
    targetBeneficiaries: "Pensioners, child-headed households, school-going girls, and destitute families.",
    provinces: "Gauteng, Free State, and Northern Cape",
    image: communityDignityDriveImg,
  },
  {
    id: "spiritual-healing-mentorship",
    number: "06",
    title: "Spiritual Healing, Family Restoration & Youth Mentorship",
    subtitle: "Values-based pastoral guidance, anti-substance outreach & restorative family reconciliation",
    leadPartner: "Changing Life Ministries",
    impactMetrics: [
      { label: "Youth Mentored", value: "1,800+" },
      { label: "Rehabilitated Youth", value: "340+" },
      { label: "Family Circles", value: "52 Annual" },
    ],
    description:
      "Addressing the deep psychological trauma, substance abuse epidemics, and broken family structures affecting peri-urban youth. Led by Changing Life Ministries, this initiative offers compassionate pastoral counseling, youth brotherhood/sisterhood circles, and constructive pathways away from street gangs.",
    objectives: [
      "Host weekly youth brotherhood and sisterhood empowerment circles focusing on character, dignity, and purpose.",
      "Provide referrals and community-based support for youth seeking freedom from crystal meth ('tik') and alcohol addiction.",
      "Facilitate restorative mediation sessions to reunite estranged youth with their families and community elders.",
    ],
    targetBeneficiaries: "At-risk youth, young men susceptible to gang recruitment, and fractured family units.",
    provinces: "Gauteng & Western Cape",
  },
];

export const STRATEGIC_PARTNERS: StrategicPartner[] = [
  {
    id: "changing-life-ministries",
    name: "Changing Life Ministries",
    sector: "Spiritual Restoration & Community Care",
    focus: "Trauma healing, pastoral crisis counselling, family reconciliation & anti-substance outreach",
    collaborationScope:
      "Direct field delivery partner for the Safe Haven network, GBV survivor pastoral support, youth life-skills circles, and grassroots community food kitchen coordination.",
    keyInitiatives: [
      "24/7 Crisis Pastoral Response & Survivor Spiritual Upliftment",
      "Family Restoration Mediation & Safe Shelter Referrals",
      "Weekly Youth Character Building & Anti-Drug Support Groups",
      "Community Food Bank & Bread-Breaking Outreaches",
    ],
    deliverables: [
      "Over 480 survivors supported in crisis situations",
      "Weekly spiritual restoration services in Mid Ennerdale",
      "Certified pastoral counseling personnel on standby",
    ],
    mouStatus: "Active Strategic MoU (2025–2028)",
    badge: "Faith & Healing Anchor",
  },
  {
    id: "future-coding-corp",
    name: "Future Coding Corp",
    sector: "Technology, Digital Literacy & Youth Futures",
    focus: "Full-stack coding bootcamps, digital literacy, youth tech enablement & future-ready women empowerment",
    collaborationScope:
      "Official technical architecture and skills development partner. Equipping Griqua women and youth with web development, data literacy, digital marketing, and modern software skills to compete in the global digital economy.",
    keyInitiatives: [
      "12-Week Intensive Coding Bootcamps for Young Women",
      "Digital Literacy & Career Readiness Laboratories",
      "Indigenous Heritage Digital Archiving Platform & Database",
      "Remote Work & Freelance Tech Placement Pathways",
    ],
    deliverables: [
      "Dedicated computer laboratory in Mid Ennerdale",
      "100% accredited certification upon bootcamp graduation",
      "Mentorship with professional software engineers",
    ],
    mouStatus: "Active Technical & Education MoU (2025–2028)",
    badge: "Digital Skills Anchor",
  },
  {
    id: "young-investments",
    name: "Young Investments Holdings and Consulting",
    sector: "Enterprise Development & Financial Scaling",
    focus: "SMME incubation, financial literacy, investment readiness, business strategy & sustainable economic scaling",
    collaborationScope:
      "Commercial strategy and enterprise development partner. Structuring women-led cooperatives, conducting financial literacy bootcamps, preparing SMMEs for corporate supply chain procurement, and managing institutional grant accountability.",
    keyInitiatives: [
      "Women SMME Incubation & Business Model Refinement",
      "Financial Literacy & Bookkeeping Mastery for Micro-Enterprises",
      "CSI Compliance, Corporate Due Diligence & Impact Audits",
      "Access to Seed Capital & Enterprise Supplier Development (ESD)",
    ],
    deliverables: [
      "64 SMMEs successfully registered and incubated",
      "Grant audit and CSI compliance framework",
      "Bespoke financial advisory for cooperative agricultural hubs",
    ],
    mouStatus: "Active Economic & Advisory MoU (2025–2028)",
    badge: "Enterprise & Capital Anchor",
  },
  {
    id: "rsbc-trading",
    name: "RSBC Trading",
    sector: "Supply Chain, Logistics & Commercial Pathways",
    focus: "Procurement pathways, food distribution logistics, bulk trade infrastructure & community economic access",
    collaborationScope:
      "Logistical and commercial trade implementation partner. Overseeing cold chain logistics for community agricultural yields, bulk procurement of dignity kits and food parcels, and connecting local producers to regional retail networks.",
    keyInitiatives: [
      "Cold-Chain Logistics & Fresh Produce Aggregation",
      "Bulk Procurement & Distribution of Dignity & Hygiene Kits",
      "Commercial Trade Linkages for Peri-Urban Farmers",
      "Transport & Equipment Fleet Support for Humanitarian Relief",
    ],
    deliverables: [
      "Reliable delivery fleet supporting 9 provinces",
      "Cost-saving bulk purchasing agreements for humanitarian relief",
      "Direct market access for 320+ household vegetable growers",
    ],
    mouStatus: "Active Supply Chain & Logistics MoU (2025–2028)",
    badge: "Logistics & Trade Anchor",
  },
];

export const COMPLIANCE_FRAMEWORK: ComplianceItem[] = [
  {
    title: "CIPC Legal Registration",
    status: "Verified & Registered",
    reference: "Reg: K2025191780",
    description: "Formally registered non-profit institutional company under the Companies Act of South Africa.",
  },
  {
    title: "Registered Physical Domicile",
    status: "Active Institutional Office",
    reference: "2445 5th Avenue, Mid Ennerdale",
    description: "Permanent operations hub, community hall, and executive secretariat in Region G, City of Johannesburg.",
  },
  {
    title: "SARS Tax Exemption & Good Standing",
    status: "Compliant & Filed",
    reference: "SARS PIN Clearance on File",
    description: "Compliant with corporate tax requirements, Section 18A donor certificate pipeline, and PBO eligibility.",
  },
  {
    title: "POPIA Data Privacy & Safeguarding",
    status: "Fully Compliant",
    reference: "POPIA Policy Act 4 of 2013",
    description: "Strict protection of personal information for GBV survivors, minors, and registered community beneficiaries.",
  },
  {
    title: "Safeguarding & Anti-GBV Policy",
    status: "Institutional Standard",
    reference: "Board Resolution SG-2025",
    description: "Zero-tolerance safeguarding policy governing staff, partners, volunteers, and traditional liaisons.",
  },
  {
    title: "Independent Financial Oversight",
    status: "Annual Audit Standard",
    reference: "Separated Project Accounts",
    description: "Ring-fenced project funds with dual-signatory approvals and quarterly donor expenditure reporting.",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "drive-crest-logo",
    title: "Official Royal Sisterhood Emblem & Crest",
    category: "Royal Heritage",
    date: "2025",
    caption: "The official heraldic emblem of the Royal Sisterhood AK 1 to 4 Bloodline / Koninglike Susterskap, featuring the three crowned Royal Princesses and golden filigree.",
    image: "/drive_assets/royal_sisterhood_official_crest.jpg",
  },
  {
    id: "drive-three-princesses",
    title: "The Three Founding Royal Princesses",
    category: "Royal Leadership",
    date: "2025",
    caption: "Her Royal Highnesses Princess Cornelia Kok Julius, Princess May Kok Paulsen, and Princess Maggie Kok Gibbs together in traditional and ceremonial attire.",
    image: "/drive_assets/three_princesses_full_standing.jpg",
  },
  {
    id: "drive-king-delegation",
    title: "His Majesty King Adam Kok V & Royal Council",
    category: "Royal Leadership",
    date: "2025",
    caption: "His Majesty King Adam Kok V seated in the paramount royal chair with traditional carved scepter, flanked by his sisters the Royal Princesses and traditional council elders.",
    image: "/drive_assets/king_adam_kok_v_and_princesses.jpg",
  },
  {
    id: "drive-lineage-chart",
    title: "Adam Kok I to V Complete Lineage Tree",
    category: "Genealogy & Lineage",
    date: "2025",
    caption: "Official genealogical succession chart (Source: Patekile Holomisa, Double Edged Sword) detailing the royal bloodline from Kaptein Adam Kok I (1710–1795) through Adam Kok IV to King Adam Kok V and the Royal Princesses.",
    image: "/drive_assets/adam_kok_genealogical_tree.jpg",
  },
  {
    id: "drive-founders-slide",
    title: "Founders and Executive Directors Showcase",
    category: "Royal Leadership",
    date: "2025",
    caption: "Official executive directorate presentation displaying individual portraits of Princess Maggie Gibbs, Princess May Paulsen, and Princess Cornelia Julius.",
    image: "/drive_assets/founders_and_directors_presentation.jpg",
  },
  {
    id: "drive-reg-certificate",
    title: "Official CIPC Company Registration Certificate",
    category: "Governance & Compliance",
    date: "2025",
    caption: "Formal non-profit company registration document (Reg: 2025/191780/07) bearing the official signatures of Director Princess Maggie Kok Gibbs, Director Princess May Kok Paulsen, and Director Princess Cornelia Kok Julius.",
    image: "/drive_assets/official_registration_certificate.jpg",
  },
  {
    id: "drive-custodians-families",
    title: "Bloodline Custodians & Royal Lineage Generations",
    category: "Genealogy & Lineage",
    date: "2025",
    caption: "Documented family lineages of Princess Maggie Gibbs, Princess May Paulsen, and Princess Cornelia Julius, celebrating the multi-generational continuation of the Griqua Royal House.",
    image: "/drive_assets/bloodline_custodians_families.jpg",
  },
  {
    id: "drive-royal-assembly",
    title: "Royal Delegation Assembly & Traditional Liaison",
    category: "Royal Leadership",
    date: "2025",
    caption: "Members of the Griqua Royal House and Sisterhood executive committee convening for national traditional council and civil society consultations.",
    image: "/drive_assets/royal_delegation_assembly.jpg",
  },
  {
    id: "drive-uncle-gert-archive",
    title: "Ancestral Family Archive (Uncle Gert & Elders)",
    category: "Historical Archives",
    date: "Historical Archive",
    caption: "Rare historical photograph from the Kok royal family archives, capturing the elder generation of family matriarchs and elders.",
    image: "/drive_assets/uncle_gert_historical_archive.jpg",
  },
  {
    id: "drive-may-paulsen-family",
    title: "Princess May Kok Paulsen Family Branch",
    category: "Genealogy & Lineage",
    date: "2025",
    caption: "Family lineage portrait of Princess May Paulsen, Stanley Paulsen, Tercia Buise, Gratham Paulsen, Kayrin Paulsen, Ashwin Buise, Alvandre Buise, Tyler Buise, and Kiyomi Paulsen.",
    image: "/drive_assets/princess_may_paulsen_family.jpg",
  },
  {
    id: "drive-cornelia-family",
    title: "Princess Cornelia Kok Julius Family Branch",
    category: "Genealogy & Lineage",
    date: "2025",
    caption: "Family lineage portrait of Princess Cornelia Julius, Petrus Julius, Berenice Julius, Chanique Julius, Blanche Julius, Kathlynn Julius, Leeyogon, Kaileigh, Zoe, Tremaine, and Tryden Julius.",
    image: "/drive_assets/princess_cornelia_julius_family.jpg",
  },
  {
    id: "gal-tech-lab",
    title: "Future Coding Corp Women's Tech Laboratory",
    category: "Digital & Youth Hub",
    date: "2025",
    caption: "Young Griqua women in Mid Ennerdale mastering modern software development and web design on laptops provided through the Future Coding Corp technical alliance.",
    image: womenDigitalHubImg,
  },
  {
    id: "gal-food-drive",
    title: "Mid Ennerdale Food Garden & Dignity Parcel Handover",
    category: "Community Welfare",
    date: "2025",
    caption: "Community matriarchs and volunteers packaging fresh, organically harvested vegetables and essential sanitary dignity kits for vulnerable families in Mid Ennerdale.",
    image: communityDignityDriveImg,
  },
  {
    id: "gal-imbizo",
    title: "National Griqua Royal Imbizo Assembly",
    category: "Royal Leadership",
    date: "2025",
    caption: "Traditional leaders, royal elders, and matriarchs gathered under the pavilion for the national unification summit, reaffirming indigenous cultural autonomy and communal peace.",
    image: griquaRoyalImbizoImg,
  },
];

export const EMERGENCY_HELPLINES = [
  {
    name: "National GBV Command Centre",
    phone: "0800 428 428",
    alt: "*120*7867# (Please Call Me)",
    hours: "24/7 / 365 Days",
    type: "Toll-Free Government Hotline",
  },
  {
    name: "South African Police Service (SAPS)",
    phone: "10111",
    alt: "Ennerdale Police Station: 011 855 1055",
    hours: "Emergency Rapid Response",
    type: "Law Enforcement",
  },
  {
    name: "Lifeline South Africa (Crisis Care)",
    phone: "0861 322 322",
    alt: "National Emotional Support",
    hours: "24/7 Confidential Crisis Line",
    type: "Counseling & Trauma Support",
  },
  {
    name: "Childline South Africa",
    phone: "116",
    alt: "Toll-Free Any Network",
    hours: "24/7 Child Protection",
    type: "Child & Minor Safety",
  },
];
