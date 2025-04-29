"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import Image from "next/image"

export default function AnimatedProfile() {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse parallax effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  // Handle mouse move for parallax effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  useEffect(() => {
    setIsLoaded(true)

    // Animation sequence
    const sequence = async () => {
      await controls.start({
        scale: 1.05,
        transition: { duration: 1.5, ease: "easeInOut" },
      })
      await controls.start({
        scale: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
      })
    }

    // Start animation sequence and repeat
    const interval = setInterval(() => {
      sequence()
    }, 5000)

    return () => clearInterval(interval)
  }, [controls])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7 }}
      className="relative w-64 h-64 md:w-80 md:h-80"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
      }}
      style={{
        perspective: 1000,
      }}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-xl"
        animate={controls}
      />

      {/* Profile image with 3D effect */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl"
        style={{
          rotateX,
          rotateY,
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 z-10 mix-blend-overlay" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bagus%20Ardianto%202.jpg-uxH2QVLqPALpHIblfLo3o8BlATCtAG.jpeg"
          alt="Profile Photo"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-purple-500 dark:bg-purple-600"
        animate={{
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-pink-500 dark:bg-pink-600"
        animate={{
          y: [0, 10, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  )
}
