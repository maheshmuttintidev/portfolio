import React, { Suspense } from "react";
import Head from "next/head";
import "./globals.css";
import { HomePageLayoutComponents } from "@/components/home-page-layout-components";
import Loading from "./loading";

export const revalidate = 30;

export default async function Web() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Portfolio</title>
      </Head>
      <Suspense fallback={<Loading />}>
        <main className="mx-auto text-center container">
          <HomePageLayoutComponents />
        </main>
      </Suspense>
    </>
  );
}
