import BookCard from '@/app/components/BookCard'
import { getBooks, getCurrentBook } from '@/util/notion'

export const metadata = {
    title: 'Reading List',
    description: `What I've been reading lately`,
}

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
        </>
    )
}

export default Books
