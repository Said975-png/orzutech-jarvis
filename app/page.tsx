'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.observe').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-6 h-6 pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
          background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.2) 70%, transparent 100%)',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out'
        }}
      />

      <main className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-3xl border-b border-white/10 shadow-2xl shadow-black/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              {/* Logo */}
              <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl rotate-12 group-hover:rotate-45 transition-all duration-700 shadow-lg shadow-blue-500/30"></div>
                    <div className="absolute inset-0 w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 rounded-2xl rotate-12 group-hover:rotate-45 transition-all duration-700 scale-75 opacity-80"></div>
                    <div className="absolute inset-0 w-14 h-14 bg-white/20 rounded-2xl rotate-12 group-hover:rotate-45 transition-all duration-700 scale-50"></div>
                  </div>
                  <div>
                    <span className="text-3xl font-black tracking-tight block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">ORZU</span>
                      <span className="text-white">TECH</span>
                    </span>
                    <div className="text-xs text-white/60 font-medium tracking-widest uppercase">Electronics Store</div>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="hidden lg:flex items-center">
                <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
                  {[
                    { name: 'Смартфоны', icon: '📱' },
                    { name: 'Ноутбуки', icon: '💻' },
                    { name: 'Планшеты', icon: '📟' },
                    { name: 'Аксессуары', icon: '🎧' },
                    { name: 'Акции', icon: '🔥' }
                  ].map((item, index) => (
                    <a
                      key={item.name}
                      href="#"
                      className="group relative flex items-center space-x-2 px-4 py-3 rounded-xl text-white/80 hover:text-white font-medium tracking-wide transition-all duration-300 hover:bg-white/10"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="text-sm">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                {/* Search Button */}
                <button className="relative group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">🔍</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </button>

                {/* Cart Button */}
                <button className="relative group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">🛒</span>
                  <span className="relative">
                    Корзина
                    <div className="absolute -top-2 -right-3 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">2</div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </button>

                {/* Mobile Menu Button */}
                <button className="lg:hidden relative group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col space-y-1.5">
                    <div className="w-5 h-0.5 bg-white group-hover:bg-blue-400 transition-colors duration-300"></div>
                    <div className="w-5 h-0.5 bg-white group-hover:bg-purple-400 transition-colors duration-300"></div>
                    <div className="w-5 h-0.5 bg-white group-hover:bg-pink-400 transition-colors duration-300"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>
        </nav>

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center">
            {/* Content */}
            <div className="space-y-8 observe opacity-0 translate-y-20 transition-all duration-1000 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">New Collection Available</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="block overflow-hidden">
                  <span className="block animate-slide-up text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">ORZUTECH</span>
                </span>
              </h1>

              <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto animate-fade-in animation-delay-600">
                Experience the next generation of consumer electronics.
                Where innovation meets design in perfect harmony.
              </p>

              <div className="flex items-center justify-center space-x-6 animate-fade-in animation-delay-800">
                <button className="group relative overflow-hidden bg-white text-black px-10 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/25">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Collection</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>

                <button className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group">
                  <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                    <span className="text-xl">▶</span>
                  </div>
                  <span className="font-medium">Watch Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20 observe opacity-0 translate-y-20 transition-all duration-1000">
              <h2 className="text-5xl lg:text-7xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Featured</span>
                <span className="text-white"> Products</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Cutting-edge technology designed for the future
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { name: "iPhone 15 Pro", category: "Smartphone", price: "$999", image: "📱", gradient: "from-blue-500 to-cyan-500" },
                { name: "MacBook Pro", category: "Laptop", price: "$1,999", image: "💻", gradient: "from-purple-500 to-pink-500" },
                { name: "AirPods Pro", category: "Audio", price: "$249", image: "🎧", gradient: "from-green-500 to-emerald-500" }
              ].map((product, index) => (
                <div 
                  key={index} 
                  className="group observe opacity-0 translate-y-20 transition-all duration-1000 cursor-pointer"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                    <div className="relative mb-8">
                      <div className={`w-full h-64 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-500`}>
                        <span className="text-8xl">{product.image}</span>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                        New
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-white/60 mb-1">{product.category}</div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {product.name}
                        </h3>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-white">{product.price}</span>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="observe opacity-0 translate-x-20 transition-all duration-1000">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12">
                    <div className="grid grid-cols-2 gap-8">
                      {[
                        { icon: "⚡", label: "5G Speed", value: "2.4 Gbps" },
                        { icon: "🔋", label: "Battery", value: "All Day" },
                        { icon: "📸", label: "Camera", value: "48MP Pro" },
                        { icon: "🛡️", label: "Security", value: "Face ID" }
                      ].map((spec, index) => (
                        <div key={index} className="text-center space-y-3">
                          <div className="text-4xl">{spec.icon}</div>
                          <div>
                            <div className="text-2xl font-bold text-white">{spec.value}</div>
                            <div className="text-sm text-white/60">{spec.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 observe opacity-0 translate-x-20 transition-all duration-1000 animation-delay-300">
                <h2 className="text-5xl lg:text-7xl font-black leading-tight">
                  <span className="text-white">Beyond</span><br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expectations</span>
                </h2>
                
                <p className="text-xl text-white/70 leading-relaxed">
                  Experience technology that adapts to your lifestyle. 
                  Every detail crafted for perfection, every feature designed for the future.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Premium materials and precision engineering",
                    "AI-powered performance optimization",
                    "Seamless ecosystem integration"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl"></div>
                  <span className="text-2xl font-black">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Orzu</span>
                    <span className="text-white">Tech</span>
                  </span>
                </div>
                <p className="text-white/60 max-w-md">
                  Pioneering the future of technology with innovative products that enhance human potential.
                </p>
                <div className="flex space-x-4">
                  {['📱', '📷', '✈️'].map((icon, index) => (
                    <a key={index} href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                      <span className="text-xl">{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-6">Products</h3>
                <ul className="space-y-3 text-white/60">
                  {['Smartphones', 'Laptops', 'Audio', 'Accessories'].map(item => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-6">Support</h3>
                <ul className="space-y-3 text-white/60">
                  {['Contact', 'Warranty', 'Returns', 'FAQ'].map(item => (
                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40">
              <p>&copy; 2024 OrzuTech. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
