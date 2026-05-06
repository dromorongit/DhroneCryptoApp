import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getNewListings } from '../services/cryptoService'
import type { CryptoAsset } from '../services/cryptoService'
import { formatGHS, newListings } from '../data/mockCrypto'

// Helper to convert mock data to API format
const convertMockToApiFormat = (mockData: typeof newListings[0][]): CryptoAsset[] => {
  return mockData.map((item) => ({
    _id: item.id,
    name: item.name,
    symbol: item.symbol,
    price: item.price,
    image: `https://via.placeholder.com/40?text=${item.symbol.slice(0, 2)}`,
    change24h: item.change24h,
    marketCap: item.marketCap,
    volume24h: item.volume24h,
    isNew: item.isNew,
  }))
}

const NewListingsPreview = () => {
  const [listings, setListings] = useState<CryptoAsset[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await getNewListings()
        if (response.success && response.data.length > 0) {
          setListings(response.data.slice(0, 6))
        } else {
          // Fallback to mock data
          setListings(convertMockToApiFormat(newListings).slice(0, 6))
        }
      } catch (err) {
        // Fallback to mock data on error
        setListings(convertMockToApiFormat(newListings).slice(0, 6))
      } finally {
        setLoading(false)
      }
    }

    fetchListings()
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">New Listings</h2>
          <Link to="/crypto/new" className="text-accent hover:text-accent-hover font-medium">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card p-4 animate-pulse">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-bg-secondary rounded-full"></div>
                  <div>
                    <div className="h-4 bg-bg-secondary rounded w-12 mb-1"></div>
                    <div className="h-3 bg-bg-secondary rounded w-16"></div>
                  </div>
                </div>
                <div className="h-5 bg-bg-secondary rounded w-20 mb-2"></div>
                <div className="h-4 bg-bg-secondary rounded w-12"></div>
              </div>
            ))
          ) : (
            listings.map((asset) => (
              <Link
                key={asset._id}
                to={`/crypto/${asset._id}`}
                className="card p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={asset.image} 
                    alt={asset.name}
                    className="w-10 h-10 rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/40?text=${asset.symbol.slice(0, 2)}`
                    }}
                  />
                  <div>
                    <p className="font-medium text-text">{asset.symbol}</p>
                    <p className="text-xs text-text-secondary">{asset.name}</p>
                  </div>
                </div>
                <p className="font-bold text-text mb-1">{formatGHS(asset.price)}</p>
                <span className={`font-medium text-sm ${
                  asset.change24h >= 0 ? 'text-success' : 'text-danger'
                }`}>
                  {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                </span>
                {asset.isNew && (
                  <span className="inline-block ml-2 px-2 py-0.5 bg-accent/10 text-accent text-xs rounded">
                    New
                  </span>
                )}
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default NewListingsPreview