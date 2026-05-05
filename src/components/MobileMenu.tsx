import { Link, NavLink } from 'react-router-dom'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const isAuthenticated = !!localStorage.getItem('token')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-64 bg-bg-card shadow-lg p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DC</span>
            </div>
            <span className="font-bold text-xl">DhroneCrypto</span>
          </div>
          <button onClick={onClose} className="p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `text-base font-medium ${isActive ? 'text-accent' : 'text-text-secondary'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/crypto"
            onClick={onClose}
            className={({ isActive }) =>
              `text-base font-medium ${isActive ? 'text-accent' : 'text-text-secondary'}`
            }
          >
            Markets
          </NavLink>
          <NavLink
            to="/crypto/gainers"
            onClick={onClose}
            className={({ isActive }) =>
              `text-base font-medium ${isActive ? 'text-accent' : 'text-text-secondary'}`
            }
          >
            Top Gainers
          </NavLink>
          <NavLink
            to="/crypto/new"
            onClick={onClose}
            className={({ isActive }) =>
              `text-base font-medium ${isActive ? 'text-accent' : 'text-text-secondary'}`
            }
          >
            New Listings
          </NavLink>
          {isAuthenticated && (
            <NavLink
              to="/crypto/add"
              onClick={onClose}
              className={({ isActive }) =>
                `text-base font-medium ${isActive ? 'text-accent' : 'text-text-secondary'}`
              }
            >
              Add Crypto
            </NavLink>
          )}
        </nav>

        <div className="mt-8 pt-8 border-t border-border flex flex-col gap-3">
          {isAuthenticated ? (
            <Link to="/profile" onClick={onClose} className="btn btn-primary w-full">
              Profile
            </Link>
          ) : (
            <>
              <Link to="/login" onClick={onClose} className="btn btn-secondary w-full">
                Login
              </Link>
              <Link to="/register" onClick={onClose} className="btn btn-primary w-full">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu