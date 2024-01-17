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
        <main className="shrink-0">
            <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element-dark.svg')]">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                    <div className="mt-5 max-w-xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                            Hi! I'm Chad Lumley.
                        </h1>
                    </div>

                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            I'm a Lead Developer / Solutions Architect at
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
                            <BookCard data={currentBook} current={true} />
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
                                        href={`/books`}
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
                    {/* 
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
                        <h2 className="text-gray-600 dark:text-gray-400">
                            Trusted by Open Source, enterprise, and more than
                            99,000 of you
                        </h2>
                    </div>

                    <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">

                        <svg
                            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 151 32"
                        >
                            <path
                                d="M.7 7.6v7.6h15.1V0H.7v7.6ZM17.4 0v15.2h15.1V0H17.4ZM139.3 5.1a5 5 0 0 0-3 2.2c-.6 1-.8 1.8-.8 3.2v1.3h-2.2v1.4l-.1 1.3h2.3v11.1h3.3V14.5h4.8V18c0 4.2.1 5 .6 6 .4.9 1.1 1.5 2 1.7a8 8 0 0 0 3.2 0l.7-.3v-2.6l-.6.2c-1 .4-2 .2-2.4-.6-.1-.3-.2-.8-.2-4.2v-3.7h3.2v-2.7H147v-4h-.3l-1.7.6-1.3.4v3.1h-2.4l-2.4-.1v-1.4c0-1.5.2-2 .9-2.4.4-.3 1.4-.4 2-.1l.6.1V6.7c0-1.2 0-1.4-.2-1.5-.3-.1-2.3-.2-2.8 0ZM66.6 6.3c-.6.4-1 .9-1 1.6 0 1.1 1 1.9 2.2 1.8 1-.1 1.7-.8 1.7-1.8 0-.7-.2-1.1-.9-1.6-.5-.3-1.5-.3-2 0ZM42.1 16v9.6h3.2V10.9l3 7.3 3 7.4h2.3l2.9-7.4 3-7.3v14.7h3.3V6.4h-4.5L55.6 13l-2.9 7-.2.6-1-2.6-2.8-7-1.8-4.6H42V16ZM76.8 11.7a6.8 6.8 0 0 0-5 4.7c-.4 1-.5 3.3-.2 4.4a6.8 6.8 0 0 0 3.2 4.3c1.8 1 4.5 1 6.5.2l.7-.2v-3l-.7.4c-2 1-4.1.9-5.4-.5-1-1-1.3-2.4-1-4.1a4 4 0 0 1 2.4-3.4 5 5 0 0 1 4.3.5l.5.3v-3.1l-.8-.3c-1-.3-3.4-.4-4.5-.2ZM90.7 11.7c-1.1.2-2 .8-2.6 2l-.3.5v-2.4h-3.2v13.8h3.2V17l.4-.7c.5-1 1-1.6 2-1.8a4 4 0 0 1 2 .3l.4.2v-1.6c0-1.1 0-1.6-.2-1.7a4 4 0 0 0-1.7-.1ZM98 11.7a6.4 6.4 0 0 0-5 5c-.3 1-.3 3.1 0 4.3.5 2.3 2.3 4 4.6 4.7 1 .2 3 .2 4.1 0 2.1-.6 3.8-2 4.5-4 .5-1.1.7-2.4.6-3.7a6.6 6.6 0 0 0-1.9-4.6c-.7-.8-1.3-1.1-2.4-1.5-.9-.3-3.5-.4-4.5-.2Zm3.4 2.8c.8.4 1.5 1.2 1.8 2 .1.6.2 1 .2 2.3 0 1.4 0 1.7-.3 2.3-.3.8-.8 1.4-1.6 1.8-.5.2-.7.3-1.6.3-1.2 0-1.8-.2-2.5-.8-1.1-1-1.6-3.2-1.2-5.2.4-1.4 1-2.2 2-2.7.9-.4 2.4-.4 3.2 0ZM111.8 11.7a4.9 4.9 0 0 0-3.1 2.5c-.4.8-.4 2.4 0 3.3.5 1 1 1.4 3 2.4L114 21c.3.3.4 1.2.1 1.6-.7 1-3.1 1-5-.2l-.7-.4V25l.5.2c1.3.5 3.8.7 5.1.3a4.6 4.6 0 0 0 3.2-2.3c.2-.5.3-.8.3-1.7 0-1 0-1.2-.3-1.6-.6-1-1.3-1.7-3.4-2.6-1.5-.7-2-1-2-1.7-.3-1.6 2.1-2.1 4.5-1l.6.4v-1.5l-.1-1.5-.7-.2a11 11 0 0 0-4.2-.2ZM124 11.8c-1.7.4-3.2 1.4-4 2.7a9 9 0 0 0-.6 7.3c1 2.8 4 4.4 7.4 4 1.9-.2 3-.7 4.1-2 1.5-1.3 2-2.8 2-5.2 0-2.4-.5-4-1.8-5.2a5.6 5.6 0 0 0-2.9-1.6c-1.1-.3-3.1-.3-4.3 0Zm3.7 2.8c.6.3 1.2 1 1.6 1.8.2.6.2 1 .2 2.2 0 2.4-.5 3.5-1.8 4.2-.6.3-.8.4-1.7.4-1.3 0-2-.3-2.7-1-.8-1-1-1.7-1-3.4 0-2.3.5-3.5 2-4.2.6-.4.7-.4 1.8-.3.8 0 1.2 0 1.6.3ZM66 18.7v6.9h3.2V11.9h-1.6l-1.7-.1v6.9ZM.7 24.4V32h15.1V16.8H.7v7.6ZM17.4 24.4v7.5H25l7.5.1V16.8H17.4v7.6Z"
                                fill="currentColor"
                            />
                        </svg>

                        <svg
                            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947"
                            width="2500"
                            height="607"
                        >
                            <path
                                d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z"
                                fill="currentColor"
                            />
                        </svg>

                        <svg
                            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2428 1002"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z"
                                fill="currentColor"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z"
                                fill="currentColor"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z"
                                fill="currentColor"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z"
                                fill="currentColor"
                            />
                        </svg>

                        <svg
                            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                            viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2500"
                            height="610"
                        >
                            <path
                                d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div> */}

                    {/* <div className="mt-8 gap-3 flex justify-center">
                    <a
                        className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
                        href="#"
                    >
                        <svg
                            className="flex-shrink-0 w-4.5 h-4.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        Continue with Github
                    </a>
                </div> */}
                </div>
            </div>
        </main>
    )
}

export default HomePage
