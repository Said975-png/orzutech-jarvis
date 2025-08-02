export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 backdrop-blur-lg bg-black/30 border-b border-purple-500/20">
        <div className="text-3xl font-bold text-white animate-fadeInLeft">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tech</span>
          <span className="text-white">Store</span>
        </div>

        <div className="hidden md:flex space-x-8 text-white animate-fadeInUp animation-delay-500">
          <a href="#" className="relative group">
            <span className="hover:text-purple-300 transition-all duration-300">Каталог</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="relative group">
            <span className="hover:text-purple-300 transition-all duration-300">О нас</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="relative group">
            <span className="hover:text-purple-300 transition-all duration-300">Контакты</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <button className="relative group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animate-fadeInRight">
          <span className="relative z-10">Корзина</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-20 min-h-screen">
        <div className="lg:w-1/2 text-white space-y-10 animate-fadeInLeft animation-delay-700">
          <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
            <span className="inline-block animate-slideInUp">Будущее</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient-x inline-block animate-slideInUp animation-delay-200">
              технологий
            </span><br/>
            <span className="inline-block animate-slideInUp animation-delay-400">уж�� здесь</span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed animate-fadeInUp animation-delay-1000 max-w-lg">
            Погрузитесь в мир инноваций. Откройте для себя технологии будущего, которые изменят вашу жизнь уже сегодня.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp animation-delay-1200">
            <button className="relative group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10">Исследовать каталог</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg"></div>
            </button>

            <button className="relative group border-2 border-purple-400 text-purple-400 hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">Новинки</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0 animate-fadeInRight animation-delay-1000">
          <div className="relative">
            {/* Main Product Showcase with Advanced Animations */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-500 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30">

                {/* Floating Product */}
                <div className="text-center space-y-8">
                  <div className="relative mx-auto w-56 h-56 animate-float">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center shadow-2xl border border-purple-500/20">
                      <div className="text-8xl animate-bounce" style={{animationDuration: '3s'}}>📱</div>
                    </div>

                    {/* Orbiting Elements */}
                    <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"></div>
                    <div className="absolute bottom-8 left-2 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-ping animation-delay-500"></div>
                    <div className="absolute top-1/2 right-2 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping animation-delay-1000"></div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white animate-slideInUp">iPhone 15 Pro</h3>
                    <p className="text-purple-300 text-lg animate-slideInUp animation-delay-200">Титановый корпус. Чип A17 Pro. Профессиональная камера.</p>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-slideInUp animation-delay-400">
                      от 99 990 ₽
                    </div>

                    <button className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-slideInUp animation-delay-600">
                      Купить сейчас
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-60 animate-spin" style={{animationDuration: '15s'}}></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-40 animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-50 animate-bounce animation-delay-500"></div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="relative z-10 px-8 py-24 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-white mb-6">
            Почему выбирают <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">нас</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Мы предлагаем не просто покупку, а полноценный технологический опыт
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { icon: "🚚", title: "Молниеносная доставка", desc: "Доставка в день заказа по Москве, 1-2 дня по России", delay: "0" },
            { icon: "🛡️", title: "Гарантия премиум", desc: "Расширенная гарантия и техподдержка 24/7", delay: "200" },
            { icon: "💎", title: "VIP обслуживание", desc: "Персональный менеджер и эксклюзивные предложения", delay: "400" }
          ].map((feature, index) => (
            <div key={index} className={`group text-center space-y-6 animate-fadeInUp animation-delay-${feature.delay}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
