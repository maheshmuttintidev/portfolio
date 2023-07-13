'use client';
import { useParams } from "next/navigation";
import { getSinglePost } from "services";

export default async function Page() {
  const params = useParams();
  const slug = params?.slug?.split("-").join(" ");
  const singleBlog = await getSinglePost(`${slug}`);

  return (
    <div className="mx-auto container items-center text-center">
      <pre className="text-center mx-auto">{JSON.stringify(singleBlog, null, 2)}</pre>
    </div>
  );
}
