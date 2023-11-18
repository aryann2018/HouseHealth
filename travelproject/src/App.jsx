import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Navbar  from './Components/Navbar/Navbar'
import Middle from './Components/Middle/Middle'
import Portfolio from './Components/Portfolio/Portfolio'
import Questions from './Components/Questions/Questions'
import Reviews from './Components/Reviews/Reviews'
import Subscribe from './Components/Subscribe/Subscribe'

function App() {
  return (
    <>
      <div>
        
        <Navbar />
        <Home />
      </div>
    </>
  )
}
export default App