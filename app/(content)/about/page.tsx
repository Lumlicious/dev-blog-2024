import MarkdownContent from '@/app/components/Markdown'
import { SinglePost, getSingleBlogPostBySlug } from '@/util/notion'
import Image from 'next/image'

const About = async () => {
    const rawPost: SinglePost = await getSingleBlogPostBySlug('about-page')
    return (
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto bg-white py-10 lg:py-14 mx-auto">
            <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                <h1 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    About Me
                </h1>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Here's some info about who I am.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
                <Image
                    src={'https://i.postimg.cc/Z5tL0T96/author.jpg'}
                    alt=""
                    width={600}
                    height={800}
                    className="rounded-md"
                />
                <div className="lg:col-span-2">
                    <div className="py-8 lg:pe-4 lg:pe-8">
                        <div className="space-y-5 lg:space-y-8">
                            <div className="prose max-w-none">
                                <MarkdownContent markdown={rawPost.markdown} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
