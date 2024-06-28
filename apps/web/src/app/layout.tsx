import "./globals.css";
import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

export const metadata = {
  title: "Mahesh Muttinti | Professional Website",
  description:
    "My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I have more than 2 years of experience in React JS, React Native and Node JS. I am working on Mainly Website development, Mobile App development.",
  openGraph: {
    title: "Mahesh Muttiti",
    description:
      "My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I have more than 2 years of experience in React JS, React Native and Node JS. I am working on Mainly Website development, Mobile App development.",
    url: "https://maheshmuttintidev.in/", //pending mark as canonical
    siteName: "Mahesh Muttinti",
    locale: "en",
    type: "website",
  },
  keywords: [
    "Mahesh",
    "Mahesh M",
    "Mahesh Muttinti",
    "maheshmuttinti",
    "mahesh muttinti",
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
        <meta property="og:type" content="Home" />
        <meta property="og:url" content="https://maheshmuttintidev.in" />
        <meta property="og:title" content="Mahesh Muttinti | Portfolio" />
        <meta
          property="og:description"
          content="My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I have 2 years of experience in React JS, React Native and Node JS. I am working on Mainly Website development, Mobile App development for now. If you require any help from my side either website development or mobile app development."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Mahesh Muttinti" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:image" content="/favicon.ico" />
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
