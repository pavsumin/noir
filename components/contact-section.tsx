"use client"

import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-gold/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.4em] mb-6"
          >
            PRIVATE ACCESS
          </motion.p>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-light text-foreground mb-8"
          >
            Begin Your <span className="italic text-gold">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-foreground/60 leading-relaxed max-w-xl mx-auto mb-12"
          >
            Experience NOIR in its most intimate setting. Request a private consultation
            at our Paris atelier, or inquire about our exclusive collection.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:inquire@noir-parfum.com"
              className="bg-gold text-background px-10 py-5 text-xs tracking-[0.2em] hover:bg-gold-dark transition-all duration-300 min-w-[260px]"
            >
              INQUIRE COLLECTION
            </a>
            <a
              href="mailto:private@noir-parfum.com"
              className="border border-gold text-gold px-10 py-5 text-xs tracking-[0.2em] hover:bg-gold hover:text-background transition-all duration-300 min-w-[260px]"
            >
              REQUEST PRIVATE ACCESS
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 pt-12 border-t border-foreground/10"
          >
            <p className="text-foreground/40 text-xs tracking-[0.3em] mb-4">VISIT OUR ATELIER</p>
            <p className="text-foreground/60 text-lg">
              12 Rue de la Paix, 75002 Paris, France
            </p>
            <p className="text-foreground/40 text-sm mt-2">
              By appointment only
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
