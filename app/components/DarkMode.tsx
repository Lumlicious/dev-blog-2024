'use client'

import { useEffect, useState } from 'react'
import { MdOutlineWbSunny } from 'react-icons/md'
import { FiMoon } from 'react-icons/fi'

const DarkMode = () => {
    const [theme, setTheme] = useState('default')

    const handleButtonToggle = (isDark: boolean) => {
        if (isDark) {
            setAppearance('dark')
        } else {
            setAppearance('default')
        }
    }

    useEffect(() => {
        const defaultTheme = 'default'
        let theme = localStorage.getItem('hs_theme') || defaultTheme
        setAppearance(theme)
    }, [])

    const setAppearance = (theme: string) => {
        if (theme === 'default') {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('default')
        } else if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('default')
        }

        localStorage.setItem('hs_theme', theme)
        setTheme(theme)
    }
    return (
        <div className="">
            {theme === 'default' ? (
                <button
                    type="button"
                    className="hs-dark-mode group flex items-center text-white hover:text-blue-200 font-large dark:text-white dark:hover:text-gray-100"
                    onClick={() => handleButtonToggle(true)}
                >
                    <FiMoon size={20} />
                </button>
            ) : (
                <button
                    type="button"
                    className="hs-dark-mode group flex items-center text-white hover:text-blue-200 font-large dark:text-white dark:hover:text-gray-100"
                    onClick={() => handleButtonToggle(false)}
                >
                    <MdOutlineWbSunny size={20} />
                </button>
            )}
        </div>
    )
}

export default DarkMode
