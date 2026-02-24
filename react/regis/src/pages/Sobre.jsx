import React, { useState, useEffect } from 'react'
import { FaBriefcase, FaCalendarAlt, FaGlobeAmericas, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa'
import fotoPerfil from '../assets/img/fotodeperfil.jpeg'
import intercambio1 from '../assets/img/intercambio1.jpeg'
import intercambio2 from '../assets/img/intercambio2.jpeg'
import intercambio3 from '../assets/img/intercambio3.jpeg'
import intercambio4 from '../assets/img/intercambio4.jpeg'
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



  const exchangeImages = [intercambio1, intercambio2, intercambio3, intercambio4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % exchangeImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-4xl font-bold text-blue-400 text-center mb-16">{t('minhaJornada')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center max-w-5xl mx-auto">
          <div className="w-full flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-500/30">
              <img
                src={fotoPerfil}
                alt="Régis Xavier"
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-gray-300 leading-relaxed text-justify text-lg">
              {t('sobreText')}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16"></div>

        <div className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">{t('competencias')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
              >
                <h3 className="text-lg font-semibold text-gray-200 text-center">{skill}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16"></div>

        <div className="mb-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">{t('experienciaProfissional')}</h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 transform md:-translate-x-1/2"></div>

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
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950 transform md:-translate-x-1/2 z-10"></div>

                    <div
                      className={`w-[calc(100%-3.5rem)] md:w-5/12 ml-14 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                    >
                      <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <FaBriefcase className="text-blue-400 text-xl flex-shrink-0" />
                          <h3 className="text-xl md:text-2xl font-bold text-white">{expData.titulo}</h3>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3 text-gray-300">
                          <FaCalendarAlt className="text-blue-400 flex-shrink-0" />
                          <span className="text-sm font-semibold">{expData.periodo}</span>
                        </div>

                        <p className="text-blue-400 font-semibold mb-3">{expData.empresa}</p>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed text-left md:text-justify">
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

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16"></div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">{t('intercambio')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center max-w-5xl mx-auto">
            <div className="w-full flex justify-center order-1">
              <div className="w-full max-w-[20rem] h-96 md:max-w-none md:w-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg border-4 border-blue-500/30 relative">
                {exchangeImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Intercâmbio ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {exchangeImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-blue-400 w-3' : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5 order-2">
              <div className="text-gray-300 leading-relaxed text-justify text-lg space-y-6">
                <p>
                  O intercâmbio será realizado durante todo o ano de 2026 na cidade de Uppsala, na Suécia, conhecida por ser uma cidade universitária jovem e dinâmica, que abriga uma das instituições mais renomadas da Europa, a Uppsala University. A universidade possui uma excelente infraestrutura e reúne cerca de 50 mil estudantes, criando um ambiente acadêmico internacional e estimulante.
                </p>
                <p>
                  A cidade apresenta clima frio durante grande parte do ano, o que faz parte da experiência cultural sueca. No entanto, durante o verão, Uppsala se torna ainda mais ativa e vibrante, com eventos ao ar livre, atividades esportivas, shows e diversas oportunidades de interação social entre estudantes de diferentes partes do mundo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-16"></div>

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
