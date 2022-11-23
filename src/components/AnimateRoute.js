import React from 'react'
import {Route,Routes,useLocation} from 'react-router-dom'
import Home from './Home'
import WhatIDo from './WhatIDo'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { AnimatePresence } from 'framer-motion'
const AnimateRoute = () => {
  const location=useLocation()
  return (
    <>
    <AnimatePresence initial={true} mode="wait">
          <Routes location={location} key={location.pathname}>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/whatido' element={<WhatIDo/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/portfolio' element={<Portfolio/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       </Routes>
       </AnimatePresence>

    </>
  )
}

export default AnimateRoute
