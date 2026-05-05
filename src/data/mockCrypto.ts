export interface CryptoAsset {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  volume24h: number
  marketCap: number
  isNew?: boolean
}

export const mockCryptoData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 881887.94,
    change24h: 2.34,
    volume24h: 15000000000,
    marketCap: 17000000000000,
  },
  {
    id: 'ethereum',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 42000.50,
    change24h: 1.89,
    volume24h: 8000000000,
    marketCap: 5000000000000,
  },
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    price: 185.42,
    change24h: 5.67,
    volume24h: 2500000000,
    marketCap: 800000000000,
  },
  {
    id: 'cardano',
    symbol: 'ADA',
    name: 'Cardano',
    price: 2.45,
    change24h: -1.23,
    volume24h: 800000000,
    marketCap: 85000000000,
  },
  {
    id: 'polkadot',
    symbol: 'DOT',
    name: 'Polkadot',
    price: 12.34,
    change24h: 3.45,
    volume24h: 600000000,
    marketCap: 15000000000,
  },
  {
    id: 'avalanche',
    symbol: 'AVAX',
    name: 'Avalanche',
    price: 85.67,
    change24h: 4.12,
    volume24h: 1200000000,
    marketCap: 25000000000,
  },
  {
    id: 'chainlink',
    symbol: 'LINK',
    name: 'Chainlink',
    price: 28.90,
    change24h: -0.56,
    volume24h: 900000000,
    marketCap: 16000000000,
  },
  {
    id: 'polygon',
    symbol: 'MATIC',
    name: 'Polygon',
    price: 1.85,
    change24h: 2.78,
    volume24h: 1100000000,
    marketCap: 17000000000,
  },
]

export const topGainers: CryptoAsset[] = [
  {
    id: 'solana',
    symbol: 'SOL',
    name: 'Solana',
    price: 185.42,
    change24h: 12.45,
    volume24h: 2500000000,
    marketCap: 800000000000,
  },
  {
    id: 'avalanche',
    symbol: 'AVAX',
    name: 'Avalanche',
    price: 85.67,
    change24h: 8.92,
    volume24h: 1200000000,
    marketCap: 25000000000,
  },
  {
    id: 'polygon',
    symbol: 'MATIC',
    name: 'Polygon',
    price: 1.85,
    change24h: 7.65,
    volume24h: 1100000000,
    marketCap: 17000000000,
  },
  {
    id: 'bitcoin',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 881887.94,
    change24h: 5.23,
    volume24h: 15000000000,
    marketCap: 17000000000000,
  },
]

export const newListings: CryptoAsset[] = [
  {
    id: 'newcoin1',
    symbol: 'NEW1',
    name: 'NewCoin One',
    price: 0.45,
    change24h: 15.67,
    volume24h: 5000000,
    marketCap: 45000000,
    isNew: true,
  },
  {
    id: 'newcoin2',
    symbol: 'NEW2',
    name: 'NewCoin Two',
    price: 12.34,
    change24h: 8.45,
    volume24h: 12000000,
    marketCap: 123000000,
    isNew: true,
  },
  {
    id: 'newcoin3',
    symbol: 'NEW3',
    name: 'NewCoin Three',
    price: 0.08,
    change24h: 22.34,
    volume24h: 3000000,
    marketCap: 8000000,
    isNew: true,
  },
]

export const formatGHS = (value: number): string => {
  return `GHS ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}