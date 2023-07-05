import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
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
        <meta
          property="og:image"
          content="https://i.ibb.co/bR6Y79D/android-chrome-512x512.png"
        />
      </head>
      <body className={inter.className}>
        <div className="container flex justify-center flex-wrap m-auto h-[20rem] md:h-[30rem] rounded-xl backdrop-blur self-center w-full px-4">
          <div className="self-center">
            <div>
              <h1
                title="Mahesh Muttinti Main Text"
                className="border-white text-black text-[3rem] md:text-[6rem] font-extrabold text-center"
              >
                Mahesh Muttinti
              </h1>
            </div>
            <nav className="flex gap-4 self-center flex-wrap justify-between mt-5">
              <Link
                className="text-black py-2 px-4 rounded hover:bg-black hover:text-white"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-black py-2 px-4 rounded hover:bg-black hover:text-white"
                href="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="text-black py-2 px-4 rounded hover:bg-black hover:text-white"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-black py-2 px-4 rounded hover:bg-black hover:text-white"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
