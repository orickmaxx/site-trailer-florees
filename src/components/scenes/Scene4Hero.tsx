import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Zap, CheckCircle2 } from 'lucide-react'

export function Scene4Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const imgScale = useTransform(scrollYProgress, [0.1, 0.4], [0.88, 1])
  const imgRotateY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [6, -2, 3])
  const imgRotateX = useTransform(scrollYProgress, [0.1, 0.4], [-6, 0])
  const textY = useTransform(scrollYProgress, [0.1, 0.35], [60, 0])
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["10%", "50%"])

  return (
    <section ref={ref} className="relative bg-[#020202] overflow-hidden">
      <motion.div style={{ opacity }} className="min-h-screen py-20 md:py-32 relative">
        
        {/* Emerald ambient */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vw] bg-emerald-900/20 rounded-full blur-[200px] pointer-events-none" />

        {/* Giant background text */}
        <motion.div 
          style={{ y: bgTextY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span className="text-[18vw] font-black text-white/[0.015] uppercase tracking-tighter whitespace-nowrap">
            MASTERY
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Label */}
          <motion.div style={{ y: textY }} className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-[11px] md:text-xs tracking-widest uppercase glass px-4 py-2 rounded-full border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <Zap size={14} />
              <span>Ato III — A Ascensão</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div style={{ y: textY }} className="mb-12 md:mb-16">
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black leading-[1] tracking-[-0.03em] text-white mb-6">
              A Nova VSL.
            </h2>
            <p className="text-base md:text-xl text-white/40 font-light leading-relaxed max-w-2xl">
              Copy destruidora de objeções. Design que respira conversão. Layout projetado não para ser bonito — mas para <span className="text-emerald-400 font-medium">garantir a ação</span>.
            </p>
          </motion.div>

          {/* Image mockup with 3D rotation */}
          <div className="perspective-[2000px] mb-12 md:mb-16">
            <motion.div 
              style={{ scale: imgScale, rotateY: imgRotateY, rotateX: imgRotateX }}
              className="transform-gpu"
            >
              <div className="rounded-xl md:rounded-2xl overflow-hidden glass glow-emerald">
                {/* Title bar */}
                <div className="h-8 md:h-10 bg-black/60 flex items-center px-4 gap-4 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-[10px] md:text-xs text-white/20 font-mono bg-white/5 px-6 py-1 rounded-md">
                      planoflorees-vsl.vercel.app
                    </span>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative">
                  <img 
                    src="/vsl-hero.png" 
                    alt="Nova VSL - Design de Alta Conversão" 
                    className="w-full h-auto block"
                  />
                  {/* Emerald shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent pointer-events-none" />

                  {/* Success callouts */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-[10%] right-[3%] glass px-3 py-2 rounded-lg border border-emerald-500/30 flex items-center gap-2 text-emerald-400 text-[10px] md:text-xs font-mono shadow-lg shadow-emerald-900/20"
                  >
                    <CheckCircle2 size={14} />
                    <span>Copy persuasiva</span>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.7 }}
                    className="absolute top-[40%] left-[2%] glass px-3 py-2 rounded-lg border border-emerald-500/30 flex items-center gap-2 text-emerald-400 text-[10px] md:text-xs font-mono shadow-lg shadow-emerald-900/20"
                  >
                    <Zap size={14} />
                    <span>CTA estratégico</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Tipografia de Alto Padrão",
              "Gatilho Urgência + Recompensa",
              "Foco: Proteger Quem Você Ama"
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl px-5 py-4 flex items-center gap-3 border-emerald-500/10 hover:border-emerald-500/25 transition-colors"
              >
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <span className="text-white/80 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  )
}
