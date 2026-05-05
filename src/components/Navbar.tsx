import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isAuthenticated = !!localStorage.getItem('token')

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/crypto', label: 'Markets' },
    { to: '/crypto/gainers', label: 'Top Gainers' },
    { to: '/crypto/new', label: 'New Listings' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DC</span>
          </div>
          <span className="font-bold text-xl text-text hidden sm:block">DhroneCrypto</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : 'text-text-secondary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link
                to="/crypto/add"
                className="hidden sm:inline-flex btn btn-outline text-sm"
              >
                Add Crypto
              </Link>
              <Link to="/profile" className="btn btn-primary text-sm">
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-secondary text-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary text-sm">
                Sign up
              </Link>
            </>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-bg-secondary"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}

export default Navbar