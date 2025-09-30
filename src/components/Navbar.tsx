import React from 'react'
import { IoTerminal, IoDesktop } from "react-icons/io5";


const navBarOptions = [
    { id: 1, title: "GUI", icon: IoDesktop, route: "/" },
    { id: 2, title: "Terminal", icon: IoTerminal, route: "/terminal" },
]

const Navbar = () => {
    return (
        <div className='absolute bottom-9 left-0 right-0 mx-auto max-w-xl w-full h-16 rounded-2xl bg-slate-300 grid grid-cols-2 gap-1.5 p-1.5'>
            {
                navBarOptions.map((option) => (
                    <button key={option.id} className={`col-span-1 h-full flex items-center justify-center bg-slate-400 rounded-xl`}>
                        {<option.icon className='text-2xl' />}
                        <span className='ml-2'>{option.title}</span>
                    </button>
                ))
            }
        </div>
    )
}

export default Navbar