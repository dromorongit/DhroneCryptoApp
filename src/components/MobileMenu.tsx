import { Link } from 'react-router-dom'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  user: any
  onLogout: () => void
}

const MobileMenu = ({ isOpen, onClose, user, onLogout }: MobileMenuProps) => {
  const handleLogout = () => {
    onLogout()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-[280px] bg-bg-card shadow-2xl p-6 space-y-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-white font-extrabold text-lg tracking-tight">DC</span>
            </div>
            <span className="font-bold text-xl text-text tracking-tight">DhroneCrypto</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-bg-secondary transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="space-y-2">
          {user ? (
            <>
              <div className="px-4 py-3 bg-bg-secondary/50 rounded-xl mb-4">
                <p className="font-semibold text-text text-sm">{user?.name ?? 'User'}</p>
                <p className="text-xs text-text-muted">{user?.email}</p>
              </div>
              <Link
                to="/crypto/add"
                className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-accent hover:bg-accent/5 rounded-xl transition-colors"
                onClick={onClose}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Crypto
              </Link>
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-accent hover:bg-accent/5 rounded-xl transition-colors"
                onClick={onClose}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-danger hover:bg-danger/5 rounded-xl transition-colors text-left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-accent hover:bg-accent/5 rounded-xl transition-colors"
                onClick={onClose}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Login
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-accent hover:bg-accent/5 rounded-xl transition-colors"
                onClick={onClose}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Register
              </Link>
            </>
          )}
        </nav>

        <div className="pt-6 border-t border-border/50 mt-auto">
          <p className="text-xs text-text-muted text-center">Demo App</p>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
