import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_GO_FIBER_BACKEND,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const movieService = {
    searchMovies: async (query) => {
        try {
            const url = `/search?q=${encodeURIComponent(query)}`;

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
            const response = await API.get(url);
            return response.data;
        } catch (error) {
            console.error('[API Error] Discover movies:', error);
            throw new Error(error.response?.data?.error || 'Failed to fetch movies');
        }
    },

    getTrendingMovies: async () => {
        try {
            const url = '/trending';
            const response = await API.get(url);
            return response.data;
        } catch (error) {
            console.error('[API Error] Trending movies:', error);
            throw new Error(error.response?.data?.error || 'Failed to fetch trending movies');
        }
    },
    getMovieDetails: async (movieId) => {
        try {
            const url = `/movies/${movieId}`;
            const response = await API.get(url);
            return response.data;
        } catch (error) {
            console.error('[API Error] Movie details:', error);
            throw new Error(error.response?.data?.error || 'Failed to fetch movie details');
        }
    },

    getPopularMovies: async () => {
        try {
            const url = '/popular';
            const response = await API.get(url);
            return response.data;
        } catch (error) {
            console.error('[API Error] Popular movies:', error);
            throw new Error(error.response?.data?.error || 'Failed to fetch hero movies');
        }
    },
};