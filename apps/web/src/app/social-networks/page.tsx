"use client";
import React from "react";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";

const socialNetworks = [
  {
    title: "Instagram",
    profile_url: "https://www.instagram.com/mahesh.muttinti/",
    posts: {
      anime_reels: [
        {
          category: "Anime",
          title: "Chopper is breaking the zoro's legs",
          url: "https://www.instagram.com/p/C7x4CkVSpTB/",
          tags: ["onepiece", "anime"],
        },
      ],
    },
  },
  {
    title: "YouTube",
    profile_url: "https://www.youtube.com/@omega.developer",
    posts: {
      anime_reels: [
        {
          category: "Anime",
          title: "Demon Slayer Hashira arc",
          url: "https://www.youtube.com/shorts/VuoFjvc3rOg",
          tags: ["onepiece", "demonslayer"],
        },
      ],
    },
  },
];

export default function SocialNetwork() {
  return (
    <section className="flex flex-wrap gap-5 container p-3 justify-center items-center font-['Inter'] overflow-hidden">
      {socialNetworks?.map((socialNetwork, socialNetworkIndex) => {
        return (
          <section
            className="flex-[0.6]"
            key={`socialNetwork_${socialNetworkIndex}`}
          >
            <h2
              className={"text-xl py-3 font-bold ".concat(
                `text-[#${((Math.random() * 0xfffff) << 0)
                  ?.toString()
                  ?.padStart(5, "0")}]`
              )}
            >
              {socialNetwork?.title}
            </h2>
            <section className="rounded-md">
              <div className="">
                {Object.entries(socialNetwork?.posts || {})?.map(
                  ([key, postItem], postItemIndex) => {
                    return (
                      <div
                        className="w-[300px]"
                        key={`postItem_${postItemIndex}`}
                      >
                        <h3 className="text-md font-semibold py-3 text-red-500">
                          {key?.toUpperCase()?.split("_")?.join(" ")}
                        </h3>
                        {postItem?.map((pi, piIdx) => {
                          return (
                            <React.Fragment key={`pi_index_${piIdx}`}>
                              {socialNetwork?.title?.toLowerCase() ===
                              "instagram" ? (
                                <InstagramEmbed width={320} url={pi?.url} />
                              ) : socialNetwork?.title?.toLowerCase() ===
                                "youtube" ? (
                                <YouTubeEmbed width={320} url={pi?.url} />
                              ) : null}
                            </React.Fragment>
                          );
                        })}
                      </div>
                    );
                  }
                )}
              </div>
            </section>
          </section>
        );
      })}
    </section>
  );
}
