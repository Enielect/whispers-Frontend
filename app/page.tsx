import Image from "next/image";
import Link from "next/link";
import { Figma, Github, Linkedin, Twitter } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whispers - Anonymous Messaging Platform | Share Thoughts Securely",
  description:
    "Whispers is a secure anonymous messaging platform where you can share your thoughts freely. Send and receive anonymous messages in organized inboxes with complete privacy protection.",
  keywords: [
    "anonymous messaging",
    "secure messaging",
    "private messages",
    "anonymous communication",
    "confidential messaging",
    "secret messages",
    "privacy messaging app",
    "anonymous feedback",
    "secure inbox",
  ],
  authors: [
    { name: "Ukeme Edet" },
    { name: "Eniola Abayomi" },
    { name: "Bukunmi Ogunneye" },
  ],
  creator: "Whispers Team",
  publisher: "Whispers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whispers-gray.vercel.app",
    title: "Whispers - Anonymous Messaging Platform",
    description:
      "Share your thoughts anonymously and securely with Whispers. Create multiple inboxes and communicate freely with complete privacy.",
    siteName: "Whispers",
    images: [
      {
        url: "/images/whisper-hero.png",
        width: 1200,
        height: 630,
        alt: "Whispers - Anonymous Messaging Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whispers - Anonymous Messaging Platform",
    description:
      "Share your thoughts anonymously and securely. Send and receive private messages with complete privacy protection.",
    images: ["/images/whisper-hero.png"],
    creator: "@eniola_aba",
  },
  alternates: {
    canonical: "https://whispers-gray.vercel.app",
  },
  category: "technology",
  verification: {
    google: "OWTwFYVLt-HdcUiC7Gd8cLzNk-9B_EomyzLxNJLtMbY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Whispers",
  applicationCategory: "CommunicationApplication",
  operatingSystem: "Web Browser",
  description:
    "A secure anonymous messaging platform where you can share your thoughts freely and receive anonymous messages in organized inboxes.",
  url: "https://whispers-gray.vercel.app",
  image: "https://whispers-gray.vercel.app/images/whisper-hero.png",
  author: [
    {
      "@type": "Person",
      name: "Ukeme Edet",
      jobTitle: "Project Lead, Backend Engineer",
      sameAs: [
        "https://www.github.com/Ukeme-Edet",
        "https://www.linkedin.com/in/ukeme-edet-12961a227",
        "https://x.com/ukeme__edet",
      ],
    },
    {
      "@type": "Person",
      name: "Eniola Abayomi",
      jobTitle: "Frontend Engineer",
      sameAs: [
        "https://www.github.com/Enielect",
        "https://www.linkedin.com/in/eniola-abayomi-045605232",
        "https://x.com/enielect",
      ],
    },
    {
      "@type": "Person",
      name: "Bukunmi Ogunneye",
      jobTitle: "UI/UX Engineer",
      email: "bukunmiogunneye0@gmail.com",
    },
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Anonymous messaging",
    "Secure communication",
    "Multiple inboxes",
    "Privacy protection",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Whispers really anonymous?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We do not collect or store any identifying information about message senders. Your identity remains completely private when you send anonymous messages.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create an inbox?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply sign up for a free account, and you can create as many inboxes as you need. Each inbox can be customized for different purposes or groups.",
      },
    },
    {
      "@type": "Question",
      name: "Is Whispers free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Whispers is completely free to use. You can send and receive unlimited anonymous messages at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Can I delete messages I receive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. You have full control over your inbox and can delete any messages you receive at any time.",
      },
    },
    {
      "@type": "Question",
      name: "How does Whispers protect my privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use industry-standard encryption and do not track sender information. Our platform is designed with privacy as the top priority, ensuring all communications remain anonymous and secure.",
      },
    },
  ],
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      ></script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      ></script>
      <TopNav />
      <main className="flex-grow">
        <IntroSection />
        <FeaturesSection />
        <AboutSection />
        <FAQSection />
      </main>
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Whispers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function TopNav() {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/#hero" className="text-xl font-bold">
          Whispers
        </a>
        <div className="space-x-4">
          <a href="/#features" className="hover:text-gray-300">
            Features
          </a>
          <a href="/#about" className="hover:text-gray-300">
            About
          </a>
          <a href="/#faq" className="hover:text-gray-300">
            FAQ
          </a>
        </div>
      </nav>
    </header>
  );
}

function IntroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, white 20%, black 100%)",
        }}
        className="absolute w-screen"
      ></div>
      <Image
        src="/images/whisper-hero.png"
        alt="Whispers Anonymous Messaging Platform - Share thoughts securely"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="absolute inset-0 blur-sm"
        priority
      />
      <div className="absolute inset-0 bg-[#151515] opacity-50"></div>
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-6xl font-bold">Whispers</h1>
        <p className="text-2xl px-2">
          Share your thoughts, anonymously and securely
        </p>
        <Link
          href="/inbox"
          target="_blank"
          className="inline-block bg-[#06D440] text-gray-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          Start Whispering
        </Link>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              name: "Organized Inbox",
              description:
                "Easily view messages from your inbox in a clean and organized manner.",
              image: "/images/anonymous-message.png",
              alt: "Screenshot of organized inbox showing anonymous messages in a clean interface",
            },
            {
              name: "Managing Inboxes",
              description:
                "You can create as many inboxes as you want, with each of them streamlining to specifics.",
              image: "/images/manage-inbox.png",
              alt: "Multiple inbox management interface for organizing anonymous messages by category",
            },
            {
              name: "Anonymous Messaging",
              description:
                "Send messages without revealing your identity. Our platform ensures your privacy.",
              image: "/images/send-anonymous.png",
              alt: "Send anonymous message form with privacy protection features",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white border-white border rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                width={400}
                height={300}
                className="w-full h-[13rem] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-black font-semibold mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#151515] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Whispers</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            Whispers was born out of a desire to create a safe space for people
            to express themselves freely. In a world where privacy is
            increasingly scarce, we believe in the power of anonymous
            communication to foster genuine connections and open dialogues.
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 py-2">Our Team</h3>
            <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-center space-x-6">
              {[
                {
                  name: "Ukeme",
                  role: "Project Lead, Backend Engineer",
                  links: [
                    "https://www.github.com/Ukeme-Edet",
                    "https://www.linkedin.com/in/ukeme-edet-12961a227",
                    "https://twitter.com/ukeme__edet",
                  ],
                },
                {
                  name: "Eniola",
                  role: "Frontend Engineer",
                  links: [
                    "https://www.github.com/Enielect",
                    "https://www.linkedin.com/in/eniola-abayomi-045605232",
                    "https://twitter.com/enielect",
                  ],
                },
              ].map((member) => (
                <div className="" key={member.name}>
                  <p>{member.name}</p>
                  <p>({member.role})</p>
                  <div className="flex justify-center py-2 space-x-2">
                    <Link
                      href={member.links[0]}
                      className="hover:text-gray-300"
                    >
                      <Github className="w-6 h-6" />
                    </Link>
                    <Link
                      href={member.links[1]}
                      className="hover:text-gray-300"
                    >
                      <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link
                      href={member.links[2]}
                      className="hover:text-gray-300"
                    >
                      <Twitter className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              ))}

              <div>
                <p>Bukunmi</p>
                <p>(UI/UX Engineer)</p>
                <a
                  href="mailto:bukunmiogunneye0@gmail.com"
                  target="_blank"
                  className="flex justify-center py-2 space-x-2"
                >
                  {/* link to my gmail */}
                  bukunmiogunneye0@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-3 text-lg">View on GitHub</div>

            <Link
              href="https://github.com/Enielect/anonymous"
              className="inline-block bg-white mr-4 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Frontend
            </Link>
            <Link
              href="https://github.com/Ukeme-Edet/Whispers-Backend"
              className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Backend
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Is Whispers really anonymous?",
      answer:
        "Yes! We do not collect or store any identifying information about message senders. Your identity remains completely private when you send anonymous messages.",
    },
    {
      question: "How do I create an inbox?",
      answer:
        "Simply sign up for a free account, and you can create as many inboxes as you need. Each inbox can be customized for different purposes or groups.",
    },
    {
      question: "Is Whispers free to use?",
      answer:
        "Yes, Whispers is completely free to use. You can send and receive unlimited anonymous messages at no cost.",
    },
    {
      question: "Can I delete messages I receive?",
      answer:
        "Absolutely. You have full control over your inbox and can delete any messages you receive at any time.",
    },
    {
      question: "How does Whispers protect my privacy?",
      answer:
        "We use industry-standard encryption and do not track sender information. Our platform is designed with privacy as the top priority, ensuring all communications remain anonymous and secure.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-[#151515] rounded-lg p-6 group">
              <summary className="text-xl font-semibold cursor-pointer list-none flex justify-between items-center">
                {faq.question}
                <span className="ml-4 transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-300 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
