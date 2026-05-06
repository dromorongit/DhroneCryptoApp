import { Link } from 'react-router-dom'

const AdvancedToolsSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/30 via-white to-emerald-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(8,145,178,0.08),transparent)]" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-cyan-600">Premium Tools</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-text leading-tight tracking-tight">
              Powerful tools for smarter
              <span className="block bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                crypto decisions.
              </span>
            </h2>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              Track prices, compare market movements, and review demo asset performance through a clean, responsive dashboard experience designed for precision and clarity.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-text-secondary text-sm bg-bg-secondary rounded-lg px-4 py-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Real-time Data
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm bg-bg-secondary rounded-lg px-4 py-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Performance Tracking
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm bg-bg-secondary rounded-lg px-4 py-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Market Analysis
              </div>
            </div>
            
            <Link to="/crypto" className="btn btn-primary btn-lg group mt-2">
              <span className="flex items-center gap-2">
                Start exploring
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
          
          {/* Right side - Card mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Card frame */}
              <div className="card card-elevated p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5" />
                
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      <span className="text-white font-bold text-sm">DC</span>
                    </div>
                    <div>
                      <p className="font-bold text-text text-sm">Portfolio Overview</p>
                      <p className="text-xs text-text-muted">Live Updates</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-bg-secondary rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                
                {/* Balance section */}
                <div className="bg-gradient-to-br from-cyan-600/10 to-emerald-600/10 rounded-xl p-4 mb-4 border border-border/50">
                  <p className="text-xs text-text-muted mb-1">Total Value</p>
                  <p className="font-bold text-2xl text-text">$24,582.45</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-success text-sm font-medium">+3.2%</span>
                    <span className="text-text-muted text-xs">24h change</span>
                  </div>
                </div>
                
                {/* Asset list */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <span className="text-cyan-600 font-bold text-xs">BTC</span>
                      </div>
                      <div>
                        <p className="font-medium text-text text-sm">Bitcoin</p>
                        <p className="text-xs text-text-muted">$67,234.00</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-text text-sm">0.25 BTC</p>
                      <p className="text-success text-xs">+2.1%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <span className="text-emerald-600 font-bold text-xs">ETH</span>
                      </div>
                      <div>
                        <p className="font-medium text-text text-sm">Ethereum</p>
                        <p className="text-xs text-text-muted">$3,456.00</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-text text-sm">1.8 ETH</p>
                      <p className="text-success text-xs">+1.5%</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-xs">SOL</span>
                      </div>
                      <div>
                        <p className="font-medium text-text text-sm">Solana</p>
                        <p className="text-xs text-text-muted">$178.00</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-text text-sm">15 SOL</p>
                      <p className="text-danger text-xs">-0.8%</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-400/10 rounded-full blur-2xl"></div>
              </div>
              
              {/* Shadow effect */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 rounded-2xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvancedToolsSection
