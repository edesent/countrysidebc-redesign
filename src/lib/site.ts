/**
 * Every fact on this site comes from countrysidebc.com, the church's own
 * Facebook page, or their Ohio Secretary of State filing. Nothing is invented.
 * Items flagged CONFIRM are best-guess phrasing for the church to approve.
 */

export const siteUrl = "https://www.countrysidebc.com";

export const site = {
  name: "Countryside Baptist Church",
  shortName: "Countryside Baptist",
  tagline: "Church the way it used to be.",
  /** From their Facebook page description. */
  descriptor:
    "An Independent, Old-Fashioned, King James Bible-believing Baptist church",
  description:
    "Countryside Baptist Church is an Independent Baptist church in Port Washington, Ohio — King James Bible preaching, classic hymns, and a welcome that has not changed since 1975. Sunday School 10:00, Worship 11:00, Sunday evening 6:00, Wednesday 7:00.",
  founded: 1975,
  address: {
    street: "4283 Shoemaker Road SW",
    city: "Port Washington",
    region: "OH",
    regionName: "Ohio",
    postalCode: "43837",
    country: "US",
    county: "Tuscarawas County",
  },
  /** Reference numbers are assembled client-side, never printed into the HTML. */
  phoneEncoded: "KzE3NDA0OTg1NTAw", // +17404985500
  phoneDisplayEncoded: "KDc0MCkgNDk4LTU1MDA=", // (740) 498-5500
  contactPath: "/contact",
  geo: {
    // The church's own building, as mapped in OpenStreetMap ("Countryside
    // Baptist Church" on Shoemaker Rd SW, just off US-36). The figure that
    // used to sit here reverse-geocoded to River Road SW, about two miles
    // north-east — wrong road. These coordinates go out in the Church
    // JSON-LD, so they need to be the building, not the neighbourhood.
    latitude: 40.3008478,
    longitude: -81.5465712,
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Countryside+Baptist+Church%2C+4283+Shoemaker+Rd+SW%2C+Port+Washington%2C+OH+43837",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Countryside+Baptist+Church%2C+4283+Shoemaker+Rd+SW%2C+Port+Washington%2C+OH+43837",
  social: {
    facebook: "https://www.facebook.com/countrysidebc",
    youtube: "https://www.youtube.com/@countrysidebaptistchurchpo2442",
    youtubeChannelFeed:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCfOTOQ7Uucrqv_EE5Q0Asxw",
    /** Their current live site, linked from the demo banner. */
    currentSite: "https://countrysidebc.com",
  },
  legal: {
    legalName: "Countryside Baptist Church",
    charterNumber: "470602",
    documentType: "Certificate of Continued Existence (CCE)",
    documentId: "202604301482",
    effectiveDate: "February 12, 2026",
    incorporated: "August 25, 1975",
    stateOfIncorporation: "Ohio",
    principalOffice: "Port Washington, Tuscarawas County, Ohio",
    statutoryAgentAddress: "4283 Shoemaker Rd SW, Port Washington, OH 43837",
    ein: "05-0597638",
    // Deliberately not printed in the footer copyright — the church asked for
    // it off that line. The transparency page still states it in full.
    orgType: "501(c)(3) Religious Organization",
  },
} as const;

export function canonical(path = "/") {
  return new URL(path, siteUrl).toString();
}

/* ── Services ─────────────────────────────────────────────────────────────── */

export interface ServiceTime {
  day: "Sunday" | "Wednesday";
  title: string;
  time: string;
  opens: string;
  closes: string;
  blurb: string;
}

export const serviceTimes: ServiceTime[] = [
  {
    day: "Sunday",
    title: "Sunday School",
    time: "10:00 a.m.",
    opens: "10:00",
    closes: "10:50",
    blurb:
      "Classes for every age, straight out of the Book. A good hour to arrive if it is your first Sunday — the halls are busy and nobody notices a new face standing still.",
  },
  {
    day: "Sunday",
    title: "Morning Worship",
    time: "11:00 a.m.",
    opens: "11:00",
    closes: "12:15",
    blurb:
      "Hymns from the hymnal, an offering, and preaching from the King James Bible. This is the service most visitors come to first. Junior Church is available for N3 through 6th grade.",
  },
  {
    day: "Sunday",
    title: "Sunday Evening",
    time: "6:00 p.m.",
    opens: "18:00",
    closes: "19:15",
    blurb:
      "Quieter, a little more informal, and often the service people say they loved most. Same Book, same singing.",
  },
  {
    day: "Wednesday",
    title: "Prayer Meeting & Bible Study",
    time: "7:00 p.m.",
    opens: "19:00",
    closes: "20:15",
    blurb:
      "Midweek. We pray for one another by name and work through a passage together.",
  },
];

/* ── The three words their mission is built on ─────────────────────────────── */

export const missionPillars = [
  {
    word: "Glorify",
    verse: "1 Corinthians 10:31",
    text: "Everything we do here — the singing, the giving, the preaching, the potluck afterward — is meant to bring glory to God rather than attention to us.",
  },
  {
    word: "Evangelize",
    verse: "Acts 1:8",
    text: "Our city, our county, our state, our country, and the world, with the Gospel of our Lord and Saviour Jesus Christ. In that order, and starting with the people down the road.",
  },
  {
    word: "Edify",
    verse: "Ephesians 4:12",
    text: "Building up the saints for the work of the ministry, so that believers here grow up rather than merely attend.",
  },
] as const;

export const missionStatement =
  "The mission of Countryside Baptist Church is to glorify God by evangelizing our city, our county, our state, our country, and the world with the Gospel of our Lord and Saviour Jesus Christ; and by edifying the saints for the work of the ministry so that all may glorify our Father in Heaven.";

export const missionRefs =
  "1 Corinthians 10:31; 1 Peter 4:11; Acts 1:8; 1 Corinthians 14:26; Ephesians 4:12, 16; Matthew 5:16; John 12:32";

/* ── Pastor ───────────────────────────────────────────────────────────────── */

export const pastor = {
  name: "Paul Harvey",
  title: "Pastor",
  photo: "/csbc/pastor-harvey.jpg",
  familyPhoto: "/csbc/pastor-harvey-family.jpg",
  wife: "Joanna",
  married: 2002,
  children: ["Daniel", "Caleb", "Abigail"],
  arrived: "August 2013",
  seniorPastorSince: "October 2018",
  ordained: "May 14, 1995",
  ordainedAt: "First Baptist Church of Spring Valley, California",
  yearsInMinistry: "over 30 years",
  /** A one-line welcome in the pastor's own register. CONFIRM with Pastor Harvey. */
  welcomeQuote:
    "We are not trying to be the newest church in Tuscarawas County. We are trying to be a faithful one — the same Book, the same hymns, and a door that is genuinely open to you.",
  education: [
    {
      credential: "Associate of Arts, Bible",
      school: "Pacific Coast Baptist Bible College",
      place: "San Dimas, California",
      year: "May 1995",
    },
    {
      credential: "Bachelor of Biblical Studies",
      school: "San Diego Baptist Bible Institute & Theological Seminary",
      place: "San Diego, California",
      year: "1998",
    },
    {
      credential: "Master of Ministry",
      school: "San Diego Baptist Bible Institute & Theological Seminary",
      place: "San Diego, California",
      year: "1999",
    },
  ],
  service: [
    {
      years: "1995 – 2001",
      role: "Assistant Pastor & Director of Ministries",
      place: "First Baptist Church of Spring Valley, California",
      detail:
        "Also taught and served as principal at Spring Valley Baptist Academy, and as a professor at San Diego Baptist Bible Institute & Theological Seminary.",
    },
    {
      years: "2001 – 2013",
      role: "Teacher, Guidance Counselor & Bus Driver",
      place: "Landmark Christian School, Haines City, Florida",
      detail:
        "Taught History and Bible, oversaw the Yearbook, counseled students, and drove the bus. Also taught night classes as a professor at Landmark Baptist College in 2001–2002.",
    },
    {
      years: "2013 – 2018",
      role: "Assistant Pastor, then Intern Pastor",
      place: "Countryside Baptist Church, Port Washington, Ohio",
      detail:
        "Joined Countryside in August 2013 and served as Assistant Pastor until May 2018, then as Intern Pastor.",
    },
    {
      years: "2018 – present",
      role: "Senior Pastor",
      place: "Countryside Baptist Church, Port Washington, Ohio",
      detail:
        "Called to serve as Senior Pastor in October 2018, with a strong emphasis on biblical teaching and community outreach.",
    },
  ],
} as const;

/* ── What a first visit is actually like ──────────────────────────────────── */

export const visitFacts = [
  {
    q: "What should I wear?",
    a: "You will see suits and ties, and you will see slacks and a shirt. Come as you are able — nobody is going to hand you a dress code at the door.",
  },
  {
    q: "Where do I park, and which door?",
    a: "Parking is on the property off Shoemaker Road SW. Come in the main entrance; someone will be there to point you toward Sunday School or the auditorium.",
  },
  {
    q: "Will I be singled out?",
    a: "You will be greeted, and you will be glad you came — but you will not be asked to stand up, introduce yourself, or fill anything out.",
  },
  {
    q: "What Bible do you preach from?",
    a: "The King James Bible, every service. If you do not own one, we will put one in your hands.",
  },
  {
    q: "What is the music like?",
    a: "Classic hymns out of the hymnal, sung by the congregation. No band.",
  },
  {
    q: "What about my children?",
    a: "Sunday School has classes for every age at 10:00. Children are welcome in the service with you, and no one minds the noise.",
  },
] as const;

/* ── SEO ──────────────────────────────────────────────────────────────────── */

export const localKeywords = [
  "Countryside Baptist Church",
  "Baptist church Port Washington Ohio",
  "Independent Baptist church Tuscarawas County",
  "King James Bible church Ohio",
  "church near Newcomerstown Ohio",
  "old fashioned Baptist church Ohio",
  "Sunday School Port Washington OH",
  "KJV preaching church near me",
];
