import Link from "next/link";
import "./globals.css";
import Footer from "@/components/footer";

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
      <body>
        <div className="container flex justify-center flex-wrap m-auto mb-10 h-[20rem] md:h-[30rem] rounded-xl backdrop-blur self-center w-full px-4">
          <div className="self-center">
            <div>
              <h1
                title="Mahesh Muttinti Main Text"
                className="border-white text-teal-300 text-[3rem] md:text-[6rem] font-extrabold text-center leading-[6rem]"
              >
                Mahesh Muttinti
              </h1>
            </div>
            <nav className="container flex gap-4 self-center flex-col justify-between mt-10">
              <Link
                className="text-white md:text-3xl text-4xl py-2 px-4 rounded hover:bg-white hover:text-black border border-white shadow-xl md:w-3/4 w-full"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-white md:text-3xl text-4xl py-2 px-4 rounded hover:bg-white hover:text-black border border-white shadow-xl md:w-2/3 w-full"
                href="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="text-white md:text-3xl text-4xl py-2 px-4 rounded hover:bg-white hover:text-black border border-white shadow-xl md:w-1/2 w-full"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-white md:text-3xl text-4xl py-2 px-4 rounded hover:bg-white hover:text-black border border-white shadow-xl md:w-1/2 w-full"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="pt-[10rem] sm:pt-7 px-5">{children}</div>
        <div className="container mx-auto flex flex-col justify-center">
          <Footer />
        </div>
      </body>
    </html>
  );
}
