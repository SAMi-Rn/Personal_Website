import React from 'react'
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Stadium from '../models/Stadium'
import Sky from '../models/Sky'

const Home = () => {
    const adjustStadiumForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43.4]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
            screenPosition = [0, -6.5, -43.4]
        } else {
            screenScale = [1, 1, 1]
            screenPosition = [0, -6.5, -43.4]
        }

        return [screenScale, screenPosition, rotation]
    }
    const [stadiumScale, stadiumPosition, stadiumRotation] = adjustStadiumForScreenSize()
    return (
        < section className='w-full h-screen relative' >
            {/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                Popups goes here
            </div>    */}
            <Canvas
                className="w-full h-screen bg-transparent"
                camera={{ near: 0.1, far: 1000 }}>
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
                    <Sky />
                    <Stadium
                        position={stadiumPosition}
                        scale={stadiumScale}
                        rotation={stadiumRotation}
                    />

                </Suspense>

            </Canvas>


        </section>

    )
}

export default Home