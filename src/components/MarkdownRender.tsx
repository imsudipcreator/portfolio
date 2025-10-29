// import { LuArrowUpRight } from 'react-icons/lu';
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight"
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

export const MarkdownRender = ({ children }: { children: string }) => {
    return (
        <Markdown
            rehypePlugins={[rehypeHighlight, rehypeSanitize]}
            remarkPlugins={[remarkGfm]}
            components={{
                table: ({ children }) => (
                    <div className="overflow-x-auto my-4 border border-zinc-300 rounded-lg shadow">
                        <table className="w-full text-left border-collapse table-auto">
                            {children}
                        </table>
                    </div>
                ),
                th: ({ children }) => (
                    <th className="bg-zinc-100 text-sm font-semibold p-2 border">{children}</th>
                ),
                td: ({ children }) => (
                    <td className="p-2 text-sm border">{children}</td>
                ),
                h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-medium my-2">{children}</h3>,
                h4: ({ children }) => <h4 className="text-lg font-medium my-2">{children}</h4>,
                h5: ({ children }) => <h5 className="text-base font-medium my-1">{children}</h5>,
                h6: ({ children }) => <h6 className="text-sm font-medium my-1">{children}</h6>,

                ul: ({ children }) => <ul className="list-disc pl-5 my-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-5 my-2">{children}</ol>,
                li: ({ children }) => <li className="my-1">{children}</li>,
                hr: () => (
                    <hr className="my-6 border-t border-gray-300 dark:border-gray-600" />
                ),
                a: ({ href, children }) => (
                    <a
                        href={href ?? "/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme/90 group underline-offset-2 inline-flex items-center gap-0.5 hover:text-blue-500 hover:underline font-medium transition-colors"
                    >
                        {children}
                        {/* <LuArrowUpRight className='size-4 group-hover:flex hidden' /> */}
                    </a>
                ),
                blockquote: ({ children }) => (
                    <blockquote className="border-l-3 border-zinc-400 pl-4 italic my-4 text-zinc-500">
                        {children}
                    </blockquote>
                ),
            }}
        >
            {children}
        </Markdown>
    )
}