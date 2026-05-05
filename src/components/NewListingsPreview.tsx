import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getNewListings } from '../services/cryptoService'
import type { CryptoAsset } from '../services/cryptoService'
import { formatGHS } from '../data/mockCrypto'

const NewListingsPreview = () => {
  const [listings, setListings] = useState<CryptoAsset[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await getNewListings()
        if (response.success) {
          setListings(response.data.slice(0, 3))
        }
      } catch (err) {
        // Fallback to empty
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
            <div className="col-span-3 text-center text-text-secondary">Loading...</div>
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
                <span className="text-success font-medium text-sm">
                  +{asset.change24h.toFixed(2)}%
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