"use client";
import * as React from "react";
import Link from "next/link";

const pages = [
  {
    name: "Mahesh Muttinti",
    redirectTo: "/",
    className:
      "font-bold text-2xl text-center text-yellow-500 drop-shadow-xl drop-shadow-red-400 w-full shadow-none shadow-transaprent",
    isActive: false,
  },
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
      <div className="hidden md:block py-5">
        <nav className="flex flex-wrap gap-5 container mx-auto justify-center items-center">
          {pages?.map((page, index) => (
            <React.Fragment key={`page_${index}`}>
              <Link
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
        {!hideMinHeading ? (
          <div className="bg-black w-full h-16 fixed pt-4 top-0">
            <Link
              className={"link w-max ml-auto "?.concat(pages[0]?.className)}
              href={pages[0]?.redirectTo}
            >
              {pages[0]?.name}
            </Link>
          </div>
        ) : null}

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
          {pages?.slice(1)?.map((page, index) => (
            <React.Fragment key={`page_${index}`}>
              <Link
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
