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
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Market Overview</h2>
        
        <div className="card overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border">
            {(['tradable', 'gainers', 'new'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 px-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-text-secondary hover:text-text'
                }`}
              >
                {tab === 'tradable' && 'Tradable'}
                {tab === 'gainers' && 'Top Gainers'}
                {tab === 'new' && 'New Listings'}
              </button>
            ))}
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-3 text-xs font-medium text-text-secondary uppercase border-b border-border">
            <div>Asset</div>
            <div className="text-right">Price</div>
            <div className="text-right">24h Change</div>
          </div>

          {/* Asset Rows */}
          <div className="divide-y divide-border">
            {loading ? (
              // Loading skeletons
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 px-6 py-4 animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bg-secondary rounded-full"></div>
                    <div>
                      <div className="h-4 bg-bg-secondary rounded w-12 mb-1"></div>
                      <div className="h-3 bg-bg-secondary rounded w-20"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="h-4 bg-bg-secondary rounded w-16 ml-auto"></div>
                  </div>
                  <div className="text-right">
                    <div className="h-4 bg-bg-secondary rounded w-12 ml-auto"></div>
                  </div>
                </div>
              ))
            ) : (
              data.map((asset) => (
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
              ))
            )}
          </div>

          <div className="p-4 border-t border-border">
            <Link
              to="/crypto"
              className="text-accent hover:text-accent-hover text-sm font-medium"
            >
              View all markets →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketPreviewCard