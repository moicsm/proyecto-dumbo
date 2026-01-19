import axios from 'axios';

/**
 * Cliente API base configurado con Axios
 * Todas las páginas usarán este cliente para llamadas HTTP
 */
export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Interceptor para agregar token de autenticación
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor para manejar errores globales
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Redirect a login si no autorizado
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
