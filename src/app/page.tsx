import EternalLifeCta from "@/components/EternalLifeCta";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { LatestMessages } from "@/components/MessagesLibrary";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import ScriptureBanner from "@/components/ScriptureBanner";
import Services from "@/components/Services";
import StillThatChurch from "@/components/StillThatChurch";
import WelcomePastor from "@/components/WelcomePastor";
import { getMessages } from "@/lib/messages";
import { canonical, pastor, serviceTimes, site } from "@/lib/site";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": canonical("/#church"),
  name: site.name,
  alternateName: [site.shortName, "Countryside Baptist Port Washington"],
  url: canonical("/"),
  slogan: site.tagline,
  description: site.description,
  foundingDate: "1975-08-25",
  image: canonical("/csbc/sanctuary-wide.jpg"),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: [
    { "@type": "City", name: "Port Washington" },
    { "@type": "City", name: "Newcomerstown" },
    { "@type": "AdministrativeArea", name: site.address.county },
    { "@type": "State", name: site.address.regionName },
  ],
  hasMap: site.mapUrl,
  sameAs: [site.social.facebook, site.social.youtube],
  employee: {
    "@type": "Person",
    name: `${pastor.name}`,
    jobTitle: pastor.title,
  },
  openingHoursSpecification: serviceTimes.map((service) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: service.day,
    opens: service.opens,
    closes: service.closes,
    name: service.title,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": canonical("/#faq"),
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Countryside Baptist Church located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${site.name} is at ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}, just off US-36 in ${site.address.county}, Ohio.`,
      },
    },
    {
      "@type": "Question",
      name: "What time are services at Countryside Baptist Church?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunday School is at 10:00 a.m., Morning Worship at 11:00 a.m., and Sunday Evening service at 6:00 p.m. Prayer Meeting and Bible Study is Wednesday at 7:00 p.m.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of church is Countryside Baptist Church?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is an Independent, old-fashioned Baptist church that preaches from the King James Bible and sings classic hymns from the hymnal. It is not affiliated with a denominational headquarters.",
      },
    },
    {
      "@type": "Question",
      name: "What should I wear to Countryside Baptist Church?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no dress code. You will see suits and ties as well as slacks and a shirt. Come as you are able.",
      },
    },
    {
      "@type": "Question",
      name: "Can I listen to sermons from Countryside Baptist Church online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sunday morning, Sunday evening, and Wednesday evening services are recorded and posted to the church's YouTube channel, and are listed on the sermons page of this site.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": canonical("/#website"),
  name: site.name,
  url: canonical("/"),
  description: site.description,
  inLanguage: "en-US",
  publisher: { "@id": canonical("/#church") },
  about: { "@id": canonical("/#church") },
};

const structuredData = [churchSchema, faqSchema, websiteSchema];

export default async function Home() {
  const messages = await getMessages(4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <WelcomePastor />
        <Services />
        <StillThatChurch />
        <Mission />
        <ScriptureBanner />
        <LatestMessages messages={messages} />
        <EternalLifeCta />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
