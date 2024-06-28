"use client";
import React from "react";
import Head from "next/head";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, Stack } from "@mui/material";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Contact</title>
      </Head>

      <main className="container mx-auto px-4 mb-5 mt-10 flex md:flex-row-reverse md:justify-between">
        <div className="flex flex-row flex-wrap mt-3 justify-center items-center w-1/2">
          <Image
            width={300}
            height={200}
            src={"https://i.ibb.co/z27TLdM/prof-look-for-contacting.png"}
            className="rounded object-contain"
            alt="Mahesh Muttinti Banner Logo"
            title="Mahesh Muttinti Banner Logo"
          />

          <div className="mt-3 flex flex-col gap-10 text-center justify-center items-center">
            <p className="text-xl text-justify md:text-2xl font-['Inter']">
              {`If you need any help with website development or mobile app
              development, I've got your back. Let's collaborate and bring your
              ideas to life! Looking forward to working together.`}
            </p>
          </div>
        </div>

        <Stack
          direction={"row"}
          sx={{
            gap: 3,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+919603757304"
            className="rounded"
          >
            <Button
              variant="text"
              sx={{ color: "yellow", borderColor: "yellow" }}
            >
              <CallIcon sx={{ marginRight: 2, height: 40, width: 40 }} />
            </Button>
          </a>
          <a
            href="https://twitter.com/MaheshMuttinti"
            target="_blank"
            rel="noopener"
          >
            <Button
              variant="text"
              sx={{ color: "royalblue", borderColor: "royalblue" }}
            >
              <TwitterIcon sx={{ marginRight: 2, height: 40, width: 40 }} />
            </Button>
          </a>
          <a
            href="https://www.instagram.com/mahesh_muttinti/"
            target="_blank"
            rel="noopener"
          >
            <Button
              variant="text"
              sx={{ color: "orange", borderColor: "orange" }}
            >
              <InstagramIcon sx={{ marginRight: 2, height: 40, width: 40 }} />
            </Button>
          </a>

          <a
            href="https://wa.me/919603757304?text=Hello%20Mahesh%20Muttinti!"
            target="_blank"
            rel="noopener"
          >
            <Button variant="text" sx={{ color: "lime", borderColor: "lime" }}>
              <WhatsAppIcon sx={{ marginRight: 2, height: 40, width: 40 }} />
            </Button>
          </a>
        </Stack>
      </main>
    </>
  );
}
