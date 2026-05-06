import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
  const navigate = useNavigate()
  const { user, loading, logout: authLogout } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login')
    }
  }, [loading, user, navigate])

  const handleLogout = () => {
    authLogout()
    navigate('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
        <div className="card card-elevated p-8 max-w-sm w-full text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
      <div className="container max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-500/20 mb-4">
            <span className="text-white font-extrabold text-2xl">{user.name?.charAt(0) ?? 'U'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-text tracking-tight mb-2">
            Your Profile
          </h1>
          <p className="text-text-secondary text-lg">
            Manage your account settings
          </p>
        </div>

        {/* Profile Card */}
        <div className="card card-elevated p-8">
          <div className="space-y-6">
            {/* User Info Section */}
            <div className="p-6 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 rounded-2xl border border-border/50">
              <h2 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Account Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text-secondary">Full Name</label>
                  <p className="text-text font-semibold text-lg">{user.name}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text-secondary">Email Address</label>
                  <p className="text-text font-semibold text-lg">{user.email}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text-secondary">Account Type</label>
                  <p className="text-text font-semibold text-lg">Demo Account</p>
                </div>
                
                <div className="space-y-1">
                  <label className="text-sm font-medium text-text-secondary">Member Since</label>
                  <p className="text-text font-semibold text-lg">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }) : 'Student Project Demo'}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-bg-secondary rounded-xl border border-border/50 text-center">
                <p className="text-2xl font-bold text-cyan-600">12</p>
                <p className="text-sm text-text-secondary">Assets Tracked</p>
              </div>
              <div className="p-4 bg-bg-secondary rounded-xl border border-border/50 text-center">
                <p className="text-2xl font-bold text-emerald-600">24</p>
                <p className="text-sm text-text-secondary">Transactions</p>
              </div>
              <div className="p-4 bg-bg-secondary rounded-xl border border-border/50 text-center">
                <p className="text-2xl font-bold text-text">98%</p>
                <p className="text-sm text-text-secondary">Uptime</p>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-text-secondary">
                  <p className="font-medium text-cyan-600 mb-1">Demo Account Notice</p>
                  <p>This is a demo account for educational purposes. All data is simulated and no real cryptocurrency transactions occur.</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-border/50">
              <button
                onClick={handleLogout}
                className="btn btn-secondary w-full group"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign Out
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-text-muted text-xs mt-6">
          DhroneCrypto App - Student Demo Project
        </p>
      </div>
    </div>
  )
}

export default Profile
