import React from 'react'
import Nav from './Components/Navbar/Nav'
import Footer from './Components/Footer/Footer'

function ErrorOne() {
  return (
    <>
    <Nav />
    <div className='mainEroor'>
   
    <h1 className='container d-flex justify-content-center'>Page Not Found 404</h1>

    </div>
    <Footer />
    </>
  )
}

export default ErrorOne