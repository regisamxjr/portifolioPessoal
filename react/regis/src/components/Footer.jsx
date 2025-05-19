import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">
              Seu Nome
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Engenheiro de Software especializado em desenvolvimento full-stack,
              criando soluções inovadoras e escaláveis.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://wa.me/seunumero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/projetos" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: seu@email.com</li>
              <li className="text-gray-400">Telefone: (XX) XXXXX-XXXX</li>
              <li className="text-gray-400">Localização: Sua Cidade, Estado</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Desenvolvido com ❤️ usando React e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 