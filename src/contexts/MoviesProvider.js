import React, { useContext, useState } from 'react'

const MoviesContext = React.createContext()

export default function MoviesProvider({ children }) {
  const [trailerUrl, setTrailerUrl] = useState('')

  // youtube options
  const youtubeOpts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const value = {
    youtubeOpts,
    trailerUrl,
    setTrailerUrl,
  }

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  )
}

export function useMovies() {
  return useContext(MoviesContext)
}
