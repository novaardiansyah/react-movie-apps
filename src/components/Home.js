import React from 'react'
// static components
import { requests } from './static/requests'
/* ==== components ==== */
import Banner from './Banner'
// movies
import MovieList from './movies/MovieList'

export default function Home() {
  return (
    <>
      <Banner />
      
      <div className="container mb-5">
        <MovieList
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.netflixOriginals}
          isLarge
        />
        <MovieList title="Trending" fetchUrl={requests.trending} />
        {/*
          <MovieList title="Top Rated" fetchUrl={requests.topRated} />
          <MovieList title="Action Movies" fetchUrl={requests.actionMovies} />
          <MovieList title="Comedy Movies" fetchUrl={requests.comedyMovies} />
          <MovieList title="Horror Movies" fetchUrl={requests.horrorMovies} />
          <MovieList title="Romance Movies" fetchUrl={requests.romanceMovies} />
          <MovieList title="Documentaries" fetchUrl={requests.documentaries} />
        */}
      </div>
    </>
  )
}
