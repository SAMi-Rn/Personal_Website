import React, { useEffect, useRef, useState } from 'react'
import { skills, experiences } from "../constants"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import CTA from "../components/CTA"
import SpaceBackground from '../hooks/SpaceBackground'
const About = () => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 1170)

    useEffect(() => {
        const updateMedia = () => {
            setIsNarrowScreen(window.innerWidth < 1170)
        }

        window.addEventListener('resize', updateMedia)
        updateMedia()

        return () => window.removeEventListener('resize', updateMedia)
    }, [])
    return (
        <div>
            <SpaceBackground />
            <section className='max-container'>
                <h1 className='head-text text-white'>
                    Hello, I'm{" "}
                    <span className='blue-gradient_text font-semibold drop-shadow'>
                        {" "}
                        Sami
                    </span>{" "}
                    👋
                </h1>
                <div className='mt-5 flex flex-col gap-3 text-slate-200'>
                    <p>
                        I am a Software Engineer based in Iran, currently in my third year pursuing a Bachelor of Applied Computer Science, specializing in Network Security, at the British Columbia Institute of Technology.
                    </p>
                </div>
                <div className='py-10 flex flex-col'>
                    <h3 className='subhead-text text-zinc-50'>My Skills</h3>

                    <div className='mt-16 flex flex-wrap gap-12  '>
                        {skills.map((skill) => (
                            <div className='block-container w-20 h-20' key={skill.name}>
                                <div className='btn-back rounded-xl' />
                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='py-16' >
                    <h3 className='subhead-text text-zinc-50'>Work Experience.</h3>
                    <div className='mt-5 flex flex-col gap-3 text-slate-300'>
                        <p>
                            I've had the opportunity to work with a wide variety of companies. This experience has allowed me to refine and elevate my technical skills with the chance to collaborate with highly intelligent and innovative teams. Below, I offer a comprehensive rundown of these experiences.
                        </p>
                    </div>

                    <div className='mt-12 flex'>
                        <VerticalTimeline>
                            {experiences.map((experience, index) => (
                                <VerticalTimelineElement
                                    key={experience.company_name}
                                    date={experience.date}
                                    iconStyle={{ background: experience.iconBg }}
                                    icon={
                                        <div className='flex justify-center items-center w-full h-full'>
                                            <img
                                                src={experience.icon}
                                                alt={experience.company_name}
                                                className='w-[60%] h-[60%] object-contain'
                                            />
                                        </div>
                                    }
                                    contentStyle={{
                                        borderBottom: "8px",
                                        borderStyle: "solid",
                                        borderBottomColor: experience.iconBg,
                                        boxShadow: "none",
                                        color: isNarrowScreen ? "black" : "white",
                                    }}
                                >
                                    <div>
                                        <h3 className='text-black text-xl font-poppins font-semibold'>
                                            {experience.title}
                                        </h3>
                                        <p
                                            className='text-black-500 font-medium text-base'
                                            style={{ margin: 0 }}
                                        >
                                            {experience.company_name}
                                        </p>
                                    </div>

                                    <ul className='my-5 list-disc ml-5 space-y-2'>
                                        {experience.points.map((point, index) => (
                                            <li
                                                key={`experience-point-${index}`}
                                                className='text-black-500/50 font-normal pl-1 text-sm'
                                            >
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
                <hr className='border-slate-200' />

                <CTA />
            </section>
        </div>
    )
}

export default About