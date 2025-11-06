import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa'
import { GiTrophy } from 'react-icons/gi'
import { useLanguage } from '../context/LanguageContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { t, language, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { path: '/', label: t('home'), icon: FaHome },
    { path: '/sobre', label: t('sobre'), icon: FaUser },
    { path: '/projetos', label: t('projetos'), icon: FaCode },
    { path: '/certificados', label: t('certificados'), icon: GiTrophy },
    { path: '/contato', label: t('contato'), icon: FaEnvelope }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black via-gray-950 to-gray-950 ${
      isScrolled ? 'shadow-xl' : 'shadow-lg'
    }`}>
      <div className={`absolute inset-0 ${isScrolled ? 'bg-black/55' : 'bg-black/40'} backdrop-blur-md pointer-events-none transition-all duration-300`}></div>
      <nav className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 rounded-b-3xl">
        <div className="flex justify-center items-center">
          <div className="hidden md:flex items-center space-x-6 px-6 py-2 rounded-full bg-blue-950/80 shadow-md transition-all duration-300">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative"
                >
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-500 bg-blue-500/10 scale-110'
                      : 'text-gray-400 hover:text-blue-400 hover:scale-110'
                  }`}>
                    <Icon className="text-xl" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {item.label}
                  </div>
                </Link>
              )
              })}
          </div>
          
          <button
            onClick={toggleLanguage}
            className="hidden md:flex group relative ml-6"
          >
            <div className="transition-all duration-300 text-gray-400 hover:text-blue-400 hover:scale-110 flex items-center justify-center">
              <span className="text-xl leading-none">{language === 'pt' ? '🇺🇸' : '🇧🇷'}</span>
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {language === 'pt' ? 'English' : 'Português'}
            </div>
          </button>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-blue-400 focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-4 right-4 bg-blue-950/95 backdrop-blur-md shadow-lg animate-fadeIn rounded-3xl mt-2 border border-blue-900/70">
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
              {/* Botão de Tradução no Menu Mobile */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 text-gray-400 hover:text-blue-400 hover:bg-gray-800 w-full"
              >
                <span className="text-lg">{language === 'pt' ? '🇺🇸' : '🇧🇷'}</span>
                <span>{language === 'pt' ? 'English' : 'Português'}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header 