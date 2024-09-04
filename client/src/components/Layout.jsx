import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <Outlet></Outlet>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout
