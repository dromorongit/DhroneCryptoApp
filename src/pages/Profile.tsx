import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { removeToken } from '../services/authService'

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
    removeToken()
    navigate('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        <div className="card p-8">
          <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Name
              </label>
              <p className="text-text">{user.name}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Email
              </label>
              <p className="text-text">{user.email}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Account Type
              </label>
              <p className="text-text">Demo Account</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Member Since
              </label>
              <p className="text-text">
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Student Project Demo'}
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <button
              onClick={handleLogout}
              className="btn btn-secondary"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile