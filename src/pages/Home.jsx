import React from 'react'
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react"
import Loader from '../components/Loader'
import Planet from '../models/Planet'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Satellite from '../models/Satellite'
import HomeInfo from '../components/HomeInfo'

const Home = () => {
    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)

    const adjustStadiumForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43.4]
        let rotation = [0.4, -2.7, -0.0010]


        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
            screenPosition = [0, -6.5, -43.4]
        } else {
            screenScale = [12, 12, 12]
            screenPosition = [0, 7.5, -43.4]
        }

        return [screenScale, screenPosition, rotation]
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale = [0.2, 0.2, 0.2] // Maintain the scale you want
        let screenPosition = [0, 0, 0] // Start by centering at the origin

        // Adjust further if needed based on camera's position and angle
        // If the camera is at [0, 0, some_positive_value], the object should appear centered

        return [screenScale, screenPosition]
    }

    // ... inside your component ...
    const [planeScale, planePosition] = adjustPlaneForScreenSize()

    const [stadiumScale, stadiumPosition, stadiumRotation] = adjustStadiumForScreenSize()

    return (
        < section className='w-full h-screen relative' >
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-w'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`w-full h-screen bg-black ${isRotating ? "cursor-grabbing" : "cursor-grab"
                    }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={30} />

                    <Satellite />
                    <Sky isRotating={isRotating} />
                    <Planet
                        position={stadiumPosition}
                        scale={stadiumScale}
                        rotation={stadiumRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />

                    <Plane
                        planeScale={planeScale}
                        planePosition={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20, 0]}
                    />

                </Suspense>

            </Canvas>


        </section>

    )
}

export default Home