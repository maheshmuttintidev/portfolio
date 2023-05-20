import Link from "next/link";
import { getMyPortfolioContent } from "services";

export async function generateStaticParams() {
  const posts = await getMyPortfolioContent();

  return posts.results.map((post) => ({
    slug: post.id,
  }));
}
export default function ProjectsList({ slug }: any) {
  return (
    <div>
      <div>My Project - {slug}</div>
      <Link href="/">Home</Link>
    </div>
  );
}
