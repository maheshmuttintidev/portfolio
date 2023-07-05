import * as React from "react";
import Head from "next/head";
import Footer from "@/components/footer";

export default async function Contact() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Portfolio</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="mt-5">
          <h3>
            Mobile:{" "}
            <b className="hover:underline active:underline cursor-pointer">
              +919603757304
            </b>
          </h3>
          <h3>
            Twitter:{" "}
            <b className="hover:underline active:underline cursor-pointer">
              @mmuttinti
            </b>
          </h3>
          <h3>
            Instagram:{" "}
            <b className="hover:underline active:underline cursor-pointer">
              @maheshmuttinti
            </b>
          </h3>
        </div>

        <Footer />
      </main>
    </>
  );
}
