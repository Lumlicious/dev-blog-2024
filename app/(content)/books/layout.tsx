'use client'

import { useParams } from 'next/navigation'
const BooksLayout = ({ children }) => {
    const { year } = useParams()
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    The {year} Reading List
                </h2>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                    What I've been reading lately.
                </p>
            </div>
            {children}
        </div>
    )
}

export default BooksLayout
