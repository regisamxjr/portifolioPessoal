import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contato() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-12">Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulário de Contato */}
          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-6">Envie uma Mensagem</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Mensagem</label>
                <textarea 
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none h-32"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-6">Informações de Contato</h2>
              
              <div className="space-y-4">
                <a 
                  href="mailto:seu@email.com" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-600 transition-colors"
                >
                  <FaEnvelope className="text-xl" />
                  <span>seu@email.com</span>
                </a>
                
                <a 
                  href="https://wa.me/seunumero" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-600 transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>(XX) XXXXX-XXXX</span>
                </a>
                
                <a 
                  href="https://github.com/seuusuario" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-600 transition-colors"
                >
                  <FaGithub className="text-xl" />
                  <span>github.com/seuusuario</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/seuusuario" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-red-600 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                  <span>linkedin.com/in/seuusuario</span>
                </a>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">Disponibilidade</h2>
              <p className="text-gray-300">
                Estou disponível para projetos freelance e oportunidades de trabalho.
                Respondo a todas as mensagens em até 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 