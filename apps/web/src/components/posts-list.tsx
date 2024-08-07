import { deepGet } from "@/app/lib/utils/deepGet";
import { splitWith } from "@/app/lib/utils/splitWith";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "services";
import ImageWithFallback from "./image/image-with-fallback";

const getPostSlug = (post: any) =>
  splitWith(
    deepGet(post, ["properties", "Title", "title", 0, "text", "content"])
  );

const getPostTitle = (post: any) =>
  deepGet(post, ["properties", "Title", "title", 0, "text", "content"]);

const getPostImage = (post: any) =>
  deepGet(post, ["properties", "Banner", "files", 0, "file", "url"]);

const getPostDescription = (post: any) =>
  deepGet(post, ["properties", "Description", "rich_text", 0, "plain_text"])
    ?.slice(0, 100)
    ?.trim();

export default async function BlogsList() {
  const posts = await getPosts();

  return (
    <>
      <p className="text-center w-full ">
        {/* @ts-ignore */}
        {posts?.message ? posts?.message : null}
      </p>
      <div className="mt-5 container place-items-center grid md:grid-cols-2 my-custom-card">
        {/* @ts-ignore */}
        {posts?.results?.map((post, index) => {
          return (
            <div
              key={`post-${index}`}
              className="flex flex-wrap mb-10 px-4 my-custom-card border-2 border-red-500 p-3 rounded-md"
            >
              <Link
                prefetch={false}
                className="font-['Inter'] dark:text-white rounded md:text-4xl text-3xl w-full"
                href={`posts/${getPostSlug(post)}`}
                title={getPostTitle(post)}
              >
                <ImageWithFallback
                  alt={`${getPostSlug(post)}`}
                  priority={true}
                  height={300}
                  width={300}
                  src={getPostImage(post)}
                  className="self-center m-auto object-cover"
                />
              </Link>
              <div className="pt-5 pb-10 font-['Inter']">
                <Link
                  prefetch={false}
                  className="font-['Inter'] dark:text-white px-4 rounded md:text-4xl text-3xl"
                  href={`posts/${getPostSlug(post)}`}
                >{`${getPostTitle(post)}`}</Link>
                <div className="h-10 w-full mx-auto mb-4">{`${getPostDescription(post)}...`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
