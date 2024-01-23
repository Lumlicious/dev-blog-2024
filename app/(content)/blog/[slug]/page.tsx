import MarkdownContent from '@/app/components/Markdown'
import SideBar from '@/app/components/SideBar'
import { getSingleBlogPostBySlug } from '@/util/notion'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPageParams {
    params: {
        slug: string
    }
}

const BlogPage = async ({ params }: BlogPageParams) => {
    const { slug } = params

    const data = await getSingleBlogPostBySlug(slug)
    const { markdown, metadata } = data
    const { title, tags, date, cover } = metadata
    return (
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
                <div className="lg:col-span-2">
                    <div className="py-8 lg:pe-4 lg:pe-8">
                        <div className="space-y-5 lg:space-y-8">
                            <Link
                                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href={`/blog`}
                            >
                                <svg
                                    className="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                                Back to Blog
                            </Link>

                            <figure>
                                <Image
                                    className="w-full object-cover rounded-xl max-h-[30rem]"
                                    src={cover || ''}
                                    alt="Image Description"
                                    width="500"
                                    height="400"
                                />
                            </figure>

                            <h2 className="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white lg:leading-tight">
                                {title}
                            </h2>

                            <div className="flex items-center gap-x-5">
                                {tags.map((tag) => (
                                    <p
                                        key={tag.name}
                                        className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        {tag.name}
                                    </p>
                                ))}
                                <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                                    {date}
                                </p>
                            </div>
                            <div className="prose max-w-none">
                                <MarkdownContent markdown={markdown} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 lg:w-full lg:h-full ">
                    <SideBar />
                </div>
            </div>
        </div>
    )
}

export default BlogPage
