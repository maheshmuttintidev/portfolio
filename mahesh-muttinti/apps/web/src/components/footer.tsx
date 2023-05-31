import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 py-4 mt-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} maheshmuttintidev.in. All rights
              reserved.
              <Link href="/legal/privacy-policy" className="text-blue-500 ml-2">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>
      <p className="mt-2">Developed by Mahesh Muttinti</p>
    </>
  );
};

export default Footer;
