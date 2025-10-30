import AiInput from "@/components/AiInput";
import { MarkdownRender } from "@/components/MarkdownRender";
import { useAi } from "@/contexts/useAi";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";

const AiChat = () => {
    const triggeredRef = useRef(false)
    const { chats, createChat, getAiResponse, loading } = useAi()
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query")
    // console.log(query)

    useEffect(() => {
        if (triggeredRef.current || !query) return
        triggeredRef.current = true

        const generateResponse = async () => {
            createChat("user", query)
            const response = await getAiResponse(query)
            createChat("ai", response.content, response.references)
        }

        void generateResponse()

    }, [])


    useEffect(() => {
        const endOfChat = document.getElementById("endOfChat")
        endOfChat?.scrollIntoView({ behavior: "smooth" })
    }, [chats])

    return (
        <div className='max-w-screen h-[100dvh] flex justify-center relative overflow-y-clip '>
            <div className='w-full flex flex-col h-full items-center justify-center overflow-y-auto'>
                <div className="max-w-[50rem] w-full flex flex-col gap-y-6 py-6 min-h-full not-md:px-6">
                    {
                        chats.map(chat => {
                            if (chat.type === 'user') {
                                return (
                                    <div key={chat.id} className="bg-gray-200 max-w-[60%] w-fit py-2 px-3 rounded-xl self-end">
                                        <MarkdownRender>
                                            {chat.message}
                                        </MarkdownRender>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={chat.id} className="">
                                        <MarkdownRender>
                                            {chat.message}
                                        </MarkdownRender>
                                        <div className="flex items-center max-w-screen overflow-x-auto gap-3 mt-3">
                                            {chat.references && chat.references.length > 0 && chat.references.map(ref => {
                                                // console.log(ref)
                                                return (
                                                    <a key={ref.url} href={ref.url} target="_blank" className="min-h-18 min-w-20 md:max-w-[33%] max-w-[40%] bg-gray-200 hover:bg-gray-300 transition-colors duration-200 rounded-2xl py-2.5 px-3 shrink-0 flex flex-col justify-between gap-4">
                                                        <div className="w-[80%]">
                                                            <h1>{ref.title}</h1>
                                                            <p className="text-blue-700 text-sm truncate">{ref.url}</p>
                                                        </div>
                                                        {ref.icon !== undefined && <ref.icon size={22} strokeWidth={1.9} className="" />}
                                                        {/* <LuGitBranch size={20} className="shrink-0" /> */}
                                                    </a>
                                                )
                                            }
                                            )}
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    {loading && <p className="font-semibold text-black/60 animate-pulse">Thinking...</p>}
                    {chats.length > 0 && <div id="endOfChat" className="w-full pb-44 h-12 bg-transparent" />}
                </div>
                {
                    chats.length === 0 && (
                        <div className="h-screen absolute flex items-center justify-center text-center ">
                            <h1 className="text-3xl max-w-[80vw]">Hi, i am <span className="text-tangerine text-6xl font-semibold text-violet-500">Sudip's</span> AI twin.</h1>
                        </div>
                    )
                }
            </div>
            <AiInput />
        </div>
    )
}

export default AiChat