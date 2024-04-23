import skyScene from "../assets/3d/star.glb"
import { useGLTF } from '@react-three/drei'
import { useRef, useState, useEffect, } from 'react'
import { useFrame } from '@react-three/fiber'

const Sky = ({ isRotating, onLoad }) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef()
    const [modelLoaded, setModelLoaded] = useState(false) // State to track if the model has loaded

    useEffect(() => {
        if (skyRef.current) {
            setModelLoaded(true)
            if (onLoad) {
                onLoad() // Call the onLoad callback if provided
            }
        }
    }, [onLoad])
    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.25 * delta // Adjust the rotation speed as needed
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />

        </mesh>
    )
}

export default Sky