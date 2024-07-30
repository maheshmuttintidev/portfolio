import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WebsiteIcon from "../../app/apple-icon.png";
import React from "react";

export function BaseLinkWithLogo({ hide = false }) {
  const pathname = usePathname();
  return (
    <Link
      prefetch={false}
      href={"/"}
      className={
        pathname === "/"
          ? `${hide ? "md:hidden" : ""} w-14 h-14 my-2 border-4 border-yellow-300 shadow-xl rounded-full`
          : `${hide ? "md:hidden" : ""} w-14 h-14 my-2 border-4 border-transparent`
      }
      title="Home Page"
    >
      <Image
        src={WebsiteIcon}
        className="object-contain rounded-full"
        alt="Website Logo"
        title="Website Logo"
      />
    </Link>
  );
}
