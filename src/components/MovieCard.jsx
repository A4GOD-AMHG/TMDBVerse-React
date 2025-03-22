import React from 'react'

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language } }) => {
    return (
        <div className="movie-card">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <p className="text-gray-300 text-sm mt-2">{overview}</p>
            <div className="mt-3 text-purple-300 text-xs">
                <span>Release: {release_date}</span>
                <span className="ml-3">⭐ {popularity.toFixed(1)}</span>
            </div>
        </div>
    )
}

export default MovieCard