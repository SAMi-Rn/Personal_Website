import React from 'react'
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState, useCallback } from "react"

import Planet from '../models/Planet'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Satellite from '../models/Satellite'
import HomeInfo from '../components/HomeInfo'
import drone from '../assets/drone.mp3'
import { soundoff, soundon } from "../assets/icons"
import SpaceBackground from '../hooks/SpaceBackground'
import addTiltEffect from '../components/TiltEffect'
import SplashScreen from './SplashScreen'


const Home = () => {
    const audioRef = useRef(new Audio(drone))
    audioRef.current.loop = true
    audioRef.current.volume = 0.05
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(5)
    const [isPlayingMusic, setIsPlayingMusic] = useState(false)
    const [isLoading, setIsLoading] = useState(true) // Start with loading true
    const [showSplash, setShowSplash] = useState(true) // Start with splash screen visible
    const [loadedModels, setLoadedModels] = useState({
        planet: false,
        sky: false,
        satellite: false,
        plane: false,
    })
    const modelsLoadedRef = useRef({
        planet: false,
        sky: false,
        satellite: false,
        plane: false,
    })
    const handleExplore = () => {
        setShowSplash(false) // Hide splash screen
    }
    const checkAllModelsLoaded = () => {
        return Object.values(modelsLoadedRef.current).every(Boolean)
    }

    const handleModelLoaded = useCallback((modelName) => {
        console.log(`${modelName} loaded`)
        modelsLoadedRef.current[modelName] = true

        // After updating the ref, check if all models are loaded
        if (checkAllModelsLoaded()) {
            setIsLoading(false) // Set loading to false when all models have loaded
        }
    }, [])
    useEffect(() => {
        const allModelsLoaded = Object.values(loadedModels).every(Boolean)
        setIsLoading(!allModelsLoaded)
    }, [loadedModels])
    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play()
        }

        return () => {
            audioRef.current.pause()
        }
    }, [isPlayingMusic])
    const adjustStadiumForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43.4]
        let rotation = [0.4, -2.7, -0.0010]


        if (window.innerWidth < 768) {
            screenScale = [9, 9, 9]
            screenPosition = [0, 0, -43.4]
        } else {
            screenScale = [16, 16, 16]
            screenPosition = [0, 0, -43.4]
        }

        return [screenScale, screenPosition, rotation]
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale = [0.2, 0.2, 0.2] // Maintain the scale you want
        let screenPosition = [0, 0, 0] // Start by centering at the origin

        if (window.innerWidth < 768) {
            screenScale = [2, 0.002, 0.002] // Maintain the scale you want
            screenPosition = [20, 0, 0]
        }

        return [screenScale, screenPosition]
    }

    // ... inside your component ...
    const [planeScale, planePosition] = adjustPlaneForScreenSize()

    const [stadiumScale, stadiumPosition, stadiumRotation] = adjustStadiumForScreenSize()

    return (
        < section className='w-full h-screen relative' >
            {showSplash && <SplashScreen isLoading={isLoading} onExplore={handleExplore} />}
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-w'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`w-full h-screen bg-black ${isRotating ? "cursor-grabbing" : "cursor-grab"
                    }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense >
                    <directionalLight position={[1, 1, 1]} intensity={30} />

                    <Satellite
                        onLoad={() => handleModelLoaded('satellite')} />
                    <Sky onLoad={() => handleModelLoaded('sky')}
                        isRotating={isRotating} />
                    <Planet
                        onLoad={() => handleModelLoaded('planet')}
                        position={stadiumPosition}
                        scale={stadiumScale}
                        rotation={stadiumRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />

                    <Plane
                        onLoad={() => handleModelLoaded('plane')}
                        planeScale={planeScale}
                        planePosition={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20, 0]}
                    />

                </Suspense>

            </Canvas>

            <div className='absolute bottom-2 left-2'>
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt='jukebox'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className='w-10 h-10 cursor-pointer object-contain'
                />
            </div>

        </section >

    )
}

export default Home