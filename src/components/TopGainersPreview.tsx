import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTopGainers } from '../services/cryptoService'
import type { CryptoAsset } from '../services/cryptoService'
import { formatGHS, topGainers } from '../data/mockCrypto'

// Helper to convert mock data to API format
const convertMockToApiFormat = (mockData: typeof topGainers[0][]): CryptoAsset[] => {
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

const TopGainersPreview = () => {
  const [gainers, setGainers] = useState<CryptoAsset[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGainers = async () => {
      try {
        const response = await getTopGainers()
        if (response.success && response.data.length > 0) {
          setGainers(response.data.slice(0, 6))
        } else {
          // Fallback to mock data
          setGainers(convertMockToApiFormat(topGainers).slice(0, 6))
        }
      } catch (err) {
        // Fallback to mock data on error
        setGainers(convertMockToApiFormat(topGainers).slice(0, 6))
      } finally {
        setLoading(false)
      }
    }

    fetchGainers()
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-2">
              Today's Top Gainers
            </h2>
            <p className="text-text-secondary">
              Leading performers in the crypto market today
            </p>
          </div>
          <Link 
             to="/crypto/gainers" 
             className="btn btn-outline btn-sm group"
           >
             View all
             <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card p-5 animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-bg-secondary rounded-xl"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-bg-secondary rounded w-16"></div>
                    <div className="h-3 bg-bg-secondary rounded w-12"></div>
                  </div>
                </div>
                <div className="h-6 bg-bg-secondary rounded w-20 mb-2"></div>
                <div className="h-4 bg-bg-secondary rounded w-16"></div>
              </div>
            ))
          ) : (
            gainers.map((asset) => (
              <Link
                key={asset._id}
                to={`/crypto/${asset._id}`}
                className="card p-5 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-emerald-500/0 group-hover:from-cyan-500/5 group-hover:to-emerald-500/5 transition-colors duration-300" />
                <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
                       <img 
                         src={asset.image} 
                         alt={asset.name}
                         className="w-full h-full object-cover"
                         onError={(e) => {
                           e.currentTarget.src = `https://via.placeholder.com/40x40/0891b2/ffffff?text=${asset.symbol.slice(0, 2)}`
                         }}
                       />
                     </div>
                     <div className="min-w-0">
                       <p className="font-bold text-text truncate">{asset.symbol}</p>
                       <p className="text-xs text-text-muted truncate">{asset.name}</p>
                     </div>
                   </div>
                  <div className="mb-3">
                    <p className="font-bold text-xl text-text">{formatGHS(asset.price)}</p>
                  </div>
                  <div className="flex items-center gap-1">
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
                  <div className="absolute top-3 right-3">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyan-600 text-sm font-medium">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default TopGainersPreview
