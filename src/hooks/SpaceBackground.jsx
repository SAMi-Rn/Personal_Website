import React, { useEffect, useRef } from 'react'
import './SpaceBackground.css' // Ensure your styles are correctly applied

const SpaceBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let stars = [] // Array to hold stars

        const setupCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        const addStar = () => {
            let starRadius = 3 * Math.random()
            let star = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: starRadius,
                opacity: 1
            }
            stars.push(star)
        }

        const updateStars = () => {
            // Clear the canvas
            ctx.fillStyle = 'black'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw each star with updated properties
            stars.forEach(star => {
                star.opacity -= 0.003 // Adjust fade speed
                if (star.opacity < 0) star.opacity = 0
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false)
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
                ctx.shadowColor = `rgba(255, 255, 255, ${star.opacity * 0.5})`
                ctx.shadowBlur = 5
                ctx.fill()
            })

            // Remove fully faded stars
            stars = stars.filter(star => star.opacity > 0)
        }

        window.addEventListener('resize', setupCanvas)
        setupCanvas()

        // Add new stars periodically
        let addStarInterval = setInterval(addStar, 100)

        // Update stars every animation frame
        let updateInterval = setInterval(updateStars, 40)

        // Cleanup on unmount
        return () => {
            clearInterval(addStarInterval)
            clearInterval(updateInterval)
            window.removeEventListener('resize', setupCanvas)
        }
    }, [])

    return <canvas ref={canvasRef} id="space" />
}

export default SpaceBackground
