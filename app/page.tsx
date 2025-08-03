'use client'

import { useEffect } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any
    }
  }
}

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black">
      {/* Main Container */}
      <div className="w-full bg-gray-900">
        {/* Navigation */}
        <nav className="flex items-center justify-center px-8 lg:px-16 py-4 border-b border-gray-800">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <span className="text-black font-black text-lg">OT</span>
              </div>
              <span className="text-white font-black text-2xl tracking-tight">ORZUTECH</span>
            </div>

            <div className="hidden lg:flex items-center space-x-12 text-gray-300 font-medium">
              <a href="#" className="hover:text-white transition-colors uppercase tracking-wide">Главная</a>
              <a href="#" className="hover:text-white transition-colors uppercase tracking-wide">О нас</a>
              <a href="#" className="hover:text-white transition-colors uppercase tracking-wide">Каталог</a>
              <a href="#" className="hover:text-white transition-colors uppercase tracking-wide">Гарантия</a>
              <a href="#" className="hover:text-white transition-colors uppercase tracking-wide">Блог</a>
            </div>

            <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors">
              Контакты
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative grid lg:grid-cols-2 gap-16 p-8 lg:p-16 min-h-[70vh] overflow-hidden">
          {/* Light Effect from Left */}
          <div className="absolute -left-32 top-0 bottom-0 w-96 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-3xl opacity-60"></div>
          <div className="absolute -left-20 top-1/4 bottom-1/4 w-64 bg-gradient-to-r from-white/20 via-white/8 to-transparent blur-2xl opacity-40"></div>
          <div className="absolute -left-10 top-1/3 bottom-1/3 w-32 bg-gradient-to-r from-white/30 via-white/10 to-transparent blur-xl opacity-30"></div>

          {/* Animated Neon Arc */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="animate-neon-arc">
              <svg width="400" height="300" viewBox="0 0 400 300" className="opacity-70">
                <defs>
                  <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#00f5ff', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#00f5ff', stopOpacity: 0.8}} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 50 250 Q 200 50 350 250"
                  stroke="url(#neonGradient)"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#glow)"
                  className="drop-shadow-[0_0_20px_rgba(0,245,255,0.6)]"
                />
              </svg>
            </div>
          </div>

          {/* Left Content */}
          <div className="relative flex flex-col justify-center space-y-12 z-10">
            <div className="space-y-6">
              <div className="text-sm text-gray-500 font-bold uppercase tracking-[0.2em]">
                МАГАЗИН ТЕХНИКИ В БУХАРЕ
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight">
                ORZUTECH
              </h1>
              
              <div className="w-24 h-1 bg-white"></div>
              
              <p className="text-gray-300 text-xl lg:text-2xl leading-relaxed max-w-lg font-light">
                Профессиональные решения в сфере электроники.
                Качество, надежн��сть, инновации.
              </p>
            </div>
            

          </div>

          {/* Right Content */}
          <div className="flex justify-center items-center">
            <div className="relative w-[280px] lg:w-[360px] h-[280px] lg:h-[360px]">
              <model-viewer
                src="https://cdn.builder.io/o/assets%2F08440fd5afb844b5b8c663feab34b3b0%2Fd9f2f51e747245009ee937c94e66654f?alt=media&token=dfd53474-2264-46a1-8202-69e75999c8a5&apiKey=08440fd5afb844b5b8c663feab34b3b0"
                alt="3D Model"
                auto-rotate
                camera-controls
                autoplay
                animation-name=""
                style={{ width: '100%', height: '100%' }}
                loading="lazy"
              ></model-viewer>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 p-8 lg:p-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-white mb-2">500+</div>
              <div className="text-gray-500 uppercase tracking-wide text-sm font-medium">Товаров</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">150+</div>
              <div className="text-gray-500 uppercase tracking-wide text-sm font-medium">Клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">24/7</div>
              <div className="text-gray-500 uppercase tracking-wide text-sm font-medium">Поддержка</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">99%</div>
              <div className="text-gray-500 uppercase tracking-wide text-sm font-medium">Качество</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="border-t border-gray-800 grid md:grid-cols-3">
          <div className="p-8 lg:p-12 border-r border-gray-800 hover:bg-gray-800 transition-colors">
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-white font-black text-xl mb-4 uppercase tracking-wide">ОБМЕН УСТРОЙСТВ</h3>
            <p className="text-gray-400 leading-relaxed">
              Выгодный обмен старых устройств на новые модели с доплатой.
            </p>
          </div>

          <div className="p-8 lg:p-12 border-r border-gray-800 hover:bg-gray-800 transition-colors">
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-black text-xl mb-4 uppercase tracking-wide">ГАРА��ТИЯ КАЧЕСТВА</h3>
            <p className="text-gray-400 leading-relaxed">
              Полная гарантия на все товары. Сертифицированные устройства.
            </p>
          </div>

          <div className="p-8 lg:p-12 hover:bg-gray-800 transition-colors">
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-black text-xl mb-4 uppercase tracking-wide">БЫСТРАЯ ДОСТАВКА</h3>
            <p className="text-gray-400 leading-relaxed">
              Оперативная доставка по Бухаре. Профессиональное обслуживание.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 p-8 lg:p-16 text-center">
          <p className="text-gray-500 uppercase tracking-wide text-sm">
            © 2024 ORZUTECH. БУХАРА, УЗБЕКИСТАН. ВСЕ ПРАВА З��ЩИЩЕНЫ.
          </p>
        </div>
      </div>
    </main>
  )
}
