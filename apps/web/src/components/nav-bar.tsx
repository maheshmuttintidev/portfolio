"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BaseLinkWithLogo } from "./links/base-link-with-logo";
import { TextLinkWithSaitama } from "./links/text-links-with-saitama";

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
  const pathname = usePathname();
  console.log("adsfsdfd", pathname);
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
    <section className="fixed top-0 w-full z-[100]">
      <div className="hidden md:block pt-5 pb-2 z-10 nav-theme-menu-bg">
        <nav className="flex flex-wrap gap-5 container mx-auto justify-center items-center">
          <BaseLinkWithLogo />
          {pages?.map((page, index) => (
            <div key={`page_${index}`}>
              <TextLinkWithSaitama
                key={`hamburger_menu_item_${index}`}
                page={page}
                closeMenu={closeMenu}
              />
            </div>
          ))}
        </nav>
      </div>

      <div className="fixed nav-theme-bg w-full flex flex-wrap gap-3 items-center justify-between px-5 z-10">
        <BaseLinkWithLogo hide />
        <div
          onClick={toggleMenu}
          className="transition-all flex cursor-pointer flex-wrap items-center justify-center gap-1 md:hidden py-2 border-2 border-black dark:border-white rounded-md h-10 w-12"
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
        <nav className="z-10 nav-theme-menu-bg fixed top-20 right-0 flex flex-col gap-5 container mx-auto justify-center items-center">
          {pages?.map((page, index) => (
            <TextLinkWithSaitama
              key={`hamburger_menu_item_${index}`}
              page={page}
              closeMenu={closeMenu}
            />
          ))}
        </nav>
      ) : null}
    </section>
  );
}
