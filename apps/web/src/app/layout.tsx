import "./globals.css";
import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

export const metadata = {
  title: "Mahesh Muttinti - Full Stack Web and Mobile Application Developer",
  description:
    "My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I build Websites and Mobile Applications using React JS, React Native.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      new URL("/favicon.ico", "https://maheshmuttintidev.in"),
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  metadataBase: new URL("https://maheshmuttintidev.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mahesh Muttinti - Full Stack Web and Mobile Application Developer",
    description:
      "My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I build Websites and Mobile Applications using React JS, React Native.",
    url: "https://maheshmuttintidev.in",
    siteName: "Mahesh Muttinti | Portfolio Website",
    locale: "en",
    type: "website",
    image: "https://maheshmuttintidev.in/brand_banner.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Muttinti - Full Stack Web and Mobile Application Developer",
    description:
      "My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I build Websites and Mobile Applications using React JS, React Native.",
    creator: "@MaheshMuttinti",
    images: ["https://maheshmuttintidev.in/brand_banner.webp"],
  },
  keywords: [
    "Mahesh Muttinti",
    "Mahesh",
    "Mahesh M",
    "maheshmuttinti",
    "mahesh muttinti",
    "maheshMuttinti",
    "MaheshMuttinti",
    "M Mahesh",
    "React",
    "react",
    "React Native",
    "react native",
    "Mobile Application",
    "mobile application",
    "developer",
    "Developer",
    "web",
    "web development",
    "web application",
    "Web Application",
    "Full Stack developer",
    "Full stack developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-bg">
      <head>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>
        <div className="mx-auto w-full overflow-hidden">
          <div itemScope itemType="http://schema.org/Person">
            <span itemProp="name">Mahesh Muttinti</span>
            <span itemProp="company">Mahesh Muttinti</span>
            <span itemProp="tel">+919603757304</span>
            <a itemProp="email" href="mailto:maheshmuttinti@gmail.com">
              maheshmuttinti@gmail.com
            </a>
          </div>

          <NavBar />
          <div className="md:pt-4 theme-bg theme-text">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
