import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const SocialLinksGroup = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 dark:text-white text-black">
      <a
        href="tel:+919603757304"
        className="dark:bg-transparent rounded "
        title="Call Mahesh Muttinti"
      >
        <CallIcon sx={{ height: 40, width: 40, color: "royalblue" }} />
      </a>
      <a
        href="https://x.com/MaheshMuttinti"
        target="_blank"
        rel="noopener"
        title="Connect Mahesh Muttinti on X"
      >
        <XIcon sx={{ height: 40, width: 40 }} />
      </a>
      <a
        href="https://www.instagram.com/mahesh.muttinti/"
        target="_blank"
        rel="noopener"
        title="Connect Mahesh Muttinti on Instagram"
      >
        <InstagramIcon sx={{ height: 40, width: 40, color: "tomato" }} />
      </a>

      <a
        href="https://wa.me/919603757304?text=Hello Mahesh Muttinti!"
        target="_blank"
        rel="noopener"
        title="Connect Mahesh Muttinti on WhatsApp"
      >
        <WhatsAppIcon sx={{ height: 40, width: 40, color: "lime" }} />
      </a>
    </div>
  );
};
