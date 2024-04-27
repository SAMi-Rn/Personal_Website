import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import satelliteScene from '../assets/3d/satelite1.glb'

const Satellite = ({ onLoad }) => {
    const sattelliteRef = useRef()
    const lightRef = useRef()
    const { scene, animations } = useGLTF(satelliteScene)
    const { actions } = useAnimations(animations, sattelliteRef)
    const { camera } = useThree()
    const [modelLoaded, setModelLoaded] = useState(false)

    useEffect(() => {
        if (scene && animations) {
            setModelLoaded(true)
            if (onLoad) {
                onLoad()
            }
        }
    }, [scene, animations, onLoad])
    useEffect(() => {
        actions["ArmatureAction"].play()
    }, [actions])

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const orbitSpeed = 0.2
        const radius = window.innerWidth < 768 ? 15 : 25
        const planetPosition = [0, 0, -43.4]

        if (sattelliteRef.current) {
            const angle = orbitSpeed * time

            sattelliteRef.current.position.x = Math.cos(angle) * radius + planetPosition[0]
            sattelliteRef.current.position.y = planetPosition[1]
            sattelliteRef.current.position.z = Math.sin(angle) * radius + planetPosition[2]
            sattelliteRef.current.lookAt(...planetPosition)
            sattelliteRef.current.rotation.y += Math.PI
        }
    })

    let screenScale, screenPosition
    if (window.innerWidth < 768) {
        screenScale = [1, 1, 1]
        screenPosition = [-12, 5, -1]
    } else {
        screenScale = [1, 1, 1]
        screenPosition = [-12, 5, -1]

    }


    return (
        <>
            <ambientLight intensity={0.3} />
            <mesh
                scale={screenScale}
                position={screenPosition}
                ref={sattelliteRef}
            >
                <primitive object={scene} />
            </mesh>
            <pointLight ref={lightRef} position={[-6, 1, -1]} intensity={10} distance={15} decay={1} />
        </>
    )
}

export default Satellite
