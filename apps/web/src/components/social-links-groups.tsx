import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import X from "@mui/icons-material/X";
import Call from "@mui/icons-material/Call";
import Instagram from "@mui/icons-material/Instagram";
import Reddit from "@mui/icons-material/Reddit";
import WhatsApp from "@mui/icons-material/WhatsApp";
import GitHub from "@mui/icons-material/GitHub";
import YouTube from "@mui/icons-material/YouTube";
import LinkedIn from "@mui/icons-material/LinkedIn";

export const SocialLinksGroup = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 dark:text-white text-black">
      <a
        href="tel:+919603757304"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all"
        title="Call Mahesh Muttinti"
      >
        <Call sx={{ height: 40, width: 40, color: "royalblue" }} />
      </a>
      <a
        href="https://x.com/MaheshMuttinti"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all"
        title="Connect Mahesh Muttinti on X"
      >
        <X sx={{ height: 40, width: 40 }} />
      </a>
      <a
        href="https://www.facebook.com/mahesh.muttinti.1999/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all"
        title="Connect Mahesh Muttinti on Facebook"
      >
        <Facebook sx={{ height: 40, width: 40, color: "royalblue" }} />
      </a>
      <a
        href="https://www.instagram.com/mahesh.muttinti/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all"
        title="Connect Mahesh Muttinti on Instagram"
      >
        <Instagram sx={{ height: 40, width: 40, color: "tomato" }} />
      </a>
      <a
        href="https://wa.me/919603757304?text=Hello Mahesh Muttinti!"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all"
        title="Connect Mahesh Muttinti on WhatsApp"
      >
        <WhatsApp sx={{ height: 40, width: 40, color: "lime" }} />
      </a>
      <a
        href="https://www.reddit.com/user/mahesh-muttinti/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all"
        title="Connect Mahesh Muttinti on Reddit"
      >
        <Reddit sx={{ height: 40, width: 40, color: "orange" }} />
      </a>
      <a
        href="https://github.com/maheshmuttintidev/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all"
        title="Connect Mahesh Muttinti on GitHub"
      >
        <GitHub sx={{ height: 40, width: 40, color: "grey" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/mahesh-muttinti-4a2b61202/"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all"
        title="Connect Mahesh Muttinti on LinkedIn"
      >
        <LinkedIn sx={{ height: 40, width: 40, color: "cyan" }} />
      </a>
      <a
        href="https://www.youtube.com/channel/UC_4y9u6Id5aU2g-_vUMA5Vg"
        target="_blank"
        rel="noopener"
        className="hover:scale-105 transition-all"
        title="Connect Mahesh Muttinti on YouTube"
      >
        <YouTube sx={{ height: 40, width: 40, color: "red" }} />
      </a>
      <a
        id="cy-effective-orcid-url"
        className="hover:scale-105 transition-all"
        href="https://orcid.org/0009-0000-3994-5923"
        target="orcid.widget"
        rel="me noopener noreferrer"
        title="Connect Mahesh Muttinti on ORCID"
      >
        <img
          src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
          alt="ORCID iD icon"
          className="h-10 w-10"
        />
      </a>
    </div>
  );
};
