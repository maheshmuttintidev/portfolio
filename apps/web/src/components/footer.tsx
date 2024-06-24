import React from "react";
import Link from "next/link";

const Footer = () => {
  const imageUrl =
    "data:image/png;base64,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";

  return (
    <>
      <footer className="py-4 font-['Inter'] text-center bg-slate-900 mt-5 shadow-lg shadow-white">
        <div className="container mx-auto px-4 flex flex-col justify-between items-center md:flex-row flex-wrap gap-5">
          <Link
            href="https://play.google.com/store/apps/details?id=com.maheshmuttintirnmobileapp"
            rel="noopener"
            target="_blank"
            className="flex flex-col items-center gap-3"
          >
            <img
              src={imageUrl}
              alt="Mahesh Muttinti Mobile App"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-center">Mobile App</p>
          </Link>
          <p className="text-green-500 mt-4">
            &copy; {new Date().getFullYear()}{" "}
            <span
              className="font-bold font-mono underline"
              title="Mahesh Muttinti Official Website"
            >
              maheshmuttintidev.in
            </span>
            . All rights reserved.
            <br />
            <Link
              href="/legal/privacy-policy"
              className="text-yellow-500 ml-2 hover:underline active:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
