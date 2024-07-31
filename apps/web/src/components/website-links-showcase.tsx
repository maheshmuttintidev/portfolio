import React from "react";

const websites = [
  {
    name: "Live Markdown Previewer",
    url: "https://live-markdown-previewer.maheshmuttintidev.in/",
    description: "A live preview tool for Markdown files.",
  },
  {
    name: "React All",
    url: "https://react-all.maheshmuttintidev.in/",
    description: "A collection of React components and utilities.",
  },
  {
    name: "Omega Developer",
    url: "https://omega-developer.maheshmuttintidev.in/",
    description:
      "A platform for developers with a variety of tools and resources.",
  },
  {
    name: "Santha Market World",
    url: "https://santhamarket-world.maheshmuttintidev.in/",
    description: "A global marketplace platform for diverse products.",
  },
];

const WebsiteCard = ({ name, url, description }: any) => (
  <div
    title={name}
    className="my-custom-card cursor-default hover:bg-slate-100 hover:border-2 border-2 hover:skew-y-3 hover:skew-x-3 hover:odd:skew-x-[-3deg] transition-all shadow-md rounded-lg p-6 m-4 scale-95 hover:scale-100"
  >
    <h4 className="text-2xl font-bold mb-2 theme-text">
      {name}
    </h4>
    <p className="theme-text mb-4">{description}</p>
    <a
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      className="theme-text hover:text-red-700 dark:hover:red-blue-600 underline"
    >
      Visit {name}
    </a>
  </div>
);

export const WebsitesShowcase = () => (
  <div className="py-10 my-custom-card">
    <h3 className="text-3xl font-bold text-center mb-10 theme-text">
      My Websites
    </h3>
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 scale-95 hover:scale-100 transition-all">
      {websites.map((website) => (
        <WebsiteCard
          key={website.url}
          name={website.name}
          url={website.url}
          description={website.description}
        />
      ))}
    </div>
  </div>
);
