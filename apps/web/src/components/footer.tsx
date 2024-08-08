import React from "react";
import Link from "next/link";
import { SocialLinksGroup } from "./social-links-groups";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="py-4 font-['Inter'] text-center bg-black mt-5 shadow-lg shadow-white"
    >
      <div className="container mx-auto px-4 flex justify-between items-center flex-wrap gap-7">
        <SocialLinksGroup />
        <div className="flex justify-center w-full items-center">
          <p className="text-white text-center mt-4">
            &copy; {new Date().getFullYear()}{" "}
            <span
              className="font-bold font-mono underline"
              title="Mahesh Muttinti Official Website"
            >
              maheshmuttintidev.in
            </span>
            <span>. All rights reserved.</span>
            <br />
            <Link
              href="/legal/privacy-policy"
              className="text-white md:font-semibold font-bold ml-2 hover:underline active:underline"
              title="Privacy Policy"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
