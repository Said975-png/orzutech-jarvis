'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto bg-gray-900 border border-gray-800">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-8 border-b border-gray-800">
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
        </nav>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 p-8 lg:p-16 min-h-[70vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-12">
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
                Качество, надежность, инновации.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-black px-10 py-4 font-bold text-lg uppercase tracking-wide hover:bg-gray-100 transition-colors">
                Каталог товаров
              </button>
              <button className="border-2 border-white text-white px-10 py-4 font-bold text-lg uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
                Связаться с нами
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F02f225558365433abb0d2ad515b82942%2F52db23e5e3e24501b060c9ae46a778e6?format=webp&width=800"
                alt="Apple Products"
                className="max-w-[450px] lg:max-w-[550px] h-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
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
            <h3 className="text-white font-black text-xl mb-4 uppercase tracking-wide">ГАРАНТИЯ КАЧЕСТВА</h3>
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
            © 2024 ORZUTECH. БУХАРА, УЗБЕКИСТАН. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
        </div>
      </div>
    </main>
  )
}
