import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa'
import { GiTrophy } from 'react-icons/gi'
import { useLanguage } from '../context/LanguageContext'

const Header = () => {
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
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-b-3xl">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-2 sm:gap-4 px-3 sm:px-5 py-1.5 sm:py-1.5 rounded-full bg-blue-950/80 shadow-md transition-all duration-300 overflow-x-auto md:overflow-visible max-w-full md:max-w-none scrollbar-hide">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative flex-shrink-0"
                >
                  <div className={`p-1.5 sm:p-1.5 rounded-full transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-blue-500 bg-blue-500/10 scale-110'
                      : 'text-gray-400 hover:text-blue-400 hover:scale-110'
                  }`}>
                    <Icon className="text-base sm:text-lg" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                  <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                </Link>
              )
            })}

            <div className="w-px h-5 bg-gray-700 mx-0.5"></div>

            <button
              onClick={toggleLanguage}
              className="group relative flex-shrink-0"
            >
              <div className="p-1 rounded-full transition-all duration-300 text-gray-400 hover:text-blue-400 hover:scale-110 flex items-center justify-center">
                <span className="text-base sm:text-lg leading-none">{language === 'pt' ? '🇺🇸' : '🇧🇷'}</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
              <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                {language === 'pt' ? 'English' : 'Português'}
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 