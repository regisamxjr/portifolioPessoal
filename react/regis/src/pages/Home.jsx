import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/20 to-black z-0" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
              Desenvolvedor Full Stack
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Transformando ideias em experiências digitais excepcionais através de código limpo e design intuitivo.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://wa.me/seu-numero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary-400 transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
            Tecnologias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Node.js', 'JavaScript', 'TypeScript'].map((skill) => (
              <div
                key={skill}
                className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-secondary-500 transition-colors"
              >
                <h3 className="text-lg font-semibold text-center text-gray-200">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-secondary-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades de colaboração.
          </p>
          <Link
            to="/contato"
            className="inline-block px-8 py-3 rounded-lg bg-secondary-600 text-white font-medium hover:bg-secondary-700 transition-colors"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 