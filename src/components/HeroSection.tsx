import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-32 px-4 overflow-hidden">
      {/* Premium gradient background with subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-emerald-50/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(8,145,178,0.15),transparent)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-cyan-600">Live Markets Active</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-text leading-[1.1] tracking-tight mb-6">
              <span className="block bg-gradient-to-r from-text via-text to-text/80 bg-clip-text text-transparent">
                Buy, Track, and Explore
              </span>
              <span className="block bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Crypto with Confidence
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-text-secondary mb-8 max-w-2xl leading-relaxed">
              Secure, intuitive, and powerful tools for your cryptocurrency journey. 
              Join thousands of users managing their digital assets with precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link 
                to="/register" 
                className="btn btn-primary btn-lg px-8 py-5 text-lg font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 group"
              >
                <span className="flex items-center gap-2">
                  Get Started Free
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                to="/crypto" 
                className="btn btn-outline btn-lg px-8 py-5 text-lg font-semibold border-2 group"
              >
                <span className="flex items-center gap-2">
                  Explore Markets
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Email capture */}
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email for market insights"
                  className="input input-lg flex-1 text-lg px-6 py-4 shadow-sm"
                />
                <button className="btn btn-secondary btn-lg px-6 py-4 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-text-muted mt-3 text-center lg:text-left">
                Get weekly crypto insights delivered to your inbox
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Real-time Data</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Demo Only</span>
              </div>
            </div>
          </div>

          {/* Right side - App preview mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Phone mockup frame */}
              <div className="relative bg-bg-card rounded-[3rem] p-4 shadow-2xl border border-border">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-bg-card rounded-b-2xl border-b border-border border-x"></div>
                
                {/* App content */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl p-4 border border-border/50">
                  {/* App header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <span className="text-white font-bold text-sm">DC</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm text-text">DhroneCrypto</p>
                        <p className="text-xs text-text-muted">Live Markets</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-bg-secondary rounded-lg"></div>
                  </div>

                  {/* Balance card */}
                  <div className="bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-xl p-4 mb-4 shadow-lg shadow-cyan-500/20">
                    <p className="text-cyan-200 text-xs mb-1">Total Balance</p>
                    <p className="text-white font-bold text-2xl">$12,458.32</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-emerald-200 text-sm">+2.4% today</span>
                      <div className="w-8 h-4 bg-white/20 rounded-full">
                        <div className="w-3/4 h-full bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-bg-secondary rounded-lg p-2 text-center">
                      <p className="text-xs text-text-muted">BTC</p>
                      <p className="font-bold text-text text-sm">$67,234</p>
                      <p className="text-success text-xs">+1.2%</p>
                    </div>
                    <div className="bg-bg-secondary rounded-lg p-2 text-center">
                      <p className="text-xs text-text-muted">ETH</p>
                      <p className="font-bold text-text text-sm">$3,456</p>
                      <p className="text-success text-xs">+0.8%</p>
                    </div>
                    <div className="bg-bg-secondary rounded-lg p-2 text-center">
                      <p className="text-xs text-text-muted">SOL</p>
                      <p className="font-bold text-text text-sm">$178</p>
                      <p className="text-danger text-xs">-0.5%</p>
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="bg-bg-secondary rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <p className="text-xs text-text-secondary">Recent Activity</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">BTC Purchase</span>
                      <span className="font-semibold text-text">+$1,250.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-400/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent"></div>
    </section>
  )
}

export default HeroSection
