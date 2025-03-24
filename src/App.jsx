import React, { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import Search from './components/Search';
import Hero from './components/Hero';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useSearchMovies } from './hooks/useSearchMovies';
import Footer from './components/Footer';
import { useDebounce } from 'react-use';

const App = () => {
  const { movies, isLoading, error } = useMovies();
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useDebounce(() => { setDebouncedSearchTerm(searchValue) }, 500, [searchValue]);

  const { searchResults, isSearching, searchError } = useSearchMovies(debouncedSearchTerm);
  const displayedMovies = searchValue ? searchResults : movies;
  const isDisplayLoading = searchValue ? isSearching : isLoading;
  const displayError = searchValue ? searchError : error;


  return (
    <main className="w-screen h-screen flex flex-col bg-center bg-cover absolute z-0 overflow-y-auto hide-scrollbar">
      <div className='wrapper mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow'>
        <header className="py-8 px-4">
          <Hero />
          <h1 className="text-4xl md:text-6xl text-center text-white tracking-wide">
            Discover Your Next Favorite Movie in Seconds
          </h1>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </header>

        <section className='space-y-9 text-center'>
          <h2 className="text-white text-2xl mb-4">{searchValue ? 'Search Results' : 'Latest Movies'}</h2>

          {isDisplayLoading ? (
            <Spinner />
          ) : displayError ? (
            <p className='text-red-500'>{displayError}</p>
          ) :
            displayedMovies.length > 0 ?
              (<div className="md:grid flex flex-col justify-center items-center gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {displayedMovies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))}
              </div>) : <h3 className='mt-3'>No movies found with that prompt</h3>
          }
        </section>

      </div >
      <Footer />
    </main >
  );
};

export default App;