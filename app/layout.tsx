import './/globals.css'
import { Inter } from 'next/font/google'
import PrelineScript from './components/PrelineScript'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export const metadata = {
    title: 'Chad Lumley Dev Blog',
    description: 'The dev blog for Chad Lumley',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="h-full">
            <body
                className={`${inter.className} flex flex-col h-full dark:bg-slate-900`}
            >
                <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 text-sm py-3 sm:py-0">
                    <NavBar />
                </header>
                <main className="shrink-0">{children}</main>
                <Footer />
            </body>
            <PrelineScript />
        </html>
    )
}
