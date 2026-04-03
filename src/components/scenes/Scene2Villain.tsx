import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { XOctagon, AlertTriangle, TrendingDown } from 'lucide-react'

export function Scene2Villain() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const imgScale = useTransform(scrollYProgress, [0.1, 0.4], [0.85, 1])
  const imgRotateY = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [-8, 2, -3])
  const imgRotateX = useTransform(scrollYProgress, [0.1, 0.5], [8, 0])
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [60, 0])
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["10%", "60%"])

  return (
    <section ref={ref} className="relative bg-[#020202] overflow-hidden">
      <motion.div style={{ opacity }} className="min-h-screen py-20 md:py-32 relative">
        
        {/* Blood red ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vw] bg-red-900/15 rounded-full blur-[180px] pointer-events-none" />

        {/* Giant background text */}
        <motion.div 
          style={{ y: bgTextY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span className="text-[20vw] md:text-[18vw] font-black text-white/[0.02] uppercase tracking-tighter whitespace-nowrap">
            AMATEUR
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section label */}
          <motion.div style={{ y: textY }} className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 text-red-500 font-mono text-[11px] md:text-xs tracking-widest uppercase glass px-4 py-2 rounded-full">
              <AlertTriangle size={14} />
              <span>Ato I — O Vilão</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div style={{ y: textY }} className="mb-12 md:mb-16">
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black leading-[1] tracking-[-0.03em] text-white">
              A LP que a Agência<br />
              <span className="text-red-500">entregou.</span>
            </h2>
          </motion.div>

          {/* Image mockup with 3D rotation */}
          <div className="perspective-[2000px] mb-12 md:mb-16">
            <motion.div 
              style={{ scale: imgScale, rotateY: imgRotateY, rotateX: imgRotateX }}
              className="transform-gpu"
            >
              {/* Browser chrome */}
              <div className="rounded-xl md:rounded-2xl overflow-hidden glass glow-red">
                {/* Title bar */}
                <div className="h-8 md:h-10 bg-black/60 flex items-center px-4 gap-4 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-[10px] md:text-xs text-white/20 font-mono bg-white/5 px-6 py-1 rounded-md">
                      app.greatpages.com.br/preview/3550675
                    </span>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative">
                  <img 
                    src="/agency-hero.png" 
                    alt="Landing Page da Agência - Design Amador" 
                    className="w-full h-auto block grayscale-[30%] brightness-90 contrast-90"
                  />
                  {/* Red overlay tint */}
                  <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply pointer-events-none" />
                  
                  {/* Floating error callouts */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-[15%] right-[5%] glass px-3 py-2 rounded-lg border border-red-500/30 flex items-center gap-2 text-red-400 text-[10px] md:text-xs font-mono shadow-lg shadow-red-900/20"
                  >
                    <XOctagon size={14} />
                    <span>Cor roxa genérica</span>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute top-[45%] left-[3%] glass px-3 py-2 rounded-lg border border-red-500/30 flex items-center gap-2 text-red-400 text-[10px] md:text-xs font-mono shadow-lg shadow-red-900/20"
                  >
                    <TrendingDown size={14} />
                    <span>Bounce rate: 78%</span>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-[20%] right-[8%] glass px-3 py-2 rounded-lg border border-red-500/30 flex items-center gap-2 text-red-400 text-[10px] md:text-xs font-mono shadow-lg shadow-red-900/20"
                  >
                    <AlertTriangle size={14} />
                    <span>CTA invisível</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom description cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: XOctagon, title: "Ruído Visual Extremo", desc: "Dezenas de elementos competindo entre si. O usuário não sabe onde clicar." },
              { icon: TrendingDown, title: "Conversão Hemorrágica", desc: "Design genérico destrói confiança. Cada segundo perdido é dinheiro sangrando." },
              { icon: AlertTriangle, title: "Branding Hospitalar", desc: "Roxo genérico de template. Zero personalidade, zero autoridade." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-5 border-red-500/10 hover:border-red-500/30 transition-colors group"
              >
                <item.icon size={20} className="text-red-500 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-white/35 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
