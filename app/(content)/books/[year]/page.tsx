import BookCard from '@/app/components/BookCard'
import BookNav from '@/app/components/BookNav'
import { getBooks, getCurrentBook } from '@/util/notion'

const BooksInYear = async ({ params }) => {
    const { year } = params
    const currentYear = new Date().getFullYear().toString()
    const books = await getBooks(year, 'Read', 'Book')
    const currentBook = year === currentYear ? await getCurrentBook() : null

    return (
        <>
            {books ? (
                <>
                    <BookNav currentYear={currentYear} selectedYear={year} />
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 lg:mb-14">
                        {currentBook && (
                            <BookCard data={currentBook} current={true} />
                        )}
                        {books.map((book) => (
                            <BookCard key={book.title} data={book} />
                        ))}
                    </div>
                </>
            ) : (
                <div>No Books!</div>
            )}
        </>
    )
}

export default BooksInYear
