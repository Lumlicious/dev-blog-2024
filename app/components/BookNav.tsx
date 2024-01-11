'use client'

import Link from 'next/link'

const BookNav = ({ currentYear, selectedYear }) => {
    const STARTING_YEAR = 2022
    const currentYearInt = parseInt(currentYear)
    const selectedYearInt = parseInt(selectedYear)

    const selectedStyle =
        'bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:text-white dark:focus:bg-gray-500'
    const unselectedStyle =
        'text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'

    // Probably a more clever way to do this
    const years = []
    for (let i = STARTING_YEAR; i <= currentYearInt; i++) {
        years.push(i)
    }

    return (
        <nav className="flex justify-between items-center gap-x-1 mb-4">
            {selectedYearInt - 1 >= STARTING_YEAR ? (
                <Link
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    href={`/books/${(selectedYearInt - 1).toString()}`}
                >
                    <svg
                        className="flex-shrink-0 w-3.5 h-3.5"
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
                    <span aria-hidden="true" className="hidden sm:block">
                        Previous
                    </span>
                </Link>
            ) : (
                <div className="min-w-[38px]"></div>
            )}

            <div className="flex items-center gap-x-1">
                {years.map((year) => (
                    <Link
                        type="button"
                        className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                            year.toString() === selectedYear.toString()
                                ? selectedStyle
                                : unselectedStyle
                        }`}
                        aria-current="page"
                        key={year}
                        href={`/books/${year}`}
                    >
                        {year}
                    </Link>
                ))}
            </div>
            {selectedYearInt + 1 <= currentYearInt ? (
                <Link
                    type="button"
                    className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    href={`/books/${(selectedYearInt + 1).toString()}`}
                >
                    <span aria-hidden="true" className="hidden sm:block">
                        Next
                    </span>
                    <svg
                        className="flex-shrink-0 w-3.5 h-3.5"
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
            ) : (
                <div className="min-w-[38px]"></div>
            )}
        </nav>
    )
}

export default BookNav
