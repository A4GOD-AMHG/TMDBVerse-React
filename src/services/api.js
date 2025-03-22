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
            const response = await API.get(`/search?q=${encodeURIComponent(query)}`);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to search movies');
        }
    },
    getDiscoverMovies: async () => {
        try {
            const response = await API.get('/discover');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to fetch movies');
        }
    },
    getPopularMovies: async () => {
        try {
            const response = await API.get('/popular');
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.error || 'Failed to fetch popular movies');
        }
    },
};