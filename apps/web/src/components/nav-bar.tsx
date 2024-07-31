"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { BaseLinkWithLogo } from "./links/base-link-with-logo";
import { TextLinkWithSaitama } from "./links/text-links-with-saitama";
import { HamburgerMenu } from "./menus/hamburger-menu";

export interface PageType {
  name: string;
  redirectTo: string;
  className: string;
  isActive: boolean;
}

export interface PagesType extends Array<PageType> {}

const pages: PagesType = [
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
  const [showMenu, setShowMenu] = React.useState(false);

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
      } else {
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        setShowMenu(false);
      });
    };
  }, []);

  return (
    <section className="fixed top-0 w-full z-[100]">
      <div className="hidden md:block pt-5 z-10 nav-theme-menu-bg">
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
      <HamburgerMenu
        toggleMenu={toggleMenu}
        showMenu={showMenu}
        pages={pages}
        closeMenu={closeMenu}
      />
    </section>
  );
}
