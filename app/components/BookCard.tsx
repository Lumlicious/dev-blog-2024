'use client'

import Image from 'next/image'

const BookCard = ({ data, current = false }) => {
    const { cover, title, review } = data
    return (
        // <a
        //     className="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]"
        //     href="#"
        // >
        //     <div className="aspect-w-16 aspect-h-9 mix-h-64 overflow-hidden">
        //         <Image
        //             className="w-full object-cover rounded-xl"
        //             src={cover}
        //             alt="Image Description"
        //             width="300"
        //             height="300"
        //         />
        //     </div>
        //     <h3 className="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:hover:text-white">
        //         {title}
        //     </h3>
        //     <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
        //         {review}
        //     </p>
        // </a>
        <div className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <div className="aspect-w-16 aspect-h-9 max-h-64 overflow-hidden relative">
                <Image
                    className="w-full object-cover rounded-t-xl"
                    src={cover}
                    alt="Image Description"
                    width="300"
                    height="300"
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
