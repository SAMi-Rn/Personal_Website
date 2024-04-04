import React from 'react'
import { useGLTF } from '@react-three/drei'
import ballScene from '../assets/3d/ball.glb'

const Ball = () => {
    const { scene, animations } = useGLTF(ballScene)
    return (
        <mesh position={[-5, 1, -1]} scale={[0.04, 0.04, 0.04]}>
            <primitive object={scene} />
        </mesh >
    )
}

export default Ball