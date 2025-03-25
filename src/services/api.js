import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_GO_FIBER_BACKEND,
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=1800'
    }
});

const checkServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        console.log('[Service Worker] Registrado y listo:', registration);
        return true;
    }
    console.warn('[Service Worker] No soportado en este navegador');
    return false;
};

const logCacheResponse = async (url) => {
    if ('caches' in window) {
        const cache = await caches.open('tmdbzone-api-cache-v1');
        const cachedResponse = await cache.match(url);
        if (cachedResponse) {
            console.log(`[Cache] Respuesta encontrada en cache para: ${url}`);
            return true;
        }
    }
    return false;
};

export const movieService = {
    searchMovies: async (query) => {
        try {
            const url = `/search?q=${encodeURIComponent(query)}`;
            await logCacheResponse(url);

            const response = await API.get(url);
            console.log('[API] Search movies response:', response.data.length, 'results');
            return response.data;
        } catch (error) {
            console.error('[API Error] Search movies:', error);
            throw new Error(error.response?.data?.error || 'Failed to search movies');
        }
    },

    getDiscoverMovies: async () => {
        try {
            const url = '/discover';
            const hasCache = await logCacheResponse(url);

            const response = await API.get(url);
            if (hasCache) {
                console.log('[API] Discover movies updated from network');
            }
            return response.data;
        } catch (error) {
            console.error('[API Error] Discover movies:', error);
            throw new Error(error.response?.data?.error || 'Failed to fetch movies');
        }
    },

    getTrendingMovies: async () => {
        try {
            const url = '/trending';
            await logCacheResponse(url);

            const response = await API.get(url);
            console.log('[API] Trending movies fetched. Count:', response.data.length);
            return response.data;
        } catch (error) {
            console.error('[API Error] Trending movies:', error);
            throw new Error(error.response?.data?.error || 'Failed to fetch trending movies');
        }
    },

    getPopularMovies: async () => {
        try {
            const url = '/popular';
            await logCacheResponse(url);

            const response = await API.get(url);
            return response.data;
        } catch (error) {
            console.error('[API Error] Popular movies:', error);
            throw new Error(error.response?.data?.error || 'Failed to fetch hero movies');
        }
    },

    checkServiceWorkerStatus: async () => {
        return await checkServiceWorker();
    },

    forceCacheUpdate: async (endpoint) => {
        if ('caches' in window) {
            const cache = await caches.open('tmdbzone-api-cache-v1');
            await cache.delete(endpoint);
            console.log(`[Cache] Forzada actualización para: ${endpoint}`);
        }
    }
};