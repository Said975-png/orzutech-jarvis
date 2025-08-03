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
        <div className="bg-white p-8 lg:p-20">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="text-sm text-gray-500 font-medium uppercase tracking-[0.3em] mb-6">
                КАТАЛОГ ТОВАРОВ
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-tight">
                Наша Продукция
              </h2>
              <div className="w-20 h-px bg-gray-900 mx-auto"></div>
            </div>

            {/* Products Grid - 4 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

              {/* Product 1 */}
              <div className="group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-32 h-32 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Hover Button */}
                  <button className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wide">ПОДРОБНЕЕ</span>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 font-medium text-lg mb-3 tracking-tight">
                    Смарт Телевизор 55"
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    4K Ultra HD разрешение с поддержкой HDR. Современная Smart TV платформа с доступом к популярным сервисам.
                  </p>
                  <div className="text-gray-900 font-light text-xl tracking-wide">
                    ₽ 89,900
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-32 h-32 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <button className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wide">ПОДРОБНЕЕ</span>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 font-medium text-lg mb-3 tracking-tight">
                    Смартфон Premium
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Флагманский смартфон с тройной камерой 108MP. Быстрая зарядка 65W и 128GB встроенной памяти.
                  </p>
                  <div className="text-gray-900 font-light text-xl tracking-wide">
                    ₽ 59,900
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-32 h-32 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>

                  <button className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wide">ПОДРОБНЕЕ</span>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 font-medium text-lg mb-3 tracking-tight">
                    Игровой Ноутбук
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Профессиональный игровой ноутбук с RTX 4060, 16GB RAM и дисплеем 144Hz для максимальной производительности.
                  </p>
                  <div className="text-gray-900 font-light text-xl tracking-wide">
                    ₽ 129,900
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-32 h-32 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>

                  <button className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wide">ПОДРО��НЕЕ</span>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 font-medium text-lg mb-3 tracking-tight">
                    Беспроводные Наушники
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Премиальные наушники с активным шумоподавлением. Bluetooth 5.3 и время работы до 30 часов.
                  </p>
                  <div className="text-gray-900 font-light text-xl tracking-wide">
                    ₽ 19,900
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-32 h-32 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>

                  <button className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wide">ПОДРОБНЕЕ</span>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 font-medium text-lg mb-3 tracking-tight">
                    Экшн Камера 4K
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Компактная экшн-камера с записью 4K, водонепроницаемым корпусом и системой стабилизации изображения.
                  </p>
                  <div className="text-gray-900 font-light text-xl tracking-wide">
                    ₽ 29,900
                  </div>
                </div>
              </div>

              {/* Product 6 */}
              <div className="group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-32 h-32 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>

                  <button className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wide">ПОДРОБНЕЕ</span>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 font-medium text-lg mb-3 tracking-tight">
                    Wi-Fi 6 Роутер
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Профессиональный роутер с поддержкой Wi-Fi 6, Gigabit портами и возможностью подключения до 100 устройств.
                  </p>
                  <div className="text-gray-900 font-light text-xl tracking-wide">
                    ₽ 14,900
                  </div>
                </div>
              </div>

              {/* Product 7 */}
              <div className="group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-32 h-32 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>

                  <button className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wide">ПОДРОБНЕЕ</span>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 font-medium text-lg mb-3 tracking-tight">
                    Умная Колонка
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Интеллектуальная колонка с голосовым помощником. Высокое качество звука и управление умным домом.
                  </p>
                  <div className="text-gray-900 font-light text-xl tracking-wide">
                    ₽ 12,900
                  </div>
                </div>
              </div>

              {/* Product 8 */}
              <div className="group relative bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="w-32 h-32 bg-gray-200 rounded-sm flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m3 0H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1z" />
                    </svg>
                  </div>

                  <button className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black text-white px-6 py-2 text-sm font-medium tracking-wide">ПОДРОБНЕЕ</span>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-gray-900 font-medium text-lg mb-3 tracking-tight">
                    Планшет Pro
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Профессиональный планшет с 12.9" дисплеем, поддержкой стилуса и производительным процессором для работы.
                  </p>
                  <div className="text-gray-900 font-light text-xl tracking-wide">
                    ₽ 79,900
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="text-center mt-20">
              <button className="bg-gray-900 text-white px-12 py-4 font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300">
                ПОСМОТРЕТЬ ВСЕ ТОВАРЫ
              </button>
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
