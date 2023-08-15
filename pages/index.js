import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Breeds from './components/Breeds'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Cart from './components/Cart'

const index = () => {
  return (
    <div>
      <Nav/>
      <About/>
      <Services/>
      <Breeds/>
      <Blog/>
      <Contact/>
      <Gallery/>
     <Cart/>
      <Shop/>
      

    </div>
  )
}

export default index
