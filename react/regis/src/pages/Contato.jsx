import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const Contato = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="mt-8 text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center">
          Contato
        </h1>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
           
            <div className="space-y-6">
              <a href="mailto:seu.email@exemplo.com" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                <MdEmail className="text-blue-400" size={28} />
                <span>seu.email@exemplo.com</span>
              </a>
              <a href="tel:+5500000000000" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                <MdPhone className="text-blue-400" size={28} />
                <span>+55 (00) 00000-0000</span>
              </a>
              <div className="flex items-center space-x-4 text-gray-300">
                <MdLocationOn className="text-blue-400" size={28} />
                <span>Sua Cidade, Estado - País</span>
              </div>
              <div className="flex justify-center space-x-8 pt-6">
                <a
                  href="https://github.com/seuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <FaGithub size={32} />
                </a>
                <a
                  href="https://linkedin.com/in/seuusuario"
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