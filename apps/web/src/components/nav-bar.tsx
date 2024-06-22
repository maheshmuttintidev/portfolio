"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import WebsiteIcon from "../../public/apple-touch-icon.png";

const pages = [
  {
    name: "Projects",
    redirectTo: "/projects",
    className: "font-bold text-xl",
    isActive: false,
  },
  {
    name: "Posts",
    redirectTo: "/posts",
    className: "font-bold text-xl",
    isActive: false,
  },
  {
    name: "Social Networks",
    redirectTo: "/social-networks",
    className: "font-bold text-xl",
    isActive: false,
  },
  {
    name: "Contact",
    redirectTo: "/contact",
    className: "font-bold text-xl",
    isActive: false,
  },
  {
    name: "Resume",
    redirectTo: "/resume",
    className: "font-bold text-xl",
    isActive: false,
  },
];

export function NavBar() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [hideMinHeading, setHideMinHeading] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  React.useLayoutEffect(() => {
    window.addEventListener("load", () => {
      if (window.innerWidth > 768) {
        closeMenu();
        setHideMinHeading(true);
      } else {
        setHideMinHeading(false);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
        setHideMinHeading(true);
      } else {
        setHideMinHeading(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        setHideMinHeading(false);
        setShowMenu(false);
      });
    };
  }, []);

  return (
    <>
        <div className="fixed top-0 left-0 h-12 w-full bg-[#0E1339] shadow-lg shadow-black">
          <Link prefetch={false} href={"/"} className="py-3">
            <Image
              src={WebsiteIcon}
              className="object-contain w-full h-10 top-1"
              alt="website icon"
            />
          </Link>
        </div>
      <div className="hidden md:block py-5">
        <nav className="flex flex-wrap gap-5 container md:mt-10 mx-auto justify-center items-center">
          {pages?.map((page, index) => (
            <React.Fragment key={`page_${index}`}>
              <Link
                prefetch={false}
                className={"link ml-3 "?.concat(page?.className)}
                href={page?.redirectTo}
              >
                {page?.name}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      </div>

      <div className="relative flex flex-wrap gap-3 items-center justify-center bg-zinc-100">
        <div
          onClick={toggleMenu}
          className="transition-all fixed top-0 mt-2 right-5 flex cursor-pointer flex-wrap items-center justify-center gap-1 md:hidden py-2 border border-2 border-white rounded-md h-10 w-12"
        >
          {showMenu ? (
            <div className="text-4xl text-center mt-[-12px]">x</div>
          ) : (
            Array(3)
              .fill(1)
              .map((_, index) => (
                <div
                  key={`hamburger-line-${index}`}
                  className="bg-white h-1 w-8 px-2"
                />
              ))
          )}
        </div>
      </div>

      {showMenu ? (
        <nav className="z-10 bg-gradient-to-r from-red-400 to-yellow-200 fixed top-14 right-0 flex flex-col container mx-auto justify-center items-center">
          {pages?.map((page, index) => (
            <React.Fragment key={`page_${index}`}>
              <Link
                prefetch={false}
                onClick={closeMenu}
                className={"link w-full border-0 "?.concat(page?.className)}
                href={page?.redirectTo}
              >
                {page?.name}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      ) : null}
    </>
  );
}
