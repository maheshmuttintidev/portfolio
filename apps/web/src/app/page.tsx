import * as React from "react";
import Head from "next/head";
import "./globals.css";
import { HomePageLayoutComponents } from "@/components/home-page-layout-components";

export const revalidate = 30;
export default async function Web() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Portfolio</title>
      </Head>

      <main className="mx-auto pb-8 text-center container">
        <HomePageLayoutComponents />
      </main>
    </>
  );
}
