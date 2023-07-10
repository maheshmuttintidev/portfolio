"use client";

import ProjectsList from "@/components/projects-list";
import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation";
// import { getSinglePost } from "services";

export default async function Page() {
  const params = useParams();
  const slug = params?.slug?.split("-").join(" ");
  // const singleBlog = await getSinglePost(`${slug}`);

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
