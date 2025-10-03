

const navBarOptions = [
    { title: "Home", routeTo: "/" },
    { title: "Works", routeTo: "#works" },
    { title: "Contact", routeTo: "#contact" },
]

const Navbar = () => {
    return (
        <div className='fixed top-5 left-0 right-0 mx-auto w-fit h-fit flex items-center justify-around gap-2 rounded-full bg-black p-1'>
            {
                navBarOptions.map(option => (
                    <a href={option.routeTo} className={`rounded-full w-fit flex items-center justify-center  bg-amber-400/30 text-amber-400 py-1.5 px-2.5`}>
                        {option.title}
                    </a>
                ))
            }
        </div>
    )
}

export default Navbar