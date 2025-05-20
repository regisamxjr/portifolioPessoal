import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaEnvelope, FaCertificate } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/sobre', label: 'Sobre', icon: FaUser },
    { path: '/projetos', label: 'Projetos', icon: FaCode },
    { path: '/certificados', label: 'Certificados', icon: FaCertificate },
    { path: '/contato', label: 'Contato', icon: FaEnvelope }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-10">
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className={`hidden md:flex items-center space-x-8 px-8 py-4 rounded-full transition-all duration-300 ${
            isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-gray-900/50 backdrop-blur-sm'
          }`}>
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative"
                >
                  <div className={`p-3 rounded-full transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-500 bg-blue-500/10 scale-110'
                      : 'text-gray-400 hover:text-blue-400 hover:scale-110'
                  }`}>
                    <Icon className="text-2xl" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {item.label}
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-blue-400 focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg animate-fadeIn rounded-lg mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-blue-500 bg-gray-800'
                        : 'text-gray-400 hover:text-blue-400 hover:bg-gray-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="text-lg" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 