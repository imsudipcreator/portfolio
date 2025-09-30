import React from 'react'

const Welcome = () => {
    return (
        <div className='w-full text-white'>
            <h1>Welcome to my terminal portfolio. (version 1.0.0)</h1>
            <p>---</p>
            <h1>This project's source code can be found in this project's</h1>
            <a href="https://github.com/imsudipcreator/portfolio" className='text-[#ff9d00] decoration-dotted underline underline-offset-8'>Github Repo</a>
            <p>---</p>
            <h1>for a list of available commands, type `<span className='text-[#05ce91]'>help</span>`</h1>
        </div>
    )
}

export default Welcome