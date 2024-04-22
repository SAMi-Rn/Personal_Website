import { Link } from "react-router-dom"

import CTA from "../components/CTA"
import { projects } from "../constants"
import { arrow } from "../assets/icons"

const Projects = () => {

    return (
        <section className='max-container'>
            <h1 className='head-text text-white'>
                My{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
                    Projects
                </span>
            </h1>

            <p className='text-slate-200 mt-2 leading-relaxed'>
                In my journey, I've taken the lead on various projects, each holding its own significance. Many of these projects are open-source, inviting exploration and contributions. I encourage you to explore these projects, including both my personal and academic endeavors, as they represent collaborative efforts and opportunities for further development.
            </p>

            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project, index) => (
                    <div className='lg:w-[400px] w-full text-white animate-fadeInUp' key={project.name}>
                        <div className={`block-container w-12 h-12 `}>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt={project.name}
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-300'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                {project.link && (
                                    <>
                                        <Link
                                            to={project.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='font-semibold text-blue-600'
                                        >
                                            Github Link
                                        </Link>
                                        <img
                                            src={arrow}
                                            alt='arrow'
                                            className='w-4 h-4 object-contain'
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200' />

            <CTA />
        </section>
    )
}

export default Projects
