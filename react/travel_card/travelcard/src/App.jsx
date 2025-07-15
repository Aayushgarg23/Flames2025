import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Tours from './components/tours'
function App() {


  const [tours, setTour] = useState(data)
  function BtnHandler(id)
  {
    const newTours = tours.filter(tour=>tour.id !==id);
    setTour(newTours);
  }

  return (
    <>
     <Tours tours={tours} BtnHandler={BtnHandler} />
    </>
  )
}

export default App
