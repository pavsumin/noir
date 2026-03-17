"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section
      ref={containerRef}
      id="story"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Full-width background image */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/brand-story.jpg"
          alt="NOIR Atelier"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 lg:px-12 py-32 min-h-screen flex items-center"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.4em] mb-6"
          >
            OUR STORY
          </motion.p>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8"
          >
            Born from <span className="italic text-gold">Passion</span>,<br />
            Perfected by <span className="italic text-gold">Time</span>
          </motion.h2>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-foreground/60 leading-relaxed"
          >
            <p>
              In 1978, in a small atelier hidden in the heart of Grasse, our founder
              began a journey that would redefine the art of perfumery. With nothing
              but a dream and an extraordinary nose, he set out to create fragrances
              that would transcend time.
            </p>
            <p>
              Today, NOIR stands as a testament to that vision—a house where tradition
              meets innovation, where every bottle contains not just a fragrance, but
              a piece of history. Our creations are not merely worn; they are experienced,
              remembered, and passed down through generations.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center justify-center gap-8"
          >
            <div className="text-center">
              <p className="text-4xl md:text-5xl text-gold font-light">1978</p>
              <p className="text-foreground/40 text-xs tracking-[0.2em] mt-2">FOUNDED</p>
            </div>
            <div className="w-px h-16 bg-foreground/20" />
            <div className="text-center">
              <p className="text-4xl md:text-5xl text-gold font-light">GRASSE</p>
              <p className="text-foreground/40 text-xs tracking-[0.2em] mt-2">FRANCE</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
