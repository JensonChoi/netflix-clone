import React from 'react'

const Popup = ({ movie, handleClose }) => {
  const getHours = (duration) => {
    return Math.floor(duration / 60)
  }
  const getMinutes = (duration) => {
    return duration % 60
  }

  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={handleClose}>
          x
        </span>
        <video className='hero-video' muted controls autoPlay={true} loop>
          <source src={movie.thumbnail} type='video/mp4' />
        </video>
        <div className='info-section'>
          <h3 className='hero-blurb'>{movie.title}</h3>
          <div className='button-section'>
            <div className='button play'>
              <span>
                <i className='fas fa-play'></i>
              </span>
              Play
            </div>
          </div>
        </div>
        <p>
          {movie.year} {getHours(movie.duration)}h{getMinutes(movie.duration)}m
        </p>
        <p>{movie.synopsis}</p>
      </div>
    </div>
  )
}

export default Popup
