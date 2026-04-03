import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Activity, Search, ShieldCheck, Zap } from 'lucide-react'

export function Scene3Diagnosis() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const textY = useTransform(scrollYProgress, [0.1, 0.35], [80, 0])
  const card1Y = useTransform(scrollYProgress, [0, 1], [30, -120])
  const card2Y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const card3Y = useTransform(scrollYProgress, [0, 1], [120, -40])

  return (
    <section ref={ref} className="relative bg-[#020202] overflow-hidden">
      <motion.div style={{ opacity }} className="min-h-screen py-20 md:py-32 relative">
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Label */}
          <motion.div style={{ y: textY }}>
            <div className="inline-flex items-center gap-2 text-white/40 font-mono text-[11px] md:text-xs tracking-widest uppercase glass px-4 py-2 rounded-full mb-8">
              <Search size={14} />
              <span>Ato II — O Diagnóstico</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Text */}
            <motion.div style={{ y: textY }} className="flex flex-col gap-6">
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1.05] tracking-[-0.03em] text-white">
                O Scan<br />
                <span className="text-outline">Implacável.</span>
              </h2>
              
              <p className="text-base md:text-xl text-white/40 font-light leading-relaxed max-w-lg">
                Uma auditoria profunda que desmontou cada falha. Não é opinião — são dados.
              </p>

              <div className="flex flex-col gap-4 mt-4">
                {[
                  { icon: Activity, title: "Fluxo de Leitura Otimizado", desc: "Z-Pattern científico. Reduziu carga cognitiva em 60%." },
                  { icon: ShieldCheck, title: "Gatilhos de Autoridade", desc: "Prova social e segurança na dobra acima. Mata objeções frias." },
                  { icon: Zap, title: "Performance Brutal", desc: "14.2 MB de código morto eliminado. Carregamento 3x mais rápido." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="bg-white/5 p-2.5 rounded-lg group-hover:bg-white/10 transition-colors shrink-0 mt-0.5">
                      <item.icon size={18} className="text-white/70" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm md:text-base">{item.title}</h4>
                      <p className="text-white/30 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Floating data cards */}
            <div className="relative min-h-[400px] md:min-h-[550px]">
              {/* Card 1 - Bounce Rate */}
              <motion.div 
                style={{ y: card1Y }}
                className="glass rounded-xl p-5 md:p-6 border-white/5 absolute top-0 right-0 w-[75%] md:w-[80%]"
              >
                <div className="text-white/30 text-[10px] md:text-xs font-mono mb-2 tracking-wider">BOUNCE RATE</div>
                <div className="flex items-end gap-3">
                  <span className="text-4xl md:text-6xl font-black text-white tracking-tight">-42%</span>
                  <span className="text-emerald-500 font-bold text-xs md:text-sm pb-1 md:pb-2">MELHORIA</span>
                </div>
                <div className="mt-4 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Card 2 - Heatmap */}
              <motion.div 
                style={{ y: card2Y }}
                className="glass rounded-xl p-5 md:p-6 border-white/5 absolute top-[35%] left-0 w-[70%] md:w-[65%] z-10"
              >
                <div className="text-white/30 text-[10px] md:text-xs font-mono mb-3 tracking-wider">CONFIANÇA (HEATMAP)</div>
                <div className="flex items-end gap-1.5">
                  {[
                    { h: 'h-6 md:h-10', color: 'bg-red-500/30' },
                    { h: 'h-10 md:h-14', color: 'bg-yellow-500/40' },
                    { h: 'h-14 md:h-18', color: 'bg-emerald-500/50' },
                    { h: 'h-18 md:h-22', color: 'bg-emerald-500/80' },
                    { h: 'h-22 md:h-28', color: 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.4)]' },
                  ].map((bar, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`w-4 md:w-5 ${bar.h} ${bar.color} rounded-sm origin-bottom`}
                    />
                  ))}
                </div>
                <div className="text-white font-bold text-sm md:text-base mt-3">Tempo na Página ↑</div>
              </motion.div>

              {/* Card 3 - Dead Code */}
              <motion.div 
                style={{ y: card3Y }}
                className="glass rounded-xl p-4 md:p-5 border-white/5 absolute bottom-0 right-[5%] w-[55%] md:w-[50%]"
              >
                <div className="text-white/30 text-[10px] md:text-xs font-mono mb-2 tracking-wider">CÓDIGO MORTO</div>
                <div className="text-2xl md:text-3xl font-black text-red-400 font-mono tracking-tighter">14.2 MB</div>
                <div className="text-white/20 text-[10px] md:text-xs mt-1">Scripts GreatPages eliminados</div>
              </motion.div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}
