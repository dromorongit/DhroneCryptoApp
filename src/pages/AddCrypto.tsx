import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addCrypto } from '../services/cryptoService'

const AddCrypto = () => {
  const [symbol, setSymbol] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await addCrypto({
        symbol,
        name,
        price: parseFloat(price),
        change24h: 0,
        image: `https://via.placeholder.com/32?text=${symbol.slice(0, 2)}`
      })

      if (response.success) {
        navigate('/crypto')
      }
    } catch (err) {
      setError('Failed to add crypto asset')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add Crypto Asset</h1>
        
        <div className="card p-6">
          {error && (
            <div className="mb-4 p-3 bg-danger/10 text-danger rounded-lg">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="symbol" className="block text-sm font-medium mb-2">
                Symbol
              </label>
              <input
                id="symbol"
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                className="input"
                placeholder="e.g., BTC"
                required
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="e.g., Bitcoin"
                required
              />
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium mb-2">
                Price (GHS)
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input"
                placeholder="e.g., 881887.94"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add Asset'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCrypto