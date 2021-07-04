import React from 'react'
import Swal from 'sweetalert2'

// style
import '../assets/scss/components/Footer.scss'

// images
import netflixLogoPms from '../assets/Netflix_Logo_PMS.png'

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    
    Swal.fire({
      text: `We're sorry, we don't accept messages on the demo website.`,
      icon: 'warning',
      timer: 5000,
      confirmButtonText: 'Close',
      confirmButtonColor: 'rgba(53, 59, 72, 1)',
    })
  }
  
  return (
    <footer className="bg-dark pb-5 position-relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#111111"
          fillOpacity="1"
          d="M0,96L34.3,112C68.6,128,137,160,206,176C274.3,192,343,192,411,186.7C480,181,549,171,617,154.7C685.7,139,754,117,823,138.7C891.4,160,960,224,1029,224C1097.1,224,1166,160,1234,149.3C1302.9,139,1371,181,1406,202.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <div className="container mt-4 mb-5 pb-3">
        <div className="row">
          <div className="col-md-6 mb-5">
            <h4 className="fs-4 footer__title mb-3">Contact Me:</h4>

            <form method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Full Name:
                </label>
                <input className="form-control" type="text" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email:
                </label>
                <input className="form-control" type="email" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Messages:
                </label>
                <textarea rows="4" className="form-control"></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <i className="fas fa-fw fa-paper-plane"></i>
                send messages
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <h4 className="fs-4 footer__title mb-3">Netflix Clone:</h4>

            <p className="lh-md">
              In this project I try to make a simple clone application of
              Netflix.
            </p>
            <p className="lh-md">
              in this application users can see various types of the latest
              movie recommendations with various genres.
            </p>
            <p className="lh-md">
              equipped with preview trailers feature makes this application even
              better.
            </p>

            <div className="text-end me-3">
              <img src={netflixLogoPms} alt="netflix logo" width="100" />
            </div>
          </div>
        </div>
      </div>

      <div className="copyright position-absolute bottom-0 w-100">
        <div className="d-flex py-3 flex-column justify-content-center align-items-center">
          <p className="py-0 my-0">
            Copyright &copy; 2021 by&nbsp;
            <a
              href="https://www.instagram.com/novaardiansyah._/"
              className="fw-bold text-white"
              target="_blank"
              rel="noreferrer"
            >
              Nova Ardiansyah
            </a>
          </p>
          <p className="py-0 my-0">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
