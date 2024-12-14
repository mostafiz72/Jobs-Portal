import React, { useContext } from 'react'
import Navbar from '../Navbars/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footers/Footer'

export default function MainLayout() {
  
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
