import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'

function Home() {
  return (
    <>
    <Hero />
    <About />
    <div className='text-red-500'></div>
    </>
  )
}

export default Home