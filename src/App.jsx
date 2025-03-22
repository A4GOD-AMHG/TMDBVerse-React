import React, { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import Search from './components/Search';
import Hero from './components/Hero';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useSearchMovies } from './hooks/useSearchMovies';

const App = () => {
  const { movies, isLoading, error } = useMovies();
  const [searchValue, setSearchValue] = useState('');
  const { searchResults, isSearching, searchError } = useSearchMovies(searchValue);

  const displayedMovies = searchValue ? searchResults : movies;
  const isDisplayLoading = searchValue ? isSearching : isLoading;
  const displayError = searchValue ? searchError : error;


  return (
    <main className="w-screen h-screen bg-center bg-cover absolute z-0 overflow-y-auto hide-scrollbar">
      <div className='wrapper mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <header className="py-8 px-4">
          <Hero />
          <h1 className="text-4xl md:text-6xl text-center text-white tracking-wide">
            Discover <span className='text-gradient'>
              Your Next Favorite Movie</span> in Seconds
          </h1>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </header>

        <section className='space-y-9'>
          <h2 className="text-white text-2xl mb-4">{searchValue ? 'Search Results' : 'All Movies'}</h2>

          {isDisplayLoading ? (
            <Spinner />
          ) : displayError ? (
            <p className='text-red-500'>{displayError}</p>
          ) : (
            <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {displayedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  );
};

export default App;