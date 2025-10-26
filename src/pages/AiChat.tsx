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
                <div className="max-w-[50rem] w-full flex flex-col gap-y-6 py-6 min-h-fit ">
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