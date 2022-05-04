import { remark } from 'remark';
import html from 'remark-html';

export async function getSortedPostsData() {
  const fetchedData = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`
  )

  const allPostsData = await fetchedData.json()

  // Sort posts by date
  return allPostsData.data
    .map((post) => ({ ...post.attributes, id: post.id }))
    .sort(({ publishedAt: a }, { publishedAt: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
}

export async function getAllPostIds() {
  const fetchedData = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts`
  )

  const allPostsData = await fetchedData.json()
  const ids = allPostsData.data.map((post) => {
    return {
      params: {
        id: post.attributes.slug,
      },
    };
  });
  return ids;
}

export async function getPostData(id) {
  const fetchedData = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts?filters[slug]=${id}`
  )

  const postData = await fetchedData.json()

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(postData.data[0].attributes.Content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...postData.data[0].attributes,
  };
}