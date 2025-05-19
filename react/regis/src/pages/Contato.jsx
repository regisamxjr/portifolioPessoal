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
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
            Contato
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 text-white"
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
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 text-white"
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
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 text-white"
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
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 text-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-secondary-600 text-white font-medium rounded-lg hover:bg-secondary-700 transition-colors"
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-secondary-400" size={20} />
                    <span className="text-gray-300">seu.email@exemplo.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-secondary-400" size={20} />
                    <span className="text-gray-300">+55 (00) 00000-0000</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="text-secondary-400" size={20} />
                    <span className="text-gray-300">Sua Cidade, Estado - País</span>
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
                    href="https://github.com/seuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary-400 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/seuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary-400 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://wa.me/seunumero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary-400 transition-colors"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contato 