import React, { useState, useEffect } from 'react'
// style
import '../assets/scss/components/Navbar.scss'
// images
import defaultProfile from '../assets/default-profile.png'
import netflixLogoPms from '../assets/Netflix_Logo_PMS.png'

export default function Navbar() {
  // state
  const [navbarDark, setNavbarDark] = useState(false)

  // effect
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) return setNavbarDark(true)

      return setNavbarDark(false)
    })

    return () => window.removeEventListener('scroll')
  }, [setNavbarDark])

  return (
    <nav
      className={`navbar navbar-dark fixed-top py-3 ${
        navbarDark ? 'navbarDark' : 'bg-transparent'
      }`}
    >
      <div className="container d-flex justify-space-between">
        <img
          src={netflixLogoPms}
          alt="netflix logo"
          className="nav__logo-netflix shadow"
        />
        <img
          src={defaultProfile}
          alt="default profile"
          className="nav__logo-profile rounded-circle shadow"
        />
      </div>
    </nav>
  )
}
