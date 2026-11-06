import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUser, FaCode, FaEnvelope, FaGlobeAmericas, FaCheck } from 'react-icons/fa'
import { GiTrophy } from 'react-icons/gi'
import { useLanguage } from '../context/LanguageContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const location = useLocation()
  const { t, language, changeLanguage } = useLanguage()
  const langMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isLangOpen) return

    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsLangOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isLangOpen])

  useEffect(() => {
    setIsLangOpen(false)
  }, [location.pathname])

  const menuItems = [
    { path: '/', label: t('home'), icon: FaHome },
    { path: '/sobre', label: t('sobre'), icon: FaUser },
    { path: '/projetos', label: t('projetos'), icon: FaCode },
    { path: '/certificados', label: t('certificados'), icon: GiTrophy },
    { path: '/contato', label: t('contato'), icon: FaEnvelope }
  ]

  const languages = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' }
  ]

  const selectLanguage = (code) => {
    changeLanguage(code)
    setIsLangOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/85 border-b border-blue-400/25 shadow-[0_8px_30px_rgba(0,0,0,0.55)] backdrop-blur-xl'
          : 'bg-gradient-to-b from-black/90 via-black/55 to-transparent border-b border-transparent'
      }`}
    >
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        <div className="flex justify-center items-center">
          <div
            className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full border transition-all duration-300 overflow-x-auto md:overflow-visible max-w-full md:max-w-none scrollbar-hide ${
              isScrolled
                ? 'bg-slate-950/95 border-blue-400/35 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_10px_28px_rgba(15,23,42,0.65)]'
                : 'bg-slate-950/80 border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.45)]'
            }`}
          >
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  className="group relative flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-full"
                >
                  <div
                    className={`relative flex items-center justify-center p-2 sm:p-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-blue-600 shadow-[0_0_18px_rgba(37,99,235,0.55)] scale-105'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="text-base sm:text-lg relative z-10" />
                  </div>

                  <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded-md bg-slate-900 text-blue-100 border border-blue-400/30 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                    {item.label}
                  </div>
                </Link>
              )
            })}

            <div className="w-px h-6 bg-gradient-to-b from-transparent via-blue-300/50 to-transparent mx-1" />

            <div ref={langMenuRef} className="relative flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                aria-label={t('selecionarIdioma')}
                aria-expanded={isLangOpen}
                aria-haspopup="menu"
                className={`flex items-center justify-center p-2 sm:p-2.5 rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  isLangOpen
                    ? 'text-white bg-blue-600 border-blue-400/50 shadow-[0_0_18px_rgba(37,99,235,0.45)]'
                    : 'text-slate-300 border-transparent hover:text-white hover:bg-white/10 hover:border-blue-400/30'
                }`}
              >
                <FaGlobeAmericas className="text-base sm:text-lg" />
              </button>

              {isLangOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[9.5rem] rounded-xl border border-blue-400/30 bg-slate-950/95 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.55)] p-1.5 z-50"
                >
                  {languages.map((lang) => {
                    const isActive = language === lang.code
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        role="menuitem"
                        onClick={() => selectLanguage(lang.code)}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-300 hover:bg-blue-500/15 hover:text-white'
                        }`}
                      >
                        <span>{lang.label}</span>
                        {isActive && <FaCheck className="text-xs" />}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
