import React from 'react';
import Spinner from './Spinner';
import { usePopularMovies } from '../hooks/usePopularMovies';

const Hero = () => {
    const { movies, isLoading, error } = usePopularMovies();

    if (isLoading) {
        return (<div className="flex items-center justify-center h-64"><Spinner /></div>)
    };

    if (error) {
        return (<div className="flex items-center justify-center h-64"> <p className="text-red-500">{error}</p></div>)
    };

    if (!movies || movies.length === 0) {
        return (<div className="flex items-center justify-center h-64"><p className="text-gray-500">No popular movies found.</p></div>)
    };

    return (
        <div className="hero relative flex items-center justify-center mb-5 group">
            <div className="absolute h-[165px] w-[115px] sm:h-[190px] sm:w-[140px] md:h-[210px] md:w-[160px] transform -rotate-12 -translate-x-28 z-10 poster-card hover:z-30">
                <img
                    src={movies[1].poster_path ? `https://image.tmdb.org/t/p/w500/${movies[1].poster_path}` : `/no-movie.png`}
                    alt={movies[1].title}
                    className="w-full h-full object-fit rounded-lg"
                />
                <div className="absolute inset-0 transition-opacity rounded-lg" />
            </div>

            <div className="absolute h-[165px] w-[115px] sm:h-[190px] sm:w-[140px] md:h-[210px] md:w-[160px] transform rotate-12 translate-x-28 z-10 poster-card hover:z-30">
                <img
                    src={movies[0].poster_path ? `https://image.tmdb.org/t/p/w500/${movies[0].poster_path}` : `/no-movie.png`}
                    alt={movies[0].title}
                    className="w-full h-full object-fit rounded-lg"
                />
            </div>

            <div className="relative h-[175px] w-[125px] sm:h-[210px] sm:w-[150px] md:h-[230px] md:w-[170px] z-20 -translate-y-2 poster-card">
                <img
                    src={movies[2].poster_path ? `https://image.tmdb.org/t/p/w500/${movies[2].poster_path}` : `/no-movie.png`}
                    alt={movies[2].title}
                    className="w-full h-full object-fit rounded-lg"
                />
            </div>
        </div>
    );
};

export default Hero;