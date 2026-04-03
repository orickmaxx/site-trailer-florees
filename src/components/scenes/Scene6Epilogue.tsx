import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export function Scene6Epilogue() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section ref={ref} className="relative bg-black overflow-hidden">
      <div className="min-h-screen flex items-center justify-center py-24 relative">
        
        {/* Ambient spheres */}
        <div className="absolute top-1/4 left-1/3 w-[40vw] h-[40vw] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[40vw] h-[40vw] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,5vw,5rem)] font-black leading-[1.1] tracking-[-0.03em] text-white mb-6 md:mb-8"
          >
            Nós construímos a{' '}
            <span className="text-emerald-400">Conversão.</span>
            <br />
            A Autoridade é consequência.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-white/35 font-light leading-relaxed mb-10 md:mb-16 max-w-2xl"
          >
            Sua Nova VSL está pronta para obliterar objeções e extrair o máximo LTV dos seus Leads.
          </motion.p>

          <motion.a 
            href="https://planoflorees-vsl.vercel.app/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg relative overflow-hidden"
          >
            <span className="relative z-10">Acessar a Nova VSL</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.a>

          {/* Footer */}
          <div className="mt-20 md:mt-32 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between w-full text-white/20 text-[10px] md:text-xs font-mono gap-3">
            <span>© 2026 @orickmax | IG</span>
            <span className="flex items-center gap-2">
              STATUS: <span className="text-emerald-500">ALTA CONVERSÃO</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
