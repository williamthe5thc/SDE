// src/utils/api/index.ts
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.socialdanceeffect.com';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await api.post('/auth/refresh', { refreshToken });
        const { token } = response.data;
        
        localStorage.setItem('auth_token', token);
        originalRequest.headers.Authorization = `Bearer ${token}`;
        
        return api(originalRequest);
      } catch (error) {
        // Handle refresh token failure
        localStorage.removeItem('auth_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export const dancesApi = {
  getAllStyles: () => api.get('/dance-styles'),
  getStyleById: (id: string) => api.get(`/dance-styles/${id}`),
  getTutorials: (styleId: string) => api.get(`/dance-styles/${styleId}/tutorials`),
};

export const eventsApi = {
  getUpcoming: () => api.get('/events/upcoming'),
  getById: (id: string) => api.get(`/events/${id}`),
  register: (eventId: string) => api.post(`/events/${eventId}/register`),
};

export const userApi = {
  updateProfile: (data: any) => api.put('/user/profile', data),
  getProgress: () => api.get('/user/progress'),
  saveProgress: (data: any) => api.post('/user/progress', data),
};

export default api;