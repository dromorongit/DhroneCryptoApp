import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCryptos, getTopGainers, getNewListings } from '../services/cryptoService'
import type { CryptoAsset } from '../services/cryptoService'
import { formatGHS } from '../data/mockCrypto'

type TabType = 'tradable' | 'gainers' | 'new'

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
        
        if (tradableRes.success) setTradableData(tradableRes.data.slice(0, 5))
        if (gainersRes.success) setGainersData(gainersRes.data)
        if (newListingsRes.success) setNewListData(newListingsRes.data)
      } catch (err) {
        // Fallback to empty data
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
              <div className="px-6 py-8 text-center text-text-secondary">
                Loading...
              </div>
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