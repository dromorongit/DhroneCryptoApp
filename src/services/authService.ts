import api from './api';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export interface ProfileResponse {
  success: boolean;
  user: User;
}

// Register user
export const register = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', { name, email, password });
  return response.data;
};

// Login user
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', { email, password });
  return response.data;
};

// Get user profile
export const getProfile = async (): Promise<ProfileResponse> => {
  const response = await api.get<ProfileResponse>('/auth/me');
  return response.data;
};

// Logout user
export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};

// Save token to localStorage
export const saveToken = (token: string): void => {
  localStorage.setItem('dhronecrypto_token', token);
};

// Remove token from localStorage
export const removeToken = (): void => {
  localStorage.removeItem('dhronecrypto_token');
};

// Get token from localStorage
export const getToken = (): string | null => {
  return localStorage.getItem('dhronecrypto_token');
};