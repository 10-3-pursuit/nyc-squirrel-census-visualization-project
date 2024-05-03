import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/CommonComponents/Nav'
import Footer from './Components/CommonComponents/Footer'

const App = () => {


  return (
    <>
      <h1>Squirrel Census Visualization Starter</h1>
      <h1 className="text-3xl font-bold underline bg-blue-400">
      Hello world!
      </h1>
      <Nav/>
      <Routes>
        <Route />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
