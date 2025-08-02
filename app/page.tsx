export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">OrzuTech</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Смартфоны</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Ноутбуки</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Планшеты</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Аксессуары</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Акции</a>
            </div>

            {/* Language Switcher & Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button className="px-3 py-1 bg-white rounded text-sm font-medium text-blue-600 shadow-sm">RU</button>
                <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-blue-600">UZ</button>
              </div>
              <button className="relative bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Корзина
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                🔥 Скидки до 30% на новые модели
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Технологии <span className="text-blue-600">нового</span> поколения
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Откройте для себя лучшие смартфоны, ноутбуки и гаджеты.
                Официальные устройства с гарантией и быстрой доставкой по всему Узбекистану.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Смотреть каталог
                </button>
                <button className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  Новинки недели
                </button>
              </div>
            </div>

            {/* Hero Product Showcase */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="text-center space-y-6">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="text-8xl">📱</div>
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">-25%</div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">iPhone 15 Pro Max</h3>
                    <p className="text-gray-600">256GB • Titanium Natural</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-blue-600">74,990,000 сум</span>
                      <span className="text-lg text-gray-400 line-through">99,990,000 сум</span>
                    </div>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors">
                      Купить сейчас
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">💰</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Популярные категории</h2>
            <p className="text-xl text-gray-600">Выберите устройство для ваших потребностей</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "📱", title: "Смартфоны", desc: "iPhone, Samsung, Xiaomi", count: "500+ моделей" },
              { icon: "💻", title: "Ноутбуки", desc: "MacBook, Asus, HP", count: "200+ моделей" },
              { icon: "📟", title: "Планшеты", desc: "iPad, Samsung Tab", count: "100+ моделей" },
              { icon: "🎧", title: "Аксессуары", desc: "Наушники, чехлы, зарядки", count: "1000+ товаров" }
            ].map((category, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                  <p className="text-gray-600">{category.desc}</p>
                  <p className="text-sm text-blue-600 font-medium">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Хиты продаж</h2>
              <p className="text-xl text-gray-600">Самые популярные устройства</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2">
              <span>Все хиты</span>
              <span>→</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "iPhone 15 Pro", price: "74,990,000", oldPrice: "79,990,000", image: "📱", rating: 5, badge: "ХИТ" },
              { name: "MacBook Air M2", price: "54,990,000", oldPrice: "", image: "💻", rating: 5, badge: "НОВИНКА" },
              { name: "AirPods Pro 2", price: "1,490,000", oldPrice: "1,690,000", image: "🎧", rating: 5, badge: "-12%" },
              { name: "iPad Air 5", price: "3,990,000", oldPrice: "", image: "📟", rating: 4, badge: "" }
            ].map((product, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                    {product.badge}
                  </div>
                )}

                <div className="relative p-6">
                  <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                    <span className="text-6xl">{product.image}</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>

                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">(127)</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-blue-600">{product.price} сум</span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">{product.oldPrice} сум</span>
                      )}
                    </div>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition-colors">
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают OrzuTech</h2>
            <p className="text-xl text-blue-100">Мы гарантируем лучший сервис в Узбекистане</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🚚", title: "Быстрая доставка", desc: "По Ташкенту в день заказа, по регионам 1-3 дня" },
              { icon: "🛡️", title: "Официальная гарантия", desc: "На все устройства от производителя" },
              { icon: "💳", title: "Рассрочка 0%", desc: "До 24 месяцев без переплаты" },
              { icon: "🎧", title: "Поддержка 24/7", desc: "Консультации и техническая помощь" }
            ].map((advantage, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl">{advantage.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{advantage.title}</h3>
                <p className="text-blue-100">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши покупатели</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Азиз Каримов", rating: 5, text: "Купил iPhone 15 Pro. Быстрая доставка, оригинальный товар. Рекомендую!", city: "Ташкент" },
              { name: "Дилноза Юсупова", rating: 5, text: "Отличный сервис! MacBook пришел на следующий день, все отлично упаковано.", city: "Самарканд" },
              { name: "Бахтиёр Рахимов", rating: 5, text: "Лучшие цены в городе! Взял в рассрочку без переплаты. Очень доволен.", city: "Бухара" }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <span className="text-2xl font-bold">OrzuTech</span>
              </div>
              <p className="text-gray-400">Лучший магазин электроники в Узбекистане</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span>📱</span>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <span>📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span>✈️</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">К��тегории</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Смартфоны</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ноутбуки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Планшеты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аксессуары</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +998 71 123 45 67</li>
                <li>📧 info@orzutech.uz</li>
                <li>📍 Ташкент, ул. Амира Темура</li>
                <li>🕐 Пн-Вс: 09:00-21:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OrzuTech. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
