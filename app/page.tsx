'use client'

import { useEffect, useState } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any
    }
  }
}

interface Product {
  id: number
  name: string
  price: number
  description: string
}

interface CartItem extends Product {
  quantity: number
}

export default function Home() {
  const [currentModel, setCurrentModel] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [cart, setCart] = useState<CartItem[]>([])

  const products: Product[] = [
    { id: 1, name: "Смарт Телевизор 55\"", price: 89900, description: "4K Ultra HD разрешение с поддержкой HDR и Smart TV функциями для максимального качества изображения" },
    { id: 2, name: "Смартфон Premium", price: 59900, description: "Флагманский смартфон с тройной камерой и быстрой зарядкой 65W для профессиональной фотографии" },
    { id: 3, name: "Игровой Ноутбук", price: 129900, description: "RTX 4060, 16GB RAM и дисплей 144Hz для максимальной производительности в играх и работе" },
    { id: 4, name: "Беспроводные наушники", price: 24900, description: "Premium наушники с активным шумоподавлением и кристально чистым звуком" },
    { id: 5, name: "Умные часы", price: 34900, description: "Современные смарт-часы с мониторингом здоровья и спортивными функциями" },
    { id: 6, name: "Планшет Pro", price: 79900, description: "Профессиональный планшет для работы и творчества с поддержкой стилуса" }
  ]

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

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
        <nav className="flex items-center justify-between px-8 lg:px-16 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-yellow-400 font-bold text-2xl tracking-wide font-sans">ORZUTECH</span>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-2xl mx-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              placeholder="Поиск..."
              className="w-full bg-gray-100 text-black placeholder-gray-500 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors text-sm font-sans shadow-md"
            />
          </div>

          {/* Auth and Cart */}
          <div className="flex items-center space-x-4">
            {/* Auth buttons */}
            <div className="flex items-center space-x-2">
              <button className="text-gray-600 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium">
                Вход
              </button>
              <span className="text-gray-400">|</span>
              <button className="text-gray-600 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium">
                Регистрация
              </button>
            </div>

            {/* Cart */}
            <button className="relative p-2 text-gray-600 hover:text-yellow-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L12 21l7.5-3" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {getTotalItems()}
              </span>
            </button>
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
                    <span className="whitespace-nowrap">Быстрая доставка и у��тановка</span>
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
                Выбо�� цве��а
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
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">Поддержк���</div>
            </div>
            <div>
              <div className="text-4xl font-black text-black mb-2">99%</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">Качество</div>
            </div>
          </div>
        </div>



        {/* Products Section */}
        <div className="bg-white py-16 px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-2 tracking-wide">
                Каталог товаров
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto"></div>
            </div>

            {/* Filter Icons */}
            <div className="flex justify-center items-center space-x-8 mb-12">
              <button className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
                <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs">Цена</span>
              </button>

              <button className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
                <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <span className="text-xs">Рейтинг</span>
              </button>

              <button className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
                <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <span className="text-xs">Категория</span>
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Product 1 */}
              <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:scale-[1.02] border border-gray-100">
                <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center p-4">
                    <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2Fd98b9cf4b85e4d27bbe7a2c0a7d150e4?format=webp&width=800"
                        alt={"Смарт Телевизор 55\""}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Смарт Телевизор 55"
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    4K Ultra HD разрешение с поддержкой HDR и Smart TV функциями для максимального качества изображения
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 89,900
                  </div>

                  <button
                    onClick={() => addToCart(products[0])}
                    className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-md text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 group-hover:border-gray-400"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:scale-[1.02] border border-gray-100">
                <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center p-4">
                    <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2Fd98b9cf4b85e4d27bbe7a2c0a7d150e4?format=webp&width=800"
                        alt="Смартфон Premium"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Смартфон Premium
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Флагманский смартфон с тройной камерой и быстрой зарядкой 65W для профессиональной фотографии
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 59,900
                  </div>

                  <button
                    onClick={() => addToCart(products[1])}
                    className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-md text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 group-hover:border-gray-400"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:scale-[1.02] border border-gray-100">
                <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center p-4">
                    <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2Fd98b9cf4b85e4d27bbe7a2c0a7d150e4?format=webp&width=800"
                        alt="Игровой Ноутбук"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Игровой Ноутбук
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    RTX 4060, 16GB RAM и дисплей 144Hz для максимальной производительности в играх и работе
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 129,900
                  </div>

                  <button
                    onClick={() => addToCart(products[2])}
                    className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-md text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 group-hover:border-gray-400"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 4 */}
              <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:scale-[1.02] border border-gray-100">
                <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center p-4">
                    <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2Fd98b9cf4b85e4d27bbe7a2c0a7d150e4?format=webp&width=800"
                        alt="Беспроводные наушники"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Беспроводные наушники
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Premium наушники с активным шумоподавлением и кристально чистым звуком
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 24,900
                  </div>

                  <button
                    onClick={() => addToCart(products[3])}
                    className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-md text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 group-hover:border-gray-400"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 5 */}
              <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:scale-[1.02] border border-gray-100">
                <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2Fd98b9cf4b85e4d27bbe7a2c0a7d150e4?format=webp&width=800"
                        alt="Умные часы"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Умные часы
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Современные смарт-часы с мониторингом здоровья и спортивными функциями
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 34,900
                  </div>

                  <button
                    onClick={() => addToCart(products[4])}
                    className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-md text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 group-hover:border-gray-400"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 6 */}
              <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 ease-out hover:scale-[1.02] border border-gray-100">
                <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2Fd98b9cf4b85e4d27bbe7a2c0a7d150e4?format=webp&width=800"
                        alt="Планшет Pro"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    Планшет Pro
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Профессиональный пла��шет для работы и творчества с поддержкой стилуса
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 79,900
                  </div>

                  <button
                    onClick={() => addToCart(products[5])}
                    className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-md text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-all duration-300 group-hover:border-gray-400"
                  >
                    Заказать
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-8 lg:p-16 text-center">
          <p className="text-gray-600 uppercase tracking-wide text-sm">
            © 2024 ORZUTECH. БУХАРА, УЗБЕКИСТАН. ВСЕ П��АВА ЗАЩИЩЕНЫ.
          </p>
        </div>
      </div>
    </main>
  )
}
