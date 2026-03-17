"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function CollectionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      id="collection"
      className="relative min-h-screen py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          style={{ opacity }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.4em] mb-4"
          >
            THE COLLECTION
          </motion.p>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground"
          >
            Signature <span className="italic text-gold">Essences</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            style={{ y }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src="/images/perfume-bottle.jpg"
                alt="NOIR Signature Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-light text-foreground">
                A Symphony of <span className="italic text-gold">Rare Notes</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                Each fragrance in our collection is a masterpiece of olfactory art,
                composed from the most precious ingredients sourced from across the globe.
                From the smoky depths of aged oud to the ethereal sweetness of
                Bulgarian rose, every note is selected with uncompromising precision.
              </p>
            </div>

            <div className="space-y-4">
              {["Noir Absolu", "Velvet Oud", "Golden Amber"].map((fragrance, i) => (
                <motion.div
                  key={fragrance}
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="group flex items-center gap-4 py-4 border-b border-foreground/10 cursor-pointer hover:border-gold/50 transition-colors"
                >
                  <span className="text-gold/50 text-sm">0{i + 1}</span>
                  <span className="text-lg md:text-xl text-foreground group-hover:text-gold transition-colors">
                    {fragrance}
                  </span>
                  <span className="ml-auto text-foreground/30 group-hover:text-gold group-hover:translate-x-2 transition-all">
                    &rarr;
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-block mt-8 text-gold text-xs tracking-[0.2em] border-b border-gold pb-1 hover:text-foreground hover:border-foreground transition-colors"
            >
              REQUEST PRIVATE VIEWING
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
