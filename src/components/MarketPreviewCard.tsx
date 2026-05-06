import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCryptos, getTopGainers, getNewListings } from '../services/cryptoService'
import type { CryptoAsset } from '../services/cryptoService'
import { formatGHS, mockCryptoData, topGainers, newListings } from '../data/mockCrypto'

type TabType = 'tradable' | 'gainers' | 'new'

// Helper to convert mock data to API format
const convertMockToApiFormat = (mockData: typeof mockCryptoData[0][]): CryptoAsset[] => {
  return mockData.map((item) => ({
    _id: item.id,
    name: item.name,
    symbol: item.symbol,
    price: item.price,
    image: `https://via.placeholder.com/32?text=${item.symbol.slice(0, 2)}`,
    change24h: item.change24h,
    marketCap: item.marketCap,
    volume24h: item.volume24h,
    isNew: item.isNew,
  }))
}

const MarketPreviewCard = () => {
  const [activeTab, setActiveTab] = useState<TabType>('tradable')
  const [tradableData, setTradableData] = useState<CryptoAsset[]>([])
  const [gainersData, setGainersData] = useState<CryptoAsset[]>([])
  const [newListData, setNewListData] = useState<CryptoAsset[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tradableRes, gainersRes, newListingsRes] = await Promise.all([
          getCryptos(),
          getTopGainers(),
          getNewListings()
        ])
        
        if (tradableRes.success && tradableRes.data.length > 0) {
          setTradableData(tradableRes.data.slice(0, 6))
        } else {
          // Fallback to mock data
          setTradableData(convertMockToApiFormat(mockCryptoData).slice(0, 6))
        }
        
        if (gainersRes.success && gainersRes.data.length > 0) {
          setGainersData(gainersRes.data.slice(0, 6))
        } else {
          // Fallback to mock data
          setGainersData(convertMockToApiFormat(topGainers).slice(0, 6))
        }
        
        if (newListingsRes.success && newListingsRes.data.length > 0) {
          setNewListData(newListingsRes.data.slice(0, 6))
        } else {
          // Fallback to mock data
          setNewListData(convertMockToApiFormat(newListings).slice(0, 6))
        }
      } catch (err) {
        // Fallback to mock data on error
        setTradableData(convertMockToApiFormat(mockCryptoData).slice(0, 6))
        setGainersData(convertMockToApiFormat(topGainers).slice(0, 6))
        setNewListData(convertMockToApiFormat(newListings).slice(0, 6))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getTabData = (): CryptoAsset[] => {
    switch (activeTab) {
      case 'tradable':
        return tradableData
      case 'gainers':
        return gainersData
      case 'new':
        return newListData
      default:
        return tradableData
    }
  }

  const data = getTabData()

  return (
    <section className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-4 tracking-tight">
            Market Overview
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-time insights into the most traded cryptocurrencies. Track prices, volume, and performance.
          </p>
        </div>
        
        <div className="card card-elevated overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border/50 bg-bg-secondary/50">
            {(['tradable', 'gainers', 'new'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-5 px-4 text-sm font-semibold transition-all duration-200 relative group ${(
                  activeTab === tab
                    ? 'text-cyan-600'
                    : 'text-text-secondary hover:text-text'
                )}`}
              >
                <span className="relative z-10 capitalize">
                  {tab === 'tradable' && 'Tradable Assets'}
                  {tab === 'gainers' && 'Top Gainers'}
                  {tab === 'new' && 'New Listings'}
                </span>
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500" />
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5" />
              </button>
            ))}
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider border-b border-border/50 bg-bg-secondary/30">
            <div className="col-span-5">Asset</div>
            <div className="col-span-3 text-right">Price</div>
            <div className="col-span-2 text-right">24h Change</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          {/* Asset Rows */}
          <div className="divide-y divide-border/50">
            {loading ? (
              // Loading skeletons
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 px-6 py-5 items-center">
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="w-10 h-10 bg-bg-secondary rounded-full animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-bg-secondary rounded w-20 animate-pulse"></div>
                      <div className="h-3 bg-bg-secondary rounded w-14 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="h-4 bg-bg-secondary rounded w-16 ml-auto animate-pulse"></div>
                  </div>
                  <div className="col-span-2">
                    <div className="h-4 bg-bg-secondary rounded w-12 ml-auto animate-pulse"></div>
                  </div>
                  <div className="col-span-2">
                    <div className="h-8 bg-bg-secondary rounded w-20 ml-auto animate-pulse"></div>
                  </div>
                </div>
              ))
            ) : (
              data.map((asset) => (
                <Link
                  key={asset._id}
                  to={`/crypto/${asset._id}`}
                  className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-bg-secondary/50 transition-all duration-200 group"
                >
                  <div className="col-span-5 flex items-center gap-3">
                    <img 
                      src={asset.image} 
                      alt={asset.name}
                      className="w-10 h-10 rounded-xl object-cover shadow-md"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/40x40/0891b2/ffffff?text=${asset.symbol.slice(0, 2)}`
                      }}
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-text truncate">{asset.symbol}</p>
                      <p className="text-xs text-text-muted truncate">{asset.name}</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-right">
                    <p className="font-bold text-text">{formatGHS(asset.price)}</p>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className={`inline-flex items-center font-bold ${
                      asset.change24h >= 0 ? 'text-success' : 'text-danger'
                    }`}>
                      {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                      {asset.change24h >= 0 ? (
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-cyan-600 font-medium text-sm">
                      View Details →
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="p-6 border-t border-border/50 bg-bg-secondary/30">
            <Link
              to="/crypto"
              className="btn btn-primary w-full md:w-auto justify-center"
            >
              View All Markets
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketPreviewCard
