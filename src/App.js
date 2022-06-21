import './App.css'
import { useEffect, useState } from 'react'
import Section from './components/Section.js'
import HeroSection from './components/HeroSection.js'
import NavBar from './components/NavBar.js'
import Popup from './components/Popup.js'

const App = () => {
  const genreIncrement = 4
  const [genres, setGenres] = useState(null)
  const [limit, setLimit] = useState(genreIncrement)
  const [isOpen, setIsOpen] = useState(false)
  const [popupMovie, setPopupMovie] = useState(null)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const fetchData = async () => {
    const response = await fetch('/.netlify/functions/getGenres', {
      method: 'POST',
      body: limit,
    })
    const responseBody = await response.json()
    setGenres(responseBody.data.reference_list.values)
  }

  useEffect(() => {
    fetchData()
  }, [limit])

  useEffect(() => {
    console.log(popupMovie)
  }, [popupMovie])

  return (
    <>
      <NavBar />
      <HeroSection />
      {genres && (
        <div className='container'>
          {Object.values(genres).map((genre, index) => (
            <Section
              key={index}
              genre={genre.value}
              togglePopup={togglePopup}
              setPopupMovie={setPopupMovie}
            />
          ))}
        </div>
      )}
      <div
        className='page-end'
        onMouseEnter={() => {
          setLimit(limit + genreIncrement)
        }}
      />
      {isOpen && <Popup movie={popupMovie} handleClose={togglePopup} />}
    </>
  )
}

export default App
