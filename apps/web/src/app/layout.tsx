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
        <div className="container mx-auto">
          <div className="flex justify-center flex-wrap mx-auto rounded-xl self-center w-full px-4">
            <nav className="h-max pt-3 mt-3 flex gap-4 flex-col self-end items-end md:flex-row justify-between sticky top-2">
              <Link className="link" href="/">
                Home
              </Link>
              <Link className="link" href="/posts">
                Posts
              </Link>
              <Link className="link" href="/projects">
                Projects
              </Link>
              <Link className="link" href="/contact">
                Contact
              </Link>
            </nav>
          </div>
          <div className="md:pt-4 px-5 pt-3">{children}</div>
          <div className="mx-auto flex flex-col justify-center">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
