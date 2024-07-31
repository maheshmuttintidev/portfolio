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

async function getPosts() {
  try {
    const databaseId = "44922cf437074db6962e8eb48f82f631";
    const response = await client.databases.query({
      database_id: databaseId,
      sorts: [],
    });
    return response;
  } catch (error) {
    console.log("🚀 ~ getPosts ~ error:", error);
    return error;
  }
}
// @ts-ignore
async function getSinglePost(title) {
  const databaseId = "44922cf437074db6962e8eb48f82f631";
  const myPost = await client.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "Title",
          title: {
            equals: `${title}`,
          },
        },
      ],
    },
    sorts: [],
  });
  return myPost;
}
export { getMyPortfolioContent, getPosts, getSinglePost };

//
