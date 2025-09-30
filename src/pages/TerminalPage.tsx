import React from 'react'
import Welcome from '../components/terminal/commands/Welcome'

const TerminalPage = () => {
    return (
        <div className='w-full min-h-screen bg-[#1D2A35] py-4 px-5 text-lg'>
            <div className='flex flex-col w-full gap-2'>
                <div className='flex items-center gap-4'>
                    <h1 className='font-medium text-white'><span className='text-[#ff9d00]'>visitor</span>@<span className='text-[#05ce91] font-medium'>terminal.imsudip.dev</span>:~$</h1>
                    <input type="text" className='w-full h-fit text-white outline-none bg-transparent caret-[#05ce91]' />
                </div>
                <Welcome />
            </div>
        </div>
    )
}

export default TerminalPage