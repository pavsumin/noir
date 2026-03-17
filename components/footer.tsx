"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-foreground/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-xl tracking-[0.3em] font-light">NOIR</p>
            <p className="text-foreground/40 text-xs tracking-[0.2em] mt-2">
              MAISON DE PARFUM
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-8"
          >
            {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-foreground/40 text-xs tracking-[0.15em] hover:text-gold transition-colors"
              >
                {social.toUpperCase()}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-foreground/30 text-xs tracking-[0.1em]">
              &copy; {new Date().getFullYear()} NOIR. All rights reserved.
            </p>
            <p className="text-foreground/20 text-xs mt-1">
              Crafted with passion in Grasse, France
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
