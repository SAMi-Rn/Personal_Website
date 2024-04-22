
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import stadiumScene from '../assets/3d/planet.glb'
import { a } from '@react-spring/three'

const Planet = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const planetRef = useRef()
    const { gl, viewport } = useThree()

    const { nodes, materials, animations } = useGLTF(stadiumScene)
    const lastX = useRef(0)
    const rotationSpeed = useRef(0)
    const dampingFactor = 0.9
    const { actions } = useAnimations(animations, planetRef)
    const handlePointerDown = (event) => {
        event.stopPropagation()
        event.preventDefault()
        setIsRotating(true)

        const clientX = event.touches ? event.touches[0].clientX : event.clientX

        lastX.current = clientX
    }

    const handlePointerUp = (event) => {
        event.stopPropagation()
        event.preventDefault()
        setIsRotating(false)
    }

    const handlePointerMove = (event) => {
        event.stopPropagation()
        event.preventDefault()
        if (isRotating) {
            // If rotation is enabled, calculate the change in clientX position
            const clientX = event.touches ? event.touches[0].clientX : event.clientX

            // calculate the change in the horizontal position of the mouse cursor or touch input,
            // relative to the viewport's width
            const delta = (clientX - lastX.current) / viewport.width

            // Update the island's rotation based on the mouse/touch movement
            planetRef.current.rotation.y += delta * 0.006 * Math.PI

            // Update the reference for the last clientX position
            lastX.current = clientX

            // Update the rotation speed
            rotationSpeed.current = delta * 0.006 * Math.PI
        }
    }
    // Handle keydown events
    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
            if (!isRotating) setIsRotating(true)

            planetRef.current.rotation.y = 0.005 * Math.PI
            rotationSpeed.current = 0.007
        } else if (event.key === "ArrowRight") {
            if (!isRotating) setIsRotating(true)

            planetRef.current.rotation.y -= 0.005 * Math.PI
            rotationSpeed.current = -0.007
        }
    }

    // Handle keyup events
    const handleKeyUp = (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            setIsRotating(false)
        }
    }
    useEffect(() => {

        // Add event listeners for pointer down, pointer move, and pointer up
        gl.domElement.addEventListener('pointerdown', handlePointerDown)
        gl.domElement.addEventListener('pointermove', handlePointerMove)
        gl.domElement.addEventListener('pointerup', handlePointerUp)
        gl.domElement.addEventListener('touchstart', handlePointerDown)
        gl.domElement.addEventListener('touchmove', handlePointerMove)
        gl.domElement.addEventListener('touchend', handlePointerUp)
        // window.addEventListener("keydown", handleKeyDown)
        // window.addEventListener("keyup", handleKeyUp)


        actions["Action"].timeScale = 0.08
        actions["Action"].play()

        return () => {
            // Remove event listeners when the component is unmounted
            gl.domElement.removeEventListener('pointerdown', handlePointerDown)
            gl.domElement.removeEventListener('pointermove', handlePointerMove)
            gl.domElement.removeEventListener('pointerup', handlePointerUp)
            gl.domElement.removeEventListener('touchstart', handlePointerDown)
            gl.domElement.removeEventListener('touchmove', handlePointerMove)
            gl.domElement.removeEventListener('touchend', handlePointerUp)
            // window.addEventListener("keydown", handleKeyDown)
            // window.addEventListener("keyup", handleKeyUp)
        }


    }, [gl, handlePointerDown, handlePointerMove, handlePointerUp, actions])

    useFrame(() => {
        // If not rotating, apply damping to slow down the rotation (smoothly)
        if (!isRotating) {
            // Apply damping factor
            rotationSpeed.current *= dampingFactor * 0.01

            // Stop rotation when speed is very small
            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0
            }

            planetRef.current.rotation.y += rotationSpeed.current
        } else {
            // When rotating, determine the current stage based on island's orientation
            const rotation = planetRef.current.rotation.y

            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)
            // Set the current stage based on the island's orientation
            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                    setCurrentStage(4)
                    break
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(3)
                    break
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    setCurrentStage(2)
                    break
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(1)
                    break
                default:
                    setCurrentStage(null)
            }
        }
    })


    return (
        <a.group ref={planetRef}{...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Armature_10">
                                <group name="GLTF_created_0">
                                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials.EarthHologram}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_8"
                                        geometry={nodes.Object_8.geometry}
                                        material={materials.Clouds}
                                        skeleton={nodes.Object_8.skeleton}
                                    />
                                    <group name="Planet_9" />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>

        </a.group>
    )
}

export default Planet