import React from 'react'

interface BrowserMockupProps {
  url: string
  children: React.ReactNode
  className?: string
}

export function BrowserMockup({ url, children, className = '' }: BrowserMockupProps) {
  return (
    <div className={`rounded-xl overflow-hidden glass-panel flex flex-col shadow-2xl ${className}`}>
      {/* Browser Header */}
      <div className="h-8 md:h-10 bg-black/40 backdrop-blur-md flex items-center px-4 border-b border-white/5 relative shrink-0">
        <div className="flex gap-1.5 md:gap-2 absolute left-4">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto bg-black/50 text-white/30 text-[10px] md:text-xs font-medium px-4 py-1 rounded-md flex px-24 font-mono truncate">
          {url}
        </div>
      </div>
      
      {/* Browser Body */}
      <div className="flex-1 w-full bg-white relative overflow-hidden">
        {children}
      </div>
    </div>
  )
}
