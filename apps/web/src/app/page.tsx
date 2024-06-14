"use client";
import React from "react";
import Head from "next/head";
import "./globals.css";
import { HomePageLayoutComponents } from "@/components/home-page-layout-components";

export const revalidate = 30;
export default async function Web() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Portfolio</title>

        <meta property="og:title" content="Mahesh Muttinti | Portfolio" />
        <meta
          property="og:description"
          content="Mahesh is an full stack web and mobile application developer"
        />
        <meta property="og:image" content="public/main.png" />
      </Head>

      <main className="mx-auto pb-8 text-center container">
        <HomePageLayoutComponents />
      </main>
    </>
  );
}
