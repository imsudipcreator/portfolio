import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { LuArrowUp, LuChevronsUpDown, LuEraser, LuHouse, LuLoader } from 'react-icons/lu'
import { useAi } from '@/contexts/useAi'
import type { IconType } from 'react-icons';
import { AnimatePresence, motion } from "motion/react"



const AiInput = () => {
    const [input, setInput] = useState("")
    const { createChat, setChats, getAiResponse, loading } = useAi()
    const [openedMenu, setOpenedMenu] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);
    const menuBtnRef = useRef<HTMLButtonElement>(null);

    const menuOptions: { icon: IconType, title: string, onClick: () => void }[] = [
        {
            icon: LuHouse,
            title: "Home",
            onClick: () => window.location.href = "/"
        },
        {
            icon: LuEraser,
            title: "Clear Chat",
            onClick: () => setChats([])
        }
    ]


    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault()
        const query = input.trim()

        // create a chat and clear the input
        createChat("user", query)
        setInput("")

        // get the ai response and show it to the user
        const response = await getAiResponse(query)
        createChat("ai", response.content, response.references)

    }

    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node) && !menuBtnRef.current?.contains(e.target as Node)) {
                setOpenedMenu(false)
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };

    }, [openedMenu]);

    return (
        <footer className='absolute bottom-0 mx-auto z-50 md:w-[51rem] w-fit not-md:mx-2 not-md:px-1 min-h-20 bg-white flex flex-col items-center rounded-t-3xl'>
            <div className='w-full h-14 bg-gradient-to-t from-white to-transparent -translate-y-10 absolute' />
            <div className='flex w-full items-center h-12 gap-1'>
                <div className='h-full z-50 border border-black/30 aspect-square rounded-full p-0 bg-transparent  transition-colors duration-300 relative'>
                    <Button ref={menuBtnRef} type='button' className='w-full h-full rounded-full p-0 bg-transparent active:bg-black/20  hover:bg-black/10 cursor-pointer'>
                        <LuChevronsUpDown onClick={() => setOpenedMenu(prev => !prev)} className='size-6 text-black' />
                    </Button>
                    <AnimatePresence>
                        {
                            openedMenu && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0
                                    }}
                                    ref={menuRef}
                                    className='absolute min-h-16 min-w-16 rounded-xl z-[100] bg-white shadow-xl border border-black/10 left-0 -top-25 flex flex-col items-center gap-2 p-1 justify-around'
                                >
                                    {
                                        menuOptions.map(option => (
                                            <button onClick={() => { option.onClick(); setOpenedMenu(false) }} key={option.title} className='w-full flex items-center gap-1.5 cursor-pointer hover:bg-black/20 rounded-lg py-1.5 px-2 text-black'>
                                                {option.icon && <option.icon className='size-[1.2rem]' />}
                                                <p className=' text-nowrap font-medium'>{option.title}</p>
                                            </button>
                                        ))
                                    }
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
                <form onSubmit={handleSubmit} className='flex-1 flex items-center rounded-3xl border-black/30 border bg-white h-full p-1 z-50'>
                    <input type='text' value={input} onChange={(e) => setInput(e.target.value)} className='flex-1 h-full rounded-full px-4 outline-none border-none' placeholder='Ask something to my twin...' autoFocus contextMenu='' />
                    <Button type='submit' disabled={input.trim() === "" || loading} className='h-full aspect-square rounded-full bg-black/90 p-0 cursor-pointer'>
                        {loading ? <LuLoader className='size-6 animate-spin' /> : <LuArrowUp className='size-6' />}
                    </Button>
                </form>
            </div>
            <p className='text-xs py-1'>You can find the advanced version of it on our <a className='text-blue-600 underline underline-offset-2' href="https://imagollc.vercel.app/" target='_blank'>imago</a> website</p>
        </footer>
    )
}

export default AiInput