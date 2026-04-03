import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import { Scene1Prologue } from './components/scenes/Scene1Prologue'
import { Scene2Villain } from './components/scenes/Scene2Villain'
import { Scene3Diagnosis } from './components/scenes/Scene3Diagnosis'
import { Scene4Hero } from './components/scenes/Scene4Hero'
import { Scene5Clash } from './components/scenes/Scene5Clash'
import { Scene6Epilogue } from './components/scenes/Scene6Epilogue'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <div ref={containerRef} className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 z-[9998] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden opacity-[0.015]">
        <div className="w-full h-[2px] bg-white" style={{ animation: 'scanline 8s linear infinite' }} />
      </div>

      <Scene1Prologue />
      <Scene2Villain />
      <Scene3Diagnosis />
      <Scene4Hero />
      <Scene5Clash />
      <Scene6Epilogue />
    </div>
  )
}

export default App
