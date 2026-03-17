"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const ingredients = [
  {
    name: "Oud",
    origin: "Southeast Asia",
    description: "Precious liquid gold, aged for decades in ancient forests.",
  },
  {
    name: "Bulgarian Rose",
    origin: "Valley of Roses",
    description: "Hand-picked at dawn, capturing the essence of pure romance.",
  },
  {
    name: "Tahitian Vanilla",
    origin: "French Polynesia",
    description: "Sun-dried pods revealing layers of creamy warmth.",
  },
  {
    name: "Amber",
    origin: "Morocco",
    description: "Fossilized tree resin, millions of years in the making.",
  },
]

export function IngredientsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <section
      ref={containerRef}
      id="ingredients"
      className="relative min-h-screen py-32 overflow-hidden bg-card"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/ingredients.jpg"
          alt="Rare perfume ingredients"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-gold text-xs tracking-[0.4em]">THE INGREDIENTS</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Nature's Most <span className="italic text-gold">Precious</span> Gifts
            </h2>
            <p className="text-foreground/60 leading-relaxed max-w-lg">
              We travel to the ends of the earth to source the finest raw materials.
              Each ingredient is selected not just for its quality, but for its story—
              a narrative of terroir, tradition, and timeless beauty.
            </p>
          </motion.div>

          <div className="space-y-6">
            {ingredients.map((ingredient, i) => (
              <motion.div
                key={ingredient.name}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-6 bg-background/50 backdrop-blur-sm border border-foreground/5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors">
                      {ingredient.name}
                    </h3>
                    <p className="text-gold/60 text-xs tracking-[0.2em] mt-1">
                      {ingredient.origin}
                    </p>
                  </div>
                  <span className="text-foreground/20 text-4xl font-light">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-foreground/50 mt-4 text-sm leading-relaxed">
                  {ingredient.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
