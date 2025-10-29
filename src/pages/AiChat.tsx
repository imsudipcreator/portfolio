import AiInput from "@/components/AiInput";
import { MarkdownRender } from "@/components/MarkdownRender";
import { useAi } from "@/contexts/useAi";
import { useEffect } from "react";

const AiChat = () => {
    const { chats } = useAi()
    useEffect(() => {
        const endOfChat = document.getElementById("endOfChat")
        endOfChat?.scrollIntoView({ behavior: "smooth" })
    }, [chats])

    return (
        <div className='max-w-screen max-h-screen flex justify-center relative  overflow-y-clip'>
            <div className='w-full flex flex-col md:min-h-screen min-h-[calc(100vh-50px)] overflow-y-auto items-center '>
                <div className="max-w-[50rem] w-full flex flex-col gap-y-6 py-6 min-h-fit not-md:px-6">
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
                                                    <a key={ref.url} href={ref.url} target="_blank" className="min-h-18 min-w-20 max-w-[33%] bg-gray-200 hover:bg-gray-300 transition-colors duration-200 rounded-2xl py-2 px-3 shrink-0 flex justify-between gap-2">
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
                    {chats.length > 0 && <div id="endOfChat" className="w-full pb-44 h-12 bg-transparent" />}
                </div>
                {
                    chats.length === 0 && (
                        <div className=" h-full  flex items-center justify-center text-center ">
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