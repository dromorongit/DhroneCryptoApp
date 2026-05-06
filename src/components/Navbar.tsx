import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/crypto', label: 'Markets' },
    { to: '/crypto/gainers', label: 'Top Gainers' },
    { to: '/crypto/new', label: 'New Listings' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-bg-card/80 backdrop-blur-xl border-b border-border/50 transition-all duration-300`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
            <span className="text-white font-extrabold text-lg tracking-tight">DC</span>
          </div>
          <span className="font-bold text-xl md:text-2xl text-text tracking-tight hidden sm:block bg-gradient-to-r from-text to-text/70 bg-clip-text">
            DhroneCrypto
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium text-text-secondary transition-all duration-200 hover:text-accent hover:bg-accent/5 
                 ${isActive ? 'text-accent' : ''} 
                 px-4 py-2 rounded-lg ${isActive ? 'bg-accent/10' : ''} flex items-center gap-2`
              }
              >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* User info or auth buttons */}
          {user ? (
            <>
              {/* User avatar/name */}
              <div className="hidden md:flex items-center gap-3">
                {/* User avatar placeholder */}
                <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-md shadow-cyan-500/20">
                  <span className="text-white font-bold text-sm">{user?.name?.charAt(0) ?? 'U'}</span>
                </div>
                <div className="hidden lg:block text-left">
                  <p className="font-semibold text-text text-sm">{user?.name ?? 'User'}</p>
                  <p className="text-xs text-text-muted">Account</p>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="hidden md:flex gap-2">
                <Link
                  to="/crypto/add"
                  className="btn btn-outline btn-sm px-4 py-2"
                >
                  Add Crypto
                </Link>
                <button onClick={handleLogout} className="btn btn-secondary btn-sm px-4 py-2">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="btn btn-secondary btn-sm px-4 py-2 hidden md:flex"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="btn btn-primary btn-sm px-4 py-2 hidden md:flex"
              >
                Register
              </Link>
            </>
          )}
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} user={user} onLogout={handleLogout} />
    </header>
  )
}

export default Navbar
