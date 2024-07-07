import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import X from "@mui/icons-material/X";
import Call from "@mui/icons-material/Call";
import Instagram from "@mui/icons-material/Instagram";
import Reddit from "@mui/icons-material/Reddit";
import WhatsApp from "@mui/icons-material/WhatsApp";
import GitHub from "@mui/icons-material/GitHub";

export const SocialLinksGroup = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 dark:text-white text-black">
      <a
        href="tel:+919603757304"
        className="dark:bg-transparent rounded "
        title="Call Mahesh Muttinti"
      >
        <Call sx={{ height: 40, width: 40, color: "royalblue" }} />
      </a>
      <a
        href="https://x.com/MaheshMuttinti"
        target="_blank"
        rel="noopener"
        title="Connect Mahesh Muttinti on X"
      >
        <X sx={{ height: 40, width: 40 }} />
      </a>
      <a
        href="https://www.facebook.com/mahesh.muttinti.1999/"
        target="_blank"
        rel="noopener"
        title="Connect Mahesh Muttinti on Facebook"
      >
        <Facebook sx={{ height: 40, width: 40, color: "royalblue" }} />
      </a>
      <a
        href="https://www.instagram.com/mahesh.muttinti/"
        target="_blank"
        rel="noopener"
        title="Connect Mahesh Muttinti on Instagram"
      >
        <Instagram sx={{ height: 40, width: 40, color: "tomato" }} />
      </a>
      <a
        href="https://wa.me/919603757304?text=Hello Mahesh Muttinti!"
        target="_blank"
        rel="noopener"
        title="Connect Mahesh Muttinti on WhatsApp"
      >
        <WhatsApp sx={{ height: 40, width: 40, color: "lime" }} />
      </a>
      <a
        href="https://www.reddit.com/user/mahesh-muttinti/"
        target="_blank"
        rel="noopener"
        title="Connect Mahesh Muttinti on Reddit"
      >
        <Reddit sx={{ height: 40, width: 40, color: "red" }} />
      </a>
      <a
        href="https://github.com/maheshmuttintidev/"
        target="_blank"
        rel="noopener"
        title="Connect Mahesh Muttinti on GitHub"
      >
        <GitHub sx={{ height: 40, width: 40, color: "grey" }} />
      </a>
    </div>
  );
};
