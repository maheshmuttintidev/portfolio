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
                className="border-white text-teal-300 text-[2rem] md:text-[6rem] font-extrabold text-center md:leading-[6rem]"
              >
                Mahesh Muttinti
              </h1>
            </div>
            <nav className="container flex gap-4 self-center flex-col md:flex-row justify-between mt-10">
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
        </div>
        <div className="md:pt-4 px-5">{children}</div>
        <div className="container mx-auto flex flex-col justify-center">
          <Footer />
        </div>
      </body>
    </html>
  );
}
