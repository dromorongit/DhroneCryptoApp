import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white border-t border-border/20">
      {/* Main footer content */}
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-extrabold text-lg">DC</span>
              </div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                DhroneCrypto
              </span>
            </div>
            <p className="text-text-secondary/70 text-sm leading-relaxed max-w-md mb-6">
              A student-built crypto dashboard for academic demonstration purposes. 
              Experience the future of digital asset management with our intuitive platform.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-text-secondary/60 text-sm">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Academic Project</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary/60 text-sm">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>Real-time Data</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/crypto" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  Markets
                </Link>
              </li>
              <li>
                <Link to="/crypto/gainers" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  Top Gainers
                </Link>
              </li>
              <li>
                <Link to="/crypto/new" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  New Listings
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary/70 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-cyan-500/50 rounded-full"></span>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="bg-cyan-500/5 rounded-xl p-6 border border-cyan-500/10">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-text-secondary/70 leading-relaxed">
                <p className="font-medium text-cyan-400 mb-1">Important Notice</p>
                <p>
                  DhroneCrypto App is a student demo project created for academic assessment. 
                  It is not a real cryptocurrency exchange and is not affiliated with Coinbase or any financial institution. 
                  All market data shown is for demonstration purposes only. Do not enter real personal, financial, wallet, or payment information.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-6 border-t border-border/20">
            <p className="text-text-secondary/50 text-xs">
              © 2026 DhroneCrypto. All rights reserved. Academic project.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-text-secondary/40 text-xs">Built with React & TypeScript</span>
              <span className="w-1 h-1 bg-border rounded-full"></span>
              <span className="text-text-secondary/40 text-xs">Educational Purposes Only</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
