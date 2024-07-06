import "./globals.css";
import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

export const metadata = {
  title: "Mahesh Muttinti | Professional Website",
  description:
    "My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I have more than 2 years of experience in React JS, React Native and Node JS. I am working on Mainly Website development, Mobile App development.",
  metadataBase: new URL("https://maheshmuttintidev.in"),
  openGraph: {
    title: "Mahesh Muttiti | Portfolio Website",
    description:
      "My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I have more than 2 years of experience in React JS, React Native and Node JS. I am working on Mainly Website development, Mobile App development.",
    url: "https://maheshmuttintidev.in",
    siteName: "Mahesh Muttinti | Portfolio Website",
    locale: "en",
    type: "website",
    image: "/brand_banner.webp",
  },
  twitter: {
    card: "/brand_banner.webp",
    title: "Mahesh Muttiti | Portfolio Website",
    site: "@MaheshMuttinti",
    description:
      "My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I have more than 2 years of experience in React JS, React Native and Node JS. I am working on Mainly Website development, Mobile App development.",
    url: "https://maheshmuttintidev.in",
    siteName: "Mahesh Muttinti | Portfolio Website",
    locale: "en",
    type: "website",
    image: "/brand_banner.webp",
  },
  keywords: [
    "Mahesh",
    "Mahesh M",
    "Mahesh Muttinti",
    "maheshmuttinti",
    "mahesh muttinti",
    "maheshMuttinti",
    "MaheshMuttinti",
    "M Mahesh",
  ],
  icons: "/favicon.ico",
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
      </head>
      <body>
        <div className="mx-auto w-full overflow-hidden">
          <NavBar />
          <div className="md:pt-4 theme-bg theme-text">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
