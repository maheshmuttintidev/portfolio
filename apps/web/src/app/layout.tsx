import Link from "next/link";
import "./globals.css";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "Mahesh Muttinti | Professional Website",
  description:
    "Mahesh Muttinti is Full Stack Developer and he can develop mobile and android applications using react, react-native",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0E1339]">
      <head>
        <meta property="og:type" content="Home" />
        <meta property="og:url" content="https://maheshmuttintidev.in" />
        <meta property="og:title" content="Mahesh Muttinti | Portfolio" />
        <meta
          property="og:description"
          content="My Name is Mahesh Muttinti. I am a Full Stack Web & Mobile Application Developer. I have 2 years of experience in React JS, React Native and Node JS. I am working on Mainly Website development, Mobile App development for now. If you require any help from my side either website development or mobile app development."
        />
        <meta property="og:site_name" content="Mahesh Muttinti" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:image" content="https://i.ibb.co/kSd8fPg/main.jpg" />
      </head>
      <body>
        <div className="mx-auto w-full overflow-hidden dark:text-white text-black">
          <div className="md:pt-4 pt-3 dark:bg-[#0E1339]">{children}</div>
          <div className="mx-auto flex flex-col justify-center">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
