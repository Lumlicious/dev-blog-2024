import BookCard from '@/app/components/BookCard'
import { getBooks, getCurrentBook } from '@/util/notion'

const Books = async () => {
    const currentYear = new Date().getFullYear().toString()
    const books = await getBooks(currentYear, 'Read', 'Book')
    const currentBook = await getCurrentBook()
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 lg:mb-14">
                <BookCard data={currentBook} current={true} />
                {books.map((book) => (
                    <BookCard key={book.title} data={book} />
                ))}
            </div>

            <div className="text-center">
                <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
                    <div className="py-3 px-4 flex items-center gap-x-2">
                        <p className="text-gray-600 dark:text-gray-400">
                            Want to read more?
                        </p>
                        <a
                            className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="../docs/index.html"
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
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Books
