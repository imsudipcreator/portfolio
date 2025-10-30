import type { ProjectType } from '../types/projectTypes'

const ProjectCard = ({ desc, image, tags, title, links }: ProjectType) => {
    return (
        <div className='w-full rounded-xl border border-black/20 overflow-clip h-full'>
            {image && <img src={image} alt="" className={`w-full hover:scale-110 transition-transform duration-300`} />}
            <div className='p-4 flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <h1 className='font-medium md:text-xl text-lg'>{title}</h1>
                    <h3 className='text-black/70 font-medium not-md:text-sm'>{desc}</h3>
                </div>

                <div className='flex flex-col gap-2 w-full'>

                    <div className={`w-full flex flex-wrap items-center gap-2 ${image ? 'mt-4' : 'mt-2'}`}>
                        {
                            tags.map(tag => (
                                <span key={Math.random().toString(36)} className='text-sm text-black px-2 py-1 rounded-md bg-gray-200'>{tag}</span>
                            ))
                        }
                    </div>

                    <div className='flex items-center gap-2'>
                        {
                            links.map(link => (
                                <a href={link.url} target='_blank' key={link.url} className=' text-white bg-black px-2 font-medium flex items-center gap-1.5 py-1 rounded-md hover:bg-black/80 transition-colors duration-300'>
                                    <link.icon size={20} />
                                    {link.alias}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard