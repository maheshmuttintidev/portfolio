"use client";

import ProjectsList from "@/components/projects-list";
import { Container } from "@mui/material";
import Head from "next/head";
import { useParams } from "next/navigation";

export default async function Page() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Blogs</title>
      </Head>
      <Container>
        <ProjectsList />
      </Container>
    </>
  );
}
