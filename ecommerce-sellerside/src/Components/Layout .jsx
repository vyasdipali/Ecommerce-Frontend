import React from 'react'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const Layout  = () => {
  return (
    <div className ="layout">
    <NavBar/>           
    <div className="content">
      <Outlet />
    </div>
  </div>
  )
}

export default Layout 