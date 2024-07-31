import React from "react";
import Head from "next/head";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import Saitama from "../../../public/Saitama-8.png";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Contact</title>
      </Head>

      <main className="container mx-auto px-4 mb-5 mt-10 flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
        <div className="md:w-1/2 w-full flex flex-row flex-wrap mt-3 justify-center items-center">
          <Image
            width={300}
            height={200}
            src={Saitama}
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
      </main>
    </>
  );
}
