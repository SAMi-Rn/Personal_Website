import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import satelliteScene from '../assets/3d/satellite.glb'

const Satellite = () => {
    const sattelliteRef = useRef()
    const lightRef = useRef()
    const { scene, animations } = useGLTF(satelliteScene)
    const { actions } = useAnimations(animations, sattelliteRef)
    const { camera } = useThree()

    useEffect(() => {
        actions["ArmatureAction"].play()
    }, [actions])

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        const orbitSpeed = 0.2 // Lower this value to slow down the speed of the orbit
        const radius = 25
        const planetPosition = [0, 7.5, -43.4]

        if (sattelliteRef.current) {
            // Apply the speed factor to time to slow down the orbit
            const angle = orbitSpeed * time

            // Calculate the new X and Z positions for the satellite to orbit around the planet's position
            sattelliteRef.current.position.x = Math.cos(angle) * radius + planetPosition[0] // X-axis
            sattelliteRef.current.position.y = planetPosition[1] // Y-axis
            sattelliteRef.current.position.z = Math.sin(angle) * radius + planetPosition[2] // Z-axis

            // Point the satellite towards the center of the orbit and then rotate it to face away
            sattelliteRef.current.lookAt(...planetPosition)
            sattelliteRef.current.rotation.y += Math.PI // Rotate 180 degrees to face away from the planet
        }
    })




    return (
        <>
            <ambientLight intensity={0.3} />
            <mesh
                position={[-12, 5, -1]}
                scale={[2, 2, 2]}
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
