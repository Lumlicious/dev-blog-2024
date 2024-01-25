import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionToMarkdown } from "notion-to-md";
import { MdStringObject } from 'notion-to-md/build/types';

export interface TagData {
    name: string,
    color: string
}

export interface SinglePost {
  metadata: PostMetadata,
  markdown: MdStringObject,
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

export const getBooks = async (year: string, state: string, type: string,) => {
  const books = await notion.databases.query({
    database_id: process.env.BOOK_DB_ID || '',
    filter: {
      and : [
        {
          property: "Media Type",
          select: {
            equals: type
          }
        },
        {
          property: "State",
          select: {
            equals: state
          }
        },   
        {
          property: "Date Finished",
          date: {
            after: `${year}-01-01`
          }
        },
        {
          property: "Date Finished",
          date: {
            before: `${year}-12-31`
          }
        },
      ]
    },
    sorts: [
      {
        property: "Date Finished",
        direction: "ascending",
      },
    ],
  })

  const allBooks = books.results;
  return allBooks.map((book) => {
    return getBookMetadata(book);
  });
}

export const getBookMetadata = (book: any) => {
  const coverFile = book.properties.Image.files[0]
  const coverURL = coverFile.type === 'external' ? coverFile.external.url : coverFile.file.url
  const bookData = {
    title: book.properties.Title.title[0].plain_text,
    cover: coverURL,
    review: book.properties.Review.select?.name
  }

  return bookData;
}

export const getCurrentBook = async () => {
  const books = await notion.databases.query({
    database_id: process.env.BOOK_DB_ID || '',
    filter: {
      and : [
        {
          property: "Media Type",
          select: {
            equals: 'Book'
          }
        },
        {
          property: "State",
          select: {
            equals: 'Currently Reading'
          }
        },   
      ]
    }
  })
  const currentBooks = books.results
  
  return currentBooks.map((book) => {
    return getBookMetadata(book);
  });
}

