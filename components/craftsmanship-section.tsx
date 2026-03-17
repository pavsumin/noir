"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function CraftsmanshipSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ opacity: imageOpacity }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src="/images/craftsmanship.jpg"
                alt="Master perfumer at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>

            {/* Floating stat */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 md:bottom-8 md:right-8 bg-background border border-gold/20 p-6 md:p-8"
            >
              <p className="text-4xl md:text-5xl text-gold font-light">47</p>
              <p className="text-foreground/60 text-xs tracking-[0.2em] mt-2">YEARS OF<br />EXPERTISE</p>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: textY }}
            className="space-y-8 order-1 lg:order-2"
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold text-xs tracking-[0.4em]"
            >
              THE CRAFTSMANSHIP
            </motion.p>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground"
            >
              Where Art Meets <span className="italic text-gold">Alchemy</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-foreground/60 leading-relaxed"
            >
              Our master perfumers carry decades of knowledge passed down through
              generations. Each creation undergoes hundreds of iterations, years of
              maturation, and endless refinement before it earns the NOIR seal.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl text-foreground font-light">200+</p>
                <p className="text-foreground/40 text-xs tracking-[0.15em]">RARE INGREDIENTS</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl text-foreground font-light">3-5</p>
                <p className="text-foreground/40 text-xs tracking-[0.15em]">YEARS TO CREATE</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl text-foreground font-light">12</p>
                <p className="text-foreground/40 text-xs tracking-[0.15em]">MASTER PERFUMERS</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl text-foreground font-light">1</p>
                <p className="text-foreground/40 text-xs tracking-[0.15em]">SINGULAR VISION</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
