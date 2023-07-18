import { deepGet } from "@/app/lib/utils/deepGet";
import { splitWith } from "@/app/lib/utils/splitWith";
import { Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "services";

export default async function BlogsList() {
  const posts = await getPosts();

  return (
    <div className="mt-5 container">
      {posts?.results?.map((post, index) => {
        return (
          <div
            key={`post-${index}`}
            className="flex flex-wrap items-center justify-center mb-10"
          >
              <Link
                className="font-mono dark:text-white rounded md:text-4xl text-3xl w-full"
                href={`posts/${splitWith(
                  deepGet(post, [
                    "properties",
                    "Title",
                    "title",
                    0,
                    "text",
                    "content",
                  ])
                )}`}
              >
                <Image
                  alt="banner"
                  priority
                  height={300}
                  width={1200}
                  src={
                    deepGet(post, [
                      "properties",
                      "Banner",
                      "files",
                      0,
                      "file",
                      "url",
                    ]) ||
                    "https://via.placeholder.com/500x200.png?text=Post+Sample+Banner"
                  }
                  className="self-center m-auto"
                />
              </Link>
            <div className="pt-5 pb-10">
              <Link
                className="font-mono dark:text-white px-4 rounded md:text-4xl text-3xl"
                href={`posts/${splitWith(
                  deepGet(post, [
                    "properties",
                    "Title",
                    "title",
                    0,
                    "text",
                    "content",
                  ])
                )}`}
              >{`${deepGet(post, [
                "properties",
                "Title",
                "title",
                0,
                "text",
                "content",
              ])}`}</Link>
              <div className="h-10 w-full mx-auto mb-4">{`${deepGet(post, [
                "properties",
                "Description",
                "rich_text",
                0,
                "plain_text",
              ])
                ?.slice(0, 100)
                ?.trim()}...`}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
