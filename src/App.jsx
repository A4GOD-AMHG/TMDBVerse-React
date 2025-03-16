import React from 'react'
import Hero from './components/Hero'

const App = () => {
  return (
    <main>
      <div className='pattern'>

        <div className='wrapper'>
          <header>
            <Hero />
            <h1>Find <span className='text-gradient' >Movies</span> You'll Enjoy Without the Hassle</h1>
          </header>

          {/* <Search /> */}
        </div>
      </div>
    </main>
  )
}

export default App