import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMovieDetails } from '../hooks/useMovieDetails';
import Spinner from './Spinner';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { movie, isLoading, error } = useMovieDetails(id);

    if (isLoading) return <Spinner />;
    if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;

    return (
        <div className="min-h-screen bg-gray-900 text-white pb-12">
            <div
                className="wrapper h-64 md:h-[30vh] bg-cover bg-center relative"
                style={{
                    backgroundImage: `${movie?.poster_path ? `url(https://image.tmdb.org/t/p/original/${movie?.poster_path}` : `url(/no-movie.png)`}`,
                    backgroundPosition: 'center top'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="hidden md:block md:w-1/3 lg:w-1/4">
                        <img
                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : `/no-movie.png`}
                            alt={movie?.title}
                            className="w-full h-auto rounded-lg shadow-xl -mt-32"
                        />
                    </div>

                    <div className="md:w-2/3 lg:w-3/4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{movie?.title}</h1>

                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                                {movie?.release_date?.split('-')[0]}
                            </span>
                            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                                ★ {movie?.vote_average}/10
                            </span>
                            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                                {movie?.original_language?.toUpperCase()}
                            </span>
                            {movie?.search_count && (
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                                    🔥 {movie.search_count} searches
                                </span>
                            )}
                        </div>

                        <p className="text-gray-300 mb-6 text-sm md:text-base">{movie?.overview}</p>

                        <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                            <div>
                                <h3 className="text-gray-400">Release Date</h3>
                                <p>{movie?.release_date}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-400">Original Title</h3>
                                <p>{movie?.original_title || movie?.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;