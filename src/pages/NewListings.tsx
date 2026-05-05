import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getNewListings } from '../services/cryptoService'
import { formatGHS } from '../data/mockCrypto'
import type { CryptoAsset } from '../services/cryptoService'
import LoadingSkeleton from '../components/LoadingSkeleton'
import ErrorState from '../components/ErrorState'
import EmptyState from '../components/EmptyState'

const NewListings = () => {
  const [listings, setListings] = useState<CryptoAsset[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await getNewListings()
        if (response.success) {
          setListings(response.data)
        }
      } catch (err) {
        setError('Failed to load new listings')
      } finally {
        setLoading(false)
      }
    }

    fetchListings()
  }, [])

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

  if (listings.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <EmptyState title="No new listings found" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">New Listings</h1>

        <div className="card overflow-hidden">
          <div className="grid grid-cols-3 gap-4 px-6 py-3 text-xs font-medium text-text-secondary uppercase border-b border-border">
            <div>Asset</div>
            <div className="text-right">Price</div>
            <div className="text-right">24h Change</div>
          </div>

          <div className="divide-y divide-border">
            {listings.map((asset) => (
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
                  <span className="font-medium text-success">
                    +{asset.change24h.toFixed(2)}%
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

export default NewListings