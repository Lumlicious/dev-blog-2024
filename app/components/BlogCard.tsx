'use client'
import { PostMetadata } from '@/util/notion'
import Image from 'next/image'
import Link from 'next/link'
import { describe } from 'node:test'

interface BlogCardProps {
    post: PostMetadata
}

const BlogCard = ({ post }: BlogCardProps) => {
    const { id, title, tags, description, date, slug, wordCount, cover } = post
    return (
        <Link
            className="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href={`/blog/${slug}`}
        >
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
                <Image
                    src={cover || ''}
                    width={500}
                    height={500}
                    className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    alt="Picture of the author"
                />
            </div>

            <div className="grow">
                <div className="p-4 flex flex-col h-full sm:p-6">
                    <div className="mb-3">
                        {tags.map((tag) => (
                            <p
                                key={tag.name}
                                className="inline-flex items-center gap-1.5 py-1.5 px-3 mr-2 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                            >
                                {tag.name}
                            </p>
                        ))}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                        {title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {description}
                    </p>

                    <div className="mt-5 sm:mt-auto">
                        <div className="flex items-center lg:mt-4">
                            <div className="flex-shrink-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                                    width={500}
                                    height={500}
                                    className="h-[2.875rem] w-[2.875rem] rounded-full"
                                    alt="Picture of the author"
                                />
                                {/* <img className="h-[2.875rem] w-[2.875rem] rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"> */}
                            </div>
                            <div className="ms-2.5 sm:ms-4">
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                    Chad Lumley
                                </h4>
                                <p className="text-xs text-gray-500">{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard
