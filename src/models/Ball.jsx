import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import ballScene from '../assets/3d/satellite.glb'

const Ball = () => {
    const ballRef = useRef()
    const lightRef = useRef()
    const { scene, animations } = useGLTF(ballScene)
    const { actions } = useAnimations(animations, ballRef)
    const { camera } = useThree()

    useEffect(() => {
        actions["ArmatureAction"].play()
    }, [actions])

    useFrame(({ clock, camera }) => {

        if (ballRef.current && lightRef.current) {
            const objectPosition = ballRef.current.position
            lightRef.current.position.set(objectPosition.x, objectPosition.y, objectPosition.z + 2)
        }
        if (ballRef.current.position.x > camera.position.x + 10) {
            // Change direction to backward and rotate the bird 180 degrees on the y-axis
            ballRef.current.rotation.y = Math.PI
        } else if (ballRef.current.position.x < camera.position.x - 10) {
            // Change direction to forward and reset the bird's rotation
            ballRef.current.rotation.y = 0
        }

        // Update the X and Z positions based on the direction
        if (ballRef.current.rotation.y === 0) {
            // Moving forward
            ballRef.current.position.x += 0.008
            ballRef.current.position.z -= 0.001
        } else {
            // Moving backward
            ballRef.current.position.x -= 0.008
            ballRef.current.position.z += 0.001
        }
    })

    return (
        <>
            <ambientLight intensity={0.3} />
            <mesh
                position={[-12, 5, -1]}
                scale={[0.4, 0.4, 0.4]}
                ref={ballRef}
            >
                <primitive object={scene} />
            </mesh>
            {/* Adjusted PointLight position and properties */}
            <pointLight ref={lightRef} position={[-6, 1, -1]} intensity={10} distance={15} decay={1} />
        </>
    )
}

export default Ball
