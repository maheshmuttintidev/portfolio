import { Client } from "@notionhq/client";
const client = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

async function getMyPortfolioContent() {
  const myPosts = await client.blocks.children.list({
    block_id: "df991b5162c24a8581a498749f5ec877",
  });
  return myPosts;
}

export { getMyPortfolioContent };
