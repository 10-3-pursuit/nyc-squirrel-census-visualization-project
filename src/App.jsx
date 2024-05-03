import React from 'react'
import { Routes, Route } from 'react-router-dom'

//common components 
import Nav from './Components/CommonComponents/Nav'
import Footer from './Components/CommonComponents/Footer'
import LandingPage from './Components/CommonComponents/LandingPage'
import AboutTheDevs from './Components/CommonComponents/AboutTheDevs'

//Components
import SquirrelDetailed from './Components/SquirrelDetailed'
import SquirrelIndex from './Components/SquirrelIndex'
import SquirrelMap from './Components/SquirrelMap'


const App = () => {


  return (
    <>
      <h1>Squirrel Census Visualization Starter</h1>
      <h1 className="text-3xl font-bold underline bg-blue-400">
      Hello world!
      </h1>
      <Nav/>
      <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/squirrels" element={<SquirrelIndex />} />
          <Route
            path="/squirrels/:id"
            element={<SquirrelDetailed />}
          />
          <Route path="/maps" element={<SquirrelMap />} />
          <Route path="/aboutthedevs" element={<AboutTheDevs />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
