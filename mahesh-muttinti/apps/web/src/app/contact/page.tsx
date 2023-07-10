"use client";
import * as React from "react";
import Head from "next/head";
import Footer from "@/components/footer";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, Stack, Typography } from "@mui/material";

export default async function Contact() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Portfolio</title>
      </Head>

      <main className="container mx-auto px-4">
        <Stack direction={"column"} sx={{ gap: 3, alignItems: "center" }}>
          <a href="tel:+919603757304">
            <Button
              variant="outlined"
              sx={{ color: "yellow", borderColor: "yellow" }}
            >
              <CallIcon sx={{ marginRight: 2 }} />
              <span>+919603757304</span>
            </Button>
          </a>
          <a href="https://twitter.com/MaheshMuttinti" target="_blank">
            <Button
              variant="outlined"
              sx={{ color: "royalblue", borderColor: "royalblue" }}
            >
              <TwitterIcon sx={{ marginRight: 2 }} />
              <span>MaheshMuttinti</span>
            </Button>
          </a>
          <a href="https://www.instagram.com/mahesh_muttinti/" target="_blank">
            <Button
              variant="outlined"
              sx={{ color: "orange", borderColor: "orange" }}
            >
              <InstagramIcon sx={{ marginRight: 2 }} />
              <span> @mahesh_muttinti</span>
            </Button>
          </a>

          <a
            href="https://wa.me/919603757304?text=Hello%Mahesh%Muttinti!"
            target="_blank"
          >
            <Button
              variant="outlined"
              sx={{ color: "lime", borderColor: "lime" }}
            >
              <WhatsAppIcon sx={{ marginRight: 2 }} />
              <span> Contact via WhatsApp</span>
            </Button>
          </a>
        </Stack>

        <Footer />
      </main>
    </>
  );
}
