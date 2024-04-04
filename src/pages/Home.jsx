import React from 'react'
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react"
import Loader from '../components/Loader'
import Stadium from '../models/Stadium'
import Sky from '../models/Sky'
import Ball from '../models/Ball'
import Plane from '../models/Plane'

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
            screenScale = [1, 1, 1]
            screenPosition = [0, -6.5, -43.4]
        }

        return [screenScale, screenPosition, rotation]
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition

        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        } else {
            screenScale = [3, 3, 3]
            screenPosition = [0, -4, -4]
        }

        return [screenScale, screenPosition]
    }

    const [stadiumScale, stadiumPosition, stadiumRotation] = adjustStadiumForScreenSize()
    const [planeScale, planePosition] = adjustPlaneForScreenSize()
    return (
        < section className='w-full h-screen relative' >
            {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                Popups goes here
            </div>    */}
            <Canvas
                className={`w-full h-screen bg-black ${isRotating ? "cursor-grabbing" : "cursor-grab"
                    }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <spotLight
                        position={[0, 50, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />
                    <hemisphereLight
                        skyColor='#b1e1ff'
                        groundColor='#000000'
                        intensity={1}
                    />
                    <Ball />
                    <Sky isRotating={isRotating} />
                    <Stadium
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