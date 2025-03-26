import { useState, useEffect } from 'react';
import { movieService } from '../services/api';

export const useTrendingMovies = (searchQuery) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            setIsLoading(true);
            setError('');
            try {
                const data = await movieService.getTrendingMovies();
                setTrendingMovies(Array.isArray(data) ? data : []);
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