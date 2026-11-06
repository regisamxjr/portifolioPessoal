import React, { useEffect, useState } from 'react'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import intercambio1 from '../assets/img/intercambio1.webp'
import intercambio2 from '../assets/img/intercambio2.webp'
import intercambio3 from '../assets/img/intercambio3.webp'
import intercambio4 from '../assets/img/intercambio4.webp'
import { useLanguage } from '../context/LanguageContext'

const Sobre = () => {
  const { t } = useLanguage()
  const [exchangeIndex, setExchangeIndex] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)

  const softSkills = [
    t('softSkills.proativo'),
    t('softSkills.colaborativo'),
    t('softSkills.comunicativo'),
    t('softSkills.aprendizado'),
    t('softSkills.dedicacao'),
    t('softSkills.entrega')
  ]

  const exchangeImages = [intercambio1, intercambio2, intercambio3, intercambio4]

  useEffect(() => {
    if (isCarouselPaused) return undefined

    const interval = setInterval(() => {
      setExchangeIndex((prev) => (prev + 1) % exchangeImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isCarouselPaused, exchangeImages.length])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent text-center mb-16">
          {t('minhaJornada')}
        </h1>

        <div className="mb-24 max-w-4xl mx-auto text-center">
          <p className="text-slate-300 leading-relaxed text-lg sm:text-xl md:text-2xl">
            {t('sobreText')}
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16" />

        <div className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-10 text-center">
            {t('competencias')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-md px-4 py-6 sm:py-7 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/45 hover:bg-blue-500/10"
              >
                <h3 className="text-base sm:text-lg font-semibold text-slate-100 text-center">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16" />

        <div className="mb-24 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-12 text-center">
            {t('experienciaProfissional')}
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {[1].map((num, index) => {
                const expData = {
                  titulo: t(`experienciaData.experiencia${num}.titulo`),
                  empresa: t(`experienciaData.experiencia${num}.empresa`),
                  periodo: t(`experienciaData.experiencia${num}.periodo`),
                  descricao: t(`experienciaData.experiencia${num}.descricao`),
                  tecnologias: t(`experienciaData.experiencia${num}.tecnologias`)
                }

                return (
                  <div
                    key={num}
                    className={`relative flex flex-col md:flex-row items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950 transform md:-translate-x-1/2 z-10" />

                    <div
                      className={`w-[calc(100%-3.5rem)] md:w-5/12 ml-14 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                    >
                      <div className="bg-slate-950/70 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/10 hover:border-blue-400/45 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaBriefcase className="text-blue-400 text-xl flex-shrink-0" />
                          <h3 className="text-xl md:text-2xl font-bold text-white">{expData.titulo}</h3>
                        </div>

                        <div className="flex items-center gap-2 mb-3 text-slate-300">
                          <FaCalendarAlt className="text-blue-400 flex-shrink-0" />
                          <span className="text-sm font-semibold">{expData.periodo}</span>
                        </div>

                        <p className="text-blue-300 font-semibold mb-3">{expData.empresa}</p>

                        <p className="text-slate-300 mb-4 leading-relaxed text-left md:text-justify">
                          {expData.descricao}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {expData.tecnologias.split(', ').map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-500/15 text-blue-200 rounded-full text-sm border border-blue-400/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16" />

        <div className="mb-24 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 text-center">
            {t('intercambio')}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-center mb-10">
            {t('intercambioDescricao')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                {exchangeImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${t('intercambioFoto')} ${index + 1}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                      index === exchangeIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10 pointer-events-none" />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {exchangeImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setExchangeIndex(index)}
                    aria-label={`${t('imagemNumero')} ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === exchangeIndex
                        ? 'w-6 bg-blue-400'
                        : 'w-1.5 bg-white/45 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-md p-6 sm:p-8 lg:sticky lg:top-28">
              <div className="text-slate-300 leading-relaxed text-justify text-base sm:text-lg space-y-5">
                <p>{t('intercambioText.p1')}</p>
                <p>{t('intercambioText.p2')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16" />

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-8 text-center">
            {t('mindset')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-950 border border-white/10 hover:border-blue-400/45 transition">
              <iframe
                className="w-full h-64 sm:h-80"
                src="https://www.youtube.com/embed/lxidCLblwwA"
                title="Mindset Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-950 border border-white/10 hover:border-blue-400/45 transition">
              <iframe
                className="w-full h-64 sm:h-80"
                src="https://www.youtube.com/embed/_IzD5ZhoCU4"
                title="Mindset Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre
