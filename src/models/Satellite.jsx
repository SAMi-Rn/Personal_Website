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
    const [modelLoaded, setModelLoaded] = useState(false) // State to track if the model has loaded

    useEffect(() => {
        // Check if the model has been loaded
        if (scene && animations) {
            setModelLoaded(true)
            if (onLoad) {
                onLoad() // Call the onLoad callback if provided
            }
        }
    }, [scene, animations, onLoad])
    useEffect(() => {
        actions["ArmatureAction"].play()
    }, [actions])

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const orbitSpeed = 0.2 // Lower this value to slow down the speed of the orbit
        const radius = window.innerWidth < 768 ? 15 : 25
        const planetPosition = [0, 0, -43.4]

        if (sattelliteRef.current) {
            // Apply the speed factor to time to slow down the orbit
            const angle = orbitSpeed * time

            // Calculate the new X and Z positions for the satellite to orbit around the planet's position
            sattelliteRef.current.position.x = Math.cos(angle) * radius + planetPosition[0]  // X-axis
            sattelliteRef.current.position.y = planetPosition[1] // Y-axis
            sattelliteRef.current.position.z = Math.sin(angle) * radius + planetPosition[2]  // Z-axis

            // Point the satellite towards the center of the orbit and then rotate it to face away
            sattelliteRef.current.lookAt(...planetPosition)
            sattelliteRef.current.rotation.y += Math.PI // Rotate 180 degrees to face away from the planet
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
            {/* Adjusted PointLight position and properties */}
            <pointLight ref={lightRef} position={[-6, 1, -1]} intensity={10} distance={15} decay={1} />
        </>
    )
}

export default Satellite
