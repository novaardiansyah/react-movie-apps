import React from 'react'
// static components
import { requests } from './static/requests'
// movies
import MovieList from './movies/MovieList'

export default function Home() {
  return (
    <div className="container my-3">
      <MovieList
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.netflixOriginals}
        isLarge
      />
      <MovieList title="Trending" fetchUrl={requests.trending} />
      <MovieList title="Top Rated" fetchUrl={requests.topRated} />
      <MovieList title="Action Movies" fetchUrl={requests.actionMovies} />
      <MovieList title="Comedy Movies" fetchUrl={requests.comedyMovies} />
      <MovieList title="Horror Movies" fetchUrl={requests.horrorMovies} />
      <MovieList title="Romance Movies" fetchUrl={requests.romanceMovies} />
      <MovieList title="Documentaries" fetchUrl={requests.documentaries} />
    </div>
  )
}
