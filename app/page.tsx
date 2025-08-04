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

interface ChatMessage {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

export default function Home() {
  const [currentModel, setCurrentModel] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [cart, setCart] = useState<CartItem[]>([])
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Привет! Я Джарвис, ваш ИИ-помощник ORZUTECH. Чем могу помочь? Могу рассказать о товарах, помочь с выбором техники или ответить на вопросы о ма��азине.",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [currentMessage, setCurrentMessage] = useState('')

  const products: Product[] = [
    { id: 1, name: "Смарт Тел��визор 55\"", price: 89900, description: "4K Ultra HD разрешение с поддержкой HDR и Smart TV функциями для макси��ального качества изображения" },
    { id: 2, name: "Смартфон Premium", price: 59900, description: "Флагман��кий смарт��он с тр��йной камерой и быстрой зарядкой 65W для профессиональной фотографии" },
    { id: 3, name: "Игровой Ноу��бук", price: 129900, description: "RTX 4060, 16GB RAM и дисплей 144Hz дл�� максимальной производительности в играх и работе" },
    { id: 4, name: "Беспроводные наушники", price: 24900, description: "Premium наушники с активным шумоподавлением и кристально ч��стым звуком" },
    { id: 5, name: "Умные часы", price: 34900, description: "Современные смарт-час�� с мониторингом здоровья и спортивными функциями" },
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

  const sendMessage = () => {
    if (currentMessage.trim()) {
      const userMessage: ChatMessage = {
        id: Date.now(),
        text: currentMessage,
        isUser: true,
        timestamp: new Date()
      }

      setChatMessages(prev => [...prev, userMessage])
      setCurrentMessage('')

      // Simulate Jarvis response
      setTimeout(() => {
        const jarvisResponse: ChatMessage = {
          id: Date.now() + 1,
          text: "Спасибо за ваш вопрос! Я обра��атываю ваш запрос и скоро дам детальный ответ.",
          isUser: false,
          timestamp: new Date()
        }
        setChatMessages(prev => [...prev, jarvisResponse])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
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
      name: "Ро��от"
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
        <nav className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4 md:py-6 relative z-30">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-yellow-400 font-bold text-xl md:text-2xl tracking-wide font-sans drop-shadow-sm">ORZUTECH</span>
          </div>

          {/* Animated Search Bar */}
          <div className="relative flex-1 max-w-2xl mx-4 md:mx-8">
            <div
              className={`
                relative transition-all duration-500 ease-in-out overflow-hidden
                ${isSearchOpen
                  ? 'w-full opacity-100'
                  : 'w-0 opacity-0'
                }
              `}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Поиск..."
                className="w-full bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 pl-10 pr-10 py-2 rounded-full border border-gray-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-colors text-sm font-sans shadow-lg"
                autoFocus={isSearchOpen}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Auth and Cart */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`
                p-2 text-black hover:text-gray-700 transition-all duration-300 drop-shadow-sm
                ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
              `}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Auth buttons */}
            <div className="hidden sm:flex items-center space-x-2">
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
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 p-4 md:p-8 lg:p-16 min-h-[60vh] md:min-h-[70vh] overflow-hidden">
          {/* Light Effect from Left */}
          <div className="absolute -left-32 top-0 bottom-0 w-96 bg-gradient-to-r from-gray-200/10 via-gray-200/5 to-transparent blur-3xl opacity-60"></div>
          <div className="absolute -left-20 top-1/4 bottom-1/4 w-64 bg-gradient-to-r from-gray-200/20 via-gray-200/8 to-transparent blur-2xl opacity-40"></div>
          <div className="absolute -left-10 top-1/3 bottom-1/3 w-32 bg-gradient-to-r from-gray-200/30 via-gray-200/10 to-transparent blur-xl opacity-30"></div>

          {/* Mobile: 3D Model Section First */}
          <div className="flex flex-col justify-center items-center space-y-6 lg:hidden order-1">
            <div className="flex items-center space-x-6">
              <div className="relative w-[240px] h-[240px] overflow-hidden rounded-lg">
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

              {/* Model Color Selection - Mobile Right Side */}
              <div className="flex flex-col items-center space-y-4">
                <div className="text-gray-400 text-xs uppercase tracking-wide text-center">
                  Цвет<br/>модели
                </div>
                <div
                  className="flex flex-col space-y-4 cursor-grab active:cursor-grabbing"
                  onMouseDown={(e) => {
                    const startY = e.clientY;
                    let isDragging = false;

                    const handleMouseMove = (e: MouseEvent) => {
                      const deltaY = e.clientY - startY;
                      if (Math.abs(deltaY) > 20 && !isDragging) {
                        isDragging = true;
                        if (deltaY > 0) {
                          setSelectedColor(1);
                        } else {
                          setSelectedColor(0);
                        }
                      }
                    };

                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };

                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                  onTouchStart={(e) => {
                    const startY = e.touches[0].clientY;
                    let isDragging = false;

                    const handleTouchMove = (e: TouchEvent) => {
                      const deltaY = e.touches[0].clientY - startY;
                      if (Math.abs(deltaY) > 20 && !isDragging) {
                        isDragging = true;
                        if (deltaY > 0) {
                          setSelectedColor(1);
                        } else {
                          setSelectedColor(0);
                        }
                      }
                    };

                    const handleTouchEnd = () => {
                      document.removeEventListener('touchmove', handleTouchMove);
                      document.removeEventListener('touchend', handleTouchEnd);
                    };

                    document.addEventListener('touchmove', handleTouchMove);
                    document.addEventListener('touchend', handleTouchEnd);
                  }}
                >
                  <button
                    onClick={() => setSelectedColor(0)}
                    className={`
                      w-4 h-4 rounded-full transition-all duration-300 border-2 cursor-pointer
                      bg-white border-gray-300
                      ${selectedColor === 0
                        ? 'ring-2 ring-yellow-400 ring-offset-1 scale-110'
                        : 'hover:ring-1 hover:ring-gray-300 hover:ring-offset-1 hover:scale-105'
                      }
                    `}
                    title="Белый"
                  />
                  <div className="text-gray-300 text-xs">⇅</div>
                  <button
                    onClick={() => setSelectedColor(1)}
                    className={`
                      w-4 h-4 rounded-full transition-all duration-300 border-2 cursor-pointer
                      bg-black border-gray-700
                      ${selectedColor === 1
                        ? 'ring-2 ring-yellow-400 ring-offset-1 scale-110'
                        : 'hover:ring-1 hover:ring-gray-300 hover:ring-offset-1 hover:scale-105'
                      }
                    `}
                    title="Черный"
                  />
                </div>
                <div className="text-gray-300 text-xs text-center">
                  потяните<br/>для смены
                </div>
              </div>
            </div>

            {/* Custom Model Selector - Mobile */}
            <div
              className="w-[240px]"
              onWheel={(e) => {
                e.preventDefault()
                if (e.deltaY > 0) {
                  setCurrentModel((prev) => (prev + 1) % models.length)
                } else {
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

          {/* Left Content */}
          <div className="relative flex flex-col justify-center items-start space-y-8 lg:space-y-12 z-10 order-2 lg:order-1">
            <div className="space-y-6 text-left">
              <div className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-[0.2em]">
                <span className="block md:hidden">ORZUTECH</span>
                <span className="hidden md:block">СОВРЕМЕННАЯ ЭЛЕКТРОНИКА</span>
              </div>

              <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-yellow-400 leading-[0.9] tracking-tight">
                <span className="block md:hidden">СОВРЕМЕННАЯ ЭЛЕКТРОНИКА</span>
                <span className="hidden md:block">ORZUTECH</span>
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-black to-gray-600"></div>

              <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-md font-light">
                Наша деятельность: Продажа Телефонов и аксессуаров, Планшетов, разных Гаджетов и много много интересного.
              </p>

              {/* Auto-scrolling slider */}
              <div className="relative overflow-hidden max-w-lg h-12">
                <div className="absolute inset-0 flex items-center">
                  <div className="flex animate-scroll space-x-8 text-sm text-black font-medium">
                    <span className="whitespace-nowrap">Самая качественная техника в ��ухар��</span>
                    <span className="whitespace-nowrap">100% оригинальные устройства</span>
                    <span className="whitespace-nowrap">Быстрая доставка и установка</span>
                    <span className="whitespace-nowrap">Полная гарантия на все то��ары</span>
                    <span className="whitespace-nowrap">Премиум-сервис и поддержка</span>
                    <span className="whitespace-nowrap">Инновационные решени�� для дома</span>
                    <span className="whitespace-nowrap">Профессио��альная установка</span>
                    <span className="whitespace-nowrap">Качественное обслуживание</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            <div className="flex items-center justify-start space-x-4 mt-8">
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

          {/* Right Content - Desktop Only */}
          <div className="hidden lg:flex flex-col justify-center items-center space-y-6 order-2">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative w-[240px] md:w-[280px] lg:w-[360px] h-[240px] md:h-[280px] lg:h-[360px] overflow-hidden rounded-lg">
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

              {/* Model Color Selection - Right side */}
              <div className="flex flex-col items-center space-y-4">
                <div className="text-gray-400 text-xs uppercase tracking-wide text-center">
                  ��вет<br/>модели
                </div>
                <div
                  className="flex flex-col space-y-4 cursor-grab active:cursor-grabbing"
                  onMouseDown={(e) => {
                    const startY = e.clientY;
                    let isDragging = false;

                    const handleMouseMove = (e: MouseEvent) => {
                      const deltaY = e.clientY - startY;
                      if (Math.abs(deltaY) > 20 && !isDragging) {
                        isDragging = true;
                        if (deltaY > 0) {
                          // Drag down - switch to black
                          setSelectedColor(1);
                        } else {
                          // Drag up - switch to white
                          setSelectedColor(0);
                        }
                      }
                    };

                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };

                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                  onTouchStart={(e) => {
                    const startY = e.touches[0].clientY;
                    let isDragging = false;

                    const handleTouchMove = (e: TouchEvent) => {
                      const deltaY = e.touches[0].clientY - startY;
                      if (Math.abs(deltaY) > 20 && !isDragging) {
                        isDragging = true;
                        if (deltaY > 0) {
                          setSelectedColor(1);
                        } else {
                          setSelectedColor(0);
                        }
                      }
                    };

                    const handleTouchEnd = () => {
                      document.removeEventListener('touchmove', handleTouchMove);
                      document.removeEventListener('touchend', handleTouchEnd);
                    };

                    document.addEventListener('touchmove', handleTouchMove);
                    document.addEventListener('touchend', handleTouchEnd);
                  }}
                >
                  <button
                    onClick={() => setSelectedColor(0)}
                    className={`
                      w-6 h-6 rounded-full transition-all duration-300 border-2 cursor-pointer
                      bg-white border-gray-300
                      ${selectedColor === 0
                        ? 'ring-2 ring-yellow-400 ring-offset-1 scale-110'
                        : 'hover:ring-1 hover:ring-gray-300 hover:ring-offset-1 hover:scale-105'
                      }
                    `}
                    title="Б��лый"
                  />
                  <div className="text-gray-300 text-xs">⇅</div>
                  <button
                    onClick={() => setSelectedColor(1)}
                    className={`
                      w-6 h-6 rounded-full transition-all duration-300 border-2 cursor-pointer
                      bg-black border-gray-700
                      ${selectedColor === 1
                        ? 'ring-2 ring-yellow-400 ring-offset-1 scale-110'
                        : 'hover:ring-1 hover:ring-gray-300 hover:ring-offset-1 hover:scale-105'
                      }
                    `}
                    title="Черный"
                  />
                </div>
                <div className="text-gray-300 text-xs text-center">
                  потяните<br/>для смены
                </div>
              </div>
            </div>

            {/* Custom Model Selector */}
            <div
              className="w-[240px] md:w-[280px] lg:w-[360px]"
              onWheel={(e) => {
                e.preventDefault()
                if (e.deltaY > 0) {
                  // Ск��олл вниз - следующая модель
                  setCurrentModel((prev) => (prev + 1) % models.length)
                } else {
                  // Ск��олл в��ерх - предыдущая модель
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







        {/* Hit Products Section */}
        <div className="bg-white py-6 md:py-8 px-3 md:px-4 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            {/* Slider Container */}
            <div className="relative">
              <div className="flex animate-scroll space-x-6">
                {/* Slide 1 - Grooming Kit */}
                <div className="flex-shrink-0 w-80 group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F4b42886ccd0846e8845f7fea196bdae6?format=webp&width=800"
                      alt="Grooming Kit Pro"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">Grooming Kit Pro</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">Профессиональный набор для ухода</p>
                    <div className="text-2xl font-bold text-red-600">₽ 8,900</div>
                  </div>
                </div>

                {/* Slide 2 - Apple Watch */}
                <div className="flex-shrink-0 w-80 group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2Fad77a22293914f76ad5c86b0cc1cb048?format=webp&width=800"
                      alt="Apple Watch Series 10"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">Apple Watch Series 10</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">Rose Gold, Black 42MM/46MM</p>
                    <div className="text-2xl font-bold text-red-600">₽ 35,000</div>
                  </div>
                </div>

                {/* Slide 3 - PlayStation */}
                <div className="flex-shrink-0 w-80 group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F593de0ffc9344103bcb253bcf1c49c90?format=webp&width=800"
                      alt="PlayStation 5 Slim"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">PlayStation 5 Slim</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">Игровая консоль нового по��оления</p>
                    <div className="text-2xl font-bold text-red-600">₽ 45,000</div>
                  </div>
                </div>

                {/* Slide 4 - Samsung Watch */}
                <div className="flex-shrink-0 w-80 group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F1f88af23807446fbae545f790458cfa0?format=webp&width=800"
                      alt="Samsung Watch Ultra"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">Samsung Watch Ultra</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">Умные часы с премиум функциями</p>
                    <div className="text-2xl font-bold text-red-600">₽ 33,500</div>
                  </div>
                </div>

                {/* Slide 5 - Huawei Set */}
                <div className="flex-shrink-0 w-80 group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F61d1bfb408604835a08844fc969d435c?format=webp&width=800"
                      alt="Huawei Watch Fit 3 + FreeBuds"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">Huawei Watch Fit 3</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">+ FreeBuds SE 3 в подарок</p>
                    <div className="text-2xl font-bold text-red-600">₽ 12,500</div>
                  </div>
                </div>

                {/* Duplicate slides for seamless loop */}
                <div className="flex-shrink-0 w-80 group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F4b42886ccd0846e8845f7fea196bdae6?format=webp&width=800"
                      alt="Grooming Kit Pro"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">Grooming Kit Pro</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">Профессиональн��й набор для ухода</p>
                    <div className="text-2xl font-bold text-red-600">₽ 8,900</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2Fad77a22293914f76ad5c86b0cc1cb048?format=webp&width=800"
                      alt="Apple Watch Series 10"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">Apple Watch Series 10</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">Rose Gold, Black 42MM/46MM</p>
                    <div className="text-2xl font-bold text-red-600">₽ 35,000</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-80 group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fc8bf4f4f123f490cafc5f12f207720b8%2F593de0ffc9344103bcb253bcf1c49c90?format=webp&width=800"
                      alt="PlayStation 5 Slim"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">PlayStation 5 Slim</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">Игровая консоль нового поколения</p>
                    <div className="text-2xl font-bold text-red-600">₽ 45,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white py-8 md:py-16 px-3 md:px-4 lg:px-8">
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
                        {['5 звезд', '4 звезды и выше', '3 звезды и выше', '2 звезды и выше', '1 звезда и в��ше', 'Без рейтинга'].map((rating, index) => (
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
                        {['Смартфоны', 'Телевизор��', 'Ноутбуки', 'Планшеты', 'Наушники', 'Умные час��', 'Игровые консоли', 'Фотоаппараты', 'Аксессуары', 'Все категории'].map((category, index) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-t border-gray-100">

              {/* Product 1 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Discount badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                  -10%
                </div>

                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                    alt={"Смарт Телевизор 55\""}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Смарт Телевизор 55"
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">(24)</span>
                  </div>

                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    4K Ultra HD с HDR
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm text-gray-400 line-through">$ 999</div>
                      <div className="text-lg font-bold text-gray-900">$ 899</div>
                    </div>
                    <div className="text-xs text-green-600 font-medium">В наличии</div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(products[0])}
                      className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      В корзину
                    </button>
                    <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Discount badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                  -15%
                </div>

                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                    alt="Смартфон Premium"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Смартфон Premium
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">(18)</span>
                  </div>

                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    Тройная камера, з��рядка 65W
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm text-gray-400 line-through">$ 699</div>
                      <div className="text-lg font-bold text-gray-900">$ 599</div>
                    </div>
                    <div className="text-xs text-green-600 font-medium">В наличии</div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(products[1])}
                      className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      В корзину
                    </button>
                    <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Discount badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                  -20%
                </div>

                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                    alt="Игровой Ноутбук"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Игровой Ноутбук
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(5)}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">(12)</span>
                  </div>

                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    RTX 4060, 16GB RAM, 144Hz
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm text-gray-400 line-through">$ 1,499</div>
                      <div className="text-lg font-bold text-gray-900">$ 1,299</div>
                    </div>
                    <div className="text-xs text-green-600 font-medium">В наличии</div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(products[2])}
                      className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      В корзину
                    </button>
                    <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Discount badge */}
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                  -25%
                </div>

                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                    alt="Беспроводные н��ушники"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Беспроводные наушники
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(4)}★
                    </div>
                    <span className="text-xs text-gray-500 ml-2">(35)</span>
                  </div>

                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    Premium с шумоподавлением
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm text-gray-400 line-through">$ 329</div>
                      <div className="text-lg font-bold text-gray-900">$ 249</div>
                    </div>
                    <div className="text-xs text-green-600 font-medium">В наличии</div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(products[3])}
                      className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      В корзину
                    </button>
                    <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 5 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                    alt="Умные часы"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Умные часы
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    Мониторинг здоровья и с��орт
                  </p>
                  <div className="text-lg font-bold text-gray-900">
                    $ 349
                  </div>

                  <button
                    onClick={() => addToCart(products[4])}
                    className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Заказ��ть
                  </button>
                </div>
              </div>

              {/* Product 6 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                    alt="Планшет Pro"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Пл��ншет Pro
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    Про��ессиональный с стилусом
                  </p>
                  <div className="text-lg font-bold text-gray-900">
                    $ 799
                  </div>

                  <button
                    onClick={() => addToCart(products[5])}
                    className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 7 - Duplicate of Product 1 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                    alt={"Смарт Телевизор 55\""}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    См��рт Телевизор 55"
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    4K Ultra HD с HDR
                  </p>
                  <div className="text-lg font-bold text-gray-900">
                    $ 899
                  </div>

                  <button
                    onClick={() => addToCart(products[0])}
                    className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    ��аказать
                  </button>
                </div>
              </div>

              {/* Product 8 - Duplicate of Product 2 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">

                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Смартфон Premium"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Смартфон Premium
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    Тройная камера, зарядка 65W
                  </p>
                  <div className="text-lg font-bold text-gray-900">
                    $ 599
                  </div>

                  <button
                    onClick={() => addToCart(products[1])}
                    className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 9 - Duplicate of Product 3 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="aspect-[4/3] bg-white/50 rounded-t-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 group-hover:from-white/40 group-hover:to-white/20 transition-all duration-500"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Игровой Ноутбу��"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Игровой Ноутбук
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    RTX 4060, 16GB RAM, 144Hz
                  </p>
                  <div className="text-lg font-bold text-gray-900">
                    $ 1,299
                  </div>

                  <button
                    onClick={() => addToCart(products[2])}
                    className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 10 - Duplicate of Product 4 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">

                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Беспроводные н��ушники"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Беспроводные наушники
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    Premium с шумоп��давлением
                  </p>
                  <div className="text-lg font-bold text-gray-900">
                    $ 249
                  </div>

                  <button
                    onClick={() => addToCart(products[3])}
                    className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 11 - Duplicate of Product 5 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">

                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Умные часы"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Умные часы
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    Мониторинг здоровья и спорт
                  </p>
                  <div className="text-lg font-bold text-gray-900">
                    $ 349
                  </div>

                  <button
                    onClick={() => addToCart(products[4])}
                    className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Заказать
                  </button>
                </div>
              </div>

              {/* Product 12 - Duplicate of Product 6 */}
              <div className="group bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                <div className="aspect-[4/3] bg-white p-4 relative overflow-hidden">

                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F5725480e4bdd4d65a8c642331347a0e5%2F56c3a3426be04faba489dd5938619520?format=webp&width=800"
                        alt="Планшет Pro"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    Планшет Pro
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    Профессиональный с стилусом
                  </p>
                  <div className="text-lg font-bold text-gray-900">
                    $ 799
                  </div>

                  <button
                    onClick={() => addToCart(products[5])}
                    className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Зака��ать
                  </button>
                </div>
              </div>





            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 md:p-8 lg:p-16 text-center">
          <p className="text-gray-600 uppercase tracking-wide text-sm">
            © 2024 ORZUTECH. БУХАРА, УЗБЕКИСТАН. ВСЕ ПРАВА ЗАЩИЩЕ��Ы.
          </p>
        </div>
      </div>

      {/* Jarvis AI Chat */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        >
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -top-12 right-0 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Чат с Джарвисом
          </div>
        </button>
      )}

      {/* ChatGPT Style Chat Interface */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Chat Header */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white border-b border-gray-200 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Джарвис ИИ</h2>
                <p className="text-sm text-gray-500">Он��айн</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto bg-gray-50" style={{ height: 'calc(100vh - 200px)' }}>
            <div className="max-w-4xl mx-auto px-3 md:px-4 py-4 md:py-6">
              {chatMessages.map((message) => (
                <div key={message.id} className="mb-6">
                  {message.isUser ? (
                    // User Message
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="flex-1 flex justify-end">
                        <div className="bg-green-500 text-white rounded-2xl rounded-tr-lg px-3 md:px-4 py-2 md:py-3 shadow-sm max-w-xs md:max-w-2xl">
                          <p className="leading-relaxed text-sm md:text-base">
                            {message.text}
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    // Jarvis Message
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-2xl rounded-tl-lg px-3 md:px-4 py-2 md:py-3 shadow-sm border border-gray-200 max-w-xs md:max-w-2xl">
                          <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                            {message.text}
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 ml-4">
                          Джарвис • {message.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="bg-white border-t border-gray-200 px-3 md:px-4 py-3 md:py-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-end space-x-3">
                <div className="flex-1 relative">
                  <div className="relative">
                    <textarea
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Напишите ваш вопрос..."
                      rows={1}
                      className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-3 pr-12 rounded-2xl border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-colors resize-none min-h-[48px] max-h-32"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = Math.min(target.scrollHeight, 128) + 'px';
                      }}
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!currentMessage.trim()}
                      className="absolute right-2 bottom-2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 text-center mt-2">
                Джа��вис может делать ошибки. Проверяйте важную информацию.
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
