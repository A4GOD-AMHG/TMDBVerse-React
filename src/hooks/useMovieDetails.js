import { useState, useEffect } from 'react';
import { movieService } from '../services/api';

export const useMovieDetails = (movieId) => {
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setIsLoading(true);
                const data = await movieService.getMovieDetails(movieId);
                setMovie(data);
                setError('');
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        if (movieId) {
            fetchMovieDetails();
        }
    }, [movieId]);

    return { movie, isLoading, error };
};