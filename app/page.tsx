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
            Магазин техники в Бухаре
          </div>

          {/* Top Right Company */}
          <div className="absolute top-8 right-8 text-gray-400 text-sm font-light tracking-wider">
            Узбекистан
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between h-full px-4 lg:px-0 gap-8 lg:gap-16">
            {/* Left Content - Epic Typography */}
            <div className="flex-1 flex flex-col justify-center space-y-6 lg:space-y-8 z-20 relative max-w-2xl">
              {/* Main Title with Epic Effects */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 leading-none tracking-tight animate-pulse">
                  ORZU
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent animate-pulse animation-delay-300">
                    TECH
                  </span>
                </h1>

                {/* Glow Effect */}
                <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-blue-400/20 blur-2xl leading-none tracking-tight animate-pulse -z-10">
                  ORZU
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                    TECH
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl font-light opacity-90">
                Революционные технологии для нового поколения.
                Откройте для себя будущее электроники уже сегодня.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  Каталог
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 hover:text-white hover:bg-cyan-400/10 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Подписаться
                </button>
              </div>
            </div>

            {/* Right Content - Product Image */}
            <div className="flex-1 flex justify-center items-center h-full lg:h-auto relative">
              {/* Image with Effects */}
              <div className="relative group">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F02f225558365433abb0d2ad515b82942%2F52db23e5e3e24501b060c9ae46a778e6?format=webp&width=800"
                  alt="Apple Products"
                  className="max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] xl:max-w-[500px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                />

                {/* Rotating Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20 rounded-full blur-3xl animate-spin opacity-50"></div>

                {/* Floating Particles */}
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
                <div className="absolute top-3/4 -right-4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-500 opacity-60"></div>
                <div className="absolute top-1/2 -left-8 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
              </div>
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
