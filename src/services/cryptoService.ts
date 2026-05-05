import api from './api';

export interface CryptoAsset {
  _id: string;
  name: string;
  symbol: string;
  price: number;
  image: string;
  change24h: number;
  marketCap?: number;
  volume24h?: number;
  description?: string;
  isNew?: boolean;
  createdAt?: string;
}

export interface CryptoResponse {
  success: boolean;
  count: number;
  data: CryptoAsset[];
}

export interface SingleCryptoResponse {
  success: boolean;
  data: CryptoAsset;
}

// Get all cryptocurrencies
export const getCryptos = async (): Promise<CryptoResponse> => {
  const response = await api.get<CryptoResponse>('/crypto');
  return response.data;
};

// Get top gainers
export const getTopGainers = async (): Promise<CryptoResponse> => {
  const response = await api.get<CryptoResponse>('/crypto/gainers');
  return response.data;
};

// Get new listings
export const getNewListings = async (): Promise<CryptoResponse> => {
  const response = await api.get<CryptoResponse>('/crypto/new');
  return response.data;
};

// Get single cryptocurrency
export const getCrypto = async (id: string): Promise<SingleCryptoResponse> => {
  const response = await api.get<SingleCryptoResponse>(`/crypto/${id}`);
  return response.data;
};

// Add new cryptocurrency
export const addCrypto = async (cryptoData: {
  name: string;
  symbol: string;
  price: number;
  image: string;
  change24h: number;
  marketCap?: number;
  volume24h?: number;
  description?: string;
  isNew?: boolean;
}): Promise<SingleCryptoResponse> => {
  const response = await api.post<SingleCryptoResponse>('/crypto', cryptoData);
  return response.data;
};