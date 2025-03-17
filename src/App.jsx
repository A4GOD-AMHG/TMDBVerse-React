import React, { useState } from 'react'
import Hero from './components/Hero'
import Search from './components/Search'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#1A063A] via-[#0F042E] to-[#090116]">
      <div className='pattern'>
        <div className='wrapper mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <header className="py-16">
            <Hero />
            <h1 className="text-5xl md:text-7xl text-center mb-8 text-white tracking-wide">
              Discover <span className='bg-gradient-to-r from-[#7D5AEA] to-[#5A8AEA] bg-clip-text text-transparent'>
                Your Next Favorite Movie</span> in Seconds
            </h1>
          </header>

          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
      </div>
    </main>
  )
}

export default App