import React from 'react'
import Youtube from 'react-youtube'

// static components
import { requests } from './static/requests'

/* ==== components ==== */
import Banner from './Banner'
import Footer from './Footer'
// movies
import MovieList from './movies/MovieList'

// contexts
import { useMovies } from '../contexts/MoviesProvider'

export default function Home() {
  const { youtubeOpts, trailerUrl } = useMovies()

  return (
    <>
      <Banner />

      <div className="container">
        <MovieList
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.netflixOriginals}
          isLarge
        />
        <div className="row mb-3" id="youtube__player">
          <div className="col-lg-8">
            {trailerUrl && <Youtube videoId={trailerUrl} opts={youtubeOpts} />}
          </div>
        </div>
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
