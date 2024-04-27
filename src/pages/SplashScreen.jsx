import { Suspense, useEffect, useRef, useState, useCallback } from "react"
import SpaceBackground from '../hooks/SpaceBackground'
import addTiltEffect from '../components/TiltEffect'

const SplashScreen = ({ isLoading, onExplore }) => {
    const buttonRefs = useRef([])


    const addRefs = (el) => {
        if (el && !buttonRefs.current.includes(el)) {
            buttonRefs.current.push(el)
        }
    }

    useEffect(() => {
        sessionStorage.removeItem('shownStage5')
        buttonRefs.current.forEach(button => {
            if (button) {
                addTiltEffect(button)
            }
        })
    }, [])
    return (
        <div className="splash-screen">
            <SpaceBackground />
            <h1 className="splash-header">WELCOME TO MY PORTFOLIO WEBSITE!</h1>

            <span className="splash-text">Hi, I'm Sami👋</span>

            <span className="splash-text">A Co-op student at the British Columbia Institute of Technology (BCIT)</span>

            <p className="splash-text"> Join me as we navigate the constellations of creativity that form the universe of my professional endeavors.</p>
            <button
                ref={addRefs}
                className="splash-button"
                onClick={!isLoading ? onExplore : null}
                style={{
                    cursor: !isLoading ? 'pointer' : 'default',
                    opacity: isLoading ? 0.5 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                disabled={isLoading} // Disable the button when isLoading
            >
                {isLoading
                    ? <div className="spinner"></div> // Show spinner when loading
                    : 'EXPLORE MY UNIVERSE →' // Show text when not loading
                }
            </button>
        </div>
    )
}

export default SplashScreen
