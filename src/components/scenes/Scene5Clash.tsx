import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Scene5Clash() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const leftX = useTransform(scrollYProgress, [0.1, 0.4], ["-100%", "0%"])
  const rightX = useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"])
  const titleScale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1])

  return (
    <section ref={ref} className="relative bg-[#020202] overflow-hidden">
      <motion.div style={{ opacity }} className="min-h-screen py-20 md:py-32 relative flex flex-col items-center justify-center">

        {/* Title */}
        <motion.div style={{ scale: titleScale }} className="text-center mb-12 md:mb-20 px-4 relative z-10">
          <h2 className="text-[clamp(2.5rem,7vw,7rem)] font-black leading-[1] tracking-[-0.04em] text-white uppercase">
            O Confronto.
          </h2>
          <p className="text-white/25 text-sm md:text-lg mt-4 font-light">Mesma empresa. Duas realidades.</p>
        </motion.div>

        {/* Split comparison */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* LEFT — Agency (Villain) */}
            <motion.div style={{ x: leftX }} className="relative group">
              <div className="rounded-xl md:rounded-2xl overflow-hidden glass glow-red">
                <div className="h-8 md:h-10 bg-black/60 flex items-center px-4 border-b border-red-500/10">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="ml-auto text-[9px] md:text-[10px] text-red-400/60 font-mono">greatpages.com.br</span>
                </div>
                <div className="relative">
                  <img 
                    src="/agency-hero.png" 
                    alt="LP Agência" 
                    className="w-full h-auto grayscale-[40%] brightness-75 contrast-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 via-transparent to-transparent" />
                </div>
              </div>
              {/* Label */}
              <div className="text-center mt-4 md:mt-6">
                <span className="text-red-500 font-black text-lg md:text-2xl uppercase tracking-widest">Amador</span>
                <p className="text-white/20 text-xs mt-1">Template genérico da agência</p>
              </div>
            </motion.div>

            {/* RIGHT — New VSL (Hero) */}
            <motion.div style={{ x: rightX }} className="relative group">
              <div className="rounded-xl md:rounded-2xl overflow-hidden glass glow-emerald">
                <div className="h-8 md:h-10 bg-black/60 flex items-center px-4 border-b border-emerald-500/10">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-auto text-[9px] md:text-[10px] text-emerald-400/60 font-mono">planoflorees-vsl.vercel.app</span>
                </div>
                <div className="relative">
                  <img 
                    src="/vsl-hero.png" 
                    alt="Nova VSL" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 via-transparent to-transparent" />
                </div>
              </div>
              {/* Label */}
              <div className="text-center mt-4 md:mt-6">
                <span className="text-emerald-400 font-black text-lg md:text-2xl uppercase tracking-widest">Masterpiece</span>
                <p className="text-white/20 text-xs mt-1">Design de alta conversão</p>
              </div>
            </motion.div>
          </div>

          {/* VS badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex">
            <div className="bg-black border-2 border-white/10 text-white font-black italic text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              VS
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}
