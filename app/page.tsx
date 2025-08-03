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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const products: Product[] = [
    { id: 1, name: "Смарт Тел��визор 55\"", price: 89900, description: "4K Ultra HD разрешение с поддержкой HDR и Smart TV функциями для максимального качества изображения" },
    { id: 2, name: "Смартфон Premium", price: 59900, description: "Флагманский смарт��он с тройной камерой и быстрой зарядкой 65W для профессиональной фотографии" },
    { id: 3, name: "Игровой Ноутбук", price: 129900, description: "RTX 4060, 16GB RAM и дисплей 144Hz для максимальной производительности в играх и работе" },
    { id: 4, name: "Беспроводные наушники", price: 24900, description: "Premium наушники с активным шумоподавлением и кристально чистым звуком" },
    { id: 5, name: "Умные часы", price: 34900, description: "Современные смарт-часы с мониторингом здоровья и спортивными функциями" },
    { id: 6, name: "Планшет Pro", price: 79900, description: "����рофессиональный планшет для работы и тво����ества с поддержкой стилуса" }
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
      name: "Астронавт"
    },
    {
      url: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
      name: "Робот"
    },
    {
      url: "https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf",
      name: "Сфера"
    }
  ]

  const colors = [
    { name: "Белый", color: "bg-white", border: "border-gray-300" },
    { name: "��ерный", color: "bg-black", border: "border-gray-700" },
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.relative')) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Diagonal Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 15%, #C8A2C8 35%, #A78BFA 55%, #8B5CF6 75%, #7C3AED 90%, #6D28D9 100%)'
          }}
        ></div>

        {/* Soft overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-900/10"></div>

        {/* Premium White Wave from Top */}
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Main White Wave */}
            <path
              d="M0,0 L1200,0 L1200,280 C1000,320 800,340 600,300 C400,260 200,240 0,280 Z"
              fill="white"
              className="drop-shadow-sm"
            />
            {/* Secondary subtle wave for depth */}
            <path
              d="M0,0 L1200,0 L1200,240 C950,280 700,290 450,260 C200,230 100,220 0,250 Z"
              fill="white"
              opacity="0.6"
              className="drop-shadow-xs"
            />
          </svg>
        </div>

        {/* Subtle gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-purple-900/5 opacity-50"></div>
      </div>

      {/* Main Container */}
      <div className="w-full bg-transparent relative z-20">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 lg:px-16 py-6 relative z-30">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-yellow-400 font-bold text-2xl tracking-wide font-sans drop-shadow-sm">ORZUTECH</span>
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
              placeholder="П��иск..."
              className="w-full bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 pl-10 pr-4 py-2 rounded-full border border-white/30 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-colors text-sm font-sans shadow-lg"
            />
          </div>

          {/* Auth and Cart */}
          <div className="flex items-center space-x-4">
            {/* Auth buttons */}
            <div className="flex items-center space-x-2">
              <button className="text-black hover:text-gray-700 transition-colors duration-300 text-sm font-medium drop-shadow-sm">
                Вход
              </button>
              <span className="text-black">|</span>
              <button className="text-black hover:text-gray-700 transition-colors duration-300 text-sm font-medium drop-shadow-sm">
                Регистрация
              </button>
            </div>

            {/* Cart */}
            <button className="relative p-2 text-black hover:text-gray-700 transition-colors duration-300 drop-shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5m0 0L12 21l7.5-3" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium shadow-lg">
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
                Наша деятельность: Продажа Телефонов �� аксессуаров, Планшетов, разных Га��жетов и много много инте��есно��о.
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
                Выбор цвета
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
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">Поддержка</div>
            </div>
            <div>
              <div className="text-4xl font-black text-black mb-2">99%</div>
              <div className="text-gray-600 uppercase tracking-wide text-sm font-medium">Качеств��</div>
            </div>
          </div>
        </div>



        {/* Hit Products Section */}
        <div className="bg-gray-50 py-16 px-4 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-2 tracking-wide">
                Хит продаж
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto"></div>
            </div>

            {/* Slider Container */}
            <div className="relative">
              <div className="flex animate-scroll space-x-6">
                {/* Slide 1 - Grooming Kit */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden p-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F4b42886ccd0846e8845f7fea196bdae6?format=webp&width=800"
                      alt="Grooming Kit Pro"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Grooming Kit Pro</h3>
                    <p className="text-gray-600 text-sm mb-4">Профессиональный набор для ухода</p>
                    <div className="text-2xl font-bold text-red-600">₽ 8,900</div>
                  </div>
                </div>

                {/* Slide 2 - Apple Watch */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden p-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2Fad77a22293914f76ad5c86b0cc1cb048?format=webp&width=800"
                      alt="Apple Watch Series 10"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Apple Watch Series 10</h3>
                    <p className="text-gray-600 text-sm mb-4">Rose Gold, Black 42MM/46MM</p>
                    <div className="text-2xl font-bold text-red-600">₽ 35,000</div>
                  </div>
                </div>

                {/* Slide 3 - PlayStation */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden p-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F593de0ffc9344103bcb253bcf1c49c90?format=webp&width=800"
                      alt="PlayStation 5 Slim"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">PlayStation 5 Slim</h3>
                    <p className="text-gray-600 text-sm mb-4">Игровая консоль нового поколения</p>
                    <div className="text-2xl font-bold text-red-600">₽ 45,000</div>
                  </div>
                </div>

                {/* Slide 4 - Samsung Watch */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden p-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F1f88af23807446fbae545f790458cfa0?format=webp&width=800"
                      alt="Samsung Watch Ultra"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Samsung Watch Ultra</h3>
                    <p className="text-gray-600 text-sm mb-4">Умные часы с премиум функциями</p>
                    <div className="text-2xl font-bold text-red-600">₽ 33,500</div>
                  </div>
                </div>

                {/* Slide 5 - Huawei Set */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden p-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F61d1bfb408604835a08844fc969d435c?format=webp&width=800"
                      alt="Huawei Watch Fit 3 + FreeBuds"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Huawei Watch Fit 3</h3>
                    <p className="text-gray-600 text-sm mb-4">+ FreeBuds SE 3 в подарок</p>
                    <div className="text-2xl font-bold text-red-600">₽ 12,500</div>
                  </div>
                </div>

                {/* Duplicate slides for seamless loop */}
                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden p-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F4b42886ccd0846e8845f7fea196bdae6?format=webp&width=800"
                      alt="Grooming Kit Pro"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Grooming Kit Pro</h3>
                    <p className="text-gray-600 text-sm mb-4">Профессиональный набор для ухода</p>
                    <div className="text-2xl font-bold text-red-600">₽ 8,900</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden p-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2Fad77a22293914f76ad5c86b0cc1cb048?format=webp&width=800"
                      alt="Apple Watch Series 10"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Apple Watch Series 10</h3>
                    <p className="text-gray-600 text-sm mb-4">Rose Gold, Black 42MM/46MM</p>
                    <div className="text-2xl font-bold text-red-600">₽ 35,000</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden p-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F593de0ffc9344103bcb253bcf1c49c90?format=webp&width=800"
                      alt="PlayStation 5 Slim"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">PlayStation 5 Slim</h3>
                    <p className="text-gray-600 text-sm mb-4">Игровая консоль нового поколения</p>
                    <div className="text-2xl font-bold text-red-600">₽ 45,000</div>
                  </div>
                </div>
              </div>
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

            {/* Filter Dropdowns */}
            <div className="flex justify-center items-center space-x-8 mb-12 relative">

              {/* Price Filter */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'price' ? null : 'price')}
                  className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs">Цена</span>
                </button>
                {activeDropdown === 'price' && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-48">
                    <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      <div className="p-2">
                        {['До 25,000 ₽', '25,000 - 50,000 ₽', '50,000 - 75,000 ₽', '75,000 - 100,000 ₽', '100,000 - 150,000 ₽', 'Свыше 150,000 ₽'].map((price, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {price}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Rating Filter */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'rating' ? null : 'rating')}
                  className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <span className="text-xs">Рейтинг</span>
                </button>
                {activeDropdown === 'rating' && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-48">
                    <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      <div className="p-2">
                        {['5 звезд', '4 звезды и выше', '3 звезды и выше', '2 звезды и выше', '1 звезда и выше', 'Без рейтинга'].map((rating, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200 flex items-center"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="mr-2">⭐</span>
                            {rating}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Category Filter */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'category' ? null : 'category')}
                  className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <span className="text-xs">Категория</span>
                </button>
                {activeDropdown === 'category' && (
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-48">
                    <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      <div className="p-2">
                        {['Смартфоны', 'Телевизоры', 'Ноутбуки', 'Планшеты', 'Наушники', 'Умные час��', 'Игровые консоли', 'Фотоаппараты', 'Аксессуары', 'Все категории'].map((category, index) => (
                          <button
                            key={index}
                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {/* Product 1 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                {/* Top accent line */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden relative">
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 group-hover:from-white/80 group-hover:to-gray-50/60 transition-all duration-700"></div>

                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white/70 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-white/90 transition-all duration-700 overflow-hidden p-4 border border-white/50">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt={"Смарт Телевизор 55\""}
                        className="w-full h-full object-contain filter group-hover:brightness-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-7 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                    Смарт Телевизор 55"
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 font-medium">
                    4K Ultra HD с HDR
                  </p>
                  <div className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    ₽ 89,900
                  </div>

                  <button
                    onClick={() => addToCart(products[0])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                {/* Top accent line */}
                <div className="h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden relative">
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 group-hover:from-white/80 group-hover:to-gray-50/60 transition-all duration-700"></div>

                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white/70 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-white/90 transition-all duration-700 overflow-hidden p-4 border border-white/50">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Смартфон Premium"
                        className="w-full h-full object-contain filter group-hover:brightness-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-7 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300 leading-tight">
                    Смартфон Premium
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 font-medium">
                    Тройная камера, зарядка 65W
                  </p>
                  <div className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-300">
                    ₽ 59,900
                  </div>

                  <button
                    onClick={() => addToCart(products[1])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                {/* Top accent line */}
                <div className="h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden relative">
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 group-hover:from-white/80 group-hover:to-gray-50/60 transition-all duration-700"></div>

                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white/70 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-white/90 transition-all duration-700 overflow-hidden p-4 border border-white/50">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Игровой Ноутбук"
                        className="w-full h-full object-contain filter group-hover:brightness-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-7 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors duration-300 leading-tight">
                    Игровой Ноутбук
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 font-medium">
                    RTX 4060, 16GB RAM, 144Hz
                  </p>
                  <div className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">
                    ₽ 129,900
                  </div>

                  <button
                    onClick={() => addToCart(products[2])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 4 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                {/* Top accent line */}
                <div className="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden relative">
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 group-hover:from-white/80 group-hover:to-gray-50/60 transition-all duration-700"></div>

                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white/70 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-white/90 transition-all duration-700 overflow-hidden p-4 border border-white/50">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Беспроводные наушники"
                        className="w-full h-full object-contain filter group-hover:brightness-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-7 bg-gradient-to-b from-white to-gray-50/30">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300 leading-tight">
                    Беспроводные наушники
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 font-medium">
                    Premium с шумоподавлением
                  </p>
                  <div className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                    ₽ 24,900
                  </div>

                  <button
                    onClick={() => addToCart(products[3])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 5 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Умные часы"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    Умные часы
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Мониторинг здоровья и спорт
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 34,900
                  </div>

                  <button
                    onClick={() => addToCart(products[4])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 6 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Планшет Pro"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    Планшет Pro
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Профессиональный с стилусом
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 79,900
                  </div>

                  <button
                    onClick={() => addToCart(products[5])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 7 - Duplicate of Product 1 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt={"Смарт Телевизор 55\""}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    Смарт Телевизор 55"
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    4K Ultra HD с HDR
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 89,900
                  </div>

                  <button
                    onClick={() => addToCart(products[0])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 8 - Duplicate of Product 2 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Смартфон Premium"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    Смартфон Premium
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Тройная камера, зарядка 65W
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 59,900
                  </div>

                  <button
                    onClick={() => addToCart(products[1])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 9 - Duplicate of Product 3 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                <div className="aspect-[4/3] bg-white/50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 group-hover:from-white/40 group-hover:to-white/20 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Игровой Ноутбук"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    Игровой Ноутбук
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    RTX 4060, 16GB RAM, 144Hz
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 129,900
                  </div>

                  <button
                    onClick={() => addToCart(products[2])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 10 - Duplicate of Product 4 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Беспроводные н��ушники"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    Беспроводные наушники
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Premium с шумоп��давлением
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 24,900
                  </div>

                  <button
                    onClick={() => addToCart(products[3])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 11 - Duplicate of Product 5 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Умные часы"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    Умные часы
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Мониторинг здоровья и спорт
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 34,900
                  </div>

                  <button
                    onClick={() => addToCart(products[4])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 12 - Duplicate of Product 6 */}
              <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 border border-gray-100/70 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-50 group-hover:to-gray-100 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Планшет Pro"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300 leading-tight">
                    Планшет Pro
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Профессиональный с стилусом
                  </p>
                  <div className="text-xl font-semibold text-gray-900 mb-6">
                    ₽ 79,900
                  </div>

                  <button
                    onClick={() => addToCart(products[5])}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 rounded-xl text-sm font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-0"
                  >
                    Зака��ать
                  </button>
                </div>
              </div>





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
