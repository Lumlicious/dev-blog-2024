import { getAllPublished, getBooks, getCurrentBook } from '@/util/notion'
import BlogCard from './components/BlogCard'
import BookCard from './components/BookCard'
import Link from 'next/link'

const HomePage = async () => {
    const res = await getAllPublished()
    const published = res.slice(0, 4)
    const currentYear = new Date().getFullYear().toString()
    const books = (await getBooks(currentYear, 'Read', 'Book')).slice(0, 4)
    const currentBook = await getCurrentBook()
    return (
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                <div className="mt-5 max-w-xl text-center mx-auto">
                    <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                        Hi! I&#39;m Chad Lumley.
                    </h1>
                </div>

                <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        I&#39;m a Lead Developer / Solutions Architect at
                        Stellar Elements.
                    </p>
                </div>

                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                            Latest from the Blog
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6">
                        {published.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                    <div className="text-center">
                        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
                            <div className="py-3 px-4 flex items-center gap-x-2">
                                <p className="text-gray-600 dark:text-gray-400">
                                    Want to read more?
                                </p>
                                <Link
                                    className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    href={`/blog`}
                                >
                                    Go here
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
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                            Latest Books from {currentYear}
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 lg:mb-14">
                        <BookCard data={currentBook[0]} current={true} />
                        {books.map((book) => (
                            <BookCard key={book.title} data={book} />
                        ))}
                    </div>
                    <div className="text-center">
                        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
                            <div className="py-3 px-4 flex items-center gap-x-2">
                                <p className="text-gray-600 dark:text-gray-400">
                                    Want to see more books?
                                </p>
                                <Link
                                    className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    href={`/books/${currentYear}`}
                                >
                                    Go here
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
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
