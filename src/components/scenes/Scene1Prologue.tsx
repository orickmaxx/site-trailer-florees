import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Scene1Prologue() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={ref} className="relative min-h-screen bg-[#020202] overflow-hidden">
      <motion.div 
        style={{ opacity, scale }}
        className="min-h-screen flex items-center justify-center relative"
      >
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[200px] pointer-events-none" />

        <motion.div style={{ y: titleY }} className="text-center px-6 max-w-5xl mx-auto relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-white/30 text-xs sm:text-sm md:text-lg tracking-[0.3em] uppercase font-light mb-8"
          >
            Um Diagnóstico Cirúrgico
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-[clamp(2.5rem,7vw,7.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-white mb-8"
          >
            E se tudo o que você{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-400">
              investiu
            </span>{' '}
            até hoje...
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="text-white/20 text-base sm:text-xl md:text-2xl italic font-serif max-w-2xl mx-auto"
          >
            ...estiver vazando pelos ralos do{' '}
            <span className="text-red-500/60 not-italic font-sans font-bold">ruído visual</span>?
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"
          />
          <span className="text-[10px] tracking-[0.2em] text-white/20 uppercase">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
