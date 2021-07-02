import React, { useState, useEffect } from 'react'
// style
import '../assets/scss/components/Banner.scss'
// static
import { axiosInstance, properties } from './static/axios'
import { requests } from './static/requests'

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

  return (
    <header className="banner mb-3" style={styleBanner}>
      <div className="banner__contents ms-3 pt-3">
        <h3 className="mb-2 banner__title">{movie?.title || movie?.name || movie?.original_name}</h3>

        <div className="banner__button-group">
          <button className="btn banner__button-group-item">play</button>
          <button className="btn banner__button-group-item">
            my list
          </button>
        </div>

        <p className="fw-bold banner_description">{movie?.overview}</p>
      </div>
    </header>
  )
}
