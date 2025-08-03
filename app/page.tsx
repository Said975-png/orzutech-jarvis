'use client'

import { useEffect, useState } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any
    }
  }
}

export default function Home() {
  const [currentModel, setCurrentModel] = useState(0)

  const models = [
    {
      url: "https://cdn.builder.io/o/assets%2F08440fd5afb844b5b8c663feab34b3b0%2Fd9f2f51e747245009ee937c94e66654f?alt=media&token=dfd53474-2264-46a1-8202-69e75999c8a5&apiKey=08440fd5afb844b5b8c663feab34b3b0",
      name: "Модель 1"
    },
    {
      url: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      name: "Астронавт"
    },
    {
      url: "https://modelviewer.dev/shared-assets/models/ShopifyPickup.glb",
      name: "Машина"
    },
    {
      url: "https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf",
      name: "Сфера"
    }
  ]

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
      <div className="w-full bg-black">
        {/* Navigation */}
        <nav className="flex items-center justify-center px-8 lg:px-16 py-4">
          <div className="flex items-center space-x-12">
            <div className="flex items-center">
              <span className="text-yellow-400 font-bold text-2xl tracking-wide font-sans">ORZUTECH</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8 text-gray-300 font-medium font-sans">
              <a href="#" className="hover:text-white transition-colors text-base font-medium tracking-normal">Каталог</a>
              <button className="relative hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7H6L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-gray-300 hover:text-white transition-colors text-base font-medium font-sans">
                Вход
              </button>
              <button className="text-gray-300 hover:text-white transition-colors text-base font-semibold font-sans">
                Регистрация
              </button>

              {/* Search Bar */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="search"
                  placeholder="Поиск товаров..."
                  className="bg-gray-800 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors w-64 text-sm font-sans"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative grid lg:grid-cols-2 gap-16 p-8 lg:p-16 min-h-[70vh] overflow-hidden">
          {/* Light Effect from Left */}
          <div className="absolute -left-32 top-0 bottom-0 w-96 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-3xl opacity-60"></div>
          <div className="absolute -left-20 top-1/4 bottom-1/4 w-64 bg-gradient-to-r from-white/20 via-white/8 to-transparent blur-2xl opacity-40"></div>
          <div className="absolute -left-10 top-1/3 bottom-1/3 w-32 bg-gradient-to-r from-white/30 via-white/10 to-transparent blur-xl opacity-30"></div>



          {/* Left Content */}
          <div className="relative flex flex-col justify-center space-y-12 z-10">
            <div className="space-y-6">
              <div className="text-sm text-gray-400 font-medium uppercase tracking-[0.2em]">
                СОВРЕМЕННАЯ ЭЛЕКТРОНИКА
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-yellow-400 leading-[0.9] tracking-tight">
                ORZUTECH
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-300"></div>

              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-md font-light">
                Инновационные технологии для вашего дома и офиса.
                Надежность в каждом устройстве.
              </p>

              {/* Auto-scrolling slider */}
              <div className="relative overflow-hidden max-w-lg h-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="flex animate-scroll space-x-8 text-sm text-white font-medium">
                    <span className="whitespace-nowrap">Самая качественная техника в ��ухаре</span>
                    <span className="whitespace-nowrap">100% оригинальные устройства</span>
                    <span className="whitespace-nowrap">Быстрая доставка и установка</span>
                    <span className="whitespace-nowrap">Полная гарантия на все товары</span>
                    <span className="whitespace-nowrap">Премиум-сервис и поддержка</span>
                    <span className="whitespace-nowrap">Инновационные решения для дома</span>
                    <span className="whitespace-nowrap">Профессиональная установка</span>
                    <span className="whitespace-nowrap">Качественное обслуживание</span>
                  </div>
                </div>
              </div>
            </div>
            

          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <div className="relative w-[280px] lg:w-[360px] h-[280px] lg:h-[360px] overflow-hidden rounded-lg">
              <model-viewer
                src={models[currentModel].url}
                alt="3D Model"
                auto-rotate
                camera-controls
                autoplay
                animation-name=""
                field-of-view="30deg"
                camera-orbit="0deg 75deg 150%"
                style={{ width: '100%', height: '100%' }}
                loading="lazy"
                min-camera-orbit="auto auto 120%"
                max-camera-orbit="auto auto 200%"
              ></model-viewer>
            </div>

            {/* Custom Model Selector */}
            <div
              className="w-[280px] lg:w-[360px]"
              onWheel={(e) => {
                e.preventDefault()
                if (e.deltaY > 0) {
                  // Скролл вниз - следующая модель
                  setCurrentModel((prev) => (prev + 1) % models.length)
                } else {
                  // Скролл вверх - предыдущая модель
                  setCurrentModel((prev) => (prev - 1 + models.length) % models.length)
                }
              }}
            >

              <div className="text-center text-gray-400 text-xs mb-2">
                Прокрутите для смены модели
              </div>
              <div className="flex justify-center space-x-1">
                {models.map((_, index) => (
                  <div
                    key={index}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${currentModel === index
                        ? 'bg-white'
                        : 'bg-gray-600'
                      }
                    `}
                  />
                ))}
              </div>
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



        {/* Footer */}
        <div className="border-t border-gray-800 p-8 lg:p-16 text-center">
          <p className="text-gray-500 uppercase tracking-wide text-sm">
            © 2024 ORZUTECH. БУХАРА, УЗБЕКИСТАН. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
        </div>
      </div>
    </main>
  )
}
