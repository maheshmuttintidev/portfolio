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
        <title>Mahesh Muttinti | Portfolio</title>
      </Head>

      <main className="container mx-auto px-4 my-5">
        <div className="flex flex-row flex-wrap mt-3 justify-center items-center">
          <Image
            src={"https://i.ibb.co/z27TLdM/prof-look-for-contacting.png"}
            height={200}
            width={400}
            className="rounded"
            alt="Mahesh Muttinti Banner Logo"
            title="Mahesh Muttinti Banner Logo"
          />

          <div className="w-2/3 flex flex-col gap-10 text-center justify-center items-center">
            <p className="text-xl font-sans text-center md:text-3xl">
              {`If you need any help with website development or mobile app
              development, I've got your back. Let's collaborate and bring your
              ideas to life! Looking forward to working together.`}
            </p>
            <Stack
              direction={"row"}
              sx={{ gap: 3, alignItems: "center", flexWrap: "wrap" }}
            >
              <a
                href="tel:+919603757304"
                className="dark:bg-transparent bg-yellow-500 rounded"
              >
                <Button
                  variant="text"
                  sx={{ color: "yellow", borderColor: "yellow" }}
                >
                  <CallIcon sx={{ marginRight: 2, height: 40, width: 40 }} />
                </Button>
              </a>
              <a href="https://twitter.com/MaheshMuttinti" target="_blank" rel="noopener">
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
              >
                <Button
                  variant="text"
                  sx={{ color: "orange", borderColor: "orange" }}
                >
                  <InstagramIcon
                    sx={{ marginRight: 2, height: 40, width: 40 }}
                  />
                </Button>
              </a>

              <a
                href="https://wa.me/919603757304?text=Hello%20Mahesh%20Muttinti!"
                target="_blank"
                rel="noopener"
              >
                <Button
                  variant="text"
                  sx={{ color: "lime", borderColor: "lime" }}
                >
                  <WhatsAppIcon
                    sx={{ marginRight: 2, height: 40, width: 40 }}
                  />
                </Button>
              </a>
            </Stack>
          </div>
        </div>
      </main>
    </>
  );
}
