"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import WebsiteIcon from "../app/apple-icon.png";

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
    name: "Contact",
    redirectTo: "/contact",
    className: "font-bold text-xl",
    isActive: false,
  },
  {
    name: "Recent Interviews",
    redirectTo: "/interview-attempts",
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
      <div className="fixed top-0 left-0 h-12 w-full nav-theme-bg z-[4] shadow-sm shadow-white">
        <Link prefetch={false} href={"/"} className="py-3" title="Home Page">
          <Image
            src={WebsiteIcon}
            className="object-contain w-full h-10 top-1"
            alt="Website Logo"
            title="Website Logo"
          />
        </Link>
      </div>
      <div className="hidden md:block pt-5 pb-2 z-10 nav-theme-menu-bg">
        <nav className="flex flex-wrap gap-5 container md:mt-10 mx-auto justify-center items-center">
          {pages?.map((page, index) => (
            <React.Fragment key={`page_${index}`}>
              <Link
                prefetch={false}
                className={"link ml-3 "?.concat(page?.className)}
                href={page?.redirectTo}
                title={page?.name}
              >
                {page?.name}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      </div>

      <div className="nav-theme-bg relative flex flex-wrap gap-3 items-center justify-center bg-zinc-100 z-10">
        <div
          onClick={toggleMenu}
          className="transition-all fixed top-0 mt-1 right-5 flex cursor-pointer flex-wrap items-center justify-center gap-1 md:hidden py-2 border-2 border-black dark:border-white rounded-md h-10 w-12"
        >
          {showMenu ? (
            <p className="text-4xl text-center theme-text mt-[-12px]">x</p>
          ) : (
            Array(3)
              .fill(1)
              .map((_, index) => (
                <div
                  key={`hamburger-line-${index}`}
                  className="dark:bg-white bg-black h-1 w-8 px-2"
                />
              ))
          )}
        </div>
      </div>

      {showMenu ? (
        <nav className="z-10 nav-theme-menu-bg fixed top-12 right-0 flex flex-col container mx-auto justify-center items-center">
          {pages?.map((page, index) => (
            <React.Fragment key={`page_${index}`}>
              <Link
                prefetch={false}
                onClick={closeMenu}
                className={"link w-full border-0 "?.concat(page?.className)}
                href={page?.redirectTo}
                title={page?.name}
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
