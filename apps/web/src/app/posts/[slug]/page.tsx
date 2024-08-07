import { deepGet } from "@/app/lib/utils/deepGet";
import { PostDetail } from "@/components/single-post";
import Link from "next/link";
import { getSinglePost } from "services";
import ArrowBack from "@mui/icons-material/ArrowBack";

export const revalidate = 30;

export default async function Page({ params }: any) {
  const slug = params?.slug?.split("_").join(" ");

  const singleBlog = await getSinglePost(`${slug}`);
  const desc = deepGet(singleBlog?.results?.[0], [
    "properties",
    "Description",
    "rich_text",
  ])
    ?.map((item: any) => item?.plain_text)
    ?.reduce((firstItem: any, nextItem: any) => {
      return firstItem + nextItem;
    }, "");
  const bannerImage = deepGet(singleBlog?.results?.[0], [
    "properties",
    "Banner",
    "files",
    0,
    "file",
    "url",
  ]);

  return (
    <div className="mx-auto container items-center mt-20 md:mt-3 font-['Inter']">
      <Link
        prefetch={false}
        className="text-2xl md:text-3xl font-semibold text-left"
        href="/posts"
        title="Home Page"
      >
        <ArrowBack sx={{ color: "red", width: 40, height: 40 }} />
      </Link>

      <PostDetail title={slug} description={desc} bannerImage={bannerImage} />
    </div>
  );
}
