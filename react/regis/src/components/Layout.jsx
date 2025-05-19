import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout 