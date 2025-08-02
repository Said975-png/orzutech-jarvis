'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString())
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="h-screen w-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Main Card */}
      <div className="relative w-full h-full">
        {/* Background Card */}
        <div className="bg-gray-900 h-full w-full p-8 relative overflow-hidden shadow-2xl">
          {/* Top Left Brand */}
          <div className="absolute top-8 left-8 text-gray-400 text-sm font-light tracking-widest">
            Электроника будущего
          </div>

          {/* Top Right Company */}
          <div className="absolute top-8 right-8 text-gray-400 text-sm font-light tracking-wider">
            ORZU INC.
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
            {/* Left Content */}
            <div className="space-y-8 z-10 relative">
              <h1 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 leading-tight">
                ORZUTECH
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Революционные технологии для нового поколения. 
                Откройте для себя будущее электроники уже сегодня.
              </p>

              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Каталог
                </button>
                <button className="border border-gray-500 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Подписаться
                </button>
              </div>


            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative">




              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>

              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500/20 rounded-full blur-xl animate-pulse animation-delay-500"></div>
            </div>
          </div>



          {/* Decorative Elements */}

          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-700"></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-1500"></div>
        </div>




        

      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>
    </main>
  )
}
