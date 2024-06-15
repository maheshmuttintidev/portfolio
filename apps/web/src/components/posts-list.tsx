import { deepGet } from "@/app/lib/utils/deepGet";
import { splitWith } from "@/app/lib/utils/splitWith";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "services";

export default async function BlogsList() {
  const posts = await getPosts();
  return (
    <div className="mt-5 container grid md:grid-cols-2">
      {posts?.results?.map((post, index) => {
        return (
          <div key={`post-${index}`} className="flex flex-wrap mb-10 px-4">
            <Link
              className="font-['Inter'] dark:text-white rounded md:text-4xl text-3xl w-full"
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
              {deepGet(post, [
                "properties",
                "Banner",
                "files",
                0,
                "file",
                "url",
              ]) ? (
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
              ) : null}
            </Link>
            <div className="pt-5 pb-10 font-['Inter']">
              <Link
                className="font-['Inter'] dark:text-white px-4 rounded md:text-4xl text-3xl"
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
