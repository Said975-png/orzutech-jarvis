'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-4 lg:p-8">
      {/* Main Dark Card */}
      <div className="max-w-7xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 lg:p-8 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OT</span>
            </div>
            <span className="text-white font-bold text-xl">ORZUTECH</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8 text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Главная</a>
            <a href="#" className="hover:text-white transition-colors">О нас</a>
            <a href="#" className="hover:text-white transition-colors">Каталог</a>
            <a href="#" className="hover:text-white transition-colors">Гарантия</a>
            <a href="#" className="hover:text-white transition-colors">Блог</a>
          </div>
          
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
            Контакты
          </button>
        </nav>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 p-6 lg:p-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-gray-400 font-medium tracking-wider uppercase">
                150+ довольных клиентов
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                Покупки с нами
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Без Границ
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg">
                Упрощенная покупка техники с 
                беспрецедентным доступом к рынку через ORZUTECH
              </p>
            </div>
            
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
              <span>Начать покупки</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Content - 3D Product Display */}
          <div className="flex justify-center items-center relative">
            <div className="relative">
              {/* Main Product Image */}
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F02f225558365433abb0d2ad515b82942%2F52db23e5e3e24501b060c9ae46a778e6?format=webp&width=800"
                alt="Apple Products"
                className="max-w-[400px] lg:max-w-[500px] h-auto object-contain relative z-10 drop-shadow-2xl"
              />
              
              {/* Floating 3D Elements */}
              <div className="absolute top-10 -left-10 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 rotate-12 animate-float"></div>
              <div className="absolute top-32 -right-8 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl backdrop-blur-sm border border-white/10 -rotate-12 animate-float animation-delay-500"></div>
              <div className="absolute bottom-20 -left-6 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-lg backdrop-blur-sm border border-white/10 rotate-45 animate-float animation-delay-1000"></div>
              
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-transparent to-blue-500/30 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 p-6 lg:p-12 pt-0">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Быстрый обмен</h3>
            <p className="text-gray-400 text-sm">
              Быст��ый обмен старых устройств на новые с реальными мировыми брендами.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Общая гарантия</h3>
            <p className="text-gray-400 text-sm">
              Гарантия через проверенных партнеров на фракционализацию физических активов.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Честность продаж</h3>
            <p className="text-gray-400 text-sm">
              Прозрачность в каждой транзакции, подкрепленная аудиторскими проверками.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </main>
  )
}
