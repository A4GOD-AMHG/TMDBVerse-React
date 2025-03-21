import React, { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import Search from './components/Search';
import Hero from './components/Hero';
import Spinner from './components/Spinner';

const App = () => {
  const { movies, isLoading, error } = useMovies();
  const [searchValue, setSearchValue] = useState('');

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#1A063A] via-[#0F042E] to-[#090116]">
      <div className='pattern'>
        <div className='wrapper mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <header className="py-8 px-4">
            <Hero />
            <h1 className="text-4xl md:text-6xl text-center text-white tracking-wide">
              Discover <span className='text-gradient'>
                Your Next Favorite Movie</span> in Seconds
            </h1>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </header>

          <section className='all-movies'>
            <h2 className="text-white text-2xl mb-4">All Movies</h2>

            {isLoading ? (
              <Spinner />
            ) : error ? (
              <p className='text-red-500'>{error}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {movies.map((movie) => (
                  <div key={movie.id} className="bg-white/10 p-4 rounded-lg">
                    <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
                    <p className="text-gray-300 text-sm mt-2">{movie.overview}</p>
                    <div className="mt-3 text-purple-300 text-xs">
                      <span>Release: {movie.release_date}</span>
                      <span className="ml-3">⭐ {movie.popularity.toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;