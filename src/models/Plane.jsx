import React, { useRef, useEffect } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/spaceship (1).glb'
import { useThree, useFrame } from '@react-three/fiber'

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef()
    const lightRef = useRef()
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, ref)

    // Determine screen size and set scale and position
    let screenScale, screenPosition, screenRotation
    if (window.innerWidth < 768) {
        screenScale = [0.008, 0.008, 0.008]
        screenPosition = [0, -2.8, -3]
    } else {
        screenScale = [0.01, 0.01, 0.01]
        screenPosition = [0, -2.8, -3]

    }

    useEffect(() => {
        if (isRotating) {
            actions["Armature|ArmatureAction.001"].play()
        } else {
            actions["Armature|ArmatureAction.001"].stop()
        }
    }, [actions, isRotating])
    useFrame(({ clock, camera }) => {

        if (ref.current && lightRef.current) {
            const objectPosition = ref.current.position
            lightRef.current.position.set(objectPosition.x, objectPosition.y + 9, objectPosition.z + 2)
        }

    })
    return (
        <>
            <ambientLight intensity={0.3} />
            <mesh {...props} ref={ref} scale={screenScale} position={screenPosition} rotation={screenRotation}>
                <primitive object={scene} />
            </mesh>
            <pointLight ref={lightRef} position={[-6, 12, -5]} intensity={40} distance={15} decay={1} />
        </>
    )
}

export default Plane
