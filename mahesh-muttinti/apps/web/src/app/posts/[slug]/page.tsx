import { deepGet } from "@/app/lib/utils/deepGet";
import { PostDetail } from "@/components/single-post";
import Link from "next/link";
import { getSinglePost } from "services";

export const revalidate = 60;

export default async function Page({ params }: any) {
  const slug = params?.slug?.split("-").join(" ");
  const singleBlog = await getSinglePost(`${slug}`);
  console.log("singleBlog", JSON.stringify(singleBlog));
  const desc = deepGet(singleBlog?.results?.[0], [
    "properties",
    "Description",
    "rich_text",
    0,
    "plain_text",
  ]);
  const bannerImage = deepGet(singleBlog?.results?.[0], [
    "properties",
    "Banner",
    "files",
    0,
    "file",
    "url",
  ]);

  return (
    <>
      <div className="mx-auto container items-center">
        <Link className="text-3xl font-semibold text-left" href="/posts">
          {"<-"} Back
        </Link>

        <PostDetail title={slug} description={desc} bannerImage={bannerImage} />
      </div>
    </>
  );
}
