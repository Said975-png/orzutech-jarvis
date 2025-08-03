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
  const [selectedColor, setSelectedColor] = useState(0)

  const models = [
    {
      url: "https://cdn.builder.io/o/assets%2F08440fd5afb844b5b8c663feab34b3b0%2Fd9f2f51e747245009ee937c94e66654f?alt=media&token=dfd53474-2264-46a1-8202-69e75999c8a5&apiKey=08440fd5afb844b5b8c663feab34b3b0",
      name: "Модель 1"
    },
    {
      url: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      name: "Астро��авт"
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

  const colors = [
    { name: "Белый", color: "bg-white", border: "border-gray-300" },
    { name: "Черный", color: "bg-black", border: "border-gray-700" },
    { name: "Серый", color: "bg-gray-400", border: "border-gray-500" }
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
    <main className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="w-full bg-white">
        {/* Navigation */}
        <nav className="flex items-center justify-center px-8 lg:px-16 py-4">
          <div className="flex items-center space-x-12">
            <div className="flex items-center">
              <span className="text-yellow-400 font-bold text-2xl tracking-wide font-sans">ORZUTECH</span>
            </div>

            <div className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium font-sans">
              <a href="#" className="hover:text-black transition-colors text-base font-medium tracking-normal">Каталог</a>
              <button className="relative hover:text-black transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7H6L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-gray-700 hover:text-black transition-colors text-base font-medium font-sans">
                Вход
              </button>
              <button className="text-gray-700 hover:text-black transition-colors text-base font-semibold font-sans">
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
                  className="bg-gray-100 text-black placeholder-gray-500 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors w-64 text-sm font-sans"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative grid lg:grid-cols-2 gap-16 p-8 lg:p-16 min-h-[70vh] overflow-hidden">
          {/* Light Effect from Left */}
          <div className="absolute -left-32 top-0 bottom-0 w-96 bg-gradient-to-r from-gray-200/10 via-gray-200/5 to-transparent blur-3xl opacity-60"></div>
          <div className="absolute -left-20 top-1/4 bottom-1/4 w-64 bg-gradient-to-r from-gray-200/20 via-gray-200/8 to-transparent blur-2xl opacity-40"></div>
          <div className="absolute -left-10 top-1/3 bottom-1/3 w-32 bg-gradient-to-r from-gray-200/30 via-gray-200/10 to-transparent blur-xl opacity-30"></div>



          {/* Left Content */}
          <div className="relative flex flex-col justify-center space-y-12 z-10">
            <div className="space-y-6">
              <div className="text-sm text-gray-600 font-medium uppercase tracking-[0.2em]">
                СОВРЕМЕННАЯ ЭЛЕКТРОНИКА
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-yellow-400 leading-[0.9] tracking-tight">
                ORZUTECH
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-black to-gray-600"></div>

              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-md font-light">
                Наша деятельность: Продажа Телефонов и аксессуаров, Планшетов, разных Гаджетов и много много интересного.
              </p>

              {/* Auto-scrolling slider */}
              <div className="relative overflow-hidden max-w-lg h-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="flex animate-scroll space-x-8 text-sm text-black font-medium">
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

            {/* Color Selection */}
            <div className="flex items-center space-x-4 mt-8">
              <div className="text-gray-400 text-xs uppercase tracking-wide">
                Выбо�� цвета
              </div>
              <div className="flex space-x-3">
                {colors.map((colorOption, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`
                      w-5 h-5 rounded-full transition-all duration-300 border-2 cursor-pointer
                      ${colorOption.color} ${colorOption.border}
                      ${selectedColor === index
                        ? 'ring-2 ring-yellow-400 ring-offset-1'
                        : 'hover:ring-1 hover:ring-gray-300 hover:ring-offset-1'
                      }
                    `}
                    title={colorOption.name}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center items-center space-y-6">
            {/* Model viewer container with enhanced depth */}
            <div className="relative w-[280px] lg:w-[360px] h-[280px] lg:h-[360px] overflow-hidden rounded-lg">
              {/* Glow effect behind model */}
              <div className="absolute -inset-4 bg-gradient-to-b from-yellow-400/10 via-gray-200/10 to-gray-400/10 rounded-2xl blur-2xl opacity-50"></div>
              <div className="absolute -inset-2 bg-gradient-to-tr from-white/30 via-transparent to-gray-300/20 rounded-xl opacity-60"></div>
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
        <div className="border-t border-gray-200 p-8 lg:p-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-black mb-2">500+</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">Товаров</div>
            </div>
            <div>
              <div className="text-4xl font-black text-black mb-2">150+</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">Клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-black text-black mb-2">24/7</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">Поддержка</div>
            </div>
            <div>
              <div className="text-4xl font-black text-black mb-2">99%</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">Качество</div>
            </div>
          </div>
        </div>



        {/* Products Section */}
        <div className="bg-white p-8 lg:p-16 relative overflow-hidden">
          {/* Enhanced background depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50/40 via-transparent to-gray-50/20 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/3 via-transparent to-transparent pointer-events-none"></div>

          {/* Light Effects like in first section */}
          <div className="absolute -right-32 top-0 bottom-0 w-96 bg-gradient-to-l from-gray-200/10 via-gray-200/5 to-transparent blur-3xl opacity-60"></div>
          <div className="absolute -right-20 top-1/4 bottom-1/4 w-64 bg-gradient-to-l from-gray-200/20 via-gray-200/8 to-transparent blur-2xl opacity-40"></div>
          <div className="absolute -right-10 top-1/3 bottom-1/3 w-32 bg-gradient-to-l from-gray-200/30 via-gray-200/10 to-transparent blur-xl opacity-30"></div>

          {/* Subtle section highlighting */}
          <div className="absolute top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-white/30 via-transparent to-gray-100/20 rounded-3xl blur-xl opacity-40 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="text-sm text-gray-600 font-medium uppercase tracking-[0.2em] mb-4">
                КАТАЛОГ ТОВАРОВ
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-black mb-6">
                НАШИ <span className="text-yellow-400">ПРОДУКТЫ</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-black mx-auto"></div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">

              {/* Product 1 */}
              <div className="group relative rounded-xl transition-all duration-500 hover:transform hover:scale-105">
                {/* Soft card shadow */}
                <div className="absolute -inset-2 bg-gradient-to-b from-gray-200/20 via-gray-100/10 to-gray-300/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="aspect-square flex items-center justify-center p-8 relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <div className="w-40 h-40 bg-gray-100/80 rounded-lg flex items-center justify-center relative z-10 group-hover:bg-yellow-400/20 transition-colors duration-300 border border-gray-300/50 group-hover:border-yellow-400/50">
                    <svg className="w-20 h-20 text-gray-600 group-hover:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div className="text-center px-4">
                  <h3 className="text-black font-bold text-xl mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    Смарт Телевизор 55"
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    4K Ultra HD разрешение с поддержкой HDR и Smart TV функциями
                  </p>
                  <div className="text-yellow-400 font-black text-2xl mb-6">
                    ₽ 89,900
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 justify-center">
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-300 text-sm">
                      Заказать
                    </button>
                    <button className="w-12 h-12 bg-transparent text-gray-600 rounded-lg flex items-center justify-center hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors duration-300 border border-gray-300 hover:border-yellow-400/50">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L12 21l7.5-3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group relative rounded-xl transition-all duration-500 hover:transform hover:scale-105">
                {/* Soft card shadow */}
                <div className="absolute -inset-2 bg-gradient-to-b from-gray-200/20 via-gray-100/10 to-gray-300/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="aspect-square flex items-center justify-center p-8 relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <div className="w-40 h-40 bg-gray-100/80 rounded-lg flex items-center justify-center relative z-10 group-hover:bg-yellow-400/20 transition-colors duration-300 border border-gray-300/50 group-hover:border-yellow-400/50">
                    <svg className="w-20 h-20 text-gray-600 group-hover:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div className="text-center px-4">
                  <h3 className="text-black font-bold text-xl mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    Смартфон Premium
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Флагманский смартфон с тройной камерой и быстрой зарядкой 65W
                  </p>
                  <div className="text-yellow-400 font-black text-2xl mb-6">
                    ₽ 59,900
                  </div>

                  <div className="flex space-x-4 justify-center">
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-300 text-sm">
                      Заказать
                    </button>
                    <button className="w-12 h-12 bg-transparent text-gray-600 rounded-lg flex items-center justify-center hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors duration-300 border border-gray-300 hover:border-yellow-400/50">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L12 21l7.5-3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group relative rounded-xl transition-all duration-500 hover:transform hover:scale-105">
                {/* Soft card shadow */}
                <div className="absolute -inset-2 bg-gradient-to-b from-gray-200/20 via-gray-100/10 to-gray-300/30 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="aspect-square flex items-center justify-center p-8 relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <div className="w-40 h-40 bg-gray-100/80 rounded-lg flex items-center justify-center relative z-10 group-hover:bg-yellow-400/20 transition-colors duration-300 border border-gray-300/50 group-hover:border-yellow-400/50">
                    <svg className="w-20 h-20 text-gray-600 group-hover:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>

                <div className="text-center px-4">
                  <h3 className="text-black font-bold text-xl mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    Игровой Ноутбук
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    RTX 4060, 16GB RAM и дисплей 144Hz для максимальной производительности
                  </p>
                  <div className="text-yellow-400 font-black text-2xl mb-6">
                    ₽ 129,900
                  </div>

                  <div className="flex space-x-4 justify-center">
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-300 text-sm">
                      Заказать
                    </button>
                    <button className="w-12 h-12 bg-transparent text-gray-600 rounded-lg flex items-center justify-center hover:bg-yellow-400/10 hover:text-yellow-400 transition-colors duration-300 border border-gray-300 hover:border-yellow-400/50">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L12 21l7.5-3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="text-center mt-16">
              <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-12 py-4 rounded-lg font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 uppercase tracking-wide">
                Смотреть все товары
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-8 lg:p-16 text-center">
          <p className="text-gray-600 uppercase tracking-wide text-sm">
            © 2024 ORZUTECH. БУХАРА, УЗБЕКИСТАН. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
        </div>
      </div>
    </main>
  )
}
