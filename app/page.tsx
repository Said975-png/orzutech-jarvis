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
                    <span className="whitespace-nowrap">Самая качественная техника в Бухаре</span>
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



        {/* Products Section */}
        <div className="bg-gray-50 p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="text-sm text-gray-500 font-medium uppercase tracking-[0.2em] mb-4">
                ПОПУЛЯРНЫЕ ТОВАРЫ
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-800 mb-6">
                КАТАЛОГ <span className="text-blue-600">ПРОДУКТОВ</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>

            {/* Products Grid */}
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Featured Product - Large Card */}
              <div className="lg:col-span-2 lg:row-span-2 group relative bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-3xl overflow-hidden p-8 text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="text-sm opacity-80 mb-2">PORSCHE DESIGN</div>
                    <div className="text-4xl lg:text-5xl font-black mb-4">$84</div>
                    <h3 className="text-xl font-bold mb-2">Porsche Design</h3>
                    <p className="text-sm opacity-90 mb-6">Life racer dip - on design</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">5</div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">7</div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">8</div>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">9</div>
                    </div>
                    <button className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20">
                  <div className="w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="w-24 h-24 bg-white/10 rounded-full absolute top-8 left-8"></div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group relative bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl p-6 text-white hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Porsche sports lite</h3>
                    <div className="text-2xl font-black mb-4">$84</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="text-sm underline opacity-80 hover:opacity-100">View details</button>
                    <button className="w-10 h-10 bg-white text-pink-600 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-20">
                  <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-6 text-white hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Carrera sports foot</h3>
                    <div className="text-2xl font-black mb-4">$67</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="text-sm underline opacity-80 hover:opacity-100">View details</button>
                    <button className="w-10 h-10 bg-white text-orange-600 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-20">
                  <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="group relative bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-6 text-white hover:shadow-xl hover:shadow-red-500/25 transition-all duration-500 hover:scale-105">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Porsche sports line</h3>
                    <div className="text-2xl font-black mb-4">$59</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="text-sm underline opacity-80 hover:opacity-100">View details</button>
                    <button className="w-10 h-10 bg-white text-red-600 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-20">
                  <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="group relative bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-6 text-white hover:shadow-xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Smart Headphones</h3>
                    <div className="text-2xl font-black mb-4">$199</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="text-sm underline opacity-80 hover:opacity-100">View details</button>
                    <button className="w-10 h-10 bg-white text-green-600 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-20">
                  <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Product 6 */}
              <div className="group relative bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl p-6 text-white hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Gaming Laptop Pro</h3>
                    <div className="text-2xl font-black mb-4">$1299</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="text-sm underline opacity-80 hover:opacity-100">View details</button>
                    <button className="w-10 h-10 bg-white text-indigo-600 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-20">
                  <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center mt-12 space-x-8">
              <button className="text-gray-400 hover:text-gray-600 transition-colors text-sm">New arrivals</button>
              <button className="text-gray-400 hover:text-gray-600 transition-colors text-sm">Popular</button>
              <button className="text-gray-400 hover:text-gray-600 transition-colors text-sm">Recommend</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Next</button>
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
