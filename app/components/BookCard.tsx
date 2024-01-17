'use client'

import Image from 'next/image'

const BookCard = ({ data, current = false }: any) => {
    const { cover, title, review } = data
    const shimmer = (w: number, h: number) => `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="g">
            <stop stop-color="#E5E7EB" offset="20%" />
            <stop stop-color="#d0d2d8" offset="50%" />
            <stop stop-color="#E5E7EB" offset="70%" />
            </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#E5E7EB" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
        </svg>`

    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str)
    return (
        <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <div className="aspect-w-16 aspect-h-9 max-h-64 overflow-hidden relative">
                <Image
                    className="w-full object-cover rounded-t-xl"
                    src={cover}
                    alt="Image Description"
                    width="300"
                    height="300"
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                        shimmer(700, 475)
                    )}`}
                />
                {current && (
                    <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-teal-500 text-white py-1.5 px-3 dark:bg-teal-500">
                        Currently Reading
                    </span>
                )}
            </div>
            <div className={`p-4 md:p-5`}>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400"></p>
                <h3 className="mt-2 font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                    {title}
                </h3>
                {review}
            </div>
        </div>
    )
}

export default BookCard
