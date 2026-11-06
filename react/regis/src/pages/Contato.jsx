import React from 'react'
import { FaGithub, FaLinkedin, FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { useLanguage } from '../context/LanguageContext'

const Contato = () => {
  const { t } = useLanguage()

  const contactItems = [
    {
      href: 'mailto:regisamxjr@gmail.com',
      icon: MdEmail,
      label: t('email'),
      external: false
    },
    {
      href: 'tel:+5551997469270',
      icon: MdPhone,
      label: t('phone'),
      external: false
    },
    {
      href: null,
      icon: MdLocationOn,
      label: t('location'),
      external: false
    }
  ]

  const socialItems = [
    {
      href: 'https://github.com/regisamxjr',
      icon: FaGithub,
      label: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/r%C3%A9gis-j%C3%BAnior/',
      icon: FaLinkedin,
      label: 'LinkedIn'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex items-center justify-center px-4 pt-24 pb-16">
      <div className="relative w-full max-w-xl">
        <div
          className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(37, 99, 235, 0.35), transparent 65%)'
          }}
        />

        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent text-center">
          {t('contato')}
        </h1>

        <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed text-center">
          {t('contatoDescricao')}
        </p>

        <div className="rounded-2xl border border-blue-400/25 bg-slate-950/70 backdrop-blur-md p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          <div className="space-y-3">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-300 group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(37,99,235,0.45)]">
                    <Icon size={22} />
                  </span>
                  <span className="flex-1 text-sm sm:text-base break-all text-slate-200 transition-colors duration-300 group-hover:text-white">
                    {item.label}
                  </span>
                  {item.href && (
                    <FaExternalLinkAlt className="text-xs text-slate-500 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-blue-300" />
                  )}
                </>
              )

              if (!item.href) {
                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3"
                  >
                    {content}
                  </div>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition-all duration-300 hover:border-blue-400/35 hover:bg-blue-500/10 hover:translate-x-1"
                >
                  {content}
                </a>
              )
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center gap-7">
            <a
              href="/CurriculumENG.pdf"
              download="Regis-Xavier-Resume.pdf"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold tracking-wide border border-blue-400/40 shadow-[0_0_28px_rgba(37,99,235,0.45)] transition-all duration-300 hover:bg-blue-500 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(59,130,246,0.65)] hover:border-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <FaDownload className="relative text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
              <span className="relative">{t('downloadCurriculo')}</span>
            </a>

            <div className="w-full">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">
                {t('redesSociais')}
              </p>
              <div className="flex items-center justify-center gap-4">
                {socialItems.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all duration-300 hover:text-white hover:border-blue-400/50 hover:bg-blue-600 hover:scale-110 hover:shadow-[0_0_22px_rgba(37,99,235,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    >
                      <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-slate-900 text-blue-100 border border-blue-400/30 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato
