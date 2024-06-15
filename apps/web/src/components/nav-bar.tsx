import * as React from "react";
import Link from "next/link";

const pages = [
  { name: "Mahesh Muttinti", redirectTo: "/", className: 'font-bold text-2xl text-center text-lime-500 w-full', isActive: false },
  { name: "Projects", redirectTo: "/projects", className: 'font-bold text-xl', isActive: false },
  { name: "Posts", redirectTo: "/posts", className: 'font-bold text-xl', isActive: false },
  { name: "Social Networks", redirectTo: "/social-networks", className: 'font-bold text-xl', isActive: false },
  { name: "Contact", redirectTo: "/contact", className: 'font-bold text-xl', isActive: false },
  { name: "Resume", redirectTo: "/resume", className: 'font-bold text-xl', isActive: false },
];

export function NavBar() {
  return (
    <nav className="flex flex-wrap gap-5 container sticky top-1 mx-auto justify-center items-center py-5">
      {pages?.map((page, index) => (
        <React.Fragment key={`page_${index}`}>
          <Link
            className={"link "?.concat(page?.className)}
            href={page?.redirectTo}
          >
            {page?.name}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}
