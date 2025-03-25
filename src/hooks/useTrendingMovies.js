import { useState, useEffect } from 'react';
import { movieService } from '../services/api';

export const useTrendingMovies = (searchQuery) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log("useTrendingMovies hook triggered");
        const fetchTrendingMovies = async () => {
            setIsLoading(true);
            setError('');
            try {
                navigator.serviceWorker?.addEventListener('message', (event) => {
                    if (event.data.type === 'REFRESH_TRENDING') {
                        fetchTrendingData();
                    }
                });

                const fetchTrendingData = async () => {
                    const cachedResponse = await caches.match('/trending');
                    if (cachedResponse) {
                        const data = await cachedResponse.json();
                        setTrendingMovies(Array.isArray(data) ? data : []);
                    }

                    const data = await movieService.getTrendingMovies();
                    setTrendingMovies(Array.isArray(data) ? data : []);
                };
            } catch (err) {
                setError(err.message);
                setTrendingMovies([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrendingMovies();
    }, [searchQuery]);

    return { trendingMovies, isLoading, error };
};