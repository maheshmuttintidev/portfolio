"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSinglePost } from "services";

export default async function Page() {
  const params = useParams();

  const slug = params?.slug?.split("-").join(" ");
  // const singleBlog = await getSinglePost(`${slug}`);
  const [singleBlog, setSingleBlog] = useState<null>(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await getSinglePost(`${slug}`);
        setSingleBlog(data);
      } catch (error) {
        console.log("errorr", error);
      }
    })();
  }, []);

  return (
    <div className="mx-auto container items-center text-center">
      <pre className="text-center mx-auto">
        {JSON.stringify(singleBlog, null, 2)}
      </pre>
    </div>
  );
}