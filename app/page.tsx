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
    <main className="h-screen w-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center overflow-hidden">
      {/* Main Card */}
      <div className="relative w-full">
        {/* Background Card */}
        <div className="bg-gray-900 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
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

              {/* Stats */}
              <div className="flex space-x-12 pt-8">
                <div>
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-sm text-gray-500">товаров</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24 часа</div>
                  <div className="text-sm text-gray-500">поддержка</div>
                </div>
              </div>
            </div>

            {/* Right Content - Product Showcase */}
            <div className="relative">
              {/* Large Number */}
              <div className="absolute -top-8 -right-8 text-8xl font-black text-gray-800 opacity-50 z-0">
                7+
              </div>

              {/* Products */}
              <div className="relative z-10 space-y-8">
                {/* Top Product - Smartphone */}
                <div className="transform rotate-12 hover:rotate-6 transition-all duration-500">
                  <div className="w-80 h-48 bg-gradient-to-br from-gray-800 to-black rounded-3xl flex items-center justify-center relative shadow-2xl border border-gray-700">
                    <div className="text-8xl opacity-80">📱</div>
                    <div className="absolute top-4 left-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-400 font-mono">iPhone 15 Pro</div>
                  </div>
                </div>

                {/* Middle Product - Laptop */}
                <div className="transform -rotate-6 hover:rotate-0 transition-all duration-500 -mt-4">
                  <div className="w-72 h-44 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl flex items-center justify-center relative shadow-2xl border border-gray-600">
                    <div className="text-7xl opacity-80">💻</div>
                    <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-400 font-mono">MacBook Pro</div>
                  </div>
                </div>

                {/* Bottom Product - Headphones */}
                <div className="transform rotate-3 hover:rotate-12 transition-all duration-500 ml-8">
                  <div className="w-64 h-40 bg-gradient-to-br from-gray-800 to-black rounded-3xl flex items-center justify-center relative shadow-2xl border border-gray-700">
                    <div className="text-6xl opacity-80">🎧</div>
                    <div className="absolute top-4 left-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-400 font-mono">AirPods Pro</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500/20 rounded-full blur-xl animate-pulse animation-delay-500"></div>
            </div>
          </div>

          {/* Bottom Right Stats Card */}
          <div className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-gray-700">
            <div className="text-center space-y-2">
              <div className="text-xs text-gray-400">В наличии</div>
              <div className="text-2xl font-bold text-white">15K+</div>
              <div className="text-xs text-gray-500">устройств</div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping animation-delay-700"></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-1500"></div>
        </div>

        {/* Floating Status Card */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
          🟢 СИСТЕМА АКТИВНА
        </div>

        {/* Side Elements */}
        <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-4 text-white">
          <div className="text-2xl">⚡</div>
        </div>
        
        <div className="absolute -right-8 top-1/3 bg-white/10 backdrop-blur-md rounded-full p-4 text-white">
          <div className="text-2xl">🚀</div>
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
