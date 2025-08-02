'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const matrixRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = matrixRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      ctx!.fillStyle = '#00ff41';
      ctx!.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx!.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      {/* Matrix Background */}
      <canvas 
        ref={matrixRef}
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
      />

      <main className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Scan Lines */}
        <div className="fixed inset-0 pointer-events-none z-10 opacity-30">
          <div className="scan-lines"></div>
        </div>

        {/* Grid Background */}
        <div className="fixed inset-0 pointer-events-none z-5 opacity-10">
          <div className="tech-grid"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-black border-2 border-cyan-500 rounded-lg flex items-center justify-center group-hover:border-cyan-300 transition-all duration-300">
                      <div className="w-8 h-8 bg-cyan-500 rounded-sm opacity-80 animate-pulse"></div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <span className="text-2xl font-mono font-bold tracking-wider text-cyan-400">
                      ORZUTECH<span className="text-red-500 animate-pulse">_</span>
                    </span>
                    <div className="text-xs text-cyan-600 font-mono tracking-widest uppercase">
                      &gt; SYS.ELECTRONICS.STORE
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="hidden lg:flex items-center">
                <div className="flex items-center space-x-1 bg-black/60 border border-cyan-500/30 rounded-lg p-1">
                  {[
                    { name: 'SMARTPHONES', code: 'SM01' },
                    { name: 'LAPTOPS', code: 'LP02' },
                    { name: 'TABLETS', code: 'TB03' },
                    { name: 'AUDIO', code: 'AU04' },
                    { name: 'SPECIAL', code: 'SP05' }
                  ].map((item, index) => (
                    <a 
                      key={item.code}
                      href="#" 
                      className="group relative px-4 py-2 font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10 rounded"
                    >
                      <span className="relative z-10">
                        [{item.code}] {item.name}
                      </span>
                      <div className="absolute inset-0 bg-cyan-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Control Panel */}
              <div className="flex items-center space-x-4">
                {/* System Status */}
                <div className="hidden lg:flex items-center space-x-2 px-3 py-2 bg-black/60 border border-green-500/30 rounded">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-green-400">ONLINE</span>
                </div>

                {/* Cart Terminal */}
                <button className="relative group flex items-center space-x-3 bg-black border-2 border-cyan-500 px-4 py-2 rounded font-mono text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 transition-all duration-300">
                  <span className="text-sm">[CART]</span>
                  <div className="relative">
                    <span className="text-lg">◼</span>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-black text-xs rounded-full flex items-center justify-center font-bold">2</div>
                  </div>
                  <div className="absolute inset-0 bg-cyan-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Access Control */}
                <button className="lg:hidden relative group w-10 h-10 bg-black border border-cyan-500 rounded flex items-center justify-center hover:border-cyan-300 transition-all duration-300">
                  <div className="flex flex-col space-y-1">
                    <div className="w-4 h-0.5 bg-cyan-500 group-hover:bg-cyan-300 transition-colors duration-300"></div>
                    <div className="w-4 h-0.5 bg-cyan-500 group-hover:bg-cyan-300 transition-colors duration-300"></div>
                    <div className="w-4 h-0.5 bg-cyan-500 group-hover:bg-cyan-300 transition-colors duration-300"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="border-t border-cyan-500/30 bg-black/80">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center space-x-6 text-cyan-600">
                <span>&gt; STATUS: CONNECTED</span>
                <span>&gt; USERS: 1,337</span>
                <span>&gt; UPTIME: 99.9%</span>
              </div>
              <div className="text-green-400 animate-pulse">
                █ SYSTEM OPERATIONAL
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Terminal */}
        <section className="relative min-h-screen flex items-center justify-center pt-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="bg-black/80 border-2 border-cyan-500 rounded-lg p-8 backdrop-blur-md">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyan-500/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-cyan-400 font-mono text-sm ml-4">ORZUTECH_MAIN_TERMINAL</span>
                </div>
                <div className="text-cyan-600 font-mono text-xs">
                  SESSION: {new Date().toLocaleTimeString()}
                </div>
              </div>

              {/* Terminal Content */}
              <div className="space-y-6 font-mono">
                <div className="text-green-400 text-sm">
                  <span className="text-cyan-400">user@orzutech:~$</span> initialize_store
                </div>
                
                <div className="space-y-2 text-cyan-300">
                  <div>&gt; Loading quantum electronics database...</div>
                  <div>&gt; Establishing neural network connections...</div>
                  <div>&gt; Activating holographic display systems...</div>
                  <div className="text-green-400">&gt; INITIALIZATION COMPLETE</div>
                </div>

                <div className="text-center space-y-8 py-8">
                  <h1 className="text-6xl lg:text-8xl font-black font-mono tracking-wider text-cyan-400 relative">
                    <span className="glow-text">ORZUTECH</span>
                    <div className="absolute inset-0 text-cyan-600 opacity-50 transform translate-x-1 translate-y-1">
                      ORZUTECH
                    </div>
                  </h1>
                  
                  <div className="text-xl text-cyan-600 font-mono max-w-2xl mx-auto leading-relaxed">
                    &gt; QUANTUM-ENHANCED ELECTRONICS DISTRIBUTION SYSTEM<br/>
                    &gt; NEURAL INTERFACE COMMERCE PLATFORM v2.3.7<br/>
                    &gt; AUTHORIZED PERSONNEL ONLY
                  </div>
                  
                  <div className="flex items-center justify-center space-x-6 mt-12">
                    <button className="group relative bg-black border-2 border-cyan-500 px-8 py-4 font-mono text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 transition-all duration-300">
                      <span className="relative z-10">[ENTER_SYSTEM]</span>
                      <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <button className="group flex items-center space-x-3 text-cyan-600 hover:text-cyan-400 transition-colors font-mono">
                      <div className="w-8 h-8 border-2 border-cyan-600 group-hover:border-cyan-400 rounded flex items-center justify-center transition-colors">
                        <span className="text-sm">▶</span>
                      </div>
                      <span>[VIEW_DEMO]</span>
                    </button>
                  </div>
                </div>

                <div className="text-green-400 text-sm animate-pulse">
                  <span className="text-cyan-400">user@orzutech:~$</span> <span className="animate-pulse">█</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Data Streams */}
          <div className="absolute top-1/4 right-8 space-y-4 text-xs font-mono text-cyan-600 opacity-60">
            <div className="animate-pulse">DATA_STREAM_01: ACTIVE</div>
            <div className="animate-pulse animation-delay-500">CPU_USAGE: 23.7%</div>
            <div className="animate-pulse animation-delay-1000">MEMORY: 8.2GB/16GB</div>
            <div className="animate-pulse animation-delay-1500">NETWORK: 847.3MB/s</div>
          </div>
        </section>

        {/* Product Database */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-black font-mono mb-6 text-cyan-400">
                <span className="glow-text">PRODUCT_DATABASE</span>
              </h2>
              <p className="text-xl text-cyan-600 font-mono max-w-2xl mx-auto">
                &gt; QUANTUM-ENCRYPTED INVENTORY SYSTEMS
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { id: 'DEV001', name: 'iPhone 15 Pro', category: 'SMARTPHONE', price: 999, status: 'ACTIVE' },
                { id: 'DEV002', name: 'MacBook Pro', category: 'LAPTOP', price: 1999, status: 'ACTIVE' },
                { id: 'DEV003', name: 'AirPods Pro', category: 'AUDIO', price: 249, status: 'LIMITED' }
              ].map((product, index) => (
                <div 
                  key={product.id} 
                  className="group bg-black/80 border-2 border-cyan-500/50 hover:border-cyan-400 rounded-lg p-6 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  {/* Product Header */}
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-500/30">
                    <span className="text-cyan-400 font-mono text-sm">[{product.id}]</span>
                    <div className={`px-2 py-1 rounded text-xs font-mono ${
                      product.status === 'ACTIVE' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {product.status}
                    </div>
                  </div>

                  {/* Product Display */}
                  <div className="relative mb-6">
                    <div className="w-full h-48 bg-black border border-cyan-500/30 rounded flex items-center justify-center relative overflow-hidden">
                      <div className="text-6xl opacity-60">
                        {index === 0 ? '📱' : index === 1 ? '💻' : '🎧'}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute top-2 right-2 bg-red-500 text-black text-xs px-2 py-1 rounded font-mono font-bold">
                      NEW
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-cyan-600 font-mono mb-1">{product.category}</div>
                      <h3 className="text-xl font-bold font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black font-mono text-green-400">${product.price}</span>
                      <button className="bg-black border border-cyan-500 text-cyan-400 px-4 py-2 rounded font-mono text-sm hover:border-cyan-300 hover:text-cyan-300 transition-all duration-300">
                        [ADD_TO_CART]
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System Specifications */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl lg:text-7xl font-black font-mono leading-tight text-cyan-400">
                  <span className="glow-text">SYSTEM</span><br/>
                  <span className="text-green-400">SPECS</span>
                </h2>
                
                <p className="text-xl text-cyan-600 font-mono leading-relaxed">
                  &gt; NEURAL-ENHANCED PROCESSING UNITS<br/>
                  &gt; QUANTUM ENTANGLEMENT PROTOCOLS<br/>
                  &gt; BIOMETRIC SECURITY SYSTEMS
                </p>
                
                <div className="space-y-4">
                  {[
                    'HOLOGRAPHIC DISPLAY TECHNOLOGY',
                    'AI-POWERED PERFORMANCE OPTIMIZATION',
                    'QUANTUM ENCRYPTION PROTOCOLS'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-black text-xs font-bold">✓</span>
                      </div>
                      <span className="text-cyan-400 font-mono">&gt; {feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="bg-black border-2 border-green-500 text-green-400 px-8 py-4 rounded font-mono hover:border-green-300 hover:text-green-300 transition-all duration-300">
                  [ACCESS_DOCUMENTATION]
                </button>
              </div>

              <div className="relative">
                <div className="bg-black/80 border-2 border-cyan-500 rounded-lg p-8 backdrop-blur-md">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { icon: '⚡', label: 'PROCESSING', value: '2.4 THz', unit: 'QUANTUM' },
                      { icon: '🔋', label: 'POWER_CORE', value: 'UNLIMITED', unit: 'FUSION' },
                      { icon: '📡', label: 'BANDWIDTH', value: '847.3', unit: 'GB/s' },
                      { icon: '🛡️', label: 'SECURITY', value: 'LEVEL_9', unit: 'CLASSIFIED' }
                    ].map((spec, index) => (
                      <div key={index} className="text-center space-y-3 p-4 bg-black/60 border border-cyan-500/30 rounded">
                        <div className="text-3xl opacity-60">{spec.icon}</div>
                        <div>
                          <div className="text-lg font-bold font-mono text-cyan-400">{spec.value}</div>
                          <div className="text-xs text-cyan-600 font-mono">{spec.label}</div>
                          <div className="text-xs text-green-400 font-mono">{spec.unit}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Footer */}
        <footer className="relative py-20 border-t-2 border-cyan-500/30 bg-black/95">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded"></div>
                  <span className="text-xl font-mono font-bold text-cyan-400">
                    ORZUTECH_TERMINAL
                  </span>
                </div>
                <p className="text-cyan-600 font-mono max-w-md text-sm">
                  &gt; ADVANCED NEURAL COMMERCE SYSTEM<br/>
                  &gt; QUANTUM-ENCRYPTED TRANSACTIONS<br/>
                  &gt; AUTHORIZED ACCESS ONLY
                </p>
                <div className="flex space-x-4">
                  {['📡', '🔒', '⚡'].map((icon, index) => (
                    <a key={index} href="#" className="w-10 h-10 bg-black border border-cyan-500 rounded flex items-center justify-center hover:border-cyan-300 transition-colors">
                      <span className="text-lg">{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-cyan-400 font-mono font-bold mb-6">[SYSTEMS]</h3>
                <ul className="space-y-3 text-cyan-600 font-mono text-sm">
                  {['SMARTPHONES', 'LAPTOPS', 'AUDIO', 'ACCESSORIES'].map(item => (
                    <li key={item}><a href="#" className="hover:text-cyan-400 transition-colors">&gt; {item}</a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-cyan-400 font-mono font-bold mb-6">[SUPPORT]</h3>
                <ul className="space-y-3 text-cyan-600 font-mono text-sm">
                  {['CONTACT', 'WARRANTY', 'RETURNS', 'FAQ'].map(item => (
                    <li key={item}><a href="#" className="hover:text-cyan-400 transition-colors">&gt; {item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-cyan-500/30 mt-16 pt-8 text-center text-cyan-600 font-mono text-sm">
              <p>&copy; 2024 ORZUTECH_SYSTEMS. ALL_RIGHTS_RESERVED. UNAUTHORIZED_ACCESS_PROHIBITED.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
