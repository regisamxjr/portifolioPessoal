import React from 'react'
import { FaCode, FaDatabase, FaLightbulb, FaTools, FaUsers, FaSeedling, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import fotoPerfil from '../assets/img/fotodeperfil.jpeg'
import { useLanguage } from '../context/LanguageContext'

const Sobre = () => {
  const { t } = useLanguage();

  const softSkills = [
    t('softSkills.proativo'),
    t('softSkills.colaborativo'),
    t('softSkills.comunicativo'),
    t('softSkills.aprendizado'),
    t('softSkills.dedicacao'),
    t('softSkills.entrega')
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-16">{t('minhaJornada')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center max-w-5xl mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src={fotoPerfil}
                alt="Régis Xavier"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-gray-300 leading-relaxed text-justify">
              {t('sobreText')}
            </p>
           
          </div>
        </div>

        <div className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">{t('competencias')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-200 text-center">{skill}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">{t('experienciaProfissional')}</h2>
          
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {[1].map((num, index) => {
                const expData = {
                  titulo: t(`experienciaData.experiencia${num}.titulo`),
                  empresa: t(`experienciaData.experiencia${num}.empresa`),
                  periodo: t(`experienciaData.experiencia${num}.periodo`),
                  descricao: t(`experienciaData.experiencia${num}.descricao`),
                  tecnologias: t(`experienciaData.experiencia${num}.tecnologias`)
                };

                return (
                  <div
                    key={num}
                    className={`relative flex flex-col md:flex-row items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950 transform md:-translate-x-1/2 z-10"></div>

                    <div
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                    >
                      <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaBriefcase className="text-blue-400 text-xl" />
                          <h3 className="text-2xl font-bold text-white">{expData.titulo}</h3>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3 text-gray-300">
                          <FaCalendarAlt className="text-blue-400" />
                          <span className="text-sm font-semibold">{expData.periodo}</span>
                        </div>

                        <p className="text-blue-400 font-semibold mb-3">{expData.empresa}</p>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed text-justify">
                          {expData.descricao}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {expData.tecnologias.split(', ').map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">{t('mindset')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800 hover:border-blue-500 transition">
              <iframe
                className="w-full h-64 sm:h-80"
                src="https://www.youtube.com/embed/lxidCLblwwA"
                title="Mindset Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800 hover:border-blue-500 transition">
              <iframe
                className="w-full h-64 sm:h-80"
                src="https://www.youtube.com/embed/_IzD5ZhoCU4"
                title="Mindset Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sobre
