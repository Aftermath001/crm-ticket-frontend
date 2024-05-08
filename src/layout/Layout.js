import React from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'

function Layout({children}) {
  return (
    <div className='layout'>
      <header className='header'>
      <Header />
      </header>

      <main className='main'>
        {children}
      </main>

      <footer className='footer'>
        <Footer />
      </footer>
      
      
    </div>
  )
}

export default Layout