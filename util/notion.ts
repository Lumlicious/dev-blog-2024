import { Client } from '@notionhq/client';
import { NotionToMarkdown } from "notion-to-md";

export interface TagData {
    name: string,
    color: string
}

export interface SinglePost {
  metadata: PostMetadata,
  markdown: string,
}

export interface PostMetadata {
    id: string,
    title: string,
    tags: TagData[],
    description: string,
    date: string,
    slug: string,
    wordCount: string,
    cover: string | null
}
  

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

export const getAllPublished = async (): Promise<PostMetadata[]> => {
    const posts = await notion.databases.query({
      database_id: process.env.DATABASE_ID || '',
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
  
    const allPosts = posts.results;
  
    return allPosts.map((post) => {
      return getPageMetaData(post);
    });
  };

  const getPageMetaData = (post: any): PostMetadata => {
    const getTags = (tags: any): TagData[] => {
      const allTags = tags.map((tag: TagData) => {
        return { name: tag.name, color: tag.color };
      });
  
      return allTags;
    };
    console.log(post)
  
    return {
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
      tags: getTags(post.properties.Tags.multi_select),
      description: post.properties.Description.rich_text[0].plain_text,
      date: post.properties.Date.date ? getToday(post.properties.Date.date.start) : '',
      slug: post.properties.Slug.rich_text[0].plain_text,
      wordCount: post.properties.WordCount.number || 0,
      cover: post.cover.external.url,
    };
  };

  const getToday = (datestring: string) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    let date = new Date();
  
    if (datestring) {
      date = new Date(datestring);
    }
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;
  
    return today;
  };

  const n2m = new NotionToMarkdown({ notionClient: notion });

export const getSingleBlogPostBySlug = async (slug: string): Promise<SinglePost> => {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID || '',
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  console.log('RESPONSE', response)
  const page: any = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  metadata.cover = page.cover.external.url;
  return {
    metadata,
    markdown: mdString,
  };
};