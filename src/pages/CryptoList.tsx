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
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
        <div className="container max-w-4xl mx-auto">
          <LoadingSkeleton />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
        <div className="container max-w-4xl mx-auto">
          <ErrorState message={error} />
        </div>
      </div>
    )
  }

  if (cryptos.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
        <div className="container max-w-4xl mx-auto">
          <EmptyState title="No cryptocurrencies found" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-cyan-50 via-white to-emerald-50">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text mb-4 tracking-tight">
            Crypto Markets
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Browse and track all available cryptocurrencies. Real-time prices, 24h changes, and detailed market data.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or symbol..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-lg w-full pl-12"
            />
            <svg className="w-4 h-4 text-text-muted absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {search && (
            <p className="text-sm text-text-muted mt-2 text-center">
              Found {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Crypto List */}
        <div className="card card-elevated overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider border-b border-border/50 bg-bg-secondary/50">
            <div className="col-span-5">Asset</div>
            <div className="col-span-3 text-right">Price</div>
            <div className="col-span-2 text-right">24h Change</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          <div className="divide-y divide-border/50">
            {filteredData.map((asset) => (
              <Link
                key={asset._id}
                to={`/crypto/${asset._id}`}
                className="block hover:bg-bg-secondary/50 transition-all duration-200"
              >
                <div className="grid grid-cols-12 gap-4 px-6 py-5 items-center">
                  <div className="col-span-12 md:col-span-5 flex items-center gap-3">
                    <img 
                      src={asset.image} 
                      alt={asset.name}
                      className="w-10 h-10 rounded-xl object-cover shadow-md"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/40x40/0891b2/ffffff?text=${asset.symbol.slice(0, 2)}`
                      }}
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-text">{asset.symbol}</p>
                      <p className="text-xs text-text-muted truncate max-w-[150px] md:max-w-none">{asset.name}</p>
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-3 text-right order-3 md:order-none">
                    <p className="font-bold text-text">{formatGHS(asset.price)}</p>
                  </div>
                  <div className="col-span-6 md:col-span-2 text-right order-4 md:order-none">
                    <span className={`inline-flex items-center font-bold ${
                      asset.change24h >= 0 ? 'text-success' : 'text-danger'
                    }`}>
                      {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                      {asset.change24h >= 0 ? (
                        <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-2 text-right order-5">
                    <span className="text-cyan-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-text-secondary">No cryptocurrencies found matching "{search}"</p>
            </div>
          )}
        </div>

        {/* Footer note */}
        <p className="text-center text-text-muted text-xs mt-6">
          Data is for demonstration purposes only. Not real-time market data.
        </p>
      </div>
    </div>
  )
}

export default CryptoList
