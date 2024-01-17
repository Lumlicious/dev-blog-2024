'use client'

import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

const MarkdownContent = ({ markdown }: any) => {
    return (
        <ReactMarkdown
            components={{
                code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <CodeBlock
                            codestring={String(children).replace(/\n$/, '')}
                            language={match[1]}
                        />
                    ) : (
                        <code
                            className={
                                'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 py-1 px-1 rounded'
                            }
                            {...props}
                        >
                            {children}
                        </code>
                    )
                },
                p({ children }) {
                    return (
                        <p className="text-lg text-gray-800 dark:text-gray-200">
                            {children}
                        </p>
                    )
                },
                a({ children }) {
                    return (
                        <a className="text-blue-600 no-underline decoration-2 hover:underline font-medium cursor-pointer">
                            {children}
                        </a>
                    )
                },
                strong({ children }) {
                    return (
                        <strong className="text-primary dark:text-white">
                            {children}
                        </strong>
                    )
                },
                h1({ children }) {
                    return (
                        <h1 className="text-4xl font-semibold dark:text-white ">
                            {children}
                        </h1>
                    )
                },
                h2({ children }) {
                    return (
                        <h2 className="text-3xl font-semibold dark:text-white">
                            {children}
                        </h2>
                    )
                },
                h3({ children }) {
                    return (
                        <h3 className="text-2xl font-semibold dark:text-white">
                            {children}
                        </h3>
                    )
                },
                h4({ children }) {
                    return (
                        <h4 className="text-xl font-semibold dark:text-white">
                            {children}
                        </h4>
                    )
                },
                h5({ children }) {
                    return (
                        <h5 className="text-lg dark:text-white">{children}</h5>
                    )
                },
                h6({ children }) {
                    return (
                        <h6 className="text-base dark:text-white">
                            {children}
                        </h6>
                    )
                },
                ul({ children }) {
                    return (
                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-gray-200">
                            {children}
                        </ul>
                    )
                },
                li({ children }) {
                    return <li className="ps-2">{children}</li>
                },
                blockquote({ children }) {
                    // let text = children[1].props.children.toString()

                    // if (text.includes('+—')) {
                    //     text = text.replace('+—', '')
                    //     console.log(text)
                    //     return (
                    //         <blockquote
                    //             className="bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
                    //             role="alert"
                    //         >
                    //             {children}
                    //         </blockquote>
                    //     )
                    // }

                    return (
                        <blockquote className="text-center p-4 sm:px-7">
                            {children}
                        </blockquote>
                    )
                },
            }}
        >
            {markdown.parent}
        </ReactMarkdown>
    )
}

export default MarkdownContent
