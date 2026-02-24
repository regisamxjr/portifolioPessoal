import React from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { useLanguage } from '../context/LanguageContext'

const Contato = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center">
          {t('contato')}
        </h1>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
           
            <div className="space-y-6">
              <a href="mailto:seu.email@exemplo.com" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                <MdEmail className="text-blue-400" size={28} />
                <span>{t('email')}</span>
              </a>
              <a href="tel:+5500000000000" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                <MdPhone className="text-blue-400" size={28} />
                <span>{t('phone')}</span>
              </a>
              <div className="flex items-center space-x-4 text-gray-300">
                <MdLocationOn className="text-blue-400" size={28} />
                <span>{t('location')}</span>
              </div>
              
              {/* Botões de Download de Currículo */}
              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">
                  {t('curriculo')}
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/Curriculo .pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FaDownload />
                    <span>{t('downloadCurriculoPT')}</span>
                  </a>
                  <a
                    href="/CurriculumENG.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <FaDownload />
                    <span>{t('downloadCurriculoEN')}</span>
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center space-x-8 pt-6">
                <a
                  href="https://github.com/regisamxjr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <FaGithub size={32} />
                </a>
                <a
                  href="https://www.linkedin.com/in/r%C3%A9gis-j%C3%BAnior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <FaLinkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato 