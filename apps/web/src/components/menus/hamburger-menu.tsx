import React from "react";
import { BaseLinkWithLogo } from "../links/base-link-with-logo";
import { TextLinkWithSaitama } from "../links/text-links-with-saitama";
import { PagesType } from "../nav-bar";

export function HamburgerMenu({
  toggleMenu,
  showMenu,
  pages,
  closeMenu,
}: {
  toggleMenu: () => void;
  showMenu: boolean;
  pages: PagesType;
  closeMenu: () => void;
}) {
  return (
    <>
      <div className="fixed nav-theme-bg w-full flex flex-wrap gap-3 items-center justify-between px-5 z-10 bg-blue-950 text-white">
        <BaseLinkWithLogo hide />
        <div
          onClick={toggleMenu}
          className="transition-all flex cursor-pointer flex-wrap items-center justify-center gap-1 md:hidden py-2 border-2 border-white rounded-md h-10 w-12"
        >
          {showMenu ? (
            <p className="text-4xl text-center text-white mt-[-12px]">x</p>
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
        <nav className="z-10 mt-[-10px] py-5 nav-theme-menu-bg fixed top-16 flex flex-col gap-5 container mx-auto justify-center items-center">
          {pages?.map((page, index) => (
            <TextLinkWithSaitama
              key={`hamburger_menu_item_${index}`}
              page={page}
              closeMenu={closeMenu}
            />
          ))}
        </nav>
      ) : null}
    </>
  );
}
