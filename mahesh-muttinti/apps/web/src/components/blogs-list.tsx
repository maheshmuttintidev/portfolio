import { deepGet } from "@/app/lib/utils/deepGet";
import { splitWith } from "@/app/lib/utils/splitWith";
import Link from "next/link";
import { getPosts } from "services";

export default async function BlogsList() {
  const posts = await getPosts();

  return (
    <div className="mt-5">
      {posts.results.map((post, index) => {
        return (
          <div key={`post-${index}`} className="mb-10">
            <Link
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              href={`blog/${splitWith(
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
          </div>
        );
      })}
    </div>
  );
}
