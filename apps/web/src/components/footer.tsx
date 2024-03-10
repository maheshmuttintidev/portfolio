import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="py-4 mt-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <p className="text-green-500 text-xl md:text-2xl">
              &copy; {new Date().getFullYear()} <span className="font-bold font-mono underline" title="Mahesh Muttinti Official Website">maheshmuttintidev.in</span>. All rights
              reserved.
              <Link
                href="/legal/privacy-policy"
                className="text-blue-500 ml-2 hover:underline active:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;