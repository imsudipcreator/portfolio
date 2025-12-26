import { devicons } from '@/data/devicons'
import { motion } from "motion/react"
import { LuSparkle } from 'react-icons/lu'
import { Link } from 'react-router'
import type { ProjectType } from '../types/project-types'

const ProjectCard = ({ desc, image, tags, title, links }: ProjectType) => {
    return (
        <motion.div
            viewport={{ once: true }}
            initial={{
                translateY: 40,
                opacity: 0,
            }}
            whileInView={{
                translateY: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.4
            }}
            className='w-full rounded-xl border border-black/20 overflow-clip h-full'>
            {image && <img src={image} alt="" className={`w-full hover:scale-110 transition-transform duration-300`} />}
            <div className='p-4 flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <h1 className='font-medium md:text-xl text-lg'>{title}</h1>
                    <h3 className='text-black/70 font-medium not-md:text-sm'>{desc}</h3>
                </div>

                <div className='flex flex-col gap-3 w-full'>

                    <div className={`w-full flex flex-wrap items-center gap-4 ${image ? 'mt-4' : 'mt-2'}`}>
                        {
                            tags.map((tag, index) => (
                                <motion.img
                                    viewport={{ once: true }}
                                    initial={{
                                        opacity: 0,
                                        scale: 0
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1
                                    }}
                                    src={devicons[tag]}
                                    alt={tag}
                                    key={Math.random().toString(36)}
                                    className='size-8 select-none'
                                />
                            ))
                        }
                    </div>

                    <div className='flex flex-wrap items-center gap-2'>
                        {
                            links.map(link => (
                                <a
                                    href={link.url}
                                    target='_blank'
                                    key={link.url}
                                    className=' text-white bg-gradient-to-br from-violet-500 to-violet-700 px-2.5 font-medium 
                                    flex items-center gap-1.5 py-1.5 rounded-lg shadow-lg shadow-blue-500/50
                                    hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 ease-in-out'>
                                    <link.icon size={18} />
                                    <span>{link.alias}</span>
                                </a>
                            ))
                        }
                        <Link
                            to={"/chat?query=" + encodeURIComponent("What is " + title)}
                            className=' text-white bg-gradient-to-br from-violet-500 to-violet-700 px-2.5 font-medium 
                                    flex items-center gap-1.5 py-1.5 rounded-lg shadow-lg shadow-blue-500/50
                                    hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 ease-in-out'
                        >
                            <LuSparkle size={18} />
                            <span>{"Summary"}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard