import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCryptos } from '../services/cryptoService'
import { formatGHS } from '../data/mockCrypto'
import type { CryptoAsset } from '../services/cryptoService'
import LoadingSkeleton from '../components/LoadingSkeleton'
import ErrorState from '../components/ErrorState'
import EmptyState from '../components/EmptyState'

const CryptoList = () => {
  const [search, setSearch] = useState('')
  const [cryptos, setCryptos] = useState<CryptoAsset[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await getCryptos()
        if (response.success) {
          setCryptos(response.data)
        }
      } catch (err) {
        setError('Failed to load cryptocurrencies')
      } finally {
        setLoading(false)
      }
    }

    fetchCryptos()
  }, [])

  const filteredData = cryptos.filter(
    (asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <LoadingSkeleton />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <ErrorState message={error} />
        </div>
      </div>
    )
  }

  if (cryptos.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <EmptyState title="No cryptocurrencies found" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Markets</h1>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input max-w-sm"
          />
        </div>

        <div className="card overflow-hidden">
          <div className="grid grid-cols-3 gap-4 px-6 py-3 text-xs font-medium text-text-secondary uppercase border-b border-border">
            <div>Asset</div>
            <div className="text-right">Price</div>
            <div className="text-right">24h Change</div>
          </div>

          <div className="divide-y divide-border">
            {filteredData.map((asset) => (
              <Link
                key={asset._id}
                to={`/crypto/${asset._id}`}
                className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-bg-secondary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={asset.image} 
                    alt={asset.name}
                    className="w-8 h-8 rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/32?text=${asset.symbol.slice(0, 2)}`
                    }}
                  />
                  <div>
                    <p className="font-medium text-text">{asset.symbol}</p>
                    <p className="text-xs text-text-secondary">{asset.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-text">{formatGHS(asset.price)}</p>
                </div>
                <div className="text-right">
                  <span className={`font-medium ${
                    asset.change24h >= 0 ? 'text-success' : 'text-danger'
                  }`}>
                    {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoList