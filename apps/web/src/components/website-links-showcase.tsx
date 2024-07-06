import React from "react";

const websites = [
  {
    name: "Santha Market World",
    url: "https://santhamarket-world.maheshmuttintidev.in/",
    description: "A global marketplace platform for diverse products.",
  },
  {
    name: "Omega Developer",
    url: "https://omega-developer.maheshmuttintidev.in/",
    description:
      "A platform for developers with a variety of tools and resources.",
  },
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
];

const WebsiteCard = ({ name, url, description }: any) => (
  <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6 m-4">
    <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
      {name}
    </h4>
    <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
    <a
      href={url}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600 underline"
    >
      Visit {name}
    </a>
  </div>
);

export const WebsitesShowcase = () => (
  <div className="py-10">
    <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
      My Websites
    </h3>
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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
