import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SaitamaPissedOff from "../../../public/saitama_blank_stage.webp";
import Image from "next/image";

export function TextLinkWithSaitama({
  page,
  closeMenu,
}: {
  page: { redirectTo: string; name: string; className: string };
  closeMenu: () => void;
}) {
  const pathname = usePathname();
  return (
    <div className="relative mr-4 md:mt-0 mb-3">
      {pathname === page.redirectTo ? (
        <div className="border-2 rounded-full border-white absolute h-10 w-10 top-[-20px] right-[-30px]">
          <Image
            src={SaitamaPissedOff}
            className="object-contain rounded-full"
            alt="Saitama Pissed Off Logo"
            title="Saitama Pissed Off Logo"
          />
        </div>
      ) : null}
      <Link
        prefetch={false}
        onClick={closeMenu}
        className={
          pathname === page.redirectTo
            ? "active-link w-full border-0 "?.concat(page?.className)
            : "link w-full border-0 "?.concat(page?.className)
        }
        href={page?.redirectTo}
        title={page?.name}
      >
        {page?.name}
      </Link>
    </div>
  );
}
