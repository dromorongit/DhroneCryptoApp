import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CryptoList from './pages/CryptoList'
import TopGainers from './pages/TopGainers'
import NewListings from './pages/NewListings'
import AddCrypto from './pages/AddCrypto'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route 
          path="profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route path="crypto" element={<CryptoList />} />
        <Route path="crypto/gainers" element={<TopGainers />} />
        <Route path="crypto/new" element={<NewListings />} />
        <Route 
          path="crypto/add" 
          element={
            <ProtectedRoute>
              <AddCrypto />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Routes>
  )
}

export default App