export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-white">TechStore</div>
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-purple-300 transition-colors">Каталог</a>
          <a href="#" className="hover:text-purple-300 transition-colors">О нас</a>
          <a href="#" className="hover:text-purple-300 transition-colors">Контакты</a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
          Корзина
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-20">
        <div className="lg:w-1/2 text-white space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Будущее
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}технологий{" "}
            </span>
            уже здесь
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Откройте для себя последние инновации в мире электроники.
            От смартфонов до умного дома — всё для вашей цифровой жизни.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Смотреть каталог
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Новинки
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            {/* Main Product Showcase */}
            <div className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8">
              <div className="text-center space-y-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                <h3 className="text-2xl font-bold text-white">iPhone 15 Pro</h3>
                <p className="text-purple-300">Титановый. Мощный. Профессиональный.</p>
                <div className="text-3xl font-bold text-white">от 99 990 ₽</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-50 animate-pulse delay-700"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-bold text-white">Быстрая доставка</h3>
            <p className="text-gray-400">Доставим ваш заказ за 1-2 дня по всей России</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-white">Гарантия качества</h3>
            <p className="text-gray-400">Официальная гарантия на всю технику</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-bold text-white">Премиум сервис</h3>
            <p className="text-gray-400">Персональный подход к каждому клиенту</p>
          </div>
        </div>
      </section>
    </main>
  )
}
