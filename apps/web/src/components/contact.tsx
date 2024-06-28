import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, Stack } from "@mui/material";
import Image from "next/image";

export const Contact = () => {
  return (
    <main className="container mx-auto px-4 pt-3 mb-5">
      <div className="flex flex-row flex-wrap mt-3 justify-center items-center">
        <Image
          src={"https://i.ibb.co/z27TLdM/prof-look-for-contacting.png"}
          height={200}
          width={400}
          className="rounded"
          alt="Mahesh Muttinti Banner Logo"
          title="Mahesh Muttinti Banner Logo"
        />

        <h3 className="text-xl text-justify md:text-3xl font-['Inter']">
          If you need any help with website development or mobile app
          development, I've got your back. Let's collaborate and bring your
          ideas to life! Looking forward to working together.
        </h3>
      </div>
      <div className="flex flex-row flex-wrap gap-3 bg-red-400">
        <a href="tel:+919603757304" className="dark:bg-transparent rounded">
          <CallIcon />
        </a>
        <a
          href="https://twitter.com/MaheshMuttinti"
          target="_blank"
          rel="noopener"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.instagram.com/mahesh.muttinti/"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon />
        </a>

        <a
          href="https://wa.me/919603757304?text=Hello Mahesh Muttinti!"
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </main>
  );
};
