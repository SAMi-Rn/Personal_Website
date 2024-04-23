import { Link } from "react-router-dom"

import { useEffect, useRef, useState } from 'react'
import addTiltEffect from './TiltEffect'
import { drag } from '../assets/icons'

const DragToExploreTooltip = () => (
    <div className="drag-to-explore-tooltip">
        <img
            src={drag}
            alt='drag'
            className='w-4 h-4 object-contain'
        />
        <p>DRAG TO EXPLORE</p>
    </div>
)
const HomeInfo = ({ currentStage }) => {
    const buttonRefs = useRef([])
    const [showTooltip, setShowTooltip] = useState(true)


    const handleUserInteraction = () => {
        setShowTooltip(false)
    }
    // This function adds an element to the buttonRefs array
    const addRefs = (el) => {
        if (el && !buttonRefs.current.includes(el)) {
            buttonRefs.current.push(el)
        }
    }

    // This effect applies the tilt effect to all buttons
    useEffect(() => {
        buttonRefs.current.forEach(button => {
            if (button) {
                addTiltEffect(button)
            }
        })
    }, [])

    const [showStage5, setShowStage5] = useState(false)

    useEffect(() => {
        // Check if the message for stage 5 has already been shown using sessionStorage
        const alreadyShown = sessionStorage.getItem('shownStage5') === 'true'

        if (currentStage === 5 && !alreadyShown) {
            setShowStage5(true)  // Show the tooltip
            sessionStorage.setItem('shownStage5', 'true')  // Set the flag in sessionStorage
        }
    }, [currentStage])  // Dependency on currentStage ensures this runs when stage changes

    if (showStage5) {
        return (
            <div className="space-container">
                <div className="blurry-box-wrapper">

                    <img
                        src={drag}
                        alt='drag'
                        className='w-21 h-20 object-contain'
                    />
                    <h1 className="blurry-text">
                        Drag to Begin Your Journey! <span style={{ fontSize: '48px' }}>🛸</span>
                    </h1>

                </div>
            </div>
        )
    }


    if (currentStage === 1)
        return (
            <div className='info-box'>
                <h1 className='sm:text-xl sm:leading-snug text-center  py-4 px-1 text-white mx-3'>
                    Hi, I'm
                    <span className='font-semibold mx-2 text-white'>Sami</span>
                    👋
                    <br />
                    A Co-op student at the British Columbia Institute of Technology (BCIT)
                </h1>
            </div>
        )

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center  py-4 px-1'>
                    My portfolio showcases a variety of personal and academic projects developed through my studies at the BCIT
                </p>

                <Link to='/projects' className=' neo-btn' ref={addRefs}>
                    Learn more
                </Link>
            </div>
        )
    }

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center  py-4 px-1'>
                    I have gained diverse work experience across multiple companies.
                </p>

                <Link to='/about' className=' neo-btn' ref={addRefs}>
                    Visit my portfolio
                </Link>
            </div>
        )
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center  py-4 px-1'>
                    Are you seeking assistance with a project or in need of a developer? Please feel free to contact me <br /> 👨🏼‍💻 I am only a few keystrokes away!<br />
                </p>

                <Link to='/contact' className=' neo-btn' ref={addRefs}>
                    Let's talk
                </Link>
            </div>
        )
    }

    return null
}

export default HomeInfo
