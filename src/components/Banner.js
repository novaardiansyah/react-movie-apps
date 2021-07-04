import React, { useState, useEffect } from 'react'

// style
import '../assets/scss/components/Banner.scss'

// static
import { axiosInstance, properties } from './static/axios'
import { requests } from './static/requests'

/* ==== components ==== */
import Navbar from './Navbar'

export default function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function getMovie() {
      const request = await axiosInstance.get(requests.netflixOriginals)
      let index = Math.floor(Math.random() * request.data.results.length - 1)

      if (index < 0) return setMovie(request.data.results[1])

      return setMovie(request.data.results[index])
    }
    getMovie()
  }, [])

  const styleBanner = {
    background: `url(${properties.baseImageUrl}/${movie?.backdrop_path})`,
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '....' : str
  }

  return (
    <header className="banner mb-3" style={styleBanner}>
      <Navbar />
      <div className="banner__contents container">
        <h1 className="banner__title fs-1">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__button-group mb-3">
          <button className="btn banner__button-group-item px-4 me-2">
            play
          </button>
          <button className="btn banner__button-group-item px-4">
            my list
          </button>
        </div>

        <p className="fs-6 lh-md fw-bold banner__description">
          {truncate(movie?.overview, 100)}
        </p>
      </div>

      <div className="banner__fadeBackground" />
    </header>
  )
}
