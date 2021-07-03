import React from 'react'
// static components
import { requests } from './static/requests'
/* ==== components ==== */
import Banner from './Banner'
import Footer from './Footer'
// movies
import MovieList from './movies/MovieList'

export default function Home() {
  return (
    <>
      <Banner />
      
      <div className="container">
        <MovieList
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.netflixOriginals}
          isLarge
        />
        <MovieList title="Trending" fetchUrl={requests.trending} />
        <MovieList title="Action Movies" fetchUrl={requests.actionMovies} />
        <MovieList title="Comedy Movies" fetchUrl={requests.comedyMovies} />
        <MovieList title="Top Rated" fetchUrl={requests.topRated} />
        <MovieList title="Horror Movies" fetchUrl={requests.horrorMovies} />
        <MovieList title="Romance Movies" fetchUrl={requests.romanceMovies} />
      </div>
      
      <Footer />
    </>
  )
}
