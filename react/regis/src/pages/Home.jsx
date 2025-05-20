import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Régis Xavier
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl animate-fade-in-up delay-200">
                Software Engineer
              </p>
              <div className="flex gap-4 mb-8 animate-fade-in-up delay-200">
                <a
                  href="https://github.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                <Link
                  to="/projetos"
                  className="group px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 hover:scale-105"
                >
                  Ver Projetos
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contato"
                  className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
                >
                  Contato
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in-up delay-100">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-xl relative group hover:scale-105 transition-transform duration-500">
                <img
                  src="src/assets/img/fotoperfil.jpg"
                  alt="Régis Xavier"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-fade-in-up">
            Tecnologias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Node.js', 'JavaScript', 'TypeScript'].map((skill, index) => (
              <div
                key={skill}
                className="group p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-center text-gray-300 group-hover:text-blue-400 transition-colors">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;