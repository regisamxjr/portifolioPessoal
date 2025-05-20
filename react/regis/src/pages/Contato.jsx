import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', formData)
    // Aqui você pode adicionar a lógica para enviar o formulário
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="mt-8 text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent text-center">
          Contato
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Formulário de Contato */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
              <h2 className="text-xl font-semibold text-gray-200 mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <a href="mailto:seu.email@exemplo.com" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                  <FaEnvelope className="text-blue-400" size={20} />
                  <span>seu.email@exemplo.com</span>
                </a>
                <a href="tel:+5500000000000" className="flex items-center space-x-4 text-gray-300 hover:text-blue-400 transition-colors">
                  <FaPhone className="text-blue-400" size={20} />
                  <span>+55 (00) 00000-0000</span>
                </a>
                <div className="flex items-center space-x-4 text-gray-300">
                  <FaMapMarkerAlt className="text-blue-400" size={20} />
                  <span>Sua Cidade, Estado - País</span>
                </div>
                <div className="flex space-x-6 pt-4">
                  <a
                    href="https://github.com/seuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/seuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
              <h2 className="text-xl font-semibold text-gray-200 mb-6">
                Horário de Atendimento
              </h2>
              <div className="space-y-2">
                <p className="text-gray-300">Segunda a Sexta: 9h às 18h</p>
                <p className="text-gray-300">Sábado: 9h às 13h</p>
                <p className="text-gray-300">Domingo: Fechado</p>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
              <h2 className="text-xl font-semibold text-gray-200 mb-6">
                Redes Sociais
              </h2>
              <div className="flex space-x-6">
                <a
                  href="https://wa.me/seunumero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FaWhatsapp size={24} />
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