import { getAllPublished } from '@/util/notion'
import BlogCard from '../../components/BlogCard'

export const metadata = {
    title: 'The Blog',
    description: `Some stuff I've been working on`,
}

export default async function Home() {
    const res = await getAllPublished()
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    The Dev Blog
                </h2>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Some of the stuff I&#39;ve been working on or important
                    information I want to share. Usually just cool stuff I like.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                {res.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}
