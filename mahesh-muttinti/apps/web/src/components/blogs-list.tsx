import { deepGet } from "@/app/lib/utils/deepGet";
import { splitWith } from "@/app/lib/utils/splitWith";
import { Card } from "@mui/material";
import Link from "next/link";
import { getPosts } from "services";

export default async function BlogsList() {
  const posts = await getPosts();

  return (
    <div className="mt-5">
      {posts?.results?.map((post, index) => {
        return (
          <div key={`post-${index}`} className="flex items-center mb-10 h-48 overflow-hidden border border-w-2">
           <div className="flex-1/3 h-full self-center pt-5">
            <Link
              className="font-mono dark:text-white py-2 px-4 rounded hover:bg-blue-600 md:text-4xl text-3xl"
              href={`blogs/${splitWith(
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
            <div className="px-5 pt-5 flex-2/3">
              {[1, 2, 3]?.map((item, index) => {
                return (
                  <div
                    key={`${item}_${index}`}
                    className="h-10 w-full mx-auto mb-4"
                  >{`Content Goes Here Line ${item}`}</div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
