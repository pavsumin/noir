"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 15])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--background)_70%)] z-10" />
      </motion.div>

      {/* Perfume Bottle with 3D-like rotation */}
      <motion.div
        style={{ y, rotateY, opacity }}
        className="absolute inset-0 flex items-center justify-center z-5"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[300px] h-[500px] md:w-[400px] md:h-[650px] lg:w-[500px] lg:h-[800px]"
          style={{ perspective: "1000px" }}
        >
          <Image
            src="/images/perfume-bottle.jpg"
            alt="NOIR Signature Fragrance"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
          {/* Golden glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent blur-3xl" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold text-xs md:text-sm tracking-[0.4em] mb-6"
        >
          MAISON DE PARFUM
        </motion.p>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-2"
        >
          <span className="block text-balance">The Art of</span>
          <span className="block italic text-gold mt-2">Seduction</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-foreground/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mt-8 leading-relaxed font-light"
        >
          Discover extraordinary fragrances crafted from the world's rarest ingredients.
          Each creation tells a story of passion and elegance.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href="#collection"
            className="bg-gold text-background px-8 py-4 text-xs tracking-[0.2em] hover:bg-gold-dark transition-all duration-300 min-w-[220px]"
          >
            EXPLORE COLLECTION
          </a>
          <a
            href="#story"
            className="border border-foreground/30 text-foreground px-8 py-4 text-xs tracking-[0.2em] hover:border-gold hover:text-gold transition-all duration-300 min-w-[220px]"
          >
            OUR STORY
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-foreground/40 text-xs tracking-[0.2em]">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
