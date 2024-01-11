'use client'

import { useActivePath } from '@/util/helper'
import Link from 'next/link'

const NavBar = () => {
    const isActivePath = useActivePath()
    const currentYear = new Date().getFullYear().toString()
    const navItems = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title: 'Reading List',
            href: `/books/${currentYear.toString()}`,
        },
        {
            title: 'About',
            href: '/about',
        },
    ]
    const getActiveClass = (path: string) => {
        if (!isActivePath(path)) {
            return 'font-medium text-white/[.8] hover:text-white sm:py-6'
        } else {
            return 'font-medium text-white sm:py-6'
        }
    }
    return (
        <nav
            className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Global"
        >
            <div className="flex items-center justify-between">
                <Link
                    href="/blog"
                    className="flex-none text-xl font-semibold text-white"
                    aria-label="Brand"
                >
                    Chad Lumley
                </Link>

                <div className="sm:hidden">
                    <button
                        type="button"
                        className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-collapse="#navbar-collapse-with-animation"
                        aria-controls="navbar-collapse-with-animation"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
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
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                        <svg
                            className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                id="navbar-collapse-with-animation"
                className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
            >
                <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={`font-medium ${getActiveClass(
                                item.href
                            )}`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default NavBar
