"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ContactHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const calculateTranslate = (axis: "x" | "y", factor: number) => {
    const value =
      axis === "x"
        ? (mousePosition.x / window.innerWidth - 0.5) * factor
        : (mousePosition.y / window.innerHeight - 0.5) * factor

    return value
  }

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-[#D64B65] via-[#e06377] to-[#f8a5b1]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-white/10 blur-3xl"
          animate={{
            x: calculateTranslate("x", 20),
            y: calculateTranslate("y", 20),
          }}
          transition={{ type: "spring", damping: 15 }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-white/10 blur-3xl"
          animate={{
            x: calculateTranslate("x", -30),
            y: calculateTranslate("y", -30),
          }}
          transition={{ type: "spring", damping: 15 }}
        />
        <motion.div
          className="absolute top-[40%] right-[30%] w-40 h-40 rounded-full bg-white/10 blur-3xl"
          animate={{
            x: calculateTranslate("x", 40),
            y: calculateTranslate("y", 40),
          }}
          transition={{ type: "spring", damping: 15 }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4 text-white">
            <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
            Get In Touch
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let's Start a{" "}
            <span className="relative">
              Conversation
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 358 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9C118.957 4.47226 236.856 3.86549 355 9"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            We're excited to hear from you and discuss how we can transform your healthcare organization's digital
            presence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center px-6 py-3 bg-white text-[#D64B65] rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Send us a message
            </a>
            <a
              href="#offices"
              className="inline-flex items-center px-6 py-3 bg-transparent border border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Visit our offices
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

