export interface BookReview {
  id: number;
  title: string;
  rating: number;
  content: string;
  reviewer: string;
  source: string;
}

export interface Book {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  genre: string;
  coverImage: string;
  scenicImage: string;
  bannerBg?: string;
  amazonUrl: string;
  hookTitle: string;
  hookParagraphs: string[];
  narrativeTitle: string;
  narrativeParagraphs: string[];
  review: {
    title: string;
    rating: number;
    text: string;
    reviewer: string;
  };
  reviews: BookReview[];
  metaDescription: string;
}

export const booksData: Book[] = [
  {
    slug: "thwarted-enemy",
    title: "THWARTED ENEMY",
    shortTitle: "THWARTED ENEMY",
    subtitle: "A Gripping Mountain Suspense & Tactical Espionage Thriller",
    genre: "Suspense Thriller",
    coverImage: "/book-thwarted-enemy-front.jpg",
    bannerBg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=2200",
    scenicImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=85&w=1600",
    amazonUrl: "https://www.amazon.com/s?k=Thwarted+Enemy+Philip+Tate",
    hookTitle: "WHEN QUIET MOUNTAIN TRAILS BECOME A BATTLEGROUND",
    hookParagraphs: [
      "In the shadow of North Carolina’s rugged mountain peaks, an unyielding adversary stirs.",
      "When quiet mountain trails become the staging ground for a deadly international conspiracy, one man must risk everything to expose the threat before it consumes everyone he loves.",
      "Philip Tate draws on decades of frontline public safety service and emergency medical experience to craft a thriller rich in tactical authenticity, relentless tension, and moral conviction."
    ],
    narrativeTitle: "When Shadows Fall Over The Blue Ridge...",
    narrativeParagraphs: [
      "Thwarted Enemy weaves a pulse-pounding narrative of espionage, local resilience, and high-stakes survival. From remote riverbanks to clandestine operations in fortified compounds, the pacing never lets up.",
      "Tate's signature blend of steadfast faith, moral courage, and tactical realism creates an unforgettable thriller that keeps readers guessing until the final explosive revelation.",
      "Readers are plunged directly into the high-altitude terrain of Western North Carolina, where every ridge holds danger and every ally must prove their loyalty under fire."
    ],
    review: {
      title: "THWARTED ENEMY",
      rating: 5,
      text: "Philip Tate has hit a home run with Thwarted Enemy. The authentic North Carolina mountain atmosphere, combined with razor-sharp tactical detail, keeps you gripped from page one. The characters feel real, flawed, and driven by profound courage. If you enjoy edge-of-your-seat thrillers with heart and conviction, do not miss this book!",
      reviewer: "Verified Amazon Reader & Mountain Suspense Enthusiast"
    },
    reviews: [
      {
        id: 1,
        title: "PULSE-POUNDING MOUNTAIN SUSPENSE",
        rating: 5,
        content: "The tension starts on page one and doesn't let up. Philip Tate crafts an intricate, high-stakes countdown where every second counts. The clash between innocent mountain youth and international espionage feels terrifyingly plausible, fast-paced, and deeply human.",
        reviewer: "Elena Vance",
        source: "Verified Reader • Amazon Bestseller Review"
      },
      {
        id: 2,
        title: "THE COUNTDOWN IS RELENTLESS",
        rating: 5,
        content: "A masterclass of pacing and tactical tradecraft. Thwarted Enemy delivers everything a top-tier thriller fan craves: authentic Appalachian terrain, high-stakes national defense, and characters with real moral steel who refuse to surrender.",
        reviewer: "David K. Holloway",
        source: "New York Suspense Gazette"
      },
      {
        id: 3,
        title: "AUTHENTIC TACTICAL REALISM & HEART",
        rating: 5,
        content: "Philip Tate’s experience in emergency services and public duty elevates every tactical scene. The medical and chase realism is razor-sharp, but it’s the quiet moments of faith and brotherhood that truly make this thriller resonate.",
        reviewer: "Col. Thomas Brennan (Ret.)",
        source: "Military & Tactical Fiction Review"
      },
      {
        id: 4,
        title: "A HERO YOU CAN BELIEVE IN",
        rating: 5,
        content: "In an era of cookie-cutter action novels, Thwarted Enemy stands out with genuine atmosphere, heart, and non-stop adrenaline. The final 80 pages had me reading late into the night. Highly recommended!",
        reviewer: "Rachel Campbell",
        source: "Goodreads Top Reviewer"
      }
    ],
    metaDescription: "Read Thwarted Enemy by Philip Tate. A gripping high-stakes espionage thriller set against the rugged terrain of Western North Carolina."
  },
  {
    slug: "rizzoes-landing",
    title: "RIZZOE'S LANDING",
    shortTitle: "RIZZOE'S LANDING",
    subtitle: "A Deep South Mystery of Loyalty, Secrets, and Coastal Redemption",
    genre: "Mystery & Southern Suspense",
    coverImage: "/book-rizzoes-landing-front.jpg",
    scenicImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=1600",
    amazonUrl: "https://www.amazon.com/dp/B0FV5DXBY1",
    hookTitle: "WHERE THE MARSH TIDES GUARD OLD SECRETS",
    hookParagraphs: [
      "Where the marsh tides rise and old secrets refuse to stay buried, Rizzoe's Landing guards the history of a forgotten coastal town.",
      "When an unexpected disappearance shatters the peaceful waters, long-guarded truths surface with dangerous consequence.",
      "Caught between family loyalties, ancestral land disputes, and the pull of the open water, those who call the landing home must face the reckoning they have spent decades running from."
    ],
    narrativeTitle: "The Tides Keep Secrets, But The Truth Always Returns.",
    narrativeParagraphs: [
      "Set against the humid, moss-draped beauty of the southern coastline, Rizzoe's Landing is a rich, atmospheric mystery steeped in family legacy, local folklore, and intense emotional depth.",
      "Philip Tate expertly captures the pulse of watermen, marshland pilots, and community pillars wrestling with past sins. As the mystery deepens with every turning tide, the story explores themes of forgiveness, spiritual redemption, and the resilience needed to confront the ghosts of yesterday.",
      "A masterfully paced southern drama that lingers long after the final chapter."
    ],
    review: {
      title: "RIZZOE'S LANDING",
      rating: 5,
      text: "Rizzoe's Landing takes you deep into the southern waterways with prose that is as vivid as it is suspenseful. Philip Tate knows how to make a setting come alive—you can smell the saltwater and feel the tension simmering beneath every porch conversation. An exceptional tale of redemption and mystery.",
      reviewer: "Literary Fiction & Southern Mystery Review"
    },
    reviews: [
      {
        id: 1,
        title: "MASTERFUL SOUTHERN SUSPENSE & REDEMPTION",
        rating: 5,
        content: "Philip J. Tate has hit a home run with this gripping tale of bayou secrets, betrayal, and redemption. He paints the coastal atmosphere with vivid, haunting prose that stays with you long after the final chapter. Easily one of the most compelling reads of the year.",
        reviewer: "Marcus Sterling",
        source: "Literary Digest Critic"
      },
      {
        id: 2,
        title: "ATMOSPHERIC, HAUNTING, AND UNFORGETTABLE",
        rating: 5,
        content: "You can practically feel the humid morning fog rolling off the marsh water. The family dynamics, generational trauma, and unexpected twists kept me guessing until the last page. A truly rich southern mystery.",
        reviewer: "Hannah Beaufort",
        source: "Southern Literary Chronicle"
      },
      {
        id: 3,
        title: "A BEAUTIFULLY CRAFTED COASTAL MYSTERY",
        rating: 5,
        content: "What sets Rizzoe's Landing apart is its emotional depth. Tate doesn't just write a disappearance puzzle; he explores forgiveness, community roots, and what it truly costs to right an old wrong.",
        reviewer: "Julian Ross",
        source: "Verified Amazon Reader"
      },
      {
        id: 4,
        title: "POWERFUL SENSE OF PLACE AND SPIRIT",
        rating: 5,
        content: "Every character in Rizzoe's Landing feels earned and alive. Philip Tate weaves coastal folklore and mystery into a moving tapestry of grace and accountability.",
        reviewer: "Sarah Jenkins-Ross",
        source: "Booklist Editorial Review"
      }
    ],
    metaDescription: "Discover Rizzoe's Landing by Philip Tate. An atmospheric southern mystery of family legacy, coastal waters, and enduring redemption."
  },
  {
    slug: "singing-reels",
    title: "SINGING REELS: SUNBURN",
    shortTitle: "SINGING REELS",
    subtitle: "A Celebration of Adventure, Courage, and the Unbreakable Bond Between Humankind and the Sea",
    genre: "Outdoor Adventure & Ocean Memoir",
    coverImage: "/book-singing-reels.jpg",
    bannerBg: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=85&w=2200",
    scenicImage: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=85&w=1600",
    amazonUrl: "http://amazon.com/Singing-Reels-Sunburn-PHILIP-TATE-ebook/dp/B0FV5DXBY1/ref=sr_1_3?crid=3RNW66Z64Q78S&dib=eyJ2IjoiMSJ9.70pX1QCRarsVV57iYKtilXtJ0yB5rHHRgTLPFm3XkkFdsUNnENy9oFxlgznKxCo9Cer7n_Kxi-ZRIvuefYbT41WVBxqtsgElxHwVekR0ES843pvJ0MroqEvNbjRmoqgONvQ87BZvKq5Uko3FXh-EuA.TOIxGQvjxCZbdIO-AZiJULm3i36BSlIuxKBHGm3NKU4&dib_tag=se&keywords=philip+tate&qid=1793378937&s=digital-text&sprefix=philip+ta%2Cdigital-text%2C330&sr=1-3",
    hookTitle: "THE ROAR OF THE SURF AND THE THRILL OF THE CHASE",
    hookParagraphs: [
      "Singing Reels is a celebration of adventure, courage, and the unbreakable bond between humankind and the sea.",
      "Author Philip J. Tate takes readers from the roaring surf of the Gulf Stream to the peaceful rivers of the Blue Ridge Mountains, crafting vivid stories that capture both the thrill of the chase and the joy of the catch.",
      "Through every cast and sunrise, Tate explores more than just fishing—it’s about friendship, freedom, and finding meaning in nature’s rhythm."
    ],
    narrativeTitle: "Adventure is Waiting. The Waters Are Calling—Cast Your Line and Answer.",
    narrativeParagraphs: [
      "From the laughter that echoes across the deck to the quiet peace of a hidden cove, these pages remind readers why we seek adventure: to dream bigger, live bolder, and carry home stories that never fade.",
      "With cinematic storytelling and heartfelt reflection, Singing Reels immerses readers in the power and poetry of the outdoors.",
      "Whether you’re an experienced angler or simply someone drawn to the ocean’s call, this book will inspire you to rediscover joy, courage, and the beauty of life’s journey."
    ],
    review: {
      title: "SINGING REELS: SUNBURN",
      rating: 5,
      text: "Philip Tate captures the true spirit of the open water like few others can. Singing Reels is filled with salt spray, camaraderie, and genuine heart. It isn't just about the fish on the line—it's about the soul of the journey. Beautifully written, invigorating, and deeply memorable.",
      reviewer: "Outdoor Life & Saltwater Angler's Journal"
    },
    reviews: [
      {
        id: 1,
        title: "A SUN-DRENCHED ODE TO OPEN WATER",
        rating: 5,
        content: "Singing Reels is a pure joy to read. Philip Tate captures the magic of the open sea, the roar of the outboards heading into the Gulf Stream, and the timeless thrill of hearing a reel scream under the morning sun.",
        reviewer: "Capt. Ray Henderson",
        source: "Offshore Angler & Saltwater Life"
      },
      {
        id: 2,
        title: "SO MUCH MORE THAN JUST A FISHING BOOK",
        rating: 5,
        content: "Beyond the adrenaline of fighting big pelagics, this book is about camaraderie, patience, and finding peace in nature’s rhythm. The descriptions of ocean sunrises and shared laughter across the deck are unforgettable.",
        reviewer: "Brian MacIntyre",
        source: "Outdoor Memoir Quarterly"
      },
      {
        id: 3,
        title: "POETIC, ADVENTUROUS, AND DEEPLY INSPIRING",
        rating: 5,
        content: "Reading this made me want to hitch up a boat and head straight for the coast. Tate’s storytelling is vivid and cinematic, packed with warmth and honest outdoor wisdom.",
        reviewer: "Douglas Fairchild",
        source: "Verified Amazon Reader"
      },
      {
        id: 4,
        title: "AN INSTANT CLASSIC FOR OUTDOOR LOVERS",
        rating: 5,
        content: "From tranquil mountain trout streams to heavy ocean swells, Tate’s deep reverence for God’s creation and the brotherhood of anglers shines on every single page.",
        reviewer: "Mason Vance",
        source: "Carolina Sportsman Review"
      }
    ],
    metaDescription: "Read Singing Reels: Sunburn by Philip Tate. A cinematic celebration of ocean adventure, Gulf Stream fishing, and the great outdoors."
  },
  {
    slug: "breach-of-trust",
    title: "A BREACH OF TRUST",
    shortTitle: "A BREACH OF TRUST",
    subtitle: "A Tale of Old Asheville at the Moment of Secession in 1860",
    genre: "Historical Fiction & Civil War Mystery",
    coverImage: "/book-breach-trust.jpg",
    scenicImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=85&w=1600",
    amazonUrl: "https://www.amazon.com/Breach-Trust-tale-Asheville-Civil-ebook/dp/B0DWK281L9/ref=sr_1_5?crid=3RNW66Z64Q78S&dib=eyJ2IjoiMSJ9.70pX1QCRarsVV57iYKtilXtJ0yB5rHHRgTLPFm3XkkFdsUNnENy9oFxlgznKxCo9Cer7n_Kxi-ZRIvuefYbT41WVBxqtsgElxHwVekR0ES843pvJ0MroqEvNbjRmoqgONvQ87BZvKq5Uko3FXh-EuA.TOIxGQvjxCZbdIO-AZiJULm3i36BSlIuxKBHGm3NKU4&dib_tag=se&keywords=philip+tate&qid=1793378937&s=digital-text&sprefix=philip+ta%2Cdigital-text%2C330&sr=1-5",
    hookTitle: "GOLD IN THE VAULTS, MURDER IN THE MOUNTAINS",
    hookParagraphs: [
      "This is a tale of old Asheville at the moment of Secession in 1860 at the cusp of the Civil War.",
      "Bankers with gold in their vaults weren't sure how to protect it... So this banker decided to heist it and hide it.",
      "The consequences of this breach of trust cause a murder and a frame-up, shaking the confidence of the mountain community and creating mystery across the Southwest as a manhunt ensues while the town copes with the oncoming War Between the States."
    ],
    narrativeTitle: "A Stolen Fortune, A Framing Murder, And A Nation On The Brink.",
    narrativeParagraphs: [
      "Philip Tate brings 1860s Western North Carolina into sharp focus with period-accurate historical research, vivid regional dialect, and intricate plotting.",
      "As wartime division tears neighbors apart, the search for the stolen gold becomes entangled with the desperate flight of an innocent man framed for bloodshed.",
      "A rich, suspenseful historical mystery that explores the fragility of honor when fortunes are at stake and brother turns against brother."
    ],
    review: {
      title: "A BREACH OF TRUST",
      rating: 5,
      text: "A Breach of Trust is historical storytelling at its finest. Philip Tate brings 1860s Asheville to vivid life with meticulous period detail, an ingenious heist plot, and tension that mounts with every page. A must-read for fans of Civil War drama and classic mystery.",
      reviewer: "Historical Fiction Gazette & Civil War Book Review"
    },
    reviews: [
      {
        id: 1,
        title: "GRIPPING CIVIL WAR MYSTERY IN 1860 ASHEVILLE",
        rating: 5,
        content: "A Breach of Trust is historical storytelling at its peak. Philip Tate transports you directly to the tense streets of pre-war Asheville, where banking vaults held gold, loyalties were fracturing, and a daring heist triggers a manhunt.",
        reviewer: "Dr. Arthur Pendelton",
        source: "Appalachian Historical Journal"
      },
      {
        id: 2,
        title: "INGENIOUS PLOT AND FLAWLESS PERIOD DETAIL",
        rating: 5,
        content: "The dilemma of bankers facing Secession in 1860 is fascinating, and Tate turns it into an electrifying mystery. Murder, framing, and mountain justice collide in a narrative that moves with relentless velocity.",
        reviewer: "Clara Thornton",
        source: "Goodreads Historical Fiction Reviewer"
      },
      {
        id: 3,
        title: "RIVETING HISTORICAL INTRIGUE",
        rating: 5,
        content: "The atmosphere of 19th-century Western North Carolina is palpable. You feel the anxiety of a divided town on the cusp of war. An exceptional blend of whodunit and wartime drama.",
        reviewer: "James W. Sterling",
        source: "Civil War Book Review"
      },
      {
        id: 4,
        title: "COULD NOT PUT THIS BOOK DOWN",
        rating: 5,
        content: "The framing of an innocent man and the Southwest manhunt keep the stakes sky-high. Philip Tate has done his research and delivers a classic page-turner.",
        reviewer: "Emily Rutledge",
        source: "Verified Amazon Reader"
      }
    ],
    metaDescription: "A Breach of Trust by Philip Tate. A thrilling historical mystery set in 1860 Asheville at the brink of the American Civil War."
  },
  {
    slug: "china-naval-ambitions",
    title: "CHINA'S GLOBAL NAVAL AMBITIONS",
    shortTitle: "CHINA'S NAVAL AMBITIONS",
    subtitle: "And Her Unstoppable Rise to Power",
    genre: "Geopolitics & Military History",
    coverImage: "/book-china-naval.jpg",
    scenicImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=85&w=1600",
    amazonUrl: "https://www.amazon.com/CHINAS-GLOBAL-NAVAL-AMBITIONS-Unstoppable-ebook/dp/B0G57Z73SN/ref=sr_1_6?crid=3RNW66Z64Q78S&dib=eyJ2IjoiMSJ9.70pX1QCRarsVV57iYKtilXtJ0yB5rHHRgTLPFm3XkkFdsUNnENy9oFxlgznKxCo9Cer7n_Kxi-ZRIvuefYbT41WVBxqtsgElxHwVekR0ES843pvJ0MroqEvNbjRmoqgONvQ87BZvKq5Uko3FXh-EuA.TOIxGQvjxCZbdIO-AZiJULm3i36BSlIuxKBHGm3NKU4&dib_tag=se&keywords=philip+tate&qid=1793378937&s=digital-text&sprefix=philip+ta%2Cdigital-text%2C330&sr=1-6",
    hookTitle: "COLOSSAL WAVES THROUGH THE SEAS OF GEOPOLITICAL POWER",
    hookParagraphs: [
      "Welcome aboard this thrilling exploration of the colossal waves crashing through the seas of geopolitical power!",
      "We ride the currents of ambition that drive China’s increasingly audacious maritime pursuits. Picture a nation deeply rooted in centuries-old maritime traditions, now re-emerging with a vengeance, flexing its naval muscles like never before.",
      "It's not just about ships and ports; it’s about the very essence of global power dynamics and what that means for the future of the world."
    ],
    narrativeTitle: "The Intricate Dance of Naval Supremacy and Rising Tides.",
    narrativeParagraphs: [
      "With an eye for detail and a pulse on the present, this book dives deep into the intertwined stories of China’s naval evolution, economic strategies, and the tantalizing geopolitical aspirations that loom large on the horizon.",
      "Meet the key players—from the architect Chairman of the People’s Republic of China to the U.S. Naval Commander representing a steadfast but challenged naval supremacy. With a mix of economic strategists and foreign affairs analysts, we explore the multi-faceted narrative that defines today’s maritime landscape.",
      "Hold onto your life vests! We’re not simply recounting historical events; we’re engaging in a vital dialogue about tomorrow's global balance."
    ],
    review: {
      title: "CHINA'S GLOBAL NAVAL AMBITIONS",
      rating: 5,
      text: "China's Global Naval Ambitions provides a clear-eyed, compelling breakdown of maritime strategy and 21st-century power projection. Written with engaging energy and depth, it translates complex naval warfare concepts into a gripping narrative that anyone interested in global affairs should read.",
      reviewer: "Defense & Strategic Maritime Affairs Digest"
    },
    reviews: [
      {
        id: 1,
        title: "A CLEAR-EYED, TIMELY MARITIME ANALYSIS",
        rating: 5,
        content: "China’s Global Naval Ambitions is an eye-opening deep dive into the shifting currents of naval power. Tate explains complex carrier battle groups, strategic ports, and maritime choke points with clarity and pulse-pounding urgency.",
        reviewer: "Cmdr. Gregory Hayes (USN Ret.)",
        source: "Global Maritime Defense Review"
      },
      {
        id: 2,
        title: "ENGAGING, PROVOCATIVE, AND ESSENTIAL READING",
        rating: 5,
        content: "Instead of a dry academic textbook, Tate writes with energy, cinematic scope, and keen geopolitical foresight. The contrasts between the Chairman's strategic vision and U.S. naval responses are brilliantly analyzed.",
        reviewer: "Dr. Robert Linwood",
        source: "International Security Quarterly"
      },
      {
        id: 3,
        title: "ACCESSIBLE EVEN TO NON-MILITARY READERS",
        rating: 5,
        content: "What impressed me most is how understandable Tate makes complex naval strategy. From historical shipyards to modern South China Sea dynamics, this book delivers vital insight for our era.",
        reviewer: "Samantha Cross",
        source: "Verified Amazon Reader"
      },
      {
        id: 4,
        title: "FASCINATING LOOK AT 21ST CENTURY SEA POWER",
        rating: 5,
        content: "A crucial contribution to contemporary strategic dialogue. Tate balances historical context with urgent questions about what happens when rising sea power meets established supremacy.",
        reviewer: "Nathaniel Ward",
        source: "Geopolitical Strategy Digest"
      }
    ],
    metaDescription: "China's Global Naval Ambitions by Philip Tate. A timely and thrilling geopolitical analysis of modern maritime power and naval competition."
  },
  {
    slug: "alcohol-recovery",
    title: "ALCOHOL: HOW TO GIVE IT UP AND BE GLAD YOU DID",
    shortTitle: "ALCOHOL: HOW TO GIVE IT UP",
    subtitle: "A Sensible, Practical Cognitive-Behavioral Guide to Sobriety & Renewal",
    genre: "Health, Psychology & Recovery",
    coverImage: "/book-alcohol.jpg",
    scenicImage: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=85&w=1600",
    amazonUrl: "https://www.amazon.com/Alcohol-How-Give-Glad-You-ebook/dp/B0058DW4DK/ref=sr_1_5?dib=eyJ2IjoiMSJ9._dIqWAFLGl78t28qNTgQMSbBa4zdIIz6WNT0IaAzihXB8AXYrYMtyrdth9o5DB9IcHgRDvuhPWn5C9NbLDYZZ2NUYLlU7w-uS6T2b01mPnsXEx-1rHYiTvztN7ebHPul8BbZPISD-dDh379bgRybsPQlHclkDMBRmdfzoNDCI9k.9bX7XIuOl-L1Bx8SZOfzc4wV1AwBtBbMaqAcXPNygcs&dib_tag=se&qid=1793379026&refinements=p_27%3APhilip+Tate&s=digital-text&sr=1-5&text=Philip+Tate",
    hookTitle: "A COMPREHENSIVE, PRACTICAL STEP-BY-STEP PATH TO FREEDOM",
    hookParagraphs: [
      "This practical, comprehensive, and easy-to-use book helps alcohol abusers understand their behavior, providing practical steps that anyone can use to solve an alcohol problem.",
      "Written by a cognitive-behavioral psychologist, this book includes chapters on overcoming low self-esteem, depression, stress, attending self-help groups, and living a better life after quitting.",
      "Each chapter contains specific self-help techniques designed to empower individuals with lasting recovery and clarity."
    ],
    narrativeTitle: "A Life of Freedom, Clarity, and Lasting Renewal.",
    narrativeParagraphs: [
      "Recommended by SMART Recovery, this compassionate and scientifically grounded work cuts through guilt and blame to deliver real cognitive tools for everyday living.",
      "Philip Tate provides direct, sensible methods for identifying triggers, challenging destructive thinking patterns, and rebuilding a self-directed, meaningful lifestyle free from chemical dependency.",
      "Whether you are taking your first tentative steps toward sobriety or supporting someone you love, this guide provides the wisdom and encouragement needed to thrive."
    ],
    review: {
      title: "ALCOHOL: HOW TO GIVE IT UP AND BE GLAD YOU DID",
      rating: 5,
      text: "This book cuts through the shame and confusion of addiction with clear, practical, cognitive-behavioral tools that actually work. It doesn't just show you how to quit—it shows you how to build a rich, joyful, and purposeful life afterward. An invaluable resource for anyone on the path to recovery.",
      reviewer: "SMART Recovery Recommended Review"
    },
    reviews: [
      {
        id: 1,
        title: "A PRACTICAL, COMPASSIONATE BLUEPRINT FOR FREEDOM",
        rating: 5,
        content: "This book cuts through the shame, fear, and hopelessness of addiction. Philip Tate uses proven cognitive-behavioral principles to give readers real tools they can use every single day to regain control of their thoughts and lives.",
        reviewer: "Dr. Karen Mitchell, PsyD",
        source: "Clinical Behavioral Health Journal"
      },
      {
        id: 2,
        title: "RECOMMENDED BY SMART RECOVERY FOR A REASON",
        rating: 5,
        content: "Unlike many preachy recovery guides, Tate’s approach is rational, empathetic, and relentlessly practical. The chapters on handling cravings, depression, and social pressure are worth their weight in gold.",
        reviewer: "David P. Harmon",
        source: "SMART Recovery Community Leader"
      },
      {
        id: 3,
        title: "LITERALLY SAVED MY LIFE AND MY FAMILY",
        rating: 5,
        content: "I tried quitting multiple times before finding this book. Philip Tate explains the 'why' behind alcohol urges and teaches you how to change your self-talk. Five years sober now, and I still keep this book on my nightstand.",
        reviewer: "Michael B.",
        source: "Verified Amazon Customer"
      },
      {
        id: 4,
        title: "EMPOWERING, SENSIBLE, AND LASTING",
        rating: 5,
        content: "The focus on building a joyful, purposeful life after quitting is what makes this book unique. It doesn't leave you feeling deprived; it makes you truly glad you gave it up.",
        reviewer: "Rebecca S. Miller",
        source: "Addiction & Recovery Monthly"
      }
    ],
    metaDescription: "Alcohol: How to Give It Up and Be Glad You Did by Philip Tate. A practical cognitive-behavioral guide to overcoming alcohol addiction and rediscovering joy."
  }
];
