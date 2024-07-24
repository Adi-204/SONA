import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'
import AppFooter from './AppFooter'

const Layout = () => {
  return (
    <div>
        <AppNav />
        <Outlet />
        <AppFooter />
    </div>
  )
}

export default Layout