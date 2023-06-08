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
        <meta property="og:url" content="https://www.maheshmuttintidev.in" />
        <meta
          property="og:title"
          content='Mahesh Muttinti'
        />
        <meta
          property="og:description"
          content="Mahesh Muttinti"
        />
        <meta property="og:site_name" content="Mahesh Muttinti" />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:image" content="/android-chrome-512x512.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
