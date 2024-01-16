import { getAllPublished, getCurrentBook } from '@/util/notion'
import Image from 'next/image'
import Link from 'next/link'

const SideBar = async () => {
    const res = await getAllPublished()
    const lastThreePosts = res.slice(0, 3)
    const currentBook = await getCurrentBook()
    console.log(currentBook)
    return (
        <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-100 lg:via-transparent lg:to-transparent dark:from-slate-800 m-4 rounded">
            <div className="sticky top-0 start-0 py-8 lg:ps-4 lg:ps-8">
                <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                    <a className="block flex-shrink-0" href="#">
                        <Image
                            className="h-16 w-16 rounded-full"
                            src="/NewPixelMeCrop.gif"
                            alt="Chad Avatar"
                            width="80"
                            height="80"
                        />
                    </a>

                    <a className="group grow block" href="">
                        <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                            Chad Lumley
                        </h5>
                        <p className="text-sm text-gray-500">
                            Lead Front End Engineer /<br />
                            Solutions Architect
                        </p>
                    </a>

                    <div className="grow">
                        <div className="flex justify-end">
                            {/* <button
                                type="button"
                                className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
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
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <line x1="19" x2="19" y1="8" y2="14" />
                                    <line x1="22" x2="16" y1="11" y2="11" />
                                </svg>
                                Follow
                            </button> */}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold dark:text-white">
                        Latest from the Blog
                    </h3>
                    {lastThreePosts.map((post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.id}
                            className="group flex items-center gap-x-6"
                        >
                            <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                                {/* <img className="w-full h-full absolute top-0 start-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description"> */}
                                <Image
                                    className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                                    src={post.cover || ''}
                                    alt="Chad Avatar"
                                    width="400"
                                    height="400"
                                />
                            </div>
                            <div className="grow">
                                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                                    {post.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="space-y-6 border-t mt-8 pt-8">
                    <h3 className="text-2xl font-semibold dark:text-white">
                        Currently Reading
                    </h3>
                    <div className="group flex flex-col items-center gap-x-6">
                        <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-40 h-60 mb-4">
                            <Image
                                className="w-full h-full absolute top-0 start-0 object-cover rounded-lg"
                                src={currentBook.cover || ''}
                                alt="Chad Avatar"
                                width="400"
                                height="400"
                            />
                        </div>
                        <div className="grow">
                            <span className=" text-center text-md font-bold text-gray-800 dark:text-gray-200">
                                {currentBook.title}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBar
