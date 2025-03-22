import { useState, useEffect } from 'react';
import { movieService } from '../services/api';

export const useSearchMovies = (searchQuery) => {
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [searchError, setSearchError] = useState('');

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!searchQuery) {
                setSearchResults([]);
                return;
            }

            setIsSearching(true);
            setSearchError('');

            try {
                const data = await movieService.searchMovies(searchQuery);
                setSearchResults(data);
            } catch (err) {
                setSearchError(err.message);
            } finally {
                setIsSearching(false);
            }
        };

        const debounceTimer = setTimeout(fetchSearchResults, 300);
        return () => clearTimeout(debounceTimer);
    }, [searchQuery]);

    return { searchResults, isSearching, searchError };
};