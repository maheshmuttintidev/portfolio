import Link from "next/link";
import { getMyPortfolioContent } from "services";

export async function generateStaticParams() {
  const posts = await getMyPortfolioContent();

  return posts.results.map((post) => ({
    slug: post.id,
  }));
}
export default function Page({ slug }: any) {
  return (
    <div>
      <div>My Project - {slug}</div>
      <Link prefetch={false} href="/" title="Home Page">
        Home
      </Link>
    </div>
  );
}
